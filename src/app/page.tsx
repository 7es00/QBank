import React from "react";
import Header from "../components/shared/Header";
import HeroSection from "../components/shared/HeroSection";
import QuestionBanksSection from "../components/question-bank/QuestionBanksSection";
import FeaturesSection from "../components/shared/FeaturesSection";
import Footer from "../components/shared/Footer";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <HeroSection />
      <QuestionBanksSection />
      <FeaturesSection />
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}
