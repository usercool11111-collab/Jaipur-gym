export interface Testimonial {
  id: string;
  name: string;
  patientGoal: string; // Diagnosis / Initial goal
  prescribedPlan: string; // The Rx / Training plan by Dr. Manish
  outcome: string; // The result
  rating: number;
  category: 'Weight Loss' | 'Strength' | 'Rehab' | 'General';
  date: string;
  verified: boolean;
}

export interface Program {
  id: string;
  title: string;
  tagline: string;
  iconName: string;
  medicalAdvantage: string;
  keyFeatures: string[];
  idealFor: string;
  image: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  duration: string;
  price: string;
  popular?: boolean;
  savings?: string;
  features: string[];
}

export interface DoctorFAQ {
  question: string;
  medicalAnswer: string;
  category: string;
}
