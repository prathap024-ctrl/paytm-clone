import React from 'react';
import { FaExchangeAlt, FaPlane, FaBus, FaTrain } from 'react-icons/fa';
import { Button } from '../ui/Button';

const FlightSearch = () => {
  return (
    <div className="p-5">
      <div className="flex items-center mb-5">
        <div className="flex space-x-5">
          <div className="flex items-center text-blue-500 hover:text-blue-700 cursor-pointer">
            <FaPlane className="mr-1" /> <span className="text-lg">Flights</span>
          </div>
          <div className="flex items-center text-blue-500 hover:text-blue-700 cursor-pointer">
            <FaBus className="mr-1" /> <span className="text-lg">Bus</span>
          </div>
          <div className="flex items-center text-blue-500 hover:text-blue-700 cursor-pointer">
            <FaTrain className="mr-1" /> <span className="text-lg">Trains</span>
          </div>
          <div className="text-blue-500 hover:text-blue-700 cursor-pointer text-lg">Intl. Flights</div>
        </div>
        <div className="ml-auto text-xl font-bold text-blue-500">Paytm Travel</div>
      </div>
      <div className="bg-gray-100 p-5 rounded-lg">
        <div className="flex space-x-10 mb-5">
          <label className="flex items-center">
            <input type="radio" name="trip-type" defaultChecked className="mr-2" /> <span className="text-lg">One Way</span>
          </label>
          <label className="flex items-center">
            <input type="radio" name="trip-type" className="mr-2" /> <span className="text-lg">Round Trip</span>
          </label>
        </div>
        <div className="flex justify-between items-center mb-5">
          <div className="bg-white p-3 rounded shadow-md">
            <span className="font-bold text-lg">DELHI (DEL)</span>
          </div>
          <FaExchangeAlt className="text-blue-500" />
          <div className="bg-white p-3 rounded shadow-md">
            <span className="font-bold text-lg">MUMBAI (BOM)</span>
          </div>
          <div className="bg-white p-3 rounded shadow-md">
            <span className="font-bold text-lg">Fri, 21 Mar 25</span>
          </div>
          <div className="bg-white p-3 rounded shadow-md">
            <span className="text-blue-500 cursor-pointer">Add Return</span>
          </div>
          <div className="bg-white p-3 rounded shadow-md">
            <select className="border-none text-lg">
              <option>1 Traveller, Economy</option>
            </select>
          </div>
          <Button className="bg-blue-500 text-white px-5 py-2 rounded">Search Flights</Button>
        </div>
        <div className="flex justify-between text-sm text-blue-500">
          <span>Special Fares (Optional)</span>
          <span>Armed Forces Up to ₹6000 OFF</span>
          <span>Student Extra Baggage</span>
          <span>Senior Citizen Up to ₹6000 OFF</span>
        </div>
      </div>
    </div>
  );
};

export default FlightSearch;