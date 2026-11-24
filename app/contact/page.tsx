import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import WeddingEnquiryForm from '../../components/WeddingEnquiryForm';
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageSquare, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  Heart, 
  Calendar,
  Compass
} from 'lucide-react';

export const metadata = {
  title: 'Contact & Private Studios | THE GRAND AFFAIR – Luxury Weddings',
  description: 'Connect with our luxury wedding planners in New Delhi, Udaipur, and Mumbai. Schedule an in-person studio consultation or initiate your celebration inquiry.',
};

const studios = [
  {
    city: 'New Delhi Studio',
    subtitle: 'Flagship Atelier & Design Salon',
    address: 'Mehrauli Heritage Corridor, Near Qutub Minar, New Delhi – 110030',
    phone: '+91 98200 44521',
    email: 'delhi@thegrandaffair.in',
    timings: 'Tuesday – Sunday: 10:30 AM – 7:30 PM (By Prior Appointment)',
    features: ['Private 3D Décor Simulation Suite', 'Curated Fabric & Floral Vault', 'Valet Parking Available']
  },
  {
    city: 'Udaipur Studio',
    subtitle: 'Palace Concierge & Lake Pichola Office',
    address: 'City Palace Gate Road, Old City, Udaipur, Rajasthan – 313001',
    phone: '+91 99100 88214',
    email: 'udaipur@thegrandaffair.in',
    timings: 'Monday – Saturday: 10:00 AM – 7:00 PM (By Prior Appointment)',
    features: ['Direct Heritage Palace Liaison', 'Royal Vendor Sourcing Cell', 'Private Boat Transfers to Site Visits']
  },
  {
    city: 'Mumbai Studio',
    subtitle: 'Coastal Weddings & Client Lounge',
    address: 'Worli Sea Face Executive Suite, Mumbai, Maharashtra – 400018',
    phone: '+91 98200 44521',
    email: 'mumbai@thegrandaffair.in',
    timings: 'Monday – Friday: 11:00 AM – 8:00 PM (By Prior Appointment)',
    features: ['Destination Flight & Charter Coordination', 'Bespoke Jewelry Liaison', 'Virtual VR Walkthroughs']
  }
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-sand text-charcoal">
      {/* 1. ATMOSPHERIC PHOTOGRAPHIC HERO */}
      <section className="relative min-h-[75vh] md:min-h-[82vh] flex items-center justify-center overflow-hidden py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=2000&q=85"
            alt="Contact The Grand Affair Luxury Weddings"
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
            <Compass className="w-3.5 h-3.5 text-gold-400" />
            <span>PRIVATE CONSULTATIONS & ROYAL ENQUIRIES</span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-wide text-white leading-[1.08] mb-6 drop-shadow-md">
            Begin Your Wedding Journey <br />
            <span className="text-gold-gradient italic font-normal lowercase font-editorial">& With Our Concierge</span>
          </h1>

          <p className="font-editorial text-lg sm:text-2xl italic text-white/95 leading-relaxed mb-10 max-w-2xl mx-auto drop-shadow">
            &ldquo;Join our founding directors over fine tea at our private studios in New Delhi, Udaipur, and Mumbai, or begin with a digital celebration brief.&rdquo;
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-gold-200">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-burgundy-950/80 border border-gold-400/40 backdrop-blur-md">
              <Phone className="w-4 h-4 text-gold-400" />
              <span className="font-sans font-medium text-white">+91 98200 44521</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-burgundy-950/80 border border-gold-400/40 backdrop-blur-md">
              <Mail className="w-4 h-4 text-gold-400" />
              <span className="font-sans font-medium text-white">concierge@thegrandaffair.in</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-burgundy-950/80 border border-gold-400/40 backdrop-blur-md">
              <Clock className="w-4 h-4 text-gold-400" />
              <span className="font-sans font-medium text-gold-300">Response within 4 Hours</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN ENQUIRY & CONTACT FORM SECTION */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Context, Philosophy, Direct WhatsApp */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-gold uppercase tracking-[0.25em] text-xs font-semibold">
                Direct Dialogue
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-burgundy mt-2 mb-4">
                We Accept a Limited Number of Celebrations Each Season
              </h2>
              <div className="w-16 h-px bg-gold mb-6" />
              <p className="text-charcoal-light font-light text-sm sm:text-base leading-relaxed mb-4">
                To preserve undivided creative devotion and flawless execution, our partners oversee only a select portfolio of 15 royal weddings per calendar year.
              </p>
              <p className="text-charcoal-light font-light text-sm sm:text-base leading-relaxed">
                Whether you have an established royal palace date or are just beginning your venue search, we invite you to share your vision with us.
              </p>
            </div>

            {/* Direct WhatsApp Callout Card */}
            <div className="p-6 bg-ivory border border-rose-gold/25 rounded-sm shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-burgundy font-medium">Instant WhatsApp Concierge</h4>
                  <p className="text-xs text-charcoal-light">For immediate date inquiries & confidential calls</p>
                </div>
              </div>
              <p className="text-xs text-charcoal-light font-light">
                Our private concierge desk operates 7 days a week to support international families across USA, UK, and Middle East time zones.
              </p>
              <a
                href="https://wa.me/919820044521?text=Hello%20THE%20GRAND%20AFFAIR,%20we%20would%20like%20to%20inquire%20about%20wedding%20dates."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 bg-emerald-700 hover:bg-emerald-800 text-ivory text-xs font-medium uppercase tracking-wider rounded-sm transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat with Wedding Concierge</span>
              </a>
            </div>

            {/* Privacy & Confidentiality Guarantee */}
            <div className="flex items-start gap-3 p-4 bg-white border border-rose-gold/15 rounded-sm text-xs text-charcoal-light">
              <ShieldCheck className="w-5 h-5 text-gold shrink-0 mt-0.5" />
              <p>
                <strong className="text-burgundy">Strict Privacy & NDA Protocol:</strong> All guest lists, royal venue selections, and financial blueprints remain strictly confidential under customary nondisclosure protocols.
              </p>
            </div>
          </div>

          {/* Right Column: Full Wedding Enquiry Form Component */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 border border-rose-gold/25 rounded-sm shadow-xl">
            <div className="mb-8">
              <span className="text-xs text-gold uppercase tracking-widest font-semibold block mb-1">
                Celebration Blueprint
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-burgundy">
                Send a Wedding Consultation Request
              </h3>
              <p className="text-xs text-charcoal-light font-light mt-1">
                Please complete the parameters below. Our Lead Creative Architect will review and provide an initial consultation itinerary within 4 hours.
              </p>
            </div>

            <WeddingEnquiryForm />
          </div>
        </div>
      </section>

      {/* 3. PHYSICAL STUDIOS & ATELIERS */}
      <section className="py-20 bg-ivory border-t border-rose-gold/20 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold uppercase tracking-[0.25em] text-xs font-semibold">
              Our Physical Presence
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-burgundy mt-2 mb-4">
              Private Studios & Salons
            </h2>
            <div className="w-16 h-px bg-gold mx-auto mb-6" />
            <p className="text-charcoal-light font-light text-base leading-relaxed">
              We welcome couples and families to experience spatial 3D models, inspect imported Italian linen swatches, and review custom floral fragrances in person.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {studios.map((studio, idx) => (
              <div
                key={idx}
                className="bg-white border border-rose-gold/25 p-8 rounded-sm shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-sand flex items-center justify-center text-burgundy mb-4">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold text-gold uppercase tracking-wider block mb-1">
                    {studio.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl text-burgundy mb-3">
                    {studio.city}
                  </h3>
                  <p className="text-xs text-charcoal-light font-light leading-relaxed mb-6">
                    {studio.address}
                  </p>

                  <div className="space-y-2 mb-6 text-xs text-charcoal">
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-gold" />
                      <span>{studio.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-gold" />
                      <span>{studio.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-charcoal-light">
                      <Clock className="w-3.5 h-3.5 text-gold" />
                      <span>{studio.timings}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-rose-gold/15 space-y-1.5">
                  {studio.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-[11px] text-charcoal-light">
                      <Sparkles className="w-3 h-3 text-gold" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
