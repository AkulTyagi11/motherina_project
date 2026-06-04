import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Calendar, CheckCircle, Send, Heart, ChevronLeft, ChevronRight, Loader2, AlertCircle } from 'lucide-react';

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

interface Slot {
  start: string;
  end: string;
}

const formatLocalDate = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const Contact = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [availableSlots, setAvailableSlots] = useState<Slot[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<Slot | null>(null);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    notes: ''
  });

  const services = [
    "Women's Health Physiotherapy",
    "Childbirth Education",
    "Perinatal Fitness Instruction",
    "Lactation Counselling",
    "Hypnobirthing Classes",
    "Initial Consultation"
  ];

  useEffect(() => {
    if (selectedDate) {
      fetchAvailableSlots(selectedDate);
    }
  }, [selectedDate]);

  const fetchAvailableSlots = async (date: Date) => {
    setLoadingSlots(true);
    setError(null);
    try {
      const dateStr = formatLocalDate(date);
      const response = await fetch(`${API_BASE}/availability/slots?date=${dateStr}`);
      if (!response.ok) throw new Error('Failed to fetch slots');
      const data = await response.json();
      setAvailableSlots(data);
    } catch (err) {
      setError('Unable to load available slots. Please try again.');
      setAvailableSlots([]);
    } finally {
      setLoadingSlots(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSlot) {
      setError('Please select a time slot');
      return;
    }
    setSubmitting(true);
    setError(null);
    try {
      const response = await fetch(`${API_BASE}/appointments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          clientName: formData.name,
          clientEmail: formData.email,
          clientPhone: formData.phone,
          serviceType: formData.serviceType,
          notes: formData.notes,
          startTime: selectedSlot.start,
          endTime: selectedSlot.end
        })
      });
      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || 'Booking failed');
      }
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', serviceType: '', notes: '' });
      setSelectedDate(null);
      setSelectedSlot(null);
      setTimeout(() => setIsSubmitted(false), 8000);
    } catch (err: any) {
      setError(err.message || 'Failed to submit appointment');
    } finally {
      setSubmitting(false);
    }
  };

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    const days = [];
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }
    return days;
  };

  const formatTime = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
  };

  const isToday = (date: Date | null) => {
    if (!date) return false;
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  const isPastDate = (date: Date | null) => {
    if (!date) return false;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const prevMonth = () => {
    const today = new Date();
    const targetMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1);
    if (targetMonth >= new Date(today.getFullYear(), today.getMonth(), 1)) {
      setCurrentMonth(targetMonth);
    }
  };

  const monthName = currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-sage-beige to-peach">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-soft-brown mb-6">
              Book Your Appointment
            </h1>
            <p className="text-xl text-warm-gray max-w-3xl mx-auto leading-relaxed">
              Ready to start your maternal wellness journey? Schedule your consultation today 
              and take the first step toward optimal health and well-being.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-soft-pink p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:bg-peach transition-colors duration-300">
                <MapPin className="h-8 w-8 text-soft-brown mx-auto" />
              </div>
              <h3 className="text-lg font-semibold text-soft-brown mb-2">Location</h3>
              <p className="text-warm-gray">123 Wellness Ave<br />Toronto, ON M5V 2K1</p>
            </div>

            <div className="text-center group">
              <div className="bg-lavender p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:bg-soft-pink transition-colors duration-300">
                <Phone className="h-8 w-8 text-soft-brown mx-auto" />
              </div>
              <h3 className="text-lg font-semibold text-soft-brown mb-2">Phone</h3>
              <p className="text-warm-gray">(416) 555-0123</p>
            </div>

            <div className="text-center group">
              <div className="bg-peach p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:bg-lavender transition-colors duration-300">
                <Mail className="h-8 w-8 text-soft-brown mx-auto" />
              </div>
              <h3 className="text-lg font-semibold text-soft-brown mb-2">Email</h3>
              <p className="text-warm-gray">hello@shalinta.com</p>
            </div>

            <div className="text-center group">
              <div className="bg-sage-beige p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:bg-peach transition-colors duration-300">
                <Clock className="h-8 w-8 text-soft-brown mx-auto" />
              </div>
              <h3 className="text-lg font-semibold text-soft-brown mb-2">Hours</h3>
              <p className="text-warm-gray">Mon-Fri: 9AM-6PM<br />Sat: 9AM-2PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-sage-beige">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="text-center mb-8">
              <Calendar className="h-12 w-12 text-soft-brown mx-auto mb-4" />
              <h2 className="text-3xl font-serif font-bold text-soft-brown mb-4">
                Book Your Appointment
              </h2>
              <p className="text-warm-gray">
                Select a date and available time slot to schedule your consultation.
              </p>
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start space-x-3">
                <AlertCircle className="h-5 w-5 text-red-500 mt-0.5" />
                <p className="text-red-700">{error}</p>
              </div>
            )}

            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6 animate-pulse" />
                <h3 className="text-2xl font-semibold text-soft-brown mb-4">Appointment Confirmed!</h3>
                <p className="text-warm-gray mb-2">
                  Your appointment has been successfully booked.
                </p>
                <p className="text-warm-gray mb-6">
                  You'll receive a confirmation email shortly at <strong>{formData.email}</strong>.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-3 bg-soft-brown text-white rounded-full hover:bg-opacity-90 transition-colors duration-300"
                >
                  Book Another Appointment
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Calendar Section */}
                <div>
                  <h3 className="text-xl font-semibold text-soft-brown mb-4">Select a Date</h3>
                  <div className="bg-sage-beige rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <button
                        onClick={prevMonth}
                        className="p-2 rounded-lg hover:bg-white transition-colors duration-200"
                        aria-label="Previous month"
                      >
                        <ChevronLeft className="h-5 w-5 text-soft-brown" />
                      </button>
                      <h4 className="text-lg font-semibold text-soft-brown">{monthName}</h4>
                      <button
                        onClick={nextMonth}
                        className="p-2 rounded-lg hover:bg-white transition-colors duration-200"
                        aria-label="Next month"
                      >
                        <ChevronRight className="h-5 w-5 text-soft-brown" />
                      </button>
                    </div>

                    <div className="grid grid-cols-7 gap-2 mb-2">
                      {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                        <div key={day} className="text-center text-sm font-semibold text-warm-gray py-2">
                          {day}
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-7 gap-2">
                      {getDaysInMonth(currentMonth).map((date, idx) => {
                        const isSelected = date && selectedDate && date.toDateString() === selectedDate.toDateString();
                        const isPast = isPastDate(date);
                        const isTodayDate = isToday(date);
                        
                        return (
                          <button
                            key={idx}
                            disabled={!date || isPast}
                            onClick={() => date && !isPast && setSelectedDate(date)}
                            className={`
                              aspect-square rounded-lg text-sm font-medium transition-all duration-200
                              ${!date ? 'invisible' : ''}
                              ${isPast ? 'text-gray-300 cursor-not-allowed' : ''}
                              ${isSelected ? 'bg-soft-brown text-white shadow-md' : ''}
                              ${!isSelected && !isPast && date ? 'bg-white hover:bg-soft-pink text-soft-brown' : ''}
                              ${isTodayDate && !isSelected ? 'ring-2 ring-soft-brown' : ''}
                            `}
                          >
                            {date ? date.getDate() : ''}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Available Slots */}
                  {selectedDate && (
                    <div className="mt-6">
                      <h3 className="text-xl font-semibold text-soft-brown mb-4">
                        Available Times - {selectedDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}
                      </h3>
                      
                      {loadingSlots ? (
                        <div className="flex items-center justify-center py-12">
                          <Loader2 className="h-8 w-8 text-soft-brown animate-spin" />
                        </div>
                      ) : availableSlots.length === 0 ? (
                        <div className="text-center py-8 bg-sage-beige rounded-xl">
                          <p className="text-warm-gray">No available slots for this date.</p>
                          <p className="text-sm text-warm-gray mt-2">Please select another date.</p>
                        </div>
                      ) : (
                        <div className="grid grid-cols-2 gap-3 max-h-80 overflow-y-auto">
                          {availableSlots.map((slot, idx) => {
                            const isSelected = selectedSlot?.start === slot.start;
                            return (
                              <button
                                key={idx}
                                onClick={() => setSelectedSlot(slot)}
                                className={`
                                  py-3 px-4 rounded-xl font-medium transition-all duration-200
                                  ${isSelected 
                                    ? 'bg-soft-brown text-white shadow-md' 
                                    : 'bg-white hover:bg-soft-pink text-soft-brown border border-gray-200'
                                  }
                                `}
                              >
                                {formatTime(slot.start)}
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Booking Form */}
                <div>
                  <h3 className="text-xl font-semibold text-soft-brown mb-4">Your Information</h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm font-semibold text-soft-brown mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-soft-pink focus:border-transparent transition-colors duration-300"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-soft-brown mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-soft-pink focus:border-transparent transition-colors duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-soft-brown mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-soft-pink focus:border-transparent transition-colors duration-300"
                        placeholder="(416) 555-0123"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-soft-brown mb-2">
                        Service Needed *
                      </label>
                      <select
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-soft-pink focus:border-transparent transition-colors duration-300"
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-soft-brown mb-2">
                        Additional Notes
                      </label>
                      <textarea
                        name="notes"
                        rows={4}
                        value={formData.notes}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-soft-pink focus:border-transparent transition-colors duration-300"
                        placeholder="Any specific concerns or information..."
                      ></textarea>
                    </div>

                    {selectedSlot && (
                      <div className="p-4 bg-sage-beige rounded-xl">
                        <p className="text-sm font-semibold text-soft-brown mb-1">Selected Time:</p>
                        <p className="text-soft-brown">
                          {selectedDate?.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                          {' at '}
                          {formatTime(selectedSlot.start)}
                        </p>
                      </div>
                    )}

                    <div className="text-center pt-2">
                      <button
                        type="submit"
                        disabled={!selectedSlot || submitting}
                        className={`
                          inline-flex items-center px-10 py-4 text-lg font-semibold rounded-full 
                          transition-all duration-300 transform
                          ${selectedSlot && !submitting
                            ? 'bg-soft-brown text-white hover:bg-opacity-90 hover:shadow-xl hover:-translate-y-1'
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          }
                        `}
                      >
                        {submitting ? (
                          <>
                            <Loader2 className="h-5 w-5 mr-3 animate-spin" />
                            Booking...
                          </>
                        ) : (
                          <>
                            <Send className="h-5 w-5 mr-3" />
                            Confirm Booking
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Map/Location Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-serif font-bold text-soft-brown">
                Visit Our Clinic
              </h2>
              <p className="text-lg text-warm-gray leading-relaxed">
                Located in the heart of Toronto, our clinic offers a warm, welcoming environment 
                designed specifically for maternal wellness. We're easily accessible by public 
                transit and offer convenient parking.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 text-soft-brown mt-1" />
                  <div>
                    <h3 className="font-semibold text-soft-brown">Address</h3>
                    <p className="text-warm-gray">123 Wellness Avenue<br />Toronto, ON M5V 2K1</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="h-6 w-6 text-soft-brown mt-1" />
                  <div>
                    <h3 className="font-semibold text-soft-brown">Clinic Hours</h3>
                    <div className="text-warm-gray">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 2:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-sage-beige p-6 rounded-2xl">
                <h3 className="font-semibold text-soft-brown mb-3">What to Bring</h3>
                <ul className="space-y-2 text-warm-gray">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-soft-brown" />
                    <span>Valid health card and photo ID</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-soft-brown" />
                    <span>Insurance information (if applicable)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-soft-brown" />
                    <span>Comfortable clothing for movement</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-soft-brown" />
                    <span>Any relevant medical reports</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-soft-pink to-peach p-8 rounded-2xl shadow-xl">
                <div className="bg-white p-6 rounded-xl text-center">
                  <MapPin className="h-16 w-16 text-soft-brown mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-soft-brown mb-2">Easy to Find</h3>
                  <p className="text-warm-gray mb-4">
                    Located near major transit lines with convenient street parking available.
                  </p>
                  <p className="text-sm text-warm-gray">
                    <strong>TTC:</strong> St. Andrew Station (5 min walk)<br />
                    <strong>Parking:</strong> Street parking and nearby lots
                  </p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-white p-4 rounded-full shadow-lg">
                <Heart className="h-8 w-8 text-soft-brown" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-soft-brown">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-serif font-bold text-white mb-4">
            Need Immediate Assistance?
          </h2>
          <p className="text-peach mb-6">
            For urgent concerns or same-day appointments, please call directly.
          </p>
          <a
            href="tel:+14165550123"
            className="inline-flex items-center px-8 py-3 bg-white text-soft-brown font-semibold rounded-full hover:bg-opacity-90 transition-colors duration-300"
          >
            <Phone className="h-5 w-5 mr-2" />
            Call (416) 555-0123
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
