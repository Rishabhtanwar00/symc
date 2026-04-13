"use client";

import StarCanvas from "@/components/common/StarCanvas";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import Products from "@/components/home/Products";
import Testimonials from "@/components/home/Testimonials";
import CTABanner from "@/components/home/CTABanner";
import WelcomePopup from "@/components/home/Welcomepopup";
import AboutMaster from "@/components/home/AboutMaster";
import AboutSYMC from "@/components/home/AboutSYMC";

export default function HomePage() {
  return (
    <main>
      {/* Animated star field - fixed behind everything */}
      <StarCanvas />
      <WelcomePopup />

      <div>
        <Hero />
        <AboutMaster />
        <AboutSYMC />
        <Services />
        <Products />
        <Testimonials />
        <CTABanner />
      </div>
    </main>
  );
}
