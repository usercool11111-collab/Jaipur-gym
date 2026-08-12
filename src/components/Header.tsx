import React, { useState } from 'react';
import { Phone, MapPin, Star, Menu, X, Dumbbell } from 'lucide-react';
import { GYM_CONTACT, COACH_INFO } from '../data/gymData';

interface HeaderProps {
  onOpenConsultation: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Banner - Local SEO & Rating */}
      <div className="bg-gradient-to-r from-red-950 via-zinc-900 to-red-950 text-xs text-zinc-300 py-1.5 px-4 border-b border-red-900/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1 bg-red-600/20 text-red-400 px-2 py-0.5 rounded font-medium border border-red-500/30">
              <Star className="w-3 h-3 fill-red-400 text-red-400" />
              <span>4.8 ★★★★★</span>
            </span>
            <span className="hidden sm:inline text-zinc-300">Pratap Nagar's Most Popular Fitness Family (52+ Google Reviews)</span>
            <span className="sm:hidden text-zinc-300">52+ Verified Google Reviews</span>
          </div>
          <div className="flex items-center gap-4 text-xs font-medium">
            <a
              href={`tel:${GYM_CONTACT.phoneRaw}`}
              className="hover:text-red-400 transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-red-500" />
              <span>{GYM_CONTACT.phone}</span>
            </a>
            <span className="text-zinc-600 hidden md:inline">|</span>
            <span className="hidden md:flex items-center gap-1 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Open Daily · Haldighati Rd
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-40 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center text-white shadow-lg shadow-red-900/30 group-hover:scale-105 transition-transform border border-red-500/40">
              <Dumbbell className="w-5 h-5 text-white transform -rotate-12 group-hover:rotate-0 transition-transform" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-white font-sans">
                  JAIPUR <span className="text-red-500">GYM</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider text-red-400 bg-red-950/80 border border-red-800/60 px-1.5 py-0.2 rounded">
                  Haldighati Rd
                </span>
              </div>
              <p className="text-[10px] text-zinc-400 font-medium tracking-tight">
                Top Equipment · Supportive Family · Free Personal Guidance
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-zinc-300">
            <button
              onClick={() => scrollToSection('why-jaipur-gym')}
              className="hover:text-red-400 transition-colors py-1"
            >
              Why Jaipur Gym
            </button>
            <button
              onClick={() => scrollToSection('about-coach')}
              className="hover:text-red-400 transition-colors py-1"
            >
              Coach Manish
            </button>
            <button
              onClick={() => scrollToSection('programs')}
              className="hover:text-red-400 transition-colors py-1"
            >
              Workout Programs
            </button>
            <button
              onClick={() => scrollToSection('facility')}
              className="hover:text-red-400 transition-colors py-1"
            >
              Facility & Machines
            </button>
            <button
              onClick={() => scrollToSection('community')}
              className="hover:text-red-400 transition-colors py-1"
            >
              Our Community
            </button>
            <button
              onClick={() => scrollToSection('reviews')}
              className="hover:text-red-400 transition-colors py-1"
            >
              Reviews (4.8★)
            </button>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={GYM_CONTACT.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800 rounded-lg hover:border-zinc-700 transition-colors"
              title="Directions on Google Maps"
            >
              <MapPin className="w-4 h-4 text-red-500" />
            </a>
            <button
              onClick={onOpenConsultation}
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-semibold text-sm px-4 py-2.5 rounded-lg shadow-md shadow-red-900/20 hover:shadow-red-600/30 transition-all flex items-center gap-2 border border-red-500/30"
            >
              <Phone className="w-4 h-4" />
              <span>Claim Free Day Pass</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenConsultation}
              className="sm:hidden bg-red-600 text-white p-2 rounded-lg text-xs font-semibold"
              title="Call Consultation"
            >
              <Phone className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-200 hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-zinc-950 border-b border-zinc-800 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-200">
            <div className="grid grid-cols-2 gap-2 pb-2 border-b border-zinc-800 text-xs">
              <div className="bg-zinc-900 p-2.5 rounded-lg border border-zinc-800">
                <span className="text-zinc-400 block text-[10px]">Head Coach</span>
                <span className="text-white font-semibold block">{COACH_INFO.name}</span>
              </div>
              <div className="bg-zinc-900 p-2.5 rounded-lg border border-zinc-800">
                <span className="text-zinc-400 block text-[10px]">Location</span>
                <span className="text-white font-semibold block">Haldighati Rd</span>
              </div>
            </div>

            <button
              onClick={() => scrollToSection('why-jaipur-gym')}
              className="w-full text-left py-2.5 px-3 text-zinc-200 hover:bg-zinc-900 rounded-lg text-sm font-medium flex items-center justify-between"
            >
              <span>Why Jaipur Gym</span>
              <span className="text-xs text-red-400 font-mono">01</span>
            </button>
            <button
              onClick={() => scrollToSection('about-coach')}
              className="w-full text-left py-2.5 px-3 text-zinc-200 hover:bg-zinc-900 rounded-lg text-sm font-medium flex items-center justify-between"
            >
              <span>Coach Manish</span>
              <span className="text-xs text-red-400 font-mono">02</span>
            </button>
            <button
              onClick={() => scrollToSection('programs')}
              className="w-full text-left py-2.5 px-3 text-zinc-200 hover:bg-zinc-900 rounded-lg text-sm font-medium flex items-center justify-between"
            >
              <span>Workout Programs</span>
              <span className="text-xs text-red-400 font-mono">03</span>
            </button>
            <button
              onClick={() => scrollToSection('facility')}
              className="w-full text-left py-2.5 px-3 text-zinc-200 hover:bg-zinc-900 rounded-lg text-sm font-medium flex items-center justify-between"
            >
              <span>Facility & Equipment</span>
              <span className="text-xs text-red-400 font-mono">04</span>
            </button>
            <button
              onClick={() => scrollToSection('community')}
              className="w-full text-left py-2.5 px-3 text-zinc-200 hover:bg-zinc-900 rounded-lg text-sm font-medium flex items-center justify-between"
            >
              <span>Our Fitness Family</span>
              <span className="text-xs text-red-400 font-mono">05</span>
            </button>
            <button
              onClick={() => scrollToSection('reviews')}
              className="w-full text-left py-2.5 px-3 text-zinc-200 hover:bg-zinc-900 rounded-lg text-sm font-medium flex items-center justify-between"
            >
              <span>Reviews (4.8★)</span>
              <span className="text-xs text-red-400 font-mono">06</span>
            </button>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-red-900/40"
              >
                <Phone className="w-4 h-4" />
                <span>Call Coach Manish — {GYM_CONTACT.phone}</span>
              </button>
              <a
                href={GYM_CONTACT.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-medium py-2.5 rounded-xl border border-zinc-800 flex items-center justify-center gap-2 text-sm"
              >
                <MapPin className="w-4 h-4 text-red-500" />
                <span>Directions to Haldighati Rd</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
