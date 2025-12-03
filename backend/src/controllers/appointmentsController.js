import Appointment from '../models/Appointment.js';
import Availability from '../models/Availability.js';
import { generateSlots } from '../utils/slotGenerator.js';
import { createCalendarEvent } from '../services/googleCalendarService.js';

export async function listAppointments(req, res, next) {
  try {
    const { date } = req.query;
    let query = {};
    if (date) {
      const d = new Date(date);
      const start = new Date(d); start.setUTCHours(0,0,0,0);
      const end = new Date(d); end.setUTCHours(23,59,59,999);
      query = { startTime: { $gte: start }, endTime: { $lte: end } };
    }
    const items = await Appointment.find(query).sort({ startTime: 1 });
    res.json(items);
  } catch (e) {
    next(e);
  }
}

export async function createAppointment(req, res, next) {
  try {
    const { clientName, clientEmail, clientPhone, serviceType, notes, startTime, endTime } = req.body;
    if (!clientName || !clientEmail || !startTime || !endTime) return res.status(400).json({ error: 'Missing required fields' });

    const start = new Date(startTime);
    const end = new Date(endTime);
    if (!(start < end)) return res.status(400).json({ error: 'Invalid time range' });

    const dayDate = start.toISOString().substring(0,10);
    const availabilities = await Availability.find({ startTime: { $lte: end }, endTime: { $gte: start }, isActive: true });
    const appointments = await Appointment.find({ startTime: { $gte: new Date(start.getFullYear(), start.getMonth(), start.getDate()), $lte: new Date(start.getFullYear(), start.getMonth(), start.getDate(), 23,59,59,999) }, status: { $ne: 'cancelled' } });
    const slots = generateSlots({ date: dayDate, availabilities, appointments });
    const isSlotValid = slots.some(s => s.start.getTime() === start.getTime() && s.end.getTime() === end.getTime());
    if (!isSlotValid) return res.status(409).json({ error: 'Slot no longer available' });

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
    res.json(appt);
  } catch (e) {
    next(e);
  }
}
