/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Stethoscope, ShieldAlert, Sparkles, AlertCircle, 
  Phone, ArrowRight, Heart, Calendar, Award, Star, 
  MapPin, Clock, ArrowLeftRight, CheckCircle2, ChevronRight, ChevronDown 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import PageTransition from '../components/PageTransition';
import AnimatedSection, { AnimatedList } from '../components/AnimatedSection';
import { SERVICES, TEAM, TESTIMONIALS, WELLNESS_PLANS, IMAGES } from '../data/clinicData';

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonialTimer = useRef<NodeJS.Timeout | null>(null);
  const [showScrollDown, setShowScrollDown] = useState(true);

  // Scroll handler to hide scroll down chevron
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setShowScrollDown(false);
      } else {
        setShowScrollDown(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Implement 3D Tilt Hook/Handler inside rendering for elements
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    card.style.transform = `perspective(1000px) rotateY(${x * 0.05}deg) rotateX(${-y * 0.05}deg) translateY(-8px) scale(1.02)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg) translateY(0px) scale(1)`;
  };

  // Testimonials auto-play loop
  useEffect(() => {
    testimonialTimer.current = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 4000); // 4s as requested in guidelines

    return () => {
      if (testimonialTimer.current) clearInterval(testimonialTimer.current);
    };
  }, []);

  const handleTestimonialNav = (index: number) => {
    setActiveTestimonial(index);
    if (testimonialTimer.current) {
      clearInterval(testimonialTimer.current);
      testimonialTimer.current = setInterval(() => {
        setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
      }, 5500);
    }
  };

  return (
    <PageTransition>
      {/* 1. HERO SECTION */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden animate-bg-shift" id="hero-section">
        
        {/* Floating cinematic ambient blobs */}
        <div className="absolute top-10 left-10 w-[300px] h-[300px] rounded-full bg-gradient-to-br from-[#4CAF93] to-[#7DB7C3] opacity-6 blur-[80px] pointer-events-none floating-orb-1" />
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-[#7DB7C3] to-[#4CAF93] opacity-6 blur-[80px] pointer-events-none floating-orb-2" />
        <div className="absolute bottom-10 left-1/3 w-[350px] h-[350px] rounded-full bg-gradient-to-br from-[#4CAF93] to-[#7DB7C3] opacity-6 blur-[80px] pointer-events-none floating-orb-3" />

        {/* Floating custom dog paw elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {[
            { left: '8%', delay: '0s', duration: '20s', size: '14px' },
            { left: '25%', delay: '4s', duration: '24s', size: '18px' },
            { left: '45%', delay: '8s', duration: '22s', size: '16px' },
            { left: '72%', delay: '2s', duration: '28s', size: '20px' },
            { left: '90%', delay: '6s', duration: '25s', size: '15px' },
          ].map((p, i) => (
            <svg
              key={i}
              viewBox="0 0 100 100"
              className="absolute fill-[#8B735C]/5 stroke-none animate-float-paw"
              style={{
                left: p.left,
                bottom: '-10%',
                width: p.size,
                height: p.size,
                animationDelay: p.delay,
                animationDuration: p.duration,
              }}
            >
              <circle cx="50" cy="55" r="14" />
              <circle cx="28" cy="38" r="7" />
              <circle cx="43" cy="26" r="7" />
              <circle cx="57" cy="26" r="7" />
              <circle cx="72" cy="38" r="7" />
            </svg>
          ))}
        </div>

        {/* Cinematic Ambient Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 bg-gradient-to-b from-[#FAF8F5]/5 via-transparent to-[#FAF8F5]/25 pointer-events-none"
        />

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 flex flex-col justify-center gap-6">
              <div className="flex flex-col gap-2">
                <motion.div 
                   initial={{ opacity: 0, y: 15 }} 
                   animate={{ opacity: 1, y: 0 }} 
                   transition={{ delay: 0.1 }}
                   className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#F7F4EF] rounded-full w-fit border border-[#E8E1D8]"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-[#C9A66B]" />
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#6F665C]">New Patients Welcome</span>
                </motion.div>
                
                <h1 
                  className="text-5xl sm:text-6xl font-serif text-[#2E2A26] leading-[1.1] tracking-tight flex flex-wrap gap-x-2.5 gap-y-1"
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  {["Compassionate", "Care", "for", "Your"].map((word, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.65,
                        delay: 0.15 + idx * 0.08,
                        ease: [0.16, 1, 0.3, 1]
                      }}
                    >
                      {word}
                    </motion.span>
                  ))}
                  <br className="hidden sm:inline" />
                  {["Furry", "Family."].map((word, idx) => (
                    <motion.span
                      key={idx + 4}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.65,
                        delay: 0.15 + (idx + 4) * 0.08,
                        ease: [0.16, 1, 0.3, 1]
                      }}
                      className="italic text-[#8B7355]"
                    >
                      {word}
                    </motion.span>
                  ))}
                </h1>
              </div>

              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.72, duration: 0.7 }}
                className="text-base sm:text-lg text-[#6F665C] leading-relaxed max-w-md"
              >
                At Johns Creek Veterinary Clinic, we provide high-end medical expertise, routine prevention, and complex surgeries for cats, dogs, and exotic pocket mammals. Open Monday through Saturday in Johns Creek.
              </motion.p>

              {/* Badges strip */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex flex-wrap items-center gap-4 py-2"
              >
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#FAF8F5] border border-[#E8E1D8] rounded-full text-xs font-semibold text-[#8B7355]">
                  <Award className="w-3.5 h-3.5 text-[#C9A66B]" />
                  <span>20+ Years Clinic Service</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#FAF8F5] border border-[#E8E1D8] rounded-full text-xs font-semibold text-[#8B7355]">
                  <Clock className="w-3.5 h-3.5 text-[#C9A66B]" />
                  <span>Open 6 Days a Week</span>
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-4"
              >
                <a
                  href="tel:7706238387"
                  className="px-8 py-4 bg-[#8B7355] hover:bg-[#A68A64] text-white rounded-[14px] font-bold shadow-xl shadow-[#8B7355]/20 flex items-center justify-center gap-3 transition-colors duration-300 transform active:scale-95 cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-white" />
                  <span>(770) 623-8387</span>
                </a>
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-[#4CAF93] hover:bg-[#3D947B] text-white rounded-[14px] font-bold transition-all duration-300 transform active:scale-95 text-center cursor-pointer cta-pulse-button shadow-lg shadow-[#4CAF93]/20"
                >
                  Book Online
                </Link>
              </motion.div>
            </div>

            {/* Right Media Column */}
            <div className="lg:col-span-6 relative mt-6 lg:mt-0">
              
              {/* Outer decorative borders representing high-end aesthetics */}
              <div className="absolute inset-4 border border-[#8B7355]/10 rounded-3xl -z-10 translate-x-3 translate-y-3" />
              
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white border border-[#E8E1D8]">
                {/* Simulated luxury image showcase */}
                <img 
                  src={IMAGES.heroCatDog} 
                  alt="Doctor checking cat compassionately"
                  className="w-full h-[380px] sm:h-[450px] object-cover animate-kenburns"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating reviews widget */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-[#E8E1D8] shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      <img src={IMAGES.drKim} className="w-8 h-8 rounded-full border-2 border-white object-cover" alt="Reviewer Cat" referrerPolicy="no-referrer" />
                      <img src={IMAGES.drVance} className="w-8 h-8 rounded-full border-2 border-white object-cover" alt="Reviewer Dog" referrerPolicy="no-referrer" />
                      <div className="w-8 h-8 rounded-full bg-[#C9A66B] border-2 border-white flex items-center justify-center text-[10px] font-bold text-white">5★</div>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#2E2A26]">Johns Creek pet owners trust us</div>
                      <div className="text-[11px] text-[#6F665C]">More than 5,000+ pets served</div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-[#8B7355]" />
                </div>
              </div>

              {/* Floating aesthetic medical cross */}
              <div className="absolute -top-4 -right-2 bg-[#FAF8F5] border border-[#E8E1D8] w-12 h-12 rounded-2xl shadow-md flex items-center justify-center animate-pulse">
                <div className="w-5 h-1.5 bg-[#C9A66B] rounded-xs" />
                <div className="h-5 w-1.5 bg-[#C9A66B] rounded-xs absolute" />
              </div>

            </div>

          </div>
        </div>

        {/* Scroll Down Indicator */}
        <AnimatePresence>
          {showScrollDown && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 0.8, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer z-20"
              onClick={() => window.scrollTo({ top: window.innerHeight * 0.85, behavior: 'smooth' })}
            >
              <span className="text-[9px] uppercase font-bold tracking-[0.2em] text-[#6F665C] select-none">Scroll Overview</span>
              <ChevronDown className="w-4 h-4 text-[#8B7355] animate-scroll-bounce" />
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* 2. VALUES SECTION & CORE CLINICAL SERVICES */}
      <section className="py-16 md:py-24 bg-[#FAF8F5] border-t border-b border-[#E8E1D8]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto flex flex-col gap-4 mb-16">
            <span className="text-xs font-bold tracking-[0.2em] text-[#C9A66B] uppercase">Our Golden Principles</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#2E2A26]">
              Quality, Integrity, Compassion & Service
            </h2>
            <div className="w-16 h-1 bg-[#8B7355] mx-auto rounded-full" />
            <p className="text-sm sm:text-base text-[#6F665C] leading-relaxed">
              Johns Creek Veterinary Clinic provides friendly and compassionate care for pets young and old. We offer dedicated veterinary services from breeding consultations to senior geriatric pet maintenance, complete with an in-house laboratory & pharmacy for supreme convenience.
            </p>
          </AnimatedSection>

          <AnimatedList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Preventive Care */}
            <div 
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="bg-white rounded-2xl p-6 border border-[#E8E1D8] shadow-xs flex flex-col h-full justify-between group transition-all duration-350"
            >
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 bg-[#F7F4EF] rounded-xl flex items-center justify-center text-[#8B7355]">
                  <Heart className="w-6 h-6 text-[#8B7355]" />
                </div>
                <div className="relative h-40 rounded-xl overflow-hidden border border-[#FAF8F5]">
                  <img src={IMAGES.goldenDog} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Preventative" referrerPolicy="no-referrer" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#2E2A26] mt-2">Preventive Care</h3>
                <p className="text-xs text-[#6F665C] leading-relaxed">Head-to-tail wellness assessments, core boosting immunizations, and lifelong defense plans tailored to exposure environments.</p>
              </div>
              <Link to="/core-care/routine-exams" className="mt-6 text-xs font-bold text-[#8B7355] hover:text-[#C9A66B] flex items-center gap-1 cursor-pointer">
                Learn More <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Card 2: Dentistry */}
            <div 
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="bg-white rounded-2xl p-6 border border-[#E8E1D8] shadow-xs flex flex-col h-full justify-between group transition-all duration-350"
            >
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 bg-[#F7F4EF] rounded-xl flex items-center justify-center text-[#8B7355]">
                  <Sparkles className="w-6 h-6 text-[#8B7355]" />
                </div>
                <div className="relative h-40 rounded-xl overflow-hidden border border-[#FAF8F5]">
                  <img src={IMAGES.dentalCare} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Dental Care" referrerPolicy="no-referrer" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#2E2A26] mt-2">Veterinary Dentistry</h3>
                <p className="text-xs text-[#6F665C] leading-relaxed">Ultrasonic dental scaling, polishing, deep digital charting, and periodontal therapies to block systemic health shifts.</p>
              </div>
              <Link to="/core-care/dental" className="mt-6 text-xs font-bold text-[#8B7355] hover:text-[#C9A66B] flex items-center gap-1 cursor-pointer">
                Learn More <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Card 3: Exotic Care */}
            <div 
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="bg-white rounded-2xl p-6 border border-[#E8E1D8] shadow-xs flex flex-col h-full justify-between group transition-all duration-350"
            >
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 bg-[#F7F4EF] rounded-xl flex items-center justify-center text-[#8B7355]">
                  <Stethoscope className="w-6 h-6 text-[#8B7355]" />
                </div>
                <div className="relative h-40 rounded-xl overflow-hidden border border-[#FAF8F5]">
                  <img src={IMAGES.rabbitExotic} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Exotic Pets" referrerPolicy="no-referrer" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#2E2A26] mt-2">Exotic Small Mammals</h3>
                <p className="text-xs text-[#6F665C] leading-relaxed">Specialized medicine, professional housing consultations, and therapeutic assessments for non-traditional pocket companions.</p>
              </div>
              <Link to="/core-care/exotic-pets" className="mt-6 text-xs font-bold text-[#8B7355] hover:text-[#C9A66B] flex items-center gap-1 cursor-pointer">
                Learn More <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Card 4: Surgical Care */}
            <div 
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="bg-white rounded-2xl p-6 border border-[#E8E1D8] shadow-xs flex flex-col h-full justify-between group transition-all duration-350"
            >
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 bg-[#F7F4EF] rounded-xl flex items-center justify-center text-[#8B7355]">
                  <ShieldAlert className="w-6 h-6 text-[#8B7355]" />
                </div>
                <div className="relative h-40 rounded-xl overflow-hidden border border-[#FAF8F5]">
                  <img src={IMAGES.surgeryTheatre} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Surgery" referrerPolicy="no-referrer" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#2E2A26] mt-2">Surgical Care</h3>
                <p className="text-xs text-[#6F665C] leading-relaxed">Spaying, neutering, specialized soft tissue adjustments, state-of-the-art sterile environments, and rigorous post-op management.</p>
              </div>
              <Link to="/surgery" className="mt-6 text-xs font-bold text-[#8B7355] hover:text-[#C9A66B] flex items-center gap-1 cursor-pointer">
                Learn More <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </AnimatedList>
        </div>
      </section>

      {/* 3. ABOUT OUR HOSPITAL PREVIEW Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <AnimatedSection direction="up" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="relative">
              <div className="absolute inset-4 rounded-3xl border border-[#C9A66B]/20 translate-x-3 translate-y-3 -z-10" />
              <img 
                src={IMAGES.clinicInterior} 
                className="w-full h-[400px] object-cover rounded-3xl border border-[#E8E1D8] shadow-xl" 
                alt="Clinic luxury lobby"
                referrerPolicy="no-referrer"
              />
              {/* Dynamic stats pill overlay */}
              <div className="absolute top-6 left-6 bg-[#2E2A26]/95 backdrop-blur-md px-5 py-4 rounded-2xl text-white max-w-xs border border-white/10 shadow-lg">
                <span className="font-serif text-3xl font-bold text-[#C9A66B]">20+ Yrs</span>
                <p className="text-xs text-white/80 mt-1">Caring for pets in Johns Creek, Roswell, Cumming & Milton.</p>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <span className="text-xs font-bold tracking-[0.250em] text-[#C9A66B] uppercase font-sans">Hospital Heritage</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#2E2A26] leading-snug">
                Welcome 6 Days a Week, Including Saturdays.
              </h2>
              <p className="text-sm text-[#6F665C] leading-relaxed">
                Johns Creek Veterinary Clinic is a full-service companion pet facility that has been actively maintaining and restoring pet wellness across Gwinnett and Cumming for over two decades.
              </p>
              <p className="text-sm text-[#6F665C] leading-relaxed">
                From pediatric vaccinations to complicated internal medicine diagnostics, elective surgeries and therapeutic recovery models, we execute every procedure in an incredibly serene, clean environment centered around family reassurance. Our vets hold a proud reputation for premium medical mastery delivered with a gentle, patient touch.
              </p>
              
              <div className="pt-4 flex items-center gap-6">
                <Link
                  to="/about"
                  className="px-6 py-3 bg-[#8B7355] hover:bg-[#A68A64] text-white font-bold text-xs rounded-xl shadow-xs transition-colors cursor-pointer"
                >
                  About Our Hospital
                </Link>
                <Link
                  to="/about/why-trust-us"
                  className="text-xs font-bold text-[#2E2A26] hover:text-[#8B7355] flex items-center gap-1 cursor-pointer"
                >
                  See Why Owners Trust Us <ArrowRight className="w-3.5 h-3.5 text-[#C9A66B]" />
                </Link>
              </div>
            </div>

          </AnimatedSection>
        </div>
      </section>

      {/* 4. WELLNESS PLANS PREVIEW */}
      <section className="py-16 md:py-24 bg-[#F7F4EF] border-t border-b border-[#E8E1D8] relative overflow-hidden">
        
        {/* Vector luxury gold decorative compass background */}
        <div className="absolute -bottom-16 -left-16 w-64 h-64 border border-[#C9A66B]/5 rounded-full select-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <AnimatedSection direction="up" className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl flex flex-col gap-4">
              <span className="text-xs font-bold tracking-[0.2em] text-[#C9A66B] uppercase">Comprehensive Bundled Protection</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#2E2A26]">
                Wellness Plans from JCV Clinic
              </h2>
              <p className="text-sm text-[#6F665C] leading-relaxed">
                Preventive medicine shouldn\'t mean unexpected bills. Our structured Wellness Plans map out vaccinations, deep diagnostic testing, unlimited office consults & dental cleanings into simple, interest-free monthly installments.
              </p>
            </div>
            <div>
              <Link
                to="/wellness-plans/benefits"
                className="px-6 py-3.5 bg-white border border-[#8B7355] text-[#8B7355] hover:bg-[#8B7355] hover:text-white font-bold text-xs rounded-xl shadow-xs transition-colors duration-250 inline-block text-center cursor-pointer"
              >
                Learn All Plan Benefits
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedList className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Cats Plan Card */}
            <div className="bg-white border border-[#E8E1D8] rounded-2xl p-6 relative flex flex-col justify-between group shadow-xs">
              <div className="flex flex-col gap-4">
                <span className="text-[10px] font-bold text-[#C9A66B] tracking-widest uppercase">Popular option</span>
                <h3 className="font-serif text-xl font-bold text-[#2E2A26]">Feline Preventive Suite</h3>
                <p className="text-xs text-[#6F665C]">Optimized feline diagnostics for young and senior cats.</p>
                <div className="my-2 border-b border-[#FAF8F5] pb-3">
                  <span className="text-3xl font-serif font-bold text-[#8B7355]">$49</span>
                  <span className="text-xs text-[#6F665C]"> / month</span>
                </div>
                <ul className="text-xs text-[#6F665C] flex flex-col gap-2">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#C9A66B] shrink-0" /> Unlimited General Office Consults</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#C9A66B] shrink-0" /> Annual boosters (Rabies, FVRCP)</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#C9A66B] shrink-0" /> Advanced senior bloodwork indexes</li>
                </ul>
              </div>
              <Link to="/wellness-plans/cats" className="mt-8 px-4 py-2.5 bg-[#FAF8F5] hover:bg-[#8B7355] hover:text-white text-[#8B7355] text-xs font-bold rounded-lg text-center transition-colors cursor-pointer">
                View Feline Plan
              </Link>
            </div>

            {/* Small Dog Plan Card */}
            <div className="bg-white border border-[#E8E1D8] rounded-2xl p-6 relative flex flex-col justify-between group shadow-xs">
              <div className="flex flex-col gap-4">
                <span className="text-[10px] font-bold text-[#A68A64] tracking-widest uppercase">Canine toy breeds</span>
                <h3 className="font-serif text-xl font-bold text-[#2E2A26]">Small Dog Wellness</h3>
                <p className="text-xs text-[#6F665C]">For small canine companions under 20 lbs.</p>
                <div className="my-2 border-b border-[#FAF8F5] pb-3">
                  <span className="text-3xl font-serif font-bold text-[#8B7355]">$55</span>
                  <span className="text-xs text-[#6F665C]"> / month</span>
                </div>
                <ul className="text-xs text-[#6F665C] flex flex-col gap-2">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#C9A66B] shrink-0" /> Unlimited Standard Physical Exams</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#C9A66B] shrink-0" /> All core vaccines (Rabies, DHPP)</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#C9A66B] shrink-0" /> Diagnostic heartworm baseline test</li>
                </ul>
              </div>
              <Link to="/wellness-plans/small-dog" className="mt-8 px-4 py-2.5 bg-[#FAF8F5] hover:bg-[#8B7355] hover:text-white text-[#8B7355] text-xs font-bold rounded-lg text-center transition-colors cursor-pointer">
                View Small Dog Plan
              </Link>
            </div>

            {/* Medium Dog Plan Card */}
            <div className="bg-white border border-[#E8E1D8] rounded-2xl p-6 relative flex flex-col justify-between group shadow-xs">
              <div className="flex flex-col gap-4">
                <span className="text-[10px] font-bold text-[#8B7355] tracking-widest uppercase">Best joint protection</span>
                <h3 className="font-serif text-xl font-bold text-[#2E2A26]">Medium Dog Vitality</h3>
                <p className="text-xs text-[#6F665C]">Active dogs between 21 and 50 lbs.</p>
                <div className="my-2 border-b border-[#FAF8F5] pb-3">
                  <span className="text-3xl font-serif font-bold text-[#8B7355]">$65</span>
                  <span className="text-xs text-[#6F665C]"> / month</span>
                </div>
                <ul className="text-xs text-[#6F665C] flex flex-col gap-2">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#C9A66B] shrink-0" /> Unlimited routine health assessments</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#C9A66B] shrink-0" /> Lyme Disease & Tick-borne screens</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#C9A66B] shrink-0" /> Periodontal scale discount bonus</li>
                </ul>
              </div>
              <Link to="/wellness-plans/medium-dog" className="mt-8 px-4 py-2.5 bg-[#FAF8F5] hover:bg-[#8B7355] hover:text-white text-[#8B7355] text-xs font-bold rounded-lg text-center transition-colors cursor-pointer">
                View Medium Dog Plan
              </Link>
            </div>

          </AnimatedList>

          {/* Shop Online Banner */}
          <AnimatedSection direction="up" className="mt-12 bg-white rounded-2xl p-6 md:p-8 border border-[#E8E1D8] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#FAF8F5] rounded-xl flex items-center justify-center shrink-0">
                <ArrowLeftRight className="w-6 h-6 text-[#8B7355]" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold text-[#2E2A26]">Shop Online with Johns Creek Veterinary Clinic</h4>
                <p className="text-xs text-[#6F665C] mt-0.5">Order chronic prescription diets, flea defenses, & therapeutic treats directly to your doorstep.</p>
              </div>
            </div>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); alert("You are navigating to our luxury online pet pharmacy. All prescriptions undergo chief vet Dr. Kim's review."); }}
              className="px-5 py-2.5 bg-[#2E2A26] hover:bg-[#8B7355] text-white text-xs font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap"
            >
              Shop Pharmacy Online
            </a>
          </AnimatedSection>

        </div>
      </section>

      {/* 5. TESTIMONIALS SLIDER SECTION */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <AnimatedSection direction="up" className="text-center max-w-2xl mx-auto flex flex-col gap-3 mb-12">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C9A66B] uppercase font-sans">Beloved Stories</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#2E2A26]">
              Trusted By Johns Creek Families
            </h2>
            <div className="w-12 h-0.5 bg-[#8B7355] mx-auto mt-2" />
          </AnimatedSection>

          <AnimatedSection direction="fade" className="max-w-3xl mx-auto relative min-h-[300px] flex flex-col items-center justify-center">
            <AnimatePresence mode="wait">
              {TESTIMONIALS.map((test, idx) => {
                if (idx !== activeTestimonial) return null;
                return (
                  <motion.div
                    key={test.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.45 }}
                    className="text-center flex flex-col items-center gap-6"
                  >
                    {/* Stars */}
                    <div className="flex items-center gap-1">
                      {[...Array(test.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-[#C9A66B] text-[#C9A66B]" />
                      ))}
                    </div>

                    {/* Content quote */}
                    <blockquote className="text-base sm:text-lg md:text-xl font-serif italic text-[#2E2A26] px-4 leading-relaxed max-w-2xl">
                      "{test.content}"
                    </blockquote>

                    {/* Author block */}
                    <div className="flex flex-col items-center gap-1">
                      <span className="font-serif text-sm font-bold text-[#8B7355]">{test.author}</span>
                      {test.petName && (
                        <span className="text-xs text-[#6F665C]">
                          Family of <span className="font-bold text-[#A68A64]">{test.petName}</span> ({test.petType})
                        </span>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>

            {/* Testimonial slider navigation pagination dots */}
            <div className="flex items-center gap-2.5 mt-8">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleTestimonialNav(idx)}
                  className={`h-2.5 rounded-full transition-all duration-350 cursor-pointer ${
                    idx === activeTestimonial ? 'w-8 bg-[#8B7355]' : 'w-2.5 bg-[#E8E1D8] hover:bg-[#A68A64]'
                  }`}
                  aria-label={`Go to testimonial slide ${idx + 1}`}
                />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 6. TEAM PREVIEW */}
      <section className="py-16 md:py-24 bg-[#FAF8F5] border-t border-b border-[#E8E1D8]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <AnimatedSection direction="up" className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div className="flex flex-col gap-3 max-w-2xl">
              <span className="text-xs font-bold tracking-[0.2em] text-[#C9A66B] uppercase">Clinical Excellence</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#2E2A26]">
                Our Team | Johns Creek Veterinary Clinic
              </h2>
              <p className="text-sm text-[#6F665C]">
                Meet our veterinary practitioners, coordinators, and vet technologist leads who deliver absolute medical precision with exceptional bedside kindness every single day.
              </p>
            </div>
            <div>
              <Link 
                to="/about/our-team"
                className="px-6 py-3 bg-white border border-[#E8E1D8] hover:border-[#8B7355] hover:text-[#8B7355] text-xs font-bold rounded-xl shadow-2xs transition-colors cursor-pointer block text-center"
              >
                Meet All Personnel
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((member) => (
              <div 
                key={member.id}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="bg-white rounded-2xl overflow-hidden border border-[#E8E1D8] shadow-2xs group hover:shadow-md transition-all duration-350 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-64 overflow-hidden bg-[#F7F4EF]">
                    <img 
                      src={member.imageUrl} 
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" 
                      alt={member.name}
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 bg-[#FAF8F5]/90 backdrop-blur-xs text-[10px] font-mono font-bold px-2 py-1 rounded-md text-[#8B7355] uppercase tracking-wider border border-[#E8E1D8]/60">
                      Licensed Practitioner
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-[17px] font-bold text-[#2E2A26]">{member.name}</h3>
                    <p className="text-xs text-[#A68A64] font-medium mt-0.5">{member.role}</p>
                    <p className="text-xs text-[#6F665C] mt-3 leading-relaxed line-clamp-3">{member.bio}</p>
                  </div>
                </div>
                <div className="p-5 pt-0 border-t border-[#FAF8F5] mt-auto">
                  <div className="pt-3">
                    <span className="text-[10px] text-[#6F665C]/80 block font-mono">{member.credentials || 'Specialized Assistant'}</span>
                  </div>
                </div>
              </div>
            ))}
          </AnimatedList>
        </div>
      </section>

      {/* 7. SURGERY PREVIEW */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <AnimatedSection direction="up" className="bg-[#F7F4EF] rounded-[32px] p-8 md:p-12 border border-[#E8E1D8] relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 flex flex-col gap-6">
                <span className="text-xs font-bold tracking-[0.250em] text-[#C9A66B] uppercase font-sans">Sterile Surgical Suites</span>
                <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#2E2A26] leading-tight">
                  Veterinary Surgery in Johns Creek
                </h2>
                
                <p className="text-xs sm:text-sm text-[#6F665C] leading-relaxed">
                  At Johns Creek Veterinary Clinic, we provide a variety of high-precision surgical services to help pets feel better and maintain their best possible levels of health.
                </p>

                <p className="text-xs sm:text-sm text-[#6F665C] leading-relaxed">
                  Whether your pet experiences an urgent rescue encounter requiring soft tissue surgery, or basic procedures like neutering/spaying, our state-of-the-art sterile theatre holds the highest benchmarks. We focus intensely on multi-faceted anesthesia monitoring, active heat management, direct respiratory support, and personalized post-operative pain calibration.
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#6F665C] font-semibold">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#8B7355]" /> Elective Spaying & Neutering</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#8B7355]" /> Critical Soft Tissue Surgical Care</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#8B7355]" /> Advanced Orthopedic Repair</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#8B7355]" /> Multi-Factor Anesthetic Logs</li>
                </ul>

                <div className="mt-4">
                  <Link
                    to="/surgery"
                    className="px-6 py-3 bg-[#2E2A26] hover:bg-[#8B7355] text-white font-bold text-xs rounded-xl shadow-xs transition-colors cursor-pointer inline-block"
                  >
                    Learn Surgical Procedures
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 relative mt-6 lg:mt-0">
                <div className="absolute inset-4 rounded-3xl border border-[#FAF8F5]/40 translate-x-2 translate-y-2 -z-10" />
                <img 
                  src={IMAGES.surgeryTheatre} 
                  className="w-full h-[280px] sm:h-[320px] object-cover rounded-3xl border border-[#E8E1D8] shadow-md" 
                  alt="Surgery Suite sterile" 
                  referrerPolicy="no-referrer"
                />
              </div>

            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 8. HOURS & ADDRESS CONTACT SECTION */}
      <section className="py-16 md:py-24 bg-[#FAF8F5] border-t border-[#E8E1D8]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <AnimatedSection direction="up" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Left Hours Detail Column */}
            <div className="lg:col-span-5 bg-white border border-[#E8E1D8] rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold tracking-[0.2em] text-[#C9A66B] uppercase font-sans block mb-2">Weekly Availability</span>
                <h3 className="font-serif text-2xl font-bold text-[#2E2A26] mb-6">
                  Clinic Operation Hours
                </h3>

                <div className="flex flex-col gap-3.5">
                  <div className="flex justify-between items-center text-xs pb-3.5 border-b border-[#FAF8F5] text-[#2E2A26]">
                    <span className="font-semibold">Monday</span>
                    <span className="font-mono">08:00 AM - 06:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center text-xs pb-3.5 border-b border-[#FAF8F5] text-[#2E2A26]">
                    <span className="font-semibold">Tuesday</span>
                    <span className="font-mono">08:00 AM - 06:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center text-xs pb-3.5 border-b border-[#FAF8F5] text-[#2E2A26]">
                    <span className="font-semibold">Wednesday</span>
                    <span className="font-mono">08:00 AM - 06:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center text-xs pb-3.5 border-b border-[#FAF8F5] text-[#2E2A26]">
                    <span className="font-semibold">Thursday</span>
                    <span className="font-mono">08:00 AM - 06:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center text-xs pb-3.5 border-b border-[#FAF8F5] text-[#2E2A26]">
                    <span className="font-semibold">Friday</span>
                    <span className="font-mono">08:00 AM - 06:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center text-xs pb-3.5 border-b border-[#FAF8F5] text-[#2E2A26]">
                    <div className="flex items-center gap-1.5 font-semibold text-[#8B7355]">
                      <span>Saturday</span>
                      <span className="text-[10px] bg-[#F7F4EF] px-1.5 py-0.5 rounded-full uppercase text-[#C9A66B]">Saturday Appts</span>
                    </div>
                    <span className="font-mono font-semibold">08:00 AM - 02:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center text-xs text-[#6F665C] pt-1">
                    <span className="font-semibold text-stone">Sunday</span>
                    <span className="font-bold text-[#8B7355] uppercase">Closed for Rest</span>
                  </div>
                </div>
              </div>

              {/* Quick warning */}
              <div className="mt-8 pt-4 border-t border-[#FAF8F5] text-[11.5px] text-[#6F665C] leading-relaxed flex items-start gap-2 bg-[#FAF8F5]/60 p-3 rounded-xl border border-[#E8E1D8]/40">
                <AlertCircle className="w-4 h-4 text-[#C9A66B] shrink-0 mt-0.5" />
                <span>Urgent surgical interventions scheduled daily from 12:00 PM to 02:00 PM. Call in advance to ensure rapid physician intake.</span>
              </div>
            </div>

            {/* Right Map/Contact Column */}
            <div className="lg:col-span-7 flex flex-col justify-between gap-6">
              
              <div className="flex flex-col gap-4">
                <span className="text-xs font-bold tracking-[0.2em] text-[#C9A66B] uppercase font-sans">Primary Footprints</span>
                <h3 className="font-serif text-3xl font-semibold text-[#2E2A26]">
                  Open 6 Days a Week in Johns Creek GA
                </h3>
                <p className="text-xs sm:text-sm text-[#6F665C] leading-relaxed">
                  We are conveniently stationed right on Medlock Bridge Rd, surrounded by Roswell, Milton, Cumming, and Gwinnett families. Visit us for stress-free outpatient drop-offs.
                </p>
                
                {/* Physical tags details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                  <div className="flex items-start gap-3 bg-white border border-[#E8E1D8] p-4 rounded-xl">
                    <MapPin className="w-5 h-5 text-[#8B7355] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-[#2E2A26] block">Hospital Location</span>
                      <span className="text-xs text-[#6F665C] leading-snug mt-1 block">
                        10540 Medlock Bridge Rd<br />
                        Johns Creek, GA 30097 US
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-white border border-[#E8E1D8] p-4 rounded-xl">
                    <Phone className="w-5 h-5 text-[#8B7355] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-[#2E2A26] block">Direct Extensions</span>
                      <a href="tel:7706238387" className="text-xs text-[#8B7355] font-semibold hover:underline mt-1 block">
                        (770) 623-8387
                      </a>
                      <span className="text-[10px] text-[#6F665C] mt-0.5 block">Fax: (770) 623-8395</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* High-fidelity Vector map preview (interactive clickable) */}
              <div className="bg-white rounded-2xl border border-[#E8E1D8] p-2 shadow-xs group">
                <div className="relative h-44 rounded-xl overflow-hidden bg-[#F7F4EF] border border-[#FAF8F5] flex items-center justify-center">
                  {/* Map visual background layout */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#E8E1D8_1px,transparent_1px),linear-gradient(to_bottom,#E8E1D8_1px,transparent_1px)] bg-[size:20px_20px] opacity-40" />
                  
                  {/* Decorative map trace lines */}
                  <svg className="absolute inset-0 w-full h-full stroke-[#C9A66B]/50 fill-none stroke-[2px]" viewBox="0 0 400 200">
                    <path d="M-20 180 L420 20 M120 -20 L280 220" />
                    <circle cx="210" cy="90" r="30" fill="none" stroke="#8B7355" strokeWidth="1" strokeDasharray="4 2" />
                  </svg>

                  {/* Marker pulse */}
                  <div className="relative z-10 text-center flex flex-col items-center">
                    <div className="w-10 h-10 bg-[#8B7355] border-2 border-white rounded-full flex items-center justify-center shadow-lg animate-bounce">
                      <MapPin className="w-5 h-5 text-[#C9A66B] fill-[#C9A66B]" />
                    </div>
                    <span className="text-[11px] font-bold text-[#2E2A26] mt-2 block bg-white px-2 py-1 border border-[#E8E1D8] rounded-md shadow-xs">
                      Medlock Bridge Rd, GA
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 mt-1">
                <Link
                  to="/contact"
                  className="px-6 py-3.5 bg-[#8B7355] hover:bg-[#A68A64] text-white font-bold text-xs rounded-xl shadow-xs transition-colors cursor-pointer text-center flex-1"
                >
                  Contact Us Now
                </Link>
                <Link
                  to="/patients/new-form"
                  className="px-6 py-3.5 bg-[#FAF8F5] hover:bg-[#E8E1D8] text-[#2E2A26] font-bold text-xs rounded-xl border border-[#E8E1D8] transition-colors cursor-pointer text-center flex-1"
                >
                  New Patient Forms
                </Link>
              </div>

            </div>

          </AnimatedSection>
        </div>
      </section>
    </PageTransition>
  );
}
