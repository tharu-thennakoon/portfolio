"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-[#0F172A] py-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Logo */}
        <Link href="#home" className="text-3xl font-extrabold tracking-tighter text-[#0F172A]">
          TT<span className="text-[#2563EB] font-black">.</span>
        </Link>

        {/* Copyright */}
        <p className="text-xs sm:text-sm font-bold tracking-widest text-[#64748B] uppercase">
          &copy; 2026 THARUSHI THENNAKOON
        </p>

      </div>
    </footer>
  );
}
