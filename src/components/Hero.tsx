import React from 'react';
import { Phone, MapPin, Star, Flame, Dumbbell, Users, CheckCircle2 } from 'lucide-react';
import { GYM_CONTACT, COACH_INFO } from '../data/gymData';

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  return (
    <section className="relative bg-zinc-950 overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-zinc-800/60">
      
      {/* Background Image with Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/jaipur_gym_hero_1786540705166.jpg"
          alt="Jaipur Gym Equipment and Training Floor"
          className="w-full h-full object-cover object-center opacity-30 scale-105 filter contrast-125 brightness-75"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/90 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy Column */}
          <div className="lg:col-span-7 space-y-6">
            
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
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl font-normal">
              Welcome to <strong className="text-white font-semibold">Jaipur Gym</strong> on Haldighati Road. We combine top-class strength equipment, a spotless hygienic facility, and an energetic atmosphere with hands-on personal coaching from <strong className="text-white font-semibold">Coach Manish</strong> — a dedicated trainer who treats every member like family.
            </p>

            {/* Key Value Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-sm text-zinc-200">
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

          {/* Hero Visual Card Column (Gym Energy & Coach Spotlight) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Decorative Glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-red-600 to-amber-600 opacity-20 blur-xl"></div>

              {/* Main Card */}
              <div className="relative bg-zinc-900/90 border border-zinc-800 rounded-2xl p-6 shadow-2xl backdrop-blur-md space-y-6">
                
                {/* Coach Profile Header */}
                <div className="flex items-center gap-4 pb-4 border-b border-zinc-800">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-600 to-red-900 border-2 border-red-500/80 shadow-md flex items-center justify-center text-white">
                      <Dumbbell className="w-7 h-7 text-white" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-red-600 text-white p-1 rounded-full border border-zinc-900">
                      <Flame className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-1.5 bg-red-950/80 text-red-400 border border-red-800/60 px-2 py-0.5 rounded text-[11px] font-semibold uppercase tracking-wider mb-1">
                      <Users className="w-3 h-3 text-red-400" />
                      Head Coach & Founder
                    </div>
                    <h3 className="text-lg font-bold text-white leading-snug">{COACH_INFO.name}</h3>
                    <p className="text-xs text-zinc-400">{COACH_INFO.experience}</p>
                  </div>
                </div>

                {/* Highlights Grid */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-zinc-950/80 p-3.5 rounded-xl border border-zinc-800 space-y-1">
                    <div className="flex items-center gap-1.5 text-red-400 text-xs font-bold">
                      <Dumbbell className="w-3.5 h-3.5" />
                      <span>Top Machines</span>
                    </div>
                    <p className="text-xs text-zinc-300">Biomechanical iron & smooth cables</p>
                  </div>

                  <div className="bg-zinc-950/80 p-3.5 rounded-xl border border-zinc-800 space-y-1">
                    <div className="flex items-center gap-1.5 text-amber-400 text-xs font-bold">
                      <Users className="w-3.5 h-3.5" />
                      <span>Like Family</span>
                    </div>
                    <p className="text-xs text-zinc-300">Supportive, zero-judgment crowd</p>
                  </div>
                </div>

                {/* Added Bonus Callout (Medical Background as an added benefit) */}
                <div className="bg-red-950/30 p-3.5 rounded-xl border border-red-900/40 text-xs text-zinc-300 space-y-1">
                  <div className="font-semibold text-red-400 flex items-center gap-1.5">
                    <span>💡 Added Bonus: Medical Doctor Background</span>
                  </div>
                  <p className="text-[11px] text-zinc-400 leading-normal">
                    Coach Manish holds an MD degree, providing you with anatomical precision for 100% safe, joint-friendly workouts.
                  </p>
                </div>

                {/* Live Rating Badge */}
                <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-1 text-amber-400 text-sm font-extrabold">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <span>4.8 / 5.0 Rating</span>
                    </div>
                    <p className="text-xs text-zinc-400">52+ Verified Google Reviews in Pratap Nagar</p>
                  </div>
                  <button
                    onClick={onOpenConsultation}
                    className="text-xs font-bold text-red-400 hover:text-red-300 underline underline-offset-2"
                  >
                    Get Free Pass →
                  </button>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
