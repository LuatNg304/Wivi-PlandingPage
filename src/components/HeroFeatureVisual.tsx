import React, { useState } from "react";
import { Wivi3DModel } from "./Wivi3DModel";
import { Sparkles, Box, ShieldCheck, Flame } from "lucide-react";

export interface HeroFeatureVisualProps {
  isMobile: boolean;
}

export const HeroFeatureVisual: React.FC<HeroFeatureVisualProps> = ({ isMobile }) => {
  const [viewMode, setViewMode] = useState<"feature" | "3d">("feature");

  return (
    <div className="w-full flex flex-col items-center justify-center relative">
      {/* Ambient Pulsing Glow behind */}
      <div className="absolute inset-0 translate-y-2 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.35),rgba(2,132,199,0.18)_50%,transparent_70%)] rounded-full blur-3xl pointer-events-none" />

      {/* Mode Switcher Pill */}
      <div className="relative z-20 mb-2 inline-flex items-center p-0.5 rounded-full bg-slate-900/90 backdrop-blur-md border border-sky-400/30 shadow-lg text-[10.5px]">
        <button
          onClick={() => setViewMode("feature")}
          className={`flex items-center gap-1.5 px-3 py-1 rounded-full transition-all cursor-pointer ${
            viewMode === "feature"
              ? "bg-gradient-to-r from-sky-500 to-teal-400 text-slate-950 font-bold shadow-sm"
              : "text-slate-300 hover:text-white"
          }`}
          title="Xem hệ sinh thái WIVI (Smart Money for Smart Gen)"
        >
          <Sparkles className="w-3 h-3" />
          <span>Hệ Sinh Thái WIVI</span>
        </button>
        <button
          onClick={() => setViewMode("3d")}
          className={`flex items-center gap-1.5 px-3 py-1 rounded-full transition-all cursor-pointer ${
            viewMode === "3d"
              ? "bg-gradient-to-r from-sky-500 to-teal-400 text-slate-950 font-bold shadow-sm"
              : "text-slate-300 hover:text-white"
          }`}
          title="Xoay ví 3D tương tác"
        >
          <Box className="w-3 h-3" />
          <span>Ví 3D Tương Tác</span>
        </button>
      </div>

      {viewMode === "feature" ? (
        <div className="relative z-10 w-full max-w-[420px] aspect-[16/9] rounded-2xl overflow-hidden border border-sky-400/40 bg-slate-900/90 shadow-[0_15px_35px_rgba(2,132,199,0.3)] backdrop-blur-sm group transition-all duration-300 hover:scale-[1.02]">
          <img
            src="/assets/about-me/tinhnang.png"
            alt="WIVI - Smart Money For Smart Generation"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute bottom-2 left-2 right-2 px-2.5 py-1 rounded-lg bg-slate-950/85 backdrop-blur-md border border-white/10 flex items-center justify-between text-[10px] text-sky-200">
            <span className="font-semibold text-white">FPT University × WIVI Fintech</span>
            <span className="text-teal-300 font-mono">Smart Money For Smart Gen</span>
          </div>
        </div>
      ) : (
        <div className="relative z-10 w-[280px] h-[200px] flex items-center justify-center cursor-grab active:cursor-grabbing">
          <Wivi3DModel
            modelPath="/modal3d/8899c880e7456aaaaba35722f50805e0.glb"
            className="w-full h-full"
            scale={isMobile ? 1.8 : 2.0}
            positionY={isMobile ? -0.3 : -0.7}
          />
        </div>
      )}
    </div>
  );
};

export default HeroFeatureVisual;
