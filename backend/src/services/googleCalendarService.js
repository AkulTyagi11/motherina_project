import { google } from 'googleapis';

export async function createCalendarEvent(appointment) {
  if (!process.env.GOOGLE_CLIENT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY || !process.env.GOOGLE_CALENDAR_ID) return null;
  try {
    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_CLIENT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/calendar.events']
    });
    const calendar = google.calendar({ version: 'v3', auth });
    const event = {
      summary: `Appointment: ${appointment.clientName}`,
      description: appointment.notes || '',
      start: { dateTime: new Date(appointment.startTime).toISOString() },
      end: { dateTime: new Date(appointment.endTime).toISOString() }
    };
    const { data } = await calendar.events.insert({ calendarId: process.env.GOOGLE_CALENDAR_ID, requestBody: event });
    return data.id || null;
  } catch (e) {
    return null;
  }
}
