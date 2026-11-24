export interface WeddingPackage {
  id: string;
  title: string;
  subtitle: string;
  recommendedFor: string;
  guestCapacity: string;
  indicativeInvestment: string;
  isPopular?: boolean;
  planningSupport: string;
  decorCoordination: string;
  venueAssistance: string;
  photographyOptions: string;
  hospitalityManagement: string;
  keyInclusions: string[];
}

export const weddingPackages: WeddingPackage[] = [
  {
    id: 'intimate-celebrations',
    title: 'Intimate Celebrations',
    subtitle: 'Understated elegance for close family and lifelong cherished friends.',
    recommendedFor: 'Boutique weddings, roka ceremonies, or heritage haveli unions.',
    guestCapacity: 'Up to 100 Guests',
    indicativeInvestment: 'Custom Consultation (Indicative ₹4,50,000+)',
    planningSupport: 'Single dedicated lead planner & wedding timeline curator.',
    decorCoordination: 'Artisanal floral styling, brass urlis, candlelit table arrangements.',
    venueAssistance: 'Boutique heritage property & private lawn recommendations.',
    photographyOptions: 'Coordination with top candid fine-art photographers.',
    hospitalityManagement: 'Personalized digital RSVPs and welcome gift hampers.',
    keyInclusions: [
      'Comprehensive budget architecture & vendor contracting',
      'Ceremony timeline management (Pheras & intimate dinner)',
      'Custom floral mandap & couple seating curation',
      'Artisanal printed stationery & menu cards',
      'On-day coordination with 2 on-ground managers'
    ]
  },
  {
    id: 'classic-wedding-planning',
    title: 'Classic Wedding Planning',
    subtitle: 'Timeless multi-event management with dedicated creative direction.',
    recommendedFor: '2 to 3-day traditional celebrations with multiple ceremonial rituals.',
    guestCapacity: '100 – 300 Guests',
    indicativeInvestment: 'Custom Consultation (Indicative ₹8,50,000+)',
    planningSupport: 'Senior wedding architect, budget director, and bridal shadow assistant.',
    decorCoordination: 'Full 3D décor layouts, imported florals, thematic lighting.',
    venueAssistance: 'Luxury 5-star hotel ballroom & garden lawn contractual sourcing.',
    photographyOptions: 'Pre-wedding couple shoot & multi-camera ceremony coverage.',
    hospitalityManagement: 'Airport concierge, hotel check-in desks & guest room allocations.',
    keyInclusions: [
      'Full 3-day ceremonial management (Mehendi, Sangeet & Wedding)',
      'Vendor negotiation & payment milestone reconciliation',
      'Custom theme design for each separate function',
      'Bridal vanity assistant & groom personal coordinator',
      'Sound, lighting & DJ artist rider management',
      'Dedicated on-site hospitality desk at guest hotel'
    ]
  },
  {
    id: 'premium-wedding-experience',
    title: 'Premium Wedding Experience',
    subtitle: 'Grand ceremonial opulence, concert-grade entertainment & royal dining.',
    recommendedFor: 'High-profile celebrations requiring extraordinary production scale.',
    guestCapacity: '300 – 600 Guests',
    indicativeInvestment: 'Custom Consultation (Indicative ₹15,00,000+)',
    isPopular: true,
    planningSupport: 'Full ensemble: Principal planner, production director, guest logistics head.',
    decorCoordination: 'Palatial mandap architecture, hanging floral ceilings, crystal chandeliers.',
    venueAssistance: 'Sprawling palace grounds & multi-acre convention sanctuaries.',
    photographyOptions: 'Cinematic 4K drone cinematography, teaser film, and wedding coffee table album.',
    hospitalityManagement: 'Chauffeured luxury fleet, customized guest app, and VIP hospitality.',
    keyInclusions: [
      'Complete 4-day turnkey wedding orchestration',
      'Concert-scale Sangeet stage production & LED walls',
      'Master chef gastronomy tastings & menu choreography',
      'Cold pyro, drone show & grand couple entry special effects',
      'Custom luggage tags, digital itinerary portal & branded stationery',
      'Team of 8 on-ground coordinators with private radio comms'
    ]
  },
  {
    id: 'luxury-destination-wedding',
    title: 'Luxury Destination Wedding',
    subtitle: 'Fairytale royal palaces and exotic coastal sanctuaries worldwide.',
    recommendedFor: 'Destination escapes across Udaipur, Jaipur, Goa, Lake Como, or Bali.',
    guestCapacity: '150 – 500 Guests',
    indicativeInvestment: 'Custom Consultation (Indicative ₹22,00,000+)',
    isPopular: true,
    planningSupport: 'Dual teams: Destination advance liaison team + headquarter planners.',
    decorCoordination: 'Regional heritage styling, indigenous flora & palace architecture harmony.',
    venueAssistance: 'Full private buyout negotiations of historic palaces or coastal villas.',
    photographyOptions: 'International destination photography team & cinematic highlight reel.',
    hospitalityManagement: 'Air charter transfers, royal welcome procession, luggage concierge.',
    keyInclusions: [
      'Full destination travel logistics & room block contracting',
      'Royal arrival procession (Vintage cars, royal musicians, flower petals)',
      'Local municipality, sound curfew & heritage legal permissions',
      'Multi-cuisine catering supervision integrating local specialties',
      'Bespoke destination welcome hampers with regional delicacies',
      'Full-time bridal concierge & couple lifestyle manager'
    ]
  },
  {
    id: 'complete-wedding-management',
    title: 'The Concourse 360° Royal Suite',
    subtitle: 'Ultimate luxury with limitless bespoke personalization & discretion.',
    recommendedFor: 'Ultra-luxury families seeking flawless, turnkey perfection.',
    guestCapacity: 'Custom Capacity (500+ Guests)',
    indicativeInvestment: 'Bespoke Retainer Consultation',
    planningSupport: 'Unlimited personal consultations with Principal Founder & Executive Team.',
    decorCoordination: 'Couture architectural sets custom-built by Bollywood art directors.',
    venueAssistance: 'Unrestricted access to private royal estates & worldwide sanctuaries.',
    photographyOptions: 'Celebrity wedding photographers & award-winning feature film directors.',
    hospitalityManagement: 'White-glove 24/7 butler service, VIP security & private air transfers.',
    keyInclusions: [
      '360° Turnkey concept-to-cleanup white-glove orchestration',
      'A-list celebrity singer & international artist booking',
      'Custom couture bridal trousseau consultation & styling',
      'Heirloom silver & gold leaf embossed wedding invitation boxes',
      'Strict non-disclosure agreements (NDA) & private security detail',
      'Dedicated command center managing over 200 artisans and vendors'
    ]
  }
];
