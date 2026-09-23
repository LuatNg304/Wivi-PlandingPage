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
        <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
          {icon}
        </div>
      )}
      <div className="grow">
        <h3 className="text-balance text-lg font-bold text-slate-900">
          {heading}
        </h3>
        <p className="mt-1 text-pretty text-slate-600 text-sm leading-relaxed">
          {content}
        </p>
      </div>
    </div>
  );
};
