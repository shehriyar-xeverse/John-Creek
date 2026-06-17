/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, Mail, MapPin, Clock, AlertCircle, 
  CheckCircle2, Check, ArrowRight 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import PageTransition from '../components/PageTransition';
import InteractiveMap from '../components/InteractiveMap';
import { IMAGES } from '../data/clinicData';

const CONTACT_INFO = {
  phone: '(770) 623-8387',
  email: 'care@johnscreekvet.com',
  addressSimple: 'Johns Creek, GA',
  addressFull: '10900 Medlock Bridge Rd, Johns Creek, GA 30097',
  hours: [
    { days: 'Monday - Friday', time: '08:00 AM - 06:00 PM' },
    { days: 'Saturday', time: '09:00 AM - 02:00 PM' }
  ]
};

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [petDetails, setPetDetails] = useState('');
  const [message, setMessage] = useState('');
  const [reason, setReason] = useState('Consultation');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      setFormError("Please enter your name, email, and contact number.");
      return;
    }

    setFormError(null);
    setSubmitted(true);
    // Reset fields
    setName('');
    setEmail('');
    setPhone('');
    setPetDetails('');
    setMessage('');
  };

  return (
    <PageTransition>
      {/* Header Section */}
      <section className="pt-28 pb-12 bg-[#FAF8F5] border-b border-[#E8E1D8]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <span className="text-xs font-bold tracking-[0.25em] text-[#C9A66B] uppercase block mb-2">Hospital Coordinates</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2E2A26] tracking-tight">
            Connect With Our Johns Creek Team
          </h1>
          <p className="text-sm text-[#6F665C] mt-2 max-w-2xl leading-relaxed">
            Have questions about our wellness plans, surgical suites, or exotics care? Leave us a secure memo or dial our clinical coordinator directly.
          </p>
        </div>
      </section>

      {/* Main Core Content */}
      <section className="py-12 bg-white flex-1 animate-fadeIn">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Contact Cards & Map */}
            <div className="lg:col-span-6 space-y-8">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Telephone */}
                <div className="p-5 border border-[#E8E1D8] bg-[#FAF8F5]/40 rounded-2xl flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E8E1D8] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#8B7355]" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#A68A64]">Contact Desk</span>
                    <a href={`tel:${CONTACT_INFO.phone.replace(/\D/g, '')}`} className="font-serif text-base font-bold text-[#2E2A26] hover:underline mt-1 block">
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* Email Address */}
                <div className="p-5 border border-[#E8E1D8] bg-[#FAF8F5]/40 rounded-2xl flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E8E1D8] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#8B7355]" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#A68A64]">Email Us</span>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="font-serif text-sm font-bold text-[#2E2A26] hover:underline mt-1 block break-all">
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Physical Location Detail Card */}
              <div className="p-6 border border-[#E8E1D8] bg-[#FAF8F5]/40 rounded-2xl space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E8E1D8] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#8B7355]" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#A68A64]">Our Address</span>
                    <h3 className="font-serif text-base font-bold text-[#2E2A26] mt-0.5">{CONTACT_INFO.addressSimple}</h3>
                    <p className="text-xs text-[#6F665C] mt-1 pr-6 leading-relaxed">{CONTACT_INFO.addressFull}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E8E1D8]/60 flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E8E1D8] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#8B7355]" />
                  </div>
                  <div className="flex-1">
                    <span className="text-[10px] uppercase font-bold text-[#A68A64]">Hours of Operation</span>
                    <div className="grid grid-cols-2 gap-x-6 gap-y-1.5 mt-1 text-xs text-[#6F665C]">
                      {CONTACT_INFO.hours.map((h, idx) => (
                        <div key={idx} className="flex justify-between col-span-2">
                          <span className="font-bold text-[#2E2A26]">{h.days}</span>
                          <span>{h.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Precise Johns Creek Geographic SVG Vector Map */}
              <div className="space-y-3">
                <span className="text-xs font-bold text-[#A68A64] tracking-wider uppercase">Johns Creek Interactive Territory Map</span>
                <div className="h-64 rounded-2xl border border-[#E8E1D8] overflow-hidden">
                  <InteractiveMap />
                </div>
              </div>

            </div>

            {/* Right Column: Contact/Booking Request Form */}
            <div className="lg:col-span-6">
              <div className="bg-[#FAF8F5] border border-[#E8E1D8] rounded-2xl p-6 md:p-8">
                
                <h2 className="font-serif text-xl font-bold text-[#2E2A26] pb-2 border-b border-[#E8E1D8] mb-4">
                  Request an Appointment
                </h2>
                <p className="text-xs text-[#6F665C] mb-6 leading-relaxed">
                  Enter your scheduling criteria below. Our client services desk will confirm final specific time slots in under 2 hours.
                </p>

                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      
                      {formError && (
                        <div className="p-3 bg-white border-l-4 border-amber-600 rounded-md text-xs text-[#2E2A26] mb-2 flex items-center gap-2">
                          <AlertCircle className="w-4 h-4 shrink-0 text-[#C9A66B]" />
                          <span>{formError}</span>
                        </div>
                      )}

                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-bold text-[#6F665C]">Full Owner Name *</label>
                          <input 
                            type="text" 
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="e.g. Richard Nixon" 
                            className="bg-white border border-[#E8E1D8] rounded-xl px-4 py-2.5 text-xs outline-none focus:border-[#8B7355] transition-all"
                          />
                        </div>

                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-bold text-[#6F665C]">Contact Phone *</label>
                          <input 
                            type="tel" 
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="(770) 623-8387" 
                            className="bg-white border border-[#E8E1D8] rounded-xl px-4 py-2.5 text-xs outline-none focus:border-[#8B7355] transition-all"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-[#6F665C]">Email Address *</label>
                        <input 
                          type="email" 
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="richard@nixon.org" 
                          className="bg-white border border-[#E8E1D8] rounded-xl px-4 py-2.5 text-xs outline-none focus:border-[#8B7355] transition-all"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-bold text-[#6F665C]">Reason for Booking *</label>
                          <select 
                            value={reason}
                            onChange={(e) => setReason(e.target.value)}
                            className="bg-white border border-[#E8E1D8] rounded-xl px-4 py-2.5 text-xs outline-none focus:border-[#8B7355] transition-all select-none"
                          >
                            <option value="Consultation">Wellness Consult</option>
                            <option value="Dental">Dental Care Scale</option>
                            <option value="Surgery">Surgery Consultation</option>
                            <option value="Exotic">Exotic Companion Check</option>
                            <option value="Emergency">Urgent/Acute Care</option>
                          </select>
                        </div>

                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-bold text-[#6F665C]">Pet Species / Age</label>
                          <input 
                            type="text" 
                            value={petDetails}
                            onChange={(e) => setPetDetails(e.target.value)}
                            placeholder="e.g. Cat, 4 Years old" 
                            className="bg-white border border-[#E8E1D8] rounded-xl px-4 py-2.5 text-xs outline-none focus:border-[#8B7355] transition-all"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-[#6F665C]">Additional Notes or Desired Time Slots</label>
                        <textarea 
                          rows={4}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="List any morning preference dates or chronic symptoms..." 
                          className="bg-white border border-[#E8E1D8] rounded-xl px-4 py-2.5 text-xs outline-none focus:border-[#8B7355] transition-all resize-none"
                        />
                      </div>

                      <button 
                        type="submit"
                        className="w-full bg-[#8B7355] hover:bg-[#A68A64] text-white font-bold text-xs py-3.5 rounded-xl transition-colors cursor-pointer mt-2"
                      >
                        Submit Secured Booking Intake
                      </button>
                    </form>
                  ) : (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-white border border-[#C9A66B]/30 rounded-2xl p-6.5 text-center flex flex-col items-center gap-5"
                    >
                      <div className="w-14 h-14 bg-[#F7F4EF] rounded-full flex items-center justify-center border border-[#E8E1D8]">
                        <CheckCircle2 className="w-7 h-7 text-[#8B7355]" />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-bold text-[#C9A66B] block">Secure Intake Safe</span>
                        <h3 className="font-serif text-lg font-bold text-[#2E2A26] mt-1.5">Receipt Confirmed!</h3>
                        <p className="text-xs text-[#6F665C] mt-2.5 leading-relaxed max-w-sm">
                          Our clinical Practice Coordinator has scheduled this tracking row. We will follow up with direct available times via SMS or Telephone in under 2 hours.
                        </p>
                      </div>
                      <button 
                        onClick={() => setSubmitted(false)}
                        className="px-5 py-2.5 bg-white border border-[#E8E1D8] hover:bg-[#FAF8F5] text-xs font-bold rounded-lg text-[#2E2A26] transition-colors cursor-pointer"
                      >
                        Submit another ticket
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </div>

          </div>
        </div>
      </section>
    </PageTransition>
  );
}
