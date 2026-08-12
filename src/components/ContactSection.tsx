import React, { useState } from 'react';
import { Phone, MapPin, Clock, CheckCircle2, Send, Sparkles } from 'lucide-react';
import { GYM_CONTACT, COACH_INFO } from '../data/gymData';

export const ContactSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    goal: 'Weight Loss & Transformation',
    hasInjury: 'no',
    preferredTime: 'Morning (5:30 AM - 10:30 AM)'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-zinc-950 text-white border-b border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-950 text-red-400 text-xs font-semibold uppercase tracking-wider border border-red-800/60">
            <MapPin className="w-3.5 h-3.5 text-red-500" />
            <span>Visit Us Today in Pratap Nagar</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Your Transformation Starts on Haldighati Road
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
            Come see the facility, test out our top-class machines, and meet {COACH_INFO.name} for a free walk-in gym pass.
          </p>
        </div>

        {/* Contact Info + Form + Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: NAP (Name, Address, Phone) & Operating Hours */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <div className="bg-zinc-900/90 p-6 sm:p-8 rounded-2xl border border-zinc-800 space-y-6 shadow-xl">
              <h3 className="text-xl font-bold text-white pb-3 border-b border-zinc-800 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-red-500" />
                <span>Gym Location & Details</span>
              </h3>

              <div className="space-y-5 text-sm">
                
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-red-950 text-red-400 border border-red-800/40 shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-white font-semibold">Address</strong>
                    <p className="text-zinc-300 leading-relaxed text-xs sm:text-sm mt-0.5">
                      {GYM_CONTACT.address}
                    </p>
                    <a
                      href={GYM_CONTACT.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-red-400 hover:text-red-300 mt-2"
                    >
                      <span>Open in Google Maps →</span>
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-amber-950 text-amber-400 border border-amber-800/40 shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-white font-semibold">Operating Hours</strong>
                    <p className="text-emerald-400 font-bold text-xs mt-0.5">{GYM_CONTACT.hours}</p>
                    <div className="text-xs text-zinc-400 space-y-0.5 mt-1 font-mono">
                      <p>Morning Shift: {GYM_CONTACT.morningShift}</p>
                      <p>Evening Shift: {GYM_CONTACT.eveningShift}</p>
                    </div>
                  </div>
                </div>

                {/* Phone Call */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-emerald-950 text-emerald-400 border border-emerald-800/40 shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-white font-semibold">Phone / Call to Join</strong>
                    <p className="text-zinc-300 text-base font-bold font-mono mt-0.5">{GYM_CONTACT.phone}</p>
                    <p className="text-xs text-zinc-400">Directly reaches {COACH_INFO.name}</p>
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-zinc-800/80 space-y-2">
                <a
                  href={`tel:${GYM_CONTACT.phoneRaw}`}
                  className="w-full bg-red-600 hover:bg-red-500 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-red-950/80 transition-all text-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Coach Manish — {GYM_CONTACT.phone}</span>
                </a>
                <a
                  href={GYM_CONTACT.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-semibold py-3 rounded-xl border border-zinc-700 flex items-center justify-center gap-2 text-xs transition-colors"
                >
                  <MapPin className="w-4 h-4 text-red-500" />
                  <span>Get Directions to Haldighati Rd</span>
                </a>
              </div>
            </div>

            {/* Embedded Google Map Preview Frame */}
            <div className="rounded-2xl overflow-hidden border border-zinc-800 h-60 relative shadow-xl">
              <iframe
                title="Jaipur Gym Haldighati Rd Google Map Location"
                src={GYM_CONTACT.googleEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="filter contrast-125 grayscale hover:grayscale-0 transition-all duration-300"
              ></iframe>
            </div>
          </div>

          {/* Right Column: Free Pass & Callback Form */}
          <div className="lg:col-span-7 bg-zinc-900/90 p-6 sm:p-8 rounded-2xl border border-zinc-800 shadow-xl flex flex-col justify-between">
            <div className="space-y-6">
              <div className="pb-4 border-b border-zinc-800 space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950 px-2.5 py-1 rounded border border-red-800/40">
                  Free Gym Trial
                </span>
                <h3 className="text-2xl font-bold text-white">Claim Your Free Day Pass & Tour</h3>
                <p className="text-xs text-zinc-400">
                  Fill out this quick form or call us directly. Coach Manish will be ready to give you a personal walkthrough of the gym floor.
                </p>
              </div>

              {formSubmitted ? (
                <div className="bg-emerald-950/60 border border-emerald-800 p-6 rounded-2xl text-center space-y-4 animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Day Pass Confirmed!</h4>
                  <p className="text-xs text-zinc-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formData.name}</strong>! Coach Manish will contact you at <strong className="text-emerald-400 font-mono">{formData.phone}</strong> shortly.
                  </p>
                  <div className="pt-2">
                    <a
                      href={`tel:${GYM_CONTACT.phoneRaw}`}
                      className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-5 py-3 rounded-xl shadow-lg"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call Immediately: {GYM_CONTACT.phone}</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="block text-zinc-300 font-semibold mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-zinc-950 border border-zinc-800 focus:border-red-500 rounded-xl p-3 text-white placeholder-zinc-600 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-zinc-300 font-semibold mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 98296 24875"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-zinc-950 border border-zinc-800 focus:border-red-500 rounded-xl p-3 text-white placeholder-zinc-600 outline-none transition-colors font-mono"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-zinc-300 font-semibold mb-1">Primary Fitness Goal</label>
                      <select
                        value={formData.goal}
                        onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                        className="w-full bg-zinc-950 border border-zinc-800 focus:border-red-500 rounded-xl p-3 text-white outline-none transition-colors"
                      >
                        <option value="Weight Loss & Transformation">Weight Loss & Transformation</option>
                        <option value="Strength & Muscle Gain">Strength & Muscle Gain</option>
                        <option value="Bodybuilding & Conditioning">Bodybuilding & Conditioning</option>
                        <option value="General Health & Stamina">General Health & Stamina</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-zinc-300 font-semibold mb-1">Do you have any joint/back issues?</label>
                      <select
                        value={formData.hasInjury}
                        onChange={(e) => setFormData({ ...formData, hasInjury: e.target.value })}
                        className="w-full bg-zinc-950 border border-zinc-800 focus:border-red-500 rounded-xl p-3 text-white outline-none transition-colors"
                      >
                        <option value="no">No past major issues</option>
                        <option value="yes-knee">Knee discomfort</option>
                        <option value="yes-back">Lower back stiffness</option>
                        <option value="yes-shoulder">Shoulder tightness</option>
                        <option value="other">Other condition</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-zinc-300 font-semibold mb-1">Preferred Time to Visit Haldighati Rd Gym</label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full bg-zinc-950 border border-zinc-800 focus:border-red-500 rounded-xl p-3 text-white outline-none transition-colors"
                    >
                      <option value="Morning (5:30 AM - 10:30 AM)">Morning Shift (5:30 AM – 10:30 AM)</option>
                      <option value="Evening (4:30 PM - 9:30 PM)">Evening Shift (4:30 PM – 9:30 PM)</option>
                    </select>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold py-4 rounded-xl text-sm flex items-center justify-center gap-2 shadow-xl shadow-red-950/80 transition-all border border-red-500/30"
                    >
                      <Send className="w-4 h-4" />
                      <span>Claim Free Pass — Send Request</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-zinc-500 text-center pt-1">
                    🔒 No spam. Your details are strictly used to schedule your free walk-in gym visit.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
