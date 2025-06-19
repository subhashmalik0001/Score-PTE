"use client"

import { useState } from "react"
import { Dialog } from '@headlessui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle, Lock } from 'lucide-react'

const PTEAcademic = () => {
  const [activeTab, setActiveTab] = useState("pte-academic")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [inputCode, setInputCode] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)
  const [accessCode, setAccessCode] = useState("")
  const [validationStatus, setValidationStatus] = useState("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [isValidating, setIsValidating] = useState(false)

  const speakingItems = [
    { name: "Read Aloud", hasAI: true, disabled: false },
    { name: "Repeat Sentence", hasAI: true, disabled: false },
    { name: "Describe Image", hasAI: true, disabled: false },
    { name: "Re-tell Lecture", hasAI: true, disabled: false },
    { name: "Answer Short Question", hasAI: false, disabled: false },
    { name: "Respond to a situation", hasAI: false, disabled: true },
  ]

  const writingItems = [
    { name: "Summarize Written Text", hasAI: false, disabled: false },
    { name: "Write Essay", hasAI: true, disabled: false },
    { name: "Summarize Written Text", hasAI: false, disabled: true },
    { name: "Write Email (Core)", hasAI: false, disabled: true },
  ]

  const readingItems = [
    { name: "Reading & Writing: Fill in the blanks", hasAI: false, disabled: false },
    { name: "Multiple Choice (Multiple)", hasAI: false, disabled: false },
    { name: "Re-order Paragraphs", hasAI: false, disabled: false },
    { name: "Reading: Fill in the Blanks", hasAI: false, disabled: false },
    { name: "Multiple Choice (Single)", hasAI: false, disabled: false },
  ]

  const listeningItems = [
    { name: "Summarize Spoken Text", hasAI: false, disabled: false },
    { name: "Multiple Choice (Multiple)", hasAI: false, disabled: false },
    { name: "Fill in the Blanks", hasAI: true, disabled: false },
    { name: "Highlight Correct Summary", hasAI: false, disabled: false },
    { name: "Multiple Choice (Single)", hasAI: false, disabled: false },
    { name: "Select Missing Word", hasAI: false, disabled: false },
    { name: "Highlight Incorrect Words", hasAI: false, disabled: false },
    { name: "Write From Dictation", hasAI: false, disabled: false },
    { name: "Summarize Spoken Text", hasAI: false, disabled: true },
  ]

  const handleItemClick = (item) => {
    if (!item.disabled) {
      setSelectedItem(item)
      setIsModalOpen(true)
      setInputCode("")
      setError("")
      setSuccess(false)
    }
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
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

  const handleSubmit = (e) => {
    e.preventDefault()
    if (accessCode === "1234") {
      setValidationStatus("success")
      setErrorMessage("")
    } else {
      setValidationStatus("error")
      setErrorMessage("Invalid code. Please try again.")
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
    setValidationStatus("idle")
    setErrorMessage("")
  }

  const ItemList = ({ items, title }) => (
    <div className="flex-1 min-w-0">
      <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b-2 border-gray-300">{title}</h3>
      <div className="space-y-3">
        {items.map((item, index) => (
          <div
            key={index}
            onClick={() => handleItemClick(item)}
            className={`p-3 rounded-lg border transition-colors cursor-pointer select-none ${
              item.disabled
                ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
                : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50 hover:border-gray-300"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">{item.name}</span>
              {item.hasAI && !item.disabled && (
                <span className="text-xs bg-gold text-white px-2 py-1 rounded-full font-semibold border border-black" style={{color:'#111', borderColor:'#111', background:'#FFD700'}}>AI Score</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-sm">
        {/* Tab Navigation */}
        <div className="flex border-b">
          <button
            onClick={() => setActiveTab("pte-academic")}
            className={`px-6 py-3 font-medium text-sm transition-colors ${
              activeTab === "pte-academic"
                ? "bg-red-800 text-white border-b-2 border-teal-400"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
          >
            PTE Academic / UKVI
          </button>
          <button
            onClick={() => setActiveTab("pte-core")}
            className={`px-6 py-3 font-medium text-sm transition-colors ${
              activeTab === "pte-core"
                ? "bg-red-800 text-white border-b-2 border-teal-400"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
          >
            PTE Core
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6">
          {activeTab === "pte-academic" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <ItemList items={speakingItems} title="Speaking" />
              <ItemList items={writingItems} title="Writing" />
              <ItemList items={readingItems} title="Reading" />
              <ItemList items={listeningItems} title="Listening" />
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-gray-600 mb-4">PTE Core</h3>
              <p className="text-gray-500">PTE Core content will be available soon.</p>
            </div>
          )}
        </div>
      </div>

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
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      🔒 This content is locked.
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
                      placeholder="Enter access code"
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
                      Don't have a code?{' '}
                      <button
                        className="text-blue-600 hover:text-blue-800 font-medium underline transition-colors"
                        onClick={() => {
                          alert('Redirecting to Telegram group...')
                        }}
                      >
                        Join our Telegram Group
                      </button>{' '}
                      to request one.
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PTEAcademic 