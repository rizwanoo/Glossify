import React from 'react';
import { PageId } from '../types';
import { VERIFIED_SERVICES } from '../data/servicesData';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import {
  Sparkles,
  Shield,
  Truck,
  ArrowRight,
  MessageSquare,
  Droplets,
  Award,
  ChevronRight,
  CheckCircle,
  PhoneCall
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onBookNow: (serviceId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onBookNow }) => {
  return (
    <div className="w-full">
      {/* SECTION A: CINEMATIC HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#121417]">
        {/* Cinematic Backdrop with Crisp, Bright Automotive Detailing Photograph */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero_detailing_foam_1793786285151.jpg"
            alt="Glossify BH Automotive Care Bahrain"
            className="w-full h-full object-cover object-center brightness-105 contrast-105 saturate-110"
          />
          {/* Subtle natural lighting gradient so the background remains bright and visible */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#121417]/85" />
        </div>

        {/* Hero Content Container - Open & Unboxed */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 text-center flex flex-col items-center">
          {/* Official Downloaded Logo Emblem */}
          <div className="mb-6 flex flex-col items-center">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-tr from-[#E52332] via-white to-[#E52332] shadow-2xl hover:scale-105 transition-transform duration-300">
              <img
                src="/glossify-original-logo.jpg"
                alt="GLOSSIFY Car Wash &amp; Polishing Original Logo"
                className="w-full h-full object-cover rounded-full bg-white shadow-inner"
              />
            </div>
          </div>

          {/* Unboxed Metadata Tagline (Zero-Pill discipline) */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-200 mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
            <span className="text-[#E52332]">GLOSSIFY BH</span>
            <span aria-hidden="true">·</span>
            <span>KINGDOM OF BAHRAIN</span>
            <span aria-hidden="true">·</span>
            <span>MOBILE DOORSTEP SERVICE</span>
          </div>

          {/* Primary Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] max-w-4xl font-display text-balance drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
            Professional Car Care. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-neutral-200">
              Delivered to Your Doorstep.
            </span>
          </h1>

          {/* Supporting Headline */}
          <p className="text-lg sm:text-xl md:text-2xl font-bold text-[#E52332] tracking-tight mt-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
            Experience the Gloss. Enjoy the Convenience.
          </p>

          {/* Supporting Description */}
          <p className="text-base sm:text-lg text-white/95 max-w-2xl mt-4 leading-relaxed font-normal text-balance drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
            From professional scratch-free foam washing to flawless machine polishing, GLOSSIFY BH brings elite mobile car care directly to your villa, residence, or workplace across Bahrain.
          </p>

          {/* Hero CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <button
              onClick={() => onBookNow()}
              className="w-full sm:w-auto px-8 py-4 bg-[#E52332] hover:bg-[#c91826] active:scale-95 text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-2xl shadow-[#E52332]/50 flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Book Your Wash</span>
            </button>

            <button
              onClick={() => {
                onNavigate('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-4 bg-black/40 hover:bg-black/60 active:scale-95 text-white rounded-xl font-bold text-xs uppercase tracking-wider border border-white/40 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Subtle Trust Indicators */}
          <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl w-full text-left">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-white/10 text-[#E52332] flex items-center justify-center shrink-0 border border-white/10">
                <Truck className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white uppercase tracking-wider">Doorstep Van</div>
                <div className="text-[12px] text-neutral-400">Self-contained water &amp; power</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-white/10 text-[#E52332] flex items-center justify-center shrink-0 border border-white/10">
                <Droplets className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white uppercase tracking-wider">pH-Neutral Wash</div>
                <div className="text-[12px] text-neutral-400">Gentle snow foam formula</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-white/10 text-[#E52332] flex items-center justify-center shrink-0 border border-white/10">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white uppercase tracking-wider">Machine Polish</div>
                <div className="text-[12px] text-neutral-400">Swirl &amp; scratch elimination</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-white/10 text-[#E52332] flex items-center justify-center shrink-0 border border-white/10">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white uppercase tracking-wider">Bahrain Island-Wide</div>
                <div className="text-[12px] text-neutral-400">Serving all governorates</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION B: BRAND INTRODUCTION */}
      <section className="py-24 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-neutral-200 aspect-[4/3] group">
                <img
                  src="/images/mobile_van_doorstep_1793786285560.jpg"
                  alt="Glossify BH Mobile Van Detailing on Villa Driveway in Bahrain"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="text-xs uppercase font-bold tracking-widest text-[#E52332]">
                    Mobile Car Care Van
                  </div>
                  <div className="text-lg font-bold">Arriving fully equipped at your doorstep</div>
                  <div className="text-xs text-neutral-300 mt-1">
                    Independent water tanks &amp; ultra-quiet generators on board
                  </div>
                </div>
              </div>

              {/* Offset Accent Card */}
              <div className="absolute -bottom-6 -right-6 hidden sm:block bg-[#121417] text-white p-5 rounded-xl border border-neutral-800 shadow-xl max-w-xs">
                <div className="flex items-center gap-2.5 text-xs font-bold text-[#E52332] uppercase tracking-wider">
                  <Shield className="w-4 h-4" />
                  <span>Paint Safe Standard</span>
                </div>
                <p className="text-xs text-neutral-300 mt-1.5 leading-relaxed">
                  Zero harsh brushes. Zero dirty sponges. Only dual-bucket grit guards &amp; plush microfibers.
                </p>
              </div>
            </div>

            {/* Editorial Copy Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs font-bold uppercase tracking-widest text-[#E52332]">
                Editorial Perspective
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17191D] tracking-tight leading-tight font-display text-balance">
                Your Car Deserves More Than Just a Wash.
              </h2>

              <p className="text-base text-neutral-700 leading-relaxed font-normal">
                In Bahrain&apos;s climate, fine desert dust, high ambient heat, and coastal humidity quickly degrade clear coats and bake contaminants into paintwork. Traditional roadside car washes often cause circular swirl marks, hologram scratches, and dry out interior upholstery.
              </p>

              <p className="text-base text-neutral-700 leading-relaxed font-normal">
                GLOSSIFY was established to redefine automotive maintenance. We operate fully equipped mobile detailing units carrying filtered demineralized water, quiet silenced generators, and professional-grade machinery. We come to you, allowing you to relax at home or stay focused at work while your vehicle receives studio-grade care.
              </p>

              <div className="pt-2 border-t border-neutral-100 flex flex-wrap gap-6 text-xs text-neutral-600 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#E52332]" />
                  <span>Licensed Bahrain Business (W.L.L)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#E52332]" />
                  <span>Zero Water Hookup Needed</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#E52332]" />
                  <span>Strict Swirl-Free Protocol</span>
                </div>
              </div>

              {/* Official Corporate Entity Badge */}
              <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 text-xs space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-neutral-900">Commercial Registration Entity:</span>
                  <span className="text-[11px] font-semibold text-[#E52332]">Kingdom of Bahrain</span>
                </div>
                <div className="text-neutral-700 font-medium">
                  Glossify BH Auto Car Wash Co. W.L.L · <span dir="rtl" className="font-sans font-bold text-neutral-900">شركة جلوسيفاي لغسيل السيارات ذ.م.م</span>
                </div>
                <div className="text-neutral-500 text-[11px]">
                  Registered Office: Building 3365B, Road 361, Madinat Hamad 1203 · Operations: <a href="mailto:glossifybahrain@gmail.com" className="text-[#E52332] hover:underline">glossifybahrain@gmail.com</a>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onBookNow()}
                  className="px-6 py-3.5 bg-[#E52332] hover:bg-[#c91826] active:scale-95 text-white rounded-lg font-bold text-xs uppercase tracking-wider transition-all inline-flex items-center gap-2 cursor-pointer shadow-md"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Request a Mobile Appointment</span>
                </button>
                <a
                  href="https://www.instagram.com/glossify.bh.1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 rounded-lg font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2"
                >
                  <span>Instagram @glossify.bh.1</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION C: VERIFIED SERVICES OVERVIEW */}
      <section className="py-24 bg-[#EAF5FC] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#E52332]">
                Precision Car Care
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17191D] tracking-tight mt-1 font-display">
                Tailored Services for Every Vehicle
              </h2>
              <p className="text-sm text-neutral-600 mt-2 max-w-xl">
                Every service uses certified detailing procedures, pH-neutral cleaners, and dedicated tools to protect your investment.
              </p>
            </div>

            <button
              onClick={() => {
                onNavigate('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E52332] hover:text-[#c91826] cursor-pointer"
            >
              <span>View All Detailed Packages</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Asymmetric Editorial Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {VERIFIED_SERVICES.slice(0, 3).map((service, idx) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl overflow-hidden border border-neutral-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white bg-black/60 backdrop-blur-md rounded border border-white/20">
                      {service.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 text-xs text-white bg-[#E52332] px-2.5 py-0.5 rounded font-bold">
                    {service.estimatedDuration}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-xs text-neutral-500 font-mono mb-1">
                      0{idx + 1}. DETAILED SPECIALTY
                    </div>
                    <h3 className="text-xl font-bold text-[#17191D] tracking-tight group-hover:text-[#E52332] transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-sm text-neutral-600 mt-3 leading-relaxed">
                      {service.shortDesc}
                    </p>

                    <div className="mt-4 pt-4 border-t border-neutral-100 space-y-1.5">
                      {service.features.slice(0, 3).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs text-neutral-700">
                          <CheckCircle className="w-3.5 h-3.5 text-[#E52332] shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-neutral-100 flex items-center justify-between">
                    <button
                      onClick={() => onBookNow(service.id)}
                      className="px-4 py-2 bg-[#E52332] hover:bg-[#c91826] text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      Book This Service
                    </button>
                    <button
                      onClick={() => {
                        onNavigate('services');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="text-xs font-semibold text-neutral-600 hover:text-neutral-900 inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Featured Banner for Signature Full Detail */}
          <div className="mt-12 bg-[#121417] text-white rounded-2xl p-8 lg:p-10 border border-neutral-800 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs uppercase tracking-widest text-[#E52332] font-bold">
                The Master Tier
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-display">
                Looking for the Complete Showroom Renewal?
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Our Signature Full Doorstep Detail combines exterior snow foam decontam, dual-action machine polishing, thermal interior steam extraction, engine bay care, and hydrophobic protection in one comprehensive visit.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
              <button
                onClick={() => onBookNow('signature-full-detail')}
                className="w-full sm:w-auto px-6 py-3.5 bg-[#E52332] hover:bg-[#c91826] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer text-center"
              >
                Book Signature Detail
              </button>
              <a
                href="https://wa.me/97366978531?text=Hello%20Glossify%20BH,%20I%20am%20interested%20in%20the%20Signature%20Full%20Detail%20package."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl text-xs font-bold uppercase tracking-wider border border-neutral-700 transition-colors inline-flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Ask on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION D: THE GLOSSIFY EXPERIENCE */}
      <section className="py-24 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs font-bold uppercase tracking-widest text-[#E52332]">
              Workflow &amp; Convenience
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17191D] tracking-tight mt-2 font-display">
              Your Driveway. Our Detailing Studio.
            </h2>
            <p className="text-base text-neutral-600 mt-4 leading-relaxed font-normal">
              No sitting in crowded waiting rooms, no wasted fuel, and no wondering what harsh chemicals are touching your vehicle. Here is how our mobile service brings precision to you:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="border border-neutral-200 p-6 rounded-2xl bg-white hover:border-[#E52332] transition-colors relative">
              <div className="text-3xl font-extrabold text-[#E52332] font-mono mb-4">01</div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2">Book in 60 Seconds</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Choose your service and preferred arrival slot via our website or quick WhatsApp chat. No payment required upfront.
              </p>
            </div>

            <div className="border border-neutral-200 p-6 rounded-2xl bg-white hover:border-[#E52332] transition-colors relative">
              <div className="text-3xl font-extrabold text-[#E52332] font-mono mb-4">02</div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2">Mobile Unit Arrives</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Our custom van arrives at your home or workplace equipped with purified water, quiet power, and detailing rigs.
              </p>
            </div>

            <div className="border border-neutral-200 p-6 rounded-2xl bg-white hover:border-[#E52332] transition-colors relative">
              <div className="text-3xl font-extrabold text-[#E52332] font-mono mb-4">03</div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2">Artisan Detailing</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                We perform scratch-free foam washing, machine polishing, and thermal steam sanitation right before your eyes.
              </p>
            </div>

            <div className="border border-neutral-200 p-6 rounded-2xl bg-white hover:border-[#E52332] transition-colors relative">
              <div className="text-3xl font-extrabold text-[#E52332] font-mono mb-4">04</div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2">Inspect &amp; Enjoy</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Inspect the liquid glass reflection and immaculate interior cabin. Settle simply via BenefitPay or cash.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION E: VISUAL TRANSFORMATION GALLERY */}
      <section className="py-24 bg-[#121417] text-white border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#E52332]">
                Verified Workmanship
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1 font-display">
                Visual Transformation Gallery
              </h2>
              <p className="text-sm text-neutral-400 mt-2 max-w-xl">
                Experience real automotive finishes. Interact with the slider below to inspect swirl removal and liquid gloss clarity.
              </p>
            </div>

            <button
              onClick={() => {
                onNavigate('gallery');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white hover:text-[#E52332] cursor-pointer"
            >
              <span>Explore Full Portfolio</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Interactive Before / After Slider */}
          <div className="max-w-4xl mx-auto mb-16">
            <BeforeAfterSlider
              beforeImage="/images/machine_polishing_gloss_1793786287600.jpg"
              afterImage="/images/flawless_beading_finish_1793786289182.jpg"
              beforeLabel="Swirled Clear Coat & Oxidation"
              afterLabel="GLOSSIFY Machine Polished & Sealed"
              vehicleLabel="Porsche 911 Carrera S · Metallic Clear Coat Correction"
            />
          </div>

          {/* Photographic Preview Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative rounded-xl overflow-hidden aspect-[4/3] group border border-neutral-800">
              <img
                src="/images/hero_detailing_foam_1793786285151.jpg"
                alt="Snow Foam Pre-wash on Mercedes AMG"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] uppercase font-bold text-[#E52332]">Exterior Pre-Wash</span>
                <div className="text-sm font-bold text-white">Thick Foam Dirt Encapsulation</div>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden aspect-[4/3] group border border-neutral-800">
              <img
                src="/images/interior_steam_leather_1793786287269.jpg"
                alt="Thermal Leather Steam Detailing"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] uppercase font-bold text-[#E52332]">Interior Cabin</span>
                <div className="text-sm font-bold text-white">Steam Extraction &amp; UV Conditioner</div>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden aspect-[4/3] group border border-neutral-800">
              <img
                src="/images/mobile_van_doorstep_1793786285560.jpg"
                alt="Mobile Van Doorstep Detailing Unit in Bahrain"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] uppercase font-bold text-[#E52332]">On-Site Mobility</span>
                <div className="text-sm font-bold text-white">Direct Villa &amp; Office Service</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION F: WHY CHOOSE GLOSSIFY */}
      <section className="py-24 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-5">
              <div className="text-xs font-bold uppercase tracking-widest text-[#E52332]">
                Genuine Business Advantages
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17191D] tracking-tight font-display">
                Engineered for Customer Comfort &amp; Paint Longevity
              </h2>
              <p className="text-sm text-neutral-600 leading-relaxed">
                We believe exceptional car care shouldn&apos;t require spending hours driving through traffic or waiting on hard plastic chairs. We engineered our business around complete customer convenience.
              </p>

              <div className="pt-2">
                <a
                  href="https://wa.me/97366978531"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E52332] hover:underline"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Call Dispatch Hotline: +973 6697 8531</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-[#EAF5FC] rounded-2xl border border-neutral-200">
                <div className="w-10 h-10 rounded-lg bg-[#E52332] text-white flex items-center justify-center font-bold mb-4">
                  <Truck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-neutral-900 mb-1.5">Zero Driveway Footprint</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Our custom vans carry their own filtered water supply and suppressed generators. You never need to supply hoses or extension cords.
                </p>
              </div>

              <div className="p-6 bg-[#EAF5FC] rounded-2xl border border-neutral-200">
                <div className="w-10 h-10 rounded-lg bg-[#E52332] text-white flex items-center justify-center font-bold mb-4">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-neutral-900 mb-1.5">Scratch-Free Method</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Two-bucket grit guard systems, ultra-soft microfibers, and pH-neutral lubricated foams guarantee your clear coat stays swirl-free.
                </p>
              </div>

              <div className="p-6 bg-[#EAF5FC] rounded-2xl border border-neutral-200">
                <div className="w-10 h-10 rounded-lg bg-[#E52332] text-white flex items-center justify-center font-bold mb-4">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-neutral-900 mb-1.5">Direct WhatsApp Dispatch</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Fast, human communication. Confirm times, share your live GPS pin, and receive arrival updates directly on WhatsApp.
                </p>
              </div>

              <div className="p-6 bg-[#EAF5FC] rounded-2xl border border-neutral-200">
                <div className="w-10 h-10 rounded-lg bg-[#E52332] text-white flex items-center justify-center font-bold mb-4">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-neutral-900 mb-1.5">Kingdom-Wide Coverage</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Serving residential villas, executive offices, and compounds across Manama, Riffa, Saar, Amwaj, Seef, and all Bahrain areas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION G: STRONG CONVERSION SECTION */}
      <section className="py-20 bg-gradient-to-r from-[#c91826] via-[#E52332] to-[#b31422] text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="text-xs uppercase tracking-widest text-white/80 font-bold mb-3">
            Schedule Your Mobile Visit
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display text-balance">
            Ready to Bring Back That Showroom Shine?
          </h2>
          <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto mt-4 leading-relaxed font-normal">
            Treat your vehicle to Bahrain&apos;s premier doorstep car care. Send a booking request in seconds and let our mobile unit take care of the rest.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onBookNow()}
              className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-neutral-100 text-[#E52332] rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-xl active:scale-95 cursor-pointer"
            >
              Book Your Service Now
            </button>

            <a
              href="https://wa.me/97366978531?text=Hello%20Glossify%20BH,%20I%20would%20like%20to%20book%20a%20car%20wash%20or%20polishing%20service."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-black/30 hover:bg-black/40 text-white rounded-xl font-bold text-xs uppercase tracking-wider border border-white/30 backdrop-blur-md transition-all inline-flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 fill-current text-white" />
              <span>Chat via WhatsApp (+973 6697 8531)</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
