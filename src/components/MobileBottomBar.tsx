import React from 'react';
import { Phone, MapPin } from 'lucide-react';
import { GYM_CONTACT } from '../data/gymData';

export const MobileBottomBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 lg:hidden bg-zinc-950/95 backdrop-blur-md border-t border-zinc-800 p-2.5 shadow-2xl">
      <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
        <a
          href={`tel:${GYM_CONTACT.phoneRaw}`}
          className="bg-gradient-to-r from-red-600 to-red-700 active:from-red-700 active:to-red-800 text-white font-bold py-3 px-3 rounded-xl flex items-center justify-center gap-2 text-xs shadow-lg shadow-red-950/80 border border-red-500/30"
        >
          <Phone className="w-4 h-4 text-white" />
          <span>Call Coach Manish</span>
        </a>

        <a
          href={GYM_CONTACT.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-zinc-900 active:bg-zinc-800 text-zinc-200 font-semibold py-3 px-3 rounded-xl border border-zinc-800 flex items-center justify-center gap-2 text-xs"
        >
          <MapPin className="w-4 h-4 text-red-500" />
          <span>Get Directions</span>
        </a>
      </div>
    </div>
  );
};
