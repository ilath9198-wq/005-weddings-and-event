export interface WeddingVenue {
  id: string;
  name: string;
  category: 'palace' | 'heritage' | 'beach' | 'resort' | 'garden';
  categoryLabel: string;
  location: string;
  capacity: string;
  guestRooms: string;
  architectureStyle: string;
  description: string;
  features: string[];
  image: string;
  isPopular?: boolean;
}

export const weddingVenues: WeddingVenue[] = [
  {
    id: 'taj-lake-palace-udaipur',
    name: 'The Royal Floating Palace',
    category: 'palace',
    categoryLabel: 'Palace Weddings',
    location: 'Lake Pichola, Udaipur, Rajasthan',
    capacity: '150 – 400 Guests',
    guestRooms: '83 Luxury Heritage Suites',
    architectureStyle: '18th-Century White Marble Mewar Architecture',
    description: 'A sublime fairytale castle seemingly floating on the azure waters of Lake Pichola. Accessible only by private royal boats, offering pure romance, lily ponds, and marble courtyards.',
    features: [
      'Private jetty & vintage boat royal guest transfers',
      'Intimate Mewari courtyards with candlelit fountains',
      'Panoramic 360° views of the City Palace & Aravalli hills',
      'World-renowned royal culinary catering'
    ],
    image: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=1200&q=85',
    isPopular: true
  },
  {
    id: 'rambagh-palace-jaipur',
    name: 'The Grand Rajputana Sanctuary',
    category: 'heritage',
    categoryLabel: 'Heritage Properties',
    location: 'Bhawani Singh Road, Jaipur, Rajasthan',
    capacity: '300 – 1,200 Guests',
    guestRooms: '78 Restored Royal Chambers',
    architectureStyle: 'Mughal & Rajput Regal Architecture',
    description: 'The former residence of the Maharaja of Jaipur. Sprawling over 47 manicured acres with ornamental Mughal gardens, regal verandas, and peacocks strolling across sweeping lawns.',
    features: [
      'Sweeping emerald lawns accommodating up to 1,200 guests',
      'Traditional elephant, camel & royal cavalry procession path',
      'Opulent Suvarna Mahal banquet hall with crystal chandeliers',
      'Dedicated heritage fireworks launch zone'
    ],
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=85',
    isPopular: true
  },
  {
    id: 'alila-diwa-goa',
    name: 'Coastal Palms Oceanfront Retreat',
    category: 'beach',
    categoryLabel: 'Beach & Coastal Weddings',
    location: 'Majorda Beach, South Goa',
    capacity: '200 – 600 Guests',
    guestRooms: '153 Tropical Suites & Villas',
    architectureStyle: 'Contemporary Balinese Meets Goan Elegance',
    description: 'Framed by emerald paddy fields and pristine white sand beaches. Ideal for golden-hour sunset pheras, barefoot beach cocktail parties, and twilight fireworks over the Arabian Sea.',
    features: [
      'Direct sunset beach access for oceanside mandap',
      'Infinity pool deck for high-energy cocktail galas',
      'Open-air banyan tree courtyard for mehendi rituals',
      'Curfew-friendly indoor ballroom for midnight after-parties'
    ],
    image: 'https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=1200&q=85',
    isPopular: true
  },
  {
    id: 'leela-palace-bengaluru',
    name: 'The Royal Garden Estate & Ballroom',
    category: 'resort',
    categoryLabel: 'Luxury Hotels & Resorts',
    location: 'Old Airport Road, Bengaluru, Karnataka',
    capacity: '250 – 800 Guests',
    guestRooms: '357 Grand Palace Rooms',
    architectureStyle: 'Art Deco Vijayanagara Imperial Splendor',
    description: 'Nestled amidst nine acres of lush cascading waterfalls and botanical gardens. Boasts hand-woven Turkish carpets, arched corridors, and grand pillarless ballrooms.',
    features: [
      'Pillarless grand ballroom with ornate gold leaf ceilings',
      'Lush tropical outdoor lawn for open-air dinner banquets',
      'Dedicated private bridal staging suites with salon lighting',
      'Central metropolitan location with valet for 500+ cars'
    ],
    image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 'glasshouse-botanical-estate',
    name: 'The Glasshouse Conservatory Gardens',
    category: 'garden',
    categoryLabel: 'Garden & Outdoor Venues',
    location: 'Kandaghat Hills, Shimla Highway',
    capacity: '100 – 350 Guests',
    guestRooms: '42 Pine Forest Chalets',
    architectureStyle: 'Victorian Glasshouse & Himalayan Flora',
    description: 'A striking greenhouse structure set against mist-covered pine forests. Cathedral-height glass ceilings flooded with natural daylight by day and starlight by night.',
    features: [
      'Climate-controlled glasshouse shielding against weather',
      '360° Panoramic Himalayan mountain ridge views',
      'Terraced rose gardens for sunset cocktail soirees',
      'Understated organic botanical ambiance'
    ],
    image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 'lake-como-destination-villa',
    name: 'Villa Bellissima on Lake Como',
    category: 'palace',
    categoryLabel: 'Destination Venues',
    location: 'Tremezzina, Lake Como, Italy',
    capacity: '80 – 220 Guests',
    guestRooms: 'Private Historic 18-Room Villa',
    architectureStyle: 'Italian Renaissance Baroque & Cypress Terraces',
    description: 'The pinnacle of international destination weddings. Ancient stone balustrades overlooking Lake Como, private boat docks, and candlelit dinners under century-old wisteria pergolas.',
    features: [
      'Exclusive full-property buyout guarantee for 3 days',
      'Private Riva speedboat arrival for the bridal couple',
      'Terraced lakeside gardens for intimate pheras',
      'World-class Italian & bespoke Indian culinary integration'
    ],
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 'heritage-haveli-delhi',
    name: 'The Historic Haveli Courtyard',
    category: 'heritage',
    categoryLabel: 'Intimate Spaces',
    location: 'Mehrauli Heritage Belt, New Delhi',
    capacity: '50 – 180 Guests',
    guestRooms: 'Boutique 12-Suite Heritage Estate',
    architectureStyle: 'Mughal Brick Archways & Jali Screens',
    description: 'An intimate, soulfully restored 200-year-old courtyard facing the Qutub Minar. Intricate sandstone carving, brass oil lamp chandeliers, and fragrant night-blooming jasmine.',
    features: [
      'Centuries-old stone archways & secluded courtyards',
      'Acoustic warmth ideal for intimate Sufi baithaks',
      'Customizable heritage lighting & flower petal walkways',
      'Exquisite artisanal Awadhi & Dum Pukht gastronomy'
    ],
    image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1200&q=85'
  }
];
