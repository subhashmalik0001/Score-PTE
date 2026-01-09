import { Dialog } from '@headlessui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { FaTelegramPlane, FaInstagram } from 'react-icons/fa'

const SupportModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog as="div" className="fixed inset-0 z-50 flex items-center justify-center" open={isOpen} onClose={onClose}>
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
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-700"
              onClick={onClose}
              aria-label="Close"
            >
              <X size={24} />
            </button>
            <div className="text-xl font-bold mb-4 text-center">💬 Get in Touch With Our Support Team</div>
            <div className="w-full space-y-4">
              <a href="https://t.me/Scorepte_explains" className="flex items-center gap-3 p-3 rounded-lg border hover:bg-gray-50 transition-colors">
                <FaTelegramPlane className="text-blue-500 text-2xl" />
                <span className="font-medium text-gray-800">Join our community</span>
              </a>
              <a href="https://www.instagram.com/scorepte_explains" className="flex items-center gap-3 p-3 rounded-lg border hover:bg-gray-50 transition-colors">
                <FaInstagram className="text-pink-500 text-2xl" />
                <span className="font-medium text-gray-800">Follow us on Instagram</span>
              </a>
            </div>
          </motion.div>
        </Dialog>
      )}
    </AnimatePresence>
  )
}

export default SupportModal