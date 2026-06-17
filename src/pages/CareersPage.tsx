/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { 
  Briefcase, Heart, Award, ShieldCheck, UploadCloud, 
  Check, FileText, AlertCircle, Sparkles, CheckCircle2 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import PageTransition from '../components/PageTransition';
import { CAREER_POSITIONS, IMAGES } from '../data/clinicData';

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<string | null>('vet-dvm');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  // Form fields
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantBio, setApplicantBio] = useState('');
  
  // File upload drag-and-drop states (Usability Guideline: support both drag and click)
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type === "application/pdf" || file.type === "application/msword" || file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
        setSelectedFile(file);
        setFormError(null);
      } else {
        setFormError("Only professional PDF or Microsoft Word resumes are accepted.");
      }
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      setFormError(null);
    }
  };

  const triggerFileSearch = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicantName || !applicantEmail) {
      setFormError("Please enter your name and email parameters.");
      return;
    }
    if (!selectedFile) {
      setFormError("Please upload your professional resume before submitting.");
      return;
    }

    setFormError(null);
    setFormSubmitted(true);
    // Reset states
    setApplicantName('');
    setApplicantEmail('');
    setApplicantBio('');
    setSelectedFile(null);
  };

  return (
    <PageTransition>
      {/* Page Header */}
      <section className="pt-28 pb-12 bg-[#FAF8F5] border-b border-[#E8E1D8]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <span className="text-xs font-bold tracking-[0.25em] text-[#C9A66B] uppercase block mb-2">Hospital Environment</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2E2A26] tracking-tight">
            Careers at John Creek Veterinary Clinic
          </h1>
          <p className="text-sm text-[#6F665C] mt-2 max-w-2xl leading-relaxed">
            Nurture your passion for clinical excellence. Join a modern, supportive, and technologically-focused practice built around patient advocates.
          </p>
        </div>
      </section>

      {/* Culture & Benefits Section */}
      <section className="py-12 bg-white flex-1 animate-fadeIn">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="flex flex-col gap-6">
              <span className="text-xs font-bold tracking-[0.2em] text-[#C9A66B] uppercase">Our Community Environment</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2E2A26]">A Culture Built on Reassurance</h2>
              <p className="text-xs sm:text-sm text-[#6F665C] leading-relaxed">
                At Johns Creek Veterinary Clinic, we believe that an optimized, happy clinical support staff directly shape medicine qualities. We have structured a positive, collaborative environment with balanced 40-hour work weeks, zero overnight/critical shift, and dedicated medical mentoring. Enjoy modern surgical suites, IDEXX system networks, and spacious diagnostic environments.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#8B7355] shrink-0" />
                  <span className="text-xs font-bold text-[#2E2A26]">Premium Medical & Dental</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#8B7355] shrink-0" />
                  <span className="text-xs font-bold text-[#2E2A26]">Generous CE Allowances</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#8B7355] shrink-0" />
                  <span className="text-xs font-bold text-[#2E2A26]">Zero Overnight Shifts</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#8B7355] shrink-0" />
                  <span className="text-xs font-bold text-[#2E2A26]">Modern Diagnostic Systems</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-4 rounded-3xl border border-[#C9A66B]/20 translate-x-3 translate-y-3 -z-10" />
              <img 
                src={IMAGES.clinicInterior} 
                className="w-full h-[320px] object-cover rounded-3xl border border-[#E8E1D8] shadow-md"
                alt="Clinic veterinary workspace"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Core Vacancies block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12 border-t border-[#FAF8F5]">
            
            {/* Jobs list list */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="font-serif text-2xl font-bold text-[#2E2A26] mb-4">Open Hospital Vacancies</h2>
              
              <div className="flex flex-col gap-4">
                {CAREER_POSITIONS.map((job) => (
                  <button
                    key={job.id}
                    onClick={() => setSelectedJob(job.id)}
                    className={`text-left p-5 border rounded-2xl transition-all cursor-pointer ${
                      selectedJob === job.id 
                        ? 'bg-[#F7F4EF] border-[#8B7355] shadow-xs' 
                        : 'bg-white border-[#E8E1D8] hover:bg-[#FAF8F5]/60'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-serif text-base font-bold text-[#2E2A26]">{job.title}</h3>
                      <span className="text-[10px] font-mono tracking-wider font-bold uppercase text-[#8B7355] px-2.5 py-1 bg-white border border-[#E8E1D8] rounded-md">
                        {job.type}
                      </span>
                    </div>
                    <span className="text-xs text-[#A68A64] font-medium block mt-1">{job.department}</span>
                    <p className="text-xs text-[#6F665C] leading-relaxed mt-3 line-clamp-3">{job.description}</p>
                    
                    {selectedJob === job.id && (
                      <div className="mt-5 pt-4 border-t border-[#E8E1D8] animate-fadeIn">
                        <span className="text-xs font-bold text-[#2E2A26] block mb-2">Qualifications & Skills:</span>
                        <ul className="space-y-2 text-xs text-[#6F665C]">
                          {job.requirements.map((req, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <Check className="w-4 h-4 text-[#8B7355] shrink-0 mt-0.5" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Application Submission Form */}
            <div className="lg:col-span-6">
              <div className="bg-[#FAF8F5] border border-[#E8E1D8] rounded-2xl p-6 md:p-8">
                
                <h2 className="font-serif text-xl font-bold text-[#2E2A26] pb-2 border-b border-[#E8E1D8] mb-4">
                  Quick Join Form
                </h2>
                <p className="text-xs text-[#6F665C] mb-6 leading-relaxed">
                  Enter your email/resume directly. We review all clinical submissions in under 3 business days.
                </p>

                <AnimatePresence mode="wait">
                  {!formSubmitted ? (
                    <form onSubmit={handleApply} className="space-y-5">
                      
                      {formError && (
                        <div className="p-3 bg-white border-l-4 border-amber-600 rounded-md text-xs text-[#2E2A26] mb-2 flex items-center gap-2">
                          <AlertCircle className="w-4 h-4 shrink-0 text-[#C9A66B]" />
                          <span>{formError}</span>
                        </div>
                      )}

                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-[#6F665C]">Your Full Name *</label>
                        <input 
                          type="text" 
                          required
                          value={applicantName}
                          onChange={(e) => setApplicantName(e.target.value)}
                          placeholder="e.g. Sarah Jenkins DVM" 
                          className="bg-white border border-[#E8E1D8] rounded-xl px-4 py-2.5 text-xs outline-none focus:border-[#8B7355] transition-all"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-[#6F665C]">Your Contact Email *</label>
                        <input 
                          type="email" 
                          required
                          value={applicantEmail}
                          onChange={(e) => setApplicantEmail(e.target.value)}
                          placeholder="e.g. sarah@dvmcareers.net" 
                          className="bg-white border border-[#E8E1D8] rounded-xl px-4 py-2.5 text-xs outline-none focus:border-[#8B7355] transition-all"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-[#6F665C]">Target Clinical Position *</label>
                        <select 
                          className="bg-white border border-[#E8E1D8] rounded-xl px-4 py-2.5 text-xs outline-none focus:border-[#8B7355] transition-all select-none"
                        >
                          <option value="Associate Veterinarian">Associate Veterinarian (DVM)</option>
                          <option value="Registered Vet Technician">Registered Veterinary Tech (RVT)</option>
                          <option value="Other / Assistant">Other Administrative Assistant</option>
                        </select>
                      </div>

                      {/* DRAG AND DROP FILE UPLOAD WRAPPER (Usability Guideline compliant) */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-[#6F665C]">Submit Professional CV/Resume *</label>
                        
                        <div 
                          onDragEnter={handleDrag}
                          onDragOver={handleDrag}
                          onDragLeave={handleDrag}
                          onDrop={handleDrop}
                          onClick={triggerFileSearch}
                          className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all flex flex-col items-center justify-center gap-2 ${
                            dragActive 
                              ? 'bg-[#F7F4EF]/70 border-[#8B7355]' 
                              : 'bg-white border-[#E8E1D8] hover:border-[#8B7355]'
                          }`}
                        >
                          <input 
                            ref={fileInputRef}
                            type="file" 
                            accept=".pdf,.doc,.docx"
                            onChange={handleFileSelect}
                            className="hidden"
                          />
                          
                          {selectedFile ? (
                            <div className="flex flex-col items-center gap-1.5 text-xs animate-fadeIn text-[#2E2A26]">
                              <FileText className="w-8 h-8 text-[#8B7355]" />
                              <span className="font-bold">{selectedFile.name}</span>
                              <span className="text-[10px] text-[#6F665C]">({(selectedFile.size / 1024).toFixed(1)} KB) • Click to edit file</span>
                            </div>
                          ) : (
                            <>
                              <UploadCloud className="w-8 h-8 text-[#A68A64]" />
                              <span className="text-xs font-bold text-[#2E2A26]">Drag and drop CV here or click to upload</span>
                              <span className="text-[10px] text-[#6F665C]">Supports PDF or Microsoft Word (Max 5MB)</span>
                            </>
                          )}
                        </div>
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-[#6F665C]">Brief Introduction (Optional)</label>
                        <textarea 
                          rows={3}
                          value={applicantBio}
                          onChange={(e) => setApplicantBio(e.target.value)}
                          placeholder="Detail your clinical goals or surgical highlights..." 
                          className="bg-white border border-[#E8E1D8] rounded-xl px-4 py-2.5 text-xs outline-none focus:border-[#8B7355] transition-all resize-none"
                        />
                      </div>

                      <button 
                        type="submit"
                        className="w-full bg-[#8B7355] hover:bg-[#A68A64] text-white font-bold text-xs py-3.5 rounded-xl transition-colors cursor-pointer mt-2"
                      >
                        Submit CV Application
                      </button>
                    </form>
                  ) : (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-white border border-[#C9A66B]/30 rounded-2xl p-6 text-center flex flex-col items-center gap-5.5 animate-fadeIn"
                    >
                      <div className="w-14 h-14 bg-[#FAF8F5] rounded-full flex items-center justify-center border border-[#E8E1D8]">
                        <Check className="w-6 h-6 text-[#8B7355]" />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-bold text-[#C9A66B] block">Application Safe</span>
                        <h3 className="font-serif text-lg font-bold text-[#2E2A26] mt-1">CV Safely Uploaded!</h3>
                        <p className="text-xs text-[#6F665C] mt-2 max-w-sm leading-relaxed">
                          Thank you for submitting your resume. Our Medical Practice Director (Sarah Lin RVT) has received your documentation. We will schedule call reviews in 2-3 business days.
                        </p>
                      </div>
                      <button 
                        onClick={() => setFormSubmitted(false)}
                        className="px-5 py-2 bd border border-[#E8E1D8] hover:bg-[#FAF8F5] text-xs font-bold rounded-lg text-[#2E2A26] transition-colors cursor-pointer"
                      >
                        Navigate Back
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
