import Appointment from '../models/Appointment.js';
import Availability from '../models/Availability.js';
import { generateSlots } from '../utils/slotGenerator.js';
import { createCalendarEvent, deleteCalendarEvent } from '../services/googleCalendarService.js';
import { sendBookingEmails, sendCancellationEmails } from '../services/emailService.js';
import { buildAvailabilityQueryForDate } from './availabilityController.js';
import { DEFAULT_TIMEZONE, getUtcRangeForLocalDate, toLocalDateString } from '../utils/time.js';

export async function listAppointments(req, res, next) {
  try {
    const { date, status } = req.query;
    let query = {};
    if (date) {
      const { start, end } = getUtcRangeForLocalDate(date, process.env.APP_TIMEZONE || DEFAULT_TIMEZONE);
      query = { startTime: { $lt: end }, endTime: { $gt: start } };
    }
    if (status) query.status = status;
    const items = await Appointment.find(query).sort({ startTime: 1 });
    res.json(items);
  } catch (e) {
    next(e);
  }
}

export async function createAppointment(req, res, next) {
  try {
    const { clientName, clientEmail, clientPhone, serviceType, notes, startTime, endTime } = req.body;

    const start = new Date(startTime);
    const end = new Date(endTime);
    if (!(start < end)) return res.status(400).json({ error: 'Invalid time range' });

    const timezone = process.env.APP_TIMEZONE || DEFAULT_TIMEZONE;
    const dayDate = toLocalDateString(start, timezone);
    const { start: dayStart, end: dayEnd } = getUtcRangeForLocalDate(dayDate, timezone);
    const availabilities = await Availability.find(buildAvailabilityQueryForDate(dayDate, timezone));
    const appointments = await Appointment.find({
      startTime: { $lt: dayEnd },
      endTime: { $gt: dayStart },
      status: { $ne: 'cancelled' },
    });
    const slots = generateSlots({ date: dayDate, availabilities, appointments, timezone });
    const isSlotValid = slots.some(s => s.start.getTime() === start.getTime() && s.end.getTime() === end.getTime());
    if (!isSlotValid) return res.status(409).json({ error: 'Slot no longer available' });

    const conflictingAppointment = await Appointment.findOne({
      startTime: { $lt: end },
      endTime: { $gt: start },
      status: { $ne: 'cancelled' },
    });
    if (conflictingAppointment) return res.status(409).json({ error: 'Slot no longer available' });

    const appointment = await Appointment.create({ clientName, clientEmail, clientPhone, serviceType, notes, startTime: start, endTime: end, status: 'confirmed', source: 'web' });

    if (process.env.GOOGLE_CALENDAR_ENABLED === 'true') {
      try {
        const eventId = await createCalendarEvent(appointment);
        if (eventId) {
          appointment.googleCalendarEventId = eventId;
          await appointment.save();
        }
      } catch (e) {
        console.error('Google Calendar sync failed', e.message);
      }
    }

    await sendBookingEmails(appointment);
    res.status(201).json(appointment);
  } catch (e) {
    next(e);
  }
}

export async function cancelAppointment(req, res, next) {
  try {
    const { id } = req.params;
    const appt = await Appointment.findById(id);
    if (!appt) return res.status(404).json({ error: 'Not found' });
    appt.status = 'cancelled';
    await appt.save();

    if (process.env.GOOGLE_CALENDAR_ENABLED === 'true' && appt.googleCalendarEventId) {
      await deleteCalendarEvent(appt.googleCalendarEventId);
    }

    await sendCancellationEmails(appt);
    res.json(appt);
  } catch (e) {
    next(e);
  }
}
