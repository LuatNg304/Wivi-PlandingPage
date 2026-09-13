import React from 'react';
import { Star } from 'lucide-react';

interface ReviewComponentProps {
  avatars?: string[];
  starCount?: number;
  rating?: string;
  reviews?: string;
}

export const ReviewComponent: React.FC<ReviewComponentProps> = ({
  avatars = [
    'https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/783286634_122097047127460897_5199390474867807451_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x2048&ctp=p526x296&_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEELVDWGkvAjoS1rpzVrdfRn90d9W0rpMef3R31bSukx6ld1PpRjdje5NMyhnrped7jzQ9sc_9IbeY0br5lFlP0&_nc_ohc=AZpZw6Gk5lEQ7kNvwGzvMX3&_nc_oc=AdpGT7IK8eYHNuGXTm2A1ehjtCw22wyp1hUo1n3YtqtN_GAN_u-5pdtyTSdFTDqIN4I&_nc_zt=23&_nc_ht=scontent.fsgn2-7.fna&_nc_gid=p3xROsYq6Os7n99xLrTKdw&_nc_ss=7b2a8&oh=00_AQIaYm4Qmen0md8d91mCcDc4vFbRJJy1JXB6B3Q_L78TuQ&oe=6AACB40E',
    'https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/783286634_122097047127460897_5199390474867807451_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x2048&ctp=p526x296&_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEELVDWGkvAjoS1rpzVrdfRn90d9W0rpMef3R31bSukx6ld1PpRjdje5NMyhnrped7jzQ9sc_9IbeY0br5lFlP0&_nc_ohc=AZpZw6Gk5lEQ7kNvwGzvMX3&_nc_oc=AdpGT7IK8eYHNuGXTm2A1ehjtCw22wyp1hUo1n3YtqtN_GAN_u-5pdtyTSdFTDqIN4I&_nc_zt=23&_nc_ht=scontent.fsgn2-7.fna&_nc_gid=p3xROsYq6Os7n99xLrTKdw&_nc_ss=7b2a8&oh=00_AQIaYm4Qmen0md8d91mCcDc4vFbRJJy1JXB6B3Q_L78TuQ&oe=6AACB40E',
    'https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/783286634_122097047127460897_5199390474867807451_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x2048&ctp=p526x296&_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEELVDWGkvAjoS1rpzVrdfRn90d9W0rpMef3R31bSukx6ld1PpRjdje5NMyhnrped7jzQ9sc_9IbeY0br5lFlP0&_nc_ohc=AZpZw6Gk5lEQ7kNvwGzvMX3&_nc_oc=AdpGT7IK8eYHNuGXTm2A1ehjtCw22wyp1hUo1n3YtqtN_GAN_u-5pdtyTSdFTDqIN4I&_nc_zt=23&_nc_ht=scontent.fsgn2-7.fna&_nc_gid=p3xROsYq6Os7n99xLrTKdw&_nc_ss=7b2a8&oh=00_AQIaYm4Qmen0md8d91mCcDc4vFbRJJy1JXB6B3Q_L78TuQ&oe=6AACB40E',
    'https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/783286634_122097047127460897_5199390474867807451_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x2048&ctp=p526x296&_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEELVDWGkvAjoS1rpzVrdfRn90d9W0rpMef3R31bSukx6ld1PpRjdje5NMyhnrped7jzQ9sc_9IbeY0br5lFlP0&_nc_ohc=AZpZw6Gk5lEQ7kNvwGzvMX3&_nc_oc=AdpGT7IK8eYHNuGXTm2A1ehjtCw22wyp1hUo1n3YtqtN_GAN_u-5pdtyTSdFTDqIN4I&_nc_zt=23&_nc_ht=scontent.fsgn2-7.fna&_nc_gid=p3xROsYq6Os7n99xLrTKdw&_nc_ss=7b2a8&oh=00_AQIaYm4Qmen0md8d91mCcDc4vFbRJJy1JXB6B3Q_L78TuQ&oe=6AACB40E',
    'https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/783286634_122097047127460897_5199390474867807451_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x2048&ctp=p526x296&_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEELVDWGkvAjoS1rpzVrdfRn90d9W0rpMef3R31bSukx6ld1PpRjdje5NMyhnrped7jzQ9sc_9IbeY0br5lFlP0&_nc_ohc=AZpZw6Gk5lEQ7kNvwGzvMX3&_nc_oc=AdpGT7IK8eYHNuGXTm2A1ehjtCw22wyp1hUo1n3YtqtN_GAN_u-5pdtyTSdFTDqIN4I&_nc_zt=23&_nc_ht=scontent.fsgn2-7.fna&_nc_gid=p3xROsYq6Os7n99xLrTKdw&_nc_ss=7b2a8&oh=00_AQIaYm4Qmen0md8d91mCcDc4vFbRJJy1JXB6B3Q_L78TuQ&oe=6AACB40E',
  ],
  starCount = 5,
  rating = '4.9 / 5',
  reviews = 'Từ hơn 45.000+ người dùng kỷ luật',
}) => {
  return (
    <div className="mt-6 lg:mt-10">
      <div className="py-2">
        <div className="text-center sm:flex sm:items-center sm:text-start">
          <div className="shrink-0 pb-4 sm:flex sm:pe-5 sm:pb-0">
            {/* Avatar Group */}
            <div className="flex justify-center -space-x-3">
              {avatars.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`User avatar ${i + 1}`}
                  className="inline-block size-8 rounded-full ring-2 ring-white dark:ring-neutral-900 object-cover"
                />
              ))}
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800 ring-2 ring-white dark:bg-zinc-900 dark:ring-zinc-800">
                <span className="text-xs leading-none font-medium text-white uppercase">45k+</span>
              </span>
            </div>
          </div>
          <div className="mx-auto h-px w-32 border-t border-neutral-400 sm:mx-0 sm:h-8 sm:w-auto sm:border-s sm:border-t-0 dark:border-neutral-700"></div>
          {/* Review Ratings */}
          <div className="flex flex-col items-center sm:items-start">
            <div className="flex items-baseline space-x-2 pt-3 sm:ps-5 sm:pt-0">
              <div className="flex space-x-0.5 text-yellow-400">
                {Array(starCount)
                  .fill(0)
                  .map((_, i) => (
                    <Star key={i} className="size-4 fill-yellow-400 text-yellow-400" />
                  ))}
              </div>
              <p className="text-sm font-bold text-neutral-800 dark:text-neutral-200">
                {rating}
              </p>
            </div>
            <div className="text-xs sm:text-sm text-neutral-600 sm:ps-5 dark:text-neutral-400 mt-0.5">
              <p>{reviews}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
