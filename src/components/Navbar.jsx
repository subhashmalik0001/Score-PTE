"use client"
import logo from "../assets/image.png";


import { useState } from "react"
import { Search, Star, ShoppingCart, X } from "lucide-react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      {/* Main Navbar */}
      <nav className="fixed top-0 left-0 w-full h-[110px] flex items-center justify-between bg-transparent px-10 z-50">
        {/* Left: Logo */}
        <div className="flex flex-col justify-center">
    {/* Logo and SCORE */}
    <div className="flex items-center">
      <img src={logo} alt="ScorePTE Logo" className="h-16 w-20 mt-[10px]" />
      <span className="ml-2 font-black text-5xl text-blue-500 tracking-wider leading-none">
        SCORE
      </span>
    </div>

    {/* PTE */}
    <span
      className="text-xl text-black ml-[90px] -mt-1"
      style={{ fontFamily: "Dancing Script, cursive" }}
    >
      PTE
    </span>
  </div>

        {/* Center: Arch MENU button */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-[100px] w-[100px] flex items-center justify-center z-20">
          <button
            onClick={toggleMenu}
            className="bg-[#181511] w-[100px] h-[100px] rounded-t-[50px] rounded-b-2xl flex flex-col items-center justify-center text-white font-serif text-xl tracking-[4px] shadow-lg hover:bg-[#252017] transition-all duration-300 hover:scale-105"
          >
            <span className="leading-tight">ME</span>
            <span className="leading-tight">NU</span>
          </button>
        </div>

        {/* Right: Icons and text */}
        {/* Right: Login and Signup buttons */}
        <div className="flex items-center gap-4">
          <button className="px-6 py-2 text-black font-medium hover:bg-[#181511] hover:text-white rounded-full transition-all duration-300">
            Login
          </button>
          <button className="px-6 py-2  text-black font-medium rounded-full hover:bg-[#252017] hover:text-white transition-colors duration-300">
            Sign Up
          </button>
        </div>
      </nav>

      {/* Menu Overlay */}
      <div
        className={`fixed inset-0 transition-all duration-500 z-[100] flex items-center justify-center ${
          isMenuOpen ? "visible" : "invisible"
        }`}
      >
        <div
          className={`relative bg-gray-800 bg-opacity-90 w-[90vw] max-w-lg h-[100vh] p-8 flex flex-col transition-all duration-500 transform ${
            isMenuOpen ? "scale-100 opacity-100 translate-y-0" : "scale-75 opacity-0 translate-y-8"
          }`}
          style={{
            borderRadius: "150px 150px 24px 24px",
            clipPath: isMenuOpen ? "none" : "inset(0 0 100% 0)",
          }}
        >
          {/* Close button */}
         

          {/* BACK text */}
          <div className="text-center mt-4 mb-8">
            <span className="text-white text-lg font-medium tracking-[4px]">
            <button
            onClick={toggleMenu}
            
            
          >
            BA
              <br />
              CK
            
          </button>

              
            </span>
          </div>

          {/* Search bar */}
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-transparent border-b border-gray-400 pb-2 pl-12 text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors duration-300"
            />
          </div>

          {/* Menu items */}
          <div className="flex-1 flex flex-col justify-center space-y-6 text-center">
            {[
              { text: "Home", active: true },
              { text: "About", active: false },
              { text: "PTE Academic ", active: false },
              { text: "PTE Core", active: false, special: true },
              { text: "PTE UVKI", active: false },
              { text: "Bestsellers", active: false },
              { text: "Contact", active: false },
              { text: "Support", active: false },
            ].map((item, index) => (
              <a
                key={item.text}
                href="#"
                className={`transition-all duration-300 hover:scale-105 ${
                  item.active
                    ? "text-gray-400 text-2xl"
                    : item.special
                      ? "text-white text-2xl font-bold whitespace-pre-line"
                      : "text-white text-3xl font-medium hover:text-gray-300"
                }`}
                style={{
                  transitionDelay: isMenuOpen ? `${index * 50}ms` : "0ms",
                }}
              >
                {item.text}
              </a>
            ))}
          </div>

          {/* Bottom section */}
          <div className="mt-8 space-y-4 text-center">
            
            <div className="text-gray-400 text-sm">
            @scorepte_explains telegram handle</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
