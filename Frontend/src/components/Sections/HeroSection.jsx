"use strict";

import React from "react";
import images from "../../assets/images";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between items-center bg-[#002970] text-[#e8f8fd] min-h-screen py-24 px-6 md:px-20">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Pay, Recharge & Manage Bills with Ease
        </h1>
        <p className="text-lg md:text-xl mb-6 leading-relaxed">
          Your one-stop solution for seamless payments, recharges, and more.
          Fast. Secure. Simple.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/index">
          <Button className="bg-[#e8f8fd] text-[#002970] cursor-pointer font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition">
            Get Started
          </Button>
          </Link>
          <Button className="bg-transparent border-2 cursor-pointer border-[#e8f8fd] text-[#e8f8fd] font-bold py-3 px-6 rounded-full hover:bg-[#e8f8fd] hover:text-[#002970] transition">
            <a href="https://play.google.com/store/apps/details?id=net.one97.paytm&pcampaignid=web_share">Download Now</a>
          </Button>
        </div>
      </div>
      <div className="md:w-2/5">
        <img
          src={images.HeroImage}
          alt="Paytm Clone Hero"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default HeroSection;
