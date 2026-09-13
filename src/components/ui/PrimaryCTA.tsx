import React from 'react';
import { ArrowRight } from 'lucide-react';

interface PrimaryCTAProps {
  title: string;
  url?: string;
  noArrow?: boolean;
  className?: string;
  onClick?: () => void;
}

export const PrimaryCTA: React.FC<PrimaryCTAProps> = ({
  title,
  url,
  noArrow,
  className = '',
  onClick,
}) => {
  const baseClasses =
    'group inline-flex items-center justify-center gap-x-2 rounded-lg px-4 py-3 text-sm font-bold text-white ring-blue-400 transition duration-300 focus-visible:ring-3 outline-hidden border border-blue-500/40 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 shadow-md shadow-blue-600/25 cursor-pointer 2xl:text-base dark:ring-blue-400';

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={`${baseClasses} ${className}`}>
        {title}
        {!noArrow && (
          <ArrowRight className="size-4 shrink-0 transition duration-300 group-hover:translate-x-1" />
        )}
      </button>
    );
  }

  return (
    <a href={url || '#'} className={`${baseClasses} ${className}`}>
      {title}
      {!noArrow && (
        <ArrowRight className="size-4 shrink-0 transition duration-300 group-hover:translate-x-1" />
      )}
    </a>
  );
};
