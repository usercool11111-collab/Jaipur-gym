import React from 'react';
import { Check, ShieldCheck, Phone, Zap, Star } from 'lucide-react';
import { PRICING_PLANS, COACH_INFO } from '../data/gymData';

interface PricingProps {
  onOpenConsultation: () => void;
}

export const PricingSection: React.FC<PricingProps> = ({ onOpenConsultation }) => {
  return (
    <section id="pricing" className="py-16 lg:py-24 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-white border-b border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-950 text-red-400 text-xs font-semibold uppercase tracking-wider border border-red-800/60">
            <Zap className="w-3.5 h-3.5 text-red-500" />
            <span>Affordable & Transparent Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Premium Gym Experience. Unbeatable Local Value.
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Every membership includes free daily coaching with {COACH_INFO.name}, form checks, and full access to top-class machines.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 relative ${
                plan.popular
                  ? 'bg-gradient-to-b from-red-950/90 via-zinc-900 to-zinc-950 border-2 border-red-500 shadow-2xl shadow-red-950/60 -translate-y-1'
                  : 'bg-zinc-900 border border-zinc-800 hover:border-zinc-700'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[11px] font-extrabold uppercase tracking-wider px-3 py-0.5 rounded-full shadow-md flex items-center gap-1">
                  <Star className="w-3 h-3 fill-white" />
                  Most Popular Choice
                </div>
              )}

              <div className="space-y-4">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                  <p className="text-xs text-zinc-400">{plan.duration}</p>
                </div>

                {/* Price Display */}
                <div className="py-2 border-y border-zinc-800/80">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold text-white font-mono">{plan.price}</span>
                  </div>
                  {plan.savings && (
                    <span className="inline-block mt-1 text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                      {plan.savings}
                    </span>
                  )}
                </div>

                {/* Features List */}
                <ul className="space-y-2.5 text-xs text-zinc-300 pt-2">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-zinc-800/80 space-y-2">
                <button
                  onClick={onOpenConsultation}
                  className={`w-full py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all ${
                    plan.popular
                      ? 'bg-red-600 hover:bg-red-500 text-white shadow-lg shadow-red-950/80'
                      : 'bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700'
                  }`}
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Join Now / Enquire</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Free Coaching Guarantee Bar */}
        <div className="bg-zinc-950 p-6 rounded-2xl border border-red-900/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-red-950 text-red-400 rounded-xl border border-red-800/40 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="space-y-0.5">
              <h4 className="font-bold text-white text-base">Free Daily Form Guidance Included</h4>
              <p className="text-xs text-zinc-400">
                Every member gets daily guidance from Coach Manish on lifting form, progressive overload, and joint safety.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenConsultation}
            className="text-xs font-bold text-red-400 hover:text-red-300 underline underline-offset-4 shrink-0"
          >
            Ask about student or group discounts →
          </button>
        </div>

      </div>
    </section>
  );
};
