import nodemailer from 'nodemailer';
import { DateTime } from 'luxon';
import { DEFAULT_TIMEZONE } from '../utils/time.js';

function createTransporter() {
  if (!process.env.SMTP_HOST) {
    return null;
  }

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: process.env.SMTP_USER
      ? {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        }
      : undefined,
  });
}

function formatAppointmentTime(appointment) {
  const timezone = process.env.APP_TIMEZONE || DEFAULT_TIMEZONE;
  return DateTime.fromJSDate(new Date(appointment.startTime), { zone: 'utc' })
    .setZone(timezone)
    .toFormat("cccc, dd LLL yyyy 'at' h:mm a");
}

async function safeSend(message) {
  const transporter = createTransporter();
  if (!transporter) {
    console.warn(`Email skipped: SMTP_HOST is not configured. Intended recipient: ${message.to}`);
    return false;
  }

  await transporter.sendMail({
    from: process.env.SMTP_FROM || 'Motherina <no-reply@motherina.local>',
    ...message,
  });
  return true;
}

export async function sendBookingEmails(appointment) {
  const clinicEmail = process.env.CLINIC_NOTIFICATION_EMAIL;
  const time = formatAppointmentTime(appointment);

  try {
    await safeSend({
      to: appointment.clientEmail,
      subject: 'Your Motherina appointment is confirmed',
      text: `Hi ${appointment.clientName},\n\nYour appointment is confirmed for ${time}.\n\nService: ${appointment.serviceType || 'Appointment'}\n\nThank you,\nMotherina`,
    });

    if (clinicEmail) {
      await safeSend({
        to: clinicEmail,
        subject: 'New Motherina appointment booked',
        text: `New appointment booked:\n\nClient: ${appointment.clientName}\nEmail: ${appointment.clientEmail}\nPhone: ${appointment.clientPhone || '-'}\nService: ${appointment.serviceType || '-'}\nTime: ${time}\nNotes: ${appointment.notes || '-'}`,
      });
    }
  } catch (error) {
    console.error('Booking email failed', error.message);
  }
}

export async function sendCancellationEmails(appointment) {
  const clinicEmail = process.env.CLINIC_NOTIFICATION_EMAIL;
  const time = formatAppointmentTime(appointment);

  try {
    await safeSend({
      to: appointment.clientEmail,
      subject: 'Your Motherina appointment was cancelled',
      text: `Hi ${appointment.clientName},\n\nYour appointment scheduled for ${time} has been cancelled.\n\nThank you,\nMotherina`,
    });

    if (clinicEmail) {
      await safeSend({
        to: clinicEmail,
        subject: 'Motherina appointment cancelled',
        text: `Cancelled appointment:\n\nClient: ${appointment.clientName}\nEmail: ${appointment.clientEmail}\nTime: ${time}`,
      });
    }
  } catch (error) {
    console.error('Cancellation email failed', error.message);
  }
}
