import React from 'react';

interface SecondaryCTAProps {
  title: string;
  url?: string;
  className?: string;
  onClick?: () => void;
}

export const SecondaryCTA: React.FC<SecondaryCTAProps> = ({
  title,
  url,
  className = '',
  onClick,
}) => {
  const baseClasses =
    'inline-flex items-center justify-center gap-x-2 rounded-lg px-4 py-3 text-center text-sm font-semibold text-slate-700 outline-hidden ring-blue-500/20 focus-visible:ring-3 transition duration-300 border border-slate-200 bg-white hover:bg-slate-50 hover:text-blue-600 hover:border-slate-300 active:bg-slate-100 2xl:text-base cursor-pointer';

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={`${baseClasses} ${className}`}>
        {title}
      </button>
    );
  }

  return (
    <a href={url || '#'} className={`${baseClasses} ${className}`}>
      {title}
    </a>
  );
};
