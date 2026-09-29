# Motherina Project - Appointment Booking System

Full-stack appointment booking application for maternal wellness services.

## Architecture

- **Frontend**: React + TypeScript + Vite + TailwindCSS
- **Backend**: Node.js + Express + MongoDB
- **Booking Engine**: Cal.com (embedded on frontend, syncing via webhooks to backend)
- **Deployment**: GitHub Pages (frontend), self-hosted (backend)

## Getting Started

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
   - Copy `.env.example` to `.env`
   - Update `MONGODB_URI` with your MongoDB connection string
   - Set `CORS_ORIGINS` to include your frontend URL
   - Set `JWT_SECRET`, `ADMIN_EMAIL`, and `ADMIN_PASSWORD` for admin login
   - Configure SMTP variables if you want confirmation/cancellation emails sent from your own server (Cal.com also sends its own emails).

4. Start the development server:
```bash
npm run dev
```

The backend will run on `http://localhost:3000` by default.

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env.local` file:
```
VITE_API_BASE_URL=http://localhost:3000/api
```

4. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:5173` by default.

## Features

### Booking System
- Interactive booking interface powered by **Cal.com**
- Real-time slot availability checking via Cal.com
- Instant appointment confirmation
- Admin appointment viewing via a custom React Dashboard
- Webhook-driven synchronization between Cal.com and local MongoDB
- Email confirmations and cancellation notifications

### API Endpoints

#### Appointments
- `GET /api/admin/appointments` - List appointments
- `POST /api/admin/appointments/:id/cancel` - Cancel appointment (local DB only)
- `POST /api/appointments/webhook/calcom` - Webhook receiver for Cal.com `BOOKING_CREATED` and `BOOKING_CANCELLED` events

#### Auth/Admin
- `POST /api/auth/login` - Admin login

## Environment Variables

### Backend (.env)

| Variable | Required | Description |
|----------|----------|-------------|
| `MONGODB_URI` | Yes | MongoDB connection string |
| `PORT` | No | Server port (default: 3000) |
| `CORS_ORIGINS` | Yes | Comma-separated allowed origins |
| `APP_TIMEZONE` | No | Business timezone for filtering local appointments (default: `Asia/Kolkata`) |
| `JWT_SECRET` | Yes | Secret used to sign admin JWTs |
| `ADMIN_EMAIL` | Yes | First admin account email; bootstrapped on server start |
| `ADMIN_PASSWORD` | Yes | First admin password; use a strong value in production |
| `SMTP_HOST` | No | SMTP host for booking/cancellation emails |
| `SMTP_PORT` | No | SMTP port (default: 587) |
| `SMTP_USER` | No | SMTP username |
| `SMTP_PASS` | No | SMTP password |
| `SMTP_FROM` | No | From address for transactional emails |
| `CLINIC_NOTIFICATION_EMAIL` | No | Clinic/staff notification recipient |

### Frontend (.env.local)

| Variable | Required | Description |
|----------|----------|-------------|
| `VITE_API_BASE_URL` | Yes | Backend API base URL |

## Deployment

### Frontend (GitHub Pages)

The frontend uses `HashRouter` and Vite `base: '/motherina_project/'`, so deep links work on GitHub Pages without a custom SPA fallback.

```bash
cd frontend
npm run deploy
```

### Backend

Deploy to your preferred Node.js hosting platform (Heroku, Railway, DigitalOcean, etc.)
Ensure environment variables are configured in your hosting environment.

### Cal.com Setup
1. Create a free account at [Cal.com](https://cal.com).
2. Set up your availability and event types.
3. Update `calLink="your-username/your-event"` in `frontend/src/pages/Contact.tsx`.
4. Add a Webhook in the Cal.com dashboard pointing to `https://your-backend-url.com/api/appointments/webhook/calcom` listening for `BOOKING_CREATED` and `BOOKING_CANCELLED`.

## Tech Stack

**Frontend:**
- React 18
- TypeScript
- Vite
- TailwindCSS
- React Router DOM
- Lucide React (icons)
- Cal.com Embed React

**Backend:**
- Node.js (ES Modules)
- Express 5
- Mongoose (MongoDB ODM)
- Helmet (security)
- CORS
- express-rate-limit
- express-mongo-sanitize
- Joi
- Luxon
- Nodemailer
- dotenv

## License

ISC

## Contact

For questions or support, contact: akultyagi2304@gmail.com
