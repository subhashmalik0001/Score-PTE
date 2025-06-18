import React, { useState } from "react";
import logo from "../assets/image.png";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <img src={logo} alt="ScorePTE Logo" className="h-15 w-20" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </a>
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="text-gray-700 hover:text-blue-600 transition-colors flex items-center"
              >
                About
                <svg
                  className={`ml-2 w-4 h-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    PTE Academic
                  </a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    PTE Core
                  </a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    PTE VIKI
                  </a>
                </div>
              )}
            </div>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
              Services
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100">
              Home
            </a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100">
              About
            </a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100">
              Services
            </a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
