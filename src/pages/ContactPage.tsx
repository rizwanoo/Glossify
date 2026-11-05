import React, { useState } from 'react';
import { PageId, VehicleCategory, BookingFormData } from '../types';
import { VERIFIED_SERVICES, SERVICE_LOCATIONS_BAHRAIN } from '../data/servicesData';
import {
  Phone,
  MessageSquare,
  Instagram,
  MapPin,
  Clock,
  ShieldCheck,
  Send,
  CheckCircle2,
  Calendar,
  Truck,
  ArrowUpRight
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (_page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phoneNumber: '',
    vehicleCategory: 'sedan',
    vehicleDetails: '',
    serviceId: VERIFIED_SERVICES[0].id,
    preferredDate: '',
    preferredTimeSlot: 'Morning (08:00 AM – 12:00 PM)',
    locationArea: '',
    governorate: 'Capital / Manama',
    notes: '',
    targetNumber: '66978531'
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const selectedService = VERIFIED_SERVICES.find((s) => s.id === formData.serviceId) || VERIFIED_SERVICES[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!formData.phoneNumber.trim()) {
      setErrorMsg('Please enter your contact phone number.');
      return;
    }
    if (!formData.locationArea.trim()) {
      setErrorMsg('Please enter your address or location in Bahrain.');
      return;
    }

    setErrorMsg('');

    // Format WhatsApp message
    const message = `*GLOSSIFY BH — DIRECT BOOKING INQUIRY*
----------------------------------------
*Customer Name:* ${formData.fullName}
*Phone:* ${formData.phoneNumber}
*Vehicle Class:* ${formData.vehicleCategory.toUpperCase()} (${formData.vehicleDetails || 'Standard'})
*Service Requested:* ${selectedService.name}
*Preferred Date:* ${formData.preferredDate || 'Earliest available slot'}
*Preferred Time:* ${formData.preferredTimeSlot}
*Location:* ${formData.locationArea} (${formData.governorate})
${formData.notes ? `*Special Notes:* ${formData.notes}` : ''}
----------------------------------------
*Sent via Official Glossify BH Web Portal*`;

    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/973${formData.targetNumber}?text=${encoded}`;

    window.open(url, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <div className="w-full pt-28 pb-24 bg-white">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E52332] mb-3">
            <span>Customer Concierge</span>
            <span aria-hidden="true">·</span>
            <span>Kingdom of Bahrain</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#17191D] tracking-tight font-display text-balance">
            Direct Contact &amp; Doorstep Booking
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 mt-4 leading-relaxed font-normal">
            Reach out via phone, send a WhatsApp message, or complete the booking inquiry below. Our dispatch coordinator will confirm your appointment promptly.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Business Channels & Location Details */}
          <div className="lg:col-span-5 space-y-8">
            {/* Quick Contact Cards */}
            <div className="space-y-4">
              <h2 className="text-xs uppercase font-bold tracking-widest text-neutral-400">
                Official Direct Numbers
              </h2>

              <div className="p-6 bg-[#EAF5FC] rounded-2xl border border-neutral-200 shadow-xs">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#E52332] text-white flex items-center justify-center font-bold">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">
                    Dispatch Desk 1
                  </span>
                </div>
                <div className="text-xl font-extrabold text-neutral-900 tracking-tight">
                  +973 6697 8531
                </div>
                <p className="text-xs text-neutral-600 mt-1">
                  Main booking hotline for instant appointment scheduling &amp; inquiries.
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <a
                    href="tel:+97366978531"
                    className="px-4 py-2 bg-neutral-900 hover:bg-black text-white text-xs font-bold rounded-lg transition-colors inline-flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Hotline</span>
                  </a>
                  <a
                    href="https://wa.me/97366978531?text=Hello%20Glossify%20BH,%20I%20would%20like%20to%20book%20a%20car%20wash%20or%20polishing%20service."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg transition-colors inline-flex items-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              <div className="p-6 bg-[#EAF5FC] rounded-2xl border border-neutral-200 shadow-xs">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-neutral-800 text-white flex items-center justify-center font-bold">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">
                    Dispatch Desk 2
                  </span>
                </div>
                <div className="text-xl font-extrabold text-neutral-900 tracking-tight">
                  +973 3988 8566
                </div>
                <p className="text-xs text-neutral-600 mt-1">
                  Secondary dispatch line for mobile van tracking &amp; weekend inquiries.
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <a
                    href="tel:+97339888566"
                    className="px-4 py-2 bg-neutral-900 hover:bg-black text-white text-xs font-bold rounded-lg transition-colors inline-flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Line</span>
                  </a>
                  <a
                    href="https://wa.me/97339888566?text=Hello%20Glossify%20BH,%20I%20would%20like%20to%20book%20a%20car%20wash%20or%20polishing%20service."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg transition-colors inline-flex items-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Official Instagram Box */}
            <a
              href="https://www.instagram.com/glossify.bh.1/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-gradient-to-br from-neutral-900 to-neutral-800 text-white rounded-2xl border border-neutral-700 flex items-center justify-between group block shadow-md hover:border-[#E52332] transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#E52332] flex items-center justify-center text-white font-bold shrink-0">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs uppercase font-bold tracking-wider text-[#E52332]">
                    Official Instagram
                  </div>
                  <div className="text-base font-extrabold text-white mt-0.5">
                    @glossify.bh.1
                  </div>
                  <div className="text-xs text-neutral-400 mt-0.5">
                    Follow for recent detailing reels &amp; stories
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" />
            </a>

            {/* Business Verification Details */}
            <div className="p-6 bg-white rounded-2xl border border-neutral-200 space-y-3.5 text-xs text-neutral-700">
              <div className="flex items-center gap-2.5 font-bold text-neutral-900 text-sm">
                <ShieldCheck className="w-4 h-4 text-[#E52332]" />
                <span>Glossify BH Auto Car Wash Co. W.L.L</span>
              </div>
              <div className="text-neutral-500 text-[11px] font-sans" dir="rtl">
                شركة جلوسيفاي لغسيل السيارات ذ.م.م (سجل تجاري - مملكة البحرين)
              </div>
              <div className="flex items-start gap-2.5 text-neutral-600">
                <MapPin className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                <span>
                  Registered Address: Building 3365B, Road 361, Madinat Hamad 1203, Kingdom of Bahrain
                </span>
              </div>
              <div className="flex items-start gap-2.5 text-neutral-600">
                <Truck className="w-4 h-4 text-[#E52332] shrink-0 mt-0.5" />
                <span>
                  Mobile Service Radius: Complete island-wide coverage (Manama, Saar, Amwaj, Riffa, Seef, Jasra, Budaiya, Isa Town, etc.)
                </span>
              </div>
              <div className="flex items-center gap-2.5 text-neutral-600">
                <Clock className="w-4 h-4 text-neutral-400 shrink-0" />
                <span>Operational Hours: 7 Days a Week, 8:00 AM – 9:00 PM</span>
              </div>
              <div className="pt-2 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-500">
                <span>Operations Inquiries:</span>
                <a href="mailto:glossifybahrain@gmail.com" className="text-[#E52332] font-semibold hover:underline">
                  glossifybahrain@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Booking Inquiry Form */}
          <div id="booking-form" className="lg:col-span-7 scroll-mt-28">
            <div className="bg-white rounded-3xl border border-neutral-200 shadow-xl overflow-hidden">
              <div className="bg-[#121417] text-white p-6 sm:p-8">
                <div className="text-xs uppercase font-bold tracking-widest text-[#E52332]">
                  Instant WhatsApp Booking
                </div>
                <h2 className="text-2xl font-bold tracking-tight font-display mt-1">
                  Schedule Doorstep Service
                </h2>
                <p className="text-xs text-neutral-400 mt-1 max-w-lg">
                  Submit the form to compile your detailing request and launch a pre-formatted chat with our dispatch team.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 sm:p-12 text-center space-y-5">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-neutral-900">
                      Request Transmitted to WhatsApp!
                    </h3>
                    <p className="text-sm text-neutral-600 mt-2 max-w-md mx-auto">
                      Thank you, {formData.fullName}. Your vehicle specifications and address were compiled and forwarded to GLOSSIFY dispatch (+973 {formData.targetNumber}).
                    </p>
                  </div>

                  <div className="p-5 bg-neutral-50 rounded-2xl border border-neutral-200 text-left text-xs text-neutral-700 space-y-1.5 max-w-md mx-auto">
                    <div className="font-bold text-neutral-900">Confirmed Booking Details:</div>
                    <div><span className="text-neutral-500">Service:</span> {selectedService.name}</div>
                    <div><span className="text-neutral-500">Vehicle:</span> {formData.vehicleCategory.toUpperCase()} ({formData.vehicleDetails || 'Standard'})</div>
                    <div><span className="text-neutral-500">Area:</span> {formData.locationArea} ({formData.governorate})</div>
                    <div><span className="text-neutral-500">Slot:</span> {formData.preferredDate || 'Earliest slot'} · {formData.preferredTimeSlot}</div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                    <a
                        href={`https://wa.me/973${formData.targetNumber}?text=${encodeURIComponent(
                        `Hello Glossify BH, this is ${formData.fullName} following up on my booking request.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Re-open WhatsApp Chat</span>
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="w-full sm:w-auto px-6 py-3 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 rounded-xl font-semibold text-xs transition-colors cursor-pointer"
                    >
                      Submit Another Booking
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
                  {errorMsg && (
                    <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg font-medium">
                      {errorMsg}
                    </div>
                  )}

                  {/* Customer Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                        Customer Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Abdullah Al-Hashimi"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-3.5 py-3 text-sm bg-neutral-50 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E52332]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                        Phone / WhatsApp *
                      </label>
                      <div className="flex">
                        <span className="inline-flex items-center px-3.5 text-xs font-bold text-neutral-600 bg-neutral-200 border border-r-0 border-neutral-300 rounded-l-xl">
                          +973
                        </span>
                        <input
                          type="tel"
                          required
                          placeholder="39XXXXXX or 66XXXXXX"
                          value={formData.phoneNumber}
                          onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                          className="w-full px-3.5 py-3 text-sm bg-neutral-50 border border-neutral-300 rounded-r-xl focus:outline-none focus:ring-2 focus:ring-[#E52332]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Vehicle Type & Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                        Vehicle Category *
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {(['sedan', 'suv', 'luxury'] as VehicleCategory[]).map((cat) => (
                          <button
                            key={cat}
                            type="button"
                            onClick={() => setFormData({ ...formData, vehicleCategory: cat })}
                            className={`py-2.5 text-xs font-bold uppercase rounded-lg border transition-all cursor-pointer ${
                              formData.vehicleCategory === cat
                                ? 'bg-[#E52332] text-white border-[#E52332]'
                                : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:bg-neutral-100'
                            }`}
                          >
                            {cat === 'luxury' ? 'Supercar' : cat}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                        Vehicle Make &amp; Model
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 2024 Lexus LX600 / Black"
                        value={formData.vehicleDetails}
                        onChange={(e) => setFormData({ ...formData, vehicleDetails: e.target.value })}
                        className="w-full px-3.5 py-3 text-sm bg-neutral-50 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E52332]"
                      />
                    </div>
                  </div>

                  {/* Detailing Service Select */}
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                      Required Detailing Service *
                    </label>
                    <select
                      value={formData.serviceId}
                      onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                      className="w-full px-3.5 py-3 text-sm bg-neutral-50 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E52332]"
                    >
                      {VERIFIED_SERVICES.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.name} ({s.estimatedDuration})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Preferred Date & Arrival Slot */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                        <span>Preferred Date</span>
                      </label>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E52332]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-neutral-500" />
                        <span>Arrival Window</span>
                      </label>
                      <select
                        value={formData.preferredTimeSlot}
                        onChange={(e) => setFormData({ ...formData, preferredTimeSlot: e.target.value })}
                        className="w-full px-3.5 py-3 text-sm bg-neutral-50 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E52332]"
                      >
                        <option value="Morning (08:00 AM – 12:00 PM)">Morning (08:00 AM – 12:00 PM)</option>
                        <option value="Afternoon (12:00 PM – 04:00 PM)">Afternoon (12:00 PM – 04:00 PM)</option>
                        <option value="Evening (04:00 PM – 08:30 PM)">Evening (04:00 PM – 08:30 PM)</option>
                      </select>
                    </div>
                  </div>

                  {/* Location Area & Address */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                        Area / Governorate in Bahrain *
                      </label>
                      <select
                        value={formData.governorate}
                        onChange={(e) => setFormData({ ...formData, governorate: e.target.value })}
                        className="w-full px-3.5 py-3 text-sm bg-neutral-50 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E52332]"
                      >
                        {SERVICE_LOCATIONS_BAHRAIN.map((loc) => (
                          <option key={loc} value={loc}>
                            {loc}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                        Villa / Road / Building *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Villa 12, Road 4302, Riffa"
                        value={formData.locationArea}
                        onChange={(e) => setFormData({ ...formData, locationArea: e.target.value })}
                        className="w-full px-3.5 py-3 text-sm bg-neutral-50 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E52332]"
                      />
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                      Special Instructions / Paint Conditions (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Swirl marks visible under sun, pet hair removal needed, gate code 1234..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E52332]"
                    />
                  </div>

                  {/* Preferred Dispatch Hotline */}
                  <div className="pt-3 border-t border-neutral-200">
                    <div className="text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                      Send to Verified WhatsApp Contact:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, targetNumber: '66978531' })}
                        className={`p-3 rounded-xl border text-left font-semibold transition-all cursor-pointer flex items-center justify-between ${
                          formData.targetNumber === '66978531'
                            ? 'border-[#E52332] bg-red-50 text-[#E52332]'
                            : 'border-neutral-200 text-neutral-700 hover:bg-neutral-50'
                        }`}
                      >
                        <div>
                          <div className="font-bold">+973 6697 8531</div>
                          <div className="text-[10px] text-neutral-500">Dispatch Desk 1</div>
                        </div>
                        {formData.targetNumber === '66978531' && (
                          <span className="w-2 h-2 rounded-full bg-[#E52332]" />
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, targetNumber: '39888566' })}
                        className={`p-3 rounded-xl border text-left font-semibold transition-all cursor-pointer flex items-center justify-between ${
                          formData.targetNumber === '39888566'
                            ? 'border-[#E52332] bg-red-50 text-[#E52332]'
                            : 'border-neutral-200 text-neutral-700 hover:bg-neutral-50'
                        }`}
                      >
                        <div>
                          <div className="font-bold">+973 3988 8566</div>
                          <div className="text-[10px] text-neutral-500">Dispatch Desk 2</div>
                        </div>
                        {formData.targetNumber === '39888566' && (
                          <span className="w-2 h-2 rounded-full bg-[#E52332]" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Submit CTA */}
                  <div className="pt-3">
                    <button
                      type="submit"
                      className="w-full py-4 bg-[#E52332] hover:bg-[#c91826] active:scale-[0.99] text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-xl flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Confirm &amp; Open WhatsApp Chat</span>
                    </button>
                    <p className="text-[11px] text-neutral-500 text-center mt-2.5">
                      Direct WhatsApp link with formatted inquiry. No pre-payment required.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
