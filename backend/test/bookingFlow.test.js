import mongoose from 'mongoose';
import request from 'supertest';
import { afterAll, beforeAll, beforeEach, describe, expect, it } from 'vitest';
import { MongoMemoryServer } from 'mongodb-memory-server';
import app from '../src/app.js';
import AdminUser from '../src/models/AdminUser.js';
import Appointment from '../src/models/Appointment.js';
import { bootstrapAdminUser } from '../src/services/bootstrapAdmin.js';

let mongo;
let adminToken;

async function loginAdmin() {
  const response = await request(app)
    .post('/api/auth/login')
    .send({ email: process.env.ADMIN_EMAIL, password: process.env.ADMIN_PASSWORD })
    .expect(200);
  return response.body.token;
}

beforeAll(async () => {
  mongo = await MongoMemoryServer.create();
  await mongoose.connect(mongo.getUri());
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongo.stop();
});

beforeEach(async () => {
  await mongoose.connection.db.dropDatabase();
  await bootstrapAdminUser();
  adminToken = await loginAdmin();
});

describe('booking flow', () => {
  it('serves health checks', async () => {
    const response = await request(app).get('/api/health').expect(200);
    expect(response.body.ok).toBe(true);
  });

  it('creates slots, books one, rejects double booking, then frees it on admin cancellation', async () => {
    await request(app)
      .post('/api/admin/availability')
      .set('Authorization', `Bearer ${adminToken}`)
      .send({
        date: '2026-06-08',
        startTime: '09:00',
        endTime: '10:00',
        slotDurationMinutes: 30,
      })
      .expect(201);

    const slotResponse = await request(app)
      .get('/api/availability/slots?date=2026-06-08')
      .expect(200);

    expect(slotResponse.body).toHaveLength(2);
    const [slot] = slotResponse.body;

    const bookingResponse = await request(app)
      .post('/api/appointments')
      .send({
        clientName: 'Test Client',
        clientEmail: 'client@example.com',
        clientPhone: '+919999999999',
        serviceType: 'Initial Consultation',
        notes: '',
        startTime: slot.start,
        endTime: slot.end,
      })
      .expect(201);

    await request(app)
      .post('/api/appointments')
      .send({
        clientName: 'Second Client',
        clientEmail: 'second@example.com',
        clientPhone: '+918888888888',
        serviceType: 'Initial Consultation',
        startTime: slot.start,
        endTime: slot.end,
      })
      .expect(409);

    await request(app)
      .post(`/api/admin/appointments/${bookingResponse.body._id}/cancel`)
      .set('Authorization', `Bearer ${adminToken}`)
      .expect(200);

    const appointment = await Appointment.findById(bookingResponse.body._id);
    expect(appointment.status).toBe('cancelled');

    const freedSlotResponse = await request(app)
      .get('/api/availability/slots?date=2026-06-08')
      .expect(200);
    expect(freedSlotResponse.body).toHaveLength(2);
  });

  it('returns Joi validation errors for invalid booking payloads', async () => {
    const response = await request(app)
      .post('/api/appointments')
      .send({ clientName: 'A' })
      .expect(400);

    expect(response.body.error).toBe('Validation failed');
    expect(response.body.details.length).toBeGreaterThan(0);
  });

  it('requires valid admin credentials', async () => {
    const admin = await AdminUser.findOne({ email: process.env.ADMIN_EMAIL });
    expect(admin).toBeTruthy();

    await request(app)
      .get('/api/admin/appointments')
      .expect(401);
  });
});
