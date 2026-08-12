import React, { useState } from 'react';
import { Dumbbell, Zap, Flame, Shield, Apple, ArrowRight, CheckCircle, X, Phone } from 'lucide-react';
import { PROGRAMS, GYM_CONTACT } from '../data/gymData';
import { Program } from '../types';

interface ProgramsSectionProps {
  onOpenConsultation: () => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onOpenConsultation }) => {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Dumbbell': return <Dumbbell className="w-6 h-6 text-amber-400" />;
      case 'Zap': return <Zap className="w-6 h-6 text-yellow-400" />;
      case 'Flame': return <Flame className="w-6 h-6 text-red-400" />;
      case 'Shield': return <Shield className="w-6 h-6 text-rose-400" />;
      case 'Apple': return <Apple className="w-6 h-6 text-emerald-400" />;
      default: return <Dumbbell className="w-6 h-6 text-red-400" />;
    }
  };

  return (
    <section id="programs" className="py-16 lg:py-24 bg-zinc-950 text-white border-b border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-950 text-red-400 text-xs font-semibold uppercase tracking-wider border border-red-800/60">
            <Dumbbell className="w-3.5 h-3.5 text-red-500" />
            <span>Training Programs & Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            High-Performance Programs for Every Goal
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Whether you want to build raw muscle, shed stubborn fat, or train safely around an old injury, Coach Manish guides your progress every single day.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROGRAMS.map((program) => (
            <div
              key={program.id}
              className="bg-zinc-900/90 rounded-2xl border border-zinc-800 hover:border-red-900/60 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-red-950/30 group"
            >
              <div className="space-y-4">
                {/* Header Icon + Title */}
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 group-hover:border-red-800/60 transition-colors">
                    {getIcon(program.iconName)}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-red-400 bg-red-950/80 px-2.5 py-1 rounded-full border border-red-800/40">
                    Coach Guided
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">
                  {program.title}
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                  {program.tagline}
                </p>

                {/* Added Bonus / Safety Advantage Callout */}
                <div className="bg-zinc-950 p-3 rounded-xl border border-red-900/30 text-xs text-red-300/90 space-y-1">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-red-400 uppercase tracking-wider">
                    <Shield className="w-3.5 h-3.5 text-red-500" />
                    Safety & Anatomical Precision
                  </div>
                  <p className="text-zinc-300 text-[11px] leading-snug">
                    {program.medicalAdvantage}
                  </p>
                </div>

                {/* Key Features Bullets */}
                <ul className="space-y-2 text-xs text-zinc-300 pt-1">
                  {program.keyFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Action */}
              <div className="pt-6 border-t border-zinc-800/80 mt-6 flex items-center justify-between">
                <span className="text-[11px] text-zinc-400 font-medium">
                  Ideal for: <span className="text-zinc-300">{program.idealFor.slice(0, 32)}...</span>
                </span>
                <button
                  onClick={() => setSelectedProgram(program)}
                  className="text-xs text-red-400 hover:text-red-300 font-bold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}

          {/* Free Walk-In Consultation Program Card */}
          <div className="bg-gradient-to-br from-red-950 via-zinc-900 to-zinc-950 rounded-2xl border border-red-900/60 p-6 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="space-y-4">
              <div className="p-3 rounded-xl bg-red-900/40 border border-red-700/60 w-fit text-red-400">
                <Dumbbell className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Free Walk-In Gym Pass</h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Want to test out our top-class machines and meet Coach Manish in person? Walk in today for a free trial session.
              </p>
              <div className="bg-zinc-950/80 p-3 rounded-xl border border-red-800/40 text-xs text-zinc-300 space-y-1">
                <span className="text-emerald-400 font-bold block">✓ Zero Pressure Trial Day</span>
                <p className="text-zinc-400 text-[11px]">Experience the equipment, energy, and community firsthand.</p>
              </div>
            </div>

            <button
              onClick={onOpenConsultation}
              className="mt-6 w-full bg-red-600 hover:bg-red-500 text-white font-bold py-3 rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg shadow-red-950/80 transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Claim Free Pass — {GYM_CONTACT.phone}</span>
            </button>
          </div>
        </div>

      </div>

      {/* Program Deep-Dive Modal */}
      {selectedProgram && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl max-w-lg w-full p-6 space-y-6 relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedProgram(null)}
              className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white bg-zinc-800 rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950 px-2.5 py-1 rounded border border-red-800/40">
                Program Blueprint
              </span>
              <h3 className="text-2xl font-bold text-white">{selectedProgram.title}</h3>
              <p className="text-xs text-zinc-400">{selectedProgram.tagline}</p>
            </div>

            <div className="bg-zinc-950 p-4 rounded-xl border border-red-900/40 space-y-2 text-xs">
              <div className="font-bold text-red-400 uppercase tracking-wider flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-red-500" />
                Coach Guidance & Safety Protocol
              </div>
              <p className="text-zinc-300 leading-relaxed">
                {selectedProgram.medicalAdvantage}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold text-zinc-300 uppercase tracking-wider">Included in Program</h4>
              <ul className="space-y-2 text-xs text-zinc-300">
                {selectedProgram.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-zinc-950 p-3 rounded-lg border border-zinc-800 text-xs text-zinc-400">
              <strong className="text-white">Ideal For:</strong> {selectedProgram.idealFor}
            </div>

            <div className="flex gap-3 pt-2">
              <button
                onClick={() => {
                  setSelectedProgram(null);
                  onOpenConsultation();
                }}
                className="w-full bg-red-600 hover:bg-red-500 text-white font-bold py-3 rounded-xl text-xs flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Coach Manish to Join</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
