"use client";

import React from "react";

interface SkillItem {
  name: string;
  icon: React.ReactNode;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: SkillItem[];
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: "Programming Languages",
      icon: (
        <div className="w-14 h-14 rounded-2xl bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center shrink-0">
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
        </div>
      ),
      skills: [
        {
          name: "Java",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 48 48" fill="none">
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
            <svg className="w-4 h-4" viewBox="0 0 48 48" fill="none">
              <path d="M23.5 4c-5.4 0-9.8.9-9.8 4.8v3.6h9.8v1.2H9.8C4.4 13.6 0 18 0 23.4s3.9 9.3 9.3 9.3h3.1v-4.4c0-3.3 2.8-6.1 6.1-6.1h9.8c2.7 0 4.9-2.2 4.9-4.9V8.8c0-3.9-4.4-4.8-9.7-4.8zm-5.3 3c1 0 1.8.8 1.8 1.8s-.8 1.8-1.8 1.8-1.8-.8-1.8-1.8.8-1.8 1.8-1.8z" fill="#3776AB" />
              <path d="M24.5 44c5.4 0 9.8-.9 9.8-4.8v-3.6h-9.8v-1.2h13.7c5.4 0 9.8-4.4 9.8-9.8s-3.9-9.3-9.3-9.3h-3.1v4.4c0 3.3-2.8 6.1-6.1 6.1h-9.8c-2.7 0-4.9 2.2-4.9 4.9v8.4c0 3.9 4.4 4.8 9.7 4.8zm5.3-3c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8z" fill="#FFD43B" />
            </svg>
          ),
        },
        {
          name: "JavaScript",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <rect width="24" height="24" rx="3" fill="#F7DF1E" />
              <path d="M6.5 19L8.5 17.8C9 18.6 9.6 19.1 10.5 19.1C11.3 19.1 11.8 18.6 11.8 17.8V11H13.8V17.8C13.8 19.8 12.5 20.8 10.5 20.8C9 20.8 7.6 20 6.5 19ZM15 18.8L16.8 17.6C17.4 18.5 18.2 19.1 19.3 19.1C20.2 19.1 20.8 18.7 20.8 18.1C20.8 17.4 20.3 17.1 19.1 16.6L18.4 16.3C16.8 15.6 15.6 14.6 15.6 12.9C15.6 11.3 16.9 10 18.9 10C20.2 10 21.4 10.6 22.3 11.8L20.6 13C20.1 12.2 19.5 11.8 18.8 11.8C18.1 11.8 17.6 12.2 17.6 12.8C17.6 13.4 18 13.7 19.1 14.2L19.8 14.5C21.6 15.3 22.9 16.3 22.9 18C22.9 19.9 21.4 21 19.2 21C17.4 21 15.9 20.1 15 18.8Z" fill="#000000" />
            </svg>
          ),
        },
        {
          name: "TypeScript",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <rect width="24" height="24" rx="3" fill="#3178C6" />
              <path d="M11.5 10H6.5V11.5H8.2V19H9.8V11.5H11.5V10Z" fill="white" />
              <path d="M17.5 12.8C16.8 12.3 15.8 12 14.8 12C13.2 12 12.3 12.8 12.3 14C12.3 15.1 13 15.6 14.4 16.1L15 16.3C16 16.7 16.5 17.1 16.5 17.8C16.5 18.7 15.6 19.3 14.3 19.3C13.2 19.3 12.1 18.8 11.4 18.3L12 17C12.7 17.5 13.6 17.8 14.4 17.8C15.2 17.8 15.8 17.4 15.8 16.8C15.8 16.1 15.3 15.7 14 15.2L13.4 15C12.3 14.6 11.5 13.9 11.5 12.8C11.5 11.5 12.6 10.5 14.4 10.5C15.5 10.5 16.4 10.9 17 11.3L17.5 12.8Z" fill="white" />
            </svg>
          ),
        },
      ],
    },
    {
      title: "Software Engineering",
      icon: (
        <div className="w-14 h-14 rounded-2xl bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center shrink-0">
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="3" width="20" height="18" rx="4" />
            <line x1="2" y1="8" x2="22" y2="8" />
            <circle cx="5" cy="5.5" r="0.75" fill="currentColor" />
            <circle cx="8" cy="5.5" r="0.75" fill="currentColor" />
            <circle cx="11" cy="5.5" r="0.75" fill="currentColor" />
            <path d="M8 13L6 15L8 17" strokeWidth="2" />
            <path d="M16 13L18 15L16 17" strokeWidth="2" />
            <line x1="13" y1="12" x2="11" y2="18" strokeWidth="2" />
          </svg>
        </div>
      ),
      skills: [
        {
          name: "OOP",
          icon: (
            <svg className="w-4 h-4 text-[#2563EB]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
              <line x1="12" y1="22.08" x2="12" y2="12" />
            </svg>
          ),
        },
        {
          name: "Data Structures",
          icon: (
            <svg className="w-4 h-4 text-[#2563EB]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="7" rx="1.5" />
              <rect x="14" y="3" width="7" height="7" rx="1.5" />
              <rect x="14" y="14" width="7" height="7" rx="1.5" />
              <rect x="3" y="14" width="7" height="7" rx="1.5" />
            </svg>
          ),
        },
        {
          name: "JSON",
          icon: (
            <span className="font-mono text-xs font-black text-[#2563EB]">{`{ }`}</span>
          ),
        },
        {
          name: "API Integration",
          icon: (
            <svg className="w-4 h-4 text-[#2563EB]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 11a9 9 0 0 1 9 9" />
              <path d="M4 4a16 16 0 0 1 16 16" />
              <circle cx="5" cy="19" r="1" fill="currentColor" />
            </svg>
          ),
        },
        {
          name: "Debugging",
          icon: (
            <svg className="w-4 h-4 text-[#2563EB]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="8" height="14" x="8" y="6" rx="4" />
              <path d="m19 7-3 2" />
              <path d="m5 7 3 2" />
              <path d="m19 19-3-2" />
              <path d="m5 19 3-2" />
              <path d="M20 13h-4" />
              <path d="M4 13h4" />
            </svg>
          ),
        },
        {
          name: "Secure Coding",
          icon: (
            <svg className="w-4 h-4 text-[#2563EB]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
            </svg>
          ),
        },
        {
          name: "Responsive Web Design",
          icon: (
            <svg className="w-4 h-4 text-[#2563EB]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
          ),
        },
        {
          name: "Agile Methodologies",
          icon: (
            <svg className="w-4 h-4 text-[#2563EB]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
            </svg>
          ),
        },
      ],
    },
    {
      title: "Frontend",
      icon: (
        <div className="w-14 h-14 rounded-2xl bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center shrink-0">
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="3" width="20" height="18" rx="4" />
            <line x1="2" y1="9" x2="22" y2="9" />
            <circle cx="6" cy="6" r="0.8" fill="currentColor" />
            <circle cx="9" cy="6" r="0.8" fill="currentColor" />
            <circle cx="12" cy="6" r="0.8" fill="currentColor" />
          </svg>
        </div>
      ),
      skills: [
        {
          name: "HTML",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path d="M2.5 2L4.5 20.5L12 22.5L19.5 20.5L21.5 2H2.5Z" fill="#E44D26" />
              <path d="M12 3.8V20.7L18 19L19.6 3.8H12Z" fill="#F16529" />
              <path d="M12 8.3H7.8L8.1 11.2H12V14.1H8.4L8.7 16.7L12 17.6V19.4L6.9 18L6.2 6.5H12V8.3Z" fill="#EBEBEB" />
              <path d="M12 8.3V6.5H17.8L17.2 13.8H12V12.1H15.4L15.6 9.9H12V8.3ZM12 17.6L15.3 16.7L15.5 14.6H17.3L16.9 18L12 19.4V17.6Z" fill="white" />
            </svg>
          ),
        },
        {
          name: "CSS",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path d="M2.5 2L4.5 20.5L12 22.5L19.5 20.5L21.5 2H2.5Z" fill="#1572B6" />
              <path d="M12 3.8V20.7L18 19L19.6 3.8H12Z" fill="#33A9DC" />
              <path d="M12 8.3H7.8L8.1 11.2H12V14.1H8.4L8.7 16.7L12 17.6V19.4L6.9 18L6.2 6.5H12V8.3Z" fill="#EBEBEB" />
              <path d="M12 8.3V6.5H17.8L17.2 13.8H12V12.1H15.4L15.6 9.9H12V8.3ZM12 17.6L15.3 16.7L15.5 14.6H17.3L16.9 18L12 19.4V17.6Z" fill="white" />
            </svg>
          ),
        },
        {
          name: "React.js",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
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
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="11" fill="#000000" />
              <path d="M17.5 17.5L9.5 7H7.5V17H9.2V9.8L16.8 19.5C17.1 18.9 17.4 18.2 17.5 17.5Z" fill="white" />
              <path d="M14.5 7H16.2V14.5L14.5 12.2V7Z" fill="white" />
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
      ],
    },
    {
      title: "Version Control & DevOps",
      icon: (
        <div className="w-14 h-14 rounded-2xl bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center shrink-0">
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
            <circle cx="12" cy="14" r="2.5" />
            <path d="M12 10.5v1M12 16.5v1M8.5 14h1M14.5 14h1M9.5 11.5l.8.8M13.7 15.7l.8.8M9.5 16.5l.8-.8M13.7 12.3l.8-.8" strokeWidth="1.5" />
          </svg>
        </div>
      ),
      skills: [
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
          name: "Docker",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path
                d="M13.98 9.38h1.74v1.73h-1.74V9.38zm-2.28 0h1.74v1.73H11.7V9.38zm-2.28 0h1.74v1.73H9.42V9.38zm-2.28 0h1.74v1.73H7.14V9.38zm6.84-2.28h1.74v1.74h-1.74V7.1zm-2.28 0h1.74v1.74H11.7V7.1zm-2.28 0h1.74v1.74H9.42V7.1zm6.84 0h1.74v1.74h-1.74V7.1zM23.5 13.2c-.36-.26-1.18-.36-1.8-.3-.12-.8-.68-1.5-1.52-1.92l-.64-.32-.4.62c-.44.7-.6 1.6-.46 2.44-.44.22-.98.34-1.68.34H2.4c-.26 0-.5.22-.5.5 0 2.94 1.54 5.3 4.14 6.32 1.48.58 3.2.78 5.12.58 3.24-.34 6.06-2.08 7.82-4.84.44.06.9.04 1.34-.06.74-.18 1.42-.58 1.94-1.14.4-.42.66-.88.74-1.32.1-.48.24-.76.5-1.04v-.08z"
                fill="#2496ED"
              />
            </svg>
          ),
        },
        {
          name: "CI/CD",
          icon: (
            <svg className="w-4 h-4 text-[#2563EB]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
            </svg>
          ),
        },
        {
          name: "Linux",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#000000">
              <path d="M12 2C9.5 2 8 4 8 6.5V11C6.5 11 5 12.5 5 14.5C5 16 6 17 7.5 17.5C7.5 19.5 9 22 12 22C15 22 16.5 19.5 16.5 17.5C18 17 19 16 19 14.5C19 12.5 17.5 11 16 11V6.5C16 4 14.5 2 12 2ZM10.5 6.5C10.5 6 11 5.5 11.5 5.5C12 5.5 12.5 6 12.5 6.5C12.5 7 12 7.5 11.5 7.5C11 7.5 10.5 7 10.5 6.5ZM13.5 6.5C13.5 6 14 5.5 14.5 5.5C15 5.5 15.5 6 15.5 6.5C15.5 7 15 7.5 14.5 7.5C14 7.5 13.5 7 13.5 6.5Z" />
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
      ],
    },
    {
      title: "Backend",
      icon: (
        <div className="w-14 h-14 rounded-2xl bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center shrink-0">
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="6" rx="2" />
            <rect x="2" y="9" width="20" height="6" rx="2" />
            <rect x="2" y="16" width="20" height="6" rx="2" />
            <line x1="6" y1="5" x2="6.01" y2="5" strokeWidth="2.5" />
            <line x1="6" y1="12" x2="6.01" y2="12" strokeWidth="2.5" />
            <line x1="6" y1="19" x2="6.01" y2="19" strokeWidth="2.5" />
            <line x1="14" y1="5" x2="18" y2="5" />
            <line x1="14" y1="12" x2="18" y2="12" />
            <line x1="14" y1="19" x2="18" y2="19" />
          </svg>
        </div>
      ),
      skills: [
        {
          name: "Spring Boot",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 48 48" fill="none">
              <path d="M42 22C42 10.954 33.046 2 22 2S2 10.954 2 22c0 9.8 7.067 17.947 16.368 19.673l-.403-5.263C11.97 34.925 7 29.043 7 22c0-8.284 6.716-15 15-15 4.142 0 7.892 1.679 10.607 4.393C35.321 14.108 37 17.858 37 22c0 7.043-4.97 12.925-10.965 14.41l-.403 5.263C34.933 39.947 42 31.8 42 22z" fill="#6DB33F" />
              <path d="M25.5 36.5c-4.5 1-9-1.5-10.5-5.5-1.5-4 .5-8.5 4.5-10 4-1.5 8.5.5 10 4.5 1.5 4-.5 9-4 11z" fill="#6DB33F" />
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
            <div className="w-3.5 h-3.5 rounded bg-[#0F2A6B] text-white flex items-center justify-center text-[8px] font-mono font-black">
              &lt;&gt;
            </div>
          ),
        },
        {
          name: "JWT Authentication",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" fill="#D63AFF" />
              <path d="M12 6L14.5 11H9.5L12 6ZM7 14L9.5 19H4.5L7 14ZM17 14L19.5 19H14.5L17 14Z" fill="white" />
            </svg>
          ),
        },
        {
          name: "bcrypt",
          icon: (
            <svg className="w-4 h-4 text-[#2563EB]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          ),
        },
      ],
    },
    {
      title: "Tools & Platforms",
      icon: (
        <div className="w-14 h-14 rounded-2xl bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center shrink-0">
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="3" />
            <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <rect x="10" y="10" width="4" height="4" rx="1" fill="#2563EB" />
          </svg>
        </div>
      ),
      skills: [
        {
          name: "VS Code",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path d="M17.5 2.5L7.5 9.5L2.5 5.5V18.5L7.5 14.5L17.5 21.5L21.5 19.5V4.5L17.5 2.5ZM17.5 7.5V16.5L10.5 12L17.5 7.5Z" fill="#007ACC" />
            </svg>
          ),
        },
        {
          name: "IntelliJ IDEA",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <rect width="24" height="24" rx="4" fill="#000000" />
              <path d="M4 17L8 13L10 15L6 19H4V17Z" fill="#FE2857" />
              <path d="M4 5H10L14 9L8 15L4 11V5Z" fill="#FF318C" />
              <path d="M14 5H20V11L16 15L10 9L14 5Z" fill="#087CFA" />
              <rect x="6" y="17" width="8" height="2" fill="white" />
            </svg>
          ),
        },
        {
          name: "Postman",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" fill="#FF6C37" />
              <path d="M12 6C8.7 6 6 8.7 6 12C6 15.3 8.7 18 12 18C15.3 18 18 15.3 18 12C18 8.7 15.3 6 12 6ZM11 9H13V15H11V9ZM9 11H15V13H9V11Z" fill="white" />
            </svg>
          ),
        },
        {
          name: "ClickUp",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path d="M5 16.5C6.5 14.5 9 13.5 12 13.5C15 13.5 17.5 14.5 19 16.5L16.5 18.5C15.5 17.3 14 16.5 12 16.5C10 16.5 8.5 17.3 7.5 18.5L5 16.5Z" fill="#7B68EE" />
              <path d="M12 5L6 10.5L8 12.5L12 9L16 12.5L18 10.5L12 5Z" fill="#FF007F" />
            </svg>
          ),
        },
      ],
    },
    {
      title: "Database",
      icon: (
        <div className="w-14 h-14 rounded-2xl bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center shrink-0">
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          </svg>
        </div>
      ),
      skills: [
        {
          name: "MySQL",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <ellipse cx="12" cy="6" rx="8" ry="2.5" fill="#00758F" />
              <path d="M4 6v6c0 1.38 3.58 2.5 8 2.5s8-1.12 8-2.5V6" stroke="#00758F" strokeWidth="1.5" fill="none" />
              <path d="M4 12v6c0 1.38 3.58 2.5 8 2.5s8-1.12 8-2.5v-6" stroke="#F29111" strokeWidth="1.5" fill="none" />
            </svg>
          ),
        },
      ],
    },
    {
      title: "Machine Learning",
      icon: (
        <div className="w-14 h-14 rounded-2xl bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center shrink-0">
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04z" />
            <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04z" />
            <circle cx="15.5" cy="8.5" r="1" fill="currentColor" />
            <circle cx="17.5" cy="13.5" r="1" fill="currentColor" />
            <circle cx="14.5" cy="17.5" r="1" fill="currentColor" />
            <path d="M12 8.5h3.5M12 13.5h5.5M12 17.5h2.5" />
          </svg>
        </div>
      ),
      skills: [
        {
          name: "Supervised Learning",
          icon: (
            <svg className="w-4 h-4 text-[#2563EB]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" y1="20" x2="20" y2="4" />
              <circle cx="8" cy="14" r="2" fill="currentColor" />
              <circle cx="16" cy="10" r="2" fill="currentColor" />
            </svg>
          ),
        },
        {
          name: "Unsupervised Learning",
          icon: (
            <svg className="w-4 h-4 text-[#2563EB]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="6" cy="6" r="2" />
              <circle cx="18" cy="8" r="2" />
              <circle cx="12" cy="18" r="2" />
              <line x1="8" y1="7" x2="16" y2="8" strokeDasharray="2" />
            </svg>
          ),
        },
        {
          name: "ANN",
          icon: (
            <svg className="w-4 h-4 text-[#2563EB]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="4" cy="6" r="2" fill="currentColor" />
              <circle cx="4" cy="18" r="2" fill="currentColor" />
              <circle cx="12" cy="12" r="2" fill="currentColor" />
              <circle cx="20" cy="6" r="2" fill="currentColor" />
              <circle cx="20" cy="18" r="2" fill="currentColor" />
              <line x1="6" y1="6" x2="10" y2="12" />
              <line x1="6" y1="18" x2="10" y2="12" />
              <line x1="14" y1="12" x2="18" y2="6" />
              <line x1="14" y1="12" x2="18" y2="18" />
            </svg>
          ),
        },
        {
          name: "CNN",
          icon: (
            <svg className="w-4 h-4 text-[#2563EB]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="9" cy="9" r="2" fill="currentColor" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
          ),
        },
      ],
    },
  ];

  return (
    <section id="skills" className="relative py-24 sm:py-32 bg-white overflow-hidden">
      
      {/* 1. Top-Left Gray Topographical Contour Lines */}
      <div className="absolute left-0 top-0 w-80 h-72 pointer-events-none select-none z-0 opacity-70">
        <svg viewBox="0 0 300 240" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path d="M 0,20 C 80,40 160,120 180,240" fill="none" stroke="#CBD5E1" strokeWidth="1.5" />
          <path d="M 0,60 C 90,70 180,140 210,240" fill="none" stroke="#CBD5E1" strokeWidth="1.5" />
          <path d="M 0,100 C 100,110 200,160 240,240" fill="none" stroke="#CBD5E1" strokeWidth="1.5" />
          <path d="M 0,140 C 110,140 220,180 270,240" fill="none" stroke="#CBD5E1" strokeWidth="1.5" />
        </svg>
      </div>

      {/* 2. Bottom-Right Blue Dotted Cluster */}
      <div className="absolute right-6 bottom-8 w-44 h-44 pointer-events-none select-none z-0 opacity-85">
        <svg viewBox="0 0 120 120" className="w-full h-full fill-[#2563EB]">
          {[...Array(30)].map((_, i) => (
            <circle
              key={i}
              cx={12 + (i % 6) * 16 + (Math.sin(i * 1.8) * 5)}
              cy={12 + Math.floor(i / 6) * 16 + (Math.cos(i * 1.8) * 5)}
              r={1.7}
            />
          ))}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <span className="text-xs sm:text-sm font-extrabold tracking-widest text-[#2563EB] uppercase">
            TECHNICAL SKILLS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-tight">
            Technologies I Work With
          </h2>
          <p className="text-sm sm:text-base text-[#64748B] max-w-2xl mx-auto font-normal">
            Software engineering, modern web development and applied machine-learning skills.
          </p>
        </div>

        {/* 2-Column x 4-Row Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-7">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-100 border-l-[5px] border-l-[#2563EB] shadow-md shadow-slate-200/50 hover:shadow-xl hover:border-l-[#1D4ED8] transition-all duration-300 flex items-start gap-4 sm:gap-6 group"
            >
              {category.icon}

              <div className="space-y-3.5 flex-1 min-w-0">
                <h3 className="text-base sm:text-lg font-black text-[#0F172A] tracking-tight">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-2 sm:gap-2.5">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#EFF6FF] text-[#1E3A8A] text-xs sm:text-[13px] font-semibold tracking-tight border border-[#DBEAFE] hover:border-[#2563EB] hover:bg-blue-100 hover:shadow-xs transition-all duration-200 cursor-default"
                    >
                      <span className="shrink-0 flex items-center justify-center">{skill.icon}</span>
                      <span className="truncate">{skill.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
