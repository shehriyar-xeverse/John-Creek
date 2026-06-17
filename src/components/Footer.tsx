/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, MessageCircleCode, Youtube, Linkedin, Heart, HelpCircle, Check, ArrowRight } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 4000);
    }
  };

  return (
    <footer className="bg-[#2E2A26] text-white pt-16 pb-8 border-t border-[#E8E1D8]/10" id="app-footer">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Main Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-white/5">
          
          {/* Logo & Info column */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl">
                <svg viewBox="0 0 100 100" className="w-8 h-8 fill-[#C9A66B] stroke-[#C9A66B] stroke-[2px]">
                  <circle cx="50" cy="55" r="14" />
                  <circle cx="28" cy="38" r="7" />
                  <circle cx="43" cy="26" r="7" />
                  <circle cx="57" cy="26" r="7" />
                  <circle cx="72" cy="38" r="7" />
                  <path d="M22 24 L27 12 L35 20 M78 24 L73 12 L65 20" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-[15px] font-bold tracking-wider text-white">
                  JOHN CREEK
                </span>
                <span className="text-[10px] font-sans font-bold tracking-[0.250em] text-[#C9A66B] uppercase">
                  VETERINARY CLINIC
                </span>
              </div>
            </div>

            <p className="text-sm text-[#FAF8F5]/70 leading-relaxed max-w-sm">
              Providing friendly, compassionate, and luxurious care for dogs, cats, and exotic companion mammals in Johns Creek and surrounding communities for over 20 years.
            </p>

            {/* Social channels */}
            <div className="flex items-center gap-3 mt-1">
              <a href="#" className="p-2 border border-white/10 rounded-lg hover:bg-[#C9A66B] hover:text-white transition-colors cursor-pointer" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 border border-white/10 rounded-lg hover:bg-[#C9A66B] hover:text-white transition-colors cursor-pointer" aria-label="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 border border-white/10 rounded-lg hover:bg-[#C9A66B] hover:text-white transition-colors cursor-pointer" aria-label="Emergency Thread">
                <MessageCircleCode className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-base font-bold text-[#C9A66B] tracking-wide">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              <Link to="/about" className="text-sm text-[#FAF8F5]/80 hover:text-[#C9A66B] transition-colors flex items-center gap-1 cursor-pointer">
                <ArrowRight className="w-3 h-3 text-[#C9A66B]/60" /> About
              </Link>
              <Link to="/about/hospital" className="text-sm text-[#FAF8F5]/80 hover:text-[#C9A66B] transition-colors flex items-center gap-1 cursor-pointer">
                <ArrowRight className="w-3 h-3 text-[#C9A66B]/60" /> Our Hospital
              </Link>
              <Link to="/about/why-trust-us" className="text-sm text-[#FAF8F5]/80 hover:text-[#C9A66B] transition-colors flex items-center gap-1 cursor-pointer">
                <ArrowRight className="w-3 h-3 text-[#C9A66B]/60" /> Why Trust Us
              </Link>
              <Link to="/about/our-vet" className="text-sm text-[#FAF8F5]/80 hover:text-[#C9A66B] transition-colors flex items-center gap-1 cursor-pointer">
                <ArrowRight className="w-3 h-3 text-[#C9A66B]/60" /> Our Vet
              </Link>
              <Link to="/about/our-team" className="text-sm text-[#FAF8F5]/80 hover:text-[#C9A66B] transition-colors flex items-center gap-1 cursor-pointer">
                <ArrowRight className="w-3 h-3 text-[#C9A66B]/60" /> Our Team
              </Link>
              <Link to="/careers" className="text-sm text-[#FAF8F5]/80 hover:text-[#C9A66B] transition-colors flex items-center gap-1 cursor-pointer">
                <ArrowRight className="w-3 h-3 text-[#C9A66B]/60" /> Careers
              </Link>
              <Link to="/surgery" className="text-sm text-[#FAF8F5]/80 hover:text-[#C9A66B] transition-colors flex items-center gap-1 cursor-pointer">
                <ArrowRight className="w-3 h-3 text-[#C9A66B]/60" /> Surgery
              </Link>
              <Link to="/lab" className="text-sm text-[#FAF8F5]/80 hover:text-[#C9A66B] transition-colors flex items-center gap-1 cursor-pointer">
                <ArrowRight className="w-3 h-3 text-[#C9A66B]/60" /> Lab
              </Link>
              <Link to="/patients/blog" className="text-sm text-[#FAF8F5]/80 hover:text-[#C9A66B] transition-colors flex items-center gap-1 cursor-pointer">
                <ArrowRight className="w-3 h-3 text-[#C9A66B]/60" /> Pet Advice
              </Link>
              <Link to="/contact" className="text-sm text-[#FAF8F5]/80 hover:text-[#C9A66B] transition-colors flex items-center gap-1 cursor-pointer">
                <ArrowRight className="w-3 h-3 text-[#C9A66B]/60" /> Contact
              </Link>
            </div>
          </div>

          {/* Primary Operations Column */}
          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-base font-bold text-[#C9A66B] tracking-wide">
              Services Offered
            </h3>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link to="/core-care/routine-exams" className="text-sm text-[#FAF8F5]/80 hover:text-[#C9A66B] transition-colors flex items-center gap-2 cursor-pointer">
                  <Heart className="w-3.5 h-3.5 text-[#C9A66B]/70" /> Routine Exams
                </Link>
              </li>
              <li>
                <Link to="/core-care/vaccinations" className="text-sm text-[#FAF8F5]/80 hover:text-[#C9A66B] transition-colors flex items-center gap-2 cursor-pointer">
                  <Heart className="w-3.5 h-3.5 text-[#C9A66B]/70" /> Vaccinations & Prevention
                </Link>
              </li>
              <li>
                <Link to="/core-care/exotic-pets" className="text-sm text-[#FAF8F5]/80 hover:text-[#C9A66B] transition-colors flex items-center gap-2 cursor-pointer">
                  <Heart className="w-3.5 h-3.5 text-[#C9A66B]/70" /> Exotic Pets Care
                </Link>
              </li>
              <li>
                <Link to="/core-care/dental" className="text-sm text-[#FAF8F5]/80 hover:text-[#C9A66B] transition-colors flex items-center gap-2 cursor-pointer">
                  <Heart className="w-3.5 h-3.5 text-[#C9A66B]/70" /> Advanced Dentistry
                </Link>
              </li>
              <li>
                <Link to="/core-care/geriatric" className="text-sm text-[#FAF8F5]/80 hover:text-[#C9A66B] transition-colors flex items-center gap-2 cursor-pointer">
                  <Heart className="w-3.5 h-3.5 text-[#C9A66B]/70" /> Geriatric Life Support
                </Link>
              </li>
              <li>
                <Link to="/core-care/boarding" className="text-sm text-[#FAF8F5]/80 hover:text-[#C9A66B] transition-colors flex items-center gap-2 cursor-pointer">
                  <Heart className="w-3.5 h-3.5 text-[#C9A66B]/70" /> Medical Boarding & Hotel
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-base font-bold text-[#C9A66B] tracking-wide">
              Newsletter Signup
            </h3>
            <p className="text-sm text-[#FAF8F5]/70 leading-relaxed">
              Unlock seasonal tips, direct promo codes and professional healthcare articles monthly.
            </p>

            <form onSubmit={handleSubscribe} className="relative mt-2">
              <input
                type="email"
                placeholder="Pet Owner Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm outline-none text-white focus:border-[#C9A66B] focus:ring-1 focus:ring-[#C9A66B] transition-all"
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 p-1.5 bg-[#8B7355] hover:bg-[#C9A66B] text-white rounded-lg transition-colors cursor-pointer"
                aria-label="Subscribe"
              >
                {subscribed ? <Check className="w-4 h-4 text-white" /> : <Send className="w-4 h-4" />}
              </button>
            </form>

            {subscribed && (
              <p className="text-xs text-[#C9A66B] animate-pulse">
                Thank you! You have safely subscribed to JCV newsletter.
              </p>
            )}

            <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-white/5 text-xs text-[#FAF8F5]/60">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C9A66B]" /> <span>10540 Medlock Bridge Rd, Johns Creek, GA</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C9A66B]" /> <a href="tel:7706238387" className="hover:text-white transition-colors">(770) 623-8387</a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Footer Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF8F5]/50">
          <div>
            &copy; {new Date().getFullYear()} John Creek Veterinary Clinic. All rights reserved. Registered Hospital GA.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#C9A66B] transition-colors flex items-center gap-1 cursor-pointer">
              <HelpCircle className="w-3.5 h-3.5" /> HIPAA Compliance
            </a>
            <a href="#" className="hover:text-[#C9A66B] transition-colors cursor-pointer">Privacy Statement</a>
            <a href="#" className="hover:text-[#C9A66B] transition-colors cursor-pointer">Emergency Direct Access</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
