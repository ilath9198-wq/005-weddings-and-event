'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Heart, 
  Sparkles, 
  Crown, 
  MapPin, 
  Calendar, 
  Users, 
  ArrowRight, 
  Star, 
  Gem, 
  CheckCircle2, 
  ChevronRight,
  Compass
} from 'lucide-react';
import { weddingServices } from '../data/servicesData';
import { weddingVenues } from '../data/venuesData';
import { portfolioProjects } from '../data/portfolioData';
import { planningSteps } from '../data/planningSteps';
import { useConsultation } from '../components/ConsultationContext';

export default function HomePage() {
  const { openConsultation } = useConsultation();
  const featuredServices = weddingServices.filter((s) => s.featured).slice(0, 6);
  const featuredVenues = weddingVenues.slice(0, 3);
  const portfolioPreview = portfolioProjects.slice(0, 3);

  const testimonials = [
    {
      id: 'test-1',
      couple: 'Gayatri & Rohan Singhania',
      celebration: '3-Day Royal Palace Nuptials • Jagmandir Island, Udaipur',
      quote: 'THE GRAND AFFAIR made us feel like royalty in our own fairytale. The floating mandap with 50,000 tuberose stems and the seamless boat transfers for 380 guests were pure perfection. There was not a single second of stress.',
      rating: 5,
      date: 'Winter 2026'
    },
    {
      id: 'test-2',
      couple: 'Tanya & Kabir Mehra',
      celebration: 'Sunset Coastal Pheras • Majorda Beach Resort, South Goa',
      quote: 'From airport private charters to the breathtaking sunset oceanfront mandap, Ananya and her team orchestrated magic. Our international guests from London and Singapore were completely spellbound.',
      rating: 5,
      date: 'Spring 2026'
    },
    {
      id: 'test-3',
      couple: 'Sarah & Armaan Kapoor',
      celebration: 'Botanical Glasshouse Romance • Kandaghat Pine Hills',
      quote: 'The floral architecture in the glasshouse took our breath away. Understated, deeply romantic, and exquisitely personal. They captured our aesthetic with profound sensitivity.',
      rating: 5,
      date: 'Autumn 2026'
    }
  ];

  return (
    <div className="w-full">
      {/* =========================================================================
          HERO SECTION (MANDATORY: Atmospheric Photographic Editorial Background)
          Cinematic Grand Indian Wedding Photography with Deep Luxury Gradient Scrim
          ========================================================================= */}
      <section className="relative min-h-[90vh] sm:min-h-[92vh] flex items-center justify-center overflow-hidden py-24 sm:py-32">
        {/* Full-bleed Luxury Photographic Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=85"
            alt="THE GRAND AFFAIR Luxury Wedding Mandap"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          {/* Deep royal gradient scrim: Charcoal-burgundy to warm amber depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-burgundy-950/95 via-burgundy-950/80 to-charcoal-950/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-burgundy-950 via-transparent to-burgundy-950/60" />
        </div>

        {/* Hero Content Layer */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center sm:text-left">
          <div className="max-w-3xl">
            {/* Delicate Champagne Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-burgundy-900/80 border border-gold-400/50 text-gold-300 text-xs font-mono font-medium tracking-widest uppercase mb-6 backdrop-blur-md shadow-gold-glow">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              <span>COUTURE WEDDING ARCHITECTURE // ROYAL HERITAGE</span>
            </div>

            {/* Mandatory Main Headline */}
            <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-wide text-white leading-[1.08] mb-6">
              Where Your{' '}
              <span className="text-gold-gradient italic font-normal lowercase font-editorial">
                forever
              </span>{' '}
              Begins.
            </h1>

            {/* Mandatory Supporting Statement */}
            <p className="font-editorial text-lg sm:text-2xl italic text-ivory-100/90 leading-relaxed mb-8 max-w-2xl font-normal">
              &ldquo;Thoughtfully planned celebrations. Beautifully unforgettable moments.&rdquo;
            </p>

            {/* Mandatory CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
              <button
                onClick={() => openConsultation()}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-gold-gradient hover:bg-gold-400 text-burgundy-950 font-editorial font-bold text-base sm:text-lg tracking-wider uppercase rounded-full shadow-gold-glow transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Heart className="w-4 h-4 fill-current" />
                <span>Plan Your Wedding</span>
              </button>

              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-gold-400/50 font-editorial font-bold text-base tracking-wider uppercase rounded-full backdrop-blur-md transition-all group"
              >
                <span>Explore Our Weddings</span>
                <ArrowRight className="w-4 h-4 text-gold-300 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-gold-500/25 text-left">
              <div>
                <span className="font-editorial text-2xl sm:text-3xl font-bold text-gold-300 block">350+</span>
                <span className="text-[11px] text-ivory-300 font-sans tracking-wide uppercase">Bespoke Weddings</span>
              </div>
              <div>
                <span className="font-editorial text-2xl sm:text-3xl font-bold text-white block">15+</span>
                <span className="text-[11px] text-ivory-300 font-sans tracking-wide uppercase">Years of Heritage</span>
              </div>
              <div>
                <span className="font-editorial text-2xl sm:text-3xl font-bold text-gold-300 block">100%</span>
                <span className="text-[11px] text-ivory-300 font-sans tracking-wide uppercase">Turnkey Execution</span>
              </div>
              <div>
                <span className="font-editorial text-2xl sm:text-3xl font-bold text-white block">12 Destinations</span>
                <span className="text-[11px] text-ivory-300 font-sans tracking-wide uppercase">Worldwide Escapes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          BRAND INTRODUCTION & PHILOSOPHY
          ========================================================================= */}
      <section className="py-24 bg-ivory-100 border-b border-gold-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Arched Imagery Lockup (Span 5) */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[3/4] w-full max-w-md mx-auto rounded-t-full overflow-hidden border-2 border-gold-500/40 shadow-luxury">
                <Image
                  src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=85"
                  alt="Royal Indian Bride & Groom"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy-950/60 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-2 sm:right-6 p-5 bg-white border border-gold-400/40 rounded-2xl shadow-luxury max-w-xs text-center">
                <span className="text-[10px] font-mono tracking-widest text-gold-600 uppercase block">
                  CONTOUR WEDDING CRAFT
                </span>
                <p className="font-editorial text-lg italic text-burgundy-900 font-bold mt-1">
                  &ldquo;A celebration designed with soul, warmth & majesty.&rdquo;
                </p>
              </div>
            </div>

            {/* Narrative Copy (Span 7) */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono tracking-widest text-gold-600 uppercase font-bold block">
                ABOUT THE GRAND AFFAIR
              </span>
              <h2 className="font-editorial text-3xl sm:text-5xl font-bold uppercase text-burgundy-950 tracking-wide leading-tight">
                Architects of Unforgettable Royal & Destination Weddings
              </h2>
              <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed">
                At **THE GRAND AFFAIR**, we believe a wedding is not simply an event; it is a sacred tapestry of family traditions, unspoken promises, and shared celebration. For over a decade and a half, our atelier has shaped weddings across the palaces of Rajasthan, the coastlines of Goa, and exclusive private estates internationally.
              </p>
              <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed">
                From negotiating private island buyouts to designing custom sculpted mandaps with master Indian florists, our approach balances majestic vision with rigorous logistical mastery. You immerse yourselves entirely in love; we orchestrate the magic behind the scenes.
              </p>

              <div className="pt-4 flex flex-wrap gap-6 text-xs text-burgundy-950 font-editorial">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span className="font-bold uppercase tracking-wider">White-Glove Guest Concierge</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span className="font-bold uppercase tracking-wider">Bespoke 3D Mandap Renders</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span className="font-bold uppercase tracking-wider">Absolute Budget Transparency</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-xs font-editorial font-bold uppercase tracking-widest text-burgundy-900 hover:text-gold-600 transition-colors"
                >
                  <span>Read Our Complete Story & Heritage</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FEATURED WEDDING SERVICES
          ========================================================================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono tracking-widest text-gold-600 uppercase font-bold block">
              OUR DISCIPLINES
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl font-bold uppercase text-burgundy-950 tracking-wide">
              Bespoke Wedding Services
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-600">
              Each discipline is shaped with uncompromising attention to detail and personalized artistic direction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((svc) => (
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
                  </div>

                  <div className="p-6 sm:p-7">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-gold-600 font-bold block mb-1">
                      {svc.category.toUpperCase()}
                    </span>
                    <h3 className="font-editorial text-2xl font-bold uppercase text-burgundy-950 group-hover:text-gold-700 transition-colors mb-2">
                      {svc.title}
                    </h3>
                    <p className="text-xs text-charcoal-600 leading-relaxed mb-4">
                      {svc.tagline}
                    </p>

                    <ul className="space-y-1.5 text-xs text-charcoal-700 mb-6">
                      {svc.highlights.slice(0, 3).map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                          <span className="truncate">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-0">
                  <button
                    onClick={() => openConsultation(svc.title)}
                    className="w-full py-2.5 px-4 rounded-full border border-gold-500/50 hover:bg-burgundy-900 hover:text-gold-300 text-burgundy-950 font-editorial font-bold text-xs uppercase tracking-widest transition-all text-center block"
                  >
                    Inquire for Your Wedding
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-burgundy-900 hover:bg-burgundy-800 text-gold-300 font-editorial font-bold text-xs uppercase tracking-widest rounded-full transition-all shadow-md"
            >
              <span>Explore All 12 Wedding Services</span>
              <ArrowRight className="w-4 h-4 text-gold-400" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          DESTINATION WEDDING SHOWCASE
          ========================================================================= */}
      <section className="py-24 bg-burgundy-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono tracking-widest text-gold-400 uppercase font-bold block">
              WORLDWIDE CELEBRATIONS
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl font-bold uppercase text-white tracking-wide">
              Destination Wedding Sanctuaries
            </h2>
            <p className="text-xs sm:text-sm text-ivory-300/80">
              From majestic Rajasthan palace fortresses to sunset shores of Goa and Italian lakeside villas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative aspect-[3/4] rounded-2xl overflow-hidden border border-gold-500/30 shadow-luxury">
              <Image
                src="https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=800&q=85"
                alt="Palace Weddings in Udaipur"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-burgundy-950 via-burgundy-950/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] font-mono tracking-widest text-gold-400 uppercase block">RAJASTHAN</span>
                <h3 className="font-editorial text-2xl font-bold uppercase text-white">Udaipur & Jaipur Palaces</h3>
                <p className="text-xs text-ivory-300 mt-1">Floating marble pavilions, royal horse carriages & Mewari hospitality.</p>
              </div>
            </div>

            <div className="group relative aspect-[3/4] rounded-2xl overflow-hidden border border-gold-500/30 shadow-luxury">
              <Image
                src="https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=800&q=85"
                alt="Beach Weddings in Goa"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-burgundy-950 via-burgundy-950/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] font-mono tracking-widest text-gold-400 uppercase block">COASTAL VOWS</span>
                <h3 className="font-editorial text-2xl font-bold uppercase text-white">Goa Oceanfront Resorts</h3>
                <p className="text-xs text-ivory-300 mt-1">Golden sunset pheras, barefoot luxury & Arabian Sea fireworks.</p>
              </div>
            </div>

            <div className="group relative aspect-[3/4] rounded-2xl overflow-hidden border border-gold-500/30 shadow-luxury">
              <Image
                src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=85"
                alt="International Destination Weddings"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-burgundy-950 via-burgundy-950/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] font-mono tracking-widest text-gold-400 uppercase block">INTERNATIONAL</span>
                <h3 className="font-editorial text-2xl font-bold uppercase text-white">Lake Como & Bali Escapes</h3>
                <p className="text-xs text-ivory-300 mt-1">Historic Italian lakeside villas and clifftop tropical pavilions.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/venues"
              className="inline-flex items-center gap-2 text-xs font-editorial font-bold uppercase tracking-widest text-gold-300 hover:text-white transition-colors"
            >
              <span>Discover All Featured Venues & Palaces</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          THE 9-PHASE WEDDING PLANNING PROCESS PREVIEW
          ========================================================================= */}
      <section className="py-24 bg-ivory-50 border-b border-gold-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono tracking-widest text-gold-600 uppercase font-bold block">
              EFFORTLESS HARMONY
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl font-bold uppercase text-burgundy-950 tracking-wide">
              The Wedding Planning Journey
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-600">
              A disciplined, thoughtful nine-stage methodology translating dreams into reality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {planningSteps.slice(0, 3).map((st) => (
              <div key={st.step} className="p-8 bg-white border border-gold-500/30 rounded-2xl shadow-luxury relative">
                <span className="font-editorial text-4xl font-bold text-gold-400/40 absolute top-4 right-6 select-none">
                  {st.number}
                </span>
                <span className="text-[10px] font-mono text-gold-600 font-bold uppercase block mb-1">
                  {st.step} • {st.timeline}
                </span>
                <h3 className="font-editorial text-xl font-bold uppercase text-burgundy-950 mb-2">
                  {st.title}
                </h3>
                <p className="text-xs text-charcoal-600 leading-relaxed mb-4">
                  {st.description}
                </p>
                <div className="pt-3 border-t border-ivory-300 text-[11px] text-charcoal-700">
                  <span className="font-bold text-burgundy-900">Key Deliverable: </span>
                  <span>{st.deliverables[0]}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/planning"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-burgundy-900 hover:bg-burgundy-800 text-gold-300 font-editorial font-bold text-xs uppercase tracking-widest rounded-full transition-all shadow-md"
            >
              <span>Explore The Full 9-Phase Planning Journey</span>
              <ArrowRight className="w-4 h-4 text-gold-400" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CLIENT REVIEWS / TESTIMONIALS
          ========================================================================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono tracking-widest text-gold-600 uppercase font-bold block">
              CHERISHED MEMORIES
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl font-bold uppercase text-burgundy-950 tracking-wide">
              Stories From Our Couples
            </h2>
            <p className="text-[11px] font-mono text-charcoal-500">
              Fictional demonstration stories reflecting real client experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="p-8 bg-ivory-50 border border-gold-500/30 rounded-2xl shadow-luxury flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-gold-500 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="font-editorial text-base italic text-charcoal-800 leading-relaxed mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-gold-500/20">
                  <h4 className="font-editorial font-bold text-lg text-burgundy-950 uppercase">{t.couple}</h4>
                  <p className="text-xs text-charcoal-600 font-sans mt-0.5">{t.celebration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          FINAL CONSULTATION INVITATION BANNER
          ========================================================================= */}
      <section className="py-20 bg-burgundy-950 text-white relative overflow-hidden border-t border-gold-500/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <span className="text-xs font-mono tracking-widest text-gold-400 uppercase font-bold block">
            THE GRAND AFFAIR ATELIER
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl font-bold uppercase text-white tracking-wide">
            Begin Your Forever Journey With Us
          </h2>
          <p className="text-sm sm:text-base text-ivory-200/90 max-w-xl mx-auto leading-relaxed font-editorial italic">
            Allow us to shape your celebrations with the majesty, warmth, and intimacy they truly deserve.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => openConsultation()}
              className="px-8 py-4 bg-gold-gradient hover:bg-gold-400 text-burgundy-950 font-editorial font-bold text-sm uppercase tracking-wider rounded-full shadow-gold-glow transition-all"
            >
              Request Private Wedding Consultation
            </button>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full border border-gold-400 text-gold-300 hover:text-white hover:border-white font-editorial font-bold text-sm uppercase tracking-wider transition-all"
            >
              Contact Our Atelier
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
