# Motherina Project - Appointment Booking System

Full-stack appointment booking application for maternal wellness services.

## Architecture

- **Frontend**: React + TypeScript + Vite + TailwindCSS
- **Backend**: Node.js + Express + MongoDB
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
   - Set `CORS_ORIGIN` to include your frontend URL
   - (Optional) Configure Google Calendar integration

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
- Interactive calendar interface
- Real-time slot availability checking
- Instant appointment confirmation
- Optional Google Calendar synchronization

### API Endpoints

#### Availability
- `GET /api/availability` - List availability schedules
- `POST /api/availability` - Create availability schedule
- `GET /api/availability/slots?date=YYYY-MM-DD` - Get available slots for a date

#### Appointments
- `GET /api/appointments` - List appointments
- `POST /api/appointments` - Create new appointment
- `DELETE /api/appointments/:id` - Cancel appointment

## Environment Variables

### Backend (.env)

| Variable | Required | Description |
|----------|----------|-------------|
| `MONGODB_URI` | Yes | MongoDB connection string |
| `PORT` | No | Server port (default: 3000) |
| `CORS_ORIGIN` | Yes | Comma-separated allowed origins |
| `GOOGLE_CALENDAR_ENABLED` | No | Enable Google Calendar sync (true/false) |
| `GOOGLE_CLIENT_EMAIL` | No* | Service account email |
| `GOOGLE_PRIVATE_KEY` | No* | Service account private key |
| `GOOGLE_CALENDAR_ID` | No* | Target calendar ID |

*Required only if `GOOGLE_CALENDAR_ENABLED=true`

### Frontend (.env.local)

| Variable | Required | Description |
|----------|----------|-------------|
| `VITE_API_BASE_URL` | Yes | Backend API base URL |

## Google Calendar Integration (Optional)

To enable automatic calendar synchronization:

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project or select existing
3. Enable Google Calendar API
4. Create a service account:
   - Navigate to IAM & Admin → Service Accounts
   - Click "Create Service Account"
   - Download JSON key file
5. Share your Google Calendar with the service account email
6. Update backend `.env`:
   - Set `GOOGLE_CALENDAR_ENABLED=true`
   - Copy `client_email` to `GOOGLE_CLIENT_EMAIL`
   - Copy `private_key` to `GOOGLE_PRIVATE_KEY` (keep `\n` as literal `\\n`)
   - Set `GOOGLE_CALENDAR_ID` (use `primary` for main calendar)

## Deployment

### Frontend (GitHub Pages)

```bash
cd frontend
npm run deploy
```

### Backend

Deploy to your preferred Node.js hosting platform (Heroku, Railway, DigitalOcean, etc.)

Ensure environment variables are configured in your hosting environment.

## Development

### Creating Availability Schedules

Use the POST endpoint to create availability:

```bash
curl -X POST http://localhost:3000/api/availability \
  -H "Content-Type: application/json" \
  -d '{
    "date": "2025-11-25",
    "startTime": "2025-11-25T09:00:00Z",
    "endTime": "2025-11-25T17:00:00Z",
    "slotDurationMinutes": 30,
    "isActive": true
  }'
```

## Tech Stack

**Frontend:**
- React 18
- TypeScript
- Vite
- TailwindCSS
- React Router DOM
- Lucide React (icons)

**Backend:**
- Node.js (ES Modules)
- Express 5
- Mongoose (MongoDB ODM)
- Helmet (security)
- CORS
- express-rate-limit
- googleapis (Google Calendar API)
- dotenv

## License

ISC

## Contact

For questions or support, contact: hello@shalinta.com
