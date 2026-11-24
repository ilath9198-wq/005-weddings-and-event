'use client';

import React, { useState, useEffect } from 'react';
import { useConsultation } from './ConsultationContext';
import { 
  X, 
  Heart, 
  Calendar, 
  MapPin, 
  Users, 
  Phone, 
  Mail, 
  CheckCircle2, 
  Sparkles, 
  MessageSquare,
  ArrowRight,
  Gem
} from 'lucide-react';

export default function WeddingConsultationModal() {
  const { isOpen, prefilledTarget, closeConsultation } = useConsultation();

  const [formData, setFormData] = useState({
    coupleName: '',
    phone: '',
    email: '',
    weddingDate: '',
    eventType: 'Royal Palace Wedding',
    location: '',
    guestCount: '100 – 300 Guests',
    budgetRange: '₹50 Lakhs – ₹1 Crore',
    services: 'Complete Wedding Planning & Décor',
    notes: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  useEffect(() => {
    if (prefilledTarget) {
      setFormData((prev) => ({
        ...prev,
        eventType: prefilledTarget.includes('Venue') ? 'Palace Wedding' : prefilledTarget,
        notes: `Inquiry regarding: ${prefilledTarget}`
      }));
    }
  }, [prefilledTarget]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) closeConsultation();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeConsultation]);

  if (!isOpen) return null;

  const validate = () => {
    const err: Record<string, string> = {};
    if (!formData.coupleName.trim()) err.coupleName = 'Please share your name(s).';
    if (!formData.phone.trim() || formData.phone.length < 8) err.phone = 'Valid phone number required.';
    if (!formData.email.trim() || !formData.email.includes('@')) err.email = 'Valid email address required.';
    if (!formData.weddingDate) err.weddingDate = 'Please specify an approximate wedding date.';
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const code = `TGA-WED-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setTicketId(code);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    closeConsultation();
  };

  const whatsappMessage = encodeURIComponent(
    `Hello THE GRAND AFFAIR! We would love to discuss our wedding consultation #${ticketId || 'NEW'}:\n` +
    `• Couple: ${formData.coupleName}\n` +
    `• Celebration: ${formData.eventType}\n` +
    `• Approximate Date: ${formData.weddingDate}\n` +
    `• Location: ${formData.location || 'Undecided'}\n` +
    `• Guests: ${formData.guestCount}\n` +
    `• Budget: ${formData.budgetRange}`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl bg-ivory-50 border border-gold-500/40 rounded-3xl shadow-2xl overflow-hidden my-8 text-charcoal-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div className="flex items-center justify-between px-6 py-5 bg-burgundy-900 border-b border-gold-500/30 text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gold-500/20 border border-gold-400 flex items-center justify-center text-gold-300">
              <Gem className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-mono tracking-widest text-gold-300 uppercase block">
                THE GRAND AFFAIR • WEDDINGS & CELEBRATIONS
              </span>
              <h3 className="font-editorial text-2xl font-bold tracking-wide">
                {submitted ? 'Consultation Reserved' : 'Begin Your Wedding Journey'}
              </h3>
            </div>
          </div>
          <button
            onClick={closeConsultation}
            className="w-8 h-8 rounded-full bg-burgundy-800 text-gold-300 hover:text-white flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          /* Submission Voucher */
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-burgundy-900/10 border-2 border-gold-500 text-burgundy-900 flex items-center justify-center mx-auto">
              <Heart className="w-8 h-8 fill-current text-burgundy-900" />
            </div>
            <span className="inline-block px-3 py-1 text-xs font-mono font-bold tracking-widest text-burgundy-900 bg-gold-300/30 border border-gold-500/40 rounded-full">
              CONSULTATION REF: {ticketId}
            </span>
            <h2 className="font-editorial text-3xl font-bold text-burgundy-950">
              We Would Be Honored To Tell Your Story
            </h2>
            <p className="text-sm text-charcoal-700 max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-burgundy-900">{formData.coupleName}</strong>. Our Principal Wedding Architect will review your preferences and connect with you within 24 hours.
            </p>

            <div className="p-5 bg-white border border-gold-400/40 rounded-2xl max-w-lg mx-auto text-left text-xs space-y-3 shadow-sm">
              <div className="grid grid-cols-2 gap-4 pb-3 border-b border-ivory-300">
                <div>
                  <span className="text-charcoal-500 block">Celebration Style</span>
                  <span className="font-bold text-charcoal-900">{formData.eventType}</span>
                </div>
                <div>
                  <span className="text-charcoal-500 block">Target Timeline</span>
                  <span className="font-bold text-charcoal-900">{formData.weddingDate}</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-charcoal-500 block">Estimated Guests</span>
                  <span className="font-bold text-charcoal-900">{formData.guestCount}</span>
                </div>
                <div>
                  <span className="text-charcoal-500 block">Planned Budget</span>
                  <span className="font-bold text-charcoal-900">{formData.budgetRange}</span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`https://wa.me/919876543220?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#1EBE5D] text-black font-semibold rounded-xl text-xs transition-colors shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Forward Details to WhatsApp Concierge</span>
              </a>
              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-6 py-3 bg-burgundy-900 hover:bg-burgundy-800 text-white rounded-xl text-xs font-semibold transition-colors"
              >
                Close & Return to Website
              </button>
            </div>
          </div>
        ) : (
          /* Consultation Questionnaire */
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-charcoal-800 uppercase tracking-wider mb-1">
                  Couple / Family Name(s) *
                </label>
                <input
                  type="text"
                  value={formData.coupleName}
                  onChange={(e) => setFormData({ ...formData, coupleName: e.target.value })}
                  placeholder="e.g. Gayatri & Rohan"
                  className="w-full px-3.5 py-2.5 bg-white border border-gold-400/40 rounded-xl text-sm focus:border-burgundy-900 focus:outline-none"
                />
                {errors.coupleName && <p className="text-xs text-red-600 mt-1">{errors.coupleName}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-charcoal-800 uppercase tracking-wider mb-1">
                  Contact Phone Number *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. +91 98765 43210"
                  className="w-full px-3.5 py-2.5 bg-white border border-gold-400/40 rounded-xl text-sm focus:border-burgundy-900 focus:outline-none"
                />
                {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-charcoal-800 uppercase tracking-wider mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. rohan@example.com"
                  className="w-full px-3.5 py-2.5 bg-white border border-gold-400/40 rounded-xl text-sm focus:border-burgundy-900 focus:outline-none"
                />
                {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-charcoal-800 uppercase tracking-wider mb-1">
                  Target Wedding Date / Season *
                </label>
                <input
                  type="text"
                  value={formData.weddingDate}
                  onChange={(e) => setFormData({ ...formData, weddingDate: e.target.value })}
                  placeholder="e.g. November 2026 / Mid Winter"
                  className="w-full px-3.5 py-2.5 bg-white border border-gold-400/40 rounded-xl text-sm focus:border-burgundy-900 focus:outline-none"
                />
                {errors.weddingDate && <p className="text-xs text-red-600 mt-1">{errors.weddingDate}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-charcoal-800 uppercase tracking-wider mb-1">
                  Celebration Style
                </label>
                <select
                  value={formData.eventType}
                  onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                  className="w-full px-3 py-2.5 bg-white border border-gold-400/40 rounded-xl text-xs focus:border-burgundy-900 focus:outline-none"
                >
                  <option value="Royal Palace Wedding">Royal Palace Wedding</option>
                  <option value="Coastal Destination Wedding">Coastal Destination Wedding</option>
                  <option value="Traditional Vedic Celebration">Traditional Vedic Celebration</option>
                  <option value="Intimate Heritage Union">Intimate Heritage Union</option>
                  <option value="Contemporary Grand Reception">Contemporary Grand Reception</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-charcoal-800 uppercase tracking-wider mb-1">
                  Expected Guests
                </label>
                <select
                  value={formData.guestCount}
                  onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                  className="w-full px-3 py-2.5 bg-white border border-gold-400/40 rounded-xl text-xs focus:border-burgundy-900 focus:outline-none"
                >
                  <option value="Under 100 Guests">Under 100 Guests (Intimate)</option>
                  <option value="100 – 300 Guests">100 – 300 Guests</option>
                  <option value="300 – 600 Guests">300 – 600 Guests</option>
                  <option value="600+ Guests">600+ Guests (Grand Royal)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-charcoal-800 uppercase tracking-wider mb-1">
                  Planned Budget
                </label>
                <select
                  value={formData.budgetRange}
                  onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                  className="w-full px-3 py-2.5 bg-white border border-gold-400/40 rounded-xl text-xs focus:border-burgundy-900 focus:outline-none"
                >
                  <option value="₹25 Lakhs – ₹50 Lakhs">₹25L – ₹50L</option>
                  <option value="₹50 Lakhs – ₹1 Crore">₹50L – ₹1 Crore</option>
                  <option value="₹1 Crore – ₹3 Crores">₹1Cr – ₹3 Crores</option>
                  <option value="₹3 Crores+ (Ultra Luxury)">₹3 Crores+ (Ultra Luxury)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-charcoal-800 uppercase tracking-wider mb-1">
                Preferred Destination / City
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                placeholder="e.g. Udaipur / Jaipur / Goa / Bengaluru / Delhi"
                className="w-full px-3.5 py-2.5 bg-white border border-gold-400/40 rounded-xl text-sm focus:border-burgundy-900 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-charcoal-800 uppercase tracking-wider mb-1">
                Your Wedding Vision & Specific Wishes
              </label>
              <textarea
                rows={2}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Share traditions, favourite flowers, musical dreams, or specific venue thoughts..."
                className="w-full px-3.5 py-2 bg-white border border-gold-400/40 rounded-xl text-sm focus:border-burgundy-900 focus:outline-none"
              />
            </div>

            <div className="pt-2 flex items-center justify-end gap-3 border-t border-ivory-300">
              <button
                type="button"
                onClick={closeConsultation}
                className="px-5 py-2.5 text-xs text-charcoal-600 hover:text-charcoal-900 font-semibold"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-burgundy-900 hover:bg-burgundy-800 text-gold-300 font-editorial font-bold text-base tracking-wider rounded-xl shadow-md transition-all"
              >
                <span>Request Private Consultation</span>
                <ArrowRight className="w-4 h-4 text-gold-400" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
