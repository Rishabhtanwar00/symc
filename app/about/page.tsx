import AboutCTA from "@/components/about/AboutCTA";
import AboutExpertise from "@/components/about/AboutExpertise";
import AboutFounder from "@/components/about/AboutFounder";
import AboutHero from "@/components/about/AboutHero";
import AboutProducts from "@/components/about/AboutProducts";
import AboutStory from "@/components/about/AboutStory";
import AboutValues from "@/components/about/AboutValues";

export const metadata = {
  title: "About Us - SYMC Wellness | Where Spirituality Meets Wellness",
  description:
    "SYMC Wellness is a holistic spiritual brand based in Rishikesh, offering authentic Vedic products, meditation classes, astrology, Vastu guidance and more - with 25+ years of experience.",
};

const AboutPage = () => {
  return (
    <main>
      <AboutHero />
      <AboutStory />
      <AboutFounder />
      <AboutExpertise />
      <AboutValues />
      <AboutProducts />
      <AboutCTA />
      {/*
       */}
    </main>
  );
};

export default AboutPage;
