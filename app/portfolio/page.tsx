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
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=2000&q=85"
            alt="Royal Wedding Celebrations Portfolio"
            fill
            priority
            className="object-cover object-center scale-105 transition-transform duration-1000"
          />
          {/* Dark luxury gradient scrims */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-black/50" />
          <div className="absolute inset-0 bg-burgundy/25 mix-blend-multiply" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center text-ivory py-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/40 bg-charcoal/60 backdrop-blur-md text-gold text-xs uppercase tracking-[0.25em] mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Celebrations</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.1] mb-6 tracking-tight text-ivory drop-shadow-md">
            Our Royal Celebrations <br />
            <span className="italic font-light text-gold-light">& Signature Stories</span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-ivory/80 font-light leading-relaxed mb-10">
            A retrospective of timeless unions, grand palace mandaps, candlelit floral glasshouses, and coastal vows curated with unmatched bespoke elegance.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-3.5 bg-gold hover:bg-gold-light text-burgundy-dark font-medium text-sm tracking-wider uppercase transition-all duration-300 shadow-xl rounded-sm hover:shadow-gold/20"
            >
              Curate Your Celebration
            </Link>
            <Link
              href="/packages"
              className="w-full sm:w-auto px-8 py-3.5 border border-ivory/30 hover:border-gold hover:text-gold text-ivory text-sm tracking-wider uppercase transition-all duration-300 backdrop-blur-sm rounded-sm"
            >
              View Planning Packages
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
              className="px-8 py-3.5 bg-gold hover:bg-gold-light text-burgundy-dark font-medium text-sm tracking-widest uppercase transition-all duration-300 shadow-xl rounded-sm"
            >
              Request Private Consultation
            </Link>
            <Link
              href="/venues"
              className="px-8 py-3.5 border border-gold/40 text-gold hover:bg-gold/10 font-medium text-sm tracking-widest uppercase transition-all duration-300 rounded-sm"
            >
              Browse Heritage Venues
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
