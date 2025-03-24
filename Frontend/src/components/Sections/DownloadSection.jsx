import React from "react";

const Download = () => {
  return (
    <section className="py-20 bg-[#002970] text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Download Payments App Now
        </h2>
        <p className="text-lg mb-8">
          Join millions of users and experience seamless payments.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="https://play.google.com/store/apps/details?id=net.one97.paytm&pcampaignid=web_share"
            className="bg-[#e8f8fd] text-[#002970] cursor-pointer font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition"
          >
            Google Play
          </a>
          <a
            href="https://apps.apple.com/in/app/paytm-secure-upi-payments/id473941634"
            className="bg-[#e8f8fd] text-[#002970] cursor-pointer font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition"
          >
            App Store
          </a>
        </div>
      </div>
    </section>
  );
};

export default Download;
