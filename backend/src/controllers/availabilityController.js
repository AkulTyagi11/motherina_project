import Availability from '../models/Availability.js';
import Appointment from '../models/Appointment.js';
import { generateSlots } from '../utils/slotGenerator.js';
import {
  DEFAULT_TIMEZONE,
  getUtcRangeForLocalDate,
  localDateToUtcStart,
  parseInputDateTime,
  toLocalDateString,
} from '../utils/time.js';

function normalizeAvailabilityPayload(body, existing = null) {
  const timezone = body.timezone || existing?.timezone || DEFAULT_TIMEZONE;
  const date = body.date || (existing ? toLocalDateString(existing.date, timezone) : undefined);
  const payload = {};

  if (body.practitionerId !== undefined) payload.practitionerId = body.practitionerId || undefined;
  if (body.slotDurationMinutes !== undefined) payload.slotDurationMinutes = body.slotDurationMinutes;
  if (body.isRecurring !== undefined) payload.isRecurring = body.isRecurring;
  if (body.recurrenceRule !== undefined) payload.recurrenceRule = body.recurrenceRule || undefined;
  if (body.isActive !== undefined) payload.isActive = body.isActive;
  payload.timezone = timezone;

  if (date) {
    payload.date = localDateToUtcStart(date, timezone);
  }

  if (body.startTime !== undefined) {
    payload.startTime = parseInputDateTime(body.startTime, date, timezone);
  }

  if (body.endTime !== undefined) {
    payload.endTime = parseInputDateTime(body.endTime, date, timezone);
  }

  if (body.recurrenceEndDate !== undefined) {
    payload.recurrenceEndDate = body.recurrenceEndDate
      ? localDateToUtcStart(body.recurrenceEndDate, timezone)
      : undefined;
  }

  if (body.exceptions !== undefined) {
    payload.exceptions = (body.exceptions || []).map((exceptionDate) => localDateToUtcStart(exceptionDate, timezone));
  }

  if (payload.isRecurring === false) {
    payload.recurrenceRule = undefined;
    payload.recurrenceEndDate = undefined;
  }

  return payload;
}

export function buildAvailabilityQueryForDate(date, timezone = DEFAULT_TIMEZONE) {
  const { start, end } = getUtcRangeForLocalDate(date, timezone);
  return {
    isActive: true,
    $or: [
      { isRecurring: false, startTime: { $lte: end }, endTime: { $gte: start } },
      {
        isRecurring: true,
        startTime: { $lte: end },
        $or: [
          { recurrenceEndDate: { $exists: false } },
          { recurrenceEndDate: null },
          { recurrenceEndDate: { $gte: start } },
        ],
      },
    ],
  };
}

export async function createAvailability(req, res, next) {
  try {
    const availability = await Availability.create(normalizeAvailabilityPayload(req.body));
    res.status(201).json(availability);
  } catch (e) {
    next(e);
  }
}

export async function listAvailability(req, res, next) {
  try {
    const { date, includeInactive } = req.query;
    let query = {};
    if (date) {
      query = buildAvailabilityQueryForDate(date, process.env.APP_TIMEZONE || DEFAULT_TIMEZONE);
      if (includeInactive === 'true') delete query.isActive;
    } else if (includeInactive !== 'true') {
      query.isActive = true;
    }
    const items = await Availability.find(query).sort({ startTime: 1 });
    res.json(items);
  } catch (e) {
    next(e);
  }
}

export async function updateAvailability(req, res, next) {
  try {
    const item = await Availability.findById(req.params.id);
    if (!item) return res.status(404).json({ error: 'Availability not found' });

    item.set(normalizeAvailabilityPayload(req.body, item));
    await item.save();
    res.json(item);
  } catch (e) {
    next(e);
  }
}

export async function deactivateAvailability(req, res, next) {
  try {
    const item = await Availability.findByIdAndUpdate(
      req.params.id,
      { isActive: false },
      { new: true }
    );
    if (!item) return res.status(404).json({ error: 'Availability not found' });
    res.json(item);
  } catch (e) {
    next(e);
  }
}

export async function getSlots(req, res, next) {
  try {
    const { date } = req.query;
    const timezone = process.env.APP_TIMEZONE || DEFAULT_TIMEZONE;
    const { start, end } = getUtcRangeForLocalDate(date, timezone);
    const availabilities = await Availability.find(buildAvailabilityQueryForDate(date, timezone));
    const appointments = await Appointment.find({
      startTime: { $lt: end },
      endTime: { $gt: start },
      status: { $ne: 'cancelled' },
    });
    const slots = generateSlots({ date, availabilities, appointments, timezone });
    res.json(slots);
  } catch (e) {
    next(e);
  }
}
