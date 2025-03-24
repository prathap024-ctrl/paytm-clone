import React from 'react';

const Testimonials = () => {
  return (
    <section className="py-20 bg-[#e8f8fd]">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-12">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md flex flex-col justify-between">
            <p className="text-gray-600 mb-4">
              "Payments App has made my life so much easier! I can now pay bills and recharge my phone in seconds."
            </p>
            <p className="text-blue-900 font-bold">- Ravi Kumar</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md flex flex-col justify-between">
            <p className="text-gray-600 mb-4">
              "The best payment app out there. Fast, secure, and reliable."
            </p>
            <p className="text-blue-900 font-bold">- Priya Sharma</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md flex flex-col justify-between">
            <p className="text-gray-600 mb-4">
              "I love the convenience of sending money to my family instantly."
            </p>
            <p className="text-blue-900 font-bold">- Anil Patel</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;