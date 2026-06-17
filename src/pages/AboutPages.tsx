/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building, ShieldCheck, Heart, Award, Star, 
  MapPin, Phone, Mail, ClipboardCheck, ArrowRight,
  Sparkles, CheckCircle2, ChevronRight, Stethoscope
} from 'lucide-react';
import { motion } from 'motion/react';
import PageTransition from '../components/PageTransition';
import { TEAM, TESTIMONIALS, IMAGES } from '../data/clinicData';

// Reusable local Mouse Tilt Handler
const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
  const card = e.currentTarget;
  const box = card.getBoundingClientRect();
  const x = e.clientX - box.left - box.width / 2;
  const y = e.clientY - box.top - box.height / 2;
  card.style.transform = `perspective(1000px) rotateY(${x * 0.04}deg) rotateX(${-y * 0.04}deg) translateY(-6px) scale(1.02)`;
};

const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
  const card = e.currentTarget;
  card.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg) translateY(0px) scale(1)`;
};

// 1. ABOUT OVERVIEW PAGE
export function AboutOverview() {
  return (
    <PageTransition>
      <section className="pt-28 pb-10 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <span className="text-xs font-bold tracking-[0.25em] text-[#C9A66B] uppercase block mb-2">Since 2006</span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#2E2A26] tracking-tight">
            About Johns Creek Veterinary Clinic
          </h1>
          <p className="text-sm text-[#6F665C] mt-2 max-w-2xl">
            Learn about our long-standing hospital heritage, clinical philosophies, and dedication to medical innovation.
          </p>
        </div>
      </section>

      {/* Main Core Content */}
      <section className="py-12 bg-white flex-1">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 flex flex-col gap-6">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2E2A26]">
                Our Clinical Mission & Long Term Vision
              </h2>
              <p className="text-sm text-[#6F665C] leading-relaxed">
                For over two decades, John Creek Veterinary Clinic (originally established in 2006) has delivered unparalleled clinical care to pets in Roswell, Milton, Cumming, and Gwinnett. Our mission rests on four pillars: absolute diagnostic accuracy, compassionate treatment protocols, transparent family communication, and strict clinical sterility.
              </p>
              <p className="text-sm text-[#6F665C] leading-relaxed">
                We design our hospital around a low-stress, soothing sensory experience. Whether treating fragile exotics, energetic puppies, or managing complex chronic profiles for senior cats, we recognize that veterinary visits require deep empathy. We don\'t rush; every patient gains our unhurried focus.
              </p>

              {/* Three Pillars Blocks */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
                <div className="p-4 bg-[#FAF8F5] border border-[#E8E1D8] rounded-xl">
                  <Heart className="w-5 h-5 text-[#8B7355] mb-2" />
                  <span className="text-xs font-bold text-[#2E2A26] block">Unconditional Care</span>
                  <p className="text-[11px] text-[#6F665C] mt-1 leading-snug">Every pet is treated with luxurious care and absolute kindness.</p>
                </div>
                <div className="p-4 bg-[#FAF8F5] border border-[#E8E1D8] rounded-xl">
                  <ShieldCheck className="w-5 h-5 text-[#8B7355] mb-2" />
                  <span className="text-xs font-bold text-[#2E2A26] block">Medical Integrity</span>
                  <p className="text-[11px] text-[#6F665C] mt-1 leading-snug">All procedures map to strict safety standards & accredited codes.</p>
                </div>
                <div className="p-4 bg-[#FAF8F5] border border-[#E8E1D8] rounded-xl">
                  <Award className="w-5 h-5 text-[#8B7355] mb-2" />
                  <span className="text-xs font-bold text-[#2E2A26] block">Proven Heritage</span>
                  <p className="text-[11px] text-[#6F665C] mt-1 leading-snug">Caring for the community for 20+ years under chief vet supervision.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              <div className="absolute inset-4 rounded-2xl border border-[#C9A66B]/20 translate-x-3 translate-y-3 -z-10" />
              <img 
                src={IMAGES.clinicInterior} 
                className="w-full h-[350px] object-cover rounded-2xl border border-[#E8E1D8] shadow-md"
                alt="Clinic heritage hallway"
                referrerPolicy="no-referrer"
              />
            </div>

          </div>

          {/* Quick Stats banner */}
          <div className="mt-16 bg-[#FFFDFB] rounded-2xl p-8 border border-[#E8E1D8] grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#8B7355]">2006</span>
              <span className="text-xs text-[#6F665C] block mt-1 uppercase tracking-wider font-semibold">Established Year</span>
            </div>
            <div>
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#8B7355]">5,000+</span>
              <span className="text-xs text-[#6F665C] block mt-1 uppercase tracking-wider font-semibold">Active Patients</span>
            </div>
            <div>
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#8B7355]">100%</span>
              <span className="text-xs text-[#6F665C] block mt-1 uppercase tracking-wider font-semibold">Sterile Safety</span>
            </div>
            <div>
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#8B7355]">5.0★</span>
              <span className="text-xs text-[#6F665C] block mt-1 uppercase tracking-wider font-semibold">Owner Rating</span>
            </div>
          </div>

        </div>
      </section>
    </PageTransition>
  );
}

// 2. OUR HOSPITAL PAGE
export function OurHospital() {
  return (
    <PageTransition>
      <section className="pt-28 pb-10 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <span className="text-xs font-bold tracking-[0.25em] text-[#C9A66B] uppercase block mb-2">Hospital Tour</span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#2E2A26] tracking-tight">
            Our State-of-the-Art Hospital
          </h1>
          <p className="text-sm text-[#6F665C] mt-2 max-w-2xl">
            Explore our advanced diagnostic imaging suites, modern surgical theatre, and cozy medical boarding suites.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white flex-1 animate-fadeIn">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col gap-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <img 
              src={IMAGES.surgeryTheatre} 
              className="w-full h-[360px] object-cover rounded-2xl border border-[#E8E1D8] shadow-md"
              alt="Sterile surgical theatre JCV"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-bold text-[#C9A66B] tracking-widest uppercase">Precision Technology</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2E2A26]">Accredited Sterile Surgical Suites</h2>
              <p className="text-xs sm:text-sm text-[#6F665C] leading-relaxed">
                Our surgical suites operate under strict clinical air purification codes and heat conservation blankets to prevent shock. We utilize advanced gas anesthesia induction alongside computerized cardiac, respiratory, and blood-oxygen monitoring metrics. Every instrument is sterilized using advanced autoclaping protocols.
              </p>
              <ul className="text-xs text-[#6F665C] flex flex-col gap-1.5 font-semibold mt-2">
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#8B7355]" /> Continuous computerized ECG monitoring</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#8B7355]" /> Active body warmers to block hypothermia</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#8B7355]" /> In-house sterile gas autoclapes</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
            <div className="flex flex-col gap-4 lg:order-last">
              <span className="text-[10px] font-bold text-[#C9A66B] tracking-widest uppercase">Imaging Suite</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2E2A26]">Digital Radiography & Ultrasound</h2>
              <p className="text-xs sm:text-sm text-[#6F665C] leading-relaxed">
                We have eliminated toxic chemical film delays. Our clinical imaging bay relies entirely on high-resolution Digital X-Rays, returning skeletal results in under 60 seconds. Our advanced direct ultrasound system allows Dr. Vance and Dr. Kim to visualize soft organs, bladder health, and cardiac valve movements in real time.
              </p>
              <ul className="text-xs text-[#6F665C] flex flex-col gap-1.5 font-semibold mt-2">
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#8B7355]" /> High-speed low-exposure digital sensors</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#8B7355]" /> Realtime ultrasonic organ diagnostic scans</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#8B7355]" /> Instant digital record files for family sharing</li>
              </ul>
            </div>
            <img 
              src={IMAGES.ultrasoundLab} 
              className="w-full h-[360px] object-cover rounded-2xl border border-[#E8E1D8] shadow-md lg:order-first"
              alt="High-speed diagnostic suite JCV"
              referrerPolicy="no-referrer"
            />
          </div>

        </div>
      </section>
    </PageTransition>
  );
}

// 3. WHY TRUST US? PAGE
export function WhyTrustUs() {
  return (
    <PageTransition>
      <section className="pt-28 pb-10 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <span className="text-xs font-bold tracking-[0.25em] text-[#C9A66B] uppercase block mb-2">Hospital Credentials</span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#2E2A26] tracking-tight">
            Why Trust Us?
          </h1>
          <p className="text-sm text-[#6F665C] mt-2 max-w-2xl">
            At John Creek Veterinary Clinic, our primary metric is your reassurance. Review our patient safety benchmarks.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white flex-1">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 border border-[#E8E1D8] rounded-xl bg-[#F7F4EF]/50">
              <span className="font-serif text-3xl font-bold text-[#8B7355]">01</span>
              <h3 className="font-serif text-lg font-bold text-[#2E2A26] mt-4">20+ Years Trusted Care</h3>
              <p className="text-xs text-[#6F665C] mt-2 leading-relaxed">
                We are a landmark community institution. Hundreds of Johns Creek families have trusted us with multiple generations of canine and feline companions since 2006.
              </p>
            </div>

            <div className="p-6 border border-[#E8E1D8] rounded-xl bg-[#F7F4EF]/50">
              <span className="font-serif text-3xl font-bold text-[#8B7355]">02</span>
              <h3 className="font-serif text-lg font-bold text-[#2E2A26] mt-4">Certified Exotics Authority</h3>
              <p className="text-xs text-[#6F665C] mt-2 leading-relaxed">
                Unlike general clinics, Dr. Marcus Vance holds specialized education in reptile, rabbit, ferret, and small piggy medicine. We know exotics require gentle, unique care.
              </p>
            </div>

            <div className="p-6 border border-[#E8E1D8] rounded-xl bg-[#F7F4EF]/50">
              <span className="font-serif text-3xl font-bold text-[#8B7355]">03</span>
              <h3 className="font-serif text-lg font-bold text-[#2E2A26] mt-4">Anesthesia Excellence</h3>
              <p className="text-xs text-[#6F665C] mt-2 leading-relaxed">
                Anesthesia shouldn\'t cause family anxiety. We operate rigorous multi-factor protocols (cardiac baseline ECG, continuous pressure mapping) on every dental clean & surgical procedure.
              </p>
            </div>
          </div>

          {/* Testimonial preview box */}
          <div className="mt-16 bg-[#FAF8F5] rounded-2xl p-8 border border-[#E8E1D8] max-w-4xl mx-auto text-center flex flex-col gap-4">
            <div className="flex justify-center gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-[#C9A66B] text-[#C9A66B]" />)}
            </div>
            <p className="font-serif italic text-base sm:text-lg text-[#2E2A26]">
              "Dr Kim is the best!! She takes such good care of my dog Molly and my cat Aphrodite. She even takes care of my daughter’s bearded dragon. I know exactly who I can entrust my family\'s care to."
            </p>
            <span className="text-xs font-bold text-[#8B7355]">— April C., Johns Creek Resident</span>
          </div>

        </div>
      </section>
    </PageTransition>
  );
}

// 4. OUR VET PAGE
export function OurVet() {
  const dvm = TEAM.find(t => t.id === 'dr-kim') || TEAM[0];
  return (
    <PageTransition>
      <section className="pt-28 pb-10 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <span className="text-xs font-bold tracking-[0.25em] text-[#C9A66B] uppercase block mb-2">Medical Leadership</span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#2E2A26] tracking-tight">
            Meet Our Chief Veterinarian
          </h1>
          <p className="text-sm text-[#6F665C] mt-2 max-w-2xl">
            Discover the surgical excellence, credentials, and values of Chief Medical Director, Dr. Evelyn Kim, DVM.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white flex-1">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-4 rounded-3xl border border-[#C9A66B]/20 translate-x-3 translate-y-3 -z-10" />
              <img 
                src={dvm.imageUrl} 
                className="w-full h-[450px] object-cover rounded-3xl border border-[#E8E1D8] shadow-md"
                alt={dvm.name}
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="lg:col-span-7 flex flex-col gap-6">
              <div>
                <span className="font-bold text-xs text-[#C9A66B] tracking-wider uppercase">{dvm.role}</span>
                <h2 className="font-serif text-3xl font-bold text-[#2E2A26] mt-1">{dvm.name}</h2>
                <span className="text-xs font-mono text-[#8B7355] mt-1 block">{dvm.credentials}</span>
              </div>

              <p className="text-xs sm:text-sm text-[#6F665C] leading-relaxed">
                Dr. Evelyn Kim is our Medical Director and Chief Veterinarian. After completing her doctorate at the Cornell University College of Veterinary Medicine, she dedicated over 18 years to soft tissue surgical excellence, dental restoration, and feline medicine.
              </p>
              <p className="text-xs sm:text-sm text-[#6F665C] leading-relaxed">
                In founding Johns Creek Veterinary Clinic, her vision was to build a full-service sanctuary that treated pets with the exact clinical rigor as premium human hospitals. Under her chief guidance, the facility has expanded to host digital imaging, an internal lab, veterinary dental scaling, and medical lodging.
              </p>
              
              <div className="pt-4 border-t border-[#FAF8F5] flex flex-col gap-2 text-xs text-[#2E2A26]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8B7355]" /> <span>Licensed in Georgia (DVM Status Active)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8B7355]" /> <span>Consultant Board Member, JCV Pet Guild</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8B7355]" /> <span>Specialties: Advanced Oral Radiography, Ultrasonic Scaling, Orthopedics</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="px-6 py-3 bg-[#8B7355] hover:bg-[#A68A64] text-white font-bold text-xs rounded-xl shadow-xs transition-colors cursor-pointer inline-block"
                >
                  Schedule Consultation with Dr. Kim
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>
    </PageTransition>
  );
}

// 5. OUR TEAM PAGE
export function OurTeam() {
  return (
    <PageTransition>
      <section className="pt-28 pb-10 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <span className="text-xs font-bold tracking-[0.25em] text-[#C9A66B] uppercase block mb-2">Hospital Personnel</span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#2E2A26] tracking-tight">
            Our Medical Team
          </h1>
          <p className="text-sm text-[#6F665C] mt-2 max-w-2xl">
            Meet the compassionate practitioners, coordinators, and vet assistants who keep your pets healthy and safe.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white flex-1">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TEAM.map((member) => (
              <div 
                key={member.id}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="bg-[#F7F4EF]/30 border border-[#E8E1D8] rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-350 p-6 flex flex-col sm:flex-row gap-6"
              >
                <div className="w-full sm:w-44 h-44 shrink-0 rounded-xl overflow-hidden border border-[#E8E1D8] bg-[#F7F4EF]">
                  <img 
                    src={member.imageUrl} 
                    className="w-full h-full object-cover" 
                    alt={member.name}
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-[#A68A64] tracking-wider uppercase block">{member.role}</span>
                    <h3 className="font-serif text-[17px] font-bold text-[#2E2A26] mt-0.5">{member.name}</h3>
                    {member.credentials && (
                      <span className="text-[11px] font-mono text-[#8B7355] block mt-0.5">{member.credentials}</span>
                    )}
                    <p className="text-xs text-[#6F665C] mt-3 leading-relaxed">{member.bio}</p>
                  </div>

                  {member.socials?.email && (
                    <div className="mt-4 pt-3 border-t border-[#FAF8F5] text-xs">
                      <a href={`mailto:${member.socials.email}`} className="text-[#8B7355] hover:underline flex items-center gap-1 cursor-pointer">
                        <Mail className="w-3.5 h-3.5" /> {member.socials.email}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Hiring CTA block */}
          <div className="mt-16 bg-[#FAF8F5] border border-[#E8E1D8] rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
            <div>
              <h4 className="font-serif text-lg font-bold text-[#2E2A26]">Eager to join our medical team?</h4>
              <p className="text-xs text-[#6F665C] mt-0.5">We are actively seeking DVM veterinarians and certified vet assistants.</p>
            </div>
            <Link
              to="/careers"
              className="px-5 py-2.5 bg-[#8B7355] hover:bg-[#A68A64] text-white text-xs font-bold rounded-lg transition-colors cursor-pointer text-center"
            >
              Explore Open Careers
            </Link>
          </div>

        </div>
      </section>
    </PageTransition>
  );
}
