import React from 'react';

const PromotionalBanners = () => {
  return (
    <div className="flex justify-between mt-5">
      <div className="w-1/2 bg-gray-800 text-white p-5 rounded-lg text-center">
        <h3 className="text-xl">Smart Travel Starts Here</h3>
        <p className="my-2">One subscription, many benefits!</p>
        <h4 className="text-lg">TRAVEL PASS</h4>
        <button className="mt-2 px-4 py-2 bg-white text-blue-500 rounded">Check Paytm Travel Pass</button>
      </div>
      <div className="w-1/2 bg-blue-100 text-black p-5 rounded-lg text-center">
        <h3 className="text-xl">15% OFF ON FLIGHT TICKETS</h3>
        <p className="my-2">PROMO: FLYDAY</p>
        <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Book Now</button>
      </div>
    </div>
  );
};

export default PromotionalBanners;