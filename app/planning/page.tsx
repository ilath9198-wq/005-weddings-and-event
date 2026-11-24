'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Heart, 
  Calendar, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  Clock,
  ShieldCheck,
  FileText
} from 'lucide-react';
import { planningSteps } from '../../data/planningSteps';
import { useConsultation } from '../../components/ConsultationContext';

export default function PlanningPage() {
  const { openConsultation } = useConsultation();

  return (
    <div className="w-full">
      {/* =========================================================================
          HERO SECTION (MANDATORY: Atmospheric Photographic Editorial Background)
          ========================================================================= */}
      <section className="relative min-h-[50vh] sm:min-h-[55vh] flex items-center justify-center overflow-hidden py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=85"
            alt="THE GRAND AFFAIR Wedding Planning Journey"
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
              <Calendar className="w-3.5 h-3.5 text-gold-400" />
              <span>THE 9-PHASE ARCHITECTURE</span>
            </div>
            <h1 className="font-editorial text-4xl sm:text-6xl font-bold uppercase tracking-wide text-white leading-tight mb-4">
              The Complete Wedding Planning Journey
            </h1>
            <p className="font-editorial text-lg sm:text-xl italic text-white/95 leading-relaxed max-w-2xl font-normal mb-8">
              &ldquo;Step by step, we transform abstract dreams into a flawless, stress-free royal celebration. Here is how your forever unfolds.&rdquo;
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => openConsultation('Wedding Roadmap Planning')}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 hover:from-gold-300 hover:to-gold-400 text-burgundy-950 font-editorial font-bold text-sm sm:text-base tracking-wider uppercase rounded-full shadow-[0_4px_25px_rgba(216,194,157,0.5)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Heart className="w-4 h-4 fill-current text-burgundy-950" />
                <span>Start Your Wedding Roadmap</span>
              </button>

              <Link
                href="/packages"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white border-2 border-gold-400/80 hover:border-gold-300 font-editorial font-bold text-sm sm:text-base tracking-wider uppercase rounded-full backdrop-blur-md transition-all transform hover:-translate-y-0.5 group cursor-pointer"
              >
                <span>View Planning Packages</span>
                <ArrowRight className="w-4 h-4 text-gold-300 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          EDITORIAL VISUAL TIMELINE OF 9 PLANNING PHASES
          ========================================================================= */}
      <section className="py-24 bg-ivory-50 border-t border-gold-500/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {planningSteps.map((phase, index) => {
              const isEven = index % 2 === 1;

              return (
                <div
                  key={phase.step}
                  className="relative p-8 sm:p-10 bg-white border border-gold-500/30 rounded-3xl shadow-luxury hover:border-gold-500 transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 mb-4 border-b border-ivory-300">
                    <div className="flex items-center gap-3">
                      <span className="w-10 h-10 rounded-full bg-burgundy-900 text-gold-300 font-editorial font-bold text-lg flex items-center justify-center shrink-0">
                        {phase.number}
                      </span>
                      <div>
                        <span className="text-[10px] font-mono tracking-widest uppercase text-gold-600 font-bold block">
                          {phase.step}
                        </span>
                        <h3 className="font-editorial text-2xl sm:text-3xl font-bold uppercase text-burgundy-950">
                          {phase.title}
                        </h3>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-ivory-100 border border-gold-400/30 text-xs font-mono text-gold-700 font-semibold self-start sm:self-auto">
                      {phase.timeline}
                    </span>
                  </div>

                  <p className="font-editorial text-base italic text-gold-700 mb-3">
                    &ldquo;{phase.subtitle}&rdquo;
                  </p>
                  
                  <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed mb-6">
                    {phase.description}
                  </p>

                  <div className="p-4 bg-ivory-100/70 border border-gold-400/20 rounded-2xl">
                    <span className="text-[10px] font-mono tracking-widest text-burgundy-950 font-bold uppercase block mb-2">
                      PHASE DELIVERABLES:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-charcoal-800">
                      {phase.deliverables.map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                          <span className="truncate">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center space-y-4">
            <h3 className="font-editorial text-2xl font-bold uppercase text-burgundy-950">
              Ready To Embark On Your Wedding Journey?
            </h3>
            <p className="text-xs text-charcoal-600 max-w-md mx-auto">
              Schedule an introductory chemistry call with our Principal Wedding Architect.
            </p>
            <button
              onClick={() => openConsultation('Wedding Planning Journey Initiation')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-burgundy-900 hover:bg-burgundy-800 text-gold-300 font-editorial font-bold text-xs uppercase tracking-widest rounded-full transition-all shadow-md"
            >
              <Heart className="w-4 h-4 fill-current text-gold-400" />
              <span>Begin Your Consultation Today</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
