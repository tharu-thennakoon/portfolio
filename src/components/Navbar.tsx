"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "HOME", href: "#home", id: "home" },
    { name: "ABOUT", href: "#about", id: "about" },
    { name: "SKILLS", href: "#skills", id: "skills" },
    { name: "EXPERIENCE", href: "#experience", id: "experience" },
    { name: "WORK", href: "#work", id: "work" },
    { name: "EDUCATION", href: "#education", id: "education" },
    { name: "CONTACT", href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "experience", "work", "education", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 h-20 sm:h-24 flex items-center justify-between">
        {/* Logo */}
        <Link href="#home" className="flex items-center text-3xl font-extrabold tracking-tighter text-[#0F172A]">
          TT<span className="text-[#2563EB] font-black">.</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative text-xs lg:text-[13px] font-bold tracking-wider transition-colors duration-200 py-1 ${
                  isActive ? "text-[#2563EB]" : "text-[#475569] hover:text-[#0F172A]"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#2563EB] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center space-x-3.5">
          <a
            href="https://github.com/tharu-thennakoon"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-[#0F172A] text-white flex items-center justify-center hover:bg-[#2563EB] transition-all duration-300 transform hover:scale-105 shadow-sm"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/tharushi-thennakoon-579ab6280"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-[#0F172A] text-white flex items-center justify-center hover:bg-[#2563EB] transition-all duration-300 transform hover:scale-105 shadow-sm"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a
            href="#contact"
            className="ml-2 px-6 py-2.5 rounded-full border-2 border-[#0F172A] text-[#0F172A] text-xs font-extrabold tracking-widest hover:bg-[#0F172A] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-sm"
          >
            LET&apos;S TALK
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-[#0F172A] hover:text-[#2563EB] focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-sm font-bold tracking-wider py-2 transition-colors ${
                    isActive ? "text-[#2563EB]" : "text-[#475569]"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>
          <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
            <div className="flex space-x-3">
              <a
                href="https://github.com/tharu-thennakoon"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#0F172A] text-white flex items-center justify-center hover:bg-[#2563EB]"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/tharushi-thennakoon-579ab6280"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#0F172A] text-white flex items-center justify-center hover:bg-[#2563EB]"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-5 py-2 rounded-full border border-[#0F172A] text-[#0F172A] text-xs font-bold tracking-wider hover:bg-[#0F172A] hover:text-white"
            >
              LET&apos;S TALK
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
