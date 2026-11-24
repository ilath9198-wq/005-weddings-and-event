export interface PortfolioProject {
  id: string;
  title: string;
  category: 'royal' | 'destination' | 'decor' | 'intimate' | 'rituals';
  categoryLabel: string;
  couple: string;
  venue: string;
  location: string;
  guestCount: string;
  image: string;
  description: string;
  storyQuote: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'port-1',
    title: 'The Royal Lake Palace Nuptials',
    category: 'royal',
    categoryLabel: 'Royal Palace Wedding',
    couple: 'Rohan & Gayatri',
    venue: 'Jagmandir Island & City Palace Courtyard',
    location: 'Udaipur, Rajasthan',
    guestCount: '380 Guests • 3 Days',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=85',
    description: 'A 3-day royal celebration on the serene waters of Lake Pichola. Featuring a grand floating mandap adorned with 50,000 tuberose stems, vintage boat arrivals, and royal fireworks.',
    storyQuote: '“THE GRAND AFFAIR made us feel like royalty in our own fairytale. Every single petal and melody was perfection.”'
  },
  {
    id: 'port-2',
    title: 'The Glasshouse Botanical Romance',
    category: 'decor',
    categoryLabel: 'Garden Romance',
    couple: 'Armaan & Sarah',
    venue: 'The Conservatory Botanical Estate',
    location: 'Kandaghat Hills',
    guestCount: '180 Guests • 2 Days',
    image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=85',
    description: 'Understated organic opulence nestled amidst mountain pine forests. Soft sage linens, trailing eucalyptus arches, and candlelit glass pavilions beneath the stars.',
    storyQuote: '“Elegance without pretense. Our guests are still raving about the enchanting glasshouse dinner!”'
  },
  {
    id: 'port-3',
    title: 'Sunset Sands & Coastal Vows',
    category: 'destination',
    categoryLabel: 'Destination Celebration',
    couple: 'Kabir & Tanya',
    venue: 'Majorda Oceanfront Beach Lawn',
    location: 'South Goa',
    guestCount: '250 Guests • 3 Days',
    image: 'https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=1200&q=85',
    description: 'Golden-hour pheras right on the Arabian Sea coastline. Barefoot luxury, tropical floral installations, sea-salt cocktail mixology, and late-night beachside bonfires.',
    storyQuote: '“From seamless airport charters to the magical sunset mandap, everything flowed effortlessly.”'
  },
  {
    id: 'port-4',
    title: 'The Vedic Heritage Mandap Ceremony',
    category: 'royal',
    categoryLabel: 'Traditional Indian Wedding',
    couple: 'Dev & Meera',
    venue: 'Rambagh Royal Pavilions',
    location: 'Jaipur, Rajasthan',
    guestCount: '550 Guests • 4 Days',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85',
    description: 'Deeply spiritual Vedic rituals harmonized with Rajput imperial architecture. Hand-carved sandstone mandap pillars enveloped in crimson roses and chanting temple bells.',
    storyQuote: '“A deeply sacred ceremony orchestrated with the utmost dignity, warmth, and breathtaking grandeur.”'
  },
  {
    id: 'port-5',
    title: 'Courtyard Haveli Intimate Union',
    category: 'intimate',
    categoryLabel: 'Intimate Wedding',
    couple: 'Aditya & Naina',
    venue: 'Historic Sandstone Haveli Courtyard',
    location: 'New Delhi',
    guestCount: '90 Guests • 1 Day',
    image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1200&q=85',
    description: 'A deeply personal gathering of close family and lifelong friends. Brass urlis brimming with mogra flowers, soulful acoustic sitar music, and bespoke Awadhi culinary thalis.',
    storyQuote: '“An intimate sanctuary where every conversation felt cherished. The detailing was exquisitely subtle.”'
  },
  {
    id: 'port-6',
    title: 'The Crystal Chandelier Reception Gala',
    category: 'decor',
    categoryLabel: 'Luxury Reception',
    couple: 'Siddharth & Rhea',
    venue: 'The Grand Imperial Pillarless Ballroom',
    location: 'Mumbai',
    guestCount: '700 Guests • 1 Evening',
    image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=85',
    description: 'Black-tie glamour featuring over two hundred custom crystal chandeliers, mirror dance floors, symphonic strings, and a towering seven-tier artisanal floral cake.',
    storyQuote: '“The grandest night of our lives! The visual production looked straight out of a royal cinematic film.”'
  },
  {
    id: 'port-7',
    title: 'Marigold Sunshine & Festive Beats',
    category: 'rituals',
    categoryLabel: 'Haldi & Mehendi Celebration',
    couple: 'Varun & Ananya',
    venue: 'Heritage Orchard Courtyard',
    location: 'Chandigarh',
    guestCount: '220 Guests • 2 Days',
    image: 'https://images.unsplash.com/photo-1546804784-896d0dca3805?auto=format&fit=crop&w=1200&q=85',
    description: 'A joyful explosion of sunshine yellow and auspicious turmeric. Flower petal showers, vibrant Punjabi folk dance troupes, live regional chaat stalls, and organic henna.',
    storyQuote: '“Laughter, music, and flowers everywhere! The energy was infectious from sunrise to twilight.”'
  },
  {
    id: 'port-8',
    title: 'The Modern Bohemian Romance',
    category: 'decor',
    categoryLabel: 'Contemporary Wedding Décor',
    couple: 'Neil & Natasha',
    venue: 'The Vineyard Estate & Terraces',
    location: 'Nashik Valley',
    guestCount: '160 Guests • 2 Days',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=85',
    description: 'A blend of contemporary minimalism and rustic vineyard warmth. Pampas grass arches, terracotta urns, macrame accents, and sommelier-guided reserve wine pairings.',
    storyQuote: '“Fresh, modern, and deeply romantic. They translated our eclectic vision into sheer perfection.”'
  }
];
