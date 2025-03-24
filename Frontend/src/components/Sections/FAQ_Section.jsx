import React from 'react';

const FAQ = () => {
  return (
    <section className="py-20 bg-[#e8f8fd]">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-blue-900 mb-2">
              How do I create a Payments App account?
            </h3>
            <p className="text-gray-600">
              Download the Payments App and follow the on-screen instructions to sign up.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-blue-900 mb-2">
              Is Payments App safe to use?
            </h3>
            <p className="text-gray-600">
              Yes, Payments App uses advanced encryption and security measures to protect your data.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-blue-900 mb-2">
              Can I use Payments App without a bank account?
            </h3>
            <p className="text-gray-600">
              Yes, you can use Payments App Wallet without linking a bank account.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;