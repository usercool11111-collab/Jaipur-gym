import React, { useState } from 'react';
import { Star, CheckCircle2, Dumbbell, ExternalLink, Filter, Quote } from 'lucide-react';
import { TESTIMONIALS, GYM_CONTACT } from '../data/gymData';

export const ReviewsSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');

  const filteredReviews = filter === 'All'
    ? TESTIMONIALS
    : TESTIMONIALS.filter(t => t.category === filter);

  return (
    <section id="reviews" className="py-16 lg:py-24 bg-zinc-950 text-white border-b border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header & Big Google Rating Counter Display */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/80 text-amber-300 text-xs font-bold border border-amber-800/60 shadow-md">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span>4.8 ★★★★★ · 52+ Google Reviews</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Pratap Nagar's Most Popular Gym Community
          </h2>

          <p className="text-sm sm:text-base text-zinc-300">
            Real stories from members who built strength, lost weight, and transformed their health with Coach Manish's daily guidance.
          </p>
        </div>

        {/* Big Stat Banner */}
        <div className="bg-gradient-to-r from-red-950 via-zinc-900 to-red-950 p-6 sm:p-8 rounded-2xl border border-red-900/40 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
              <span className="text-3xl font-black text-amber-400 font-mono">4.8</span>
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <h3 className="font-bold text-white text-lg mt-1">52+ Verified Member Reviews</h3>
              <p className="text-xs text-zinc-400">Google Local Business Rating · Pratap Nagar, Jaipur</p>
            </div>
          </div>

          <a
            href={GYM_CONTACT.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl border border-zinc-700 flex items-center gap-2 transition-colors shrink-0"
          >
            <span>Read More Reviews on Google</span>
            <ExternalLink className="w-4 h-4 text-red-400" />
          </a>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-semibold">
          <span className="text-zinc-500 flex items-center gap-1 mr-2">
            <Filter className="w-3.5 h-3.5" />
            <span>Filter by Goal:</span>
          </span>
          {['All', 'Weight Loss', 'Strength', 'Rehab', 'General'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3.5 py-1.5 rounded-full border transition-colors ${
                filter === cat
                  ? 'bg-red-600 border-red-500 text-white font-bold shadow-md'
                  : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Member Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-zinc-900/90 rounded-2xl border border-zinc-800 p-6 flex flex-col justify-between relative shadow-xl hover:border-red-900/60 transition-colors space-y-4"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-zinc-800/80">
                  <div className="flex items-center gap-2">
                    <Dumbbell className="w-4 h-4 text-red-500" />
                    <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                      Member Success Story
                    </span>
                  </div>
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Patient / Member Name */}
                <div>
                  <h4 className="font-bold text-white text-base flex items-center justify-between">
                    <span>{rev.name}</span>
                    <span className="text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40 font-mono">
                      Verified Member
                    </span>
                  </h4>
                  <p className="text-[11px] text-zinc-500 mt-0.5">{rev.date}</p>
                </div>

                {/* Goal */}
                <div className="bg-zinc-950 p-3 rounded-xl border border-zinc-800 space-y-1 text-xs">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-red-400 block">
                    1. Initial Fitness Goal
                  </span>
                  <p className="text-zinc-300 font-medium">
                    {rev.patientGoal}
                  </p>
                </div>

                {/* Prescribed Plan */}
                <div className="bg-zinc-950 p-3 rounded-xl border border-zinc-800 space-y-1 text-xs">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1">
                    <Dumbbell className="w-3 h-3" />
                    2. Coach Manish's Guidance
                  </span>
                  <p className="text-zinc-300 font-medium">
                    {rev.prescribedPlan}
                  </p>
                </div>

                {/* Outcome */}
                <div className="bg-emerald-950/30 p-3 rounded-xl border border-emerald-900/40 space-y-1 text-xs">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    3. Transformation Outcome
                  </span>
                  <p className="text-emerald-200 font-medium italic">
                    "{rev.outcome}"
                  </p>
                </div>
              </div>

              {/* Verified Badge Footer */}
              <div className="pt-4 border-t border-zinc-800/80 mt-4 flex items-center justify-between text-[11px] text-zinc-500">
                <span>Goal: <strong className="text-zinc-400">{rev.category}</strong></span>
                <span className="text-zinc-400 flex items-center gap-1">
                  <Quote className="w-3 h-3 text-red-500" />
                  Google Review
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
