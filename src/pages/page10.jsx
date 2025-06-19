import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTelegram } from "react-icons/fa";

const Page10 = ({ onTermsClick }) => {
  return (
    <div className="w-full bg-[#111] text-gray-400 flex flex-col items-center justify-center pt-20 pb-10 px-6 space-y-10">

      {/* Large Heading */}
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-light text-gray-600">Invest</h1>
        <h2 className="text-4xl md:text-5xl font-light text-gray-500 mt-2">In Scores</h2>
      </div>

      {/* Where to Next Navigation */}
      <div className="text-center">
        <p className="uppercase tracking-widest text-xs text-gray-500 mb-4">Where to next?</p>
        <div className="flex flex-wrap justify-center gap-6 text-lg">
          <a href="#" className="hover:text-white">Home</a>
          <a href="#" className="hover:text-white">About</a>
          
          
       
          <a href="#" className="hover:text-white">Support</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm space-y-2">
        <div className="flex justify-center gap-3 flex-wrap text-xs text-gray-500">
          <span>© 2025 Score PTE</span>
          <span className="mx-1">•</span>
          <span>Newsletter</span>
          <span className="mx-1">•</span>
          <span 
            onClick={onTermsClick} 
            className="cursor-pointer hover:text-white transition-colors duration-300"
          >
            Terms
          </span>
          <span className="mx-1">•</span>
          <span>Score</span>
          <span className="mx-1">•</span>
          <span>
          @scorepte_explains telegram handle</span>
        </div>
        <p className="text-xs text-gray-500">
          copyright  India. All rights reserved
        </p>
      </div>

      {/* Social Icons */}
      <div className="flex space-x-6 pt-4 text-gray-500 text-lg">
        <a href="#"><FaFacebookF className="hover:text-white" /></a>
        <a href="#"><FaInstagram className="hover:text-white" /></a>
        <a href="https://web.telegram.org/"><FaTelegram className="hover:text-white" /></a>
      </div>
    </div>
  );
};

export default Page10;
