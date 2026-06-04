import { google } from 'googleapis';

function getCalendarClient() {
  if (!process.env.GOOGLE_CLIENT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY || !process.env.GOOGLE_CALENDAR_ID) {
    return null;
  }

  const auth = new google.auth.JWT({
    email: process.env.GOOGLE_CLIENT_EMAIL,
    key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    scopes: ['https://www.googleapis.com/auth/calendar.events']
  });

  return google.calendar({ version: 'v3', auth });
}

export async function createCalendarEvent(appointment) {
  const calendar = getCalendarClient();
  if (!calendar) return null;

  try {
    const event = {
      summary: `Appointment: ${appointment.clientName}`,
      description: [
        appointment.serviceType ? `Service: ${appointment.serviceType}` : null,
        appointment.clientEmail ? `Email: ${appointment.clientEmail}` : null,
        appointment.clientPhone ? `Phone: ${appointment.clientPhone}` : null,
        appointment.notes ? `Notes: ${appointment.notes}` : null,
      ].filter(Boolean).join('\n'),
      start: { dateTime: new Date(appointment.startTime).toISOString() },
      end: { dateTime: new Date(appointment.endTime).toISOString() }
    };
    const { data } = await calendar.events.insert({ calendarId: process.env.GOOGLE_CALENDAR_ID, requestBody: event });
    return data.id || null;
  } catch (e) {
    return null;
  }
}

export async function deleteCalendarEvent(eventId) {
  const calendar = getCalendarClient();
  if (!calendar || !eventId) return false;

  try {
    await calendar.events.delete({
      calendarId: process.env.GOOGLE_CALENDAR_ID,
      eventId,
    });
    return true;
  } catch (error) {
    console.error('Google Calendar delete failed', error.message);
    return false;
  }
}
