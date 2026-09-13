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
    'inline-flex items-center justify-center gap-x-2 rounded-lg px-4 py-3 text-center text-sm font-medium text-neutral-600 shadow-xs outline-hidden ring-zinc-500 focus-visible:ring-3 transition duration-300 border border-neutral-200 bg-neutral-300 hover:bg-neutral-400/50 hover:text-neutral-600 active:text-neutral-700 2xl:text-base dark:border-neutral-700 dark:bg-zinc-700 dark:text-neutral-300 dark:ring-zinc-200 dark:hover:bg-zinc-600 dark:focus:outline-hidden cursor-pointer';

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
