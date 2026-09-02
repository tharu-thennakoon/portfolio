"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Terminal, Sparkles, Code2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function About() {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="about" className="py-24 sm:py-32 relative overflow-hidden bg-white">
      {/* Decorative Scattered Ambient Dots */}
      <div className="absolute left-1/3 top-10 w-28 h-28 pointer-events-none select-none z-0 opacity-60">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-[#3B82F6]">
          {[...Array(20)].map((_, i) => (
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

          {/* Left Column: Enlarged Framed Studio Showcase Card with Seamless Blend */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <div className="relative w-full max-w-[460px] sm:max-w-[500px] lg:max-w-[520px]">
              
              {/* Back Layer Organic Soft Glow */}
              <div className="absolute -inset-3 sm:-inset-5 bg-gradient-to-tr from-[#3B82F6]/25 via-[#60A5FA]/15 to-transparent rounded-[2.5rem] blur-2xl -z-10 transform -rotate-1" />

              {/* Showcase Container Frame */}
              <div className="relative w-full aspect-[4/4.5] min-h-[440px] sm:min-h-[500px] lg:min-h-[540px] rounded-[2rem] sm:rounded-[2.5rem] bg-gradient-to-b from-[#F0F7FF] via-[#F8FAFC] to-[#E8F2FF] border border-[#BFDBFE]/80 shadow-[0_25px_60px_rgba(37,99,235,0.12)] overflow-hidden flex flex-col justify-end items-center group">
                
                {/* Background Contour Accent Lines inside Card */}
                <svg
                  viewBox="0 0 400 400"
                  className="absolute inset-0 w-full h-full pointer-events-none opacity-40 select-none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="200" cy="160" r="140" fill="none" stroke="#93C5FD" strokeWidth="1" strokeDasharray="4 6" />
                  <circle cx="200" cy="160" r="190" fill="none" stroke="#BFDBFE" strokeWidth="1" />
                  <path d="M 40,80 C 120,40 280,40 360,100" fill="none" stroke="#93C5FD" strokeWidth="1.2" />
                </svg>

                {/* Ambient Radial Spotlight Behind Tharushi's Portrait */}
                <div className="absolute top-8 inset-x-6 h-56 bg-gradient-to-b from-blue-300/35 via-sky-200/25 to-transparent rounded-full blur-2xl pointer-events-none" />

                {/* Floating Top Badge */}
                <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-20 flex items-center space-x-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold text-[#0F172A] tracking-tight">Active Builder</span>
                </div>

                {/* Profile Photo with Seamless Baseline Grounding & Smooth Fade Mask */}
                <div className="relative w-full h-full z-10 flex items-end justify-center pt-8">
                  {!imageError ? (
                    <div className="relative w-full h-full flex items-end justify-center [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]">
                      <Image
                        src="/about us .png"
                        alt="Tharushi Thennakoon - About Me"
                        width={580}
                        height={680}
                        className="object-contain object-bottom w-full h-full max-h-[98%] scale-105 sm:scale-110 drop-shadow-[0_16px_30px_rgba(15,23,42,0.15)] transition-transform duration-500 group-hover:scale-[1.12]"
                        onError={() => setImageError(true)}
                        priority
                      />
                    </div>
                  ) : (
                    <div className="w-[85%] h-[85%] flex flex-col items-center justify-center text-center p-6 text-[#0F172A] bg-white/60 backdrop-blur-xs rounded-2xl border border-slate-200 mb-6">
                      <Terminal className="w-8 h-8 text-[#2563EB] mb-2" />
                      <span className="text-xs font-bold text-[#0F172A]">Photo Placeholder</span>
                      <code className="text-[10px] bg-slate-100 px-2 py-0.5 rounded text-[#2563EB] mt-1 font-mono">
                        public/about us .png
                      </code>
                    </div>
                  )}
                </div>

                {/* Soft Bottom Gradient Base to Seamlessly Anchor the Bean Bag */}
                <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-[#E8F2FF] via-[#E8F2FF]/70 to-transparent pointer-events-none z-10" />

                {/* Floating Bottom Right Interactive Mini-Card */}
                <div className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5 z-20 px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-blue-100/80 shadow-lg flex items-center space-x-3 transform group-hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-8 h-8 rounded-xl bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center shrink-0 border border-blue-100">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <p className="text-[9px] font-extrabold uppercase tracking-wider text-[#2563EB]">Expertise</p>
                    <p className="text-xs font-black text-[#0F172A] leading-tight">Full-Stack & AI</p>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Right Column: Bio Details */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs sm:text-sm font-extrabold tracking-widest text-[#2563EB] uppercase">
              ABOUT ME
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-tight leading-tight">
              I turn ideas
              <br />
              into useful solutions.
            </h2>

            <p className="text-base sm:text-lg text-[#475569] font-medium leading-relaxed max-w-xl">
              Software developer and AI builder who loves crafting simple, useful and lasting digital products.
            </p>

            {/* Social Link Buttons */}
            <div className="flex items-center space-x-3.5 pt-2">
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
