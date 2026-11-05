import React from 'react';
import { MessageSquare } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="Quick WhatsApp Contact" className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 select-none flex items-center gap-2.5 animate-slide-in-br opacity-0">
      {/* Subtle Tooltip to encourage immediate clicks */}
      <a
        href="https://wa.me/97366978531?text=Hello%20Glossify%20BH,%20I%20would%20like%20to%20book%20a%20doorstep%20car%20wash%20or%20polishing%20service."
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-[#121417]/90 text-white rounded-full text-[11px] font-semibold border border-white/10 shadow-lg backdrop-blur-md hover:bg-black transition-all group"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-neutral-200 group-hover:text-white">Online Dispatch · Click to Chat</span>
      </a>

      {/* Main WhatsApp CTA with Radar Ping */}
      <div className="relative flex items-center justify-center">
        {/* Subtle pulsing background ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping opacity-75 pointer-events-none" />

        <a
          href="https://wa.me/97366978531?text=Hello%20Glossify%20BH,%20I%20would%20like%20to%20book%20a%20doorstep%20car%20wash%20or%20polishing%20service."
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center gap-2 px-3.5 py-3 sm:px-4 sm:py-3.5 bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white rounded-full shadow-2xl transition-all font-bold text-xs uppercase tracking-wider cursor-pointer border border-white/20"
          aria-label="Direct WhatsApp Booking"
        >
          <MessageSquare className="w-5 h-5 fill-current" />
          <span className="hidden sm:inline">WhatsApp Booking</span>
        </a>
      </div>
    </aside>
  );
};
