import React from 'react';
import { PageId } from '../types';
import { BrandLogo } from './BrandLogo';
import { Phone, MessageSquare, Instagram, MapPin, Clock, ShieldCheck, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onBookNow: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onBookNow }) => {
  return (
    <footer className="bg-[#121417] text-white border-t border-neutral-800">
      {/* Top Banner / Fast WhatsApp dispatch */}
      <div className="border-b border-neutral-800 bg-[#17191D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#E52332] font-bold">
                Direct Doorstep Booking
              </span>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white mt-1">
                Need immediate car care in Bahrain?
              </h3>
              <p className="text-sm text-neutral-400 mt-1 max-w-xl">
                Chat directly with our dispatch team on WhatsApp. Fast response, verified arrival slots.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://wa.me/97366978531?text=Hello%20Glossify%20BH,%20I%20would%20like%20to%20inquire%20about%20booking%20a%20car%20wash%20or%20polishing%20service."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold tracking-wide uppercase transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp (+973 6697 8531)</span>
              </a>

              <a
                href="https://wa.me/97339888566?text=Hello%20Glossify%20BH,%20I%20would%20like%20to%20book%20a%20doorstep%20service%20in%20Bahrain."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg text-xs font-bold tracking-wide uppercase border border-neutral-700 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp (+973 3988 8566)</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info & Legal Entity */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo theme="dark" size="lg" showSubtitle={true} />
            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm mt-3">
              GLOSSIFY is Bahrain&apos;s premier mobile car wash, machine polishing, and auto detailing service. Our fully equipped mobile vans bring luxury automotive care directly to your villa, apartment, or office.
            </p>

            <div className="pt-2 text-xs text-neutral-400 space-y-1.5">
              <div className="flex items-center gap-2 text-neutral-300">
                <ShieldCheck className="w-4 h-4 text-[#E52332] shrink-0" />
                <span>Glossify BH Auto Car Wash Co. W.L.L · <span dir="rtl" className="text-neutral-400 font-sans">شركة جلوسيفاي لغسيل السيارات ذ.م.م</span></span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
                <span>Bldg 3365B, Rd 361, Madinat Hamad 1203, Kingdom of Bahrain</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-neutral-500 shrink-0" />
                <span>Daily Service Hours: 8:00 AM – 9:00 PM</span>
              </div>
              <div className="text-[11px] text-neutral-500 pt-1">
                Operations: <a href="mailto:glossifybahrain@gmail.com" className="text-[#E52332] hover:underline">glossifybahrain@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-neutral-300 font-bold mb-4">
              Explore Pages
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              <li>
                <button
                  onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home Showcase
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Verified Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('gallery'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Transformation Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact &amp; Booking
                </button>
              </li>
              <li>
                <button
                  onClick={onBookNow}
                  className="text-[#E52332] hover:underline font-semibold cursor-pointer"
                >
                  Book Service Online
                </button>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-neutral-300 font-bold mb-4">
              Doorstep Services
            </h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li className="hover:text-white transition-colors">Mobile Snow Foam Wash</li>
              <li className="hover:text-white transition-colors">Deep Interior Sanitization</li>
              <li className="hover:text-white transition-colors">Seat Steam Extraction</li>
              <li className="hover:text-white transition-colors">Dual-Action Machine Polish</li>
              <li className="hover:text-white transition-colors">Hydrophobic Paint Sealant</li>
              <li className="hover:text-white transition-colors">Signature Full Detail</li>
            </ul>
          </div>

          {/* Official Channels & Social */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-neutral-300 font-bold mb-4">
              Connect With Us
            </h4>
            <div className="space-y-3">
              <a
                href="https://www.instagram.com/glossify.bh.1/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-neutral-300 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center text-[#E52332] group-hover:bg-[#E52332] group-hover:text-white transition-colors">
                  <Instagram className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-medium">@glossify.bh.1</span>
                  <span className="text-[11px] text-neutral-500">Official Instagram Profile</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 ml-auto text-neutral-500 group-hover:text-white" />
              </a>

              <a
                href="tel:+97366978531"
                className="flex items-center gap-2.5 text-sm text-neutral-300 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center text-neutral-300 group-hover:bg-neutral-700">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-medium">+973 6697 8531</span>
                  <span className="text-[11px] text-neutral-500">Dispatch Hotline 1</span>
                </div>
              </a>

              <a
                href="tel:+97339888566"
                className="flex items-center gap-2.5 text-sm text-neutral-300 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center text-neutral-300 group-hover:bg-neutral-700">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-medium">+973 3988 8566</span>
                  <span className="text-[11px] text-neutral-500">Dispatch Hotline 2</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>
            &copy; {new Date().getFullYear()} GLOSSIFY Auto Car Wash Co. W.L.L. All rights reserved. Kingdom of Bahrain.
          </p>
          <div className="flex items-center gap-6">
            <span>Kingdom of Bahrain Island-Wide Service</span>
            <a
              href="https://www.instagram.com/glossify.bh.1/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              Instagram @glossify.bh.1
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
