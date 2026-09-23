import React from "react";
import { AnnouncementBanner } from "./components/AnnouncementBanner";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { FeaturesGeneral } from "./components/FeaturesGeneral";
import { FeaturesNavs } from "./components/FeaturesNavs";
import { CalculatorSection } from "./components/CalculatorSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { PricingSection } from "./components/PricingSection";
import { FaqSection } from "./components/FaqSection";
import { HeroSectionAlt } from "./components/HeroSectionAlt";
import { FooterSection } from "./components/FooterSection";

export function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white font-sans antialiased relative">
      {/* Floating Top Navigation */}
      <div className="fixed top-0 inset-x-0 z-50 pointer-events-none">
        <div className="pointer-events-auto">
          <AnnouncementBanner />
        </div>
        <div className="pointer-events-auto">
          <Navbar />
        </div>
      </div>

      <main className="overflow-hidden">
        {/* ScrewFast Hero (includes Banking Partners Marquee) */}
        <HeroSection />

        {/* Features General with IconBlocks */}
        <FeaturesGeneral />

        {/* Interactive Feature Tabs */}
        <FeaturesNavs />

        {/* 6 Jars Income Allocation Simulator */}
        <CalculatorSection />

        {/* Customer Testimonials & 2x2 Big Stats Grid */}
        <TestimonialsSection />

        {/* ScrewFast 2-Tier Pricing Plans */}
        <PricingSection />

        {/* 2-Column FAQ Accordion */}
        <FaqSection />

        {/* Pre-footer Call to Action Banner */}
        <HeroSectionAlt />
      </main>

      {/* ScrewFast 5-Column Footer */}
      <FooterSection />
    </div>
  );
}

export default App;
