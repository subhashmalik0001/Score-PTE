import React, { useState } from "react";
import { openRazorpayCheckout } from '../lib/razorpay';
import logo from '../assets/logo.PNG'
import { Link } from "react-router-dom";

const navItems = [
  { label: "Home", key: "home" },
  { label: "PTE Practice", key: "practice" },
  { label: "Courses", key: "course" },
  { label: "Hand Outs", key: "hand-outs" },
];

const Navbar = ({ onNavigate, active, onActionClick }) => {
  const [open, setOpen] = useState(false);

  const handleNavigate = (key) => {
    onNavigate && onNavigate(key);
    setOpen(false); // close menu after click
  };

  const handleEnrollNow = async () => {
    try {
      await openRazorpayCheckout({
        amountPaise: 79900,
        currency: "AUD",
        name: "Score PTE",
        description: "Premium Package Enrollment",
        notes: { plan: "Premium Package" },
        themeColor: "#0D2440",
        onSuccess: () => {
          alert("Payment successful! Our team will contact you shortly.");
        },
        onError: () => {
          window.open("https://t.me/Scorepte_explains", "_blank");
        },
      });
    } catch (err) {
      window.open("https://t.me/Scorepte_explains", "_blank");
    }
  };

  return (
    <nav className="bg-[rgba(182,181,241,0.96)] border-b border-white/10 sticky top-0 z-50 backdrop-blur-md">
      <div className="min-w-full px-[5%] xs:px-[2%]">
        {/* TOP BAR */}
        <div className="flex  items-center justify-between h-16">
          
          {/* LOGO */}
          <Link to="/" onClick={() => handleNavigate("home")}>
          <img src={logo} alt="ScorePTE Logo" className="w-16 h-16" />
          </Link>

          {/* DESKTOP MENU */}
          <ul className="xs:hidden flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = active === item.key;

              return (
                <li key={item.key} className="relative  group">
                  <button
                    onClick={() => handleNavigate(item.key)}
                    className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                      isActive
                        ? "text-white"
                        : "text-blue/80 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </button>

                  <span
                    className={`absolute left-0 -bottom-1  w-full bg-blue-400 transform origin-left transition-transform duration-300 ${
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </li>
              );
            })}
          </ul>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-4">
            <button
              onClick={handleEnrollNow}
              className="xs:hidden block rounded-xl bg-gradient-to-r from-yellow-500 to-purple-500 px-6 py-2 text-sm font-medium text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Enroll Now
            </button>

            {/* HAMBURGER */}
            <button
              onClick={() => setOpen(!open)}
              className="hidden xs:flex text-gray-600 text-2xl hover:text-gray-800 transition-colors"
            >
              ☰
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="hidden xs:flex xs:flex-col border-t border-gray-200 py-4 space-y-2 bg-white">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavigate(item.key)}
                className={`block w-full text-left px-4 py-2 rounded-md text-sm font-medium transition ${
                  active === item.key
                    ? "bg-blue-500/20 text-blue-600 border border-blue-500/30"
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                {item.label}
              </button>
            ))}

            <button
              onClick={handleEnrollNow}
              className="w-full mt-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 text-sm font-medium text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
            >
              Enroll Now
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

