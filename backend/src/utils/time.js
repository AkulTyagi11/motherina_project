import { DateTime } from 'luxon';

export const DEFAULT_TIMEZONE = process.env.APP_TIMEZONE || 'Asia/Kolkata';

export function getAppTimezone(timezone = DEFAULT_TIMEZONE) {
  return timezone || DEFAULT_TIMEZONE;
}

export function getUtcRangeForLocalDate(date, timezone = DEFAULT_TIMEZONE) {
  const zone = getAppTimezone(timezone);
  const start = DateTime.fromISO(date, { zone }).startOf('day');
  if (!start.isValid) {
    throw new Error('Invalid date');
  }

  return {
    start: start.toUTC().toJSDate(),
    end: start.endOf('day').toUTC().toJSDate(),
  };
}

export function toLocalDateString(value, timezone = DEFAULT_TIMEZONE) {
  return DateTime.fromJSDate(new Date(value), { zone: 'utc' }).setZone(getAppTimezone(timezone)).toISODate();
}

export function localDateTimeToUtc(date, time, timezone = DEFAULT_TIMEZONE) {
  const value = DateTime.fromISO(`${date}T${time}`, { zone: getAppTimezone(timezone) });
  if (!value.isValid) {
    throw new Error('Invalid local date/time');
  }
  return value.toUTC().toJSDate();
}

export function parseInputDateTime(value, fallbackDate, timezone = DEFAULT_TIMEZONE) {
  if (/^\d{2}:\d{2}$/.test(value)) {
    return localDateTimeToUtc(fallbackDate, value, timezone);
  }

  const parsed = DateTime.fromISO(value, { setZone: true });
  if (!parsed.isValid) {
    throw new Error('Invalid date/time');
  }
  return parsed.toUTC().toJSDate();
}

export function localDateToUtcStart(date, timezone = DEFAULT_TIMEZONE) {
  return getUtcRangeForLocalDate(date, timezone).start;
}

export function minutesBetween(start, end) {
  return Math.round((new Date(end).getTime() - new Date(start).getTime()) / 60000);
}
