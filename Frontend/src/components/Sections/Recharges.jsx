import React from 'react';
import { FaMobileAlt, FaSatelliteDish, FaCar } from 'react-icons/fa';

const Recharges = () => {
  return (
    <div className="w-1/2 p-5">
      <h3 className="text-xl font-bold mb-5">Recharges</h3>
      <div className="flex justify-between">
        <div className="text-center">
          <FaMobileAlt className="mx-auto text-blue-500 bg-blue-500 text-white rounded-full p-2 text-2xl" />
          <p className="mt-2 text-sm">Mobile Recharge</p>
        </div>
        <div className="text-center">
          <FaSatelliteDish className="mx-auto text-blue-500 bg-blue-500 text-white rounded-full p-2 text-2xl" />
          <p className="mt-2 text-sm">DTH Recharge</p>
        </div>
        <div className="text-center">
          <FaCar className="mx-auto text-blue-500 bg-blue-500 text-white rounded-full p-2 text-2xl" />
          <p className="mt-2 text-sm">Fastag Recharge</p>
        </div>
      </div>
      <a href="#view-all" className="block mt-5 text-blue-500">View All Products</a>
    </div>
  );
};

export default Recharges;