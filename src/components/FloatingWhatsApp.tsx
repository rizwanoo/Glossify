import React from 'react';
import { MessageSquare } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="Quick WhatsApp Contact" className="fixed bottom-6 right-6 z-40 select-none flex flex-col items-end gap-3 animate-slide-in-br opacity-0">
      {/* Dynamic Pulse Tooltip */}
      <a
        href="https://wa.me/97366978531?text=Hello%20Glossify%20BH,%20I%20would%20like%20to%20book%20a%20doorstep%20car%20wash%20or%20polishing%20service."
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 px-4 py-2 bg-white text-[#17191D] rounded-2xl text-[11px] font-bold border border-neutral-200 shadow-2xl hover:bg-neutral-50 transition-all group scale-95 hover:scale-100"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E52332] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E52332]"></span>
        </span>
        <span className="uppercase tracking-widest text-neutral-800">Online Now · Click to Book</span>
      </a>

      {/* Main WhatsApp CTA with Radar Ping */}
      <div className="relative group">
        {/* Triple Radar Ping Effect */}
        <span className="absolute -inset-2 rounded-full bg-emerald-500/20 animate-ping [animation-duration:3s] opacity-75 pointer-events-none" />
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping [animation-duration:2s] opacity-75 pointer-events-none" />

        <a
          href="https://wa.me/97366978531?text=Hello%20Glossify%20BH,%20I%20would%20like%20to%20book%20a%20doorstep%20car%20wash%20or%20polishing%20service."
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center gap-3 px-6 py-4 bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white rounded-3xl shadow-2xl shadow-emerald-500/40 transition-all font-black text-xs uppercase tracking-widest cursor-pointer border border-white/20"
          aria-label="Direct WhatsApp Booking"
        >
          <MessageSquare className="w-5 h-5 fill-current" />
          <span className="hidden sm:inline">WhatsApp Booking</span>
          <span className="sm:hidden">WhatsApp</span>
        </a>
      </div>
    </aside>
  );
};
