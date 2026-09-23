import React from 'react';

export const HeroSectionAlt: React.FC = () => {
  return (
    <section id="download" className="relative mx-auto max-w-7xl px-4 pt-12 pb-24 sm:px-6 lg:px-8">
      {/* Decorative background elements */}
      <div className="absolute top-[40%] left-4 -z-10 opacity-60 blur-3xl pointer-events-none">
        <div className="size-64 rounded-full bg-blue-200/50"></div>
      </div>
      <div className="absolute bottom-10 right-4 -z-10 opacity-60 blur-3xl pointer-events-none">
        <div className="size-64 rounded-full bg-sky-200/50"></div>
      </div>

      <div className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-gradient-to-b from-blue-50/70 via-white to-slate-50/80 p-6 sm:p-12 md:p-14 text-center shadow-xs">
        {/* Heading */}
        <h2 className="mx-auto max-w-2xl text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-balance text-slate-900 leading-snug sm:leading-tight">
          Sẵn sàng làm chủ tài chính cùng{' '}
          <span className="text-blue-600">WIVI</span>?
        </h2>

        {/* Subtitle */}
        <p className="mx-auto mt-3 sm:mt-4 max-w-xl text-xs sm:text-base text-slate-600 leading-relaxed">
          Gia nhập cộng đồng hơn 50.000 người trẻ kiểm soát dòng tiền tự động, xây dựng chuỗi thói quen kỷ luật và chạm tới tự do tài chính.
        </p>

        {/* Download Buttons */}
        <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-transform duration-300 hover:scale-105 active:scale-95"
            aria-label="Get it on Google Play"
          >
            <img
              src="/google-play-badge.svg"
              alt="GET IT ON Google Play"
              className="h-10 sm:h-13.5 w-auto object-contain cursor-pointer"
            />
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-transform duration-300 hover:scale-105 active:scale-95"
            aria-label="Download on the App Store"
          >
            <img
              src="/app-store-badge.svg"
              alt="Download on the App Store"
              className="h-10 sm:h-13.5 w-auto object-contain cursor-pointer"
            />
          </a>
        </div>

        <div className="mt-5 sm:mt-6 text-[11px] sm:text-xs text-slate-500">
          Miễn phí trọn đời • Không cần thẻ tín dụng • Cài đặt trong 30 giây
        </div>
      </div>
    </section>
  );
};
