"use client";

import React, { useEffect, useState, useRef } from "react";

interface TypewriterTextProps {
  roles?: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseAfterTyping?: number;
  pauseBeforeNext?: number;
  className?: string;
  cursorClassName?: string;
}

const DEFAULT_ROLES = [
  "Software Developer",
  "AI Builder",
  "Full-Stack Developer",
  "Freelancer",
];

export default function TypewriterText({
  roles = DEFAULT_ROLES,
  typingSpeed = 80,
  deletingSpeed = 45,
  pauseAfterTyping = 1500,
  pauseBeforeNext = 300,
  className = "text-[#2563EB] font-bold",
  cursorClassName = "bg-[#0F2A5F]",
}: TypewriterTextProps) {
  const [mounted, setMounted] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Check for reduced motion preference and mount state to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  // Typewriter animation loop
  useEffect(() => {
    if (!mounted || prefersReducedMotion || roles.length === 0) {
      return;
    }

    const currentFullText = roles[currentRoleIndex];

    if (!isDeleting) {
      // Typing phase
      if (displayedText.length < currentFullText.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayedText(currentFullText.slice(0, displayedText.length + 1));
        }, typingSpeed);
      } else {
        // Finished typing word, pause before deleting
        timeoutRef.current = setTimeout(() => {
          setIsDeleting(true);
        }, pauseAfterTyping);
      }
    } else {
      // Deleting phase
      if (displayedText.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayedText(currentFullText.slice(0, displayedText.length - 1));
        }, deletingSpeed);
      } else {
        // Finished deleting word, pause before next word
        timeoutRef.current = setTimeout(() => {
          setIsDeleting(false);
          setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }, pauseBeforeNext);
      }
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [
    mounted,
    prefersReducedMotion,
    displayedText,
    isDeleting,
    currentRoleIndex,
    roles,
    typingSpeed,
    deletingSpeed,
    pauseAfterTyping,
    pauseBeforeNext,
  ]);

  // Screen-reader accessible summary of roles
  const accessibleRolesList = roles.join(", ");

  // Initial SSR / Reduced motion rendering
  if (!mounted || prefersReducedMotion) {
    return (
      <span className="inline-block">
        <span className="sr-only">{accessibleRolesList}</span>
        <span className={className}>{roles[0] || "Software Developer"}</span>
      </span>
    );
  }

  return (
    <span className="inline-flex items-center">
      {/* Accessible screen reader announcement */}
      <span className="sr-only">{accessibleRolesList}</span>

      {/* Visual Typewriter Animated Text */}
      <span aria-hidden="true" className={className}>
        {displayedText}
      </span>

      {/* Blinking Vertical Cursor */}
      <span
        aria-hidden="true"
        className={`inline-block w-[3px] h-[0.9em] ml-1 align-middle animate-pulse rounded-full ${cursorClassName}`}
      />
    </span>
  );
}
