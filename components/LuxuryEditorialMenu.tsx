'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { X, Sparkles, Heart, Phone, ArrowRight } from 'lucide-react';
import { useConsultation } from './ConsultationContext';

interface LuxuryEditorialMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const weddingRoutes = [
  { name: 'Home', path: '/', num: '01', subtitle: 'Where Forever Begins' },
  { name: 'About Us', path: '/about', num: '02', subtitle: 'Heritage & Vision' },
  { name: 'Our Services', path: '/services', num: '03', subtitle: 'Bespoke Celebrations' },
  { name: 'Wedding Venues', path: '/venues', num: '04', subtitle: 'Palaces & Sanctuaries' },
  { name: 'Wedding Planning', path: '/planning', num: '05', subtitle: 'The 9-Phase Journey' },
  { name: 'Photography & Films', path: '/photography', num: '06', subtitle: 'Cinematic Memories' },
  { name: 'Our Portfolio', path: '/portfolio', num: '07', subtitle: 'Royal Showcase' },
  { name: 'Packages', path: '/packages', num: '08', subtitle: 'Curated Experiences' },
  { name: 'Contact Us', path: '/contact', num: '09', subtitle: 'Private Consultation' },
];

export default function LuxuryEditorialMenu({ isOpen, onClose }: LuxuryEditorialMenuProps) {
  const pathname = usePathname();
  const { openConsultation } = useConsultation();

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-burgundy-950 text-white overflow-y-auto animate-fadeIn duration-500 flex flex-col justify-between"
      style={{
        background: 'radial-gradient(ellipse at top right, #3D131E 0%, #1A060C 65%, #100307 100%)'
      }}
    >
      {/* Top Bar with Brand & Close Button */}
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-10 py-6 flex items-center justify-between border-b border-gold-500/20">
        <div className="flex items-center gap-3">
          <span className="font-editorial text-2xl font-bold tracking-widest text-gold-300 uppercase">
            THE GRAND AFFAIR
          </span>
          <span className="hidden sm:inline-block text-[10px] font-mono tracking-widest text-gold-400/70 border-l border-gold-500/30 pl-3 uppercase">
            EDITORIAL NAVIGATION
          </span>
        </div>

        <button
          onClick={onClose}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold-500/40 text-gold-300 hover:text-white hover:border-gold-300 transition-colors group"
          aria-label="Close Navigation Overlay"
        >
          <span className="text-[11px] font-mono tracking-wider uppercase hidden sm:inline">Close</span>
          <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
        </button>
      </div>

      {/* Main Content: Split Editorial Layout */}
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-10 py-8 sm:py-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center flex-1">
        {/* Left Column: Vertical Large Serif Navigation (Span 7) */}
        <nav className="lg:col-span-7 space-y-2">
          {weddingRoutes.map((route) => {
            const isActive = pathname === route.path;
            return (
              <div key={route.path} className="group flex items-baseline gap-4 py-1.5 border-b border-gold-500/10">
                {/* Champagne Number */}
                <span className={`text-xs font-mono tracking-widest transition-colors ${
                  isActive ? 'text-gold-300 font-bold' : 'text-gold-500/60 group-hover:text-gold-400'
                }`}>
                  {route.num} /
                </span>

                {/* Main Serif Link */}
                <Link
                  href={route.path}
                  onClick={onClose}
                  className={`font-editorial text-2xl sm:text-4xl lg:text-5xl tracking-wide uppercase transition-all duration-300 ${
                    isActive
                      ? 'text-gold-300 italic font-semibold translate-x-2'
                      : 'text-ivory-100/80 hover:text-white group-hover:translate-x-2'
                  }`}
                >
                  {route.name}
                </Link>

                {/* Subtitle */}
                <span className="hidden md:inline-block text-xs text-gold-400/60 font-sans tracking-wide ml-auto">
                  {route.subtitle}
                </span>
              </div>
            );
          })}
        </nav>

        {/* Right Column: Editorial Wedding Vignette & Floral Detail (Span 5) */}
        <div className="hidden lg:flex flex-col items-center justify-center p-8 bg-burgundy-900/40 border border-gold-500/30 rounded-3xl relative overflow-hidden text-center shadow-2xl">
          {/* Arched Wedding Photograph */}
          <div className="relative w-64 h-80 rounded-t-full overflow-hidden border-2 border-gold-500/50 shadow-luxury mb-6">
            <Image
              src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=85"
              alt="Royal Wedding Heritage"
              fill
              className="object-cover"
              sizes="320px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-burgundy-950/70 via-transparent to-transparent" />
          </div>

          <div className="space-y-3 max-w-sm">
            <span className="text-[10px] font-mono uppercase tracking-widest text-gold-400 block">
              THE COUTURE STANDARD
            </span>
            <p className="font-editorial text-xl italic text-ivory-200 leading-snug">
              &ldquo;Thoughtfully planned celebrations. Beautifully unforgettable moments.&rdquo;
            </p>
            <div className="pt-2">
              <button
                onClick={() => {
                  onClose();
                  openConsultation();
                }}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-gold-gradient text-burgundy-950 font-editorial font-bold text-sm tracking-wider uppercase rounded-full shadow-gold-glow hover:scale-105 transition-all"
              >
                <span>Begin Your Wedding Journey</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Editorial Statement & Contact Dock */}
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-10 py-6 border-t border-gold-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gold-400/80">
        <div className="flex items-center gap-2 text-center sm:text-left">
          <Sparkles className="w-4 h-4 text-gold-400 shrink-0" />
          <span>Curating bespoke weddings across Rajasthan, Goa, Delhi, Lake Como & Bali.</span>
        </div>

        <div className="flex items-center gap-6">
          <a href="tel:+919876543220" className="hover:text-white transition-colors flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-gold-400" />
            <span>VIP Concierge: +91 98765 43220</span>
          </a>
          <button
            onClick={() => {
              onClose();
              openConsultation();
            }}
            className="text-gold-300 hover:text-white underline font-semibold"
          >
            Schedule Consultation
          </button>
        </div>
      </div>
    </div>
  );
}
