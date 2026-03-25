import StarCanvas from "@/components/common/StarCanvas";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Products from "@/components/sections/Products";
import Testimonials from "@/components/sections/Testimonials";
import CTABanner from "@/components/sections/CTABanner";
import WelcomePopup from "@/components/sections/Welcomepopup";

export default function HomePage() {
  return (
    <main>
      {/* Animated star field — fixed behind everything */}
      <StarCanvas />
      <WelcomePopup />

      {/* Extra padding-top to clear fixed Header (TopBar ~36px + Navbar ~68px) */}
      <div className="pt-[65px] md:pt-[100px]">
        <Hero />
        <About />
        <Services />
        <Products />
        <Testimonials />
        <CTABanner />
      </div>
    </main>
  );
}
