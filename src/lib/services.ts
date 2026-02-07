export interface Service {
  id: string;
  name: string;
  price: string;
  duration: string;
  description: string;
  benefits: string[];
  category: string;
  popular?: boolean;
  badge?: string;
}

export const services: Service[] = [
  // FACIAL SCULPTING & MASSAGE
  {
    id: "tmj-sculpt",
    name: "TMJ Sculpt",
    price: "$180",
    duration: "90 min",
    description:
      "An advanced facial sculpting session targeting the temporomandibular joint. Relieves jaw tension while contouring and lifting facial muscles for a visibly sculpted, relaxed appearance.",
    benefits: ["Jaw tension relief", "Facial contouring", "Headache reduction", "Lifted appearance"],
    category: "Facial Sculpting",
    popular: true,
    badge: "Signature",
  },
  {
    id: "facial-buccal",
    name: "Facial + Buccal Massage",
    price: "$130",
    duration: "60 min",
    description:
      "Combines traditional facial techniques with intraoral buccal massage to sculpt cheekbones, define the jawline, and reduce puffiness from within.",
    benefits: ["Cheekbone definition", "Jawline sculpting", "Reduced puffiness", "Natural lift"],
    category: "Facial Sculpting",
    popular: true,
    badge: "Most Popular",
  },
  {
    id: "facial-mask-hands",
    name: "Facial Massage + Mask + Hands",
    price: "$110",
    duration: "60 min",
    description:
      "A complete relaxation experience combining facial massage with a nourishing mask treatment and hand care for total rejuvenation.",
    benefits: ["Deep relaxation", "Skin nourishment", "Hand rejuvenation", "Glowing skin"],
    category: "Facial Sculpting",
  },
  {
    id: "facial-rejuvenation",
    name: "Facial + Rejuvenation Care",
    price: "$155",
    duration: "90 min",
    description:
      "An intensive facial treatment combining sculpting techniques with targeted rejuvenation protocols. Addresses fine lines, loss of firmness, and dull complexion.",
    benefits: ["Anti-aging effects", "Firmer skin", "Radiant glow", "Fine line reduction"],
    category: "Facial Sculpting",
  },
  {
    id: "facial-buccal-skincare",
    name: "Facial + Buccal + Skincare",
    price: "$200",
    duration: "120 min",
    description:
      "The ultimate facial experience. Combines buccal massage, advanced sculpting, and a complete skincare protocol for transformative results.",
    benefits: ["Complete transformation", "Deep sculpting", "Skin renewal", "Maximum results"],
    category: "Facial Sculpting",
    badge: "Premium",
  },

  // FACIAL MASSAGE & HEAD MASSAGE
  {
    id: "facial-massage",
    name: "Facial Massage",
    price: "$100",
    duration: "60 min",
    description:
      "A deeply relaxing facial massage that stimulates circulation, relieves tension, and promotes a radiant, youthful glow. Expert hands work along facial muscles and pressure points to tone, lift, and rejuvenate.",
    benefits: ["Improved circulation", "Tension relief", "Natural glow", "Muscle toning"],
    category: "Facial Sculpting",
  },
  {
    id: "head-massage",
    name: "Head Massage",
    price: "$80",
    duration: "45 min",
    description:
      "A therapeutic head massage targeting the scalp, temples, and neck to relieve stress, reduce headaches, and promote deep relaxation. Perfect as a standalone treatment or an addition to any facial service.",
    benefits: ["Stress relief", "Headache reduction", "Deep relaxation", "Scalp stimulation"],
    category: "Facial Sculpting",
  },

  // BODY SCULPTING & CONTOURING
  {
    id: "cavitation-rf",
    name: "Cavitation + RF Lifting + Vacuum",
    price: "$160",
    duration: "120 min",
    description:
      "A powerful body contouring treatment combining ultrasonic cavitation, radiofrequency skin tightening, vacuum therapy, and vibration massage.",
    benefits: ["Fat reduction", "Skin tightening", "Improved circulation", "Body contouring"],
    category: "Body Contouring",
    popular: true,
  },
  {
    id: "anti-cellulite-3zone",
    name: "3-Zone Anti-Cellulite Vacuum",
    price: "$130",
    duration: "90 min",
    description:
      "Targets three body zones with specialized vacuum therapy to smooth skin texture, reduce cellulite, and improve overall body contour.",
    benefits: ["Cellulite reduction", "Skin smoothing", "Improved texture", "3 zones treated"],
    category: "Body Contouring",
  },
  {
    id: "vacuum-vibration-2zone",
    name: "2-Zone Vacuum + Vibration",
    price: "$130",
    duration: "90 min",
    description:
      "Combines vacuum lymphatic drainage with targeted vibration massage across two body zones for effective contouring and detoxification.",
    benefits: ["Lymphatic drainage", "Body shaping", "Detoxification", "2 zones treated"],
    category: "Body Contouring",
  },
  {
    id: "cavitation-1zone",
    name: "1-Zone Cavitation + RF Lifting",
    price: "$90",
    duration: "60 min",
    description:
      "Focused body sculpting targeting one area with ultrasonic cavitation and radiofrequency for skin tightening and fat reduction.",
    benefits: ["Targeted sculpting", "Skin tightening", "Fat reduction", "Quick results"],
    category: "Body Contouring",
  },
  {
    id: "anti-cellulite-legs",
    name: "Anti-Cellulite Legs Treatment",
    price: "$90",
    duration: "60 min",
    description:
      "Specialized treatment focused on the legs to smooth cellulite, improve circulation, and reveal toned, smoother-looking skin.",
    benefits: ["Smooth legs", "Cellulite reduction", "Better circulation", "Toned appearance"],
    category: "Body Contouring",
  },
  {
    id: "pressotherapy",
    name: "Pressotherapy",
    price: "$100",
    duration: "45 min",
    description:
      "A relaxing lymphatic drainage treatment using air-pressure technology to detoxify, reduce water retention, and improve circulation throughout the body.",
    benefits: ["Full body detox", "Reduced bloating", "Better circulation", "Total relaxation"],
    category: "Body Contouring",
  },

  // FULL BODY TREATMENTS
  {
    id: "full-body-stones-60",
    name: "Full Body + Hot Stones (60 min)",
    price: "$110",
    duration: "60 min",
    description:
      "A deeply soothing full body treatment enhanced with heated stones to melt away tension, improve circulation, and promote total relaxation.",
    benefits: ["Deep relaxation", "Tension relief", "Improved circulation", "Stress reduction"],
    category: "Body Treatments",
  },
  {
    id: "full-body-stones-90",
    name: "Full Body + Hot Stones (90 min)",
    price: "$160",
    duration: "90 min",
    description:
      "An extended full body treatment with hot stones for the deepest relaxation and most thorough tension release. Ideal for those who want the complete experience.",
    benefits: ["Extended relaxation", "Full tension release", "Muscle recovery", "Total wellness"],
    category: "Body Treatments",
  },
  {
    id: "full-body-stones-120",
    name: "Full Body + Hot Stones (120 min)",
    price: "$200",
    duration: "120 min",
    description:
      "Our most luxurious full body treatment — two full hours of restorative hot stone therapy for the ultimate mind and body renewal.",
    benefits: ["Ultimate relaxation", "Complete renewal", "Deep healing", "Luxury experience"],
    category: "Body Treatments",
    badge: "Luxury",
  },
  {
    id: "back-neck-30",
    name: "Back & Neck Treatment",
    price: "From $60",
    duration: "30-60 min",
    description:
      "Targeted treatment for the back and neck area to relieve common tension points, improve posture-related discomfort, and restore ease of movement.",
    benefits: ["Targeted relief", "Posture improvement", "Neck tension release", "Quick recovery"],
    category: "Body Treatments",
  },

  // LUXURY PACKAGES
  {
    id: "4in1-complex",
    name: "4-in-1 Complex",
    price: "$260",
    duration: "150 min",
    description:
      "A comprehensive treatment combining facial massage, body treatment, buccal massage, and rejuvenation care. Enjoy $20 off when you book this complete package.",
    benefits: ["Face + Body", "Buccal massage", "Rejuvenation", "$20 savings"],
    category: "Luxury Packages",
    popular: true,
    badge: "Best Value",
  },
  {
    id: "5in1-ritual",
    name: "5-in-1 Luxury Ritual",
    price: "$290",
    duration: "150 min",
    description:
      "Our most comprehensive treatment — a five-step luxury ritual covering every aspect of facial and body wellness for the ultimate transformation.",
    benefits: ["Complete wellness", "5 treatments in 1", "Total transformation", "Peak luxury"],
    category: "Luxury Packages",
    badge: "Ultimate",
  },
  {
    id: "tmj-fullbody-combo",
    name: "TMJ + Full Body Combo",
    price: "$295",
    duration: "150 min",
    description:
      "Combines our signature TMJ facial sculpt with a full body hot stone treatment for the ultimate head-to-toe experience.",
    benefits: ["Head to toe", "Jaw relief", "Full body relaxation", "Complete experience"],
    category: "Luxury Packages",
  },
];

export const addOns = [
  { name: "Vibration Massage", price: "$10", duration: "10 min" },
  { name: "Vacuum Lymphatic Drainage", price: "$10", duration: "10 min" },
  { name: "Arms Treatment", price: "$20", duration: "10 min" },
  { name: "Body Wrap", price: "$10", duration: "10 min" },
];

export const categories = [
  "All",
  "Facial Sculpting",
  "Body Contouring",
  "Body Treatments",
  "Luxury Packages",
];

export const testimonials = [
  {
    name: "Jessica M.",
    treatment: "TMJ Sculpt",
    text: "I cannot believe the difference after just one session. My jawline looks more defined and my jaw pain is completely gone. Roza's hands are truly magical!",
    rating: 5,
  },
  {
    name: "Sophia L.",
    treatment: "Facial + Buccal Massage",
    text: "I've been getting facials for years, but nothing compares to the buccal massage. The sculpting effect is visible immediately. My cheekbones have never looked this good!",
    rating: 5,
  },
  {
    name: "Amanda K.",
    treatment: "5-in-1 Luxury Ritual",
    text: "This was the most luxurious experience I've ever had. Every minute felt like a dream. I walked out looking 10 years younger and feeling completely renewed.",
    rating: 5,
  },
  {
    name: "Rachel T.",
    treatment: "Cavitation + RF Lifting",
    text: "The body contouring results are incredible. After just a few sessions, I can see a real difference in my body shape. Roza is so professional and knowledgeable.",
    rating: 5,
  },
  {
    name: "Michelle P.",
    treatment: "Pressotherapy",
    text: "I was so bloated before my appointment and walked out feeling light as air. The pressotherapy is addictive! I now come every month for maintenance.",
    rating: 5,
  },
  {
    name: "Daniela V.",
    treatment: "4-in-1 Complex",
    text: "The 4-in-1 package is the best value in Charlotte. You get everything — face, body, buccal, rejuvenation. I literally felt like a new person after.",
    rating: 5,
  },
];

export const faqs = [
  {
    question: "What should I expect during my first visit?",
    answer:
      "Your first visit begins with a brief consultation where Roza assesses your skin and discusses your goals. She'll recommend the best treatment plan for you. Our services are available for clients aged 18 and older. Please arrive 5 minutes early and avoid eating one hour before your appointment for optimal results.",
  },
  {
    question: "What is buccal facial massage?",
    answer:
      "Buccal massage is a specialized intraoral technique where gentle pressure is applied from inside the mouth to sculpt and tone the facial muscles. It's incredibly effective for defining cheekbones, lifting the jawline, and reducing puffiness — all naturally, without any invasive procedures.",
  },
  {
    question: "How often should I get facial sculpting treatments?",
    answer:
      "For optimal results, we recommend starting with weekly sessions for the first 4-6 weeks, then transitioning to maintenance treatments every 2-4 weeks. Roza will create a personalized schedule based on your specific goals and skin response.",
  },
  {
    question: "Is there any downtime after treatments?",
    answer:
      "Most facial treatments have zero downtime — you'll look refreshed and glowing immediately! For body contouring treatments, you may experience mild redness or warmth that subsides within a few hours. You can return to normal activities right away.",
  },
  {
    question: "Do you offer package deals?",
    answer:
      "Yes! Our 4-in-1 Complex ($260) and 5-in-1 Luxury Ritual ($290) offer comprehensive treatments at excellent value. We also have Buy Now, Pay Later options available for bookings between $50 and $4,000.",
  },
  {
    question: "What age group are your treatments suitable for?",
    answer:
      "Our treatments are designed for clients aged 18 and older. Whether you're looking to prevent early signs of aging or restore youthful radiance, Roza will customize each session to your skin's unique needs and goals.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "We ask for at least 24 hours notice for cancellations or rescheduling. This allows us to offer the time slot to other clients. Late cancellations or no-shows may be subject to a cancellation fee.",
  },
];
