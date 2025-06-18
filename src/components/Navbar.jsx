"use client"
import logo from "../assets/image.png";

import { useState } from "react"
import { Menu, X } from "lucide-react"

const Navbar = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigationItems = [
    "ABOUT Score PTE",
    "PTE Practice",
    "Hand Outs",
    "Support Team",
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Navigation click handler
  const handleNavClick = (item) => {
    if (item === "PTE Practice" && onNavigate) {
      onNavigate("pte-practice")
    } else if (item === "ABOUT Score PTE" && onNavigate) {
      onNavigate("home")
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="w-full bg-white shadow-sm">
      {/* Top section with logo and university info */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-4">
          {/* University Logo */}
          <div className="flex-shrink-0">
          <img src={logo} alt="ScorePTE Logo" className="w-16 h-16 md:w-20 md:h-20" />
   
          </div>

          {/* University Name and Info */}
          <div className="flex-1">
            <h1 className="text-2xl md:text-4xl font-bold text-red-800 tracking-wide">Score PTE</h1>
            <p className="text-xs md:text-sm text-gray-600 mt-1">
              Established by Experts
              <br />- Score must grow
            </p>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-red-800 hover:bg-red-50 rounded-md"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="bg-red-800">
        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <div className="container mx-auto">
            <ul className="flex">
              {navigationItems.map((item, index) => (
                <li key={item} className="flex-1">
                  <a
                    href="#"
                    className={`block px-4 py-3 text-center text-sm font-medium transition-colors duration-200 ${
                      item === "Support Team" ? "bg-black text-white" : "text-white hover:bg-red-700"
                    }`}
                    onClick={e => {
                      e.preventDefault();
                      handleNavClick(item);
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
          <ul className="container mx-auto">
            {navigationItems.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className={`block px-4 py-3 text-sm font-medium border-b border-red-700 transition-colors duration-200 ${
                    item === "ADMISSIONS" ? "bg-black text-white" : "text-white hover:bg-red-700"
                  }`}
                  onClick={e => {
                    e.preventDefault();
                    handleNavClick(item);
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
