import React from "react";
import { PrimaryCTA } from "./ui/PrimaryCTA";
import { SecondaryCTA } from "./ui/SecondaryCTA";
import { ReviewComponent } from "./ui/ReviewComponent";
import { ShieldCheck, Zap, Layers, Sparkles } from "lucide-react";

import { HeroVisualFrame } from "./HeroVisualFrame";
import { ClientsSection } from "./ClientsSection";

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] w-full flex flex-col justify-between pt-20 sm:pt-28 lg:pt-32 pb-6 sm:pb-8 overflow-hidden bg-gradient-to-b from-blue-50/40 via-white to-white"
    >
      {/* Soft Ambient Glows in background */}
      <div className="absolute top-12 left-1/3 -translate-x-1/2 w-[520px] h-[320px] bg-gradient-to-tr from-blue-200/25 to-sky-100/35 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Main 2-Column Container matching reference image */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs & Social Proof */}
          <div className="lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-start">
            {/* Hero Title */}
            <h1 className="text-[2rem] sm:text-5xl lg:text-6xl xl:text-[68px] font-extrabold tracking-tight text-slate-900 leading-[1.15] sm:leading-[1.12] mb-3 sm:mb-6 text-balance">
              Làm chủ tài chính cùng <span className="text-blue-600">WIVI</span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-lg lg:text-xl text-slate-600 max-w-lg lg:max-w-xl leading-relaxed mb-5 sm:mb-8">
              Phương pháp Hũ kết hợp AI thị giác bóc tách hoá đơn 2s tự động.
              Xây dựng thói quen tài chính kỷ luật vững vàng và tự do thực sự.
            </p>

            {/* Action Buttons (Pill shaped like reference) */}
            <div className="flex flex-row items-center gap-3 mb-5 sm:mb-8 w-full sm:w-auto">
              <PrimaryCTA
                title="Tải App Miễn Phí"
                url="#download"
                className="!rounded-full !px-5 sm:!px-6 !py-3 sm:!py-3.5 text-center justify-center flex-1 sm:flex-none"
              />
              <SecondaryCTA
                title="Xem Hũ Tự Động"
                url="#jars"
                className="!rounded-full !px-5 sm:!px-6 !py-3 sm:!py-3.5 text-center justify-center flex-1 sm:flex-none"
              />
            </div>

            {/* Review Component (Stacked Avatars & 4.9 Star Rating) */}
            <div className="w-full">
              <ReviewComponent />
            </div>
          </div>

          {/* Right Column: 3D Showcase Frame – hidden on mobile, shown lg+ */}
          <div className="hidden lg:flex lg:col-span-5 justify-end">
            <HeroVisualFrame />
          </div>
        </div>
      </div>

      {/* Banking Partners Running Marquee */}
      <div className="relative z-10 w-full mt-4 sm:mt-10 lg:mt-12">
        <ClientsSection />
      </div>
    </section>
  );
};
