import React from 'react';
import { Phone, MapPin, Star, CheckCircle2 } from 'lucide-react';
import { GYM_CONTACT } from '../data/gymData';

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  return (
    <section className="relative bg-zinc-950 overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-zinc-800/60">
      
      {/* Background Image with Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://lh3.googleusercontent.com/d/1qhwAcNRyYE3FPS77gmgQ2Qbf1UxgTL3s"
          onError={(e) => {
            if (e.currentTarget.src !== '/hero_drive_image.jpg') {
              e.currentTarget.src = '/hero_drive_image.jpg';
            }
          }}
          alt="Jaipur Gym Equipment and Training Floor"
          className="w-full h-full object-cover object-center opacity-50 sm:opacity-55 scale-105 filter contrast-110 brightness-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/90 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl space-y-6">
          
          {/* Trust Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-950/90 to-zinc-900 border border-red-800/60 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium text-red-200 shadow-md">
            <span className="flex items-center gap-1 text-amber-400 font-bold">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>4.8★</span>
            </span>
            <span className="text-zinc-500">•</span>
            <span className="text-zinc-200 font-semibold">Pratap Nagar's Premier Gym & Fitness Family</span>
            <span className="hidden sm:inline text-zinc-500">•</span>
            <span className="hidden sm:inline text-red-400 font-semibold">(52+ Google Reviews)</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
            Build Your <span className="bg-gradient-to-r from-red-500 via-red-400 to-amber-500 bg-clip-text text-transparent">Strongest Body.</span> <br />
            Driven by Passion, Supported by Family.
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-3xl font-normal">
            Welcome to <strong className="text-white font-semibold">Jaipur Gym</strong> on Haldighati Road. We combine top-class strength equipment, a spotless hygienic facility, and an energetic atmosphere with hands-on personal coaching from <strong className="text-white font-semibold">Coach Manish</strong> — a dedicated trainer who treats every member like family.
          </p>

          {/* Key Value Bullets */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-sm text-zinc-200 max-w-3xl">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
              <span>Top-class biomechanical machines & heavy iron</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
              <span>Free daily personal guidance & form checks</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
              <span>Spotless, well-ventilated, hygienic space</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
              <span>Super welcoming family vibe for all fitness levels</span>
            </div>
          </div>

          {/* Primary & Secondary CTAs */}
          <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              onClick={onOpenConsultation}
              className="bg-gradient-to-r from-red-600 via-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-base px-6 py-4 rounded-xl shadow-xl shadow-red-950/80 hover:shadow-red-600/30 transition-all flex items-center justify-center gap-2.5 border border-red-400/40 group"
            >
              <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform text-red-100" />
              <span>Claim Your Free Day Pass</span>
              <span className="bg-red-950/80 text-red-200 text-xs px-2 py-0.5 rounded font-mono ml-1">
                {GYM_CONTACT.phone}
              </span>
            </button>

            <a
              href={GYM_CONTACT.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 hover:text-white font-semibold text-base px-5 py-4 rounded-xl border border-zinc-700/80 hover:border-zinc-500 transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <MapPin className="w-5 h-5 text-red-500" />
              <span>Get Directions (Haldighati Rd)</span>
            </a>
          </div>

          {/* Local Address Quick Bar */}
          <p className="text-xs text-zinc-400 flex items-center gap-1.5 pt-1">
            <MapPin className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
            <span>83/143, Main Haldighati Rd, Pratap Nagar, Jaipur</span>
            <span className="text-zinc-600">•</span>
            <span className="text-emerald-400 font-medium">{GYM_CONTACT.hours}</span>
          </p>
        </div>
      </div>
    </section>
  );
};
