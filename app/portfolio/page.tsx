import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PortfolioLightbox from '../../components/PortfolioLightbox';
import { portfolioProjects } from '../../data/portfolioData';
import { Sparkles, Heart, Quote, ArrowRight, Award, Compass, MapPin } from 'lucide-react';

export const metadata = {
  title: 'Portfolio & Royal Celebrations | THE GRAND AFFAIR – Luxury Weddings',
  description: 'Explore our portfolio of curated royal weddings, heritage celebrations, and luxury destination vows across Udaipur, Jaipur, Goa, and Mussoorie.',
};

const clientLoveStories = [
  {
    couple: 'Rohan & Gayatri Singhania',
    venue: 'Jagmandir Island Palace, Udaipur',
    quote: '“From our first midnight sketch session to the final floral petal at our pheras on Lake Pichola, THE GRAND AFFAIR orchestrated sheer magic. Our international guests were spellbound.”',
    date: 'Royal Winter Celebration'
  },
  {
    couple: 'Armaan & Sarah Kapoor',
    venue: 'The Conservatory Botanical Estate, Kandaghat',
    quote: '“The attention to organic florals and acoustic ambient lighting was breathtaking. They turned our private mountain estate into an enchanted fairy-tale forest.”',
    date: 'Spring Botanical Wedding'
  },
  {
    couple: 'Kabir & Tanya Varma',
    venue: 'Majorda Oceanfront Beach Lawn, Goa',
    quote: '“Planning a 3-day coastal celebration across time zones felt effortless. Their hospitality crew managed our 250 guests with flawless warmth and sophistication.”',
    date: 'Sunset Coastal Celebration'
  }
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-sand text-charcoal">
      {/* 1. ATMOSPHERIC PHOTOGRAPHIC HERO */}
      <section className="relative min-h-[75vh] md:min-h-[82vh] flex items-center justify-center overflow-hidden py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=85"
            alt="Royal Wedding Celebrations Portfolio"
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
            <span>CURATED CELEBRATIONS & ROYAL RETROSPECTIVE</span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-wide text-white leading-[1.08] mb-6 drop-shadow-md">
            Our Royal Celebrations <br />
            <span className="text-gold-gradient italic font-normal lowercase font-editorial">& Signature Stories</span>
          </h1>

          <p className="font-editorial text-lg sm:text-2xl italic text-white/95 leading-relaxed mb-10 max-w-2xl mx-auto drop-shadow">
            &ldquo;A retrospective of timeless unions, grand palace mandaps, candlelit floral glasshouses, and coastal vows curated with unmatched bespoke elegance.&rdquo;
          </p>

          {/* High-Contrast Unmissable CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 hover:from-gold-300 hover:to-gold-400 text-burgundy-950 font-editorial font-bold text-base tracking-wider uppercase rounded-full shadow-[0_4px_25px_rgba(216,194,157,0.5)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <Heart className="w-4 h-4 fill-current text-burgundy-950" />
              <span>Curate Your Celebration</span>
            </Link>
            <Link
              href="/packages"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white border-2 border-gold-400/80 hover:border-gold-300 font-editorial font-bold text-base tracking-wider uppercase rounded-full backdrop-blur-md transition-all transform hover:-translate-y-0.5 group cursor-pointer"
            >
              <span>View Planning Packages</span>
              <ArrowRight className="w-4 h-4 text-gold-300 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. STATS OVERVIEW STRIP */}
      <section className="bg-ivory border-b border-rose-gold/25 py-8 px-6 sm:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="font-serif text-3xl md:text-4xl text-burgundy font-light">180+</p>
            <p className="text-xs uppercase tracking-widest text-charcoal-light mt-1">Royal Weddings Curated</p>
          </div>
          <div>
            <p className="font-serif text-3xl md:text-4xl text-burgundy font-light">14</p>
            <p className="text-xs uppercase tracking-widest text-charcoal-light mt-1">Heritage Palace Partners</p>
          </div>
          <div>
            <p className="font-serif text-3xl md:text-4xl text-burgundy font-light">100%</p>
            <p className="text-xs uppercase tracking-widest text-charcoal-light mt-1">Bespoke Architectural Décor</p>
          </div>
          <div>
            <p className="font-serif text-3xl md:text-4xl text-burgundy font-light">12</p>
            <p className="text-xs uppercase tracking-widest text-charcoal-light mt-1">Years of Luxury Artistry</p>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE PORTFOLIO GRID WITH LIGHTBOX */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold uppercase tracking-[0.25em] text-xs font-semibold">
            Visual Retrospective
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-burgundy mt-2 mb-4">
            Curated Love Stories
          </h2>
          <div className="w-16 h-px bg-gold mx-auto mb-6" />
          <p className="text-charcoal-light font-light text-base leading-relaxed">
            Click on any wedding celebration below to enter our full-screen editorial lightbox, explore venue details, ceremony timelines, and couple reflections.
          </p>
        </div>

        {/* Client-side Filterable Lightbox Component */}
        <PortfolioLightbox projects={portfolioProjects} />
      </section>

      {/* 4. COUPLE TESTIMONIALS */}
      <section className="py-20 bg-ivory border-t border-rose-gold/20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold uppercase tracking-[0.25em] text-xs font-semibold">
              Love Notes & Praise
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-burgundy mt-2 mb-4">
              Words From Our Couples
            </h2>
            <div className="w-16 h-px bg-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clientLoveStories.map((story, idx) => (
              <div 
                key={idx}
                className="bg-white border border-rose-gold/25 p-8 rounded-sm shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <Quote className="w-8 h-8 text-gold/40 mb-4" />
                  <p className="font-serif italic text-charcoal text-base leading-relaxed mb-6">
                    {story.quote}
                  </p>
                </div>
                <div className="pt-4 border-t border-rose-gold/15">
                  <h4 className="font-serif font-medium text-burgundy text-lg">
                    {story.couple}
                  </h4>
                  <p className="text-xs text-gold uppercase tracking-wider mt-0.5">
                    {story.venue}
                  </p>
                  <p className="text-xs text-charcoal-light mt-1">
                    {story.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CONTACT CONCIERGE BANNER */}
      <section className="py-20 bg-burgundy-dark text-ivory relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1600&q=80"
            alt="Opulent banquet"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <Sparkles className="w-8 h-8 text-gold mx-auto mb-4" />
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-6">
            Begin Your Own <span className="italic text-gold">Fairytale Chapter</span>
          </h2>
          <p className="text-ivory/80 max-w-2xl mx-auto text-base sm:text-lg font-light mb-10 leading-relaxed">
            Every celebration in our portfolio began with a quiet conversation over fine tea. Schedule a private consultation with our founding partners today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 hover:from-gold-300 hover:to-gold-400 text-burgundy-950 font-editorial font-bold text-sm tracking-widest uppercase rounded-full shadow-[0_4px_25px_rgba(216,194,157,0.5)] transition-all transform hover:-translate-y-0.5"
            >
              Request Private Consultation
            </Link>
            <Link
              href="/venues"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border-2 border-gold-400/80 hover:border-gold-300 font-editorial font-bold text-sm tracking-widest uppercase rounded-full backdrop-blur-md transition-all transform hover:-translate-y-0.5"
            >
              Browse Heritage Venues
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
