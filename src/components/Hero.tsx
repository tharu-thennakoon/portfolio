"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Download, Terminal } from "lucide-react";
import TypewriterText from "./TypewriterText";

export default function Hero() {
  const [imageError, setImageError] = useState(false);

  const roles = [
    "Software Developer",
    "AI Builder",
    "Full-Stack Developer",
    "Freelancer",
  ];

  const skillsList = [
    {
      name: "React",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <ellipse cx="12" cy="12" rx="3.5" ry="9" transform="rotate(30 12 12)" stroke="#00D8FF" strokeWidth="1.8" />
          <ellipse cx="12" cy="12" rx="3.5" ry="9" transform="rotate(90 12 12)" stroke="#00D8FF" strokeWidth="1.8" />
          <ellipse cx="12" cy="12" rx="3.5" ry="9" transform="rotate(150 12 12)" stroke="#00D8FF" strokeWidth="1.8" />
          <circle cx="12" cy="12" r="2" fill="#00D8FF" />
        </svg>
      ),
    },
    {
      name: "Next.js",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="11" fill="#000000" />
          <path d="M17.5 17.5L9.5 7H7.5V17H9.2V9.8L16.8 19.5C17.1 18.9 17.4 18.2 17.5 17.5Z" fill="white" />
          <path d="M14.5 7H16.2V14.5L14.5 12.2V7Z" fill="white" />
        </svg>
      ),
    },
    {
      name: "Java",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 48 48" fill="none">
          <path d="M18.8 38.2c-.3 0-.6 0-.8.1-2.9.8-3.4 2.4-3.4 2.4s3.3-.2 6.4-1.2c2.7-.9 3.2-2 3.2-2s-1.8.7-5.4.7z" fill="#007396" />
          <path d="M17.4 34.6c-.3 0-.6 0-.9.1-3.9 1-4.8 2.8-4.8 2.8s4.3-.3 8.3-1.5c3.5-1 4.1-2.5 4.1-2.5s-2.3 1.1-6.7 1.1z" fill="#007396" />
          <path d="M25.7 29.5c4.7-2.4 2.5-4.8 2.5-4.8-2.6 2.7-6.2 3.6-9.5 4.4-3.6.9-7.3 1.8-10.4 4.5 0 0 3.7-1.9 9.3-2.6 6.3-.9 9.4-.9 8.1-1.5z" fill="#ED8B00" />
          <path d="M30.6 33.3c3.2-1.7 1.7-3.4 1.7-3.4-1.8 1.9-4.3 2.5-6.6 3.1-2.5.6-5.1 1.2-7.2 3.1 0 0 2.6-1.3 6.5-1.8 4.4-.6 6.5-.6 5.6-1z" fill="#ED8B00" />
        </svg>
      ),
    },
    {
      name: "Python",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 48 48" fill="none">
          <path d="M23.5 4c-5.4 0-9.8.9-9.8 4.8v3.6h9.8v1.2H9.8C4.4 13.6 0 18 0 23.4s3.9 9.3 9.3 9.3h3.1v-4.4c0-3.3 2.8-6.1 6.1-6.1h9.8c2.7 0 4.9-2.2 4.9-4.9V8.8c0-3.9-4.4-4.8-9.7-4.8zm-5.3 3c1 0 1.8.8 1.8 1.8s-.8 1.8-1.8 1.8-1.8-.8-1.8-1.8.8-1.8 1.8-1.8z" fill="#3776AB" />
          <path d="M24.5 44c5.4 0 9.8-.9 9.8-4.8v-3.6h-9.8v-1.2h13.7c5.4 0 9.8-4.4 9.8-9.8s-3.9-9.3-9.3-9.3h-3.1v4.4c0 3.3-2.8 6.1-6.1 6.1h-9.8c-2.7 0-4.9 2.2-4.9 4.9v8.4c0 3.9 4.4 4.8 9.7 4.8zm5.3-3c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8z" fill="#FFD43B" />
        </svg>
      ),
    },
    {
      name: "Spring Boot",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 48 48" fill="none">
          <path d="M42 22C42 10.954 33.046 2 22 2S2 10.954 2 22c0 9.8 7.067 17.947 16.368 19.673l-.403-5.263C11.97 34.925 7 29.043 7 22c0-8.284 6.716-15 15-15 4.142 0 7.892 1.679 10.607 4.393C35.321 14.108 37 17.858 37 22c0 7.043-4.97 12.925-10.965 14.41l-.403 5.263C34.933 39.947 42 31.8 42 22z" fill="#6DB33F" />
          <path d="M25.5 36.5c-4.5 1-9-1.5-10.5-5.5-1.5-4 .5-8.5 4.5-10 4-1.5 8.5.5 10 4.5 1.5 4-.5 9-4 11z" fill="#6DB33F" />
        </svg>
      ),
    },
    {
      name: "Tailwind CSS",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
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
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L3.5 7V17L12 22L20.5 17V7L12 2Z" fill="#339933" />
          <path d="M12 6.5L6.5 9.7V14.3L12 17.5L17.5 14.3V9.7L12 6.5Z" fill="white" />
        </svg>
      ),
    },
    {
      name: "TypeScript",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#3178C6" />
          <path d="M11.5 10H6.5V11.5H8.2V19H9.8V11.5H11.5V10Z" fill="white" />
          <path d="M17.5 12.8C16.8 12.3 15.8 12 14.8 12C13.2 12 12.3 12.8 12.3 14C12.3 15.1 13 15.6 14.4 16.1L15 16.3C16 16.7 16.5 17.1 16.5 17.8C16.5 18.7 15.6 19.3 14.3 19.3C13.2 19.3 12.1 18.8 11.4 18.3L12 17C12.7 17.5 13.6 17.8 14.4 17.8C15.2 17.8 15.8 17.4 15.8 16.8C15.8 16.1 15.3 15.7 14 15.2L13.4 15C12.3 14.6 11.5 13.9 11.5 12.8C11.5 11.5 12.6 10.5 14.4 10.5C15.5 10.5 16.4 10.9 17 11.3L17.5 12.8Z" fill="white" />
        </svg>
      ),
    },
    {
      name: "TensorFlow",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 48 48" fill="none">
          <path d="M24 4L7 14v20l8 5v-9l9 5.5v-10l-9-5.5v-4l9 5.5 9-5.5v4l-9 5.5v10l9-5.5v9l8-5V14L24 4z" fill="#FF6F00" />
          <path d="M24 14.5l-9 5.5v4l9-5.5 9 5.5v-4l-9-5.5z" fill="#FFA800" />
        </svg>
      ),
    },
    {
      name: "Docker",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path
            d="M13.98 9.38h1.74v1.73h-1.74V9.38zm-2.28 0h1.74v1.73H11.7V9.38zm-2.28 0h1.74v1.73H9.42V9.38zm-2.28 0h1.74v1.73H7.14V9.38zm6.84-2.28h1.74v1.74h-1.74V7.1zm-2.28 0h1.74v1.74H11.7V7.1zm-2.28 0h1.74v1.74H9.42V7.1zm6.84 0h1.74v1.74h-1.74V7.1zM23.5 13.2c-.36-.26-1.18-.36-1.8-.3-.12-.8-.68-1.5-1.52-1.92l-.64-.32-.4.62c-.44.7-.6 1.6-.46 2.44-.44.22-.98.34-1.68.34H2.4c-.26 0-.5.22-.5.5 0 2.94 1.54 5.3 4.14 6.32 1.48.58 3.2.78 5.12.58 3.24-.34 6.06-2.08 7.82-4.84.44.06.9.04 1.34-.06.74-.18 1.42-.58 1.94-1.14.4-.42.66-.88.74-1.32.1-.48.24-.76.5-1.04v-.08z"
            fill="#2496ED"
          />
        </svg>
      ),
    },
    {
      name: "MySQL",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <ellipse cx="12" cy="6" rx="8" ry="2.5" fill="#00758F" />
          <path d="M4 6v6c0 1.38 3.58 2.5 8 2.5s8-1.12 8-2.5V6" stroke="#00758F" strokeWidth="1.5" fill="none" />
          <path d="M4 12v6c0 1.38 3.58 2.5 8 2.5s8-1.12 8-2.5v-6" stroke="#F29111" strokeWidth="1.5" fill="none" />
        </svg>
      ),
    },
    {
      name: "Git",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path
            d="M21.62 10.74L13.26 2.38C12.76 1.88 11.96 1.88 11.46 2.38L9.7 4.14L12.04 6.48C12.5 6.32 13.06 6.42 13.46 6.82C13.98 7.34 14.04 8.12 13.68 8.68L15.9 10.9C16.46 10.54 17.24 10.6 17.76 11.12C18.42 11.78 18.42 12.84 17.76 13.5C17.1 14.16 16.04 14.16 15.38 13.5C14.94 13.06 14.82 12.44 15.04 11.94L12.98 9.88V15.18C13.18 15.32 13.36 15.52 13.5 15.76C14.16 16.42 14.16 17.48 13.5 18.14C12.84 18.8 11.78 18.8 11.12 18.14C10.46 17.48 10.46 16.42 11.12 15.76C11.3 15.58 11.5 15.44 11.74 15.34V9.82C11.5 9.72 11.3 9.58 11.12 9.4C10.68 8.96 10.56 8.34 10.78 7.84L8.46 5.52L2.38 11.6C1.88 12.1 1.88 12.9 2.38 13.4L10.74 21.76C11.24 22.26 12.04 22.26 12.54 21.76L21.62 12.68C22.12 12.16 22.12 11.26 21.62 10.74Z"
            fill="#F05032"
          />
        </svg>
      ),
    },
  ];

  const marqueeSkills = [...skillsList, ...skillsList, ...skillsList];

  return (
    <section id="home" className="relative min-h-[calc(100vh-5rem)] overflow-hidden pt-2 pb-8 flex flex-col justify-between bg-white">

      {/* 1. Left Topographical Contour Blob */}
      <div className="absolute -left-6 top-4 w-60 sm:w-72 md:w-80 h-[460px] pointer-events-none select-none z-0 opacity-70">
        <svg viewBox="0 0 260 460" className="w-full h-full fill-none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 0,20 C 80,10 160,50 175,150 C 190,250 140,340 95,385 C 45,430 0,420 0,420" stroke="#CBD5E1" strokeWidth="1.4" fill="none" />
          <path d="M 0,60 C 65,45 130,80 145,160 C 160,240 120,310 80,350 C 35,390 0,380 0,380" stroke="#CBD5E1" strokeWidth="1.4" fill="none" />
          <path d="M 0,100 C 50,85 105,115 118,175 C 130,235 100,285 65,315 C 30,345 0,340 0,340" stroke="#CBD5E1" strokeWidth="1.4" fill="none" />
          <path d="M 0,140 C 40,125 78,150 88,195 C 98,240 75,270 48,290 C 20,310 0,305 0,305" stroke="#CBD5E1" strokeWidth="1.4" fill="none" />
        </svg>
      </div>

      {/* 2. Bottom-Left Blue Dotted Cluster */}
      <div className="absolute left-4 bottom-28 w-36 h-36 pointer-events-none select-none z-0 opacity-80">
        <svg viewBox="0 0 120 120" className="w-full h-full fill-[#2563EB]">
          {[...Array(32)].map((_, i) => (
            <circle
              key={i}
              cx={14 + (i % 6) * 16 + (Math.sin(i * 1.7) * 4)}
              cy={14 + Math.floor(i / 6) * 16 + (Math.cos(i * 1.7) * 4)}
              r={1.8}
            />
          ))}
        </svg>
      </div>

      {/* 3. Top-Center Soft Floating Sky-Blue Blob */}
      <div className="absolute left-[36%] top-6 w-48 h-36 bg-[#EFF6FF] rounded-[45%_55%_60%_40%/50%_45%_55%_50%] blur-xl opacity-80 pointer-events-none z-0 transform -rotate-12" />

      {/* 4. Top-Right Blue Dotted Arch Cluster (above shoulder) */}
      <div className="absolute right-[32%] lg:right-[36%] top-2 w-36 h-36 pointer-events-none select-none z-0 opacity-80">
        <svg viewBox="0 0 120 120" className="w-full h-full fill-[#2563EB]">
          {[...Array(28)].map((_, i) => (
            <circle
              key={i}
              cx={16 + (i % 5) * 17 + (Math.sin(i * 2.1) * 5)}
              cy={16 + Math.floor(i / 5) * 17 + (Math.cos(i * 2.1) * 5)}
              r={1.7}
            />
          ))}
        </svg>
      </div>

      {/* Main Hero Content Grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center relative z-10 my-auto pt-2">

        {/* Left Column: Heading, Role & Action Buttons */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-5 lg:space-y-6 pt-2 lg:pt-0">

          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-bold tracking-tight text-[#0F172A] leading-[1.12]">
              Hi! I’m
              <br />
              <span className="text-[#0F172A]">Tharushi &ndash;</span>
            </h1>

            {/* Typewriter Animated Role Area */}
            <div className="min-h-[2.8rem] sm:min-h-[3.4rem] lg:min-h-[4rem] flex items-center pt-1">
              <TypewriterText
                roles={roles}
                typingSpeed={80}
                deletingSpeed={45}
                pauseAfterTyping={1500}
                pauseBeforeNext={300}
                className="text-[#2563EB] font-bold text-3xl sm:text-4xl lg:text-[44px] tracking-tight font-sans"
                cursorClassName="bg-[#0F2A5F]"
              />
            </div>
          </div>

          <p className="text-sm sm:text-base text-[#475569] font-mono tracking-tight max-w-md">
            I build useful digital products.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#work"
              className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-lg bg-[#0F2A6B] text-white text-xs sm:text-sm font-bold tracking-wider hover:bg-[#2563EB] transition-all duration-300 transform hover:-translate-y-0.5 shadow-md"
            >
              <span>VIEW MY WORK</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-lg bg-white border-[1.5px] border-[#0F172A] text-[#0F172A] text-xs sm:text-sm font-bold tracking-wider hover:bg-[#0F172A] hover:text-white transition-all duration-300 transform hover:-translate-y-0.5 shadow-xs"
            >
              <span>DOWNLOAD CV</span>
              <Download className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right Column: Modern Framed Showcase for Hero Portrait */}
        <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end">
          <div className="relative w-full max-w-[420px] sm:max-w-[460px] lg:max-w-[480px]">

            {/* Ambient Background Glowing Layers */}
            <div className="absolute -inset-3 sm:-inset-5 bg-gradient-to-tr from-blue-600/25 via-sky-400/20 to-indigo-600/20 rounded-[2.6rem] blur-2xl -z-10 transform -rotate-1" />
            <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-blue-500/20 rounded-full blur-2xl -z-10" />

            {/* Decorative Offset Frame Border */}
            <div className="absolute -inset-2 rounded-[2.5rem] border border-blue-300/60 -z-10 pointer-events-none transform rotate-1" />

            {/* Main Portrait Card Container */}
            <div className="relative w-full aspect-[4/4.85] rounded-[2rem] sm:rounded-[2.4rem] bg-white border-2 border-white shadow-[0_20px_50px_rgba(15,23,42,0.12)] overflow-hidden group">
              {!imageError ? (
                <>
                  <Image
                    src="/hero_new.png"
                    alt="Tharushi Thennakoon - Software Developer & AI Builder"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 480px"
                    className="object-cover object-[center_20%] transition-transform duration-700 ease-out group-hover:scale-105"
                    onError={() => setImageError(true)}
                  />
                  {/* Subtle Gradient Vignette at bottom for depth */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/40 via-slate-950/10 to-transparent pointer-events-none" />
                </>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-center p-6 text-slate-700 bg-slate-50">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-3 text-blue-600">
                    <Terminal className="w-8 h-8" />
                  </div>
                  <p className="font-bold text-sm text-slate-900">Hero Image</p>
                  <code className="text-xs bg-slate-200 px-2 py-1 rounded text-slate-800 mt-1 font-mono">
                    public/hero_new.png
                  </code>
                </div>
              )}
            </div>



          </div>
        </div>

      </div>

      {/* Bottom Horizontal Animated Skills Logos Marquee (Preserved without any modification) */}
      <div className="w-full pt-8 pb-3 relative z-20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">

        {/* Subtle Ambient Glowing Backdrop */}
        <div className="absolute inset-x-20 top-8 h-16 bg-blue-400/15 blur-2xl rounded-full animate-glow-ambient pointer-events-none -z-10" />

        {/* Infinite Smooth Horizontal Skills Moving Track */}
        <div className="animate-marquee-horizontal flex items-center gap-4 sm:gap-5 py-2 px-4 cursor-pointer">
          {marqueeSkills.map((skill, idx) => (
            <div
              key={`${skill.name}-${idx}`}
              className="flex items-center space-x-3 px-5 py-3 rounded-2xl bg-white border border-slate-200/80 shadow-md shadow-slate-200/50 hover:shadow-xl hover:border-[#2563EB]/50 hover:-translate-y-1 transition-all duration-300 group select-none shrink-0 backdrop-blur-sm"
            >
              <div className="w-8 h-8 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                {skill.icon}
              </div>
              <span className="text-xs sm:text-sm font-bold text-[#0F172A] tracking-tight whitespace-nowrap group-hover:text-[#2563EB] transition-colors">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
