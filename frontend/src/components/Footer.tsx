import { Link } from 'react-router-dom';
import { Heart, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-sage-beige">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center mb-4 space-x-2">
              <div className="p-2 rounded-full bg-soft-pink">
                <Heart className="w-6 h-6 text-soft-brown" />
              </div>
              <div>
                <h2 className="font-serif text-lg font-semibold text-soft-brown">Shalinta Tyagi</h2>
                <p className="text-sm text-warm-gray">Maternal Wellness Instructor</p>
              </div>
            </Link>
            <p className="max-w-md text-sm leading-relaxed text-warm-gray">
              Providing compassionate, evidence-based care for women throughout their journey of 
              motherhood. Specializing in maternal wellness and women's health physiotherapy.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold text-soft-brown">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm transition-colors duration-200 text-warm-gray hover:text-soft-brown">About Me</Link></li>
              <li><Link to="/services" className="text-sm transition-colors duration-200 text-warm-gray hover:text-soft-brown">Services</Link></li>
              <li><Link to="/testimonials" className="text-sm transition-colors duration-200 text-warm-gray hover:text-soft-brown">Testimonials</Link></li>
              <li><Link to="/faq" className="text-sm transition-colors duration-200 text-warm-gray hover:text-soft-brown">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 font-semibold text-soft-brown">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-sm text-warm-gray">
                <Mail className="w-4 h-4" />
                <span>hello@shalinta.com</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-warm-gray">
                <Clock className="w-4 h-4" />
                <span>Mon-Fri: 9AM-6PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 mt-8 text-center border-t border-peach">
          <p className="text-sm text-warm-gray">
            © 2025 Shalinta Tyagi. All rights reserved. | Licensed Physiotherapist in Gurgaon
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;