'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { weddingPackages, WeddingPackage } from '../../data/packagesData';
import { useConsultation } from '../../components/ConsultationContext';
import { 
  Sparkles, 
  CheckCircle2, 
  Users, 
  Compass, 
  ShieldCheck, 
  Calendar, 
  HelpCircle, 
  ArrowRight,
  ChevronDown
} from 'lucide-react';

export default function PackagesPage() {
  const { openConsultation } = useConsultation();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: 'How are wedding planning fees structured at THE GRAND AFFAIR?',
      a: 'We operate on a transparent fixed-management fee model tailored to the scope, number of ceremonial days, destination logistics, and guest size. We never take hidden vendor commissions or markups; all commercial discounts negotiated with palace venues and master artisans are passed 100% directly to you.'
    },
    {
      q: 'Can packages be customized for bespoke multi-day itineraries?',
      a: 'Absolutely. Every royal wedding is inherently bespoke. The packages presented here serve as structural frameworks. During your initial private consultation, we craft an itemized scope matching your exact ceremonial needs, whether that includes an intimate Sufi night, a 500-guest sangeet, or a private island phera ceremony.'
    },
    {
      q: 'When should we begin the planning process with your team?',
      a: 'For royal heritage palaces in Udaipur and Jaipur during peak winter wedding seasons (November to February), we recommend engaging our team 9 to 14 months in advance to secure premier palace dates and luxury room allocations. For intimate havelis and botanical escapes, 6 to 9 months is ideal.'
    },
    {
      q: 'Do you manage international guest logistics and visas?',
      a: 'Yes. Our dedicated hospitality concierge manages private airport transfers, charter coordination, hotel check-ins, custom welcome gift styling, dietary preferences, and dedicated multi-lingual guest managers throughout the celebration.'
    }
  ];

  return (
    <div className="min-h-screen bg-sand text-charcoal">
      {/* 1. ATMOSPHERIC PHOTOGRAPHIC HERO */}
      <section className="relative min-h-[75vh] md:min-h-[82vh] flex items-center justify-center overflow-hidden py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=2000&q=85"
            alt="Luxury Wedding Packages & Investment"
            fill
            priority
            className="object-cover object-center scale-105 transition-transform duration-1000"
          />
          {/* Deep luxury gradient scrims for maximum contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-burgundy-950/95 via-burgundy-950/85 to-charcoal-950/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-burgundy-950 via-transparent to-burgundy-950/70" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center text-white py-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-burgundy-900/90 border border-gold-400 text-gold-300 text-xs font-mono font-medium tracking-widest uppercase mb-6 backdrop-blur-md shadow-gold-glow">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>INVESTMENT & PLANNING FRAMEWORKS</span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-wide text-white leading-[1.08] mb-6 drop-shadow-md">
            Bespoke Planning <br />
            <span className="text-gold-gradient italic font-normal lowercase font-editorial">& Curated Packages</span>
          </h1>

          <p className="font-editorial text-lg sm:text-2xl italic text-white/95 leading-relaxed mb-10 max-w-2xl mx-auto drop-shadow">
            &ldquo;Transparent, meticulous planning frameworks tailored for intimate heritage gatherings, destination escapes, and grand multi-day royal celebrations.&rdquo;
          </p>

          {/* High-Contrast Unmissable CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
            <button
              onClick={() => openConsultation('General Package Consultation')}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 hover:from-gold-300 hover:to-gold-400 text-burgundy-950 font-editorial font-bold text-base tracking-wider uppercase rounded-full shadow-[0_4px_25px_rgba(216,194,157,0.5)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 fill-current text-burgundy-950" />
              <span>Request Custom Estimate</span>
            </button>
            <Link
              href="/planning"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white border-2 border-gold-400/80 hover:border-gold-300 font-editorial font-bold text-base tracking-wider uppercase rounded-full backdrop-blur-md transition-all transform hover:-translate-y-0.5 group cursor-pointer"
            >
              <span>Explore 9-Phase Journey</span>
              <ArrowRight className="w-4 h-4 text-gold-300 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. TRANSPARENT PRICING PHILOSOPHY */}
      <section className="py-16 bg-ivory border-b border-rose-gold/25 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="text-gold uppercase tracking-[0.25em] text-xs font-semibold">
            The Grand Affair Promise
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-burgundy">
            Uncompromising Transparency, Zero Hidden Markups
          </h2>
          <p className="text-charcoal-light font-light text-base leading-relaxed">
            Unlike traditional brokers, our management fee is 100% transparent. Every floral stem, sound rig, and palace master suite is contracted directly at honest preferred rates negotiated by our directors.
          </p>
        </div>
      </section>

      {/* 3. PACKAGES CARDS GRID */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold uppercase tracking-[0.25em] text-xs font-semibold">
            Curated Frameworks
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-burgundy mt-2 mb-4">
            Select Your Planning Scope
          </h2>
          <div className="w-16 h-px bg-gold mx-auto mb-6" />
          <p className="text-charcoal-light font-light text-base leading-relaxed">
            From intimate boutique havelis to complete 360° royal palace productions, each tier provides complete peace of mind, artistic brilliance, and flawless execution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {weddingPackages.map((pkg, idx) => {
            const isHighlight = pkg.isPopular;

            return (
              <div
                key={pkg.id}
                className={`flex flex-col justify-between rounded-sm transition-all duration-300 relative ${
                  isHighlight
                    ? 'bg-burgundy text-ivory shadow-2xl border-2 border-gold scale-100 lg:-translate-y-4'
                    : 'bg-white text-charcoal shadow-md border border-rose-gold/25 hover:shadow-xl'
                }`}
              >
                {/* Popular Badge */}
                {isHighlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold text-burgundy-dark text-xs uppercase font-semibold tracking-widest rounded-full shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Most Requested Signature Tier</span>
                  </div>
                )}

                <div className="p-8 sm:p-10">
                  <div className="mb-6">
                    <span className={`text-xs uppercase tracking-widest block mb-2 font-medium ${
                      isHighlight ? 'text-gold-light' : 'text-gold'
                    }`}>
                      {pkg.guestCapacity}
                    </span>
                    <h3 className={`font-serif text-2xl sm:text-3xl mb-3 ${
                      isHighlight ? 'text-ivory' : 'text-burgundy'
                    }`}>
                      {pkg.title}
                    </h3>
                    <p className={`text-sm font-light leading-relaxed ${
                      isHighlight ? 'text-ivory/80' : 'text-charcoal-light'
                    }`}>
                      {pkg.subtitle}
                    </p>
                  </div>

                  {/* Indicative Investment */}
                  <div className={`p-4 rounded-sm mb-8 ${
                    isHighlight ? 'bg-burgundy-dark/60 border border-gold/30' : 'bg-sand border border-rose-gold/20'
                  }`}>
                    <span className={`text-[10px] uppercase tracking-wider block font-medium ${
                      isHighlight ? 'text-gold' : 'text-charcoal-light'
                    }`}>
                      Planning & Direction Fee
                    </span>
                    <span className={`font-serif text-xl font-medium ${
                      isHighlight ? 'text-ivory' : 'text-burgundy'
                    }`}>
                      {pkg.indicativeInvestment}
                    </span>
                  </div>

                  {/* Operational Capabilities */}
                  <div className="space-y-4 mb-8 text-xs">
                    <div>
                      <span className={`font-semibold block mb-0.5 ${isHighlight ? 'text-gold' : 'text-charcoal'}`}>
                        Planning Team:
                      </span>
                      <p className={isHighlight ? 'text-ivory/80 font-light' : 'text-charcoal-light font-light'}>
                        {pkg.planningSupport}
                      </p>
                    </div>

                    <div>
                      <span className={`font-semibold block mb-0.5 ${isHighlight ? 'text-gold' : 'text-charcoal'}`}>
                        Décor & Scenography:
                      </span>
                      <p className={isHighlight ? 'text-ivory/80 font-light' : 'text-charcoal-light font-light'}>
                        {pkg.decorCoordination}
                      </p>
                    </div>

                    <div>
                      <span className={`font-semibold block mb-0.5 ${isHighlight ? 'text-gold' : 'text-charcoal'}`}>
                        Guest Hospitality:
                      </span>
                      <p className={isHighlight ? 'text-ivory/80 font-light' : 'text-charcoal-light font-light'}>
                        {pkg.hospitalityManagement}
                      </p>
                    </div>
                  </div>

                  {/* Inclusions List */}
                  <div className={`pt-6 border-t ${
                    isHighlight ? 'border-rose-gold/20' : 'border-rose-gold/15'
                  }`}>
                    <span className={`text-xs uppercase tracking-widest font-semibold block mb-4 ${
                      isHighlight ? 'text-gold' : 'text-charcoal'
                    }`}>
                      Key Inclusions
                    </span>
                    <ul className="space-y-3">
                      {pkg.keyInclusions.map((inc, iIdx) => (
                        <li key={iIdx} className="flex items-start gap-2.5 text-xs">
                          <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${
                            isHighlight ? 'text-gold' : 'text-gold'
                          }`} />
                          <span className={isHighlight ? 'text-ivory/90 font-light' : 'text-charcoal-light font-light'}>
                            {inc}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={`p-8 pt-0`}>
                  <button
                    onClick={() => openConsultation(pkg.title)}
                    className={`w-full py-4 rounded-full text-xs uppercase font-bold tracking-widest transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                      isHighlight
                        ? 'bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 hover:from-gold-300 hover:to-gold-400 text-burgundy-950 shadow-gold-glow'
                        : 'bg-burgundy-900 hover:bg-burgundy-800 text-gold-300 border border-gold-500/40 shadow-md'
                    }`}
                  >
                    <span>Inquire About This Tier</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. COMPARISON MATRIX OVERVIEW */}
      <section className="py-20 bg-ivory border-t border-rose-gold/20 px-6 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold uppercase tracking-[0.25em] text-xs font-semibold">
              Side-by-Side Scope
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-burgundy mt-2 mb-4">
              Planning Frameworks Comparison
            </h2>
            <div className="w-16 h-px bg-gold mx-auto" />
          </div>

          <div className="overflow-x-auto shadow-md rounded-sm border border-rose-gold/30 bg-white">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-sand border-b border-rose-gold/30 text-burgundy font-serif text-sm">
                  <th className="p-4 sm:p-5 font-normal">Feature / Service</th>
                  <th className="p-4 sm:p-5 font-normal">Intimate (Up to 100)</th>
                  <th className="p-4 sm:p-5 font-normal">Classic (100–300)</th>
                  <th className="p-4 sm:p-5 font-normal">Full-Service (200–500)</th>
                  <th className="p-4 sm:p-5 font-normal">Royal Production (300+)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-rose-gold/15 text-charcoal">
                <tr>
                  <td className="p-4 sm:p-5 font-medium">Dedicated Lead Architect</td>
                  <td className="p-4 sm:p-5 text-charcoal-light">Lead Planner</td>
                  <td className="p-4 sm:p-5 text-charcoal-light">Senior Architect</td>
                  <td className="p-4 sm:p-5 text-gold font-medium">Founding Partner & Senior Lead</td>
                  <td className="p-4 sm:p-5 text-gold font-medium">Founding Partner & Master Crew</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-medium">3D Spatial Renders & Floorplans</td>
                  <td className="p-4 sm:p-5 text-charcoal-light">Concept Moodboard</td>
                  <td className="p-4 sm:p-5 text-charcoal-light">2D Spatial Plans</td>
                  <td className="p-4 sm:p-5 text-charcoal-light">Photorealistic 3D Renders</td>
                  <td className="p-4 sm:p-5 text-gold font-medium">VR Walkthroughs & Master 3D</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-medium">Airport & Hospitality Concierge</td>
                  <td className="p-4 sm:p-5 text-charcoal-light">RSVP Tracking</td>
                  <td className="p-4 sm:p-5 text-charcoal-light">Airport Meet & Greet</td>
                  <td className="p-4 sm:p-5 text-charcoal-light">Full Dedicated Concierge Desk</td>
                  <td className="p-4 sm:p-5 text-gold font-medium">VIP Protocol & Private Charters</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-medium">On-Ground Coordination Crew</td>
                  <td className="p-4 sm:p-5 text-charcoal-light">2 Managers</td>
                  <td className="p-4 sm:p-5 text-charcoal-light">5 Managers</td>
                  <td className="p-4 sm:p-5 text-charcoal-light">12 Specialists</td>
                  <td className="p-4 sm:p-5 text-gold font-medium">25+ Coordinated Officers</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-medium">Bridal & Groom Shadows</td>
                  <td className="p-4 sm:p-5 text-charcoal-light">Optional</td>
                  <td className="p-4 sm:p-5 text-charcoal-light">1 Dedicated Shadow</td>
                  <td className="p-4 sm:p-5 text-charcoal-light">2 Dedicated Shadows</td>
                  <td className="p-4 sm:p-5 text-gold font-medium">Full Wardrobe & Beauty Attendants</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. FREQUENTLY ASKED QUESTIONS ACCORDION */}
      <section className="py-20 md:py-28 max-w-4xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <span className="text-gold uppercase tracking-[0.25em] text-xs font-semibold">
            Common Questions
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-burgundy mt-2 mb-4">
            Understanding Your Investment
          </h2>
          <div className="w-16 h-px bg-gold mx-auto" />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={idx}
                className="border border-rose-gold/25 rounded-sm bg-white overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer hover:bg-sand/30 transition-colors"
                >
                  <span className="font-serif text-lg text-burgundy font-medium pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-gold shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`} />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-charcoal-light text-sm font-light leading-relaxed border-t border-rose-gold/15 bg-sand/10">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. CALL TO ACTION BANNER */}
      <section className="py-20 bg-burgundy-dark text-ivory relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <Sparkles className="w-8 h-8 text-gold mx-auto mb-4" />
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-6">
            Require a Custom Tailored Scope?
          </h2>
          <p className="text-ivory/80 max-w-2xl mx-auto text-base sm:text-lg font-light mb-10 leading-relaxed">
            Every palace and couple has unique logistical nuances. Schedule a private consultation to receive a comprehensive, itemized budget proposal.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => openConsultation('Bespoke Architecture Request')}
              className="px-8 py-4 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 hover:from-gold-300 hover:to-gold-400 text-burgundy-950 font-editorial font-bold text-sm tracking-widest uppercase rounded-full shadow-[0_4px_25px_rgba(216,194,157,0.5)] transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              Book Private Consultation
            </button>
            <Link
              href="/contact"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border-2 border-gold-400/80 hover:border-gold-300 font-editorial font-bold text-sm tracking-widest uppercase rounded-full backdrop-blur-md transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              Visit Our Private Studios
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
