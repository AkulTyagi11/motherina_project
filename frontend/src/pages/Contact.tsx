import React, { useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Calendar as CalendarIcon, CheckCircle, Heart } from 'lucide-react';
import Cal, { getCalApi } from "@calcom/embed-react";

const Contact = () => {
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

      {/* Booking Form via Cal.com */}
      <section className="py-20 bg-sage-beige">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="text-center mb-8">
              <CalendarIcon className="h-12 w-12 text-soft-brown mx-auto mb-4" />
              <h2 className="text-3xl font-serif font-bold text-soft-brown mb-4">
                Book Your Appointment
              </h2>
              <p className="text-warm-gray mb-8">
                Select a date and available time slot to schedule your consultation.
              </p>
            </div>

            <div className="w-full min-h-[600px] bg-white rounded-xl overflow-hidden border border-gray-100 shadow-inner">
              <Cal 
                calLink="https://cal.com/child-birth-education"
                style={{ width: "100%", height: "100%", minHeight: "600px", overflow: "scroll" }}
                config={{ layout: 'month_view' }}
              />
            </div>
            
            <p className="text-center text-sm text-warm-gray mt-6">
              Note: Since you haven't provided a Cal.com username yet, this displays a demo calendar. Update <code>calLink="your_username/your_event"</code> in Contact.tsx once your account is ready.
            </p>
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
