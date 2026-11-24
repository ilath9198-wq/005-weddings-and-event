'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Crown, 
  MapPin, 
  Users, 
  Bed, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  Compass
} from 'lucide-react';
import { weddingVenues, WeddingVenue } from '../../data/venuesData';
import { useConsultation } from '../../components/ConsultationContext';

export default function VenuesPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const { openConsultation } = useConsultation();

  const categories = [
    { key: 'all', label: 'All Sanctuaries (7)' },
    { key: 'palace', label: 'Royal Palaces' },
    { key: 'heritage', label: 'Heritage Properties' },
    { key: 'beach', label: 'Beach & Coastal' },
    { key: 'resort', label: 'Luxury Resorts' },
    { key: 'garden', label: 'Gardens & Estates' },
  ];

  const filteredVenues = activeCategory === 'all'
    ? weddingVenues
    : weddingVenues.filter((v) => v.category === activeCategory);

  return (
    <div className="w-full">
      {/* =========================================================================
          HERO SECTION (MANDATORY: Atmospheric Photographic Editorial Background)
          ========================================================================= */}
      <section className="relative min-h-[50vh] sm:min-h-[55vh] flex items-center justify-center overflow-hidden py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=2000&q=85"
            alt="THE GRAND AFFAIR Royal Wedding Palace"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-burgundy-950/95 via-burgundy-950/80 to-charcoal-950/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-burgundy-950 via-transparent to-burgundy-950/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center sm:text-left">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-burgundy-900/80 border border-gold-400/50 text-gold-300 text-xs font-mono tracking-widest uppercase mb-4 backdrop-blur-md">
              <Compass className="w-3.5 h-3.5 text-gold-400" />
              <span>EXCLUSIVE SANCTUARIES & ESTATES</span>
            </div>
            <h1 className="font-editorial text-4xl sm:text-6xl font-bold uppercase tracking-wide text-white leading-tight mb-4">
              Prestigious Wedding Venues & Palaces
            </h1>
            <p className="font-editorial text-lg sm:text-xl italic text-ivory-100/90 leading-relaxed max-w-2xl font-normal">
              &ldquo;Discover majestic Rajputana fortresses, serene lakeside pavilions, and private oceanfront retreats hand-curated for extraordinary weddings.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          VENUE CATALOG WITH CATEGORY FILTER
          ========================================================================= */}
      <section className="py-20 bg-ivory-50 border-t border-gold-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Pills */}
          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-14 scrollbar-none no-scrollbar">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-editorial tracking-wider uppercase transition-all ${
                    isActive
                      ? 'bg-burgundy-900 text-gold-300 font-bold shadow-md scale-105'
                      : 'bg-white border border-gold-500/30 text-charcoal-700 hover:border-burgundy-900 hover:text-burgundy-900'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {filteredVenues.map((venue) => (
              <div
                key={venue.id}
                className="group luxury-card rounded-3xl overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-ivory-200">
                    <Image
                      src={venue.image}
                      alt={venue.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-burgundy-950/80 via-transparent to-black/20" />
                    
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase bg-burgundy-950/80 backdrop-blur-md border border-gold-500/40 text-gold-300">
                      {venue.categoryLabel}
                    </span>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="flex items-center gap-1.5 text-xs text-gold-300 font-mono mb-1">
                        <MapPin className="w-3.5 h-3.5 text-gold-400" />
                        <span>{venue.location}</span>
                      </div>
                      <h3 className="font-editorial text-2xl sm:text-3xl font-bold uppercase tracking-wide">
                        {venue.name}
                      </h3>
                    </div>
                  </div>

                  <div className="p-7 space-y-4">
                    <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
                      {venue.description}
                    </p>

                    <div className="grid grid-cols-2 gap-3 py-3 border-y border-ivory-300 text-xs">
                      <div className="flex items-center gap-2 text-charcoal-800">
                        <Users className="w-4 h-4 text-gold-600 shrink-0" />
                        <span>Capacity: <strong>{venue.capacity}</strong></span>
                      </div>
                      <div className="flex items-center gap-2 text-charcoal-800">
                        <Bed className="w-4 h-4 text-gold-600 shrink-0" />
                        <span>Rooms: <strong>{venue.guestRooms}</strong></span>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <span className="text-[10px] font-mono tracking-widest uppercase text-gold-600 font-bold block">
                        ESTATE HIGHLIGHTS:
                      </span>
                      <ul className="space-y-1 text-xs text-charcoal-700">
                        {venue.features.map((feat, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                            <span className="truncate">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="px-7 pb-7 pt-0 flex items-center justify-between gap-4">
                  <span className="text-[11px] font-mono text-charcoal-500 italic">
                    Fictional venue showcase.
                  </span>
                  <button
                    onClick={() => openConsultation(`Venue Sourcing: ${venue.name}`)}
                    className="px-6 py-2.5 rounded-full bg-burgundy-900 hover:bg-burgundy-800 text-gold-300 text-xs font-editorial font-bold uppercase tracking-wider transition-all shadow-md"
                  >
                    Inquire Availability
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
