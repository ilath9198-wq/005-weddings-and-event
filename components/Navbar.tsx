'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Heart, Sparkles } from 'lucide-react';
import { useConsultation } from './ConsultationContext';
import LuxuryEditorialMenu from './LuxuryEditorialMenu';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { openConsultation } = useConsultation();
  const pathname = usePathname();

  // Find active route label for delicate header indicator
  const currentRouteTitle = () => {
    switch (pathname) {
      case '/': return 'Home';
      case '/about': return 'Our Story';
      case '/services': return 'Services';
      case '/venues': return 'Venues';
      case '/planning': return 'Planning Journey';
      case '/photography': return 'Photography & Films';
      case '/portfolio': return 'Portfolio';
      case '/packages': return 'Packages';
      case '/contact': return 'Consultation';
      default: return 'Weddings';
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-ivory-50/90 backdrop-blur-md border-b border-gold-500/25 transition-all">
        {/* Top Gold Ribbon (Desktop only) */}
        <div className="hidden lg:flex items-center justify-between px-8 py-1.5 bg-burgundy-950 text-[11px] font-mono tracking-wider text-gold-300">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
              <span>THE GRAND AFFAIR • BESPOKE WEDDINGS & CELEBRATIONS</span>
            </span>
            <span className="text-gold-500/50">|</span>
            <span>UDAIPUR • JAIPUR • GOA • LAKE COMO • BALI</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="tel:+919876543220" className="hover:text-white transition-colors flex items-center gap-1.5">
              <Phone className="w-3 h-3 text-gold-400" />
              <span>Private Concierge: <strong>+91 98765 43220</strong></span>
            </a>
            <span className="text-gold-500/50">|</span>
            <span className="text-gold-400/80">By Prior Appointment</span>
          </div>
        </div>

        {/* Main Header Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-22 flex items-center justify-between gap-3">
          {/* Brand Wordmark */}
          <Link
            href="/"
            className="flex flex-col group focus:outline-none shrink-0"
            aria-label="THE GRAND AFFAIR Homepage"
          >
            <span className="font-editorial text-2xl sm:text-3xl font-bold tracking-widest text-burgundy-950 uppercase group-hover:text-burgundy-800 transition-colors">
              THE GRAND AFFAIR
            </span>
            <span className="text-[10px] sm:text-[11px] tracking-[0.25em] text-gold-600 uppercase font-sans font-medium -mt-1">
              WEDDINGS & CELEBRATIONS
            </span>
          </Link>

          {/* Active Route Pill (Desktop only, minimal and elegant) */}
          <div className="hidden md:flex items-center gap-2 px-3.5 py-1 rounded-full bg-ivory-200 border border-gold-500/30 text-xs font-editorial tracking-wider text-burgundy-900">
            <Sparkles className="w-3 h-3 text-gold-600" />
            <span className="uppercase text-[11px]">{currentRouteTitle()}</span>
          </div>

          {/* Right Header Controls */}
          <div className="flex items-center gap-2.5 sm:gap-4 shrink-0">
            {/* Phone Shortcut (Tablet / Desktop) */}
            <a
              href="tel:+919876543220"
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-gold-500/40 text-xs font-sans text-burgundy-950 hover:bg-gold-500/10 transition-colors"
              aria-label="Call VIP Wedding Concierge"
            >
              <Phone className="w-3.5 h-3.5 text-gold-600" />
              <span className="hidden xl:inline">+91 98765 43220</span>
              <span className="xl:hidden">Concierge</span>
            </a>

            {/* "Plan Your Wedding" Prominent CTA */}
            <button
              onClick={() => openConsultation()}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2.5 bg-burgundy-900 hover:bg-burgundy-800 text-gold-300 font-editorial font-bold text-xs sm:text-sm tracking-wider uppercase rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 shrink-0"
            >
              <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold-400 fill-current" />
              <span className="hidden xs:inline whitespace-nowrap">Plan Your Wedding</span>
              <span className="xs:hidden whitespace-nowrap">Plan</span>
            </button>

            {/* Distinctive Minimalist Three-Line Hamburger Icon with Champagne-Gold Detailing */}
            <button
              onClick={() => setMenuOpen(true)}
              className="flex items-center gap-2 p-2.5 sm:px-3.5 sm:py-2.5 rounded-full border border-gold-500/50 hover:border-burgundy-900 bg-white hover:bg-ivory-100 shadow-sm transition-all group shrink-0"
              aria-label="Open Luxury Editorial Navigation"
            >
              <div className="space-y-1 sm:space-y-1.5 flex flex-col items-center justify-center">
                <span className="block w-4 sm:w-5 h-[1.5px] bg-gold-600 group-hover:bg-burgundy-900 transition-colors" />
                <span className="block w-3 sm:w-3.5 h-[1.5px] bg-gold-500 group-hover:bg-burgundy-800 transition-colors" />
                <span className="block w-4 sm:w-5 h-[1.5px] bg-gold-600 group-hover:bg-burgundy-900 transition-colors" />
              </div>
              <span className="hidden sm:inline-block font-editorial font-bold text-xs tracking-widest uppercase text-burgundy-950 group-hover:text-gold-600">
                Menu
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Luxury Full-Screen Burgundy Editorial Overlay */}
      <LuxuryEditorialMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
