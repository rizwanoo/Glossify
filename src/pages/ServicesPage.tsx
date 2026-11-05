import React, { useState } from 'react';
import { PageId, VehicleCategory } from '../types';
import { VERIFIED_SERVICES, SERVICE_LOCATIONS_BAHRAIN } from '../data/servicesData';
import {
  Clock,
  CheckCircle2,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  Car,
  ChevronRight,
  Info
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  onBookNow: (serviceId?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate: _onNavigate,
  onBookNow
}) => {
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleCategory>('suv');
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredServices = activeTab === 'all'
    ? VERIFIED_SERVICES
    : VERIFIED_SERVICES.filter((s) => s.id === activeTab);

  return (
    <div className="w-full pt-28 pb-24 bg-white">
      {/* Editorial Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E52332] mb-3">
            <span>Verified Care Menu</span>
            <span aria-hidden="true">·</span>
            <span>Kingdom of Bahrain</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#17191D] tracking-tight font-display text-balance">
            Professional Detailing &amp; Polishing Services
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 mt-4 leading-relaxed">
            Every service is performed on-site by trained automotive specialists using dedicated clean microfibers, demineralized water, and dual-action orbital polishers.
          </p>
        </div>

        {/* Vehicle Category Selector Bar */}
        <div className="mt-10 p-5 bg-[#EAF5FC] rounded-2xl border border-neutral-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E52332] text-white flex items-center justify-center font-bold shrink-0">
              <Car className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs uppercase font-bold tracking-wider text-neutral-900">
                Select Your Vehicle Class
              </div>
              <div className="text-xs text-neutral-500">
                Calibrates timing and product allocation for your vehicle
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-1.5 sm:gap-2 w-full md:flex md:w-auto">
            <button
              onClick={() => setSelectedVehicle('sedan')}
              className={`px-2 sm:px-4 py-2.5 rounded-lg text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all cursor-pointer text-center ${
                selectedVehicle === 'sedan'
                  ? 'bg-[#E52332] text-white shadow-sm'
                  : 'bg-white text-neutral-700 border border-neutral-200 hover:bg-neutral-50'
              }`}
            >
              Sedan / Coupe
            </button>
            <button
              onClick={() => setSelectedVehicle('suv')}
              className={`px-2 sm:px-4 py-2.5 rounded-lg text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all cursor-pointer text-center ${
                selectedVehicle === 'suv'
                  ? 'bg-[#E52332] text-white shadow-sm'
                  : 'bg-white text-neutral-700 border border-neutral-200 hover:bg-neutral-50'
              }`}
            >
              SUV / 4x4
            </button>
            <button
              onClick={() => setSelectedVehicle('luxury')}
              className={`px-2 sm:px-4 py-2.5 rounded-lg text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all cursor-pointer text-center ${
                selectedVehicle === 'luxury'
                  ? 'bg-[#E52332] text-white shadow-sm'
                  : 'bg-white text-neutral-700 border border-neutral-200 hover:bg-neutral-50'
              }`}
            >
              Exotic / Supercar
            </button>
          </div>
        </div>

        {/* Quick Service Category Filter Buttons */}
        <div className="mt-8 flex flex-wrap items-center gap-2 border-b border-neutral-200 pb-4">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
              activeTab === 'all'
                ? 'bg-[#17191D] text-white'
                : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
            }`}
          >
            All Packages ({VERIFIED_SERVICES.length})
          </button>
          {VERIFIED_SERVICES.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveTab(s.id)}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                activeTab === s.id
                  ? 'bg-[#17191D] text-white'
                  : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
              }`}
            >
              {s.name.split('&')[0].trim()}
            </button>
          ))}
        </div>
      </div>

      {/* Main Editorial Services Showcase */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {filteredServices.map((service, index) => {
          const isReversed = index % 2 === 1;
          const adjustedDuration = selectedVehicle === 'suv'
            ? service.estimatedDuration
            : selectedVehicle === 'luxury'
            ? `${service.estimatedDuration} (Precision)`
            : service.estimatedDuration;

          return (
            <div
              key={service.id}
              id={service.id}
              className="bg-white rounded-3xl border border-neutral-200 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Image Section */}
                <div
                  className={`lg:col-span-6 relative bg-neutral-900 min-h-[340px] lg:min-h-[460px] overflow-hidden ${
                    isReversed ? 'lg:order-2' : ''
                  }`}
                >
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-6 left-6 flex items-center gap-2">
                    <span className="px-3 py-1 bg-[#E52332] text-white text-xs font-bold uppercase tracking-wider rounded-md">
                      {service.tag}
                    </span>
                    <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-white text-xs font-semibold rounded-md border border-white/20">
                      Doorstep Mobile Care
                    </span>
                  </div>

                  {/* Bottom Image Overlay Info */}
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="flex items-center gap-2 text-xs text-neutral-300 mb-1">
                      <Clock className="w-3.5 h-3.5 text-[#E52332]" />
                      <span>Duration for {selectedVehicle.toUpperCase()}: {adjustedDuration}</span>
                    </div>
                    <div className="text-sm font-semibold text-neutral-200">
                      Recommended Interval: {service.idealInterval}
                    </div>
                  </div>
                </div>

                {/* Editorial Content Section */}
                <div
                  className={`lg:col-span-6 p-8 lg:p-12 flex flex-col justify-between ${
                    isReversed ? 'lg:order-1' : ''
                  }`}
                >
                  <div>
                    <div className="text-xs text-neutral-400 font-mono tracking-wider mb-2">
                      0{index + 1} // AUTHENTIC SPECIFICATION
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#17191D] tracking-tight font-display">
                      {service.name}
                    </h2>

                    <p className="text-sm text-neutral-600 mt-4 leading-relaxed font-normal">
                      {service.fullDesc}
                    </p>

                    {/* Step-by-Step Verified Checklist */}
                    <div className="mt-6 pt-6 border-t border-neutral-100">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-900 mb-3 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#E52332]" />
                        <span>Included Detailing Steps:</span>
                      </h3>

                      <div className="space-y-2.5">
                        {service.features.map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2.5 text-xs text-neutral-700">
                            <CheckCircle2 className="w-4 h-4 text-[#E52332] shrink-0 mt-0.5" />
                            <span className="leading-snug">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Suitability Note */}
                    <div className="mt-6 p-3.5 bg-neutral-50 rounded-xl border border-neutral-200/80 flex items-start gap-2.5 text-xs text-neutral-600">
                      <Info className="w-4 h-4 text-[#E52332] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-neutral-900">Recommended for: </strong>
                        {service.recommendedFor}
                      </div>
                    </div>
                  </div>

                  {/* Actions Bar - Direct Booking with Zero Popups */}
                  <div className="mt-8 pt-6 border-t border-neutral-100 flex flex-col sm:flex-row items-center gap-3">
                    <a
                      href={`https://wa.me/97366978531?text=${encodeURIComponent(
                        `Hello Glossify BH, I would like to book "${service.name}" for my ${selectedVehicle.toUpperCase()}. Please provide earliest doorstep slot.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-3.5 bg-[#E52332] hover:bg-[#c91826] active:scale-95 text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4 fill-current" />
                      <span>Book for {selectedVehicle.toUpperCase()} (WhatsApp)</span>
                    </a>

                    <button
                      onClick={() => onBookNow(service.id)}
                      className="w-full sm:w-auto px-5 py-3.5 bg-neutral-900 hover:bg-black active:scale-95 text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Fill On-Page Form</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Island-wide Coverage Footer Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="bg-[#121417] text-white p-8 lg:p-10 rounded-3xl border border-neutral-800 shadow-xl">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E52332] mb-2">
            <ShieldCheck className="w-4 h-4" />
            <span>Mobile Doorstep Coverage</span>
          </div>
          <h2 className="text-2xl font-bold font-display">
            Operating Across All Regions in Bahrain
          </h2>
          <p className="text-xs text-neutral-400 mt-1 max-w-2xl">
            Our specialized detailing van travels directly to your home, workplace, or compound. Below are the key areas served daily:
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {SERVICE_LOCATIONS_BAHRAIN.map((loc) => (
              <span
                key={loc}
                className="px-3 py-1.5 bg-neutral-800 text-neutral-300 text-xs rounded-lg border border-neutral-700/80 font-medium"
              >
                {loc}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
