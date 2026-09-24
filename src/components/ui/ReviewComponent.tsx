import React from "react";
import { Star } from "lucide-react";
import wiviLogo from "../../assets/wivi-logo.png";

interface ReviewComponentProps {
  avatars?: string[];
  starCount?: number;
  rating?: string;
  reviews?: string;
}

export const ReviewComponent: React.FC<ReviewComponentProps> = ({
  avatars = [wiviLogo, wiviLogo, wiviLogo],
  starCount = 5,
  rating = "4.9 / 5",
  reviews = "Từ hơn 45.000+ người dùng kỷ luật",
}) => {
  return (
    <div className="mt-6 lg:mt-10">
      <div className="py-2">
        <div className="text-center sm:flex sm:items-center sm:text-start">
          <div className="shrink-0 pb-4 sm:flex sm:pe-5 sm:pb-0">
            {/* Avatar Group */}
            <div className="flex justify-center -space-x-2.5">
              {avatars.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`User avatar ${i + 1}`}
                  className="inline-block size-8 rounded-full ring-2 ring-white object-cover"
                />
              ))}
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 ring-2 ring-white">
                <span className="text-[10px] leading-none font-bold text-white uppercase">
                  
                </span>
              </span>
            </div>
          </div>
          <div className="mx-auto h-px w-32 border-t border-slate-200 sm:mx-0 sm:h-8 sm:w-auto sm:border-s sm:border-t-0"></div>
          {/* Review Ratings */}
          <div className="flex flex-col items-center sm:items-start">
            <div className="flex items-baseline space-x-2 pt-3 sm:ps-5 sm:pt-0">
              <div className="flex space-x-0.5 text-amber-400">
                {Array(starCount)
                  .fill(0)
                  .map((_, i) => (
                    <Star
                      key={i}
                      className="size-4 fill-amber-400 text-amber-400"
                    />
                  ))}
              </div>
              <p className="text-sm font-bold text-slate-900">{rating}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
