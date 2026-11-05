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
          ? 'bg-white/95 backdrop-blur-md border-b border-neutral-200/80 shadow-md py-2 sm:py-3'
          : 'bg-gradient-to-b from-black/60 via-black/30 to-transparent border-b border-white/10 py-3 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-4 md:gap-8 min-h-[44px]">
          {/* Zone 1: Brand wordmark / identity */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-2 sm:gap-3 text-left focus-visible:outline-2 focus-visible:outline-[#E52332] rounded-md cursor-pointer shrink-0 no-wrap-stable"
            aria-label="Glossify BH Home"
          >
            <BrandLogo
              theme={scrolled ? 'light' : 'dark'}
              size="md"
              showSubtitle={false}
            />
          </button>

          {/* Zone 2: Desktop nav links - Hidden at 768px (md) and below */}
          <nav className="hidden md:flex items-center justify-center flex-1 min-w-0 px-2 sm:px-4">
            <div className="flex items-center gap-3 lg:gap-6 xl:gap-8 overflow-hidden">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className={`text-[clamp(12px,1.2vw,14px)] font-semibold tracking-tight transition-colors no-wrap-stable cursor-pointer relative py-1 shrink ${
                      scrolled
                        ? isActive
                          ? 'text-[#E52332]'
                          : 'text-neutral-700 hover:text-[#E52332]'
                        : isActive
                        ? 'text-[#E52332]'
                        : 'text-neutral-200 hover:text-white'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E52332] rounded-full" />
                    )}
                  </button>
                );
              })}
            </div>
          </nav>

          {/* Zone 3: Desktop Actions - Hidden at 768px (md) and below */}
          <div className="hidden md:flex items-center gap-3 lg:gap-5 shrink-0 no-wrap-stable">
            <a
              href="tel:+97366978531"
              className={`flex items-center gap-1.5 text-[clamp(10px,1vw,12px)] font-bold transition-colors ${
                scrolled ? 'text-neutral-700 hover:text-[#E52332]' : 'text-neutral-200 hover:text-white'
              }`}
              title="Call Glossify BH"
            >
              <Phone className="w-3.5 h-3.5 text-[#E52332] shrink-0" />
              <span className="hidden lg:inline">+973 6697 8531</span>
            </a>

            <button
              onClick={() => onBookNow()}
              className="px-[clamp(10px,1.2vw,16px)] py-2 text-[clamp(10px,0.8vw,11px)] font-black uppercase tracking-wider text-white bg-[#E52332] hover:bg-[#c91826] active:scale-95 transition-all shadow-md rounded-lg cursor-pointer no-wrap-stable"
            >
              Book Now
            </button>
          </div>

          {/* Mobile hamburger button - Shown at 768px (md) and below */}
          <div className="flex md:hidden items-center gap-1.5 sm:gap-2 shrink-0">
            <button
              onClick={() => onBookNow()}
              className="px-2.5 py-1.5 text-[10px] font-black uppercase text-white bg-[#E52332] rounded-md cursor-pointer no-wrap-stable"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-1.5 rounded-lg cursor-pointer transition-colors focus:outline-none ${
                scrolled ? 'text-neutral-800 hover:bg-neutral-100' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Full-Width Dropdown Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-white border-b border-neutral-200 shadow-2xl transition-all duration-300 transform origin-top ${
          mobileMenuOpen ? 'scale-y-100 opacity-100 visible' : 'scale-y-0 opacity-0 invisible'
        }`}
      >
        <div className="px-4 py-6 space-y-2 max-h-[calc(100vh-80px)] overflow-y-auto">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`w-full text-left px-4 py-4 text-base font-bold rounded-xl transition-all flex items-center justify-between ${
                  isActive
                    ? 'bg-red-50 text-[#E52332]'
                    : 'text-neutral-800 hover:bg-neutral-50 active:bg-neutral-100'
                }`}
              >
                <span>{link.label}</span>
                {isActive ? (
                  <div className="w-2 h-2 rounded-full bg-[#E52332]" />
                ) : (
                  <Menu className="w-4 h-4 text-neutral-300" />
                )}
              </button>
            );
          })}

          <div className="pt-6 mt-4 border-t border-neutral-100 space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <a
                href="tel:+97366978531"
                className="flex items-center justify-center gap-2 py-4 px-3 bg-neutral-100 rounded-xl text-neutral-900 font-bold text-sm active:scale-95 transition-transform"
              >
                <Phone className="w-4 h-4 text-[#E52332]" />
                <span>Call</span>
              </a>
              <a
                href="https://wa.me/97339888566"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-4 px-3 bg-emerald-50 rounded-xl text-emerald-800 font-bold text-sm active:scale-95 transition-transform"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp</span>
              </a>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookNow();
              }}
              className="w-full py-4.5 text-sm font-black uppercase tracking-widest text-white bg-[#E52332] rounded-xl text-center shadow-xl shadow-red-200 active:scale-[0.98] transition-all cursor-pointer"
            >
              Book Doorstep Service
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
