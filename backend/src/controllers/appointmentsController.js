import Appointment from '../models/Appointment.js';
import { sendBookingEmails, sendCancellationEmails } from '../services/emailService.js';
import { DEFAULT_TIMEZONE, getUtcRangeForLocalDate } from '../utils/time.js';

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

// Webhook receiver for Cal.com
export async function calcomWebhook(req, res, next) {
  try {
    const event = req.body;
    
    if (event.triggerEvent === 'BOOKING_CREATED') {
      const payload = event.payload;
      
      const attendee = payload.attendees?.[0] || {};
      const clientName = attendee.name || 'Anonymous Patient';
      const clientEmail = attendee.email || '';
      const clientPhone = payload.responses?.phone || payload.responses?.['attendeePhoneNumber'] || attendee.phone || '';
      const serviceType = payload.title || payload.eventTitle || payload.type || 'Maternal Consultation';
      const notes = payload.responses?.notes || payload.description || '';

      const appointment = await Appointment.create({
        clientName,
        clientEmail,
        clientPhone,
        serviceType,
        notes,
        startTime: new Date(payload.startTime),
        endTime: new Date(payload.endTime),
        status: 'confirmed',
        source: 'calcom',
        googleCalendarEventId: payload.uid
      });
      
      await sendBookingEmails(appointment);
    } else if (event.triggerEvent === 'BOOKING_RESCHEDULED') {
      const payload = event.payload;
      const appt = await Appointment.findOne({ googleCalendarEventId: payload.uid });
      if (appt) {
        appt.startTime = new Date(payload.startTime);
        appt.endTime = new Date(payload.endTime);
        appt.status = 'confirmed';
        await appt.save();
      }
    } else if (event.triggerEvent === 'BOOKING_CANCELLED') {
      const payload = event.payload;
      const appt = await Appointment.findOne({ googleCalendarEventId: payload.uid });
      if (appt) {
        appt.status = 'cancelled';
        await appt.save();
        await sendCancellationEmails(appt);
      }
    }

    res.status(200).json({ received: true });
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

    await sendCancellationEmails(appt);
    res.json(appt);
  } catch (e) {
    next(e);
  }
}
