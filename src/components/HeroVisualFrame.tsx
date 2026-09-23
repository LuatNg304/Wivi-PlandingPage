import React from "react";
import { Wivi3DModel } from "./Wivi3DModel";

interface HeroVisualFrameProps {
  className?: string;
}

export const HeroVisualFrame: React.FC<HeroVisualFrameProps> = ({
  className = "",
}) => {
  return (
    <div
      className={`relative w-full max-w-[340px] xs:max-w-[380px] sm:max-w-[460px] lg:max-w-[480px] mx-auto select-none ${className}`}
    >
      {/* Secondary Peeking Card on the right (matches reference image showcase effect) */}
      <div
        className="absolute -right-6 top-8 bottom-8 w-24 rounded-[32px] bg-gradient-to-b from-blue-300/40 via-sky-200/30 to-blue-400/20 blur-[1px] opacity-70 border border-slate-200/60 pointer-events-none hidden sm:block -z-10"
        aria-hidden="true"
      />

      {/* Main 3D Showcase Frame with Deep Blue Sky Gradient */}
      <div
        id="wivi-3d-model-container"
        className="relative w-full aspect-[4/4.8] sm:aspect-[3.6/4.8] max-h-[580px] rounded-[28px] sm:rounded-[40px] bg-gradient-to-b from-[#0d3b66] via-[#155e9c] to-[#0a2540] overflow-hidden border border-white/20 group"
      >
        {/* Sky Ambient Light Layers */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_25%,rgba(56,189,248,0.35),transparent_65%)] pointer-events-none" />
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-black/25 to-transparent pointer-events-none" />

        {/* ── Visual Scene Elements (3D Model) ── */}
        <div className="relative w-full h-full flex flex-col items-center justify-center p-4 sm:p-6">
          {/* Interactive 3D Model */}
          <div className="relative w-full h-full flex items-center justify-center">
            <Wivi3DModel
              modelPath="/modal3d/8899c880e7456aaaaba35722f50805e0.glb"
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Glossy Diagonal Reflection Over Frame */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
      </div>
    </div>
  );
};
