import React from 'react';

interface IconBlockProps {
  heading: string;
  content: string;
  icon?: React.ReactNode;
}

export const IconBlock: React.FC<IconBlockProps> = ({
  heading,
  content,
  icon,
}) => {
  return (
    <div className="flex gap-x-5">
      {icon && (
        <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-neutral-800 text-sky-400 dark:bg-neutral-800/90 dark:text-sky-300 border border-neutral-700/60 shadow-xs">
          {icon}
        </div>
      )}
      <div className="grow">
        <h3 className="text-balance text-lg font-bold text-neutral-800 dark:text-neutral-200">
          {heading}
        </h3>
        <p className="mt-1 text-pretty text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
          {content}
        </p>
      </div>
    </div>
  );
};
