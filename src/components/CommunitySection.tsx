import React from 'react';
import { Users, Heart, ShieldCheck, Sparkles, MessageSquareQuote } from 'lucide-react';
import { COACH_INFO } from '../data/gymData';

export const CommunitySection: React.FC = () => {
  return (
    <section id="community" className="py-16 lg:py-24 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-white border-b border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-950 text-red-400 text-xs font-semibold uppercase tracking-wider border border-red-800/60">
            <Users className="w-3.5 h-3.5 text-red-500" />
            <span>A Gym That Feels Like Family</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            You're Not Just a Membership Number Here
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal max-w-2xl mx-auto">
            Walk into Jaipur Gym on Haldighati Road and you'll notice it immediately — people know each other's names, cheer each other on heavy sets, and train with real energy.
          </p>
        </div>

        {/* Narrative & Supporting Points Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Story Box */}
          <div className="lg:col-span-6 bg-zinc-950/90 p-8 rounded-2xl border border-zinc-800 space-y-6 shadow-xl relative">
            <div className="space-y-4 text-zinc-300 text-base leading-relaxed font-normal">
              <p>
                {COACH_INFO.name} is famous in Pratap Nagar for going far beyond what standard gym owners do: <strong className="text-white font-semibold">giving free personal coaching on the floor</strong>, offering honest supplement advice, and standing by members when life gets challenging. This is a gym built on real relationships, hard work, and mutual respect.
              </p>
              <p>
                Whether you are stepping into a gym for the very first time or you're an experienced lifter aiming for a new personal best, you will find zero toxic ego, high motivation, and constant encouragement.
              </p>
            </div>

            {/* Member Quote Callout */}
            <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800 flex items-start gap-3">
              <MessageSquareQuote className="w-6 h-6 text-red-500 shrink-0 mt-1" />
              <div className="text-xs text-zinc-300 space-y-1">
                <p className="italic text-zinc-200">
                  "Coach Manish doesn't just check your workout form; he asks how you are doing, pushes you to hit your sets, and makes sure you feel confident every day. It feels like training with family."
                </p>
                <p className="text-red-400 font-bold font-mono text-[11px]">— Pratap Nagar Gym Member</p>
              </div>
            </div>
          </div>

          {/* 3-Up Supporting Points Cards */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Card 1 */}
            <div className="bg-zinc-900 p-5 rounded-2xl border border-zinc-800 hover:border-red-900/50 transition-colors space-y-2 group">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-red-950 text-red-400 border border-red-800/40 group-hover:scale-105 transition-transform">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">1. Free Personal Coaching</h3>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed pl-12">
                Hands-on coaching and form adjustments are included with every membership — never hidden behind aggressive upsell contracts.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-zinc-900 p-5 rounded-2xl border border-zinc-800 hover:border-red-900/50 transition-colors space-y-2 group">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-amber-950 text-amber-400 border border-amber-800/40 group-hover:scale-105 transition-transform">
                  <Heart className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">2. Support During Tough Times</h3>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed pl-12">
                Genuine flexibility and human understanding when life gets busy or challenging. We always put our members before fees.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-zinc-900 p-5 rounded-2xl border border-zinc-800 hover:border-red-900/50 transition-colors space-y-2 group">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-950 text-emerald-400 border border-emerald-800/40 group-hover:scale-105 transition-transform">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">3. A True Fitness Family</h3>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed pl-12">
                A motivating, judgment-free environment for beginners, working professionals, women, and experienced lifters alike.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
