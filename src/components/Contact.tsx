"use client";

import React from "react";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-white overflow-hidden border-t border-slate-100">
      
      {/* Left Bottom Soft Blue Contour Decorative Blob */}
      <div className="absolute -left-12 bottom-0 w-64 h-64 pointer-events-none select-none opacity-60">
        <svg viewBox="0 0 200 200" className="w-full h-full fill-[#EFF6FF]" xmlns="http://www.w3.org/2000/svg">
          <path d="M 0,40 C 60,10 120,40 140,110 C 160,180 110,200 0,200 Z" />
          <path d="M 10,70 C 50,40 90,70 110,130" fill="none" stroke="#BFDBFE" strokeWidth="1.5" />
          <path d="M 20,100 C 50,80 80,100 95,150" fill="none" stroke="#BFDBFE" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Right Bottom Soft Sky Blue Blob with Dots */}
      <div className="absolute right-0 bottom-0 w-80 h-72 pointer-events-none select-none">
        <div className="absolute right-4 bottom-4 w-64 h-56 bg-[#EFF6FF] rounded-full blur-2xl opacity-70" />
        <svg viewBox="0 0 100 100" className="absolute right-8 bottom-8 w-36 h-36 fill-[#3B82F6] opacity-75">
          {[...Array(25)].map((_, i) => (
            <circle
              key={i}
              cx={10 + (i % 5) * 18 + (Math.sin(i * 2) * 4)}
              cy={10 + Math.floor(i / 5) * 18 + (Math.cos(i * 2) * 4)}
              r={1.8}
            />
          ))}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline */}
          <div className="lg:col-span-7">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0F172A] tracking-tight leading-[1.1]">
              LET&apos;S BUILD
              <br />
              SOMETHING
              <br />
              <span className="text-[#2563EB]">USEFUL.</span>
            </h2>
          </div>

          {/* Right Column: Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs sm:text-sm font-extrabold tracking-widest text-[#2563EB] uppercase">
              GET IN TOUCH
            </span>

            {/* Email Box */}
            <a
              href="mailto:tharushikalpani2003@gmail.com"
              className="flex items-center space-x-3 px-5 py-4 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-[#2563EB] transition-all group max-w-md"
            >
              <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center shrink-0 border border-[#DBEAFE] group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-[#0F172A] truncate">
                tharushikalpani2003@gmail.com
              </span>
            </a>

            {/* Social Buttons */}
            <div className="flex items-center space-x-3.5 pt-1">
              <a
                href="https://github.com/tharu-thennakoon"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-[#0F172A] text-white flex items-center justify-center hover:bg-[#2563EB] transition-all duration-300 transform hover:scale-105 shadow-sm"
                aria-label="GitHub"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/tharushi-thennakoon-579ab6280"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-[#0F172A] text-white flex items-center justify-center hover:bg-[#2563EB] transition-all duration-300 transform hover:scale-105 shadow-sm"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
