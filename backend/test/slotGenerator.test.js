import { describe, expect, it } from 'vitest';
import { generateSlots } from '../src/utils/slotGenerator.js';
import { localDateTimeToUtc, localDateToUtcStart } from '../src/utils/time.js';

const timezone = 'Asia/Kolkata';

function availability(overrides = {}) {
  return {
    startTime: localDateTimeToUtc('2026-06-08', '09:00', timezone),
    endTime: localDateTimeToUtc('2026-06-08', '10:00', timezone),
    date: localDateToUtcStart('2026-06-08', timezone),
    slotDurationMinutes: 30,
    timezone,
    isActive: true,
    isRecurring: false,
    exceptions: [],
    ...overrides,
  };
}

describe('generateSlots', () => {
  it('generates one-time slots for a local date', () => {
    const slots = generateSlots({
      date: '2026-06-08',
      availabilities: [availability()],
      appointments: [],
      timezone,
      now: new Date('2026-06-01T00:00:00.000Z'),
    });

    expect(slots).toHaveLength(2);
    expect(slots[0].start.toISOString()).toBe('2026-06-08T03:30:00.000Z');
    expect(slots[1].start.toISOString()).toBe('2026-06-08T04:00:00.000Z');
  });

  it('generates weekly recurring slots on matching weekdays', () => {
    const slots = generateSlots({
      date: '2026-06-15',
      availabilities: [
        availability({
          isRecurring: true,
          recurrenceRule: 'FREQ=WEEKLY;BYDAY=MO',
        }),
      ],
      appointments: [],
      timezone,
      now: new Date('2026-06-01T00:00:00.000Z'),
    });

    expect(slots).toHaveLength(2);
    expect(slots[0].start.toISOString()).toBe('2026-06-15T03:30:00.000Z');
  });

  it('skips recurring slots on exception dates', () => {
    const slots = generateSlots({
      date: '2026-06-15',
      availabilities: [
        availability({
          isRecurring: true,
          recurrenceRule: 'FREQ=WEEKLY;BYDAY=MO',
          exceptions: [localDateToUtcStart('2026-06-15', timezone)],
        }),
      ],
      appointments: [],
      timezone,
      now: new Date('2026-06-01T00:00:00.000Z'),
    });

    expect(slots).toHaveLength(0);
  });

  it('excludes booked slots', () => {
    const slots = generateSlots({
      date: '2026-06-08',
      availabilities: [availability()],
      appointments: [
        {
          startTime: localDateTimeToUtc('2026-06-08', '09:00', timezone),
          endTime: localDateTimeToUtc('2026-06-08', '09:30', timezone),
        },
      ],
      timezone,
      now: new Date('2026-06-01T00:00:00.000Z'),
    });

    expect(slots).toHaveLength(1);
    expect(slots[0].start.toISOString()).toBe('2026-06-08T04:00:00.000Z');
  });

  it('filters past slots', () => {
    const slots = generateSlots({
      date: '2026-06-08',
      availabilities: [availability()],
      appointments: [],
      timezone,
      now: localDateTimeToUtc('2026-06-08', '09:30', timezone),
    });

    expect(slots).toHaveLength(1);
    expect(slots[0].start.toISOString()).toBe('2026-06-08T04:00:00.000Z');
  });
});
