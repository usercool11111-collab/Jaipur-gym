import React from 'react';
import { Dumbbell, Sparkles, ShieldCheck, Heart, ArrowRight } from 'lucide-react';
import { GYM_CONTACT } from '../data/gymData';

interface FacilityProps {
  onOpenConsultation: () => void;
}

export const FacilitySection: React.FC<FacilityProps> = ({ onOpenConsultation }) => {
  return (
    <section id="facility" className="py-16 lg:py-24 bg-zinc-950 text-white border-b border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-950 text-red-400 text-xs font-semibold uppercase tracking-wider border border-red-800/60">
            <Dumbbell className="w-3.5 h-3.5 text-red-500" />
            <span>Premium Facility & Equipment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Top-Class Machines. A Spotless Space. A Price That Respects You.
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
            Jaipur Gym is equipped with high-quality, well-maintained machines in a clean, hygienic space designed to keep you motivated every visit — offered at a cost built for the local community, not inflated for it.
          </p>
        </div>

        {/* Facility Image Showcase */}
        <div className="relative rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl group">
          <img
            src="/src/assets/images/gym_facility_1786540731187.jpg"
            alt="Jaipur Gym Facility Equipment"
            className="w-full h-[380px] sm:h-[480px] object-cover object-center filter contrast-110 group-hover:scale-102 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
          
          <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1 max-w-xl">
              <span className="text-xs font-bold text-red-400 uppercase tracking-widest bg-red-950/80 px-2.5 py-1 rounded border border-red-800/40">
                Haldighati Road Center
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">Spacious, Ventilated & Fully Equipped</h3>
              <p className="text-xs sm:text-sm text-zinc-300">
                Heavy dumbbells, biomechanical cable stacks, power racks, cardio equipment, and dedicated stretching floors.
              </p>
            </div>

            <a
              href="#pricing"
              className="bg-red-600 hover:bg-red-500 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 shrink-0"
            >
              <span>See Membership Options</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Facility Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-zinc-900 p-5 rounded-2xl border border-zinc-800 space-y-2">
            <div className="p-2.5 rounded-xl bg-red-950 text-red-400 w-fit">
              <Dumbbell className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-white text-base">Biomechanical Strength</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Ergonomic machines built for smooth movement paths that minimize joint shearing.
            </p>
          </div>

          <div className="bg-zinc-900 p-5 rounded-2xl border border-zinc-800 space-y-2">
            <div className="p-2.5 rounded-xl bg-amber-950 text-amber-400 w-fit">
              <Sparkles className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-white text-base">Daily Sanitization</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Spotless floors, sanitized grips, clean air flow, and daily hygienic maintenance.
            </p>
          </div>

          <div className="bg-zinc-900 p-5 rounded-2xl border border-zinc-800 space-y-2">
            <div className="p-2.5 rounded-xl bg-emerald-950 text-emerald-400 w-fit">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-white text-base">Safe Lifting Area</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Dedicated deadlift platforms, rubberized flooring, and certified spotters on call.
            </p>
          </div>

          <div className="bg-zinc-900 p-5 rounded-2xl border border-zinc-800 space-y-2">
            <div className="p-2.5 rounded-xl bg-blue-950 text-blue-400 w-fit">
              <Heart className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-white text-base">Community Standard</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Respectful environment where beginners feel welcomed and veterans train hard.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
