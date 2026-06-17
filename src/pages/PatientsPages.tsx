/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ClipboardCheck, Sparkles, BookOpen, Gift, ShieldCheck, 
  DollarSign, CheckCircle2, ChevronRight, AlertCircle, Phone, 
  MapPin, HelpCircle, Star, Copy, Check, ArrowRight 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import PageTransition from '../components/PageTransition';
import { BLOG_POSTS, PROMOTIONS, IMAGES } from '../data/clinicData';

// Shared title header
function PatientsHeader({ title, subtitle }: { title: string, subtitle: string }) {
  return (
    <section className="pt-28 pb-12 bg-[#FAF8F5] border-b border-[#E8E1D8]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <span className="text-xs font-bold tracking-[0.25em] text-[#C9A66B] uppercase block mb-2">Patient Services Portal</span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2E2A26] tracking-tight leading-snug">
          {title}
        </h1>
        <p className="text-xs sm:text-sm text-[#6F665C] mt-2 max-w-xl leading-relaxed">
          {subtitle}
        </p>
      </div>
    </section>
  );
}

// 1. PATIENTS HUB
export function PatientsHub() {
  const links = [
    { name: 'New Patient Intake Form', path: '/patients/new-form', desc: 'Securely submit your pet\'s developmental data online.', icon: <ClipboardCheck className="w-5 h-5 text-[#8B7355]" /> },
    { name: 'Current promotions & Specials', path: '/patients/promotions', desc: 'Surgical scaling credits, complimentary consult codes.', icon: <Gift className="w-5 h-5 text-[#8B7355]" /> },
    { name: 'Pet Advice Knowledge Blog', path: '/patients/blog', desc: 'Clinical feeding and safety guides written by JCV vets.', icon: <BookOpen className="w-5 h-5 text-[#8B7355]" /> },
    { name: 'Boarding & Grooming Requirements', path: '/patients/requirements', desc: 'Immunization benchmarks required for hospital lodging.', icon: <ShieldCheck className="w-5 h-5 text-[#8B7355]" /> },
    { name: 'Interest-Free Financing Plans', path: '/patients/financing', desc: 'Spread care expenses across flexible monthly intervals.', icon: <DollarSign className="w-5 h-5 text-[#8B7355]" /> },
  ];

  return (
    <PageTransition>
      <PatientsHeader 
        title="Welcome to our Patient Resource Hub"
        subtitle="Manage check-in documents, access educational resources, find seasonal discount codes, or enroll in therapeutic boarding. Everything is designed to make your care experience seamless."
      />

      <section className="py-12 bg-white flex-1 animate-fadeIn">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {links.map((link, idx) => (
              <Link 
                key={idx}
                to={link.path}
                className="bg-[#FAF8F5]/50 border border-[#E8E1D8] p-6 rounded-2xl flex flex-col justify-between hover:bg-white hover:border-[#8B7355] hover:shadow-xs transition-all duration-350 cursor-pointer group"
              >
                <div>
                  <div className="w-10 h-10 bg-[#FAF8F5] group-hover:bg-[#F7F4EF] rounded-xl flex items-center justify-center shrink-0 border border-[#E8E1D8]/60">
                    {link.icon}
                  </div>
                  <h3 className="font-serif text-[17px] font-bold text-[#2E2A26] mt-4">{link.name}</h3>
                  <p className="text-xs text-[#6F665C] mt-2 leading-relaxed">{link.desc}</p>
                </div>
                <span className="text-[11px] font-bold text-[#8B7355] mt-6 flex items-center gap-1 group-hover:text-[#C9A66B] transition-colors">
                  Open Resource <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-16 bg-[#F7F4EF]/50 rounded-2xl p-8 border border-[#E8E1D8] max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-6 justify-between">
            <div>
              <h4 className="font-serif text-lg font-bold text-[#2E2A26] flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-[#C9A66B]" /> First time visiting JCV Clinic?
              </h4>
              <p className="text-xs text-[#6F665C] mt-1 leading-relaxed">
                Unlock a completely complimentary physical consult for any first-time feline or canine companion. Simply copy the code in our promotions block.
              </p>
            </div>
            <Link to="/patients/promotions" className="px-5 py-2.5 bg-[#8B7355] hover:bg-[#A68A64] text-white text-xs font-bold rounded-lg transition-colors cursor-pointer block text-center">
              Copy Promo Code
            </Link>
          </div>

        </div>
      </section>
    </PageTransition>
  );
}

// 2. NEW PATIENT INTAKE FORM
export function NewPatientForm() {
  const [formStep, setFormStep] = useState<1 | 2>(1);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<string | null>(null);

  // Form states
  const [ownerName, setOwnerName] = useState('');
  const [ownerEmail, setOwnerEmail] = useState('');
  const [ownerPhone, setOwnerPhone] = useState('');
  const [petName, setPetName] = useState('');
  const [petSpecies, setPetSpecies] = useState('Dog');
  const [petBreed, setPetBreed] = useState('');
  const [petAge, setPetAge] = useState('');
  const [healthConcerns, setHealthConcerns] = useState('');

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ownerName || !ownerEmail || !ownerPhone) {
      setErrors("Please complete all owner contact criteria.");
      return;
    }
    setErrors(null);
    setFormStep(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!petName || !petBreed || !petAge) {
      setErrors("Please complete all pet biological criteria.");
      return;
    }
    setErrors(null);
    setSubmitted(true);
    // Reset fields on success
    setOwnerName('');
    setOwnerEmail('');
    setOwnerPhone('');
    setPetName('');
    setPetBreed('');
    setPetAge('');
    setHealthConcerns('');
  };

  return (
    <PageTransition>
      <PatientsHeader 
        title="New Patient Online Digital Intake Form"
        subtitle="Save 20 minutes during registration. Complete our secured diagnostic intake form prior to checking into Medlock Bridge Rd."
      />

      <section className="py-12 bg-white flex-1 animate-fadeIn">
        <div className="max-w-2xl mx-auto px-4">
          
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div 
                key="form-container"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-[#FAF8F5] border border-[#E8E1D8] rounded-2xl p-6 md:p-8"
              >
                {/* Form Progress step header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E8E1D8]">
                  <span className="text-xs font-mono font-bold text-[#A68A64]">
                    Progress Step: {formStep} of 2
                  </span>
                  <div className="h-2 w-32 bg-[#E8E1D8] rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#8B7355] transition-all duration-350" 
                      style={{ width: formStep === 1 ? '50%' : '100%' }}
                    />
                  </div>
                </div>

                {errors && (
                  <div className="p-3 bg-white border-l-4 border-amber-600 rounded-md text-xs text-[#2E2A26] mb-4 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-[#C9A66B]" />
                    <span>{errors}</span>
                  </div>
                )}

                {/* STEP 1: OWNER CONTACT */}
                {formStep === 1 ? (
                  <form onSubmit={handleNextStep} className="space-y-5">
                    <h3 className="font-serif text-lg font-bold text-[#2E2A26] mb-2">Owner Contact Information</h3>
                    
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-[#6F665C]">Full Owner Name <span className="text-[#8B7355]">*</span></label>
                      <input 
                        type="text" 
                        required
                        value={ownerName}
                        onChange={(e) => setOwnerName(e.target.value)}
                        placeholder="e.g. Richard Nixon" 
                        className="bg-white border border-[#E8E1D8] rounded-xl px-4 py-2.5 text-xs outline-none focus:border-[#8B7355] transition-all"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-[#6F665C]">Contact Email Address <span className="text-[#8B7355]">*</span></label>
                      <input 
                        type="email" 
                        required
                        value={ownerEmail}
                        onChange={(e) => setOwnerEmail(e.target.value)}
                        placeholder="e.g. richard@nixon.org" 
                        className="bg-white border border-[#E8E1D8] rounded-xl px-4 py-2.5 text-xs outline-none focus:border-[#8B7355] transition-all"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-[#6F665C]">Mobile Telephone <span className="text-[#8B7355]">*</span></label>
                      <input 
                        type="tel" 
                        required
                        value={ownerPhone}
                        onChange={(e) => setOwnerPhone(e.target.value)}
                        placeholder="e.g. (770) 623-8387" 
                        className="bg-white border border-[#E8E1D8] rounded-xl px-4 py-2.5 text-xs outline-none focus:border-[#8B7355] transition-all"
                      />
                    </div>

                    <button 
                      type="submit"
                      className="w-full bg-[#8B7355] hover:bg-[#A68A64] text-white font-bold text-xs py-3.5 rounded-xl transition-colors cursor-pointer mt-4"
                    >
                      Proceed to Pet Criteria
                    </button>
                  </form>
                ) : (
                  /* STEP 2: PET PROFILE */
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h3 className="font-serif text-lg font-bold text-[#2E2A26] mb-2">Pet Biological Profile</h3>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-[#6F665C]">Companion Name <span className="text-[#8B7355]">*</span></label>
                        <input 
                          type="text" 
                          required
                          value={petName}
                          onChange={(e) => setPetName(e.target.value)}
                          placeholder="e.g. Bella" 
                          className="bg-white border border-[#E8E1D8] rounded-xl px-4 py-2.5 text-xs outline-none focus:border-[#8B7355] transition-all"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-[#6F665C]">Species <span className="text-[#8B7355]">*</span></label>
                        <select 
                          value={petSpecies}
                          onChange={(e) => setPetSpecies(e.target.value)}
                          className="bg-white border border-[#E8E1D8] rounded-xl px-4 py-2.5 text-xs outline-none focus:border-[#8B7355] transition-all select-none"
                        >
                          <option value="Dog">Dog / Canine</option>
                          <option value="Cat">Cat / Feline</option>
                          <option value="Rabbit">Rabbit / Lagomorph</option>
                          <option value="Exotic">Exotic Pocket Mammal</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-[#6F665C]">Breed / Variety <span className="text-[#8B7355]">*</span></label>
                        <input 
                          type="text" 
                          required
                          value={petBreed}
                          onChange={(e) => setPetBreed(e.target.value)}
                          placeholder="e.g. French Bulldog" 
                          className="bg-white border border-[#E8E1D8] rounded-xl px-4 py-2.5 text-xs outline-none focus:border-[#8B7355] transition-all"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-[#6F665C]">Chronological Age <span className="text-[#8B7355]">*</span></label>
                        <input 
                          type="text" 
                          required
                          value={petAge}
                          onChange={(e) => setPetAge(e.target.value)}
                          placeholder="e.g. 2 years old" 
                          className="bg-white border border-[#E8E1D8] rounded-xl px-4 py-2.5 text-xs outline-none focus:border-[#8B7355] transition-all"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-[#6F665C]">Health Concerns / Medical History</label>
                      <textarea 
                        rows={4}
                        value={healthConcerns}
                        onChange={(e) => setHealthConcerns(e.target.value)}
                        placeholder="Detail any previous dynamic surgeries, dietary allergies, or physical discomfort indexes..." 
                        className="bg-white border border-[#E8E1D8] rounded-xl px-4 py-2.5 text-xs outline-none focus:border-[#8B7355] transition-all resize-none"
                      />
                    </div>

                    <div className="flex gap-2">
                      <button 
                        type="button" 
                        onClick={() => setFormStep(1)}
                        className="px-4 py-3.5 bg-white border border-[#E8E1D8] hover:bg-[#FAF8F5] text-[#2E2A26] text-xs font-bold rounded-xl transition-colors cursor-pointer"
                      >
                        Back
                      </button>
                      <button 
                        type="submit"
                        className="flex-1 bg-[#8B7355] hover:bg-[#A68A64] text-white font-bold text-xs py-3.5 rounded-xl transition-colors cursor-pointer shadow-sm btn-glow-pulse"
                      >
                        Submit Secured Intake Forms
                      </button>
                    </div>
                  </form>
                )}
              </motion.div>
            ) : (
              <motion.div 
                key="success-container"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#FAF8F5] border border-[#C9A66B]/30 rounded-2xl p-8 text-center flex flex-col items-center gap-6 shadow-md"
              >
                <div className="w-16 h-16 bg-[#F7F4EF] rounded-full flex items-center justify-center border border-[#E8E1D8]">
                  <CheckCircle2 className="w-8 h-8 text-[#8B7355]" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-[#C9A66B] block">Submission Status: Received</span>
                  <h3 className="font-serif text-2xl font-bold text-[#2E2A26] mt-2">Intake Form Safely Submitted!</h3>
                  <p className="text-xs text-[#6F665C] leading-relaxed max-w-sm mt-3 mx-auto">
                    Thank you for preparing your details. Our Practice Coordinator (Sarah Lin) has auto-merged this data into our IDEXX medical logs. You are fully set for checkout.
                  </p>
                </div>
                <div className="flex gap-3">
                  <button 
                    onClick={() => { setSubmitted(false); setFormStep(1); }}
                    className="px-5 py-2.5 bg-white border border-[#E8E1D8] text-[#2E2A26] rounded-xl font-bold text-xs transition-colors cursor-pointer hover:bg-[#FAF8F5]"
                  >
                    Register another pet
                  </button>
                  <Link 
                    to="/" 
                    className="px-5 py-2.5 bg-[#8B7355] hover:bg-[#A68A64] text-white rounded-xl font-bold text-xs transition-colors cursor-pointer block text-center"
                  >
                    Return to Home
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </section>
    </PageTransition>
  );
}

// 3. PET ADVICE BLOG
export function PetAdviceBlog() {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Nutrition', 'Dental Health', 'Safety'];
  
  const posts = filter === 'All' 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(post => post.category === filter);

  return (
    <PageTransition>
      <PatientsHeader 
        title="Our Pet Health Advice & Veterinary Blog"
        subtitle="Read evidence-based clinical articles and dietary guides written by chief veterinaries Evelyn Kim and Marcus Vance."
      />

      <section className="py-12 bg-white flex-1 animate-fadeIn">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          
          {/* Tag filters */}
          <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-[#FAF8F5]">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4.5 py-1.5 rounded-full text-xs font-bold transition-all border cursor-pointer ${
                  filter === cat 
                    ? 'bg-[#8B7355] text-white border-[#8B7355]' 
                    : 'bg-[#FAF8F5] text-[#6F665C] border-[#E8E1D8] hover:text-[#2E2A26]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map(post => (
              <div 
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden border border-[#E8E1D8] shadow-2xs hover:shadow-md transition-all duration-350 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 overflow-hidden bg-[#FAF8F5]">
                    <img 
                      src={post.imageUrl} 
                      className="w-full h-full object-cover" 
                      alt={post.title}
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute bottom-3 left-3 bg-white/95 px-2.5 py-0.5 rounded-md border border-[#E8E1D8] text-[10px] font-bold text-[#8B7355] tracking-wider uppercase">
                      {post.category}
                    </div>
                  </div>
                  
                  <div className="p-5.5">
                    <div className="flex items-center gap-2 text-[10px] text-[#6F665C] mb-2 font-mono">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="font-serif text-[17px] font-bold text-[#2E2A26] leading-snug">{post.title}</h3>
                    <p className="text-xs text-[#6F665C] leading-relaxed mt-2">{post.excerpt}</p>
                    <p className="text-xs text-[#6F665C] leading-relaxed mt-4 italic bg-[#FAF8F5] p-3 rounded-xl border border-[#E8E1D8]/50">
                      <strong>Doctor Insight:</strong> {post.content}
                    </p>
                  </div>
                </div>

                <div className="p-5.5 pt-0 mt-2 border-t border-[#FAF8F5]">
                  <button 
                    onClick={() => alert(`Successfully loaded medical documentation: "${post.title}". Full bibliography references are active on hospital intranets.`)}
                    className="text-xs font-bold text-[#8B7355] hover:text-[#C9A66B] flex items-center gap-1 mt-4 cursor-pointer"
                  >
                    Read Full Study Article <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </PageTransition>
  );
}

// 4. CURRENT PROMOTIONS
export function CurrentPromotions() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(code);
    setTimeout(() => setCopiedId(null), 3000);
  };

  return (
    <PageTransition>
      <PatientsHeader 
        title="Current Promotions & Seasonal Specials"
        subtitle="Review complimentary checkup, clinical dentistry caps, other seasonal value coupon codes below."
      />

      <section className="py-12 bg-white flex-1 animate-fadeIn">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {PROMOTIONS.map((promo) => (
              <div 
                key={promo.id}
                className="bg-[#FAF8F5] border border-[#E8E1D8] rounded-3xl p-6.5 relative overflow-hidden flex flex-col justify-between shadow-2xs group"
              >
                {/* Decorative background circle */}
                <div className="absolute -bottom-12 -right-12 w-24 h-24 rounded-full bg-[#FAF8F5]/80 border border-[#E8E1D8]/40 -z-10 group-hover:scale-110 transition-transform" />

                <div>
                  <div className="flex items-center justify-between mb-4 border-b border-[#FAF8F5] pb-3">
                    <span className="text-[10px] font-bold text-[#8B7355] bg-white border border-[#E8E1D8] px-3 py-1 rounded-full uppercase tracking-widest">{promo.badge}</span>
                    <span className="text-[10.5px] text-[#6F665C] font-mono">{promo.validity}</span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[#2E2A26] leading-snug">{promo.title}</h3>
                  <p className="text-xs text-[#6F665C] mt-2.5 leading-relaxed">{promo.description}</p>
                </div>

                {/* Promo Code copy trigger */}
                <div className="mt-8 pt-4 border-t border-[#E8E1D8]/60 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] tracking-wider text-[#6F665C] uppercase font-mono block">Promo Code:</span>
                    <span className="font-mono text-sm font-bold text-[#2E2A26]">{promo.code}</span>
                  </div>

                  <button 
                    onClick={() => handleCopyCode(promo.code)}
                    className="flex items-center gap-1.5 px-4 py-2 bg-white border border-[#E8E1D8] hover:bg-[#8B7355] hover:text-white rounded-lg text-xs font-bold text-[#8B7355] transition-all cursor-pointer shadow-3xs"
                  >
                    {copiedId === promo.code ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600 group-hover:text-white" /> Code Copied
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" /> Copy Code
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

// 5. BOARDING REQUIREMENTS
export function BoardingRequirements() {
  return (
    <PageTransition>
      <PatientsHeader 
        title="Boarding & Grooming Requirements"
        subtitle="To guarantee a fully sterile, pathogen-free environment, reviews vaccine & medical criteria prior to lodging."
      />

      <section className="py-12 bg-white flex-1 animate-fadeIn">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-8 space-y-6">
              
              <div>
                <h2 className="font-serif text-2xl font-bold text-[#2E2A26] mb-3">Why Vaccine Standards Matter</h2>
                <p className="text-xs sm:text-sm text-[#6F665C] leading-relaxed">
                  Unlike multi-tenant warehouses, JCV Clinic maintains absolute infection containment boundaries. Because fragile post-operative or diabetic patients reside inside our suites, we enforce strict vaccine proof. Our practices protect companions from canine cough (Bordetella) and respiratory viruses.
                </p>
              </div>

              {/* Requirement Groups */}
              <div className="space-y-6">
                
                {/* Canine */}
                <div className="p-6 bg-[#FAF8F5]/30 border border-[#E8E1D8] rounded-2xl">
                  <h3 className="font-serif text-base font-bold text-[#8B7355] mb-4">Canine Lodging Requirements:</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#6F665C]">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C9A66B] shrink-0" /> Rabies (1 or 3-Year proof)</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C9A66B] shrink-0" /> DHPP (Distemper, Hepatitis, Parvo)</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C9A66B] shrink-0" /> Bordetella (Within past 12 months)</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C9A66B] shrink-0" /> Negative Fecal centrifugation exam</li>
                  </ul>
                </div>

                {/* Feline */}
                <div className="p-6 bg-[#FAF8F5]/30 border border-[#E8E1D8] rounded-2xl">
                  <h3 className="font-serif text-base font-bold text-[#8B7355] mb-4">Feline Lodging Requirements:</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#6F665C]">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C9A66B] shrink-0" /> Rabies certificate</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C9A66B] shrink-0" /> FVRCP active booster vaccine</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C9A66B] shrink-0" /> Negative leukemia screening panel</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C9A66B] shrink-0" /> Strict active flea protection checks</li>
                  </ul>
                </div>

              </div>
            </div>

            <div className="lg:col-span-4 bg-[#FAF8F5] border border-[#E8E1D8] p-6 sm:p-8 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 bg-[#F7F4EF] rounded-xl flex items-center justify-center border border-[#E8E1D8]">
                  <AlertCircle className="w-5 h-5 text-[#8B7355]" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#2E2A26] mt-4 mb-2">Need a booster first?</h3>
                <p className="text-xs text-[#6F665C] leading-relaxed">
                  Is your pet lacking a current bordetella certificate? No worries. We can administer core vaccinations right during boarding intake on day of check-in.
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-2">
                <Link to="/contact" className="px-5 py-3 bg-[#8B7355] hover:bg-[#A68A64] text-white text-xs font-bold rounded-xl shadow-xs text-center cursor-pointer">
                  Book Booster & Lodging
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </PageTransition>
  );
}

// 6. FINANCING OPTIONS
export function FinancingOptions() {
  return (
    <PageTransition>
      <PatientsHeader 
        title="Flexible Veterinary Financing Options"
        subtitle="Exceptional clinical decisions shouldn\'t cause family budget strain. Review Scratchpay, CareCredit, payment options."
      />

      <section className="py-12 bg-white flex-1 animate-fadeIn">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* CareCredit */}
            <div className="p-6.5 border border-[#E8E1D8] bg-[#FAF8F5]/40 rounded-3xl flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold text-[#C9A66B] uppercase tracking-wider block mb-1">Pre-approved health card</span>
                <h3 className="font-serif text-xl font-bold text-[#2E2A26] mb-3">CareCredit Specialist Card</h3>
                <p className="text-xs text-[#6F665C] leading-relaxed">
                  CareCredit operates as a personalized healthcare credit card designed purely for pet wellness bills. Enjoy 6 or 12-month zero-interest terms on transactions exceeding $200. Apply online and gain immediate clinical approval prior to checking into diagnostics.
                </p>
              </div>
              <div className="mt-8">
                <a 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); alert("You are navigating to secure external third-party medical lender CareCredit. Approvals return in 3-5 minutes."); }}
                  className="px-4.5 py-2.5 bg-white border border-[#8B7355] hover:bg-[#8B7355] hover:text-white text-[#8B7355] text-xs font-bold rounded-xl transition-all cursor-pointer inline-block"
                >
                  Apply CareCredit Online
                </a>
              </div>
            </div>

            {/* Scratchpay */}
            <div className="p-6.5 border border-[#E8E1D8] bg-[#FAF8F5]/40 rounded-3xl flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold text-[#A68A64] uppercase tracking-wider block mb-1">Flexible micro-loans</span>
                <h3 className="font-serif text-xl font-bold text-[#2E2A26] mb-3">Scratchpay Installment Loans</h3>
                <p className="text-xs text-[#6F665C] leading-relaxed">
                  Scratchpay maps out medical transaction amounts into manageable 3, 12, or 24-month payment blocks. Scratchpay doesn\'t impact your credit score during initial pre-qualification steps, securing pre-approval values in under 90 seconds.
                </p>
              </div>
              <div className="mt-8">
                <a 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); alert("You are navigating to Scratchpay pet financing logs. Zero-down pre-qualifying indexes are processed instantly."); }}
                  className="px-4.5 py-2.5 bg-white border border-[#8B7355] hover:bg-[#8B7355] hover:text-white text-[#8B7355] text-xs font-bold rounded-xl transition-all cursor-pointer inline-block"
                >
                  Check Scratchpay Rates
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </PageTransition>
  );
}
