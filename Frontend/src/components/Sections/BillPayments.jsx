import React from 'react';
import { FaCreditCard, FaBolt, FaWifi } from 'react-icons/fa';

const BillPayments = () => {
  return (
    <div className="w-1/2 p-5">
      <h3 className="text-xl font-bold mb-5">Bill Payments</h3>
      <div className="flex justify-between">
        <div className="text-center">
          <FaCreditCard className="mx-auto text-blue-500 bg-blue-500 text-white rounded-full p-2 text-2xl" />
          <p className="mt-2 text-sm">Credit Card</p>
        </div>
        <div className="text-center">
          <FaBolt className="mx-auto text-blue-500 bg-blue-500 text-white rounded-full p-2 text-2xl" />
          <p className="mt-2 text-sm">Electricity</p>
        </div>
        <div className="text-center">
          <FaWifi className="mx-auto text-blue-500 bg-blue-500 text-white rounded-full p-2 text-2xl" />
          <p className="mt-2 text-sm">Broadband</p>
        </div>
      </div>
      <a href="#view-all" className="block mt-5 text-blue-500">View All Products</a>
    </div>
  );
};

export default BillPayments;