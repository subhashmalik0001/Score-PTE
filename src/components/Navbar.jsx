"use client"
import logo from "../assets/image.png";

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Dialog } from '@headlessui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTelegramPlane, FaInstagram, FaFacebook, FaPhone } from 'react-icons/fa'

const Navbar = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [supportModalOpen, setSupportModalOpen] = useState(false)
  const [handoutsModalOpen, setHandoutsModalOpen] = useState(false)
  const [accessModalOpen, setAccessModalOpen] = useState(false)
  const [selectedHandout, setSelectedHandout] = useState(null)
  const [inputCode, setInputCode] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  const handoutResources = [
    "Template",
    "Prediction Files",
    "Surety Files",
    "One-on-One Classes"
  ]

  const navigationItems = [
    "Home",
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
    } else if (item === "Home" && onNavigate) {
      onNavigate("home")
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else if (item === "Support Team") {
      setSupportModalOpen(true)
    } else if (item === "Hand Outs") {
      setHandoutsModalOpen(true)
    }
    setIsMenuOpen(false)
  }

  // Handouts modal logic
  const handleHandoutClick = (resource) => {
    setSelectedHandout(resource)
    setAccessModalOpen(true)
    setInputCode("")
    setError("")
    setSuccess(false)
  }
  const handleAccessModalClose = () => {
    setAccessModalOpen(false)
    setSelectedHandout(null)
    setInputCode("")
    setError("")
    setSuccess(false)
  }
  const handleCodeSubmit = (e) => {
    e.preventDefault()
    if (inputCode === "1234") {
      setSuccess(true)
      setError("")
    } else {
      setError("Invalid code. Please try again.")
      setSuccess(false)
    }
  }

  return (
    <header className="w-full bg-white shadow-sm">
      {/* Top section with logo and university info */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-4">
          {/* University Logo */}
          <div className="flex-shrink-0">
            <img src={logo} alt="ScorePTE Logo" className="w-24 h-24 md:w-32 md:h-32" />
          </div>

          {/* University Name and Info */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-extrabold text-red-800 tracking-wide">Score PTE</h1>
            <p className="text-xs md:text-sm mt-1 text-gold-glow">
              Established by Experts
              <br />- Score must grow
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="bg-red-800">
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
      </nav>

      {/* Handouts Modal */}
      <AnimatePresence>
        {handoutsModalOpen && (
          <Dialog as="div" className="fixed inset-0 z-50 flex items-center justify-center" open={handoutsModalOpen} onClose={() => setHandoutsModalOpen(false)}>
            <motion.div
              key="handout-modal-bg"
              className="fixed inset-0 bg-black/300 backdrop-blur"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              key="handout-modal-content"
              initial={{ scale: 0.95, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 40 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative z-10 bg-white rounded-xl shadow-2xl max-w-md w-full mx-4 p-6 flex flex-col items-center"
            >
              <button
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-700"
                onClick={() => setHandoutsModalOpen(false)}
                aria-label="Close"
              >
                <X size={24} />
              </button>
              <div className="text-xl font-bold mb-4 text-center">📄 Hand Outs</div>
              <div className="w-full space-y-3">
                {handoutResources.map((resource) => (
                  <button
                    key={resource}
                    onClick={() => handleHandoutClick(resource)}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-lg border hover:bg-gray-50 transition-colors font-medium text-gray-800"
                  >
                    <span>{resource}</span>
                    <span className="text-gray-400">&rarr;</span>
                  </button>
                ))}
              </div>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>

      {/* Access Code Modal (second-level) */}
      <AnimatePresence>
        {accessModalOpen && (
          <Dialog as="div" className="fixed inset-0 z-50 flex items-center justify-center" open={accessModalOpen} onClose={handleAccessModalClose}>
            <motion.div
              key="access-modal-bg"
              className="fixed inset-0 bg-black/30 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              key="access-modal-content"
              initial={{ scale: 0.95, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 40 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative z-10 bg-white rounded-xl shadow-2xl max-w-md w-full mx-4 p-6 flex flex-col items-center"
            >
              <button
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-700"
                onClick={handleAccessModalClose}
                aria-label="Close"
              >
                <X size={24} />
              </button>
              <div className="text-4xl mb-2">🔒</div>
              <div className="text-lg font-semibold mb-2 text-gray-800">This content is locked.</div>
              <div className="text-sm text-gray-500 mb-4">Enter your access code to unlock this feature.</div>
              {!success ? (
                <form onSubmit={handleCodeSubmit} className="w-full flex flex-col items-center gap-3">
                  <input
                    type="text"
                    value={inputCode}
                    onChange={e => setInputCode(e.target.value)}
                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-teal-400 text-center"
                    placeholder="Access code"
                  />
                  <button
                    type="submit"
                    className="w-full bg-white text-gold-glow font-semibold py-2 rounded hover:bg-gray-200 transition-colors"
                  >
                    Submit
                  </button>
                  {error && <div className="text-red-600 text-sm mt-1">{error}</div>}
                </form>
              ) : (
                <div className="text-green-600 font-semibold my-4">Access granted! 🎉</div>
              )}
              <div className="mt-4 text-xs text-gray-500 text-center">
                Don't have a code?{' '}
                <a href="https://telegram.org/" className="text-blue-600 underline hover:text-blue-800 transition-colors">Join our Telegram Group</a> to request one.
              </div>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>

      {/* Support Modal */}
      <AnimatePresence>
        {supportModalOpen && (
          <Dialog as="div" className="fixed inset-0 z-50 flex items-center justify-center" open={supportModalOpen} onClose={() => setSupportModalOpen(false)}>
            <motion.div
              key="modal-bg"
              className="fixed inset-0 bg-black/200 backdrop-blur-sm"
              initial={{ opacity: 3 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              key="modal-content"
              initial={{ scale: 0.95, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 40 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative z-10 bg-white rounded-xl shadow-2xl max-w-md w-full mx-4 p-6 flex flex-col items-center"
            >
              {/* Close button */}
              <button
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-700"
                onClick={() => setSupportModalOpen(false)}
                aria-label="Close"
              >
                <X size={24} />
              </button>
              {/* Modal Content */}
              <div className="text-2xl mb-2"></div>
              <div className="text-xl font-bold mb-4 text-center">💬 Get in Touch With Our Support Team</div>
              <div className="w-full space-y-4">
                <a href="https://web.telegram.org/k/" className="flex items-center gap-3 p-3 rounded-lg border hover:bg-gray-50 transition-colors">
                  <FaTelegramPlane className="text-blue-500 text-2xl" />
                  <span className="font-medium text-gray-800">Join our community</span>
                </a>
                <a href="#" className="flex items-center gap-3 p-3 rounded-lg border hover:bg-gray-50 transition-colors">
                  <FaInstagram className="text-pink-500 text-2xl" />
                  <span className="font-medium text-gray-800">Follow us on Instagram</span>
                </a>
                <a href="#" className="flex items-center gap-3 p-3 rounded-lg border hover:bg-gray-50 transition-colors">
                  <FaFacebook className="text-blue-700 text-2xl" />
                  <span className="font-medium text-gray-800">Visit our Facebook page</span>
                </a>
                <div className="flex items-center gap-3 p-3 rounded-lg border">
                  <FaPhone className="text-green-600 text-2xl" />
                  <span className="font-medium text-gray-800">+91-987654XXXX</span>
                </div>
              </div>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
