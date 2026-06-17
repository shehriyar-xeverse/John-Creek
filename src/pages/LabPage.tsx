/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building, ShieldCheck, Heart, Award, Star, 
  MapPin, Phone, Mail, ClipboardCheck, ArrowRight,
  Sparkles, CheckCircle2, ChevronRight, Stethoscope, Activity 
} from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { IMAGES } from '../data/clinicData';

export default function LabPage() {
  const [activeTab, setActiveTab] = useState<'blood' | 'urine' | 'parasite'>('blood');

  const labDetails = {
    blood: {
      title: 'In-House Blood Biochemistry & CBC Analysis',
      desc: 'We utilize advanced IDEXX Catalyst biochemistry and ProCyte complete blood count analysers right inside our main clinic. This eliminates off-site specimen dispatch delays, giving our veterinarians absolute index indicators for critical electrolytes, white blood cells, liver enzymes, and renal indexes in under 15 minutes.',
      highlights: ['Complete blood count results within 15 minutes', 'Diabetes insulin diagnostic checkups', 'Pre-anesthetic evaluation panel readiness', 'Organ function baseline tracking']
    },
    urine: {
      title: 'Detailed Urinalysis Diagnostic Screens',
      desc: 'Urinalysis represents a critical window into your pet\'s endocrine, kidney, and urinary health levels. We perform specialized biochemical microscopic checks to detect crystals, cellular proteins, blood presence, or hidden bacterial colonies right during your appointment.',
      highlights: ['Kidney filtration index analysis', 'Biochemical crystal and pH profiling', 'UTI bacterial screening logs', 'Metabolic diabetes markers checking']
    },
    parasite: {
      title: 'Comprehensive Parasite Diagnostic Screens',
      desc: 'Protect against continuous unseen environmental contaminants. Our microscopic vector screens capture fecal micro-specimens to isolate roundworms, hookworms, giardia, and heartworm antigens before damage arises.',
      highlights: ['Microscopic fecal centrifugation analysis', 'Heartworm antigen blood assays', 'Tick-borne disease (Lyme, Anaplasma) screens', 'Zoonotic contamination safety profiling']
    }
  };

  return (
    <PageTransition>
      {/* Page Header */}
      <section className="pt-28 pb-12 bg-[#FAF8F5] border-b border-[#E8E1D8]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <span className="text-xs font-bold tracking-[0.25em] text-[#C9A66B] uppercase block mb-2">Hospital Science Center</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2E2A26] tracking-tight">
            Our Advanced In-House Veterinary Lab
          </h1>
          <p className="text-sm text-[#6F665C] mt-2 max-w-2xl leading-relaxed">
            Eliminating shipping delays. Our fully integrated advanced laboratory suite returns critical blood, stool, and urinary data in minutes.
          </p>
        </div>
      </section>

      {/* Main Core Section */}
      <section className="py-12 bg-white flex-1 animate-fadeIn">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          
          {/* Animated/Interactive Tab layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-6">
            
            {/* Left Column: Interactive Tab selection */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              
              {/* Tab headers switcher */}
              <div className="flex bg-[#FAF8F5] border border-[#E8E1D8] p-1.5 rounded-2xl gap-2">
                <button
                  onClick={() => setActiveTab('blood')}
                  className={`flex-1 py-3 px-4 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                    activeTab === 'blood' 
                      ? 'bg-[#8B7355] text-white shadow-sm' 
                      : 'text-[#6F665C] hover:text-[#2E2A26] hover:bg-white/50'
                  }`}
                >
                  Blood Analysis
                </button>
                <button
                  onClick={() => setActiveTab('urine')}
                  className={`flex-1 py-3 px-4 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                    activeTab === 'urine' 
                      ? 'bg-[#8B7355] text-white shadow-sm' 
                      : 'text-[#6F665C] hover:text-[#2E2A26] hover:bg-white/50'
                  }`}
                >
                  Urinalysis
                </button>
                <button
                  onClick={() => setActiveTab('parasite')}
                  className={`flex-1 py-3 px-4 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                    activeTab === 'parasite' 
                      ? 'bg-[#8B7355] text-white shadow-sm' 
                      : 'text-[#6F665C] hover:text-[#2E2A26] hover:bg-white/50'
                  }`}
                >
                  Parasite Testing
                </button>
              </div>

              {/* Tab Display Panel */}
              <div className="bg-white border border-[#E8E1D8] rounded-2xl p-6.5 min-h-[320px] flex flex-col justify-between shadow-2xs">
                <div className="flex flex-col gap-4">
                  <span className="text-[10px] uppercase font-bold text-[#C9A66B] tracking-wider font-mono">Diagnostics Scope</span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2E2A26]">
                    {labDetails[activeTab].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6F665C] leading-relaxed">
                    {labDetails[activeTab].desc}
                  </p>
                </div>

                <div className="mt-8">
                  <h4 className="text-xs font-bold text-[#2E2A26] mb-3 uppercase tracking-wider">Lab Capabilities:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {labDetails[activeTab].highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#6F665C]">
                        <CheckCircle2 className="w-4 h-4 text-[#8B7355] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Statistics panel */}
            <div className="lg:col-span-4 bg-[#F7F4EF] border border-[#E8E1D8] rounded-2xl p-6.5 space-y-6">
              <h3 className="font-serif text-lg font-bold text-[#2E2A26] pb-3 border-b border-[#E8E1D8]">
                Diagnostic Analytics
              </h3>

              {/* Stat 1: Time */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 border border-[#E8E1D8]">
                  <Activity className="w-5 h-5 text-[#8B7355]" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#6F665C] block">CBC Screen Result Duration</span>
                  <span className="font-serif text-2xl font-bold text-[#8B7355] mt-0.5 block">&lt; 15 Minutes</span>
                </div>
              </div>

              {/* Stat 2: Accuracy */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 border border-[#E8E1D8]">
                  <ShieldCheck className="w-5 h-5 text-[#8B7355]" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#6F665C] block">Machinery Verification Accuracy</span>
                  <span className="font-serif text-2xl font-bold text-[#8B7355] mt-0.5 block">99.8% Perfect</span>
                </div>
              </div>

              {/* Stat 3: Volume */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 border border-[#E8E1D8]">
                  <Star className="w-5 h-5 text-[#8B7355]" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#6F665C] block">Total Micro-Specs Evaluated</span>
                  <span className="font-serif text-2xl font-bold text-[#8B7355] mt-0.5 block">12,000+ Tests</span>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E8E1D8]">
                <p className="text-[11px] text-[#6F665C] leading-relaxed">
                  Our hospital utilizes standardized multi-point controls and weekly testing calibration sequences to guard diagnostic integrity against software drift.
                </p>
                <div className="mt-4 flex flex-col gap-2">
                  <Link to="/contact" className="px-5 py-3 bg-[#2E2A26] hover:bg-[#8B7355] text-white text-xs font-bold rounded-lg text-center cursor-pointer">
                    Book Diagnostic Checkup
                  </Link>
                </div>
              </div>
            </div>

          </div>

          {/* Quick equipment gallery overview */}
          <div className="mt-16 bg-[#FAF8F5] border border-[#E8E1D8] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 justify-between">
            <div className="max-w-xl">
              <h4 className="font-serif text-lg font-bold text-[#2E2A26]">Fully Integrated IDEXX Suite Network</h4>
              <p className="text-xs text-[#6F665C] mt-1 leading-relaxed">
                All laboratory output syncs automatically to your pet\'s permanent medical file. These instant updates are integrated into our central cloud database so off-duty vets can evaluate crisis trajectories instantly should emergency complications occur.
              </p>
            </div>
            <div className="flex shrink-0 gap-2">
              <span className="px-3.5 py-1.5 bg-white border border-[#E8E1D8] text-[10.5px] font-bold text-[#8B7355] rounded-full uppercase">Georgia Licensed Lab</span>
              <span className="px-3.5 py-1.5 bg-white border border-[#E8E1D8] text-[10.5px] font-bold text-[#8B7355] rounded-full uppercase">IDEXX Calibrated</span>
            </div>
          </div>

        </div>
      </section>
    </PageTransition>
  );
}
