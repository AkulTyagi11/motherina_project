import { Link } from 'react-router-dom';
import { Mail, Clock, Phone, MapPin } from 'lucide-react';
import logoUrl from '../assets/images/motherina-logo.png';

const Footer = () => {
  return (
    <footer className="bg-sage-beige/50 border-t border-peach">
      <div className="px-4 py-14 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand & Purpose */}
          <div className="col-span-1 md:col-span-2 space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <img src={logoUrl} alt="Motherina Logo" className="w-auto h-12" />
              <div>
                <h2 className="font-serif text-xl font-bold text-soft-brown">Motherina</h2>
                <p className="text-xs uppercase tracking-widest text-motherina-pink font-semibold">Maternal Wellness Ecosystem</p>
              </div>
            </Link>
            <p className="max-w-md text-sm leading-relaxed text-warm-gray">
              Founded by <strong>Dr. Shalinta Tyagi</strong> (Women's Health Physiotherapist & Lactation Counsellor, 16+ yrs exp). Dedicated to evidence-based postnatal recovery, childbirth education, and compassionate mother care.
            </p>
            <div className="text-xs text-soft-brown font-semibold bg-peach/40 p-3 rounded-xl border border-peach/70">
              Wenvite Wellness Private Limited — Building A Reliable Ecosystem For Postnatal Care for Mothers with Utmost Compassion.
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-serif font-bold text-soft-brown text-base">Quick Links</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/about" className="text-warm-gray hover:text-motherina-pink transition-colors">
                  About Dr. Shalinta Tyagi
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-warm-gray hover:text-motherina-pink transition-colors">
                  Consultation & Therapy Services
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-warm-gray hover:text-motherina-pink transition-colors">
                  Mother Testimonials
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-warm-gray hover:text-motherina-pink transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-warm-gray hover:text-motherina-pink transition-colors">
                  Book an Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="mb-4 font-serif font-bold text-soft-brown text-base">Connect</h3>
            <ul className="space-y-3 text-sm text-warm-gray">
              <li className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-motherina-pink flex-shrink-0" />
                <a href="tel:+919873559773" className="hover:text-motherina-pink font-medium">+91 98735 59773</a>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-motherina-pink flex-shrink-0" />
                <a href="mailto:info@motherinacare.com" className="hover:text-motherina-pink font-medium">info@motherinacare.com</a>
              </li>
              <li className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-motherina-pink flex-shrink-0 mt-0.5" />
                <span>Gurgaon & Delhi NCR (In-Person & Home Visits) | Online Worldwide</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Clock className="w-4 h-4 text-motherina-pink flex-shrink-0" />
                <span>Mon-Sat: By Appointment</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 mt-10 text-center border-t border-peach flex flex-col sm:flex-row items-center justify-between text-xs text-warm-gray gap-2">
          <p>© {new Date().getFullYear()} Motherina (Wenvite Wellness Pvt Ltd). All rights reserved.</p>
          <p className="text-motherina-pink font-semibold">Exclusively practicing with Dr. Shalinta Tyagi • Maternal Wellness & Rehab Specialist</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
