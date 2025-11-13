import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Me', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm border-sage-beige">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 transition-colors duration-300 rounded-full bg-soft-pink group-hover:bg-peach">
              <Heart className="w-6 h-6 text-soft-brown" />
            </div>
            <div>
              <h1 className="font-serif text-xl font-semibold text-soft-brown">Shalinta Tyagi</h1>
              <p className="text-sm text-warm-gray">Maternal Wellness Instructor</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          {/* Hidden on mobile, visible as flex (row) on md and up */}
          <nav className="hidden space-x-8 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-soft-brown border-b-2 border-soft-pink pb-1'
                    : 'text-warm-gray hover:text-soft-brown'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Book Appointment Button */}
          {/* Hidden on mobile, visible as inline-flex on md and up */}
          <Link
            to="/contact"
            className="hidden lg:flex items-center px-6 py-2 bg-soft-pink text-soft-brown text-sm font-medium rounded-full hover:bg-peach transition-colors duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Book Appointment
          </Link>

          {/* Mobile menu button */}
          {/* Visible as inline-flex on mobile, hidden on md and up */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex p-2 transition-colors duration-200 lg:hidden text-warm-gray hover:text-soft-brown"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          // This div is only rendered if isMenuOpen is true.
          // It should be hidden on md and up, so the desktop nav takes over.
          <div className="py-4 border-t md:hidden border-sage-beige animate-slide-up">
            <nav className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm font-medium py-2 px-3 rounded transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-soft-brown bg-sage-beige'
                      : 'text-warm-gray hover:text-soft-brown hover:bg-sage-beige'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="inline-flex items-center justify-center px-6 py-2 mt-4 text-sm font-medium transition-colors duration-300 rounded-full bg-soft-pink text-soft-brown hover:bg-peach"
              >
                Book Appointment
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;