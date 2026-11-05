import React, { useState } from 'react';
import { PageId } from '../types';
import { GALLERY_ITEMS } from '../data/galleryData';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import {
  MessageSquare,
  MapPin,
  Car,
  Sliders
} from 'lucide-react';

interface GalleryPageProps {
  onNavigate: (_page: PageId) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Portfolio' },
    { id: 'exterior', label: 'Exterior Snow Foam' },
    { id: 'polish', label: 'Machine Polish & Gloss' },
    { id: 'interior', label: 'Interior Steam Clean' },
    { id: 'doorstep', label: 'Mobile Van On-Site' }
  ];

  const filteredItems = selectedCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <div className="w-full pt-28 pb-24 bg-white">
      {/* Gallery Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E52332] mb-3">
            <span>Visual Portfolio</span>
            <span aria-hidden="true">·</span>
            <span>Kingdom of Bahrain</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#17191D] tracking-tight font-display text-balance">
            Automotive Transformations &amp; Finish Gallery
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 mt-4 leading-relaxed font-normal">
            Real vehicles, real doorstep mobile results. Inspect high-gloss clear coats, swirl removal, spotless leather interiors, and our self-contained mobile van in action.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="mt-10 flex flex-wrap items-center gap-2 border-b border-neutral-200 pb-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#E52332] text-white shadow-sm'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Interactive Comparison Unit */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-[#121417] rounded-3xl p-6 sm:p-8 border border-neutral-800 text-white shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-[#E52332] flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5" />
                <span>Interactive Clarity Inspection</span>
              </span>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight mt-1">
                Before &amp; After: Machine Paint Polish
              </h2>
            </div>
            <div className="text-xs text-neutral-400">
              Drag the central handle to inspect swirl leveling &amp; gloss depth
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <BeforeAfterSlider
              beforeImage="/src/assets/images/machine_polishing_gloss_1793786287600.jpg"
              afterImage="/src/assets/images/flawless_beading_finish_1793786289182.jpg"
              beforeLabel="Before: Surface Swirls & Desert Sand Haze"
              afterLabel="After: GLOSSIFY Mirror Reflection"
              vehicleLabel="Porsche 911 Carrera S · Clear Coat Correction in Bahrain"
            />
          </div>
        </div>
      </div>

      {/* Masonry-Style Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl overflow-hidden border border-neutral-200 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white bg-black/60 backdrop-blur-md rounded border border-white/20">
                    {item.categoryLabel}
                  </span>
                </div>

                {/* Bottom Card Image Data */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-2 text-xs text-neutral-300 mb-1">
                    <Car className="w-3.5 h-3.5 text-[#E52332]" />
                    <span>{item.vehicle}</span>
                    <span>·</span>
                    <MapPin className="w-3 h-3 text-neutral-400" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-neutral-900 leading-snug group-hover:text-[#E52332] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-600 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-neutral-500">
                    Doorstep Mobile Finish
                  </span>

                  <a
                    href={`https://wa.me/97366978531?text=${encodeURIComponent(
                      `Hello Glossify BH, I saw your work on "${item.title}" (${item.vehicle}) and would like to book this exact finish for my vehicle.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#E52332] hover:bg-[#c91826] active:scale-95 text-white rounded-lg text-xs font-bold transition-all shadow-sm"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-current" />
                    <span>Book on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
