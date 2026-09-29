import React, { useEffect, useMemo, useState } from 'react';
import {
  AlertCircle,
  CheckCircle,
  Clock,
  Loader2,
  LogIn,
  RefreshCw,
  XCircle,
} from 'lucide-react';

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

interface Appointment {
  _id: string;
  clientName: string;
  clientEmail: string;
  clientPhone?: string;
  serviceType?: string;
  notes?: string;
  startTime: string;
  endTime: string;
  status: 'pending' | 'confirmed' | 'cancelled';
}

function formatLocalDateTime(value: string) {
  return new Date(value).toLocaleString('en-IN', {
    dateStyle: 'medium',
    timeStyle: 'short',
  });
}

const Admin = () => {
  const [token, setToken] = useState(() => localStorage.getItem('motherinaAdminToken') || '');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [appointmentDate, setAppointmentDate] = useState(new Date().toLocaleDateString('en-CA'));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const authHeaders = useMemo(
    () => ({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    }),
    [token]
  );

  const apiFetch = async (path: string, options: RequestInit = {}) => {
    const response = await fetch(`${API_BASE}${path}`, {
      ...options,
      headers: {
        ...authHeaders,
        ...(options.headers || {}),
      },
    });

    if (response.status === 401) {
      localStorage.removeItem('motherinaAdminToken');
      setToken('');
      throw new Error('Please log in again.');
    }

    if (!response.ok) {
      const data = await response.json().catch(() => ({}));
      throw new Error(data.error || 'Request failed');
    }

    return response.json();
  };

  const loadAdminData = async () => {
    if (!token) return;
    setLoading(true);
    setError(null);
    try {
      const appointmentData = await apiFetch(`/admin/appointments?date=${appointmentDate}`);
      setAppointments(appointmentData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to load admin data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAdminData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, appointmentDate]);

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_BASE}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Login failed');
      localStorage.setItem('motherinaAdminToken', data.token);
      setToken(data.token);
      setPassword('');
      setMessage('Logged in successfully.');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  const cancelAppointment = async (id: string) => {
    setError(null);
    try {
      await apiFetch(`/admin/appointments/${id}/cancel`, { method: 'POST' });
      setMessage('Appointment cancelled in local DB. Please remember to cancel it in Cal.com/Google Calendar manually if needed.');
      await loadAdminData();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to cancel appointment');
    }
  };

  if (!token) {
    return (
      <div className="min-h-screen bg-sage-beige pt-24 pb-16">
        <div className="mx-auto max-w-md px-4">
          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <div className="mb-6 text-center">
              <LogIn className="mx-auto mb-4 h-10 w-10 text-soft-brown" />
              <h1 className="font-serif text-3xl font-bold text-soft-brown">Admin Login</h1>
            </div>
            {error && (
              <div className="mb-4 flex items-start space-x-3 rounded-xl border border-red-200 bg-red-50 p-4 text-red-700">
                <AlertCircle className="mt-0.5 h-5 w-5" />
                <span>{error}</span>
              </div>
            )}
            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Admin email"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-soft-pink"
                required
              />
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Password"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-soft-pink"
                required
              />
              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center rounded-full bg-soft-brown px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-opacity-90 disabled:bg-gray-300"
              >
                {loading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : <LogIn className="mr-2 h-5 w-5" />}
                Log In
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in min-h-screen bg-sage-beige pt-24 pb-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h1 className="font-serif text-4xl font-bold text-soft-brown">Bookings</h1>
            <p className="mt-2 text-warm-gray">View synced appointments from Cal.com.</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={loadAdminData}
              className="inline-flex items-center rounded-full bg-white px-5 py-3 font-semibold text-soft-brown shadow-sm transition-colors duration-300 hover:bg-peach"
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              Refresh
            </button>
            <button
              onClick={() => {
                localStorage.removeItem('motherinaAdminToken');
                setToken('');
              }}
              className="inline-flex items-center rounded-full bg-soft-brown px-5 py-3 font-semibold text-white transition-colors duration-300 hover:bg-opacity-90"
            >
              <XCircle className="mr-2 h-4 w-4" />
              Log Out
            </button>
          </div>
        </div>

        {error && (
          <div className="mb-6 flex items-start space-x-3 rounded-xl border border-red-200 bg-red-50 p-4 text-red-700">
            <AlertCircle className="mt-0.5 h-5 w-5" />
            <span>{error}</span>
          </div>
        )}

        {message && (
          <div className="mb-6 flex items-start space-x-3 rounded-xl border border-green-200 bg-green-50 p-4 text-green-700">
            <CheckCircle className="mt-0.5 h-5 w-5" />
            <span>{message}</span>
          </div>
        )}

        <div className="rounded-3xl bg-white p-6 shadow-xl">
          <div className="mb-5 flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <h2 className="font-serif text-2xl font-bold text-soft-brown">Appointments</h2>
            <div className="flex items-center gap-4">
              {loading && <Loader2 className="h-5 w-5 animate-spin text-soft-brown" />}
              <input type="date" value={appointmentDate} onChange={(event) => setAppointmentDate(event.target.value)} className="rounded-xl border border-gray-300 px-3 py-2 text-soft-brown" />
            </div>
          </div>
          <div className="space-y-3">
            {appointments.map((appointment) => (
              <div key={appointment._id} className="flex flex-col justify-between gap-4 rounded-2xl border border-sage-beige p-4 md:flex-row md:items-center">
                <div>
                  <div className="flex items-center gap-2 text-soft-brown">
                    <Clock className="h-5 w-5" />
                    <span className="font-semibold">{formatLocalDateTime(appointment.startTime)}</span>
                  </div>
                  <p className="mt-1 text-warm-gray">{appointment.clientName} · {appointment.serviceType || 'Appointment'}</p>
                  <p className="text-sm text-warm-gray">{appointment.clientEmail} {appointment.clientPhone ? `· ${appointment.clientPhone}` : ''}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`rounded-full px-3 py-1 text-sm font-semibold ${appointment.status === 'cancelled' ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'}`}>
                    {appointment.status}
                  </span>
                  {appointment.status !== 'cancelled' && (
                    <button onClick={() => cancelAppointment(appointment._id)} className="rounded-full bg-red-50 px-4 py-2 text-sm font-semibold text-red-700 hover:bg-red-100">Cancel</button>
                  )}
                </div>
              </div>
            ))}
            {!appointments.length && <p className="rounded-2xl bg-sage-beige p-6 text-center text-warm-gray">No appointments for this date.</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
