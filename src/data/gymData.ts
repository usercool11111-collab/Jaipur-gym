import { Testimonial, Program, PricingPlan, DoctorFAQ } from '../types';

export const GYM_CONTACT = {
  name: "Jaipur Gym",
  brandLine: "Pratap Nagar's Premier Gym & Fitness Family",
  phone: "098296 24875",
  phoneRaw: "09829624875",
  phoneFormatted: "+91 98296 24875",
  address: "83/143, Main, Haldighati Rd, Pratap Nagar, Jaipur, Rajasthan 302033",
  shortAddress: "Haldighati Rd, Pratap Nagar, Jaipur",
  mapsUrl: "https://maps.google.com/?q=Jaipur+Gym+Pratap+Nagar+Haldighati+Rd+302033",
  googleEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.428484192083!2d75.8105!3d26.8021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc98270000001%3A0x1111111111111111!2sHaldighati%20Rd%2C%20Pratap%20Nagar%2C%20Jaipur%2C%20Rajasthan%20302033!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  rating: 4.8,
  reviewCount: 52,
  hours: "Open Daily · Until 9:00 PM",
  morningShift: "5:30 AM – 10:30 AM",
  eveningShift: "4:30 PM – 9:30 PM",
};

export const COACH_INFO = {
  name: "Coach Manish",
  title: "Head Trainer & Founder",
  experience: "10+ Years Building Champions & Transforming Lives",
  bonusCredential: "Medical Doctor (MD) — Added bonus for anatomical precision & safe lifting",
  quote: "My goal isn't just to sell memberships. It's to build a powerhouse family where every single person gets stronger, feels confident, and stays injury-free.",
  storyTitle: "A Trainer Who Truly Treats You Like Family",
  storyParagraphs: [
    "Jaipur Gym was founded by Coach Manish with a single vision: to give Pratap Nagar a world-class, high-energy gym where anyone — from absolute beginners to experienced lifters — feels empowered from day one.",
    "Unlike commercial chains where trainers ignore you unless you pay extra, Coach Manish is on the gym floor every single day. He personally corrects form, pushes you through hard sets, and creates custom workout strategies for every member at no extra cost.",
    "As an added bonus, Coach Manish also holds a medical degree. That means every routine, squat cue, and bench angle is backed by real anatomical science — keeping your joints safe and your gains continuous."
  ],
  pillars: [
    {
      title: "Hands-On Daily Coaching",
      desc: "Free personal form guidance and workout adjustments included with every membership."
    },
    {
      title: "Top-Tier Equipment & Spotless Gym",
      desc: "High-grade biomechanical strength stacks, heavy dumbbells, power cages, and daily sanitization."
    },
    {
      title: "Support Beyond Fitness",
      desc: "An incredibly supportive environment where Coach Manish stands by members during tough times."
    },
    {
      title: "Anatomy & Safety Bonus",
      desc: "Doctor-backed anatomical knowledge ensuring every rep is safe, effective, and joint-friendly."
    }
  ]
};

export const COMPARISON_DATA = [
  {
    feature: "Trainer Attention",
    ordinary: "Ignored unless you buy expensive PT packages",
    jaipurGym: "Coach Manish guides your form daily on the floor for FREE"
  },
  {
    feature: "Gym Environment",
    ordinary: "Crowded, noisy, and intimidating for beginners",
    jaipurGym: "Motivating, energetic, clean & super welcoming family vibe"
  },
  {
    feature: "Equipment & Maintenance",
    ordinary: "Outdated, worn-out cables, and dusty floors",
    jaipurGym: "Top-class smooth biomechanical machines in a spotless space"
  },
  {
    feature: "Supplement Advice",
    ordinary: "Sales pitches pushing overpriced, high-margin tubs",
    jaipurGym: "100% honest, science-backed guidance on real food & supplements"
  },
  {
    feature: "Community Culture",
    ordinary: "Just a membership card number on a screen",
    jaipurGym: "A supportive family where everyone knows your name and cheers you on"
  }
];

export const PROGRAMS: Program[] = [
  {
    id: "personal-coaching",
    title: "Personal Transformation Coaching",
    tagline: "Custom workout splits, daily motivation, and hands-on form checks directly with Coach Manish.",
    iconName: "Dumbbell",
    medicalAdvantage: "Includes posture checks and optimal lifting cues for joint longevity.",
    keyFeatures: [
      "Zero hidden fees — personal coaching included for all members",
      "Tailored progressive overload tracking for rapid results",
      "Daily accountability, motivation, and form corrections"
    ],
    idealFor: "Beginners wanting to build rock-solid form or lifters breaking through plateaus.",
    image: "/src/assets/images/jaipur_gym_hero_1786540705166.jpg"
  },
  {
    id: "strength-bodybuilding",
    title: "Strength & Bodybuilding",
    tagline: "Build heavy muscle, increase compound lifts, and forge an athletic physique.",
    iconName: "Zap",
    medicalAdvantage: "Biomechanical tension angles engineered to maximize hypertrophy while protecting tendons.",
    keyFeatures: [
      "Mastery of Squat, Bench Press, Deadlift, and Shoulder Press",
      "High-grade plate-loaded machines & dumbbell stack up to heavy weights",
      "Structured hypertrophy splits (Push/Pull/Legs, Upper/Lower)"
    ],
    idealFor: "Anyone aiming to gain lean muscle, boost raw strength, and transform their physique.",
    image: "/src/assets/images/gym_facility_1786540731187.jpg"
  },
  {
    id: "weight-loss",
    title: "Fat Loss & Metabolic Conditioning",
    tagline: "Shed stubborn fat, boost stamina, and feel incredibly energetic every single day.",
    iconName: "Flame",
    medicalAdvantage: "Sustainable fat loss protocols that preserve hard-earned muscle and metabolic health.",
    keyFeatures: [
      "High-energy cardiovascular & resistance circuit training",
      "Visceral fat reduction & stamina building routines",
      "Easy Indian meal structure guidance without starving yourself"
    ],
    idealFor: "Members wanting to burn fat fast while building a toned, fit body.",
    image: "/src/assets/images/gym_facility_1786540731187.jpg"
  },
  {
    id: "injury-prevention",
    title: "Safe Form & Injury Prevention",
    tagline: "Train hard without worrying about back strain, knee pain, or shoulder impingement.",
    iconName: "Shield",
    medicalAdvantage: "Coach Manish utilizes his medical doctor background to keep your joints healthy.",
    keyFeatures: [
      "Lower back, knee & rotator cuff protective exercises",
      "Controlled range-of-motion eccentric training",
      "Mobility and warm-up routines integrated into every workout"
    ],
    idealFor: "Lifters with old joint stiffness, desk workers, or anyone wanting safe, pain-free workouts.",
    image: "/src/assets/images/dr_manish_portrait_1786540719308.jpg"
  },
  {
    id: "nutrition-supplements",
    title: "Nutrition & Supplement Advice",
    tagline: "Clear, honest advice on real Indian food, protein targets, and safe supplements.",
    iconName: "Apple",
    medicalAdvantage: "Honest, science-backed guidance free from commercial sales hype.",
    keyFeatures: [
      "Macro breakdowns tailored to Indian home meals",
      "Straightforward guidance on Creatine, Whey, and Multivitamins",
      "Zero pushy sales pitch — we focus on real home food first"
    ],
    idealFor: "Anyone confused by internet diet fads or supplement pushers.",
    image: "/src/assets/images/dr_manish_portrait_1786540719308.jpg"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "rev-1",
    name: "Rohan Sharma",
    patientGoal: "Overweight & scared of gym lifting",
    prescribedPlan: "Daily personal motivation & progressive dumbbell routine",
    outcome: "Lost 14kg in 5 months! Coach Manish treats everyone like family and never lets you give up.",
    rating: 5,
    category: "Weight Loss",
    date: "2 weeks ago",
    verified: true
  },
  {
    id: "rev-2",
    name: "Priya Verma",
    patientGoal: "Wanted a clean, safe, non-intimidating gym for women",
    prescribedPlan: "Full-body strength conditioning & squat technique refinement",
    outcome: "Best gym environment in Pratap Nagar! Super clean, friendly crowd, and Coach Manish gives free guidance every day.",
    rating: 5,
    category: "Strength",
    date: "1 month ago",
    verified: true
  },
  {
    id: "rev-3",
    name: "Vikramaditya Rathore",
    patientGoal: "Muscle building plateau & bad lifting form from other gyms",
    prescribedPlan: "Heavy compound split + Anatomical posture correction by Coach Manish",
    outcome: "Gained 6kg lean muscle in 4 months. Machines are top quality and the energy in the gym is unmatched!",
    rating: 5,
    category: "Strength",
    date: "3 weeks ago",
    verified: true
  },
  {
    id: "rev-4",
    name: "Amit Choudhary",
    patientGoal: "Lower back stiffness from desk job",
    prescribedPlan: "Core stability warmup + Controlled leg press and deadlift progression",
    outcome: "Pain-free back and feeling stronger than ever. Coach Manish's medical knowledge is a huge bonus!",
    rating: 5,
    category: "Rehab",
    date: "2 months ago",
    verified: true
  },
  {
    id: "rev-5",
    name: "Dr. Neha K.",
    patientGoal: "Busy schedule needing stress relief & stamina boost",
    prescribedPlan: "45-minute high-density workouts",
    outcome: "Spotless gym, great music, top machines, and an amazingly supportive environment!",
    rating: 5,
    category: "General",
    date: "1 month ago",
    verified: true
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "monthly",
    name: "Monthly Pass",
    duration: "1 Month",
    price: "₹1,200",
    features: [
      "Full Gym & Machine Access",
      "Free Coaching & Form Guidance with Coach Manish",
      "Custom Cardio & Strength Workout Plan",
      "Daily Hygienic Locker & Changing Rooms",
      "Free Body Composition Check"
    ]
  },
  {
    id: "quarterly",
    name: "Quarterly Power Plan",
    duration: "3 Months",
    price: "₹3,200",
    popular: true,
    savings: "Save ₹400",
    features: [
      "All Monthly Pass Benefits",
      "Personalized Diet & Macro Blueprint",
      "Joint Mobility & Posture Assessment",
      "Priority Guidance from Coach Manish",
      "Free Gym Progress Assessment"
    ]
  },
  {
    id: "half-yearly",
    name: "Half-Yearly Commitment",
    duration: "6 Months",
    price: "₹5,800",
    savings: "Save ₹1,400",
    features: [
      "All Quarterly Benefits",
      "Bi-Monthly Transformation Tracking",
      "Advanced Hypertrophy & Fat Loss Splits",
      "Honest Supplement Safety Verification",
      "Free Jaipur Gym Shaker Bottle"
    ]
  },
  {
    id: "annual",
    name: "Annual Champion",
    duration: "12 Months",
    price: "₹9,900",
    savings: "Best Value — Save ₹4,500",
    features: [
      "Unlimited 365-Day Access",
      "Full Annual Fitness & Strength Blueprint",
      "2 Free Family Guest Workout Passes",
      "Free Premium Jaipur Gym T-Shirt",
      "Price Lock Guarantee on Renewal"
    ]
  }
];

export const FAQS = [
  {
    question: "Do I need to pay extra for personal training or form correction with Coach Manish?",
    answer: "No! Unlike other commercial gyms that charge expensive PT fees, Coach Manish actively guides members on the floor every single day as part of your regular membership.",
    category: "Coaching"
  },
  {
    question: "Is Jaipur Gym suitable for beginners and women?",
    answer: "100% yes! We pride ourselves on having the cleanest, most respectful, and welcoming environment in Pratap Nagar. Beginners receive step-by-step equipment walkthroughs so you never feel out of place.",
    category: "Environment"
  },
  {
    question: "What equipment and facilities are available?",
    answer: "We feature high-grade biomechanical strength machines, heavy dumbbell racks, power cages, cable crossover stacks, treadmills, exercise bikes, clean changing rooms, and air-conditioned workout floors.",
    category: "Facility"
  },
  {
    question: "What are the gym timings and location in Pratap Nagar?",
    answer: "We are located at 83/143, Main Haldighati Road, Pratap Nagar. Open daily: Morning shift 5:30 AM – 10:30 AM, Evening shift 4:30 PM – 9:30 PM.",
    category: "Timings"
  }
];
