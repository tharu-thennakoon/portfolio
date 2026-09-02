"use client";

import React from "react";

export default function Education() {
  const timelineItems = [
    {
      period: "2024–PRESENT",
      degree: "BSc (Hons) Computer Science",
      institution: "Informatics Institute of Technology",
      notes: "Affiliated with University of Westminster",
      extra: "Expected Graduation 2027",
    },
    {
      period: "2024",
      degree: "Diploma in Comprehensive Master Java Developer",
      institution: "IJSE – Institute of Software Engineering",
      notes: "Master Java, Spring Boot, MySQL, REST Architectures",
      extra: null,
    },
    {
      period: "2019–2022",
      degree: "GCE Advanced Level, Physical Science Stream",
      institution: "BD/Uva Science College",
      notes: "Combined Mathematics, Physics, Chemistry",
      extra: null,
    },
  ];

  return (
    <section id="education" className="relative bg-white text-[#0F172A] py-24 overflow-hidden">
      
      {/* Background Decorative Contour Lines */}
      <div className="absolute right-0 bottom-0 w-96 h-96 pointer-events-none select-none opacity-20">
        <svg viewBox="0 0 300 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path d="M 100,300 C 150,220 200,160 300,140" fill="none" stroke="#2563EB" strokeWidth="2" />
          <path d="M 140,300 C 180,230 230,180 300,170" fill="none" stroke="#2563EB" strokeWidth="2" />
          <path d="M 180,300 C 210,240 260,200 300,200" fill="none" stroke="#2563EB" strokeWidth="2" />
          <path d="M 220,300 C 240,250 280,220 300,230" fill="none" stroke="#2563EB" strokeWidth="2" />
        </svg>
      </div>

      {/* Decorative Blue Dots */}
      <div className="absolute right-8 top-16 w-36 h-36 pointer-events-none select-none opacity-40">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-[#3B82F6]">
          {[...Array(24)].map((_, i) => (
            <circle
              key={i}
              cx={15 + (i % 5) * 16 + (Math.sin(i * 1.5) * 4)}
              cy={15 + Math.floor(i / 5) * 16 + (Math.cos(i * 1.5) * 4)}
              r={1.8}
            />
          ))}
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-6 sm:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs sm:text-sm font-extrabold tracking-widest text-[#2563EB] uppercase">
            EDUCATION
          </span>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 space-y-12 sm:space-y-16">
          
          {/* Vertical Blue Connecting Line */}
          <div className="absolute left-[7px] sm:left-[11px] top-4 bottom-4 w-[2px] bg-[#2563EB]" />

          {timelineItems.map((item, idx) => (
            <div key={idx} className="relative flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-12 group">
              
              {/* Timeline Circular Glowing Node */}
              <div className="absolute -left-[23px] sm:-left-[27px] top-1.5 w-6 h-6 rounded-full bg-white border-[4px] border-[#2563EB] flex items-center justify-center shadow-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
              </div>

              {/* Year Badge */}
              <div className="sm:w-44 shrink-0">
                <span className="inline-block text-xs font-bold tracking-wider text-[#2563EB] bg-[#EFF6FF] px-3 py-1 rounded-full border border-[#DBEAFE]">
                  {item.period}
                </span>
              </div>

              {/* Education Details */}
              <div className="space-y-1.5">
                <h3 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight">
                  {item.degree}
                </h3>
                <p className="text-sm font-semibold text-[#475569]">
                  {item.institution}
                </p>
                {item.notes && (
                  <p className="text-xs text-[#64748B] font-normal leading-relaxed">
                    {item.notes}
                  </p>
                )}
                {item.extra && (
                  <p className="text-xs text-[#2563EB] font-semibold pt-0.5">
                    {item.extra}
                  </p>
                )}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
