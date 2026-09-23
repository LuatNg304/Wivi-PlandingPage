import React from 'react';
import { ArrowUp } from 'lucide-react';

interface StatsGridProps {
  count: string;
  description: string;
  index: number;
}

export const StatsGrid: React.FC<StatsGridProps> = ({
  count,
  description,
  index,
}) => {
  return (
    <li className="-m-0.5 flex flex-col p-3.5 sm:p-6 md:p-8">
      <div className="mb-1 sm:mb-2 flex items-end gap-x-1 sm:gap-x-2 text-2xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-none">
        {(index === 1 || index === 2) && (
          <ArrowUp className="size-4 sm:size-6 text-blue-600 stroke-[2.5]" />
        )}
        {count}
      </div>
      <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-snug sm:leading-normal mt-1">
        {description}
      </p>
    </li>
  );
};
