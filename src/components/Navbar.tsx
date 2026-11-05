import React, { useState, useEffect, useRef } from 'react';
import { PageId } from '../types';
import { BrandLogo } from './BrandLogo';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onBookNow: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onBookNow
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle outside clicks to close mobile menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuOpen && navRef.current && !navRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  // Handle Escape key to close mobile menu
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [mobileMenuOpen]);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleLinkClick = (pageId: PageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white border-b border-neutral-200 shadow-md py-2'
          : 'bg-gradient-to-b from-black/80 via-black/20 to-transparent border-b border-white/10 py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 md:gap-8 h-14 sm:h-16">
          {/* Brand Identity */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-2 sm:gap-3 focus-visible:ring-2 focus-visible:ring-[#E52332] rounded-lg cursor-pointer shrink-0"
            aria-label="Glossify BH Home"
          >
            <BrandLogo
              theme={scrolled ? 'light' : 'dark'}
              size="md"
              showSubtitle={false}
            />
          </button>

          {/* Desktop Nav - Hidden < 1024px (lg) for better spacing */}
          <nav className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex items-center gap-1 xl:gap-4">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className={`px-3 py-2 text-sm font-bold tracking-tight transition-all relative group cursor-pointer ${
                      scrolled
                        ? isActive ? 'text-[#E52332]' : 'text-neutral-700 hover:text-[#E52332]'
                        : isActive ? 'text-white' : 'text-neutral-200 hover:text-white'
                    }`}
                  >
                    <span>{link.label}</span>
                    <span className={`absolute bottom-1 left-3 right-3 h-0.5 bg-[#E52332] transition-transform duration-300 origin-left ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                  </button>
                );
              })}
            </div>
          </nav>

          {/* Right Actions (Desktop) */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <a
              href="tel:+97366978531"
              className={`flex items-center gap-2 text-sm font-bold transition-colors ${
                scrolled ? 'text-neutral-700 hover:text-[#E52332]' : 'text-neutral-200 hover:text-white'
              }`}
            >
              <div className="w-8 h-8 rounded-full bg-[#E52332]/10 flex items-center justify-center">
                <Phone className="w-4 h-4 text-[#E52332]" />
              </div>
              <span className="hidden xl:inline">+973 6697 8531</span>
            </a>

            <button
              onClick={() => onBookNow()}
              className="px-6 py-2.5 bg-[#E52332] hover:bg-[#c91826] active:scale-95 text-white rounded-xl font-bold text-xs uppercase tracking-widest transition-all shadow-lg shadow-[#E52332]/20 cursor-pointer"
            >
              Book Now
            </button>
          </div>

          {/* Tablet & Mobile Actions */}
          <div className="flex lg:hidden items-center gap-2 sm:gap-4 shrink-0">
            <button
              onClick={() => onBookNow()}
              className="px-4 py-2 bg-[#E52332] hover:bg-[#c91826] active:scale-95 text-white rounded-lg font-bold text-[10px] sm:text-xs uppercase tracking-widest transition-all shadow-md cursor-pointer"
            >
              Book Service
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-xl transition-all cursor-pointer border ${
                scrolled 
                  ? 'text-neutral-800 bg-neutral-100 border-neutral-200' 
                  : 'text-white bg-white/10 border-white/20'
              }`}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Backdrop */}
      <div 
        className={`lg:hidden fixed inset-0 bg-black/60 transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Sidebar / Menu */}
      <div 
        className={`lg:hidden fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-out transform ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-neutral-100 flex items-center justify-between">
            <BrandLogo theme="light" size="sm" />
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-neutral-500 hover:text-neutral-900"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-2">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`w-full text-left px-5 py-4 rounded-2xl text-base font-bold transition-all flex items-center justify-between ${
                    isActive
                      ? 'bg-red-50 text-[#E52332]'
                      : 'text-neutral-800 hover:bg-neutral-50'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <div className="w-1.5 h-1.5 rounded-full bg-[#E52332]" />}
                </button>
              );
            })}
          </div>

          <div className="p-6 border-t border-neutral-100 space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <a
                href="tel:+97366978531"
                className="flex flex-col items-center justify-center gap-2 py-4 bg-neutral-100 rounded-2xl text-neutral-900 font-bold text-xs"
              >
                <Phone className="w-5 h-5 text-[#E52332]" />
                <span>Call Us</span>
              </a>
              <a
                href="https://wa.me/97366978531"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-2 py-4 bg-emerald-50 rounded-2xl text-emerald-800 font-bold text-xs"
              >
                <MessageSquare className="w-5 h-5 text-emerald-600" />
                <span>WhatsApp</span>
              </a>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookNow();
              }}
              className="w-full py-4 bg-[#E52332] text-white rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl shadow-red-100 active:scale-95 transition-all"
            >
              Book Doorstep Visit
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
