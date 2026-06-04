import React, { useEffect, useMemo, useState } from 'react';
import {
  AlertCircle,
  CalendarDays,
  CheckCircle,
  Clock,
  Loader2,
  LogIn,
  Plus,
  RefreshCw,
  Save,
  Trash2,
  XCircle,
} from 'lucide-react';

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

interface Availability {
  _id: string;
  date: string;
  startTime: string;
  endTime: string;
  slotDurationMinutes: number;
  timezone?: string;
  isRecurring: boolean;
  recurrenceRule?: string;
  recurrenceEndDate?: string;
  exceptions?: string[];
  isActive: boolean;
}

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

interface AvailabilityForm {
  id?: string;
  date: string;
  startTime: string;
  endTime: string;
  slotDurationMinutes: number;
  isRecurring: boolean;
  recurrenceType: 'none' | 'weekly' | 'monthly';
  recurrenceDays: string[];
  recurrenceEndDate: string;
  exceptions: string;
  isActive: boolean;
}

const weekdays = [
  { label: 'Mon', value: 'MO' },
  { label: 'Tue', value: 'TU' },
  { label: 'Wed', value: 'WE' },
  { label: 'Thu', value: 'TH' },
  { label: 'Fri', value: 'FR' },
  { label: 'Sat', value: 'SA' },
  { label: 'Sun', value: 'SU' },
];

const emptyForm: AvailabilityForm = {
  date: new Date().toLocaleDateString('en-CA'),
  startTime: '09:00',
  endTime: '17:00',
  slotDurationMinutes: 30,
  isRecurring: false,
  recurrenceType: 'none',
  recurrenceDays: ['MO'],
  recurrenceEndDate: '',
  exceptions: '',
  isActive: true,
};

function formatLocalDateTime(value: string) {
  return new Date(value).toLocaleString('en-IN', {
    dateStyle: 'medium',
    timeStyle: 'short',
  });
}

function formatInputDate(value?: string) {
  if (!value) return '';
  return new Date(value).toLocaleDateString('en-CA');
}

function formatInputTime(value?: string) {
  if (!value) return '';
  return new Date(value).toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
}

function parseRecurrence(rule?: string): Pick<AvailabilityForm, 'recurrenceType' | 'recurrenceDays'> {
  if (!rule) return { recurrenceType: 'none', recurrenceDays: ['MO'] };
  if (rule.includes('FREQ=MONTHLY')) return { recurrenceType: 'monthly', recurrenceDays: ['MO'] };
  const byday = rule.match(/BYDAY=([^;]+)/)?.[1]?.split(',') || ['MO'];
  return { recurrenceType: 'weekly', recurrenceDays: byday };
}

function buildRecurrenceRule(form: AvailabilityForm) {
  if (!form.isRecurring || form.recurrenceType === 'none') return '';
  if (form.recurrenceType === 'monthly') return 'FREQ=MONTHLY';
  return `FREQ=WEEKLY;BYDAY=${form.recurrenceDays.join(',')}`;
}

const Admin = () => {
  const [token, setToken] = useState(() => localStorage.getItem('motherinaAdminToken') || '');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [availability, setAvailability] = useState<Availability[]>([]);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [appointmentDate, setAppointmentDate] = useState(new Date().toLocaleDateString('en-CA'));
  const [form, setForm] = useState<AvailabilityForm>(emptyForm);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
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
      const [availabilityData, appointmentData] = await Promise.all([
        apiFetch('/admin/availability?includeInactive=true'),
        apiFetch(`/admin/appointments?date=${appointmentDate}`),
      ]);
      setAvailability(availabilityData);
      setAppointments(appointmentData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to load admin data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAdminData();
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

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = event.target;
    const checked = event.target instanceof HTMLInputElement ? event.target.checked : false;
    setForm((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : name === 'slotDurationMinutes' ? Number(value) : value,
    }));
  };

  const toggleRecurrenceDay = (day: string) => {
    setForm((current) => {
      const exists = current.recurrenceDays.includes(day);
      const recurrenceDays = exists
        ? current.recurrenceDays.filter((item) => item !== day)
        : [...current.recurrenceDays, day];
      return { ...current, recurrenceDays: recurrenceDays.length ? recurrenceDays : [day] };
    });
  };

  const resetForm = () => {
    setForm(emptyForm);
  };

  const editAvailability = (item: Availability) => {
    const recurrence = parseRecurrence(item.recurrenceRule);
    setForm({
      id: item._id,
      date: formatInputDate(item.date),
      startTime: formatInputTime(item.startTime),
      endTime: formatInputTime(item.endTime),
      slotDurationMinutes: item.slotDurationMinutes,
      isRecurring: item.isRecurring,
      recurrenceType: recurrence.recurrenceType,
      recurrenceDays: recurrence.recurrenceDays,
      recurrenceEndDate: formatInputDate(item.recurrenceEndDate),
      exceptions: (item.exceptions || []).map(formatInputDate).join(', '),
      isActive: item.isActive,
    });
  };

  const saveAvailability = async (event: React.FormEvent) => {
    event.preventDefault();
    setSaving(true);
    setError(null);
    setMessage(null);
    try {
      const payload = {
        date: form.date,
        startTime: form.startTime,
        endTime: form.endTime,
        slotDurationMinutes: form.slotDurationMinutes,
        isRecurring: form.isRecurring && form.recurrenceType !== 'none',
        recurrenceRule: buildRecurrenceRule(form),
        recurrenceEndDate: form.recurrenceEndDate || null,
        exceptions: form.exceptions
          .split(',')
          .map((item) => item.trim())
          .filter(Boolean),
        isActive: form.isActive,
      };

      await apiFetch(form.id ? `/admin/availability/${form.id}` : '/admin/availability', {
        method: form.id ? 'PATCH' : 'POST',
        body: JSON.stringify(payload),
      });
      setMessage(form.id ? 'Availability updated.' : 'Availability created.');
      resetForm();
      await loadAdminData();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to save availability');
    } finally {
      setSaving(false);
    }
  };

  const deactivateAvailability = async (id: string) => {
    setError(null);
    try {
      await apiFetch(`/admin/availability/${id}`, { method: 'DELETE' });
      setMessage('Availability deactivated.');
      await loadAdminData();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to deactivate availability');
    }
  };

  const cancelAppointment = async (id: string) => {
    setError(null);
    try {
      await apiFetch(`/admin/appointments/${id}/cancel`, { method: 'POST' });
      setMessage('Appointment cancelled.');
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
    <div className="animate-fade-in bg-sage-beige pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h1 className="font-serif text-4xl font-bold text-soft-brown">Availability Admin</h1>
            <p className="mt-2 text-warm-gray">Manage appointment windows, recurring schedules, and bookings.</p>
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

        <div className="grid grid-cols-1 gap-8 xl:grid-cols-3">
          <section className="rounded-3xl bg-white p-6 shadow-xl xl:col-span-1">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="font-serif text-2xl font-bold text-soft-brown">Availability</h2>
              <button onClick={resetForm} className="inline-flex items-center text-sm font-semibold text-soft-brown">
                <Plus className="mr-1 h-4 w-4" />
                New
              </button>
            </div>

            <form onSubmit={saveAvailability} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="text-sm font-semibold text-soft-brown">
                  Date
                  <input name="date" type="date" value={form.date} onChange={handleFormChange} className="mt-2 w-full rounded-xl border border-gray-300 px-3 py-2" required />
                </label>
                <label className="text-sm font-semibold text-soft-brown">
                  Duration
                  <input name="slotDurationMinutes" type="number" min="5" max="240" value={form.slotDurationMinutes} onChange={handleFormChange} className="mt-2 w-full rounded-xl border border-gray-300 px-3 py-2" required />
                </label>
                <label className="text-sm font-semibold text-soft-brown">
                  Start
                  <input name="startTime" type="time" value={form.startTime} onChange={handleFormChange} className="mt-2 w-full rounded-xl border border-gray-300 px-3 py-2" required />
                </label>
                <label className="text-sm font-semibold text-soft-brown">
                  End
                  <input name="endTime" type="time" value={form.endTime} onChange={handleFormChange} className="mt-2 w-full rounded-xl border border-gray-300 px-3 py-2" required />
                </label>
              </div>

              <label className="flex items-center space-x-3 text-sm font-semibold text-soft-brown">
                <input name="isRecurring" type="checkbox" checked={form.isRecurring} onChange={handleFormChange} className="h-4 w-4" />
                <span>Recurring availability</span>
              </label>

              {form.isRecurring && (
                <div className="space-y-4 rounded-2xl bg-sage-beige p-4">
                  <select name="recurrenceType" value={form.recurrenceType} onChange={handleFormChange} className="w-full rounded-xl border border-gray-300 px-3 py-2">
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                  </select>
                  {form.recurrenceType === 'weekly' && (
                    <div className="grid grid-cols-4 gap-2">
                      {weekdays.map((day) => (
                        <button
                          type="button"
                          key={day.value}
                          onClick={() => toggleRecurrenceDay(day.value)}
                          className={`rounded-lg px-3 py-2 text-sm font-semibold transition-colors duration-200 ${
                            form.recurrenceDays.includes(day.value)
                              ? 'bg-soft-brown text-white'
                              : 'bg-white text-soft-brown'
                          }`}
                        >
                          {day.label}
                        </button>
                      ))}
                    </div>
                  )}
                  <label className="block text-sm font-semibold text-soft-brown">
                    Ends On
                    <input name="recurrenceEndDate" type="date" value={form.recurrenceEndDate} onChange={handleFormChange} className="mt-2 w-full rounded-xl border border-gray-300 px-3 py-2" />
                  </label>
                </div>
              )}

              <label className="block text-sm font-semibold text-soft-brown">
                Exception dates
                <input name="exceptions" value={form.exceptions} onChange={handleFormChange} placeholder="2026-06-18, 2026-06-25" className="mt-2 w-full rounded-xl border border-gray-300 px-3 py-2" />
              </label>

              <label className="flex items-center space-x-3 text-sm font-semibold text-soft-brown">
                <input name="isActive" type="checkbox" checked={form.isActive} onChange={handleFormChange} className="h-4 w-4" />
                <span>Active</span>
              </label>

              <button type="submit" disabled={saving} className="inline-flex w-full items-center justify-center rounded-full bg-soft-brown px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-opacity-90 disabled:bg-gray-300">
                {saving ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : <Save className="mr-2 h-5 w-5" />}
                {form.id ? 'Save Availability' : 'Create Availability'}
              </button>
            </form>
          </section>

          <section className="space-y-8 xl:col-span-2">
            <div className="rounded-3xl bg-white p-6 shadow-xl">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="font-serif text-2xl font-bold text-soft-brown">Schedule Rules</h2>
                {loading && <Loader2 className="h-5 w-5 animate-spin text-soft-brown" />}
              </div>
              <div className="space-y-3">
                {availability.map((item) => (
                  <div key={item._id} className="flex flex-col justify-between gap-4 rounded-2xl border border-sage-beige p-4 md:flex-row md:items-center">
                    <div>
                      <div className="flex items-center gap-2 text-soft-brown">
                        <CalendarDays className="h-5 w-5" />
                        <span className="font-semibold">{formatLocalDateTime(item.startTime)} - {new Date(item.endTime).toLocaleTimeString('en-IN', { hour: 'numeric', minute: '2-digit' })}</span>
                      </div>
                      <p className="mt-1 text-sm text-warm-gray">
                        {item.slotDurationMinutes} min slots · {item.isRecurring ? item.recurrenceRule || 'Recurring' : 'One-time'} · {item.isActive ? 'Active' : 'Inactive'}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button onClick={() => editAvailability(item)} className="rounded-full bg-sage-beige px-4 py-2 text-sm font-semibold text-soft-brown hover:bg-peach">Edit</button>
                      <button onClick={() => deactivateAvailability(item._id)} className="inline-flex items-center rounded-full bg-red-50 px-4 py-2 text-sm font-semibold text-red-700 hover:bg-red-100">
                        <Trash2 className="mr-1 h-4 w-4" />
                        Deactivate
                      </button>
                    </div>
                  </div>
                ))}
                {!availability.length && <p className="rounded-2xl bg-sage-beige p-6 text-center text-warm-gray">No availability rules yet.</p>}
              </div>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-xl">
              <div className="mb-5 flex flex-col justify-between gap-4 md:flex-row md:items-center">
                <h2 className="font-serif text-2xl font-bold text-soft-brown">Appointments</h2>
                <input type="date" value={appointmentDate} onChange={(event) => setAppointmentDate(event.target.value)} className="rounded-xl border border-gray-300 px-3 py-2 text-soft-brown" />
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
          </section>
        </div>
      </div>
    </div>
  );
};

export default Admin;
