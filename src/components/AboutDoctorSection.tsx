import React from 'react';
import { Dumbbell, Phone, Sparkles, CheckCircle2, Heart, Award } from 'lucide-react';
import { COACH_INFO, GYM_CONTACT } from '../data/gymData';

interface AboutDoctorProps {
  onOpenConsultation: () => void;
}

export const AboutDoctorSection: React.FC<AboutDoctorProps> = ({ onOpenConsultation }) => {
  return (
    <section id="about-coach" className="py-16 lg:py-24 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-white border-b border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header Badge */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-950 text-red-400 text-xs font-semibold uppercase tracking-wider border border-red-800/60">
            <Dumbbell className="w-3.5 h-3.5 text-red-500" />
            <span>Meet Head Coach Manish</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            {COACH_INFO.storyTitle}
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Founder & Head Trainer of Jaipur Gym, Pratap Nagar
          </p>
        </div>

        {/* Grid Layout: Story Narrative + Pillars Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Story & Biography */}
          <div className="lg:col-span-7 bg-zinc-950/90 p-6 sm:p-8 rounded-2xl border border-zinc-800/80 space-y-6 flex flex-col justify-between shadow-xl">
            <div className="space-y-4 text-zinc-300 leading-relaxed text-base">
              {COACH_INFO.storyParagraphs.map((para, idx) => (
                <p key={idx} className="text-zinc-300 font-normal">
                  {para}
                </p>
              ))}
            </div>

            {/* Coach Quote Box */}
            <div className="mt-6 bg-gradient-to-r from-red-950/80 to-zinc-900 p-5 rounded-xl border border-red-800/60 relative">
              <div className="absolute -top-3 left-4 bg-red-600 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                Trainer's Promise
              </div>
              <p className="text-white font-medium italic text-base sm:text-lg leading-snug pt-1">
                "{COACH_INFO.quote}"
              </p>
              <p className="text-red-400 font-bold text-xs uppercase tracking-wider mt-2">
                — Coach Manish, Founder & Head Trainer
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onOpenConsultation}
                className="bg-red-600 hover:bg-red-500 text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-red-950/80 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Train With Coach Manish — Call {GYM_CONTACT.phone}</span>
              </button>
            </div>
          </div>

          {/* Pillars & Values Column */}
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
            <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-zinc-800 pb-3">
                <Sparkles className="w-5 h-5 text-amber-400" />
                <span>What Sets Coach Manish Apart</span>
              </h3>

              <div className="space-y-4">
                {COACH_INFO.pillars.map((pillar, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-white text-sm">{pillar.title}</h4>
                      <p className="text-xs text-zinc-400 mt-0.5 leading-relaxed">{pillar.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Added Bonus Badge */}
            <div className="bg-gradient-to-br from-red-950 via-zinc-950 to-zinc-900 p-5 rounded-2xl border border-red-900/40 text-xs space-y-2">
              <div className="flex items-center gap-2 text-red-400 font-bold uppercase tracking-wider">
                <Award className="w-4 h-4 text-red-500" />
                <span>Added Bonus: Medical Doctor Credentials</span>
              </div>
              <p className="text-zinc-300 leading-relaxed">
                Coach Manish completed his MD degree, giving him deep insights into joint biomechanics, human anatomy, and post-injury rehab. You get 100% safe, doctor-backed form guidance at no extra charge.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
