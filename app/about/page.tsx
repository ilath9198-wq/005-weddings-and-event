'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Heart, 
  Crown, 
  Sparkles, 
  CheckCircle2, 
  Gem, 
  ArrowRight,
  Award,
  Users
} from 'lucide-react';
import { weddingTeam } from '../../data/planningSteps';
import { useConsultation } from '../../components/ConsultationContext';

export default function AboutPage() {
  const { openConsultation } = useConsultation();

  return (
    <div className="w-full">
      {/* =========================================================================
          HERO SECTION (MANDATORY: Atmospheric Photographic Editorial Background)
          ========================================================================= */}
      <section className="relative min-h-[55vh] sm:min-h-[60vh] flex items-center justify-center overflow-hidden py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=2000&q=85"
            alt="THE GRAND AFFAIR Heritage Couple Celebration"
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
              <span>OUR HERITAGE & VISION</span>
            </div>
            <h1 className="font-editorial text-4xl sm:text-6xl font-bold uppercase tracking-wide text-white leading-tight mb-4">
              The Soul Behind The Grand Affair
            </h1>
            <p className="font-editorial text-lg sm:text-xl italic text-white/95 leading-relaxed max-w-2xl font-normal mb-8">
              &ldquo;For fifteen years, we have woven sacred cultural traditions and modern couture elegance into celebrations that echo for generations.&rdquo;
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => openConsultation('About Us Consultation')}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 hover:from-gold-300 hover:to-gold-400 text-burgundy-950 font-editorial font-bold text-sm sm:text-base tracking-wider uppercase rounded-full shadow-[0_4px_25px_rgba(216,194,157,0.5)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Heart className="w-4 h-4 fill-current text-burgundy-950" />
                <span>Schedule Private Consultation</span>
              </button>

              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white border-2 border-gold-400/80 hover:border-gold-300 font-editorial font-bold text-sm sm:text-base tracking-wider uppercase rounded-full backdrop-blur-md transition-all transform hover:-translate-y-0.5 group cursor-pointer"
              >
                <span>View Signature Weddings</span>
                <ArrowRight className="w-4 h-4 text-gold-300 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          BRAND STORY & PHILOSOPHY
          ========================================================================= */}
      <section className="py-24 bg-ivory-50 border-b border-gold-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono tracking-widest text-gold-600 uppercase font-bold block">
                OUR WEDDING PHILOSOPHY
              </span>
              <h2 className="font-editorial text-3xl sm:text-5xl font-bold uppercase text-burgundy-950 tracking-wide leading-tight">
                Honoring Sacred Rituals While Embracing Couture Innovation
              </h2>
              <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed">
                Founded in 2011 by Principal Wedding Architect Ananya Singhania, **THE GRAND AFFAIR** was conceived with a clear aesthetic purpose: to curate wedding celebrations where monumental royal grandeur never compromises warmth and intimacy.
              </p>
              <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed">
                We believe the most profound weddings are those where every detail tells a singular story. Whether it is an intimate pheras ceremony in a 200-year-old Mewari haveli or a four-day destination celebration in Lake Como, our team bridges ancient artisanal traditions with contemporary spatial architecture.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-ivory-300">
                <div className="space-y-1">
                  <span className="font-editorial text-xl font-bold text-burgundy-950 uppercase block">Vision</span>
                  <p className="text-xs text-charcoal-600 leading-relaxed">To be the most trusted and visionary wedding curation house, celebrating timeless love stories across the world’s most magnificent sanctuaries.</p>
                </div>
                <div className="space-y-1">
                  <span className="font-editorial text-xl font-bold text-burgundy-950 uppercase block">Mission</span>
                  <p className="text-xs text-charcoal-600 leading-relaxed">Delivering uncompromised peace of mind to our couples through flawless logistical rigor, artistic sensitivity, and genuine hospitality.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border-2 border-gold-500/40 shadow-luxury">
                <Image
                  src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=85"
                  alt="Couple Portrait in Grand Mandap"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white text-center">
                  <span className="text-[10px] font-mono tracking-widest text-gold-400 uppercase block mb-1">CRAFTED WITH INTENTION</span>
                  <p className="font-editorial text-lg italic text-ivory-100">&ldquo;Every flower placed with purpose, every light tuned to love.&rdquo;</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          PLANNING & COORDINATION EXPERTISE
          ========================================================================= */}
      <section className="py-24 bg-white border-b border-gold-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono tracking-widest text-gold-600 uppercase font-bold block">
              LOGISTICAL & ARTISTIC MASTERY
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl font-bold uppercase text-burgundy-950 tracking-wide">
              The Architecture of Effortless Celebrations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-ivory-50 border border-gold-500/30 rounded-2xl shadow-luxury">
              <div className="w-12 h-12 rounded-full bg-burgundy-900/10 border border-gold-500/40 text-burgundy-900 flex items-center justify-center mb-6">
                <Crown className="w-6 h-6" />
              </div>
              <h3 className="font-editorial text-xl font-bold uppercase text-burgundy-950 mb-2">
                1. Heritage Venue Authority
              </h3>
              <p className="text-xs text-charcoal-600 leading-relaxed">
                Direct relationships with royal trust boards, palace managers, and international estate owners, unlocking exclusive dates and negotiated privileges.
              </p>
            </div>

            <div className="p-8 bg-ivory-50 border border-gold-500/30 rounded-2xl shadow-luxury">
              <div className="w-12 h-12 rounded-full bg-burgundy-900/10 border border-gold-500/40 text-burgundy-900 flex items-center justify-center mb-6">
                <Gem className="w-6 h-6" />
              </div>
              <h3 className="font-editorial text-xl font-bold uppercase text-burgundy-950 mb-2">
                2. 3D Architectural Décor
              </h3>
              <p className="text-xs text-charcoal-600 leading-relaxed">
                Full spatial CAD layouts, photorealistic 3D mandap simulations, and lighting temperature modeling before a single nail is hammered.
              </p>
            </div>

            <div className="p-8 bg-ivory-50 border border-gold-500/30 rounded-2xl shadow-luxury">
              <div className="w-12 h-12 rounded-full bg-burgundy-900/10 border border-gold-500/40 text-burgundy-900 flex items-center justify-center mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-editorial text-xl font-bold uppercase text-burgundy-950 mb-2">
                3. Royal Guest Protocol
              </h3>
              <p className="text-xs text-charcoal-600 leading-relaxed">
                Dedicated hospitality teams, personalized digital RSVP apps, airport welcome suites, and 24/7 concierge desks at all guest hotels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FICTIONAL DEMONSTRATION TEAM PROFILES
          ========================================================================= */}
      <section className="py-24 bg-ivory-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono tracking-widest text-gold-600 uppercase font-bold block">
              OUR CURATORS
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl font-bold uppercase text-burgundy-950 tracking-wide">
              Meet The Atelier Leadership
            </h2>
            <p className="text-[11px] font-mono text-charcoal-500">
              Fictional demonstration profiles representing our master coordinators.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {weddingTeam.map((member) => (
              <div
                key={member.id}
                className="group luxury-card rounded-2xl overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-ivory-200">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-burgundy-950/70 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-burgundy-950/80 text-gold-300 border border-gold-500/40">
                      {member.experience}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="font-editorial text-xl font-bold uppercase text-burgundy-950 mb-1">
                      {member.name}
                    </h3>
                    <span className="text-xs font-editorial italic text-gold-700 block mb-3 min-h-[32px]">
                      {member.role}
                    </span>
                    <p className="text-[11px] text-charcoal-600 leading-relaxed mb-4">
                      {member.specialty}
                    </p>
                    <p className="text-[11px] italic text-charcoal-500 font-editorial border-t border-ivory-300 pt-3">
                      {member.quote}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <button
              onClick={() => openConsultation('Consultation with Founder')}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-burgundy-900 hover:bg-burgundy-800 text-gold-300 font-editorial font-bold text-xs uppercase tracking-widest rounded-full transition-all shadow-md"
            >
              <Heart className="w-4 h-4 fill-current text-gold-400" />
              <span>Schedule An Initial Conversation</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
