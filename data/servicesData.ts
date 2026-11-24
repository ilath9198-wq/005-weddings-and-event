export interface WeddingService {
  id: string;
  title: string;
  category: 'planning' | 'decor' | 'ceremony' | 'hospitality';
  tagline: string;
  description: string;
  highlights: string[];
  image: string;
  featured: boolean;
}

export const weddingServices: WeddingService[] = [
  {
    id: 'complete-wedding-planning',
    title: 'Complete Wedding Planning & Curation',
    category: 'planning',
    tagline: 'End-to-end orchestration from initial concept to grand send-off.',
    description: 'Our signature bespoke service covering every facet of your celebration. We manage budget architecture, venue sourcing, vendor negotiations, protocol timelines, and on-day execution with effortless precision.',
    highlights: [
      'Bespoke budget design & financial tracking',
      'Milestone timeline & wedding calendar management',
      'Complete vendor vetting & contractual curation',
      'Dedicated lead planner & bridal shadow coordinator',
      'Full 360° day-of orchestration & crisis management'
    ],
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85',
    featured: true
  },
  {
    id: 'destination-wedding-planning',
    title: 'Destination Weddings & Royal Escapes',
    category: 'planning',
    tagline: 'Exotic palaces, coastal retreats, and heritage sanctuaries worldwide.',
    description: 'Seamless management of destination festivities across Udaipur, Jaipur, Goa, Lake Como, and Bali. We handle international guest logistics, travel charters, local council permissions, and multi-day experiential itineraries.',
    highlights: [
      'Heritage palaces & international venue liaison',
      'Guest airport charters & royal hospitality welcome',
      'Multi-day thematic functions & cultural curations',
      'On-ground local artisan & culinary coordination',
      'Luggage concierge & guest welcome hampers'
    ],
    image: 'https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=1200&q=85',
    featured: true
  },
  {
    id: 'wedding-decor-styling',
    title: 'Wedding Décor & Floral Architecture',
    category: 'decor',
    tagline: 'Sculptural mandaps, cascading floristry, and candlelit ambiance.',
    description: 'Transforming architectural spaces into evocative poetry. From hand-crafted royal mandaps with thousands of fresh fragrant blooms to custom crystal chandeliers, illuminated walkways, and bespoke textiles.',
    highlights: [
      '3D Décor visualizations & spatial CAD layouts',
      'Imported & exotic fresh floral arrangements',
      'Custom stage, mandap & bar architectural styling',
      'Mood lighting, kinetic gobos & candle choreography',
      'Custom linens, luxury cutlery & printed stationery'
    ],
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=85',
    featured: true
  },
  {
    id: 'venue-selection-coordination',
    title: 'Venue Selection & Estate Coordination',
    category: 'planning',
    tagline: 'Securing majestic palaces, heritage forts, and luxury coastal lawns.',
    description: 'Unlocking exclusive private estates and historic properties often inaccessible to the public. We manage technical site surveys, acoustic permissions, capacity planning, and curfew extensions.',
    highlights: [
      'Access to exclusive private estates & royal forts',
      'Site capability surveys & structural load checks',
      'Contractual rate negotiation & complimentary upgrades',
      'Power, generator & climate control infrastructure',
      'Seamless multi-venue transition for separate rituals'
    ],
    image: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=1200&q=85',
    featured: true
  },
  {
    id: 'engagement-ceremonies',
    title: 'Engagement & Roka Celebrations',
    category: 'ceremony',
    tagline: 'Intimate, heartfelt ceremonies celebrating the union of two families.',
    description: 'Elegant ring ceremonies, traditional shagun rituals, and sunset cocktail dinners crafted with warmth, sophisticated floral accents, and personalized storytelling elements.',
    highlights: [
      'Ring ceremony stage & floral ring holder curation',
      'Custom photo backdrops & couple monogram branding',
      'Acoustic musical quartets & romantic lighting',
      'Personalized guest favors & heirloom gift boxes',
      'Champagne tower toasts & bespoke dessert bars'
    ],
    image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=85',
    featured: false
  },
  {
    id: 'mehendi-haldi-functions',
    title: 'Mehendi & Haldi Festive Soirees',
    category: 'ceremony',
    tagline: 'Sun-drenched marigolds, festive melodies, and joyous traditions.',
    description: 'Vibrant daytime celebrations steeped in joyous Indian rituals. From yellow marigold floral rain and brass urli flower baths to celebrity mehendi artists and lively dhol troupes.',
    highlights: [
      'Brass brass urli & floral petal shower arrangements',
      'Master henna artists & customized organic mehendi cones',
      'Traditional folk singers, dhol players & acoustic singers',
      'Thematic bangle bars, parandi stalls & floral jewellery',
      'Live chaat counters & refreshing festive mixology'
    ],
    image: 'https://images.unsplash.com/photo-1546804784-896d0dca3805?auto=format&fit=crop&w=1200&q=85',
    featured: true
  },
  {
    id: 'sangeet-cocktail-events',
    title: 'Sangeet & High-Energy Cocktail Galas',
    category: 'ceremony',
    tagline: 'Broadway-style stage production, concert acoustics, and glamour.',
    description: 'Spectacular musical extravaganzas featuring concert-grade LED trussing, professional family dance choreography, celebrity performers, and molecular craft cocktail bars.',
    highlights: [
      'Concert LED screen backdrops & beam lighting',
      'Professional dance choreographers & family rehearsals',
      'Celebrity DJs, live bands & celebrity artist booking',
      'Custom molecular cocktail bars with flair bartenders',
      'After-party lounge & midnight snack stations'
    ],
    image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1200&q=85',
    featured: true
  },
  {
    id: 'wedding-reception-planning',
    title: 'Grand Wedding Receptions',
    category: 'ceremony',
    tagline: 'Black-tie elegance, royal receiving lines, and opulent banquets.',
    description: 'A magnificent climax to your wedding festivities. Formal sit-down multi-course banquets, crystal table scapes, grand couple entry fireworks, and emotional toast protocols.',
    highlights: [
      'Grand couple entry choreography & cold-pyro fountains',
      'Formal multi-tiered receiving stage design',
      'Plated royal dining service & international buffet lines',
      'Grand architectural wedding cake cutting ceremony',
      'Symphonic orchestra & live jazz background music'
    ],
    image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1200&q=85',
    featured: false
  },
  {
    id: 'guest-hospitality-management',
    title: 'Royal Guest Hospitality & Concierge',
    category: 'hospitality',
    tagline: 'White-glove welcome, seamless RSVP tracking, and luxury transit.',
    description: 'Ensuring your guests feel like royalty from arrival to departure. Dedicated hospitality desks at hotels, personalized digital itinerary apps, round-the-clock chauffeur services, and bespoke welcome gifts.',
    highlights: [
      'Custom branded digital RSVP & travel booking portal',
      'Airport & railway station VIP reception lounges',
      'Luxury fleet chauffeured transit for all ceremonies',
      'In-room handcrafted welcome hampers & traditional sweets',
      '24/7 Dedicated hospitality helpdesk in all hotels'
    ],
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=85',
    featured: false
  },
  {
    id: 'catering-gastronomy-coordination',
    title: 'Bespoke Gastronomy & Catering Coordination',
    category: 'hospitality',
    tagline: 'Artisanal culinary curations, royal thalis, and global cuisines.',
    description: 'Partnering with celebrated master chefs to design unforgettable dining memories. Traditional regional delicacies, fusion live counters, dietary customization, and sommelier-curated wine pairings.',
    highlights: [
      'Master chef curation across regional Indian & global cuisines',
      'Interactive live culinary stations & artisanal dessert bars',
      'Strict food quality audits, tasting sessions & hygiene checks',
      'Bespoke royal silverware, kansa thali, and crystal glassware',
      'Sommelier wine pairings & custom signature couple cocktails'
    ],
    image: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1200&q=85',
    featured: false
  },
  {
    id: 'entertainment-artist-coordination',
    title: 'Entertainment & Celebrity Artist Management',
    category: 'planning',
    tagline: 'Sufi singers, Bollywood stars, symphony strings, and live acts.',
    description: 'Curating world-class entertainment that elevates every emotion. From soulful classical sitarists during morning pheras to headlining Bollywood vocalists and international illusionists.',
    highlights: [
      'A-list Bollywood playback singers & live concert bands',
      'Soulful Sufi troupes, Qawwals & traditional Manganiyar artists',
      'International aerialists, fire dancers & illusionists',
      'Top-tier celebrity anchors & master emcees',
      'Complete rider management, green room & technical acoustic rider'
    ],
    image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=85',
    featured: false
  },
  {
    id: 'corporate-private-celebrations',
    title: 'Milestone Anniversaries & Private Galas',
    category: 'ceremony',
    tagline: 'Silver anniversaries, royal birthdays, and prestigious private galas.',
    description: 'Extending our signature luxury aesthetic beyond weddings to milestone life celebrations. Discretion, sophistication, and flawless execution for private family celebrations.',
    highlights: [
      'Silver, golden & ruby anniversary jubilee productions',
      'Milestone luxury birthday galas & themed soirees',
      'Intimate private dinners in heritage venues',
      'Custom memory installations & retrospective video reels',
      'Complete confidentiality & privacy protocol'
    ],
    image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=85',
    featured: false
  }
];
