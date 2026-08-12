import React, { useState } from 'react';
import { X, Phone, CheckCircle2, Send, Dumbbell } from 'lucide-react';
import { GYM_CONTACT, COACH_INFO } from '../data/gymData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [note, setNote] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl max-w-md w-full p-6 space-y-6 relative shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white bg-zinc-800 rounded-lg transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-red-950 text-red-400 text-xs font-bold uppercase tracking-wider border border-red-800/40">
            <Dumbbell className="w-3.5 h-3.5 text-red-500" />
            <span>Free Day Pass & Consultation</span>
          </div>
          <h3 className="text-2xl font-bold text-white">Claim Your Free Gym Trial</h3>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Call us directly or submit your details below for a free walk-in gym pass and 1-on-1 consultation with {COACH_INFO.name}.
          </p>
        </div>

        {/* Direct Call Quick Bar */}
        <div className="bg-zinc-950 p-4 rounded-xl border border-red-900/40 space-y-2">
          <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Fastest Way — Call Directly</span>
          <a
            href={`tel:${GYM_CONTACT.phoneRaw}`}
            className="w-full bg-red-600 hover:bg-red-500 text-white font-bold py-3 rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg shadow-red-950/80 transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>Call Now — {GYM_CONTACT.phone}</span>
          </a>
        </div>

        {submitted ? (
          <div className="bg-emerald-950/60 border border-emerald-800 p-5 rounded-xl text-center space-y-3">
            <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
            <h4 className="font-bold text-white text-base">Trial Pass Confirmed!</h4>
            <p className="text-xs text-zinc-300">
              {COACH_INFO.name} will reach out to you at <strong className="text-emerald-400 font-mono">{phone}</strong> shortly.
            </p>
            <button
              onClick={onClose}
              className="mt-2 text-xs bg-zinc-800 text-zinc-300 px-4 py-2 rounded-lg font-semibold"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3 text-xs">
            <div>
              <label className="block text-zinc-300 font-semibold mb-1">Your Name *</label>
              <input
                type="text"
                required
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 focus:border-red-500 rounded-xl p-3 text-white outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-zinc-300 font-semibold mb-1">Phone Number *</label>
              <input
                type="tel"
                required
                placeholder="098296 24875"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 focus:border-red-500 rounded-xl p-3 text-white outline-none font-mono transition-colors"
              />
            </div>

            <div>
              <label className="block text-zinc-300 font-semibold mb-1">Fitness Goal or Question (Optional)</label>
              <textarea
                rows={2}
                placeholder="e.g. Weight loss, muscle gain, strength training..."
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 focus:border-red-500 rounded-xl p-3 text-white outline-none transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-3 rounded-xl text-xs flex items-center justify-center gap-2 border border-zinc-700 transition-colors"
            >
              <Send className="w-3.5 h-3.5 text-red-400" />
              <span>Claim Free Pass & Callback</span>
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
