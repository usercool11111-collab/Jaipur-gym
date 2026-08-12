import React, { useState } from 'react';
import { Dumbbell, ShieldCheck, Heart, ChevronDown, ChevronUp, Check, X, ArrowRight, Zap, HelpCircle } from 'lucide-react';
import { FAQS, COMPARISON_DATA, COACH_INFO } from '../data/gymData';

interface DoctorDifferenceProps {
  onOpenConsultation: () => void;
}

export const DoctorDifference: React.FC<DoctorDifferenceProps> = ({ onOpenConsultation }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section id="why-jaipur-gym" className="py-16 lg:py-24 bg-zinc-950 text-white border-b border-zinc-800/80 relative">
      
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Key Features Quick Strip */}
        <div className="bg-gradient-to-r from-red-950/80 via-zinc-900 to-red-950/80 p-4 rounded-2xl border border-red-900/40 shadow-lg flex flex-wrap items-center justify-around gap-4 text-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-red-600/20 flex items-center justify-center text-red-400 font-bold">🏋️</div>
            <span className="text-sm font-bold text-white">Top-Class Machines & Heavy Iron</span>
          </div>
          <span className="text-zinc-700 hidden md:inline">•</span>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-amber-600/20 flex items-center justify-center text-amber-400 font-bold">🤝</div>
            <span className="text-sm font-bold text-white">Daily Personal Form Guidance</span>
          </div>
          <span className="text-zinc-700 hidden md:inline">•</span>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-600/20 flex items-center justify-center text-emerald-400 font-bold">✨</div>
            <span className="text-sm font-bold text-white">Spotless Hygienic Environment</span>
          </div>
        </div>

        {/* Section Header & Main Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-950 text-red-400 text-xs font-semibold uppercase tracking-wider border border-red-800/60">
              <Dumbbell className="w-3.5 h-3.5 text-red-500" />
              <span>Why Jaipur Gym</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              A High-Energy Gym Where You Actually Get Guidance & Results
            </h2>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
              Most commercial gyms collect your fee and leave you to figure things out on your own. At <strong className="text-white font-semibold">Jaipur Gym</strong>, Head Coach Manish is on the floor every single day, personally correcting form, motivating you through heavy sets, and ensuring you hit your goals in a clean, friendly space.
            </p>

            {/* Core Pillars */}
            <div className="space-y-4 pt-2">
              <div className="bg-zinc-900/90 p-4 rounded-xl border border-zinc-800/80 flex items-start gap-3.5 hover:border-red-900/50 transition-colors">
                <div className="p-2 rounded-lg bg-red-950 text-red-400 shrink-0 mt-0.5">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">Top-Class Biomechanical Equipment</h4>
                  <p className="text-sm text-zinc-400 mt-0.5">High-end plate-loaded machines, heavy dumbbell racks, power cages, and smooth pulley systems for maximum muscle tension.</p>
                </div>
              </div>

              <div className="bg-zinc-900/90 p-4 rounded-xl border border-zinc-800/80 flex items-start gap-3.5 hover:border-red-900/50 transition-colors">
                <div className="p-2 rounded-lg bg-amber-950 text-amber-400 shrink-0 mt-0.5">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">Daily Hands-On Coaching Included</h4>
                  <p className="text-sm text-zinc-400 mt-0.5">Coach Manish gives free form checks, workout adjustments, and daily motivation without demanding expensive personal training contracts.</p>
                </div>
              </div>

              <div className="bg-zinc-900/90 p-4 rounded-xl border border-zinc-800/80 flex items-start gap-3.5 hover:border-red-900/50 transition-colors">
                <div className="p-2 rounded-lg bg-emerald-950 text-emerald-400 shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">Added Bonus: Medical Doctor Credentials</h4>
                  <p className="text-sm text-zinc-400 mt-0.5">Coach Manish's medical background ensures every exercise is anatomically sound, protecting your joints and back from injury.</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 font-bold text-base group"
              >
                <span>Claim Your Free Day Pass & Meet Coach Manish</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Coach Quote Spotlight Box */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="relative rounded-2xl bg-gradient-to-br from-red-950/60 via-zinc-900 to-zinc-950 p-8 border border-zinc-800 shadow-2xl space-y-6">
              <div className="w-12 h-12 rounded-xl bg-red-600/20 text-red-400 border border-red-500/30 flex items-center justify-center">
                <Dumbbell className="w-6 h-6" />
              </div>
              <div className="space-y-3">
                <p className="leading-relaxed font-sans text-base text-zinc-200 italic font-medium">
                  "{COACH_INFO.quote}"
                </p>
                <div className="pt-2 border-t border-zinc-800">
                  <p className="font-bold text-red-400 text-sm tracking-wider uppercase">
                    — Coach Manish
                  </p>
                  <p className="text-xs text-zinc-400">Founder & Head Trainer, Jaipur Gym</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Comparison Table: Ordinary Gym vs Jaipur Gym */}
        <div className="space-y-6">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Ordinary Gym vs. Jaipur Gym
            </h3>
            <p className="text-sm text-zinc-400">
              See why fitness enthusiasts in Pratap Nagar switch to Jaipur Gym.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-zinc-800 bg-zinc-900/60 shadow-xl">
            <table className="w-full text-left text-sm text-zinc-300">
              <thead>
                <tr className="bg-zinc-900 border-b border-zinc-800 text-xs uppercase tracking-wider">
                  <th className="py-4 px-6 font-bold text-zinc-400">Feature</th>
                  <th className="py-4 px-6 font-bold text-red-400/90 w-1/3">Ordinary Gym</th>
                  <th className="py-4 px-6 font-bold text-emerald-400 w-1/3 bg-emerald-950/30 border-l border-emerald-900/40">
                    <span className="flex items-center gap-1.5">
                      <Dumbbell className="w-4 h-4 text-emerald-400" />
                      Jaipur Gym
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60">
                {COMPARISON_DATA.map((row, idx) => (
                  <tr key={idx} className="hover:bg-zinc-800/40 transition-colors">
                    <td className="py-4 px-6 font-bold text-white">{row.feature}</td>
                    <td className="py-4 px-6 text-zinc-400 space-y-1">
                      <div className="flex items-center gap-2 text-zinc-400">
                        <X className="w-4 h-4 text-red-500 shrink-0" />
                        <span>{row.ordinary}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 bg-emerald-950/20 border-l border-emerald-900/30 text-white font-medium">
                      <div className="flex items-center gap-2 text-emerald-300">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{row.jaipurGym}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-zinc-900/80 rounded-2xl p-6 sm:p-8 border border-zinc-800 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-800">
            <div>
              <div className="inline-flex items-center gap-1.5 text-red-400 text-xs font-semibold uppercase tracking-wider mb-1">
                <HelpCircle className="w-4 h-4 text-red-500" />
                <span>Frequently Asked Questions</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">Got Questions About Joining?</h3>
            </div>
            <button
              onClick={onOpenConsultation}
              className="text-xs bg-red-950 text-red-300 border border-red-800/60 hover:bg-red-900 px-3.5 py-2 rounded-lg font-semibold transition-colors self-start sm:self-auto"
            >
              Ask Coach Manish Directly
            </button>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-zinc-950 rounded-xl border border-zinc-800 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 text-white font-semibold hover:text-red-400 transition-colors"
                  >
                    <span className="text-sm sm:text-base flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-500 shrink-0"></span>
                      {faq.question}
                    </span>
                    {isOpen ? <ChevronUp className="w-5 h-5 text-red-400 shrink-0" /> : <ChevronDown className="w-5 h-5 text-zinc-500 shrink-0" />}
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 sm:pb-5 text-sm text-zinc-300 border-t border-zinc-800/60 pt-3 bg-zinc-900/40 space-y-2">
                      <p className="leading-relaxed text-zinc-300">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
