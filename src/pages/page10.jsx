import React from "react"
import { Facebook, Instagram, MessageCircle } from "lucide-react"
import logo from "../assets/image.png";

const Footer = ({ onTermsClick }) => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
          <img
  src={logo}
  alt="ScorePTE Logo"
  className="rounded-full"
  style={{ width: "130px", height: "120px" }}
/>
✅ 
            <p className="text-blue-100">
              Your trusted partner for PTE Academic preparation and success.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-blue-100 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-blue-100 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-blue-100 hover:text-white transition-colors"
                aria-label="Message"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Courses Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Courses</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">
                  PTE Academic
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">
                  PTE Core
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">
                  PTE VKVI
                </a>
              </li>
            </ul>
          </div>

          {/* Templates Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Templates</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">
                  Speaking Templates
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">
                  Writing Templates
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">
                  Reading Templates
                </a>
              </li>
            </ul>
          </div>

          {/* Important Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Important Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <button
                  onClick={onTermsClick}
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  Terms & Conditions
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-blue-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-100 text-sm">
              © 2024 ScorePTE. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-blue-100 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <button
                onClick={onTermsClick}
                className="text-blue-100 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
