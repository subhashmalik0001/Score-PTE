"use client"
import logo from "../assets/image.png";

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Dialog } from '@headlessui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTelegramPlane, FaInstagram, FaFacebook, FaPhone } from 'react-icons/fa'
import { CheckCircle, Lock } from 'lucide-react'

const Navbar = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [supportModalOpen, setSupportModalOpen] = useState(false)
  const [handoutsModalOpen, setHandoutsModalOpen] = useState(false)
  const [selectedHandout, setSelectedHandout] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [validationStatus, setValidationStatus] = useState('')
  const [selectedItem, setSelectedItem] = useState(null)
  const [accessCode, setAccessCode] = useState("")
  const [isValidating, setIsValidating] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const handoutResources = [
    "Templates",
    "Prediction Files",
    "Surety Files",

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
    setHandoutsModalOpen(false)
    setSelectedHandout(resource)
    setIsModalOpen(true)
    setAccessCode("")
    setValidationStatus("")
    setSelectedItem({ name: resource })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsValidating(true)
    setErrorMessage("")

    try {
      // Simulate a validation process
      const isValid = accessCode === "1234"
      if (isValid) {
        setValidationStatus('success')
        setSelectedItem({ name: selectedHandout })
      } else {
        setValidationStatus('error')
        setErrorMessage("Invalid code. Please try again.")
      }
    } catch (error) {
      setValidationStatus('error')
      setErrorMessage("An error occurred. Please try again later.")
    } finally {
      setIsValidating(false)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e)
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setAccessCode("")
    setValidationStatus('')
    setSelectedItem(null)
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
            <p className="text-base md:text-lg mt-1 text-[#676767]">
  Established by Experts 
  <br />-Score Must Grow
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
                    item === "Support Team" ? "bg-red text-white" : "text-white hover:bg-red-700"
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

      {/* Modal Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 backdrop-blur-sm transition-opacity duration-300"
            onClick={closeModal}
          />

          {/* Modal */}
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 transform transition-all duration-300 scale-100 animate-in zoom-in-95">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Modal Content */}
            <div className="text-center">
              {validationStatus === 'success' ? (
                <div className="mb-4 animate-in fade-in-50 duration-500">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4 animate-pulse" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Access Granted! 🎉
                  </h3>
                  <p className="text-sm text-gray-600">
                    You can now access <strong>{selectedItem?.name}</strong>
                  </p>
                </div>
              ) : (
                <>
                  {/* Lock Icon */}
                  <div className="mb-4">
                    <Lock className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">
  <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
    Premium
  </span>{' '}
  <span className="text-black">starts here.</span>
</h3>
                    <p className="text-sm text-gray-600 mb-6">
                      Enter your access code to unlock <strong>{selectedItem?.name}</strong>.
                    </p>
                  </div>

                  {/* Input Section */}
                  <div className="space-y-4">
                    <input
                      type="text"
                      value={accessCode}
                      onChange={(e) => setAccessCode(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="Enter code"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-center font-mono"
                      disabled={isValidating}
                      autoFocus
                    />
                    {validationStatus === 'error' && (
                      <div className="text-red-500 text-sm mt-2 animate-pulse bg-red-50 p-2 rounded border border-red-200">
                        {errorMessage}
                      </div>
                    )}

                    <button
                      onClick={handleSubmit}
                      disabled={isValidating}
                      className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-medium transform hover:scale-105"
                    >
                      {isValidating ? (
                        <div className="flex items-center justify-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Validating...
                        </div>
                      ) : (
                        'Submit'
                      )}
                    </button>
                  </div>

                  {/* Telegram Link */}
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600">
                      Don't have a code? Contact Support{' '}
                      <button
                        className="text-blue-600 hover:text-blue-800 font-medium underline transition-colors"
                        onClick={() => {
                          alert('Redirecting to Telegram group...')
                        }}
                      >
                        Telegram Link
                      </button>{' '}
                     
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
