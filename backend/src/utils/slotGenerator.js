export function generateSlots({ date, availabilities, appointments, timezone = 'UTC' }) {
  const dayStart = new Date(date);
  dayStart.setUTCHours(0, 0, 0, 0);
  const dayEnd = new Date(dayStart);
  dayEnd.setUTCHours(23, 59, 59, 999);

  const dayAvailabilities = availabilities.filter(a => {
    const aStart = new Date(a.startTime);
    const aEnd = new Date(a.endTime);
    return aStart <= dayEnd && aEnd >= dayStart;
  });

  const booked = appointments.map(ap => ({ start: new Date(ap.startTime), end: new Date(ap.endTime) }));

  const slots = [];
  const now = new Date();

  for (const a of dayAvailabilities) {
    const aStart = new Date(a.startTime);
    const aEnd = new Date(a.endTime);
    const duration = a.slotDurationMinutes || 30;

    let cursor = new Date(Math.max(aStart.getTime(), dayStart.getTime()));
    while (cursor < aEnd) {
      const slotEnd = new Date(cursor.getTime() + duration * 60000);
      if (slotEnd > aEnd) break;
      if (slotEnd <= now) {
        cursor = slotEnd;
        continue;
      }
      const overlaps = booked.some(b => !(slotEnd <= b.start || cursor >= b.end));
      if (!overlaps) {
        slots.push({ start: new Date(cursor), end: slotEnd });
      }
      cursor = slotEnd;
    }
  }

  slots.sort((s1, s2) => s1.start - s2.start);
  return slots;
}
