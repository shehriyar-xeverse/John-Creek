/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { MapPin, Navigation, Compass, Star, Footprints, Info } from 'lucide-react';
import { motion } from 'motion/react';

export default function InteractiveMap() {
  const [selectedPin, setSelectedPin] = useState<'clinic' | 'park' | 'bridge'>('clinic');

  const locations = {
    clinic: {
      name: 'Johns Creek Veterinary Clinic',
      desc: '10540 Medlock Bridge Rd. Premium full-service pet hospital, dental, and surgery center.',
      notable: 'Open Monday–Saturday. Emergency intakes active.',
      coords: '34.0537° N, 84.1952° W',
    },
    park: {
      name: 'Newtown Park & Dog Field',
      desc: 'Local premier dog recreation park. We partner for local safety awareness and senior pet exercises.',
      notable: '2.4 miles Northwest of our main facility.',
      coords: '34.0689° N, 84.2215° W',
    },
    bridge: {
      name: 'Medlock Bridge Preserve',
      desc: 'Scenic walking paths and quiet trails. Recommended for low-stress feline and canine rehabilitation.',
      notable: '1.1 miles East of our clinic suites.',
      coords: '34.0485° N, 84.1802° W',
    },
  };

  return (
    <div className="bg-[#F7F4EF] rounded-2xl p-6 border border-[#E8E1D8] shadow-sm flex flex-col lg:flex-row gap-6 relative overflow-hidden">
      
      {/* Decorative luxury coordinates background label */}
      <div className="absolute top-4 right-4 text-[10px] font-mono tracking-widest text-[#A68A64]/40 select-none hidden sm:block">
        GRID LOC: JCV-30097
      </div>

      {/* Vector Canvas (Map Visualization) */}
      <div className="flex-1 min-h-[280px] bg-white rounded-xl border border-[#E8E1D8] relative overflow-hidden group">
        
        {/* Subtle grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#FAF8F5_1px,transparent_1px),linear-gradient(to_bottom,#FAF8F5_1px,transparent_1px)] bg-[size:24px_24px] opacity-70" />
        
        {/* Abstract golden roads (Veterinary Luxury branding style) */}
        <svg viewBox="0 0 400 300" className="absolute inset-0 w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
          {/* Medlock Bridge Road */}
          <path d="M-50 250 L450 50" stroke="#E8E1D8" strokeWidth="24" fill="none" strokeLinecap="round" />
          <path d="M-50 250 L450 50" stroke="#FAF8F5" strokeWidth="6" strokeDasharray="6 4" fill="none" strokeLinecap="round" />
          
          {/* State Bridge Road */}
          <path d="M120 -50 L320 350" stroke="#E8E1D8" strokeWidth="16" fill="none" strokeLinecap="round" />
          
          {/* Minor local trails */}
          <path d="M 50 50 Q 150 150 350 120" stroke="#C9A66B" strokeWidth="3" fill="none" opacity="0.35" strokeDasharray="4 4" />
          <path d="M 200 250 Q 80 180 40 290" stroke="#8B7355" strokeWidth="2" fill="none" opacity="0.25" />
          
          {/* Newtown park area container */}
          <rect x="40" y="30" width="80" height="60" rx="12" fill="#F7F4EF" stroke="#E8E1D8" strokeWidth="1.5" opacity="0.8" />
        </svg>

        {/* Dynamic Markers */}
        {/* Landmark 1: Newtown Park */}
        <button
          onClick={() => setSelectedPin('park')}
          className="absolute left-[80px] top-[60px] group/pin focus:outline-none cursor-pointer"
          style={{ transform: 'translate(-50%, -50%)' }}
        >
          <div className="flex items-center gap-1.5 bg-white border border-[#E8E1D8] px-2 py-1 rounded-md shadow-xs text-[10px] font-bold text-[#6F665C] group-hover/pin:text-[#8B7355] transition-colors">
            <Footprints className="w-3.5 h-3.5 text-[#C9A66B]" />
            Newtown Park
          </div>
          {/* Marker dot */}
          <div className="w-3.5 h-3.5 bg-[#C9A66B] rounded-full border-2 border-white shadow-xs mx-auto mt-1 group-hover/pin:scale-125 transition-transform" />
        </button>

        {/* Landmark 2: Clinic Location (Primary Gold Ring Pulse) */}
        <button
          onClick={() => setSelectedPin('clinic')}
          className="absolute left-[240px] top-[150px] group/pin focus:outline-none cursor-pointer"
          style={{ transform: 'translate(-50%, -50%)' }}
        >
          <div className="bg-[#8B7355] text-white border border-[#FAF8F5] px-2.5 py-1.5 rounded-lg shadow-md text-[11px] font-bold flex items-center gap-1.5 relative overflow-hidden">
            <MapPin className="w-3.5 h-3.5 text-[#C9A66B] fill-[#C9A66B]" />
            JCV Clinic Hub
          </div>
          {/* Heart Beat Pulse rings for JCV Clinic */}
          <div className="relative w-8 h-8 mx-auto mt-1 flex items-center justify-center">
            <div className="absolute w-6 h-6 bg-[#8B7355]/30 rounded-full animate-ping" />
            <div className="w-4 h-4 bg-[#8B7355] rounded-full border-2 border-white shadow-md group-hover/pin:scale-130 transition-transform" />
          </div>
        </button>

        {/* Landmark 3: Medlock Bridge Preserve */}
        <button
          onClick={() => setSelectedPin('bridge')}
          className="absolute left-[330px] top-[90px] group/pin focus:outline-none cursor-pointer"
          style={{ transform: 'translate(-50%, -50%)' }}
        >
          <div className="flex items-center gap-1.5 bg-white border border-[#E8E1D8] px-2 py-1 rounded-md shadow-xs text-[10px] font-bold text-[#6F665C] group-hover/pin:text-[#8B7355] transition-colors">
            <Compass className="w-3.5 h-3.5 text-[#A68A64]" />
            Bridge Preserve
          </div>
          <div className="w-3.5 h-3.5 bg-[#A68A64] rounded-full border-2 border-white shadow-xs mx-auto mt-1 group-hover/pin:scale-125 transition-transform" />
        </button>

        {/* Overlay Navigation Hint */}
        <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1.5 rounded-lg border border-[#E8E1D8] text-[10px] text-[#6F665C] flex items-center gap-1.5 pointer-events-none shadow-xs">
          <Info className="w-3 h-3 text-[#C9A66B]" />
          <span>Click map location points to navigate details</span>
        </div>
      </div>

      {/* Info Detail Sidebar Panel */}
      <div className="w-full lg:w-[280px] flex flex-col justify-between pt-2">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 border-b border-[#E8E1D8] pb-3 mb-1">
            <Navigation className="w-5 h-5 text-[#8B7355]" />
            <h4 className="font-serif text-lg font-bold text-[#2E2A26] leading-none">
              Interactive Locator
            </h4>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-mono tracking-widest text-[#A68A64] uppercase font-bold">
              Current Target Info:
            </span>
            <div className="bg-white border border-[#E8E1D8] rounded-xl p-4 shadow-2xs">
              <h5 className="font-serif text-[15px] font-bold text-[#2E2A26] pb-1 border-b border-[#FAF8F5]">
                {locations[selectedPin].name}
              </h5>
              <p className="text-xs text-[#6F665C] mt-2 leading-relaxed">
                {locations[selectedPin].desc}
              </p>
              <p className="text-xs font-medium text-[#8B7355] mt-2 italic">
                {locations[selectedPin].notable}
              </p>
            </div>
          </div>
        </div>

        {/* Footer Coordinate panel */}
        <div className="mt-6 pt-4 border-t border-[#E8E1D8] flex items-center justify-between text-[11px] text-[#6F665C]">
          <span className="font-mono">{locations[selectedPin].coords}</span>
          <div className="flex items-center gap-1 text-[#C9A66B] font-bold">
            <Star className="w-3 h-3 fill-[#C9A66B]" />
            <span>5.0 Vet Rating</span>
          </div>
        </div>

      </div>
    </div>
  );
}
