import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-sage-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="bg-soft-pink p-2 rounded-full">
                <Heart className="h-6 w-6 text-soft-brown" />
              </div>
              <div>
                <h2 className="text-lg font-serif font-semibold text-soft-brown">Shalinta Tyagi</h2>
                <p className="text-sm text-warm-gray">Maternal Wellness Instructor</p>
              </div>
            </Link>
            <p className="text-warm-gray text-sm max-w-md leading-relaxed">
              Providing compassionate, evidence-based care for women throughout their journey of 
              motherhood. Specializing in maternal wellness and women's health physiotherapy.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-soft-brown font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-warm-gray text-sm hover:text-soft-brown transition-colors duration-200">About Me</Link></li>
              <li><Link to="/services" className="text-warm-gray text-sm hover:text-soft-brown transition-colors duration-200">Services</Link></li>
              <li><Link to="/testimonials" className="text-warm-gray text-sm hover:text-soft-brown transition-colors duration-200">Testimonials</Link></li>
              <li><Link to="/faq" className="text-warm-gray text-sm hover:text-soft-brown transition-colors duration-200">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-soft-brown font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-warm-gray text-sm">
                <Mail className="h-4 w-4" />
                <span>hello@sarahchenpt.com</span>
              </li>
              <li className="flex items-center space-x-2 text-warm-gray text-sm">
                <Clock className="h-4 w-4" />
                <span>Mon-Fri: 9AM-6PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-peach mt-8 pt-8 text-center">
          <p className="text-warm-gray text-sm">
            © 2025 Shalinta Tyagi. All rights reserved. | Licensed Physiotherapist in Gurgaon
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;