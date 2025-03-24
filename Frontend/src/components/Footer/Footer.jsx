import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#002970] text-white py-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2025 Payments App. All rights reserved.</p>
        <ul className="flex justify-center space-x-6 mt-4">
          <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
          <li><a href="#" className="hover:text-gray-300">Terms of Service</a></li>
          <li><a href="#" className="hover:text-gray-300">Contact Us</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;