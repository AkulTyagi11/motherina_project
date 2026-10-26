import React, { useEffect, useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Calendar as CalendarIcon, 
  CheckCircle, 
  Video, 
  Home as HomeIcon,
  Send,
  Sparkles
} from 'lucide-react';
import Cal, { getCalApi } from "@calcom/embed-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    comment: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({});
      cal("ui", {
        "styles": {
          "branding": {
            "brandColor": "#8d7966"
          }
        },
        "hideEventTypeDetails": false,
        "layout": "month_view"
      });
    })();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sage-beige/30 via-white to-sage-beige/20 animate-fade-in">
      {/* Top Tagline Banner */}
      <div className="bg-soft-brown text-white py-2 px-4 text-center text-xs md:text-sm font-medium tracking-wide">
        "Customized guidance for postpartum care tailored to your unique needs and preferences"
      </div>

      {/* Hero Section */}
      <section className="pt-16 pb-12 bg-gradient-to-br from-sage-beige/40 to-peach/30 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-soft-brown mb-2">Connect & Book</p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-soft-brown mb-4">
            Contact & Consultation
          </h1>
          <p className="text-base sm:text-lg text-warm-gray leading-relaxed max-w-2xl mx-auto">
            Book an appointment directly with <strong>Dr. Shalinta Tyagi</strong> via our live scheduler below, or reach out to us for specialized home care in Gurgaon and Delhi NCR.
          </p>
        </div>
      </section>

      {/* Modes of Consultation Banner (From M - Contact Us.pdf) */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Online */}
            <div className="p-8 bg-gradient-to-br from-soft-pink/20 to-peach/20 rounded-3xl border border-peach/30 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="p-3.5 bg-white w-fit rounded-2xl text-soft-brown shadow-sm">
                  <Video className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-soft-brown">Online Consultations</h3>
                <p className="text-sm text-warm-gray leading-relaxed">
                  Available worldwide via Zoom, Google Meet, Skype, and secure video conferencing tools for lactation, diet, and posture guidance.
                </p>
              </div>
              <div className="pt-4 text-xs font-semibold text-soft-brown">Worldwide • High Definition Video</div>
            </div>

            {/* Card 2: In-Person */}
            <div className="p-8 bg-gradient-to-br from-lavender/30 to-peach/20 rounded-3xl border border-peach/30 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="p-3.5 bg-white w-fit rounded-2xl text-soft-brown shadow-sm">
                  <HomeIcon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-soft-brown">In-Person Consultations</h3>
                <p className="text-sm text-warm-gray leading-relaxed">
                  Available at selected partner clinics in Gurgaon, or in the comfort and privacy of your own home (within Delhi NCR).
                </p>
              </div>
              <div className="pt-4 text-xs font-semibold text-soft-brown">Gurgaon & Delhi NCR • Home Visits</div>
            </div>

            {/* Card 3: Direct Connect */}
            <div className="p-8 bg-gradient-to-br from-peach/30 to-sage-beige/30 rounded-3xl border border-peach/30 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="p-3.5 bg-white w-fit rounded-2xl text-soft-brown shadow-sm">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-soft-brown">Direct Connect</h3>
                <div className="space-y-2 text-sm text-warm-gray">
                  <p className="flex items-center space-x-2">
                    <span className="font-semibold text-soft-brown">Phone:</span>
                    <a href="tel:+919873559773" className="hover:underline font-medium">+91 98735 59773</a>
                  </p>
                  <p className="flex items-center space-x-2">
                    <span className="font-semibold text-soft-brown">E-mail:</span>
                    <a href="mailto:info@motherinacare.com" className="hover:underline font-medium">info@motherinacare.com</a>
                  </p>
                </div>
              </div>
              <div className="pt-4 text-xs font-semibold text-soft-brown">Prompt Response • Friendly Staff</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Cal.com Booking Widget */}
      <section id="booking" className="py-16 bg-sage-beige/30 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-6 md:p-12 shadow-md border border-peach/40">
            <div className="text-center mb-8 max-w-2xl mx-auto">
              <div className="p-3 bg-peach/30 w-fit rounded-2xl text-soft-brown mx-auto mb-3">
                <CalendarIcon className="h-7 w-7" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-soft-brown mb-2">
                Instant Appointment Booking
              </h2>
              <p className="text-sm text-warm-gray">
                Select your desired service, choose an available time slot directly synced with Dr. Shalinta's calendar, and receive immediate email confirmation.
              </p>
            </div>

            <div className="w-full min-h-[620px] bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-inner">
              <Cal 
                calLink="dr-shalinta-tyagi"
                style={{ width: "100%", height: "100%", minHeight: "620px", overflow: "scroll" }}
                config={{ layout: 'month_view' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Drop Us a Note Form (From M - Contact Us.pdf) */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-peach/20 via-white to-soft-pink/20 rounded-3xl p-8 md:p-12 border border-peach/30 shadow-sm">
            <div className="text-center mb-8">
              <h2 className="font-serif text-3xl font-bold text-soft-brown mb-2">
                Drop Us a Note and We'll Get in Touch
              </h2>
              <p className="text-sm text-warm-gray">
                Have questions about our Dai-Maa care, in-home physiotherapy packages, or custom queries? Leave your details below.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-8 text-center bg-white rounded-2xl border border-peach/50 space-y-3">
                <CheckCircle className="w-12 h-12 text-soft-brown mx-auto" />
                <h3 className="font-serif text-2xl font-bold text-soft-brown">Thank You for Reaching Out!</h3>
                <p className="text-sm text-warm-gray max-w-md mx-auto">
                  We have received your message. Dr. Shalinta Tyagi or our clinic team will contact you shortly via phone or email.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-soft-brown mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Mehak Sharma"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-soft-brown/40 bg-white text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-soft-brown mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. mehak@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-soft-brown/40 bg-white text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-soft-brown mb-2">
                    Phone Number (with WhatsApp preferred)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-soft-brown/40 bg-white text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-soft-brown mb-2">
                    Comment or Inquiry
                  </label>
                  <textarea
                    name="comment"
                    rows={4}
                    value={formData.comment}
                    onChange={handleInputChange}
                    placeholder="Tell us about your requirements (e.g. lactation assistance, postnatal rehab at home, Dai-Maa care...)"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-soft-brown/40 bg-white text-sm"
                  />
                </div>

                <div className="text-center pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center px-8 py-3.5 bg-soft-brown text-white text-sm font-bold uppercase tracking-wider rounded-full hover:bg-opacity-90 shadow-md transition-transform hover:-translate-y-0.5"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Note
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Clinic & Company Entity Footer Note */}
      <section className="py-12 bg-sage-beige/30 border-t border-peach/30 text-center text-xs text-warm-gray">
        <p className="font-semibold text-soft-brown">Wenvite Wellness Private Limited</p>
        <p className="mt-1">Building A Reliable Ecosystem For Postnatal Care for Mothers with Utmost Compassion</p>
        <p className="mt-1">Gurgaon • Delhi NCR, India</p>
      </section>
    </div>
  );
};

export default Contact;
