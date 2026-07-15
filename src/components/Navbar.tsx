import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Ventures', to: '/#pillars' },
  { label: 'Consulting', to: '/#consulting' },
  { label: 'Terms', to: '/terms' },
  { label: 'Privacy', to: '/privacy' },
  { label: 'Refunds', to: '/refunds' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-navy-950/80 backdrop-blur-xl border-b border-cyber-blue/10 shadow-glow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-16 lg:h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/assets/images/Logo_ACR_Enterprises.png"
            alt="ACR Enterprises"
            className="h-12 w-12 lg:h-14 lg:w-14 object-contain rounded-md transition-transform duration-300 group-hover:scale-110"
          />
          <img
            src="/assets/images/Logo_ACR_Enterprises_Name_Only.png"
            alt="ACR Enterprises"
            className="h-8 lg:h-9 object-contain transition-opacity duration-300 group-hover:opacity-90"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="px-4 py-2 text-sm font-medium text-cyber-silver/80 hover:text-cyber-blue transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-cyber-blue transition-all duration-300 group-hover:w-1/2" />
            </Link>
          ))}
          <Link
            to="/#consulting"
            className="btn-primary ml-3 px-5 py-2.5 rounded-lg text-sm font-semibold"
          >
            <span>Work With Us</span>
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-cyber-silver hover:text-cyber-blue transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-out bg-navy-950/95 backdrop-blur-xl ${
          open ? 'max-h-96 border-b border-cyber-blue/10' : 'max-h-0'
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="py-3 text-sm font-medium text-cyber-silver/80 hover:text-cyber-blue transition-colors border-b border-white/5 last:border-0"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/#consulting"
            className="btn-primary mt-3 px-5 py-3 rounded-lg text-sm font-semibold text-center"
          >
            <span>Work With Us</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
