export interface PlanningStep {
  step: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  timeline: string;
}

export const planningSteps: PlanningStep[] = [
  {
    step: 'Phase 01',
    number: '01',
    title: 'Initial Consultation & Chemistry Call',
    subtitle: 'Connecting hearts and understanding your dream aesthetic.',
    description: 'We meet over champagne or virtual coffee to listen to your love story, cultural traditions, preferred destinations, and family aspirations.',
    deliverables: ['Initial wedding vision moodboard', 'Preliminary budget scoping', 'Consultation questionnaire'],
    timeline: '12 – 10 Months Prior'
  },
  {
    step: 'Phase 02',
    number: '02',
    title: 'Understanding the Couple’s Vision',
    subtitle: 'Translating personalities into an authentic celebration identity.',
    description: 'We deep dive into personal nuances—how you met, shared travels, family heritage—to create a bespoke wedding narrative that feels distinctly yours.',
    deliverables: ['Creative narrative document', 'Event theme inspirations', 'Color palette definitions'],
    timeline: '10 – 9 Months Prior'
  },
  {
    step: 'Phase 03',
    number: '03',
    title: 'Budget Architecture & Milestone Planning',
    subtitle: 'Clear, transparent allocation across every celebration facet.',
    description: 'We build a granular, category-wise financial blueprint ensuring zero surprise costs while maximizing value on high-impact visual and guest elements.',
    deliverables: ['Granular budget spreadsheet', 'Milestone payment schedules', 'Cost-optimization strategies'],
    timeline: '9 – 8 Months Prior'
  },
  {
    step: 'Phase 04',
    number: '04',
    title: 'Venue Discovery & Contract Negotiations',
    subtitle: 'Securing majestic palaces, heritage forts, or coastal lawns.',
    description: 'We present vetted venue options, arrange guided experiential site visits, and negotiate contractual terms including room blocks, complimentary upgrades, and curfew extensions.',
    deliverables: ['Site visit itinerary', 'Comparative venue matrices', 'Executed master venue contract'],
    timeline: '8 – 7 Months Prior'
  },
  {
    step: 'Phase 05',
    number: '05',
    title: 'Theme, Mandap & Décor Architecture',
    subtitle: 'Sculptural mandaps, cascading florals, and luminous lighting.',
    description: 'Our creative directors draft photorealistic 3D renders of your mandap, entrance walkways, stage backdrops, floral palettes, and bespoke table settings.',
    deliverables: ['3D Décor visualizations', 'Material & floral sample boards', 'Lighting design schematics'],
    timeline: '6 – 4 Months Prior'
  },
  {
    step: 'Phase 06',
    number: '06',
    title: 'Vendor Curation & Artisan Negotiations',
    subtitle: 'Assembling master photographers, chefs, makeup artists, and DJs.',
    description: 'We introduce the finest industry talents aligned with your vision, managing all contractual riders, menu tastings, makeup trials, and sound logistics.',
    deliverables: ['Vetted vendor contracts', 'Catering tasting sessions', 'Technical audio/visual rider approvals'],
    timeline: '4 – 3 Months Prior'
  },
  {
    step: 'Phase 07',
    number: '07',
    title: 'Royal Guest Hospitality & Logistics',
    subtitle: 'White-glove reception, RSVP management, and transit coordination.',
    description: 'From airport chauffeur fleet allocations and personalized digital RSVP portals to in-room welcome hampers and customized room keycard branding.',
    deliverables: ['Digital RSVP tracking system', 'Flight & transit arrival schedules', 'Bespoke welcome hamper curation'],
    timeline: '2 Months – 3 Weeks Prior'
  },
  {
    step: 'Phase 08',
    number: '08',
    title: '360° Event Execution & Rehearsals',
    subtitle: 'Minute-by-minute protocol timelines for a seamless celebration.',
    description: 'Our lead planners and shadow coordinators run on-site dry runs with family members, priests, artists, and technical crews to guarantee effortless flow.',
    deliverables: ['Master minute-by-minute timeline', 'Ceremony cue sheets', 'Radio-frequency team assignments'],
    timeline: 'Wedding Week'
  },
  {
    step: 'Phase 09',
    number: '09',
    title: 'Final Coordination, Celebration & Memories',
    subtitle: 'You immerse in the joy while our team manages the world behind the scenes.',
    description: 'From the first baraat beat to the sacred pheras and midnight reception toast, we ensure every second is pure magic, followed by final billing reconciliation and film delivery.',
    deliverables: ['Flawless on-day wedding execution', 'Post-wedding vendor reconciliations', 'Cinematic photo & film delivery'],
    timeline: 'Celebration Days & Beyond'
  }
];

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  experience: string;
  specialty: string;
  image: string;
  quote: string;
}

export const weddingTeam: TeamMember[] = [
  {
    id: 'team-1',
    name: 'Ananya Singhania',
    role: 'Founder & Principal Wedding Architect',
    experience: '15+ Years in Luxury Weddings',
    specialty: 'Royal Palaces & Multi-Day Heritage Extravaganzas',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    quote: '“A great wedding is not merely a visual feast; it is an emotional sanctuary where every family member feels honored.”'
  },
  {
    id: 'team-2',
    name: 'Devraj Rathore',
    role: 'Creative Director of Floral & Spatial Décor',
    experience: '12+ Years in Spatial Design',
    specialty: 'Bespoke Mandap Architecture & Contemporary Lighting',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
    quote: '“We sculpt space with flowers, fabric, and candlelight so guests step into an intimate dreamworld.”'
  },
  {
    id: 'team-3',
    name: 'Meera Chawla',
    role: 'Head of Royal Guest Hospitality & Concierge',
    experience: '10+ Years in Luxury Hospitality',
    specialty: 'VIP Charters, Bespoke Itineraries & Family Protocol',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    quote: '“True hospitality is invisible perfection. When guests feel entirely cared for, the celebration radiates genuine joy.”'
  },
  {
    id: 'team-4',
    name: 'Kabir Varma',
    role: 'Director of Cinematic Films & Visual Arts',
    experience: '11+ Years in Wedding Cinema',
    specialty: 'Fine-Art Candid Photography & 4K Drone Storytelling',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    quote: '“We capture the stolen glances, the father’s quiet tear, and the uninhibited laughter that echoes for generations.”'
  }
];
