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
    <li className="-m-0.5 flex flex-col p-6 sm:p-8">
      <div className="mb-2 flex items-end gap-x-2 text-3xl font-bold text-neutral-800 sm:text-5xl dark:text-neutral-200">
        {(index === 1 || index === 2) && (
          <ArrowUp className="size-6 text-sky-400 dark:text-sky-300 stroke-[2.5]" />
        )}
        {count}
      </div>
      <p className="text-sm text-neutral-600 sm:text-base dark:text-neutral-400">
        {description}
      </p>
    </li>
  );
};
