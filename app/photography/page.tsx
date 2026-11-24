import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Camera, Film, Sparkles, Heart, Award, Play, Video, ArrowRight, CheckCircle2, Sliders, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'Photography & Cinematic Films | THE GRAND AFFAIR – Luxury Weddings',
  description: 'Editorial fine-art wedding photography and cinematic 4K films capturing royal opulence, timeless romance, and intimate moments across India and destination venues.',
};

const visualStyles = [
  {
    title: 'Fine-Art Bridal & Groom Portraits',
    subtitle: 'Heirloom Portraiture',
    description: 'Sculpted lighting and poised compositions that highlight the intricate craftsmanship of your royal lehenga, heirloom jewels, and regal sherwanis.',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=85',
    features: ['Direction by High-Fashion Photographers', 'Artisanal Medium Format Lenses', 'Flawless Color Science & Texture Retention']
  },
  {
    title: 'Cinematic 4K Wedding Cinema',
    subtitle: 'Docu-Style Cinematic Films',
    description: 'We craft multi-camera, feature-length cinematic love stories with aerial drone views of palace courtyards, resonant vow recordings, and tailored musical scoring.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=85',
    features: ['Cinema-grade RED & Sony FX Systems', 'Licensed Original Orchestral Scores', 'Same-Day Reel Delivery for Social Feeds']
  },
  {
    title: 'Pre-Wedding & Destination Editorial',
    subtitle: 'Romantic Escapes',
    description: 'From the tranquil boat rides on Lake Pichola to sunset sands in Goa and pine forests in Mussoorie, capturing your private world before the royal fanfare.',
    image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1000&q=85',
    features: ['Curated Location Scouting & Permissions', 'Styling Guidance & Moodboarding', 'Cinematic Sunset & Golden Hour Lighting']
  },
  {
    title: 'Candid Emotions & Sacred Rituals',
    subtitle: 'Pure Documentary',
    description: 'Unposed laughter during haldi flowers, stolen glances across the sacred fire, tears of blessings during vidaai, and euphoric baraat revelry.',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=85',
    features: ['Silent, Non-Intrusive Presence', 'Dual Photographer Coverage per Event', 'Preserving Pure Raw Emotions']
  }
];

const deliverables = [
  {
    icon: Film,
    title: '4K Feature Wedding Film',
    duration: '35 – 50 Minutes',
    description: 'A comprehensive, emotionally resonant feature documentary capturing the full grandeur of your multi-day ceremonies.'
  },
  {
    icon: Video,
    title: 'Cinematic Teaser & Trailer',
    duration: '3 – 5 Minutes',
    description: 'High-octane, visually poetic highlights edited to a bespoke orchestral composition designed for everlasting family viewing.'
  },
  {
    icon: Sparkles,
    title: 'Social Reels & 48-Hr Teasers',
    duration: '3 Vertical Reels',
    description: 'Delivered within 48 hours of each ceremony so you and your loved ones can share pristine moments worldwide.'
  },
  {
    icon: Camera,
    title: 'High-Res Master Gallery',
    duration: '1,200+ Master Photos',
    description: 'Individually color-corrected, high-resolution imagery preserved in a private online password-protected digital cloud suite.'
  },
  {
    icon: Award,
    title: 'Handcrafted Italian Heirlooms',
    duration: '2 Signature Albums',
    description: 'Hand-bound Italian leather, archival velvet cotton paper, and 24K gold debossed typography that lasts generations.'
  },
  {
    icon: Sliders,
    title: 'Raw Footage & Archival Drive',
    duration: '100% Uncompressed Data',
    description: 'Complete unedited multi-camera reels, drone passes, and audio stems delivered on an encrypted luxury solid-state drive.'
  }
];

export default function PhotographyPage() {
  return (
    <div className="min-h-screen bg-sand text-charcoal">
      {/* 1. ATMOSPHERIC PHOTOGRAPHIC HERO */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=85"
            alt="Cinematic Wedding Photography & Films"
            fill
            priority
            className="object-cover object-center scale-105 transition-transform duration-1000"
          />
          {/* Gradient Scrims for text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-black/50" />
          <div className="absolute inset-0 bg-burgundy/25 mix-blend-multiply" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center text-ivory py-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/40 bg-charcoal/60 backdrop-blur-md text-gold text-xs uppercase tracking-[0.25em] mb-6">
            <Camera className="w-3.5 h-3.5" />
            <span>Visual Storytelling & Cinema</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.1] mb-6 tracking-tight text-ivory drop-shadow-md">
            Cinematic Photography <br />
            <span className="italic font-light text-gold-light">& Fine Art Films</span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-ivory/80 font-light leading-relaxed mb-10">
            Capturing transcendent emotions, royal opulence, and stolen glances with editorial perfection. Every frame is composed like an enduring work of fine art.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-3.5 bg-gold hover:bg-gold-light text-burgundy-dark font-medium text-sm tracking-wider uppercase transition-all duration-300 shadow-xl rounded-sm hover:shadow-gold/20"
            >
              Consult Visual Director
            </Link>
            <Link
              href="/portfolio"
              className="w-full sm:w-auto px-8 py-3.5 border border-ivory/30 hover:border-gold hover:text-gold text-ivory text-sm tracking-wider uppercase transition-all duration-300 backdrop-blur-sm rounded-sm"
            >
              Explore Wedding Stories
            </Link>
          </div>
        </div>
      </section>

      {/* 2. PHILOSOPHY & ART DIRECTION */}
      <section className="py-20 md:py-28 px-6 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-gold uppercase tracking-[0.25em] text-xs font-semibold">
              The Grand Affair Aesthetic
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-burgundy leading-tight">
              Where High-Fashion Editorial Meets <span className="italic">Raw Sacred Emotion</span>
            </h2>
            <p className="text-charcoal-light leading-relaxed font-light text-base">
              A royal wedding is not merely a sequence of ceremonial events—it is an emotional symphony spanning generations. Our visual crew blends the discreet sensitivity of seasoned documentary photojournalists with the exacting eye of Vogue fashion directors.
            </p>
            <p className="text-charcoal-light leading-relaxed font-light text-base">
              We never interrupt authentic joy with awkward poses. While your family dances, laughs, and sheds tears of love, our cinema cameras capture genuine heirloom moments with natural, timeless lighting.
            </p>

            <div className="pt-4 border-t border-rose-gold/20 space-y-3">
              <div className="flex items-center gap-3 text-sm text-charcoal">
                <ShieldCheck className="w-5 h-5 text-gold shrink-0" />
                <span>Dual-card redundant in-camera backups on all equipment</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-charcoal">
                <ShieldCheck className="w-5 h-5 text-gold shrink-0" />
                <span>Dedicated visual director & personal couple shadow on-site</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-charcoal">
                <ShieldCheck className="w-5 h-5 text-gold shrink-0" />
                <span>Master sound recording with discreet micro-lavaliers during vows</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="relative aspect-[3/4] rounded-sm overflow-hidden shadow-2xl group">
              <Image
                src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=85"
                alt="Bridal portraiture"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent flex items-end p-6">
                <div className="text-ivory">
                  <span className="text-xs uppercase tracking-widest text-gold">Portraiture</span>
                  <p className="font-serif text-lg">Fine Art Bridal Aesthetics</p>
                </div>
              </div>
            </div>

            <div className="relative aspect-[3/4] rounded-sm overflow-hidden shadow-2xl sm:translate-y-8 group">
              <Image
                src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=85"
                alt="Wedding rings and rituals"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent flex items-end p-6">
                <div className="text-ivory">
                  <span className="text-xs uppercase tracking-widest text-gold">Sacred Vows</span>
                  <p className="font-serif text-lg">Documentary Precision</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VISUAL STYLES SHOWCASE */}
      <section className="py-20 bg-ivory border-y border-rose-gold/20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold uppercase tracking-[0.25em] text-xs font-semibold">
              Our Visual Portfolio
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-burgundy mt-2 mb-4">
              Signature Photography Disciplines
            </h2>
            <div className="w-16 h-px bg-gold mx-auto mb-6" />
            <p className="text-charcoal-light font-light text-base leading-relaxed">
              Every wedding is captured using specialized gear, from ultra-wide drone cinema lenses for royal palaces to vintage medium-format prime lenses for intimate candlelight.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {visualStyles.map((style, idx) => (
              <div 
                key={idx}
                className="bg-white border border-rose-gold/25 rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={style.image}
                    alt={style.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-burgundy/80 text-gold text-xs tracking-widest uppercase rounded-sm backdrop-blur-sm">
                    {style.subtitle}
                  </span>
                </div>

                <div className="p-8">
                  <h3 className="font-serif text-2xl text-burgundy mb-3 group-hover:text-burgundy-light transition-colors">
                    {style.title}
                  </h3>
                  <p className="text-charcoal-light text-sm font-light leading-relaxed mb-6">
                    {style.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-rose-gold/15">
                    {style.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2.5 text-xs text-charcoal">
                        <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SIGNATURE DELIVERABLES & VAULT */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold uppercase tracking-[0.25em] text-xs font-semibold">
            Heirloom Deliverables
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-burgundy mt-2 mb-4">
            Preserved for Generations
          </h2>
          <div className="w-16 h-px bg-gold mx-auto mb-6" />
          <p className="text-charcoal-light font-light text-base leading-relaxed">
            Your wedding memories are treated with the highest archival standards. No expiring cloud links or lost files—only pristine, enduring beauty.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deliverables.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-ivory border border-rose-gold/20 p-8 rounded-sm hover:border-gold/50 transition-all duration-300 hover:shadow-lg relative group"
              >
                <div className="w-12 h-12 rounded-full bg-sand flex items-center justify-center text-burgundy mb-6 group-hover:bg-burgundy group-hover:text-gold transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-xs font-medium text-gold uppercase tracking-wider block mb-2">
                  {item.duration}
                </span>
                <h3 className="font-serif text-xl text-burgundy mb-3">
                  {item.title}
                </h3>
                <p className="text-charcoal-light text-sm font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. CINEMATIC INQUIRY CTA */}
      <section className="py-20 bg-burgundy-dark text-ivory relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80"
            alt="Wedding celebration background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <Sparkles className="w-8 h-8 text-gold mx-auto mb-4 animate-pulse" />
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-6">
            Preserve Your Wedding Story in <span className="italic text-gold">4K Cinema</span>
          </h2>
          <p className="text-ivory/80 max-w-2xl mx-auto text-base sm:text-lg font-light mb-10 leading-relaxed">
            Our visual teams take a strictly limited number of royal destination weddings each season to guarantee meticulous grading and editorial perfection.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-gold hover:bg-gold-light text-burgundy-dark font-medium text-sm tracking-widest uppercase transition-all duration-300 shadow-xl rounded-sm"
            >
              Check Date Availability
            </Link>
            <Link
              href="/packages"
              className="px-8 py-3.5 border border-gold/40 text-gold hover:bg-gold/10 font-medium text-sm tracking-widest uppercase transition-all duration-300 rounded-sm"
            >
              View Film Packages
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
