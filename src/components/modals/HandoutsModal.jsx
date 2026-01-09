import { Dialog } from '@headlessui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Info } from 'lucide-react'
import { useState } from 'react'
import image17 from '../../assets/image 17.png'

const HandoutsModal = ({ isOpen, onClose, onHandoutClick }) => {
  const [infoOpen, setInfoOpen] = useState(false)
  
  const handoutResources = [
    "Templates",
    "Prediction Files",
    "Surety Files",
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog as="div" className="fixed inset-0 z-50 flex items-center justify-center" open={isOpen} onClose={onClose}>
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
              onClick={onClose}
              aria-label="Close"
            >
              <X size={24} />
            </button>
            <div className="text-xl font-bold mb-4 text-center flex items-center justify-center gap-2">
              <img src={image17} alt="Handouts Icon" className="h-8 w-8 object-contain inline-block" />
              Hand Outs
              <span
                className="relative group ml-1 select-none"
                onClick={() => setInfoOpen((open) => !open)}
                onMouseLeave={() => setInfoOpen(false)}
                tabIndex={0}
                onBlur={() => setInfoOpen(false)}
                role="button"
                aria-label="Show handouts info"
              >
                <Info className="w-5 h-5 text-blue-500 cursor-pointer" />
                <span className={`absolute left-1/2 -translate-x-1/2 mt-2 w-48 bg-white text-gray-700 text-xs rounded shadow-lg px-3 py-2 z-20 transition-opacity pointer-events-none group-hover:opacity-100 ${infoOpen ? 'opacity-100' : 'opacity-0'}`}>
                  Center-Specific Templates, Prediction Files and Surety Files crafted by experts.
                </span>
              </span>
            </div>
            <div className="w-full space-y-3">
              {handoutResources.map((resource) => (
                <button
                  key={resource}
                  onClick={() => onHandoutClick(resource)}
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
  )
}

export default HandoutsModal