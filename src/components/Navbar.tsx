"use client";

import React, { useState, useEffect, useCallback } from "react";
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

  const scrollToSection = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      e.preventDefault();
      setIsMobileMenuOpen(false);

      if (id === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setActiveSection("home");
        history.replaceState(null, "", "#home");
        return;
      }

      const element = document.getElementById(id);
      if (element) {
        const navHeight = 90;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - navHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
        setActiveSection(id);
        history.replaceState(null, "", `#${id}`);
      }
    },
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Check if near top
      if (scrollY < 120) {
        setActiveSection("home");
        return;
      }

      // Check if scrolled near bottom (select last section, contact)
      if (scrollY + windowHeight >= documentHeight - 80) {
        setActiveSection("contact");
        return;
      }

      const sectionIds = navLinks.map((l) => l.id);
      const viewportTrigger = 180; // Distance from top of viewport for active trigger

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= viewportTrigger) {
            setActiveSection(id);
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
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 transition-all duration-300 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 h-20 sm:h-24 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, "home")}
          className="flex items-center text-3xl font-extrabold tracking-tighter text-[#0F172A] group cursor-pointer"
        >
          TT<span className="text-[#2563EB] font-black group-hover:scale-125 transition-transform duration-300">.</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.id)}
                className={`relative text-xs lg:text-[13px] font-bold tracking-wider transition-colors duration-200 py-1.5 cursor-pointer ${
                  isActive ? "text-[#2563EB]" : "text-[#475569] hover:text-[#0F172A]"
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#2563EB] rounded-full transition-all duration-300 ${
                    isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                  }`}
                />
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
            onClick={(e) => scrollToSection(e, "contact")}
            className="ml-2 px-6 py-2.5 rounded-full border-2 border-[#0F172A] text-[#0F172A] text-xs font-extrabold tracking-widest hover:bg-[#0F172A] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-sm cursor-pointer"
          >
            LET&apos;S TALK
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-[#0F172A] hover:text-[#2563EB] focus:outline-none transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-4 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className={`text-sm font-bold tracking-wider py-2.5 px-3 rounded-lg transition-all cursor-pointer flex items-center justify-between ${
                    isActive
                      ? "text-[#2563EB] bg-blue-50 font-black"
                      : "text-[#475569] hover:text-[#0F172A] hover:bg-slate-50"
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#2563EB]" />}
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
                className="w-10 h-10 rounded-full bg-[#0F172A] text-white flex items-center justify-center hover:bg-[#2563EB] transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/tharushi-thennakoon-579ab6280"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#0F172A] text-white flex items-center justify-center hover:bg-[#2563EB] transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "contact")}
              className="px-5 py-2 rounded-full border border-[#0F172A] text-[#0F172A] text-xs font-bold tracking-wider hover:bg-[#0F172A] hover:text-white transition-all cursor-pointer"
            >
              LET&apos;S TALK
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
