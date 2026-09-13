import React from "react";
import { AnnouncementBanner } from "./components/AnnouncementBanner";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { ClientsSection } from "./components/ClientsSection";
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
    <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-blue-600 selection:text-white font-sans antialiased relative">
      {/* Floating Top Navigation directly overlaid on top of 3D Scene */}
      <div className="fixed top-0 inset-x-0 z-50 pointer-events-none">
        <div className="pointer-events-auto">
          <AnnouncementBanner />
        </div>
        <div className="pointer-events-auto">
          <Navbar />
        </div>
      </div>

      <main className="overflow-hidden">
        {/* ScrewFast Hero with 3D Model Scene spanning 100% full screen height starting from pixel 0 */}
        <HeroSection />

        {/* Clients & Banking Ecosystem Partners */}
        <ClientsSection />

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
