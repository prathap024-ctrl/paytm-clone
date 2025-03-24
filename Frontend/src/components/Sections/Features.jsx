import React from "react";

const Features = () => {
  return (
    <div>
      <section className="py-20 bg-[#e8f8fd]">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#002970] mb-12">
            Why Choose Payments App?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-[#f9ffff] rounded-lg shadow-md">
              <i className="fas fa-mobile-alt text-4xl text-[#002970] mb-4"></i>
              <h3 className="text-xl font-bold text-[#002970] mb-2">
                Recharge & Pay Bills
              </h3>
              <p className="text-gray-600">
                Fast and secure mobile recharges and bill payments.
              </p>
            </div>
            <div className="p-6 bg-[#f9ffff] rounded-lg shadow-md">
              <i className="fas fa-wallet text-4xl text-[#002970] mb-4"></i>
              <h3 className="text-xl font-bold text-[#002970] mb-2">Wallet</h3>
              <p className="text-gray-600">
                Store money securely and make instant payments.
              </p>
            </div>
            <div className="p-6 bg-[#f9ffff] rounded-lg shadow-md">
              <i className="fas fa-rupee-sign text-4xl text-[#002970] mb-4"></i>
              <h3 className="text-xl font-bold text-[#002970] mb-2">
                Send Money
              </h3>
              <p className="text-gray-600">
                Transfer money to friends and family instantly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
