import React from "react";
import HeroSection from "./components/HeroSection";
import SecondSection from "./components/SecondSection";
import SmoothScrollWrapper from "./components/SmoothScrollWrapper";

const HomePage = () => {
  return (
    <SmoothScrollWrapper>
      <HeroSection />
      <SecondSection />
    </SmoothScrollWrapper>
  );
};

export default HomePage;
