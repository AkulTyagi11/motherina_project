// Express application setup
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Basic security & parsing middleware
app.use(helmet());
app.use(cors({ origin: process.env.CORS_ORIGIN?.split(',') || '*', credentials: false }));
app.use(express.json());

// Rate limiting (generic sensible defaults)
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 200 });
app.use('/api/', limiter);

// Health check
app.get('/health', (_req, res) => {
	res.json({ status: 'ok', timestamp: Date.now() });
});

// Routes (mounted later after route files exist)
import availabilityRoutes from './routes/availability.routes.js';
import appointmentRoutes from './routes/appointments.routes.js';

app.use('/api/availability', availabilityRoutes);
app.use('/api/appointments', appointmentRoutes);

// Not found handler
app.use((req, res) => {
	res.status(404).json({ error: 'Not found' });
});

// Error handler
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err, _req, res, _next) => {
	console.error('Error:', err); // minimal logging
	res.status(err.status || 500).json({ error: err.message || 'Server error' });
});

export default app;
