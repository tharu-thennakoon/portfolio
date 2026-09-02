import React from "react";

export function GithubIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

export function LinkedinIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.9 0-1.63.73-1.63 1.63s.73 1.63 1.63 1.63 1.63-.73 1.63-1.63-.73-1.63-1.63-1.63Z" />
    </svg>
  );
}

export function JavaIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <path d="M18.8 38.2c-.3 0-.6 0-.8.1-2.9.8-3.4 2.4-3.4 2.4s3.3-.2 6.4-1.2c2.7-.9 3.2-2 3.2-2s-1.8.7-5.4.7z" fill="#007396"/>
      <path d="M17.4 34.6c-.3 0-.6 0-.9.1-3.9 1-4.8 2.8-4.8 2.8s4.3-.3 8.3-1.5c3.5-1 4.1-2.5 4.1-2.5s-2.3 1.1-6.7 1.1z" fill="#007396"/>
      <path d="M25.7 29.5c4.7-2.4 2.5-4.8 2.5-4.8-2.6 2.7-6.2 3.6-9.5 4.4-3.6.9-7.3 1.8-10.4 4.5 0 0 3.7-1.9 9.3-2.6 6.3-.9 9.4-.9 8.1-1.5z" fill="#ED8B00"/>
      <path d="M30.6 33.3c3.2-1.7 1.7-3.4 1.7-3.4-1.8 1.9-4.3 2.5-6.6 3.1-2.5.6-5.1 1.2-7.2 3.1 0 0 2.6-1.3 6.5-1.8 4.4-.6 6.5-.6 5.6-1z" fill="#ED8B00"/>
      <path d="M27.2 21.6s2.5 2.5-2.4 6.3c-3.9 3-1.4 4.7-1.4 4.7s-3.4-1.8.2-4.8c4.2-3.5 3.6-6.2 3.6-6.2z" fill="#ED8B00"/>
      <path d="M21.2 12s4.2 4.2-3.8 10.7c-6.4 5.2-1.5 8.1-1.5 8.1s-5.6-3.1.6-8.2c7.1-5.9 4.7-10.6 4.7-10.6z" fill="#007396"/>
      <path d="M29.5 39.5c-4.4 2.9-18.4 3.9-22.1.2 0 0-1.4 2.5 4 4.4 7.6 2.6 22.3 2.1 26.6-1.5 0 0-1.4-1.2-8.5-3.1z" fill="#007396"/>
    </svg>
  );
}

export function PythonIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <path d="M23.5 4c-5.4 0-9.8.9-9.8 4.8v3.6h9.8v1.2H9.8C4.4 13.6 0 18 0 23.4s3.9 9.3 9.3 9.3h3.1v-4.4c0-3.3 2.8-6.1 6.1-6.1h9.8c2.7 0 4.9-2.2 4.9-4.9V8.8c0-3.9-4.4-4.8-9.7-4.8zm-5.3 3c1 0 1.8.8 1.8 1.8s-.8 1.8-1.8 1.8-1.8-.8-1.8-1.8.8-1.8 1.8-1.8z" fill="#3776AB"/>
      <path d="M24.5 44c5.4 0 9.8-.9 9.8-4.8v-3.6h-9.8v-1.2h13.7c5.4 0 9.8-4.4 9.8-9.8s-3.9-9.3-9.3-9.3h-3.1v4.4c0 3.3-2.8 6.1-6.1 6.1h-9.8c-2.7 0-4.9 2.2-4.9 4.9v8.4c0 3.9 4.4 4.8 9.7 4.8zm5.3-3c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8z" fill="#FFD43B"/>
    </svg>
  );
}

export function ReactIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <ellipse cx="24" cy="24" rx="6" ry="17" transform="rotate(30 24 24)" stroke="#61DAFB" strokeWidth="2.5"/>
      <ellipse cx="24" cy="24" rx="6" ry="17" transform="rotate(90 24 24)" stroke="#61DAFB" strokeWidth="2.5"/>
      <ellipse cx="24" cy="24" rx="6" ry="17" transform="rotate(150 24 24)" stroke="#61DAFB" strokeWidth="2.5"/>
      <circle cx="24" cy="24" r="3.5" fill="#61DAFB"/>
    </svg>
  );
}

export function NextjsIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="21" fill="#000000"/>
      <path d="M34.5 35.5L19.2 16H15v16h3.5V20.8l13.8 17.5c.7-.8 1.5-1.8 2.2-2.8z" fill="white"/>
      <path d="M29.5 16h3.5v12.2l-3.5-4.4V16z" fill="white"/>
    </svg>
  );
}

export function SpringBootIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <path d="M42 22C42 10.954 33.046 2 22 2S2 10.954 2 22c0 9.8 7.067 17.947 16.368 19.673l-.403-5.263C11.97 34.925 7 29.043 7 22c0-8.284 6.716-15 15-15 4.142 0 7.892 1.679 10.607 4.393C35.321 14.108 37 17.858 37 22c0 7.043-4.97 12.925-10.965 14.41l-.403 5.263C34.933 39.947 42 31.8 42 22z" fill="#6DB33F"/>
      <path d="M25.5 36.5c-4.5 1-9-1.5-10.5-5.5-1.5-4 .5-8.5 4.5-10 4-1.5 8.5.5 10 4.5 1.5 4-.5 9-4 11z" fill="#6DB33F"/>
    </svg>
  );
}

export function TensorFlowIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <path d="M24 4L7 14v20l8 5v-9l9 5.5v-10l-9-5.5v-4l9 5.5 9-5.5v4l-9 5.5v10l9-5.5v9l8-5V14L24 4z" fill="#FF6F00"/>
      <path d="M24 14.5l-9 5.5v4l9-5.5 9 5.5v-4l-9-5.5z" fill="#FFA800"/>
    </svg>
  );
}

export function OpenCVIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="14" r="8" stroke="#EE1C25" strokeWidth="4" fill="none"/>
      <circle cx="15" cy="30" r="8" stroke="#00923F" strokeWidth="4" fill="none"/>
      <circle cx="33" cy="30" r="8" stroke="#0080C6" strokeWidth="4" fill="none"/>
    </svg>
  );
}

export function WordPressIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="20" fill="#21759B"/>
      <path d="M7 24c0 7.4 4.8 13.7 11.5 15.9L9.7 18.2C8 19.9 7 21.9 7 24zm27-1.1c0-2.3-.8-3.9-1.5-5.2-1-1.6-1.9-3-1.9-4.6 0-1.8 1.4-3.5 3.3-3.5.1 0 .2 0 .3.02C30.9 6.8 27.6 5 24 5c-6.8 0-12.7 3.9-15.6 9.6l.8.02c1.7 0 4.3-.2 4.3-.2.9-.05 1 .9.1 1 0 0-.9.1-1.9.2l6.1 18.2 3.7-11-2.6-7.2c-.9-.1-1.8-.2-1.8-.2-.9-.05-.8-.9.1-1 0 0 2.6.2 4.2.2 1.7 0 4.3-.2 4.3-.2.9-.05 1 .9.1 1 0 0-.9.1-1.9.2l6 17.9 1.7-5.7c.8-2.5 1.4-4.3 1.4-5.9zm-16.3 3.5l4.8 14c1.4.4 2.9.6 4.5.6 1.8 0 3.6-.3 5.2-.8L29.8 26l-6.1 17.6-6-17.2zM41 24c0-2.8-.7-5.4-2-7.7L32.1 36.3C37.5 34 41 29.4 41 24z" fill="white"/>
    </svg>
  );
}
