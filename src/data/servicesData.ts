import { ServiceItem } from '../types';

export const VERIFIED_SERVICES: ServiceItem[] = [
  {
    id: 'mobile-foam-wash',
    name: 'Mobile Foam Wash & Hydrophobic Rinse',
    shortDesc: 'A safe, contactless pre-wash snow foam soak followed by two-bucket grit-guard washing right on your driveway.',
    fullDesc: 'Engineered specifically for Bahrain’s dusty and coastal climate. We begin with a high-lubricity pH-neutral citrus pre-wash foam that lifts sand and grit away from the clear coat before any mitt touches the paint. Finished with a demineralized hydrophobic rinse, wheel barrel cleanse, non-sling satin tire dressing, and streak-free exterior glass wipe.',
    estimatedDuration: '45 – 60 mins',
    features: [
      'High-density pH-neutral snow foam bath',
      'Two-bucket scratch-prevention grit guard system',
      'Non-acidic deep brake dust wheel & caliper clean',
      'Ultra-plush twisted loop microfiber drying process',
      'Satin tire dressing & hydrophobic glass wipe-down'
    ],
    recommendedFor: 'Routine weekly or bi-weekly maintenance for sedans, SUVs, and daily drivers.',
    tag: 'Maintenance Care',
    image: '/images/hero_detailing_foam_1793786285151.jpg',
    idealInterval: 'Every 1 to 2 weeks'
  },
  {
    id: 'deep-interior-sanitization',
    name: 'Deep Interior Sanitization & Leather Extraction',
    shortDesc: 'Medical-grade steam sanitization, high-suction extraction vacuuming, leather conditioning, and anti-bacterial cabin care.',
    fullDesc: 'Your car cabin deserves pristine hygiene. We utilize pressurized 140°C dry steam to neutralize bacteria, allergens, and embedded odors from carpets, fabric seats, and AC vents. Leather surfaces are gently cleaned with pH-balanced formulas and replenished with matte-finish UV conditioners to prevent drying and cracking under the Gulf sun.',
    estimatedDuration: '90 – 120 mins',
    features: [
      'High-pressure thermal dry steam seat & carpet deep clean',
      'High-suction extraction vacuuming including crevices & trunk',
      'Gentle leather conditioning with UV protective barrier',
      'Matte antibacterial dashboard, console & door card treatment',
      'AC ventilation duct sanitization & neutral odor elimination'
    ],
    recommendedFor: 'Cars carrying children or pets, post-summer rejuvenation, or vehicles with stubborn interior grime.',
    tag: 'Cabin Hygiene',
    image: '/images/interior_steam_leather_1793786287269.jpg',
    idealInterval: 'Every 2 to 3 months'
  },
  {
    id: 'machine-paint-polishing',
    name: 'Machine Paint Polishing & Gloss Restoration',
    shortDesc: 'Precision dual-action machine polishing to safely eliminate swirl marks, water etching, and oxidation for deep liquid gloss.',
    fullDesc: 'Years of improper washing and desert sand leave microscopic swirl marks that scatter light and dull your car’s paint. Our certified detailers use dual-action orbital polishers and precision micro-abrasive compounds to safely level minor imperfections in the clear coat, restoring depth, clarity, and mirror-like reflection before locking in a high-gloss synthetic polymer sealant.',
    estimatedDuration: '2.5 – 3.5 hours',
    features: [
      'Chemical decontamination & clay bar smooth paint prep',
      'Dual-action machine polishing to lift swirls & spider webs',
      'Restoration of optical depth on dark and metallic clear coats',
      'Application of high-gloss hydrophobic paint sealant',
      'Exterior chrome, exhaust tips & gloss trim brightening'
    ],
    recommendedFor: 'Vehicles with visible wash swirls, dull paint, or pre-event showroom preparation.',
    tag: 'Paint Correction',
    image: '/images/machine_polishing_gloss_1793786287600.jpg',
    idealInterval: 'Every 6 months'
  },
  {
    id: 'signature-full-detail',
    name: 'Signature Full Doorstep Detail (Interior + Exterior)',
    shortDesc: 'The ultimate home service package combining our exterior foam wash, machine polish, and complete deep cabin sanitization.',
    fullDesc: 'The complete GLOSSIFY transformation. Our mobile unit arrives with all necessary equipment, independent water tanks, and power to perform a top-tier overhaul of your vehicle inside and out. From engine bay dressing and wheel arches to steam extraction and single-stage machine polishing, this returns your vehicle as close to showroom condition as possible.',
    estimatedDuration: '3.5 – 4.5 hours',
    features: [
      'Full exterior snow foam, clay bar prep & two-bucket wash',
      'Complete single-stage dual-action machine gloss polish',
      'Full interior thermal steam extraction & leather conditioning',
      'Detailed engine bay safe wipe-down & dressing',
      'Hydrophobic glass protection and trim UV rejuvenation'
    ],
    recommendedFor: 'Vehicle owners demanding complete showroom renewal without leaving home or office.',
    tag: 'Complete Package',
    image: '/images/mobile_van_doorstep_1793786285560.jpg',
    idealInterval: 'Every 3 to 6 months'
  },
  {
    id: 'hydrophobic-paint-protection',
    name: 'Hydrophobic Sealant & Water Beading Treatment',
    shortDesc: 'Application of durable ceramic-infused hydrophobic sealants to repel sand, rain, bird droppings, and intense UV rays.',
    fullDesc: 'Protect your freshly polished car with a durable protective barrier. Creates high surface tension causing water, road grime, and sand to bead up and slide off effortlessly during subsequent washes, keeping the car cleaner for longer.',
    estimatedDuration: '60 – 75 mins',
    features: [
      'Alcohol-based panel wipe prep for direct bonding',
      'Ceramic polymer spray sealant with 6-month durability',
      'Extreme water beading and self-cleaning hydrophobic effect',
      'High resistance against bird lime and sun discoloration',
      'Enhanced slickness and silky hand-feel finish'
    ],
    recommendedFor: 'Vehicles parked outdoors or frequently driven across highways in Bahrain.',
    tag: 'Surface Defense',
    image: '/images/flawless_beading_finish_1793786289182.jpg',
    idealInterval: 'Every 4 to 6 months'
  }
];

export const SERVICE_LOCATIONS_BAHRAIN = [
  'Manama (Capital Governorate)',
  'Seef & Reef Island',
  'Amwaj Islands & Diyar Al Muharraq',
  'Saar & Janabiyah',
  'Riffa (East & West)',
  'Madinat Hamad & Jasra',
  'Muharraq & Busaiteen',
  'Budaiya & Northern Governorate',
  'Isa Town & Sanad',
  'Hamala & Zallaq'
];
