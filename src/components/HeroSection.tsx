import React from 'react';
import { Scene } from './Scene';
import { PrimaryCTA } from './ui/PrimaryCTA';
import { SecondaryCTA } from './ui/SecondaryCTA';
import { ReviewComponent } from './ui/ReviewComponent';
import { ShieldCheck, Zap, Layers, Sparkles } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center pt-28 sm:pt-36 pb-16 sm:pb-20 overflow-hidden"
    >
      {/* 3D Model Living World as FULL VIEWPORT BACKGROUND (starting from pixel 0) */}
      <div className="absolute inset-0 z-0 w-full h-full pointer-events-auto">
        <Scene />
        {/* Soft subtle overlays - keeping the top crystal clear without any black band */}
        <div className="absolute inset-0 bg-neutral-950/20 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/20 to-neutral-950 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(10,10,12,0.7)_100%)] pointer-events-none" />
      </div>

      {/* Foreground Content Container strictly centered */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 text-center flex flex-col items-center pointer-events-auto">
        {/* Subtle Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900/85 border border-neutral-700/80 mb-6 backdrop-blur-md shadow-lg">
          
          <span className="text-xs font-bold tracking-wide text-neutral-200 uppercase">
            WIVI 2.0
          </span>
          <span className="text-neutral-500">•</span>
          <span className="text-xs text-neutral-300 font-medium">
            Kỷ Luật Chi Tiêu, Thảnh Thơi Tương Lai
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-balance text-neutral-100 leading-[1.1] mb-6 drop-shadow-lg">
          Làm chủ tài chính cùng{' '}
          <span className="text-sky-400">WIVI</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg lg:text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed mb-8 drop-shadow-md">
          Phương pháp 6 Hũ kết hợp AI thị giác bóc tách hoá đơn 2s tự động. Xây dựng thói quen tài chính kỷ luật vững vàng và tự do thực sự.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <PrimaryCTA title="Tải App Miễn Phí" url="#download" />
          <SecondaryCTA title="Xem 6 Hũ Tự Động" url="#jars" />
        </div>

        {/* Review Component (Stacked Avatars & 4.9 Star Rating) */}
        <ReviewComponent />

        {/* Key Features Strip Floating over 3D background */}
        <div className="mt-10 inline-flex flex-wrap items-center justify-center gap-6 sm:gap-10 px-6 py-3 rounded-2xl bg-neutral-900/80 border border-neutral-700/70 backdrop-blur-xl text-xs sm:text-sm text-neutral-300 shadow-2xl">
          <div className="flex items-center gap-2">
            
            <span className="font-semibold text-neutral-100">6 Hũ Tài Chính:</span>
            <span className="text-neutral-400">Tự Động 100%</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-neutral-700" />
          <div className="flex items-center gap-2">
            
            <span className="font-semibold text-neutral-100">AI OCR Vision:</span>
            <span className="text-neutral-400">Bóc Tách 2s</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-neutral-700" />
          <div className="flex items-center gap-2">
            
            <span className="font-semibold text-neutral-100">Bảo Mật:</span>
            <span className="text-neutral-400">Mã Hóa AES-256</span>
          </div>
        </div>
      </div>
    </section>
  );
};
