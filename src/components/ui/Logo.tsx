'use client';

import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  ariaHidden?: boolean;
}

/** Professional tent/canopy logo mark - use currentColor so parent can set color via className (e.g. text-primary) */
export default function Logo({ className = '', size = 40, ariaHidden = true }: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      width={size}
      height={size}
      aria-hidden={ariaHidden}
    >
      <path
        d="M20 6L6 34h6l2-10 4 10h6l2-10 4 10h6L20 6z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M20 6v28M12 34h16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
