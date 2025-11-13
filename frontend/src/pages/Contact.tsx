import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Calendar, CheckCircle, Send, Heart } from 'lucide-react';

const Contact = () => {
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    "Women's Health Physiotherapy",
    "Childbirth Education",
    "Perinatal Fitness Instruction",
    "Lactation Counselling",
    "Hypnobirthing Classes",
    "Initial Consultation"
  ];

  const availableDates = [
    "2024-02-15",
    "2024-02-16",
    "2024-02-19",
    "2024-02-20",
    "2024-02-21",
    "2024-02-22",
    "2024-02-23"
  ];

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

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
              <p className="text-warm-gray">hello@sarahchenpt.com</p>
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="text-center mb-8">
              <Calendar className="h-12 w-12 text-soft-brown mx-auto mb-4" />
              <h2 className="text-3xl font-serif font-bold text-soft-brown mb-4">
                Schedule Your Consultation
              </h2>
              <p className="text-warm-gray">
                Fill out the form below and I'll get back to you within 24 hours to confirm your appointment.
              </p>
            </div>

            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
                <h3 className="text-2xl font-semibold text-soft-brown mb-4">Thank You!</h3>
                <p className="text-warm-gray mb-6">
                  Your appointment request has been submitted. I'll contact you within 24 hours to confirm your booking.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-3 bg-soft-brown text-white rounded-full hover:bg-opacity-90 transition-colors duration-300"
                >
                  Book Another Appointment
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-soft-pink focus:border-transparent transition-colors duration-300"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-soft-brown mb-2">
                      Preferred Date *
                    </label>
                    <select
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-soft-pink focus:border-transparent transition-colors duration-300"
                    >
                      <option value="">Select a date</option>
                      {availableDates.map((date, index) => (
                        <option key={index} value={date}>{formatDate(date)}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-soft-brown mb-2">
                      Preferred Time *
                    </label>
                    <select
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-soft-pink focus:border-transparent transition-colors duration-300"
                    >
                      <option value="">Select a time</option>
                      {timeSlots.map((time, index) => (
                        <option key={index} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-soft-brown mb-2">
                    Additional Information
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-soft-pink focus:border-transparent transition-colors duration-300"
                    placeholder="Please share any specific concerns, questions, or information that would help me prepare for your visit..."
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="inline-flex items-center px-10 py-4 bg-soft-brown text-white text-lg font-semibold rounded-full hover:bg-opacity-90 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <Send className="h-5 w-5 mr-3" />
                    Request Appointment
                  </button>
                </div>
              </form>
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