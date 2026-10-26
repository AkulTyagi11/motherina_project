import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoUrl from '../assets/images/motherina-logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Dr. Shalinta', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b shadow-sm border-peach/50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3.5">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img src={logoUrl} alt="Motherina Logo" className="h-12 w-auto transition-transform duration-300 group-hover:scale-105" />
            <div className="hidden sm:block">
              <h1 className="font-serif text-xl font-bold text-soft-brown tracking-tight">Motherina</h1>
              <p className="text-xs font-semibold text-motherina-pink uppercase tracking-widest">Maternal Wellness</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden space-x-7 lg:flex items-center">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-motherina-pink font-semibold border-b-2 border-motherina-pink pb-1'
                    : 'text-warm-gray hover:text-motherina-pink'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Book Appointment CTA Button */}
          <Link
            to="/contact"
            className="hidden lg:inline-flex items-center px-6 py-2.5 bg-motherina-pink text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-motherina-pink-dark transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
          >
            Book Appointment
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex p-2 transition-colors duration-200 lg:hidden text-warm-gray hover:text-motherina-pink"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-peach/50 py-4 space-y-2 animate-fade-in">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-xl text-sm font-medium ${
                  isActive(item.href)
                    ? 'text-motherina-pink bg-motherina-pink/10 font-semibold'
                    : 'text-warm-gray hover:bg-peach/30 hover:text-motherina-pink'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-3">
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="w-full inline-flex justify-center items-center px-6 py-3 bg-motherina-pink text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-motherina-pink-dark shadow-sm"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
