
import React from "react";
import Hero from "@/components/Hero";
import ProfessionInfo from "@/components/ProfessionInfo";
import TipsAndTrends from "@/components/TipsAndTrends";
import SocialNetworks from "@/components/SocialNetworks";
import SustainableDevelopment from "@/components/SustainableDevelopment";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ProfessionInfo />
        <TipsAndTrends />
        <SocialNetworks />
        <SustainableDevelopment />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
