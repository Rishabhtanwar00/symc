import ServicesHero from "@/components/services/ServicesHero";
import ServicesList from "@/components/services/ServicesList";
import React from "react";

export const metadata = {
  title: "Our Services - SYMC Wellness",
  description:
    "Explore our holistic services: Personal Wellness Consultation, Astrology, Relationship Guidance, Career Coaching, Vastu, Spiritual Healing, Chakra Healing and Lal Kitab Remedies.",
};

const ServicesPage = () => {
  return (
    <main>
      <ServicesHero />
      <ServicesList />
      {/* <ServicesContact /> */}
    </main>
  );
};

export default ServicesPage;
