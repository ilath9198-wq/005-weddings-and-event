'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Heart, 
  Sparkles, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Instagram, 
  Facebook, 
  Youtube,
  ShieldCheck,
  ArrowUpRight
} from 'lucide-react';
import { weddingRoutes } from './LuxuryEditorialMenu';
import { useConsultation } from './ConsultationContext';

export default function Footer() {
  const { openConsultation } = useConsultation();

  return (
    <footer className="w-full bg-burgundy-950 text-ivory-200 border-t border-gold-500/30 relative overflow-hidden">
      {/* Editorial Quote Top Ribbon */}
      <div className="py-12 px-4 sm:px-6 border-b border-gold-500/20 bg-burgundy-900/50 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold-400 block">
            WHERE YOUR FOREVER BEGINS
          </span>
          <p className="font-editorial text-2xl sm:text-4xl italic text-ivory-100 leading-snug">
            &ldquo;Every love story is sacred. We simply craft the timeless royal stage upon which your greatest memories unfold.&rdquo;
          </p>
          <div className="pt-2">
            <button
              onClick={() => openConsultation()}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-gold-400 text-gold-300 hover:text-burgundy-950 hover:bg-gold-300 font-editorial font-bold text-xs uppercase tracking-widest transition-all"
            >
              <Heart className="w-3.5 h-3.5 fill-current" />
              <span>Begin Your Private Consultation</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="flex flex-col group focus:outline-none">
              <span className="font-editorial text-3xl font-bold tracking-widest text-gold-300 uppercase group-hover:text-gold-200 transition-colors">
                THE GRAND AFFAIR
              </span>
              <span className="text-xs tracking-[0.25em] text-gold-500 uppercase font-sans font-medium -mt-1">
                WEDDINGS & CELEBRATIONS
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-ivory-300/80 leading-relaxed max-w-sm">
              An established luxury wedding and celebration planning house. Orchestrating royal heritage palaces, coastal sunset vows, sculptural mandap architecture, and Michelin-standard gastronomy across Rajasthan, Goa, Delhi, Lake Como, and Bali.
            </p>

            <div className="pt-2 flex items-center gap-3 text-gold-400">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-gold-500/40 hover:border-gold-300 hover:text-white flex items-center justify-center transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-gold-500/40 hover:border-gold-300 hover:text-white flex items-center justify-center transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-gold-500/40 hover:border-gold-300 hover:text-white flex items-center justify-center transition-colors" aria-label="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="https://wa.me/919876543220" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-gold-500/40 hover:border-gold-300 hover:text-white flex items-center justify-center transition-colors text-[#25D366]" aria-label="WhatsApp">
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 3: Navigation Routes Part 1 */}
          <div>
            <h4 className="font-editorial text-sm font-bold uppercase tracking-widest text-gold-300 mb-4 pb-2 border-b border-gold-500/20">
              Celebration Routes
            </h4>
            <ul className="space-y-2.5 text-xs">
              {weddingRoutes.slice(0, 5).map((r) => (
                <li key={r.path}>
                  <Link 
                    href={r.path}
                    className="hover:text-gold-300 transition-colors flex items-center gap-2 group"
                  >
                    <span className="text-[10px] font-mono text-gold-600 group-hover:text-gold-400">{r.num} /</span>
                    <span>{r.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Navigation Routes Part 2 */}
          <div>
            <h4 className="font-editorial text-sm font-bold uppercase tracking-widest text-gold-300 mb-4 pb-2 border-b border-gold-500/20">
              Curated Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              {weddingRoutes.slice(5).map((r) => (
                <li key={r.path}>
                  <Link 
                    href={r.path}
                    className="hover:text-gold-300 transition-colors flex items-center gap-2 group"
                  >
                    <span className="text-[10px] font-mono text-gold-600 group-hover:text-gold-400">{r.num} /</span>
                    <span>{r.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Studio Concierge */}
          <div className="space-y-3.5">
            <h4 className="font-editorial text-sm font-bold uppercase tracking-widest text-gold-300 mb-4 pb-2 border-b border-gold-500/20">
              Private Studios
            </h4>

            <div className="flex items-start gap-2.5 text-xs text-ivory-300">
              <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
              <span>The Pavilion, 12 Mehrauli Heritage Corridor, New Delhi & Udaipur Studio</span>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-ivory-300">
              <Phone className="w-4 h-4 text-gold-400 shrink-0" />
              <a href="tel:+919876543220" className="hover:text-gold-300 transition-colors font-mono">
                +91 98765 43220 (VIP Desk)
              </a>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-ivory-300">
              <Mail className="w-4 h-4 text-gold-400 shrink-0" />
              <a href="mailto:concierge@thegrandaffair.in" className="hover:text-gold-300 transition-colors font-mono truncate">
                concierge@thegrandaffair.in
              </a>
            </div>

            <div className="flex items-start gap-2.5 text-xs text-ivory-400 pt-2 border-t border-gold-500/20">
              <Clock className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
              <span>By prior appointment only. Worldwide on-site consultations available.</span>
            </div>
          </div>
        </div>

        {/* Industry Demonstration Notice */}
        <div className="mt-12 pt-8 border-t border-gold-500/20 text-xs text-ivory-400/80 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-center md:text-left">
            <ShieldCheck className="w-4 h-4 text-gold-400 shrink-0" />
            <span>
              <strong>Demonstration Notice:</strong> THE GRAND AFFAIR is an industry-specific website demonstration designed for wedding planners, event organizers, wedding decorators, photographers, and luxury event management companies.
            </span>
          </div>
          <div className="font-mono text-gold-500/70 text-center md:text-right">
            <span>© 2026 THE GRAND AFFAIR. Industry-Specific Website Demonstrations.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
