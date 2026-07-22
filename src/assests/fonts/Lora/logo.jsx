import React from "react";


export default function ZonelyLogo({
  width = 42,
  height = 42,
  className = "",
  onClick,
}) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={width}
      height={height}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <defs>
        <linearGradient id="zonelyGradient" x1="10" y1="10" x2="54" y2="54">
          <stop offset="0%" stopColor="#4F8CFF" />
          <stop offset="100%" stopColor="#16D9B4" />
        </linearGradient>

        <filter id="softGlow">
          <feGaussianBlur stdDeviation="1.8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Discovery Ring */}
      <path
        d="M32 8
           A24 24 0 1 1 17 13"
        stroke="currentColor"
        strokeOpacity=".18"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Accent Arc */}
      <path
        d="M47 18
           A18 18 0 0 1 49 33"
        stroke="url(#zonelyGradient)"
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      {/* Hidden Z */}
      <path
        d="M22 21
           H42
           L22 43
           H42"
        stroke="url(#zonelyGradient)"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Center node */}
      <circle
        cx="32"
        cy="32"
        r="4"
        fill="white"
        stroke="url(#zonelyGradient)"
        strokeWidth="3"
        filter="url(#softGlow)"
      />

      {/* Discovery point */}
      <circle
        cx="50"
        cy="15"
        r="2.8"
        fill="#16D9B4"
      />

      {/* Small pulse */}
      <circle
        cx="50"
        cy="15"
        r="5"
        stroke="#16D9B4"
        strokeOpacity=".25"
        strokeWidth="2"
      />
    </svg>
  );
}