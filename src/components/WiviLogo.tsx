import React from 'react';

interface WiviLogoProps {
  size?: number;
  className?: string;
}

export const WiviLogo: React.FC<WiviLogoProps> = ({ size = 36, className = '' }) => {
  return (
    <div 
      className={`wivi-vector-logo ${className}`}
      style={{ 
        width: size, 
        height: size, 
        borderRadius: size * 0.26, 
        position: 'relative',
        overflow: 'hidden',
        flexShrink: 0
      }}
    >
      <svg 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '100%', display: 'block' }}
      >
        {/* Top flap / dark blue background */}
        <rect width="100" height="100" rx="22" fill="#1e3a8a" />

        {/* Top white coin peek */}
        <circle cx="50" cy="14" r="11" fill="#ffffff" />

        {/* Main vibrant blue wallet body */}
        <rect y="16" width="100" height="84" rx="20" fill="#2563eb" />

        {/* Wallet right clasp/strap in darker blue */}
        <rect x="52" y="44" width="48" height="28" rx="14" fill="#1e40af" />
        
        {/* Clasp button white dot */}
        <circle cx="68" cy="58" r="6.5" fill="#ffffff" />

        {/* Bold clean "Wivi" lettering */}
        <text 
          x="12" 
          y="44" 
          fill="#ffffff" 
          fontFamily="'Lexend', system-ui, sans-serif" 
          fontWeight="800" 
          fontSize="22" 
          letterSpacing="-0.8"
        >
          Wivi
        </text>
      </svg>
    </div>
  );
};
