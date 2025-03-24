"use strict";

import React from "react";
import Testimonials from "../Sections/Testimonials";
import Download from "../Sections/DownloadSection";
import FAQ from "../Sections/FAQ_Section";
import Features from "../Sections/Features";
import HeroSection from "../Sections/HeroSection";
import MoreFeatures from "../Sections/moreFeatures";

const Home = () => {
  return (
    <>
      <HeroSection />
      <MoreFeatures />
      <Features />
      <Download />
      <Testimonials />
      <FAQ />
    </>
  );
};

export default Home;
