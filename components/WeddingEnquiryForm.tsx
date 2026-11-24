'use client';

import React, { useState } from 'react';
import { 
  User, 
  Phone, 
  Mail, 
  Calendar, 
  MapPin, 
  Users, 
  Heart, 
  Sparkles, 
  Send, 
  MessageSquare,
  CheckCircle2,
  ShieldCheck
} from 'lucide-react';

export default function WeddingEnquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    weddingDate: '',
    location: '',
    celebrationType: 'Royal Palace Destination Wedding',
    guestCount: '100 – 300 Guests',
    approxBudget: '₹50 Lakhs – ₹1 Crore',
    services: 'Complete 360° Wedding Planning & Décor',
    notes: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [ticketCode, setTicketCode] = useState('');

  const validate = () => {
    const err: Record<string, string> = {};
    if (!formData.name.trim()) err.name = 'Full name is required.';
    if (!formData.phone.trim() || formData.phone.length < 8) err.phone = 'Valid phone number required.';
    if (!formData.email.trim() || !formData.email.includes('@')) err.email = 'Valid email address required.';
    if (!formData.weddingDate.trim()) err.weddingDate = 'Approximate wedding date is required.';
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const code = `TGA-ENQ-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setTicketCode(code);
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello THE GRAND AFFAIR! Here is our wedding enquiry ticket #${ticketCode}:\n` +
    `• Name: ${formData.name}\n` +
    `• Celebration: ${formData.celebrationType}\n` +
    `• Date: ${formData.weddingDate}\n` +
    `• Location: ${formData.location || 'Undecided'}\n` +
    `• Guests: ${formData.guestCount}\n` +
    `• Budget: ${formData.approxBudget}\n` +
    `• Services: ${formData.services}`
  );

  return (
    <div className="w-full bg-white border border-gold-500/30 rounded-3xl p-6 sm:p-10 shadow-luxury relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gold-gradient" />

      {submitted ? (
        <div className="py-10 text-center space-y-5">
          <div className="w-16 h-16 rounded-full bg-burgundy-900/10 border-2 border-gold-500 text-burgundy-900 flex items-center justify-center mx-auto animate-bounce">
            <Heart className="w-8 h-8 fill-current text-burgundy-900" />
          </div>
          <span className="inline-block px-3 py-1 text-xs font-mono font-bold tracking-widest text-burgundy-900 bg-gold-300/30 border border-gold-500/40 rounded-full">
            OFFICIAL CONSULTATION CODE: {ticketCode}
          </span>
          <h3 className="font-editorial text-3xl font-bold uppercase text-burgundy-950">
            Your Wedding Vision Has Been Received
          </h3>
          <p className="text-sm text-charcoal-700 max-w-lg mx-auto leading-relaxed">
            Thank you, <strong className="text-burgundy-900">{formData.name}</strong>. Our Principal Wedding Architect has been notified and will prepare an initial concept dossier for you within 24 business hours.
          </p>

          <div className="p-4 bg-ivory-100 border border-gold-400/30 rounded-2xl max-w-md mx-auto text-xs text-charcoal-700 space-y-2">
            <div className="flex justify-between">
              <span className="text-charcoal-500">Celebration Style:</span>
              <span className="font-semibold text-charcoal-900">{formData.celebrationType}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-charcoal-500">Target Date:</span>
              <span className="font-semibold text-charcoal-900">{formData.weddingDate}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-charcoal-500">Planned Budget:</span>
              <span className="font-semibold text-charcoal-900">{formData.approxBudget}</span>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`https://wa.me/919876543220?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#1EBE5D] text-black font-semibold rounded-xl text-xs transition-colors shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Forward Ticket to WhatsApp Concierge</span>
            </a>
            <button
              onClick={() => setSubmitted(false)}
              className="w-full sm:w-auto px-6 py-3 bg-burgundy-900 hover:bg-burgundy-800 text-white rounded-xl text-xs font-semibold transition-colors"
            >
              Submit Another Inquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <span className="text-[10px] font-mono tracking-widest text-gold-600 uppercase block mb-1">
              STEP 1: CONFIDENTIAL WEDDING INQUIRY
            </span>
            <h3 className="font-editorial text-2xl sm:text-3xl font-bold uppercase text-burgundy-950">
              Request Your Private Consultation
            </h3>
            <p className="text-xs text-charcoal-600 mt-1">
              Kindly share your initial parameters so our wedding architects can prepare a personalized presentation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-charcoal-800 uppercase tracking-wider mb-1">
                Your Full Name *
              </label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-600" />
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Gayatri Sharma"
                  className="w-full pl-10 pr-3.5 py-2.5 bg-ivory-50 border border-gold-400/40 rounded-xl text-sm focus:border-burgundy-900 focus:outline-none"
                />
              </div>
              {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-xs font-bold text-charcoal-800 uppercase tracking-wider mb-1">
                Phone Number *
              </label>
              <div className="relative">
                <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-600" />
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. +91 98765 43210"
                  className="w-full pl-10 pr-3.5 py-2.5 bg-ivory-50 border border-gold-400/40 rounded-xl text-sm focus:border-burgundy-900 focus:outline-none"
                />
              </div>
              {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-charcoal-800 uppercase tracking-wider mb-1">
                Email Address *
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-600" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. gayatri@example.com"
                  className="w-full pl-10 pr-3.5 py-2.5 bg-ivory-50 border border-gold-400/40 rounded-xl text-sm focus:border-burgundy-900 focus:outline-none"
                />
              </div>
              {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-xs font-bold text-charcoal-800 uppercase tracking-wider mb-1">
                Wedding Date or Season *
              </label>
              <div className="relative">
                <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-600" />
                <input
                  type="text"
                  value={formData.weddingDate}
                  onChange={(e) => setFormData({ ...formData, weddingDate: e.target.value })}
                  placeholder="e.g. November 2026 / Winter Season"
                  className="w-full pl-10 pr-3.5 py-2.5 bg-ivory-50 border border-gold-400/40 rounded-xl text-sm focus:border-burgundy-900 focus:outline-none"
                />
              </div>
              {errors.weddingDate && <p className="text-xs text-red-600 mt-1">{errors.weddingDate}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-charcoal-800 uppercase tracking-wider mb-1">
                Type of Celebration
              </label>
              <select
                value={formData.celebrationType}
                onChange={(e) => setFormData({ ...formData, celebrationType: e.target.value })}
                className="w-full px-3 py-2.5 bg-ivory-50 border border-gold-400/40 rounded-xl text-xs focus:border-burgundy-900 focus:outline-none"
              >
                <option value="Royal Palace Destination Wedding">Royal Palace Destination</option>
                <option value="Coastal Beach Wedding (Goa / Bali)">Coastal Beach Wedding</option>
                <option value="Traditional Vedic Mandap Celebration">Traditional Vedic Celebration</option>
                <option value="Intimate Heritage Haveli Union">Intimate Heritage Haveli</option>
                <option value="Contemporary Grand Reception Gala">Contemporary Grand Reception</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-charcoal-800 uppercase tracking-wider mb-1">
                Expected Guests
              </label>
              <select
                value={formData.guestCount}
                onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                className="w-full px-3 py-2.5 bg-ivory-50 border border-gold-400/40 rounded-xl text-xs focus:border-burgundy-900 focus:outline-none"
              >
                <option value="Intimate (< 100 Guests)">Intimate (&lt; 100 Guests)</option>
                <option value="100 – 300 Guests">100 – 300 Guests</option>
                <option value="300 – 600 Guests">300 – 600 Guests</option>
                <option value="600+ Guests (Royal Grand)">600+ Guests (Royal Grand)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-charcoal-800 uppercase tracking-wider mb-1">
                Approximate Budget
              </label>
              <select
                value={formData.approxBudget}
                onChange={(e) => setFormData({ ...formData, approxBudget: e.target.value })}
                className="w-full px-3 py-2.5 bg-ivory-50 border border-gold-400/40 rounded-xl text-xs focus:border-burgundy-900 focus:outline-none"
              >
                <option value="₹25 Lakhs – ₹50 Lakhs">₹25L – ₹50L</option>
                <option value="₹50 Lakhs – ₹1 Crore">₹50L – ₹1 Crore</option>
                <option value="₹1 Crore – ₹3 Crores">₹1Cr – ₹3 Crores</option>
                <option value="₹3 Crores+ (Ultra Luxury)">₹3 Crores+ (Ultra Luxury)</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-charcoal-800 uppercase tracking-wider mb-1">
                Target Location / Preferred City
              </label>
              <div className="relative">
                <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-600" />
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="e.g. Udaipur / Jaipur / Goa / Bengaluru / Delhi"
                  className="w-full pl-10 pr-3.5 py-2.5 bg-ivory-50 border border-gold-400/40 rounded-xl text-sm focus:border-burgundy-900 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-charcoal-800 uppercase tracking-wider mb-1">
                Primary Services Required
              </label>
              <select
                value={formData.services}
                onChange={(e) => setFormData({ ...formData, services: e.target.value })}
                className="w-full px-3 py-2.5 bg-ivory-50 border border-gold-400/40 rounded-xl text-xs focus:border-burgundy-900 focus:outline-none"
              >
                <option value="Complete 360° Wedding Planning & Décor">Complete 360° Planning & Décor</option>
                <option value="Destination Venue Selection & Guest Hospitality">Destination Venue & Hospitality</option>
                <option value="Bespoke Floral & Mandap Architecture">Bespoke Floral & Mandap Architecture</option>
                <option value="Cinematic Photography & Highlight Films">Cinematic Photography & Films</option>
                <option value="Entertainment, Artists & Choreography">Entertainment, Artists & Choreography</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-charcoal-800 uppercase tracking-wider mb-1">
              Specific Wishes, Traditions & Family Preferences
            </label>
            <textarea
              rows={3}
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              placeholder="Tell us about special traditions, dietary considerations, favorite flowers, or dream moments..."
              className="w-full px-3.5 py-2.5 bg-ivory-50 border border-gold-400/40 rounded-xl text-sm focus:border-burgundy-900 focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-2 p-3 bg-ivory-100 border border-gold-500/20 rounded-xl text-[11px] text-charcoal-600">
            <ShieldCheck className="w-4 h-4 text-gold-600 shrink-0" />
            <span>Demonstration Notice: Form functions as a realistic interactive front-end consultation generator. All data remains strictly confidential.</span>
          </div>

          <button
            type="submit"
            className="w-full py-4 px-6 bg-burgundy-900 hover:bg-burgundy-800 text-gold-300 font-editorial font-bold text-base tracking-widest uppercase rounded-2xl shadow-luxury transition-all flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4 text-gold-400" />
            <span>Send Wedding Consultation Request</span>
          </button>
        </form>
      )}
    </div>
  );
}
