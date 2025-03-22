import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import AppFeatureSection from "@/components/AppFeatureSection";

//add SEO information into below; 
export const metadata = {
  title: "Top Cleaning Service in Melbourne | For Test",
  description: "This is Test Description",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      <HowItWorksSection />
      <AppFeatureSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
