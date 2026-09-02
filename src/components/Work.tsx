"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Layers, Sparkles, Clock, Globe, ChevronLeft, ChevronRight, Store, ShoppingBag } from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: string;
  tech: string;
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  description?: string;
  keyFeatures?: string[];
  isOngoing?: boolean;
}

export default function Work() {
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
  const [currentFreelanceIndex, setCurrentFreelanceIndex] = useState(0);

  const featuredProjects: Project[] = [
    {
      id: "1",
      title: "PERFECT MIND",
      category: "AI WELLNESS",
      tech: "React, Flask, TensorFlow, MySQL",
      image: "/projects/perfect-mind.png",
      githubUrl: "https://github.com/tharu-thennakoon/stress-detection-new",
      liveUrl: "https://github.com/tharu-thennakoon/stress-detection-new",
    },
    {
      id: "2",
      title: "BRAILLEMATE",
      category: "ACCESSIBILITY",
      tech: "ML, OCR, OBR, STT/TTS",
      image: "/projects/braillemate.png",
      githubUrl: "https://www.sdgp.lk/project/09827619-fc7a-431e-a05d-f0938cabb249",
      liveUrl: "https://www.sdgp.lk/project/09827619-fc7a-431e-a05d-f0938cabb249",
    },
    {
      id: "3",
      title: "EVENT TICKETING",
      category: "FULL-STACK",
      tech: "Spring Boot, React, MySQL, JWT",
      image: "/projects/event-ticketing.png",
      githubUrl: "https://github.com/tharu-thennakoon",
      liveUrl: "https://github.com/tharu-thennakoon",
    },
  ];

  const freelanceProjects: Project[] = [
    {
      id: "4",
      title: "THE OTHER WORLD",
      category: "IMMIGRATION & STUDY ABROAD",
      tech: "WordPress, Elementor, Custom CSS, Responsive UI",
      image: "/projects/other-world.png",
      description: "Full-scale modern web portal developed for an international immigration and study abroad consultancy firm featuring global visa assessment flows, destination directories, and consultation bookings.",
      keyFeatures: [
        "Interactive visa eligibility assessment flow",
        "Global study abroad country guides & directories",
        "Direct appointment and consultation booking system",
      ],
      isOngoing: true,
    },
    {
      id: "5",
      title: "KEVINACOSMETICS.LK",
      category: "E-COMMERCE & BEAUTY",
      tech: "React.js, JavaScript, CSS3, State Management",
      image: "/projects/kevinacosmetics.png",
      description: "Responsive cosmetics e-commerce website with product listings, category navigation and modern UI components.",
      keyFeatures: [
        "Reusable React components with optimized state management",
        "Mobile-first responsive design with modern UI/UX principles",
        "Smooth category navigation and interactive shopping cart",
      ],
      isOngoing: false,
    },
    {
      id: "6",
      title: "CHICKEN SHOP POS PRO",
      category: "RETAIL & INVENTORY MANAGEMENT",
      tech: "PHP, Laravel, MySQL, Blade, JavaScript, Tailwind CSS",
      image: "/projects/chicken-shop-pos.png",
      description: "Complete point-of-sale and inventory control system developed for a commercial chicken shop, featuring fast order checkout, real-time stock deductions, supplier purchase tracking, and financial sales reporting.",
      keyFeatures: [
        "Rapid cashier billing terminal & barcode searching",
        "Automated real-time inventory and supplier purchase tracking",
        "Comprehensive revenue analytics & exportable PDF reports",
      ],
      isOngoing: false,
    },
  ];

  const handleImageError = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  const nextFreelance = () => {
    setCurrentFreelanceIndex((prev) => (prev + 1) % freelanceProjects.length);
  };

  const prevFreelance = () => {
    setCurrentFreelanceIndex((prev) => (prev - 1 + freelanceProjects.length) % freelanceProjects.length);
  };

  const activeFreelance = freelanceProjects[currentFreelanceIndex];

  return (
    <section id="work" className="py-24 bg-white relative overflow-hidden">
      
      {/* Background Decorative Contour Blob */}
      <div className="absolute right-0 top-1/4 w-80 h-80 pointer-events-none select-none opacity-25">
        <svg viewBox="0 0 200 200" className="w-full h-full fill-[#EFF6FF]">
          <path d="M 40,20 C 120,-10 190,40 180,120 C 170,200 110,190 40,170 C -30,150 -10,50 40,20 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10 space-y-20">
        
        {/* Section Main Header */}
        <div className="text-center space-y-3">
          <span className="text-xs sm:text-sm font-extrabold tracking-widest text-[#2563EB] uppercase">
            PORTFOLIO SHOWCASE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-tight">
            Selected Work &amp; Projects
          </h2>
          <p className="text-sm sm:text-base text-[#64748B] max-w-2xl mx-auto font-normal">
            Software engineering, machine learning applications, and client solutions.
          </p>
        </div>

        {/* 1. Featured Software & AI Projects Grid */}
        <div className="space-y-8">
          <div className="flex items-center space-x-3 border-b border-slate-200/80 pb-4">
            <div className="w-2.5 h-2.5 rounded-full bg-[#2563EB]" />
            <h3 className="text-lg sm:text-xl font-black text-[#0F172A] tracking-tight">
              Software &amp; AI Systems
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-md shadow-slate-100 hover:shadow-xl hover:border-[#2563EB]/40 transition-all duration-300 flex flex-col group cursor-pointer"
              >
                {/* Project Image */}
                <div className="relative w-full aspect-[16/10] bg-[#0F172A] overflow-hidden flex items-center justify-center">
                  {!failedImages[project.id] ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={() => handleImageError(project.id)}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#1E293B] to-[#0F172A] text-white">
                      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#3B82F6] mb-3">
                        <Layers className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-bold text-white tracking-wider">{project.title} Preview</span>
                      <code className="text-[11px] bg-white/10 px-2 py-0.5 rounded text-[#93C5FD] mt-1 font-mono">
                        public{project.image}
                      </code>
                    </div>
                  )}
                </div>

                {/* Card Footer Details */}
                <div className="p-6 flex items-center justify-between flex-1">
                  <div className="space-y-1.5 min-w-0 flex-1">
                    <span className="text-[11px] font-extrabold text-[#2563EB] tracking-wider uppercase bg-[#EFF6FF] px-2.5 py-0.5 rounded-md border border-[#DBEAFE]">
                      #{project.category}
                    </span>
                    <h4 className="text-lg font-black text-[#0F172A] tracking-tight group-hover:text-[#2563EB] transition-colors truncate">
                      {project.title}
                    </h4>
                    <p className="text-xs text-[#64748B] font-medium truncate">
                      {project.tech}
                    </p>
                  </div>

                  {/* Circular Arrow Button */}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 text-[#0F172A] flex items-center justify-center group-hover:bg-[#2563EB] group-hover:text-white group-hover:border-[#2563EB] transition-all duration-300 shrink-0 ml-3 shadow-xs"
                      aria-label={`View ${project.title}`}
                    >
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  )}
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* 2. Freelance & Client Projects Section */}
        <div className="space-y-8 pt-4">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200/80 pb-4">
            <div className="flex items-center space-x-3">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <h3 className="text-lg sm:text-xl font-black text-[#0F172A] tracking-tight">
                Freelance &amp; Client Projects
              </h3>
            </div>
            
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200/80">
              <Clock className="w-3.5 h-3.5" />
              <span>Commercial Client Deliverables</span>
            </span>
          </div>

          {/* Active Freelance Project Showcase Card */}
          <div className="transition-all duration-500">
            <div
              key={activeFreelance.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-lg shadow-slate-200/40 hover:shadow-2xl hover:border-[#2563EB]/50 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 group"
            >
              {/* Left Side: Large Project Showcase Image */}
              <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto min-h-[320px] bg-[#0F172A] overflow-hidden flex items-center justify-center">
                {!failedImages[activeFreelance.id] ? (
                  <Image
                    src={activeFreelance.image}
                    alt={activeFreelance.title}
                    fill
                    className="object-cover group-hover:scale-103 transition-transform duration-700"
                    onError={() => handleImageError(activeFreelance.id)}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#1E293B] to-[#0F172A] text-white">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#3B82F6] mb-3">
                      {activeFreelance.id === "4" ? <Globe className="w-6 h-6" /> : activeFreelance.id === "5" ? <ShoppingBag className="w-6 h-6" /> : <Store className="w-6 h-6" />}
                    </div>
                    <span className="text-xs font-bold text-white tracking-wider">{activeFreelance.title} Preview</span>
                  </div>
                )}
              </div>

              {/* Right Side: Detailed Project Specs */}
              <div className="lg:col-span-5 p-7 sm:p-9 flex flex-col justify-between space-y-6 bg-slate-50/50">
                <div className="space-y-4">
                  
                  {/* Status & Category Badges */}
                  <div className="flex flex-wrap items-center gap-2.5">
                    {activeFreelance.isOngoing ? (
                      <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-500 text-white text-[11px] font-extrabold tracking-wider uppercase shadow-xs">
                        <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                        <span>ONGOING PROJECT</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-600 text-white text-[11px] font-extrabold tracking-wider uppercase shadow-xs">
                        <span className="w-2 h-2 rounded-full bg-white" />
                        <span>DELIVERED</span>
                      </span>
                    )}

                    <span className="text-[11px] font-extrabold text-[#2563EB] tracking-wider uppercase bg-[#EFF6FF] px-3 py-1 rounded-full border border-[#DBEAFE]">
                      FREELANCE
                    </span>
                  </div>

                  <h4 className="text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight group-hover:text-[#2563EB] transition-colors">
                    {activeFreelance.title}
                  </h4>

                  <p className="text-xs sm:text-sm font-semibold text-[#2563EB]">
                    {activeFreelance.category}
                  </p>

                  <p className="text-xs sm:text-sm text-[#475569] font-normal leading-relaxed">
                    {activeFreelance.description}
                  </p>

                  {/* Key Features List */}
                  {activeFreelance.keyFeatures && (
                    <div className="space-y-1.5 pt-1">
                      <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider block">
                        Key Features:
                      </span>
                      <ul className="space-y-1">
                        {activeFreelance.keyFeatures.map((feature, fIdx) => (
                          <li key={fIdx} className="text-xs text-[#334155] flex items-start space-x-2">
                            <span className="text-[#2563EB] font-bold shrink-0 mt-0.5">✔</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-200">
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider">
                      Technologies Used:
                    </span>
                    <p className="text-xs text-[#0F172A] font-semibold">
                      {activeFreelance.tech}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-xs text-[#64748B] font-medium flex items-center space-x-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                      <span>Commercial Client Deliverable</span>
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Navigator Controls Put Under the Card */}
          <div className="flex items-center justify-center pt-2">
            <div className="inline-flex items-center space-x-4 bg-white px-5 py-2.5 rounded-full border border-slate-200 shadow-md shadow-slate-100">
              {/* Previous Button */}
              <button
                onClick={prevFreelance}
                className="w-9 h-9 rounded-full bg-slate-50 border border-slate-200 text-[#0F172A] flex items-center justify-center hover:bg-[#2563EB] hover:text-white hover:border-[#2563EB] transition-all duration-200 shadow-xs cursor-pointer"
                aria-label="Previous Freelance Project"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Dot Navigator Indicators & Counter */}
              <div className="flex items-center space-x-2 px-2">
                {freelanceProjects.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => setCurrentFreelanceIndex(dotIdx)}
                    className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      dotIdx === currentFreelanceIndex ? "w-7 bg-[#2563EB]" : "w-2.5 bg-slate-300 hover:bg-slate-400"
                    }`}
                    aria-label={`Go to slide ${dotIdx + 1}`}
                  />
                ))}
              </div>

              <span className="text-xs font-extrabold text-[#0F172A] tracking-wider font-mono">
                0{currentFreelanceIndex + 1} / 0{freelanceProjects.length}
              </span>

              {/* Next Button */}
              <button
                onClick={nextFreelance}
                className="w-9 h-9 rounded-full bg-slate-50 border border-slate-200 text-[#0F172A] flex items-center justify-center hover:bg-[#2563EB] hover:text-white hover:border-[#2563EB] transition-all duration-200 shadow-xs cursor-pointer"
                aria-label="Next Freelance Project"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
