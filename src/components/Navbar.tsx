/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Heart, ClipboardCheck, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavDropdownItem {
  name: string;
  path: string;
  desc?: string;
}

interface NavCategory {
  name: string;
  path?: string;
  items?: NavDropdownItem[];
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Scroll handler to control glass effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const navCategories: NavCategory[] = [
    {
      name: 'About',
      items: [
        { name: 'About Overview', path: '/about', desc: 'Our veterinary values, history and deep mission.' },
        { name: 'Our Hospital', path: '/about/hospital', desc: 'Tour our state-of-the-art diagnostic facility.' },
        { name: 'Why Trust Us?', path: '/about/why-trust-us', desc: 'Our rigorous compliance and compassionate standards.' },
        { name: 'Our Vet', path: '/about/our-vet', desc: 'Meet Dr. Evelyn Kim, Chief Medical Director.' },
        { name: 'Our Team', path: '/about/our-team', desc: 'Meet our lead medical assistants and practitioners.' }
      ]
    },
    {
      name: 'Wellness Plans',
      items: [
        { name: 'Wellness Plan Benefits', path: '/wellness-plans/benefits', desc: 'Preventive bundling designed for long-term health logs.' },
        { name: 'Small Dog Wellness', path: '/wellness-plans/small-dog', desc: 'Comprehensive protection for canine companions under 20 lbs.' },
        { name: 'Medium Dog Wellness', path: '/wellness-plans/medium-dog', desc: 'Joint & preventative shield for active dogs 21 to 50 lbs.' },
        { name: 'Large Dog Wellness', path: '/wellness-plans/large-dog', desc: 'Enhanced baseline tracking for guard and large dog systems.' },
        { name: 'Extra Large Dog Wellness', path: '/wellness-plans/extra-large-dog', desc: 'Support models for active giants up to 110 lbs.' },
        { name: 'Giant Dog Wellness', path: '/wellness-plans/giant-dog', desc: 'Anatomically focused metabolic screens for massive breeds.' },
        { name: 'Cats Wellness Plan', path: '/wellness-plans/cats', desc: 'Feline preventive diagnostic panels & boosting packages.' }
      ]
    },
    {
      name: 'Core Care',
      items: [
        { name: 'Routine Exams', path: '/core-care/routine-exams', desc: 'General diagnostics and preventative medical checkups.' },
        { name: 'Vaccinations & Prevention', path: '/core-care/vaccinations', desc: 'High-efficacy shielding against environmental risk.' },
        { name: 'Exotic Pets Care', path: '/core-care/exotic-pets', desc: 'Care for rabbits, guinea pigs, ferrets & pocket mammals.' },
        { name: 'Dental Care', path: '/core-care/dental', desc: 'Dental scaling, polishing, complex surgical extractions.' },
        { name: 'Geriatric Care', path: '/core-care/geriatric', desc: 'Targeted mobility and pain management for senior lifetimes.' },
        { name: 'Internal Medicine', path: '/core-care/internal-medicine', desc: 'Cardiovascular, renal, and diabetic therapy structures.' },
        { name: 'Pet Grooming', path: '/core-care/grooming', desc: 'Luxury diagnostic coat washes and therapeutic styling.' },
        { name: 'Pet Hotel & Boarding', path: '/core-care/boarding', desc: 'On-duty physician supervised boarding suites.' },
        { name: 'Emergency Care', path: '/core-care/emergency', desc: 'Rapid trauma diagnostics during clinic hours.' }
      ]
    },
    { name: 'Surgery', path: '/surgery' },
    { name: 'Lab', path: '/lab' },
    {
      name: 'Patients',
      items: [
        { name: 'Patients Hub', path: '/patients', desc: 'Everything you need prior to check-in.' },
        { name: 'New Patient Form', path: '/patients/new-form', desc: 'Instantly fill out your intake questionnaire online.' },
        { name: 'Pet Advice Blog', path: '/patients/blog', desc: 'Doctor written articles, tips, and clinical updates.' },
        { name: 'Current Promotions', path: '/patients/promotions', desc: 'Complimentary consults & seasonal discount codes.' },
        { name: 'Boarding Requirements', path: '/patients/requirements', desc: 'Core vaccines and hygiene requirements.' },
        { name: 'Financing Options', path: '/patients/financing', desc: 'Interest-free payment assistance plans.' }
      ]
    },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' }
  ];

  /* 
    Custom SVG Veterinary Logo incorporating:
    - Pet Paw Details
    - Dog/Cat profiles (geometric silhouette)
    - Medical Cross element 
  */
  const Logo = () => (
    <div className="flex items-center gap-3 select-none">
      <div className="relative w-10 h-10 flex items-center justify-center bg-[#FAF8F5] border border-[#E8E1D8] rounded-xl shadow-xs">
        {/* Medical Cross Base */}
        <div className="absolute w-6 h-2 bg-[#8B7355] rounded-xs" />
        <div className="absolute h-6 w-2 bg-[#8B7355] rounded-xs" />
        
        {/* Paw Prints overlayed & dynamic feline ears */}
        <svg
          viewBox="0 0 100 100"
          className="absolute w-8 h-8 fill-[#C9A66B] stroke-[#8B7355] stroke-[4px]"
        >
          {/* Paw Pad central */}
          <circle cx="50" cy="55" r="14" />
          {/* Paw Toes */}
          <circle cx="28" cy="38" r="7" />
          <circle cx="43" cy="26" r="7" />
          <circle cx="57" cy="26" r="7" />
          <circle cx="72" cy="38" r="7" />
          
          {/* Minimal silhouette ear shape */}
          <path d="M22 24 L27 12 L35 20 M78 24 L73 12 L65 20" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      </div>
      <div className="flex flex-col">
        <span className="font-serif text-[15px] font-bold tracking-wider leading-none text-[#2E2A26]">
          JOHN CREEK
        </span>
        <span className="text-[10px] font-sans font-bold tracking-[0.25em] text-[#C9A66B] uppercase leading-tight">
          VETERINARY CLINIC
        </span>
      </div>
    </div>
  );

  return (
    <>
      {/* Scroll indicator bar on top */}
      <div id="scroll-progress" className="block md:block" />

      <header
        className={`fixed top-3 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-999 transition-all duration-350 rounded-2xl ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-lg border border-[#E8E1D8]/80 py-2.5 px-4 sm:px-6'
            : 'bg-white/98 border border-[#E8E1D8]/50 py-3.5 px-4 sm:px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          <Link to="/" className="cursor-pointer" id="logo-nav-link" aria-label="John Creek Veterinary Clinic Home">
            <Logo />
          </Link>
 
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5">
            {navCategories.map((category) => {
              const isDropdown = !!category.items;
              const hasActiveChild = isDropdown && category.items?.some(item => location.pathname === item.path);
              const isActiveDirect = !isDropdown && location.pathname === category.path;

              return (
                <div
                  key={category.name}
                  className="relative group py-2"
                  onMouseEnter={() => isDropdown && setActiveDropdown(category.name)}
                  onMouseLeave={() => isDropdown && setActiveDropdown(null)}
                >
                  {isDropdown ? (
                    <button
                      className={`flex items-center gap-0.5 xl:gap-1 px-2 xl:px-3 py-2 text-[10px] xl:text-[11.5px] font-bold uppercase tracking-wider rounded-lg cursor-pointer transition-colors nav-underline-hover ${
                        hasActiveChild 
                          ? 'text-[#A68A64] bg-[#FAF8F5]' 
                          : 'text-[#2E2A26] hover:text-[#8B7355] hover:bg-[#FAF8F5]'
                      }`}
                      aria-expanded={activeDropdown === category.name}
                    >
                      {category.name}
                      <ChevronDown className={`w-2.5 h-2.5 xl:w-3 xl:h-3 transition-transform duration-300 ${
                        activeDropdown === category.name ? 'rotate-180 text-[#8B7355]' : 'text-[#6F665C]'
                      }`} />
                    </button>
                  ) : (
                    <Link
                      to={category.path || '/'}
                      className={`px-2 xl:px-3 py-2 text-[10px] xl:text-[11.5px] font-bold uppercase tracking-wider rounded-lg cursor-pointer transition-all duration-300 block relative nav-underline-hover ${
                        isActiveDirect 
                          ? 'text-[#A68A64] bg-[#FAF8F5]' 
                          : 'text-[#2E2A26] hover:text-[#8B7355] hover:bg-[#FAF8F5]'
                      }`}
                    >
                      {category.name}
                      {isActiveDirect && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#C9A66B] rounded-full"
                          transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                        />
                      )}
                    </Link>
                  )}
 
                  {/* Mega Dropdown Menu - 2 Columns */}
                  {isDropdown && (
                    <AnimatePresence>
                      {activeDropdown === category.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.98 }}
                          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                          className={`absolute top-full ${
                            category.name === 'Core Care' || category.name === 'Wellness Plans' ? '-left-64' : '-left-16'
                          } mt-2 w-[540px] bg-white/98 backdrop-blur-2xl border border-[#E8E1D8] rounded-2xl shadow-[0_20px_50px_rgba(46,42,38,0.18)] p-5 overflow-hidden z-1000 before:content-[''] before:absolute before:-top-3 before:left-0 before:right-0 before:h-3 before:bg-transparent`}
                        >
                          {/* Top Accent line */}
                          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#8B7355] to-[#C9A66B]" />
                          
                          <div className="flex flex-col">
                            <span className="text-[10px] font-bold text-[#A68A64] tracking-[0.2em] uppercase mb-3 block">
                              Explore {category.name}
                            </span>
                            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
                              {category.items?.map((item) => {
                                const isSubActive = location.pathname === item.path;
                                return (
                                  <Link
                                    key={item.name}
                                    to={item.path}
                                    className={`group/item flex flex-col p-2.5 rounded-xl cursor-pointer transition-all duration-200 ${
                                      isSubActive 
                                        ? 'bg-[#F7F4EF]' 
                                        : 'hover:bg-[#FAF8F5]'
                                    }`}
                                  >
                                    <div className="flex items-center justify-between">
                                      <span className={`text-[12.5px] font-bold transition-colors duration-200 flex items-center gap-1.5 ${
                                        isSubActive ? 'text-[#8B7355]' : 'text-[#2E2A26] group-hover/item:text-[#8B7355]'
                                      }`}>
                                        {item.name}
                                      </span>
                                      <ArrowRight className="w-3.5 h-3.5 text-[#C9A66B] opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200" />
                                    </div>
                                    {item.desc && (
                                      <span className="text-[10.5px] text-[#6F665C] mt-0.5 leading-snug line-clamp-1">
                                        {item.desc}
                                      </span>
                                    )}
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}
          </nav>
 
          {/* Call-to-actions */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3">
            <a
              href="tel:7706238387"
              className="flex items-center gap-1 px-2.5 py-1.5 bg-[#FAF8F5] hover:bg-[#F7F4EF] text-[#8B7355] hover:text-[#2E2A26] font-bold text-[10.5px] xl:text-[11px] uppercase tracking-wider rounded-full border border-[#E8E1D8] transition-all cursor-pointer shrink-0"
            >
              <Phone className="w-3 h-3 xl:w-3.5 xl:h-3.5 text-[#C9A66B]" />
              <span className="hidden xl:inline">(770) 623-8387</span>
              <span className="inline xl:hidden">Call Clinic</span>
            </a>
            <Link
              to="/contact"
              className="flex items-center gap-1 px-3 py-1.5 xl:px-4 xl:py-2 bg-[#8B7355] hover:bg-[#A68A64] text-white font-bold text-[10.5px] xl:text-[11px] uppercase tracking-wider rounded-[12px] shadow-sm transition-all duration-350 transform active:scale-95 cursor-pointer shrink-0"
            >
              <ClipboardCheck className="w-3 h-3 xl:w-3.5 xl:h-3.5 text-white" />
              Book Online
            </Link>
          </div>
 
          {/* Hamburger (Mobile) */}
          <div className="flex items-center lg:hidden gap-3">
            <a
              href="tel:7706238387"
              className="flex items-center justify-center p-2 bg-[#FAF8F5] text-[#8B7355] rounded-full border border-[#E8E1D8] cursor-pointer"
              aria-label="Call Hospital"
            >
              <Phone className="w-4 h-4 text-[#C9A66B]" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[#2E2A26] hover:text-[#8B7355] rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle navigation drawer"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (with full screen staggered layout) */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop slide-in */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black z-990 lg:hidden"
            />

            {/* Navigation panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', bounce: 0, duration: 0.45 }}
              className="fixed top-0 right-0 w-full sm:w-[400px] h-full bg-white border-l border-[#E8E1D8] z-995 shadow-2xl overflow-y-auto flex flex-col p-6 lg:hidden"
            >
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#FAF8F5]">
                <Logo />
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 border border-[#E8E1D8] rounded-xl hover:bg-[#FAF8F5] text-[#2E2A26] cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Accordion Categories */}
              <div className="flex-1 flex flex-col gap-4">
                {navCategories.map((cat) => {
                  const isDropdown = !!cat.items;
                  const isCurActive = activeDropdown === cat.name;

                  return (
                    <div key={cat.name} className="border-b border-[#FAF8F5] pb-2">
                      {isDropdown ? (
                        <div>
                          <button
                            onClick={() => setActiveDropdown(isCurActive ? null : cat.name)}
                            className="flex items-center justify-between w-full py-2 text-base font-semibold text-[#2E2A26] hover:text-[#8B7355] cursor-pointer"
                          >
                            <span>{cat.name}</span>
                            <ChevronDown className={`w-4 h-4 text-[#A68A64] transition-transform duration-300 ${isCurActive ? 'rotate-180' : ''}`} />
                          </button>

                          <AnimatePresence initial={false}>
                            {isCurActive && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden bg-[#FAF8F5] rounded-xl mt-1 p-2 flex flex-col gap-1"
                              >
                                {cat.items?.map((item) => (
                                  <Link
                                    key={item.name}
                                    to={item.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`px-3 py-2 text-[13.5px] rounded-lg cursor-pointer transition-colors ${
                                      location.pathname === item.path
                                        ? 'bg-[#E8E1D8] text-[#8B7355] font-bold'
                                        : 'text-[#6F665C] hover:bg-[#F7F4EF] hover:text-[#2E2A26]'
                                    }`}
                                  >
                                    {item.name}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          to={cat.path || '/'}
                          onClick={() => setIsOpen(false)}
                          className={`block py-2 text-base font-semibold cursor-pointer ${
                            location.pathname === cat.path
                              ? 'text-[#8B7355] font-bold'
                              : 'text-[#2E2A26] hover:text-[#8B7355]'
                          }`}
                        >
                          {cat.name}
                        </Link>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Bottom Drawer actions */}
              <div className="mt-8 pt-4 border-t border-[#FAF8F5] flex flex-col gap-3">
                <a
                  href="tel:7706238387"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-[#FAF8F5] text-[#8B7355] font-medium text-sm rounded-xl border border-[#E8E1D8] cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-[#C9A66B]" />
                  Call: (770) 623-8387
                </a>
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-[#8B7355] text-white font-medium text-sm rounded-xl hover:bg-[#A68A64] text-center cursor-pointer shadow-md"
                >
                  <Heart className="w-4 h-4 text-[#C9A66B] fill-[#C9A66B]" />
                  Book Appointment Online
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
