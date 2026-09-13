import React from 'react';

export const HeroSectionAlt: React.FC = () => {
  return (
    <section id="download" className="relative mx-auto max-w-7xl px-4 pt-12 pb-24 sm:px-6 lg:px-8">
      {/* Decorative background elements matching ScrewFast */}
      <div className="absolute top-[40%] left-4 -z-10 opacity-30 blur-2xl pointer-events-none">
        <div className="size-64 rounded-full bg-blue-500/20"></div>
      </div>
      <div className="absolute bottom-10 right-4 -z-10 opacity-30 blur-2xl pointer-events-none">
        <div className="size-64 rounded-full bg-cyan-500/20"></div>
      </div>

      <div className="rounded-3xl border border-neutral-700/60 bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-950 p-8 sm:p-14 text-center shadow-2xl backdrop-blur-md">
        {/* Heading */}
        <h2 className="mx-auto max-w-2xl text-3xl sm:text-5xl font-extrabold tracking-tight text-balance text-neutral-100 leading-tight">
          Sẵn sàng làm chủ tài chính cùng{' '}
          <span className="text-sky-400">WIVI</span>?
        </h2>

        {/* Subtitle */}
        <p className="mx-auto mt-4 max-w-xl text-base sm:text-lg text-neutral-400 leading-relaxed">
          Gia nhập cộng đồng hơn 50.000 người trẻ kiểm soát dòng tiền tự động, xây dựng chuỗi thói quen kỷ luật và chạm tới tự do tài chính.
        </p>

        {/* Download Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-transform duration-300 hover:scale-105 active:scale-95 drop-shadow-md hover:drop-shadow-xl"
            aria-label="Get it on Google Play"
          >
            <img
              src="/google-play-badge.svg"
              alt="GET IT ON Google Play"
              className="h-12 sm:h-13.5 w-auto object-contain cursor-pointer"
            />
          </a>

          <a
            
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-transform duration-300 hover:scale-105 active:scale-95 drop-shadow-md hover:drop-shadow-xl"
            aria-label="Download on the App Store"
          >
            <img
              src="/app-store-badge.svg"
              alt="Download on the App Store"
              className="h-12 sm:h-13.5 w-auto object-contain cursor-pointer"
            />
          </a>
        </div>

        <div className="mt-6 text-xs text-neutral-500">
          Miễn phí trọn đời • Không cần thẻ tín dụng • Cài đặt trong 30 giây
        </div>
      </div>
    </section>
  );
};
