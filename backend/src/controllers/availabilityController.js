import Availability from '../models/Availability.js';
import Appointment from '../models/Appointment.js';
import { generateSlots } from '../utils/slotGenerator.js';

export async function createAvailability(req, res, next) {
  try {
    const body = req.body;
    const availability = await Availability.create(body);
    res.status(201).json(availability);
  } catch (e) {
    next(e);
  }
}

export async function listAvailability(req, res, next) {
  try {
    const { date } = req.query;
    let query = {};
    if (date) {
      const d = new Date(date);
      const start = new Date(d); start.setUTCHours(0,0,0,0);
      const end = new Date(d); end.setUTCHours(23,59,59,999);
      query = { startTime: { $lte: end }, endTime: { $gte: start } };
    }
    const items = await Availability.find(query).sort({ startTime: 1 });
    res.json(items);
  } catch (e) {
    next(e);
  }
}

export async function getSlots(req, res, next) {
  try {
    const { date } = req.query;
    if (!date) return res.status(400).json({ error: 'date query required YYYY-MM-DD' });
    const d = new Date(date);
    const start = new Date(d); start.setUTCHours(0,0,0,0);
    const end = new Date(d); end.setUTCHours(23,59,59,999);
    const availabilities = await Availability.find({ startTime: { $lte: end }, endTime: { $gte: start }, isActive: true });
    const appointments = await Appointment.find({ startTime: { $gte: start }, endTime: { $lte: end }, status: { $ne: 'cancelled' } });
    const slots = generateSlots({ date, availabilities, appointments });
    res.json(slots);
  } catch (e) {
    next(e);
  }
}
