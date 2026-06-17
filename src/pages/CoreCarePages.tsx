/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Stethoscope, ShieldAlert, Sparkles, AlertCircle, Heart, 
  Activity, Scissors, Building, Flame, CheckCircle2, 
  ArrowRight, Phone, Clock, PlusCircle
} from 'lucide-react';
import { motion } from 'motion/react';
import PageTransition from '../components/PageTransition';
import { SERVICES, IMAGES } from '../data/clinicData';

// Shared Layout Header for Core Care
function ServicePageLayout({ 
  serviceId, 
  badge, 
  children 
}: { 
  serviceId: string; 
  badge: string; 
  children?: React.ReactNode 
}) {
  const service = SERVICES.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="pt-28 pb-10 text-center animate-fadeIn">
        <h1 className="font-serif text-2xl text-[#2E2A26]">Service Not Found</h1>
        <Link to="/" className="text-xs text-[#8B7355] underline">Back to Home</Link>
      </div>
    );
  }

  // Map string icon back to Lucide components
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Stethoscope': return <Stethoscope className="w-12 h-12 text-[#8B7355]" />;
      case 'ShieldAlert': return <ShieldAlert className="w-12 h-12 text-[#8B7355]" />;
      case 'Rabbit': return <Heart className="w-12 h-12 text-[#8B7355] fill-[#C9A66B]/20" />;
      case 'Sparkles': return <Sparkles className="w-12 h-12 text-[#8B7355]" />;
      case 'Heart': return <Heart className="w-12 h-12 text-[#8B7355]" />;
      case 'Activity': return <Activity className="w-12 h-12 text-[#8B7355]" />;
      case 'Scissors': return <Scissors className="w-12 h-12 text-[#8B7355]" />;
      case 'Building': return <Building className="w-12 h-12 text-[#8B7355]" />;
      case 'Flame': return <Flame className="w-12 h-12 text-[#8B7355]" />;
      default: return <Stethoscope className="w-12 h-12 text-[#8B7355]" />;
    }
  };

  return (
    <PageTransition>
      {/* 1. Header Section */}
      <section className="pt-28 pb-12 bg-[#FAF8F5] border-b border-[#E8E1D8]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-bold tracking-[0.25em] text-[#C9A66B] uppercase block mb-2">Core Care Specialties | {badge}</span>
              <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#2E2A26] tracking-tight">{service.title}</h1>
              <p className="text-sm text-[#6F665C] mt-2 leading-relaxed max-w-xl">{service.description}</p>
            </div>
            <div className="w-20 h-20 bg-white border border-[#E8E1D8] rounded-2xl flex items-center justify-center shadow-2xs shrink-0 self-start sm:self-center">
              {getIcon(service.icon)}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Detailed Inclusions section */}
      <section className="py-12 bg-white flex-1">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Content details */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="relative rounded-2xl overflow-hidden h-72 border border-[#E8E1D8]">
                <img 
                  src={service.imageUrl} 
                  className="w-full h-full object-cover" 
                  alt={service.title}
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="mt-2">
                <h2 className="font-serif text-2xl font-bold text-[#2E2A26] mb-4">What Happens during this procedure?</h2>
                <div className="flex flex-col gap-3.5 text-xs sm:text-sm text-[#6F665C] leading-relaxed">
                  <p>
                    Every medical session at Johns Creek Veterinary Clinic begins with a quiet, patient observation period to let your dog or cat adapt to the suite environment. We believe that clinical pacing shapes diagnostics. Our staff conducts an unhurried check and reviews your pet\'s historical metrics block.
                  </p>
                  <p>
                    From there, we carry out customized diagnostic evaluations tailored specifically to their species, development age, and overall risk levels.
                  </p>
                </div>
              </div>

              {children}
            </div>

            {/* Right Action Widgets */}
            <div className="lg:col-span-5 flex flex-col gap-6 sticky top-24">
              
              {/* Checklists box */}
              <div className="bg-[#FAF8F5] border border-[#E8E1D8] p-6 sm:p-8 rounded-2xl flex flex-col justify-between h-full">
                <div>
                  <h3 className="font-serif text-[17px] font-bold text-[#2E2A26] mb-4">Diagnostic Key Highlights</h3>
                  <ul className="flex flex-col gap-3 text-xs text-[#6F665C]">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#8B7355] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-[#E8E1D8]">
                  <span className="text-[10px] text-[#A68A64] font-bold tracking-widest uppercase block mb-1">Clinic Supervised</span>
                  <p className="text-[11.5px] text-[#6F665C] leading-snug">All diagnostics are signed off by Dr. Evelyn Kim or Lead Exotics Doctor Marcus Vance.</p>
                </div>
              </div>

              {/* Call box */}
              <div className="bg-[#F7F4EF] border border-[#E8E1D8] rounded-2xl p-6 flex flex-col gap-4 text-center">
                <h4 className="font-serif text-base font-bold text-[#2E2A26]">Need to Schedule immediately?</h4>
                <p className="text-xs text-[#6F665C]">Book online or dial our Johns Creek medical desk extension directly.</p>
                <div className="flex flex-col gap-2 mt-2">
                  <Link to="/contact" className="px-5 py-3 bg-[#8B7355] hover:bg-[#A68A64] text-white text-xs font-bold rounded-lg transition-colors cursor-pointer block">
                    Book Session Online
                  </Link>
                  <a href="tel:7706238387" className="text-xs font-bold text-[#8B7355] flex items-center justify-center gap-1.5 hover:underline py-1.5 cursor-pointer">
                    <Phone className="w-4 h-4 text-[#C9A66B]" /> (770) 623-8387
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </PageTransition>
  );
}

// 1. ROUTINE EXAMS
export function RoutineExams() {
  return (
    <ServicePageLayout serviceId="routine-exams" badge="Preventive Care">
      <div className="mt-6 border-t border-[#FAF8F5] pt-6">
        <h3 className="font-serif text-[17px] font-bold text-[#2E2A26] mb-3">Our Comprehensive Head-to-Tail Approach</h3>
        <p className="text-xs sm:text-sm text-[#6F665C] leading-relaxed">
          Dr. Kim and our technicians evaluate cardiac index values, lung resonance, lymph node responses, joint mobility parameters, and dental wear. We compile healthy active baselines to reference across future senior developmental cycles.
        </p>
      </div>
    </ServicePageLayout>
  );
}

// 2. VACCINATIONS & PREVENTION
export function Vaccinations() {
  return (
    <ServicePageLayout serviceId="vaccinations" badge="Animal Shield">
      <div className="mt-6 border-t border-[#FAF8F5] pt-6">
        <h3 className="font-serif text-[17px] font-bold text-[#2E2A26] mb-3">Customized Lifetime Booster Schedules</h3>
        <p className="text-xs sm:text-sm text-[#6F665C] leading-relaxed">
          Not all pets face identical environmental biological exposures. We map vaccine regimens based on boarding habits, park visits, exotic encounters, and daily walks, ensuring robust defense without unnecessary medical administration.
        </p>
      </div>
    </ServicePageLayout>
  );
}

// 3. EXOTIC PETS
export function ExoticPets() {
  return (
    <ServicePageLayout serviceId="exotic-pets" badge="Exotics Lead">
      <div className="mt-6 border-t border-[#FAF8F5] pt-6 flex flex-col gap-4">
        <h3 className="font-serif text-[17px] font-bold text-[#2E2A26] mb-1">Rabbits, Ferrets & Pocket Mammals Specialist</h3>
        <p className="text-xs sm:text-sm text-[#6F665C] leading-relaxed">
          Led by Senior Vet Dr. Marcus Vance, we understand the delicate gastrointestinal dynamics of exotic pocket mammals. We provide customized feeding blueprints, teeth clip services, companion spay/neuters, and species-correct husbandry consultations.
        </p>
        <div className="p-4 bg-[#FAF8F5]/60 border border-[#E8E1D8] rounded-xl flex gap-2.5">
          <AlertCircle className="w-5 h-5 text-[#C9A66B] shrink-0 mt-0.5" />
          <span className="text-xs text-[#6F665C]">Exotics require specialized, separate, diagnostic rooms and calming isolation zones away from noisy canine bark units.</span>
        </div>
      </div>
    </ServicePageLayout>
  );
}

// 4. DENTAL CARE
export function DentalCare() {
  return (
    <ServicePageLayout serviceId="dental-care" badge="Oral Surgery">
      <div className="mt-6 border-t border-[#FAF8F5] pt-6">
        <h3 className="font-serif text-[17px] font-bold text-[#2E2A26] mb-3">Scale, Polish & Periodontal Charting</h3>
        <p className="text-xs sm:text-sm text-[#6F665C] leading-relaxed">
          Periodontal disease is the most common under-diagnosed source of chronic pain in dogs and cats. Plaque releases continuous bacteria loads into bloodstreams, causing potential cardiac valve infection. We scalp plaque, polish crowns, and extract compromised roots under secure anesthesia logs.
        </p>
      </div>
    </ServicePageLayout>
  );
}

// 5. GERIATIC CARE
export function GeriatricCare() {
  return (
    <ServicePageLayout serviceId="geriatric-care" badge="Senior Longevity">
      <div className="mt-6 border-t border-[#FAF8F5] pt-6">
        <h3 className="font-serif text-[17px] font-bold text-[#2E2A26] mb-3">Pain Management & Mobility Protocols</h3>
        <p className="text-xs sm:text-sm text-[#6F665C] leading-relaxed">
          For pets over 7 years old, we prioritize structural mobility, joint lubrication (cartilage supports), liver/kidney indexing, and neurological ease. Let us help design your house environment to alleviate joint stress.
        </p>
      </div>
    </ServicePageLayout>
  );
}

// 6. INTERNAL MEDICINE
export function InternalMedicine() {
  return (
    <ServicePageLayout serviceId="internal-medicine" badge="Advanced Diagnostics">
      <div className="mt-6 border-t border-[#FAF8F5] pt-6">
        <h3 className="font-serif text-[17px] font-bold text-[#2E2A26] mb-3">Endocrine & Metabolic Chronic Management</h3>
        <p className="text-xs sm:text-sm text-[#6F665C] leading-relaxed">
          We identify and manage complex autoimmune disorders, kidney disease trajectories, thyroid shifts, and diabetes index loops. We support your routines with digital ultrasound diagnostics and prompt lab results.
        </p>
      </div>
    </ServicePageLayout>
  );
}

// 7. PET GROOMING
export function PetGrooming() {
  return (
    <ServicePageLayout serviceId="grooming" badge="Wellness Spa">
      <div className="mt-6 border-t border-[#FAF8F5] pt-6">
        <h3 className="font-serif text-[17px] font-bold text-[#2E2A26] mb-3">Therapeutic Washing & Breed Standards</h3>
        <p className="text-xs sm:text-sm text-[#6F665C] leading-relaxed">
          Our specialized groomer Jenkins manages calming spas, skin soothing rinses for severe allergen flare-ups, secure nail filing, sanitary clips, and ear cleansing. All groomed pets receive basic clinical coat reviews.
        </p>
      </div>
    </ServicePageLayout>
  );
}

// 8. PET BOARDING
export function PetBoarding() {
  return (
    <ServicePageLayout serviceId="boarding" badge="Physician Lodging">
      <div className="mt-6 border-t border-[#FAF8F5] pt-6">
        <h3 className="font-serif text-[17px] font-bold text-[#2E2A26] mb-3">Peace of Mind with On-Duty Medical Superiors</h3>
        <p className="text-xs sm:text-sm text-[#6F665C] leading-relaxed">
          Never leave high-medication, epileptic, diabetic, or geriatric dogs and cats in standard boarding suites. Our hotel is directly linked to the clinical nursing team, ensuring precise medication charting and uncompromised safety.
        </p>
      </div>
    </ServicePageLayout>
  );
}

// 9. EMERGENCY CARE
export function EmergencyCare() {
  return (
    <ServicePageLayout serviceId="emergency-care" badge="Critical Action">
      <div className="mt-6 border-t border-[#FAF8F5] pt-6 flex flex-col gap-4">
        <h3 className="font-serif text-[17px] font-bold text-[#2E2A26] mb-1">Trauma & Acute Illness Support Since 2006</h3>
        <p className="text-xs sm:text-sm text-[#6F665C] leading-relaxed">
          We treat toxic ingestions, acute breathing distress, severe cuts, fracture splints, and insect bites. We operate in-house oxygen generators and trauma bays during normal hospital hours.
        </p>
        <div className="p-4 bg-[#FAF8F5] border-l-4 border-[#8B7355] rounded-r-xl flex gap-3">
          <AlertCircle className="w-5 h-5 text-[#8B7355] shrink-0 mt-0.5" />
          <div className="text-xs text-[#6F665C]">
            <strong>After-Hours Emergencies:</strong> For midnight crisises beyond Saturday hours, dial our hotline to divert automatically of nearby 24-Hour emergency referral clinics.
          </div>
        </div>
      </div>
    </ServicePageLayout>
  );
}
