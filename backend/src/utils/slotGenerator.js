import { RRule, rrulestr } from 'rrule';
import { DateTime } from 'luxon';
import { DEFAULT_TIMEZONE, getUtcRangeForLocalDate, minutesBetween } from './time.js';

const WEEKDAY_MAP = {
  MO: RRule.MO,
  TU: RRule.TU,
  WE: RRule.WE,
  TH: RRule.TH,
  FR: RRule.FR,
  SA: RRule.SA,
  SU: RRule.SU,
};

function floatingDateFromLocal(localDateTime) {
  return new Date(Date.UTC(
    localDateTime.year,
    localDateTime.month - 1,
    localDateTime.day,
    localDateTime.hour,
    localDateTime.minute,
    localDateTime.second,
    localDateTime.millisecond
  ));
}

function parseFrequency(rule) {
  const match = String(rule || '').match(/(?:^|;)FREQ=([^;]+)/);
  return match ? match[1] : null;
}

function parseByDay(rule) {
  const match = String(rule || '').match(/(?:^|;)BYDAY=([^;]+)/);
  if (!match) return undefined;
  return match[1].split(',').map((day) => WEEKDAY_MAP[day]).filter(Boolean);
}

function buildRule(availability, timezone) {
  const localStart = DateTime.fromJSDate(new Date(availability.startTime), { zone: 'utc' }).setZone(timezone);
  const targetStart = localStart.startOf('day');
  const options = {
    dtstart: floatingDateFromLocal(targetStart),
  };

  const ruleText = String(availability.recurrenceRule || '').trim();
  const frequency = parseFrequency(ruleText);
  if (!frequency) {
    return null;
  }

  options.freq = frequency === 'MONTHLY' ? RRule.MONTHLY : RRule.WEEKLY;
  const byweekday = parseByDay(ruleText);
  if (byweekday?.length) {
    options.byweekday = byweekday;
  }

  if (availability.recurrenceEndDate) {
    const untilLocal = DateTime.fromJSDate(new Date(availability.recurrenceEndDate), { zone: 'utc' })
      .setZone(timezone)
      .endOf('day');
    options.until = floatingDateFromLocal(untilLocal);
  } else {
    try {
      const parsed = rrulestr(ruleText, { dtstart: options.dtstart });
      if (parsed.options.until) {
        options.until = parsed.options.until;
      }
      if (parsed.options.count) {
        options.count = parsed.options.count;
      }
    } catch {
      // Keep the minimal parsed rule above when optional RRULE parts are not needed.
    }
  }

  return new RRule(options);
}

function hasExceptionOnDate(availability, date, timezone) {
  return (availability.exceptions || []).some((exception) => {
    const exceptionDate = DateTime.fromJSDate(new Date(exception), { zone: 'utc' }).setZone(timezone).toISODate();
    return exceptionDate === date;
  });
}

function getWindowForAvailability(availability, date, timezone) {
  const localStart = DateTime.fromJSDate(new Date(availability.startTime), { zone: 'utc' }).setZone(timezone);
  const localEnd = DateTime.fromJSDate(new Date(availability.endTime), { zone: 'utc' }).setZone(timezone);

  if (availability.isRecurring) {
    if (!availability.recurrenceRule || hasExceptionOnDate(availability, date, timezone)) {
      return null;
    }

    const rule = buildRule(availability, timezone);
    if (!rule) return null;

    const target = DateTime.fromISO(date, { zone: timezone }).startOf('day');
    const targetFloatingStart = floatingDateFromLocal(target);
    const targetFloatingEnd = floatingDateFromLocal(target.endOf('day'));
    const occurs = rule.between(targetFloatingStart, targetFloatingEnd, true).length > 0;
    if (!occurs) return null;

    const start = DateTime.fromISO(date, { zone: timezone }).set({
      hour: localStart.hour,
      minute: localStart.minute,
      second: 0,
      millisecond: 0,
    });
    return {
      start: start.toUTC().toJSDate(),
      end: start.plus({ minutes: minutesBetween(availability.startTime, availability.endTime) }).toUTC().toJSDate(),
    };
  }

  const { start: dayStart, end: dayEnd } = getUtcRangeForLocalDate(date, timezone);
  const start = new Date(availability.startTime);
  const end = new Date(availability.endTime);
  if (start > dayEnd || end < dayStart || hasExceptionOnDate(availability, date, timezone)) {
    return null;
  }

  return {
    start: new Date(Math.max(start.getTime(), dayStart.getTime())),
    end: new Date(Math.min(end.getTime(), dayEnd.getTime())),
  };
}

export function generateSlots({ date, availabilities, appointments, timezone = DEFAULT_TIMEZONE, now = new Date() }) {
  const booked = appointments.map((ap) => ({ start: new Date(ap.startTime), end: new Date(ap.endTime) }));
  const slots = [];

  for (const availability of availabilities.filter((item) => item.isActive !== false)) {
    const zone = availability.timezone || timezone;
    const window = getWindowForAvailability(availability, date, zone);
    if (!window) continue;

    const duration = availability.slotDurationMinutes || 30;
    let cursor = new Date(window.start);
    while (cursor < window.end) {
      const slotEnd = new Date(cursor.getTime() + duration * 60000);
      if (slotEnd > window.end) break;
      if (slotEnd <= now) {
        cursor = slotEnd;
        continue;
      }

      const overlaps = booked.some((booking) => !(slotEnd <= booking.start || cursor >= booking.end));
      if (!overlaps) {
        slots.push({ start: new Date(cursor), end: slotEnd });
      }
      cursor = slotEnd;
    }
  }

  slots.sort((left, right) => left.start - right.start);
  return slots;
}
