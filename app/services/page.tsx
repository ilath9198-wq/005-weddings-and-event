'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Sparkles, 
  CheckCircle2, 
  Heart, 
  ArrowRight, 
  Check, 
  Gem, 
  X,
  Calendar
} from 'lucide-react';
import { weddingServices, WeddingService } from '../../data/servicesData';
import { useConsultation } from '../../components/ConsultationContext';

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [selectedService, setSelectedService] = useState<WeddingService | null>(null);
  const { openConsultation } = useConsultation();

  const tabs = [
    { key: 'all', label: 'All Services (12)' },
    { key: 'planning', label: 'Turnkey Planning' },
    { key: 'decor', label: 'Décor & Floristry' },
    { key: 'ceremony', label: 'Rituals & Galas' },
    { key: 'hospitality', label: 'Hospitality & Gastronomy' },
  ];

  const filteredServices = activeTab === 'all'
    ? weddingServices
    : weddingServices.filter((s) => s.category === activeTab);

  return (
    <div className="w-full">
      {/* =========================================================================
          HERO SECTION (MANDATORY: Atmospheric Photographic Editorial Background)
          ========================================================================= */}
      <section className="relative min-h-[50vh] sm:min-h-[55vh] flex items-center justify-center overflow-hidden py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=2000&q=85"
            alt="THE GRAND AFFAIR Floral Styling Services"
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
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              <span>BESPOKE WEDDING DISCIPLINES</span>
            </div>
            <h1 className="font-editorial text-4xl sm:text-6xl font-bold uppercase tracking-wide text-white leading-tight mb-4">
              Curated Wedding & Celebration Services
            </h1>
            <p className="font-editorial text-lg sm:text-xl italic text-white/95 leading-relaxed max-w-2xl font-normal mb-8">
              &ldquo;From sacred Vedic mandaps to glamorous cocktail galas and international guest hospitality. Crafted with royal sophistication.&rdquo;
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => openConsultation('Services Overview Consultation')}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 hover:from-gold-300 hover:to-gold-400 text-burgundy-950 font-editorial font-bold text-sm sm:text-base tracking-wider uppercase rounded-full shadow-[0_4px_25px_rgba(216,194,157,0.5)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Heart className="w-4 h-4 fill-current text-burgundy-950" />
                <span>Book Service Consultation</span>
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById('services-grid');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white border-2 border-gold-400/80 hover:border-gold-300 font-editorial font-bold text-sm sm:text-base tracking-wider uppercase rounded-full backdrop-blur-md transition-all transform hover:-translate-y-0.5 group cursor-pointer"
              >
                <span>Browse All 12 Disciplines</span>
                <ArrowRight className="w-4 h-4 text-gold-300 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SERVICES FILTER & CATALOG
          ========================================================================= */}
      <section id="services-grid" className="py-20 bg-ivory-50 border-t border-gold-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-14 scrollbar-none no-scrollbar">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-editorial tracking-wider uppercase transition-all ${
                    isActive
                      ? 'bg-burgundy-900 text-gold-300 font-bold shadow-md scale-105'
                      : 'bg-white border border-gold-500/30 text-charcoal-700 hover:border-burgundy-900 hover:text-burgundy-900'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((svc) => (
              <div
                key={svc.id}
                className="group luxury-card rounded-2xl overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-ivory-200">
                    <Image
                      src={svc.image}
                      alt={svc.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-burgundy-950/70 via-transparent to-black/20" />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase bg-burgundy-950/80 backdrop-blur-md border border-gold-500/40 text-gold-300">
                      {svc.category.toUpperCase()}
                    </span>
                  </div>

                  <div className="p-7">
                    <h3 className="font-editorial text-2xl font-bold uppercase text-burgundy-950 group-hover:text-gold-700 transition-colors mb-2">
                      {svc.title}
                    </h3>
                    <p className="text-xs text-charcoal-600 leading-relaxed mb-5">
                      {svc.description}
                    </p>

                    <ul className="space-y-2 text-xs text-charcoal-700 mb-6">
                      {svc.highlights.map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                          <span className="truncate">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="px-7 pb-7 pt-0 grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setSelectedService(svc)}
                    className="py-2.5 px-3 rounded-full border border-gold-500/40 text-charcoal-800 hover:bg-ivory-200 text-xs font-editorial font-bold uppercase tracking-wider transition-colors text-center"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => openConsultation(svc.title)}
                    className="py-2.5 px-3 rounded-full bg-burgundy-900 hover:bg-burgundy-800 text-gold-300 text-xs font-editorial font-bold uppercase tracking-wider transition-all text-center shadow-sm"
                  >
                    Inquire Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          DETAILED SERVICE MODAL
          ========================================================================= */}
      {selectedService && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md text-charcoal-900"
          onClick={() => setSelectedService(null)}
        >
          <div 
            className="relative w-full max-w-2xl bg-white border border-gold-500/40 rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/9] w-full bg-ivory-200">
              <Image
                src={selectedService.image}
                alt={selectedService.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-burgundy-950/80 via-transparent to-black/30" />
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-burgundy-900/80 text-white flex items-center justify-center hover:bg-burgundy-800 transition-colors"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <span className="text-[10px] font-mono tracking-widest uppercase text-gold-600 font-bold block mb-1">
                {selectedService.category.toUpperCase()}
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold uppercase text-burgundy-950 mb-3">
                {selectedService.title}
              </h3>
              <p className="text-sm text-charcoal-700 leading-relaxed mb-6">
                {selectedService.description}
              </p>

              <h4 className="text-xs font-mono font-bold text-gold-700 uppercase tracking-wider mb-3">
                WHAT THIS SERVICE INCLUDES:
              </h4>
              <ul className="space-y-2 mb-6">
                {selectedService.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-charcoal-800">
                    <Check className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between pt-4 border-t border-ivory-300">
                <span className="text-xs text-charcoal-500 font-editorial italic">
                  Customized for each celebration.
                </span>
                <button
                  onClick={() => {
                    const title = selectedService.title;
                    setSelectedService(null);
                    openConsultation(title);
                  }}
                  className="px-6 py-2.5 bg-burgundy-900 hover:bg-burgundy-800 text-gold-300 font-editorial font-bold text-xs uppercase tracking-wider rounded-full shadow-md transition-all"
                >
                  Inquire For This Service
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
