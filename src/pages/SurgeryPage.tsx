/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, Heart, Sparkles, Activity, Clock, 
  Check, Phone, ArrowRight, CornerDownRight 
} from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { IMAGES } from '../data/clinicData';

export default function SurgeryPage() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      title: 'Phase 1: Pre-Surgical Diagnostic Baseline',
      desc: 'We carry out full biochemistry blood analysis panels under 2 hours prior to anesthesia induction to detect hidden renal or hepatic filtration shifts. An IV catheter is safely secured for immediate continuous medicine delivery.',
      detail: 'Includes CBC panel, liver index validation, baseline hydration adjustment, & temperature stabilization.'
    },
    {
      title: 'Phase 2: Monitored General Anesthesia Sequence',
      desc: 'We utilize safe standard gas vaporizers tailored continuously to body mass indices. Our dedicated Vet Tech acts as a patient advocate, cataloging cardiac waveform baseline, body temperature, respiratory depth, and blood pressure maps every 5 minutes.',
      detail: 'Anesthetic heat blankets prevent trauma shock, maintaining a cozy state throughout the session.'
    },
    {
      title: 'Phase 3: The Sterile Procedure & Auto-Autoclape Care',
      desc: 'Chief Doctor Evelyn Kim or Marcus Vance performs the soft tissue adjustment or orthopedic restoration in our certified sterile threatre. All surgical tools undergo advanced sterilizer checks prior to initial contact.',
      detail: 'Soft tissue incisions are sealed with rapid-healing suture techniques to alleviate scratching post-discharge.'
    },
    {
      title: 'Phase 4: Compassionate Recovery Monitoring',
      desc: 'Your companion is moved to climate-controlled recovery suites immediately adjacent to our main station. We monitor swallowing reflexes and administer detailed multi-mode pain alleviation therapies until they walk comfortably.',
      detail: 'Families receive typed discharge instructions, pain medicines, and direct access hotline details.'
    }
  ];

  return (
    <PageTransition>
      {/* Page Header */}
      <section className="pt-28 pb-12 bg-[#FAF8F5] border-b border-[#E8E1D8]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <span className="text-xs font-bold tracking-[0.25em] text-[#C9A66B] uppercase block mb-2">Hospital Specialty</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2E2A26] tracking-tight">
            Veterinary Surgery in Johns Creek
          </h1>
          <p className="text-sm text-[#6F665C] mt-2 max-w-2xl leading-relaxed">
            From elective neuters and advanced orthopedic repairs to urgent emergency block removals, our surgical team operates under strict human-grade sterility benchmarks.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white flex-1">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Surgical Specialty descriptions */}
            <div className="lg:col-span-8 flex flex-col gap-8">
              <div className="relative rounded-2xl overflow-hidden h-80 border border-[#E8E1D8]">
                <img 
                  src={IMAGES.surgeryTheatre} 
                  className="w-full h-full object-cover" 
                  alt="Surgical sterile theatre"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                  <span className="text-xs font-mono font-bold text-[#C9A66B] uppercase">JCV Certified Sterile Site</span>
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-[#2E2A26] mb-4">Surgical Specialties</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-5 border border-[#E8E1D8] rounded-xl bg-[#FAF8F5]/50">
                    <h3 className="font-serif text-base font-bold text-[#2E2A26]">Soft Tissue Surgery</h3>
                    <p className="text-xs text-[#6F665C] mt-2 leading-relaxed">
                      Lump extraction, wound tissue repair, foreign object stomach extractions, spleen adjustments, and bladder lithotomy procedures performed under magnifying optics.
                    </p>
                  </div>

                  <div className="p-5 border border-[#E8E1D8] rounded-xl bg-[#FAF8F5]/50">
                    <h3 className="font-serif text-base font-bold text-[#2E2A26]">Orthopedic Procedures</h3>
                    <p className="text-xs text-[#6F665C] mt-2 leading-relaxed">
                      Surgical stabilization of fragile joint ligaments, femur fractures, patella dislocations, and species-specialized exotics skeletal repair.
                    </p>
                  </div>

                  <div className="p-5 border border-[#E8E1D8] rounded-xl bg-[#FAF8F5]/50">
                    <h3 className="font-serif text-base font-bold text-[#2E2A26]">Dental Surgery & Restorations</h3>
                    <p className="text-xs text-[#6F665C] mt-2 leading-relaxed">
                      Extraction of fractured roots, sub-gingival flaps, cyst removals, and oral bone bone-graft therapies with continuous digital mapping.
                    </p>
                  </div>

                  <div className="p-5 border border-[#E8E1D8] rounded-xl bg-[#FAF8F5]/50">
                    <h3 className="font-serif text-base font-bold text-[#2E2A26]">Elective Spay & Neuter</h3>
                    <p className="text-xs text-[#6F665C] mt-2 leading-relaxed">
                      Gentle, small-incision spay and neuter procedures for dogs, cats, and rabbits. We focus intensely on zero-pain, seamless healing processes.
                    </p>
                  </div>
                </div>
              </div>

              {/* Recovery Process Timeline */}
              <div className="pt-6 border-t border-[#FAF8F5]">
                <h2 className="font-serif text-2xl font-bold text-[#2E2A26] mb-2">Our Highly Calibrated Surgical Process</h2>
                <p className="text-xs text-[#6F665C] leading-relaxed mb-6">Click steps to visualize our strict safety benchmarks prior, during, and after surgical procedures.</p>
                
                <div className="flex flex-col gap-4">
                  {steps.map((step, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveStep(idx)}
                      className={`text-left p-5 border rounded-xl transition-all cursor-pointer ${
                        activeStep === idx 
                          ? 'bg-[#F7F4EF] border-[#8B7355] shadow-xs' 
                          : 'bg-white border-[#E8E1D8] hover:bg-[#FAF8F5]/60'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs ${
                          activeStep === idx ? 'bg-[#8B7355] text-white' : 'bg-[#FAF8F5] text-[#2E2A26]'
                        }`}>{idx + 1}</span>
                        <h4 className="font-serif text-sm font-bold text-[#2E2A26]">{step.title}</h4>
                      </div>
                      
                      {activeStep === idx && (
                        <div className="mt-3 pl-8 text-xs text-[#6F665C] leading-relaxed animate-fadeIn">
                          <p className="mb-2">{step.desc}</p>
                          <p className="font-semibold text-[#8B7355] flex items-center gap-1">
                            <CornerDownRight className="w-3.5 h-3.5 text-[#C9A66B]" /> {step.detail}
                          </p>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Action Block */}
            <div className="lg:col-span-4 bg-[#FAF8F5] border border-[#E8E1D8] rounded-2xl p-6 sm:p-8 flex flex-col justify-between sticky top-24">
              <div>
                <span className="text-[10px] font-bold text-[#A68A64] tracking-widest uppercase block mb-1">Clinic Guidelines</span>
                <h3 className="font-serif text-lg font-bold text-[#2E2A26] mb-4">Day of Surgery Advice</h3>
                <ul className="text-xs text-[#6F665C] flex flex-col gap-3 font-medium">
                  <li className="flex items-start gap-2">
                    <Check className="text-[#C9A66B] w-4 h-4 shrink-0 mt-0.5" />
                    <span><strong>Fasting Period:</strong> Do not feed your pet past 10:00 PM on the night prior to anesthesia. Pure water is acceptable.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-[#C9A66B] w-4 h-4 shrink-0 mt-0.5" />
                    <span><strong>Check-in Time:</strong> Outpatient drop-off starts promptly at 08:00 AM. Please allocate 15 minutes for paperwork reviews.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-[#C9A66B] w-4 h-4 shrink-0 mt-0.5" />
                    <span><strong>Pre-Op blood panel:</strong> Signed authorization is required unless baseline panels were completed within 14 days.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 flex flex-col gap-2">
                <Link to="/contact" className="px-5 py-3 bg-[#8B7355] hover:bg-[#A68A64] text-white font-bold text-xs rounded-xl shadow-xs text-center cursor-pointer">
                  Request Surgery Booking Review
                </Link>
                <a href="tel:7706238387" className="text-xs font-bold text-[#8B7355] hover:underline text-center flex items-center justify-center gap-1 mt-2 cursor-pointer">
                  <Phone className="w-3.5 h-3.5 text-[#C9A66B]" /> Contact Surgical Desk
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </PageTransition>
  );
}
