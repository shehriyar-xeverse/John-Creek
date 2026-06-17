/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Check, CheckCircle2, ShieldCheck, Heart, Sparkles, 
  HelpCircle, AlertCircle, Calendar, ArrowRight, DollarSign 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import PageTransition from '../components/PageTransition';
import { WELLNESS_PLANS, SERVICES, IMAGES } from '../data/clinicData';

// Shared Page Title Header component
function WellnessHeader({ title, subtitle, bgImage }: { title: string, subtitle: string, bgImage?: string }) {
  return (
    <section className="pt-28 pb-12 bg-[#FAF8F5] border-b border-[#E8E1D8]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <span className="text-xs font-bold tracking-[0.25em] text-[#C9A66B] uppercase block mb-2">Preventive Care Plans</span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2E2A26] tracking-tight max-w-3xl leading-[1.15]">
          {title}
        </h1>
        <p className="text-xs sm:text-sm text-[#6F665C] mt-3 max-w-xl leading-relaxed">
          {subtitle}
        </p>
      </div>
    </section>
  );
}

// 1. WELLNESS BENEFITS OVERVIEW PAGE
export function WellnessBenefits() {
  return (
    <PageTransition>
      <WellnessHeader 
        title="Johns Creek Preventive Care Plans & Benefits"
        subtitle="Discover why bundling annual preventive exams, baseline diagnostics, and essential vaccinations into predictable interest-free packages saves on care costs while extending lives."
      />

      <section className="py-12 bg-white flex-1 animate-fadeIn">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 flex flex-col gap-6">
              <h2 className="text-2xl font-serif font-bold text-[#2E2A26]">Why Choose a Wellness Plan?</h2>
              <p className="text-xs sm:text-sm text-[#6F665C] leading-relaxed">
                Unlike standard pet insurance which assists only in acute trauma crises, Johns Creek Wellness Plans help proactively guide healthy pets across annual developmental milestones. By establishing baseline values early, our chief vets can catch liver shifts, renal changes, or cardiac strain before severe symptoms manifest.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                <div className="p-4 border border-[#E8E1D8] bg-[#FAF8F5] rounded-xl flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#8B7355] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-[#2E2A26]">Unlimited Free Consults</span>
                    <p className="text-[11px] text-[#6F665C] mt-1">Schedule exams whenever something changes at no extra cost.</p>
                  </div>
                </div>

                <div className="p-4 border border-[#E8E1D8] bg-[#FAF8F5] rounded-xl flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#8B7355] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-[#2E2A26]">Significant Care Savings</span>
                    <p className="text-[11px] text-[#6F665C] mt-1">Save up to 35% compared to paying for individual vaccinations & tests.</p>
                  </div>
                </div>

                <div className="p-4 border border-[#E8E1D8] bg-[#FAF8F5] rounded-xl flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#8B7355] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-[#2E2A26]">Included Dental Credits</span>
                    <p className="text-[11px] text-[#6F665C] mt-1">Get scaling and polishing credits to protect against systemic damage.</p>
                  </div>
                </div>

                <div className="p-4 border border-[#E8E1D8] bg-[#FAF8F5] rounded-xl flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#8B7355] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-[#2E2A26]">Outpatient Peace of Mind</span>
                    <p className="text-[11px] text-[#6F665C] mt-1">Simple, fixed, auto-drafted monthly payments with no interest.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              <div className="absolute inset-4 border border-[#C9A66B]/20 rounded-2xl translate-x-3 translate-y-3 -z-10" />
              <img 
                src={IMAGES.generalPetCare} 
                className="w-full h-[320px] object-cover rounded-2xl border border-[#E8E1D8] shadow-md"
                alt="Happy golden dog"
                referrerPolicy="no-referrer"
              />
            </div>

          </div>

          {/* Quick links to canine plans */}
          <div className="mt-16 bg-[#F7F4EF]/60 border border-[#E8E1D8] rounded-2xl p-6 md:p-8">
            <h3 className="font-serif text-lg font-bold text-[#2E2A26] mb-6 text-center">Select Your Companion Plan Category</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
              <Link to="/wellness-plans/cats" className="p-3 bg-white hover:bg-[#8B7355] hover:text-white border border-[#E8E1D8] rounded-xl text-center text-xs font-bold text-[#8B7355] transition-colors cursor-pointer">
                Cats Plan
              </Link>
              <Link to="/wellness-plans/small-dog" className="p-3 bg-white hover:bg-[#8B7355] hover:text-white border border-[#E8E1D8] rounded-xl text-center text-xs font-bold text-[#8B7355] transition-colors cursor-pointer">
                Small Dogs
              </Link>
              <Link to="/wellness-plans/medium-dog" className="p-3 bg-white hover:bg-[#8B7355] hover:text-white border border-[#E8E1D8] rounded-xl text-center text-xs font-bold text-[#8B7355] transition-colors cursor-pointer">
                Medium Dogs
              </Link>
              <Link to="/wellness-plans/large-dog" className="p-3 bg-white hover:bg-[#8B7355] hover:text-white border border-[#E8E1D8] rounded-xl text-center text-xs font-bold text-[#8B7355] transition-colors cursor-pointer">
                Large Dogs
              </Link>
              <Link to="/wellness-plans/extra-large-dog" className="p-3 bg-white hover:bg-[#8B7355] hover:text-white border border-[#E8E1D8] rounded-xl text-center text-xs font-bold text-[#8B7355] transition-colors cursor-pointer">
                Extra Large
              </Link>
              <Link to="/wellness-plans/giant-dog" className="p-3 bg-white hover:bg-[#8B7355] hover:text-white border border-[#E8E1D8] rounded-xl text-center text-xs font-bold text-[#8B7355] transition-colors cursor-pointer text-center">
                Giant Dogs
              </Link>
              <a href="#faq" className="p-3 bg-[#FAF8F5] hover:bg-[#FAF8F5]/80 border border-[#E8E1D8]/60 rounded-xl text-center text-xs font-medium text-[#6F665C] transition-colors cursor-pointer col-span-2 sm:col-span-1">
                Plan FAQs
              </a>
            </div>
          </div>

        </div>
      </section>
    </PageTransition>
  );
}

// 2. DETAILED LAYOUT COMPONENT FOR INDIVIDUAL PLANS
function PlanDetailPage({ planId }: { planId: string }) {
  const plan = WELLNESS_PLANS.find(p => p.id === planId);
  const [term, setTerm] = useState<'monthly' | 'yearly'>('monthly');

  if (!plan) {
    return (
      <div className="pt-28 pb-10 text-center">
        <h1 className="font-serif text-2xl text-[#2E2A26]">Plan Details Not Found</h1>
        <Link to="/wellness-plans/benefits" className="text-xs text-[#8B7355] underline">Back to Benefits</Link>
      </div>
    );
  }

  const price = term === 'monthly' ? `$${plan.priceMonthly}` : `$${plan.priceYearly}`;
  const priceInterval = term === 'monthly' ? '/ month' : '/ year billed annually';

  return (
    <PageTransition>
      <WellnessHeader 
        title={plan.name}
        subtitle={plan.description}
      />

      <section className="py-12 bg-white flex-1">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: What's Included */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              <div className="border-b border-[#FAF8F5] pb-4">
                <span className="text-[10px] font-bold text-[#C9A66B] tracking-widest uppercase">Target Group</span>
                <h2 className="font-serif text-2xl font-bold text-[#2E2A26] mt-1">Recommended for: <span className="text-[#8B7355]">{plan.target}</span></h2>
              </div>

              <div>
                <h3 className="font-serif text-lg font-bold text-[#2E2A26] mb-4">Core Clinical Inclusions:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="p-4 border border-[#E8E1D8] bg-[#FAF8F5]/30 rounded-xl flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#F7F4EF] flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5 text-[#8B7355]" />
                      </div>
                      <span className="text-xs text-[#6F665C] leading-snug">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {plan.includesDental && (
                <div className="p-4 bg-[#F7F4EF]/80 border border-[#C9A66B]/20 rounded-xl flex gap-3.5 items-start mt-2">
                  <Sparkles className="w-6 h-6 text-[#C9A66B] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-[#2E2A26] block">Premium Dental Benefits Active</span>
                    <p className="text-[11px] text-[#6F665C] leading-snug mt-1">
                      This senior or custom canine plan actively covers complete ultrasonic scales, scaling below gums, digital dental X-Rays, polishing, and anesthetic parameters under Chief Doctor Evelyn Kim's guidance.
                    </p>
                  </div>
                </div>
              )}

              {/* FAQ Sub-section */}
              <div className="mt-8">
                <h3 className="font-serif text-lg font-bold text-[#2E2A26] mb-4">Plan Activation Details</h3>
                <div className="flex flex-col gap-4 text-xs text-[#6F665C] leading-relaxed">
                  <p>
                    <strong>Enrollment & Activation:</strong> Plans lock in for a 12-month sequence from day of first checkout signature. You can utilize consults immediately.
                  </p>
                  <p>
                    <strong>Multi-pet discount:</strong> Owners registering 3 or more pets into active plans receive a continuous 10% discount on all plan fees.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Pricing Suite */}
            <div className="lg:col-span-4 bg-[#FAF8F5] border border-[#E8E1D8] rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col justify-between sticky top-24">
              <div>
                <span className="text-[10px] font-bold text-[#A68A64] tracking-widest uppercase block mb-1">Simple Pricing</span>
                <h3 className="font-serif text-xl font-bold text-[#2E2A26] mb-6">Select Billing Interval</h3>

                {/* Term switcher */}
                <div className="flex bg-[#E8E1D8]/50 p-1 rounded-xl gap-1 mb-8">
                  <button 
                    onClick={() => setTerm('monthly')}
                    className={`flex-1 text-xs font-bold py-2 rounded-lg transition-all cursor-pointer ${term === 'monthly' ? 'bg-white text-[#8B7355] shadow-xs' : 'text-[#6F665C] hover:text-[#2E2A26]'}`}
                  >
                    Monthly Budget
                  </button>
                  <button 
                    onClick={() => setTerm('yearly')}
                    className={`flex-1 text-xs font-bold py-2 rounded-lg transition-all cursor-pointer ${term === 'yearly' ? 'bg-white text-[#8B7355] shadow-xs' : 'text-[#6F665C] hover:text-[#2E2A26]'}`}
                  >
                    Annual Value
                  </button>
                </div>

                <div className="pb-6 border-b border-[#E8E1D8] mb-6">
                  <span className="text-4xl sm:text-5xl font-serif font-bold text-[#8B7355]">{price}</span>
                  <span className="text-xs text-[#6F665C] block mt-1">{priceInterval}</span>
                </div>

                <ul className="text-xs text-[#6F665C] flex flex-col gap-3 mb-8">
                  <li className="flex items-center gap-2"><Check className="text-[#C9A66B] w-4 h-4 shrink-0" /> Zero signup or application fee</li>
                  <li className="flex items-center gap-2"><Check className="text-[#C9A66B] w-4 h-4 shrink-0" /> Pre-approved immediate activation</li>
                  <li className="flex items-center gap-2"><Check className="text-[#C9A66B] w-4 h-4 shrink-0" /> Transferable between house pets</li>
                </ul>
              </div>

              <div className="flex flex-col gap-3">
                <Link
                  to="/contact"
                  className="px-6 py-3.5 bg-[#8B7355] hover:bg-[#A68A64] text-white font-bold text-xs rounded-xl shadow-xs transition-colors cursor-pointer text-center block"
                >
                  Apply & Enroll Now
                </Link>
                <Link
                  to="/wellness-plans/benefits"
                  className="text-xs font-bold text-[#6F665C] hover:text-[#2E2A26] tracking-wide text-center"
                >
                  View All Plan Categories
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </PageTransition>
  );
}

export function CatsPlanPage() { return <PlanDetailPage planId="cats-plan" />; }
export function SmallDogPlanPage() { return <PlanDetailPage planId="small-dog" />; }
export function MediumDogPlanPage() { return <PlanDetailPage planId="medium-dog" />; }
export function LargeDogPlanPage() { return <PlanDetailPage planId="large-dog" />; }
export function ExtraLargeDogPlanPage() { return <PlanDetailPage planId="xl-dog" />; }
export function GiantDogPlanPage() { return <PlanDetailPage planId="giant-dog" />; }
