"use client";

import React from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export default function Experience() {
  const bulletPoints = [
    "Developed and maintained responsive client web applications using Next.js, React, Tailwind CSS, and reusable component-based architecture.",
    "Built Node.js API features with server-side validation, structured request handling, secure contact-form processing, and reliable error responses.",
    "Integrated Google Maps API, Nodemailer, and Vercel Web Analytics using secure environment-based configuration.",
    "Improved user experiences across desktop, tablet, and mobile through responsive layouts, interactive interfaces, debugging, and frontend optimization.",
    "Collaborated with cross-functional teams through Agile workflows, ClickUp, Git, GitHub, code reviews, and iterative feature delivery.",
  ];

  const techStack = [
    {
      name: "Next.js",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="11" fill="#000000" />
          <path d="M17.5 17.5L9.5 7H7.5V17H9.2V9.8L16.8 19.5C17.1 18.9 17.4 18.2 17.5 17.5Z" fill="white" />
          <path d="M14.5 7H16.2V14.5L14.5 12.2V7Z" fill="white" />
        </svg>
      ),
    },
    {
      name: "React",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
          <ellipse cx="12" cy="12" rx="3.5" ry="9" transform="rotate(30 12 12)" stroke="#00D8FF" strokeWidth="1.6" />
          <ellipse cx="12" cy="12" rx="3.5" ry="9" transform="rotate(90 12 12)" stroke="#00D8FF" strokeWidth="1.6" />
          <ellipse cx="12" cy="12" rx="3.5" ry="9" transform="rotate(150 12 12)" stroke="#00D8FF" strokeWidth="1.6" />
          <circle cx="12" cy="12" r="2" fill="#00D8FF" />
        </svg>
      ),
    },
    {
      name: "Tailwind CSS",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
          <path
            d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.974 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.974 12 6.001 12z"
            fill="#38BDF8"
          />
        </svg>
      ),
    },
    {
      name: "Node.js",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L3.5 7V17L12 22L20.5 17V7L12 2Z" fill="#339933" />
          <path d="M12 6.5L6.5 9.7V14.3L12 17.5L17.5 14.3V9.7L12 6.5Z" fill="white" />
        </svg>
      ),
    },
    {
      name: "REST APIs",
      icon: (
        <div className="w-4 h-4 rounded bg-[#0F2A6B] text-white flex items-center justify-center text-[9px] font-mono font-black">
          &lt;/&gt;
        </div>
      ),
    },
    {
      name: "Git",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
          <path
            d="M21.62 10.74L13.26 2.38C12.76 1.88 11.96 1.88 11.46 2.38L9.7 4.14L12.04 6.48C12.5 6.32 13.06 6.42 13.46 6.82C13.98 7.34 14.04 8.12 13.68 8.68L15.9 10.9C16.46 10.54 17.24 10.6 17.76 11.12C18.42 11.78 18.42 12.84 17.76 13.5C17.1 14.16 16.04 14.16 15.38 13.5C14.94 13.06 14.82 12.44 15.04 11.94L12.98 9.88V15.18C13.18 15.32 13.36 15.52 13.5 15.76C14.16 16.42 14.16 17.48 13.5 18.14C12.84 18.8 11.78 18.8 11.12 18.14C10.46 17.48 10.46 16.42 11.12 15.76C11.3 15.58 11.5 15.44 11.74 15.34V9.82C11.5 9.72 11.3 9.58 11.12 9.4C10.68 8.96 10.56 8.34 10.78 7.84L8.46 5.52L2.38 11.6C1.88 12.1 1.88 12.9 2.38 13.4L10.74 21.76C11.24 22.26 12.04 22.26 12.54 21.76L21.62 12.68C22.12 12.16 22.12 11.26 21.62 10.74Z"
            fill="#F05032"
          />
        </svg>
      ),
    },
    {
      name: "GitHub",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#000000">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          />
        </svg>
      ),
    },
    {
      name: "Vercel",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#000000">
          <path d="M12 2L24 22H0L12 2Z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="experience" className="relative py-24 sm:py-32 bg-white overflow-hidden">
      
      {/* 1. Top-Left Blue Dotted Cluster */}
      <div className="absolute left-6 top-8 w-36 h-36 pointer-events-none select-none z-0 opacity-80">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-[#2563EB]">
          {[...Array(26)].map((_, i) => (
            <circle
              key={i}
              cx={12 + (i % 6) * 15 + (Math.sin(i * 1.8) * 4)}
              cy={12 + Math.floor(i / 6) * 15 + (Math.cos(i * 1.8) * 4)}
              r={1.7}
            />
          ))}
        </svg>
      </div>

      {/* 2. Top-Right Gray Topographical Contour Lines */}
      <div className="absolute right-0 top-0 w-80 h-72 pointer-events-none select-none z-0 opacity-70">
        <svg viewBox="0 0 300 240" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path d="M 50,0 C 120,40 180,120 180,240" fill="none" stroke="#CBD5E1" strokeWidth="1.5" />
          <path d="M 90,0 C 160,40 220,120 220,240" fill="none" stroke="#CBD5E1" strokeWidth="1.5" />
          <path d="M 130,0 C 200,40 260,120 260,240" fill="none" stroke="#CBD5E1" strokeWidth="1.5" />
          <path d="M 170,0 C 240,40 300,120 300,240" fill="none" stroke="#CBD5E1" strokeWidth="1.5" />
        </svg>
      </div>

      {/* 3. Bottom-Left Gray Topographical Contour Lines */}
      <div className="absolute left-0 bottom-0 w-72 h-64 pointer-events-none select-none z-0 opacity-70">
        <svg viewBox="0 0 260 220" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path d="M 0,50 C 70,60 140,120 180,220" fill="none" stroke="#CBD5E1" strokeWidth="1.5" />
          <path d="M 0,90 C 70,100 130,150 150,220" fill="none" stroke="#CBD5E1" strokeWidth="1.5" />
          <path d="M 0,130 C 60,140 100,170 120,220" fill="none" stroke="#CBD5E1" strokeWidth="1.5" />
        </svg>
      </div>

      {/* 4. Bottom-Right Blue Dotted Cluster */}
      <div className="absolute right-8 bottom-10 w-36 h-36 pointer-events-none select-none z-0 opacity-80">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-[#2563EB]">
          {[...Array(24)].map((_, i) => (
            <circle
              key={i}
              cx={14 + (i % 5) * 16 + (Math.sin(i * 2) * 4)}
              cy={14 + Math.floor(i / 5) * 16 + (Math.cos(i * 2) * 4)}
              r={1.7}
            />
          ))}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="mb-14 lg:mb-16">
          <span className="text-xs sm:text-sm font-extrabold tracking-widest text-[#2563EB] uppercase block mb-2">
            EXPERIENCE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-tight">
            Professional Experience
          </h2>
        </div>

        {/* Timeline & Experience Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Timeline Indicator (Desktop) */}
          <div className="hidden lg:flex lg:col-span-2 flex-col items-center pt-2 relative">
            
            {/* White Rounded Briefcase Badge */}
            <div className="w-20 h-20 rounded-2xl bg-white border border-slate-200 shadow-md flex items-center justify-center text-[#0B47B8] z-10">
              <Briefcase className="w-9 h-9" strokeWidth={1.8} />
            </div>

            {/* Vertical Navy Connecting Line */}
            <div className="w-[3px] h-72 bg-[#0F2A6B] relative flex items-center justify-center">
              {/* Circular Node */}
              <div className="absolute top-28 w-6 h-6 rounded-full border-[5px] border-[#0F2A6B] bg-white shadow-xs" />
            </div>

          </div>

          {/* Right Experience Details Card */}
          <div className="lg:col-span-10">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-100 shadow-xl shadow-slate-200/50 relative">
              
              {/* Top Row: Job Title & Company */}
              <div className="space-y-1">
                <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-black text-[#0F172A] tracking-tight">
                  Full-Stack Developer Intern
                </h3>
                <p className="text-lg sm:text-xl font-black text-[#2563EB] tracking-tight">
                  Cloud99X
                </p>
              </div>

              {/* Meta Info Row: Date & Location */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-[#475569] font-medium pt-3 pb-6 border-b border-slate-100">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-[#2563EB]" />
                  <span className="font-semibold text-[#334155]">Sep 2025 – Present</span>
                </div>

                <span className="text-slate-300">|</span>

                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-[#2563EB]" />
                  <span className="font-semibold text-[#334155]">Sri Lanka</span>
                </div>
              </div>

              {/* Bullet Points */}
              <div className="py-6 space-y-3.5">
                {bulletPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <span className="text-[#2563EB] font-black text-lg leading-snug shrink-0">
                      •
                    </span>
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-normal">
                      {point}
                    </p>
                  </div>
                ))}
              </div>

              {/* Technologies / Tools Badges Row */}
              <div className="pt-4 flex flex-wrap items-center gap-2 sm:gap-2.5">
                {techStack.map((tech, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200 shadow-xs hover:border-[#2563EB] transition-colors"
                  >
                    <span className="shrink-0">{tech.icon}</span>
                    <span className="text-xs font-bold text-[#0F172A] tracking-tight">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}