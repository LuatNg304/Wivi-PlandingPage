import React, { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';

export const AnnouncementBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative isolate overflow-hidden bg-neutral-950/80 backdrop-blur-lg border-b border-neutral-800/60 px-3 sm:px-6 lg:px-8 py-1.5 sm:py-2 transition duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-x-2 sm:gap-x-4">
        {/* Content */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-hidden min-w-0">
          {/* Badge */}
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-w-500/15 border border-w-400/30 text-[10px] sm:text-xs font-bold text-w-300 shrink-0">
            
            WIVI 1.0
          </span>

          {/* Text */}
          <p className="text-xs sm:text-sm text-neutral-300 truncate">
            <span className="font-semibold text-neutral-100">Chính thức ra mắt</span>
            <span className="hidden md:inline text-neutral-500 mx-2">•</span>
            <span className="hidden md:inline text-neutral-400">
              Kỷ luật tài chính cùng AI Vision & 6 Hũ tự động
            </span>
          </p>
        </div>

        {/* Action link & Close button */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          <a
            href="#pricing"
            className="group  bg-white-500/20 hover:bg-white-500/30  px-2.5 sm:px-3 py-0.5 text-[11px] sm:text-xs font-semibold text-white-300 transition-colors inline-flex items-center gap-1 shadow-xs whitespace-nowrap"
          >
            <span>Trải nghiệm</span>
            <ArrowRight className="size-3 transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>

          <button
            type="button"
            onClick={() => setIsVisible(false)}
            className="p-1 text-neutral-400 hover:text-neutral-200 transition-colors cursor-pointer shrink-0 rounded-md hover:bg-neutral-800/60"
            aria-label="Dismiss banner"
          >
            <X className="size-3.5 sm:size-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
