import React from 'react';
import { Phone, MapPin, Star, Dumbbell, HeartPulse } from 'lucide-react';
import { GYM_CONTACT, COACH_INFO } from '../data/gymData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 text-zinc-400 text-xs border-t border-zinc-800/80 pt-16 pb-24 lg:pb-12">
      
      {/* Schema.org LocalBusiness Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HealthClub",
            "name": GYM_CONTACT.name,
            "description": "Pratap Nagar's 4.8★ rated gym featuring top-class strength equipment, hygienic environment, and hands-on guidance from Head Coach Manish.",
            "telephone": GYM_CONTACT.phone,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "83/143, Main, Haldighati Rd",
              "addressLocality": "Pratap Nagar, Jaipur",
              "addressRegion": "Rajasthan",
              "postalCode": "302033",
              "addressCountry": "IN"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "52"
            },
            "openingHours": "Mo-Su 05:30-21:30"
          })
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-red-600 flex items-center justify-center text-white shadow-md">
                <Dumbbell className="w-5 h-5" />
              </div>
              <div>
                <span className="font-extrabold text-lg text-white tracking-tight">
                  JAIPUR <span className="text-red-500">GYM</span>
                </span>
                <p className="text-[10px] text-zinc-400 font-medium">{GYM_CONTACT.brandLine}</p>
              </div>
            </div>

            <p className="text-zinc-400 leading-relaxed max-w-sm">
              Pratap Nagar's premier fitness center on Haldighati Road. Featuring top-class strength machines, a spotless hygienic space, and daily personal coaching from {COACH_INFO.name}.
            </p>

            <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-lg text-amber-400 font-bold">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>4.8 / 5.0 (52+ Google Reviews)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#why-jaipur-gym" className="hover:text-red-400 transition-colors">Why Jaipur Gym</a></li>
              <li><a href="#about-coach" className="hover:text-red-400 transition-colors">Coach Manish</a></li>
              <li><a href="#programs" className="hover:text-red-400 transition-colors">Workout Programs</a></li>
              <li><a href="#facility" className="hover:text-red-400 transition-colors">Facility & Machines</a></li>
              <li><a href="#community" className="hover:text-red-400 transition-colors">Our Community</a></li>
              <li><a href="#reviews" className="hover:text-red-400 transition-colors">Google Reviews (4.8★)</a></li>
            </ul>
          </div>

          {/* Location & NAP */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm">Location (Pratap Nagar)</h4>
            <div className="space-y-2 leading-relaxed text-zinc-400">
              <p className="flex items-start gap-1.5">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>83/143, Main, Haldighati Rd, Pratap Nagar, Jaipur, Rajasthan 302033</span>
              </p>
              <p className="flex items-center gap-1.5 pt-1">
                <Phone className="w-4 h-4 text-red-500 shrink-0" />
                <a href={`tel:${GYM_CONTACT.phoneRaw}`} className="font-mono text-zinc-200 font-bold hover:text-red-400">
                  {GYM_CONTACT.phone}
                </a>
              </p>
            </div>
          </div>

          {/* Operating Hours */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm">Timings</h4>
            <div className="space-y-1 font-mono text-zinc-400">
              <p className="text-emerald-400 font-bold">{GYM_CONTACT.hours}</p>
              <p>Morning: 5:30 AM – 10:30 AM</p>
              <p>Evening: 4:30 PM – 9:30 PM</p>
            </div>
          </div>

        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <p>© {new Date().getFullYear()} Jaipur Gym, Haldighati Road. Founded & Led by {COACH_INFO.name}.</p>
          <p className="flex items-center gap-1 text-zinc-400">
            <HeartPulse className="w-3.5 h-3.5 text-red-500" />
            <span>Built for Pratap Nagar, Haldighati Road, Jaipur</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
