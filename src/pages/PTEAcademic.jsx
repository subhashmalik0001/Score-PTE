"use client"

import { useState } from "react"
import {
  X,
  CheckCircle,
  Lock,
  CheckCircle2,
  Clock,
  Sparkles
} from 'lucide-react'

const PTEAcademic = () => {
  const [activeTab, setActiveTab] = useState("pte-core")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [accessCode, setAccessCode] = useState("")
  const [validationStatus, setValidationStatus] = useState("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [selectedItem, setSelectedItem] = useState(null)

  // PTE Academic items (original)
  const speakingItemsAcademic = [
    { name: "Read Aloud", hasAI: true, disabled: false },
    { name: "Repeat Sentence", hasAI: true, disabled: false },
    { name: "Describe Image", hasAI: true, disabled: false },
    { name: "Re-tell Lecture", hasAI: true, disabled: false },
    { name: "Answer Short Question", hasAI: false, disabled: false },
    { name: "Respond to a situation", hasAI: false, disabled: true },
  ]

  const writingItemsAcademic = [
    { name: "Summarize Written Text", hasAI: false, disabled: false },
    { name: "Write Essay", hasAI: true, disabled: false },
    { name: "Summarize Written Text", hasAI: false, disabled: true },
    { name: "Write Email (Core)", hasAI: false, disabled: true },
  ]

  const readingItemsAcademic = [
    { name: "Reading & Writing: Fill in the blanks", hasAI: false, disabled: false },
    { name: "Multiple Choice (Multiple)", hasAI: false, disabled: false },
    { name: "Re-order Paragraphs", hasAI: false, disabled: false },
    { name: "Reading: Fill in the Blanks", hasAI: false, disabled: false },
    { name: "Multiple Choice (Single)", hasAI: false, disabled: false },
  ]

  const listeningItemsAcademic = [
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

  // PTE Core items (new)
  const speakingItemsCore = [
    { name: "Read Aloud", hasAI: true, disabled: false },
    { name: "Repeat Sentence", hasAI: true, disabled: false },
    { name: "Describe Image", hasAI: true, disabled: false },
    { name: "Answer Short Question", hasAI: true, disabled: false },
    { name: "Respond to a situation", hasAI: true, disabled: false },
    { name: "Re-tell Lecture (PTEA)", hasAI: false, disabled: false },
    { name: "Respond to a situation (PTEA)", hasAI: false, disabled: false },
    { name: "Summarize Group Discussion (PTEA)", hasAI: false, disabled: false },
  ]

  const writingItemsCore = [
    { name: "Summarize Written Text", hasAI: true, disabled: false },
    { name: "Write Email", hasAI: true, disabled: false },
    { name: "Summarize Written Text (PTEA)", hasAI: false, disabled: false },
    { name: "Write Essay (PTEA)", hasAI: false, disabled: false },
  ]

  const readingItemsCore = [
    { name: "Fill in the Blanks (Dropdown)", hasAI: false, disabled: false },
    { name: "Multiple Choice (Multiple)", hasAI: false, disabled: false },
    { name: "Re-order Paragraphs", hasAI: false, disabled: false },
    { name: "Fill in the Blanks (Drag and Drop)", hasAI: false, disabled: false },
    { name: "Multiple Choice (Single)", hasAI: false, disabled: false },
  ]

  const listeningItemsCore = [
    { name: "Summarize Spoken Text", hasAI: true, disabled: false },
    { name: "Multiple Choice (Multiple)", hasAI: false, disabled: false },
    { name: "Fill in the Blanks", hasAI: false, disabled: false },
    { name: "Multiple Choice (Single)", hasAI: false, disabled: false },
    { name: "Select Missing Word", hasAI: false, disabled: false },
    { name: "Highlight Incorrect Words", hasAI: false, disabled: false },
    { name: "Write From Dictation", hasAI: false, disabled: false },
    { name: "Summarize Spoken Text (PTEA)", hasAI: false, disabled: false },
    { name: "Highlight Correct Summary (PTEA)", hasAI: false, disabled: false },
  ]

  const handleItemClick = (item) => {
    if (!item.disabled) {
      setSelectedItem(item)
      setIsModalOpen(true)
      setAccessCode("")
      setErrorMessage("")
      setValidationStatus("idle")
    }
  }

  const handleSubmit = () => {
    if (accessCode === "1234") {
      setValidationStatus("success")
      setErrorMessage("")
    } else {
      setValidationStatus("error")
      setErrorMessage("Invalid code. Please try again.")
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
                <span className="text-xs px-2 py-1 rounded-full font-semibold border border-yellow-300 bg-white">
                  <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                    AI Score
                  </span>
                </span>
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
        {/* Tabs */}
        <div className="flex border-b relative">
          <button
            onClick={() => setActiveTab("pte-academic")}
            className={`px-6 py-3 font-medium text-sm transition-colors ${
              activeTab === "pte-academic"
                ? "bg-red-800 text-white border-b-2"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
          >
            PTE Academic / UKVI
          </button>
          <button
            onClick={() => setActiveTab("pte-core")}
            className={`px-6 py-3 font-medium text-sm transition-colors ${
              activeTab === "pte-core"
                ? "bg-red-800 text-white border-b-2"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
          >
            PTE Core
          </button>
          <button
            onClick={() => window.location.href = '/'}
            className="absolute right-1 text-gray-600 text-4xl font-bold p-2"
            aria-label="Close"
            style={{ lineHeight: 0.8 }}
          >
            &times;
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {activeTab === "pte-academic" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <ItemList items={speakingItemsAcademic} title="Speaking" />
              <ItemList items={writingItemsAcademic} title="Writing" />
              <ItemList items={readingItemsAcademic} title="Reading" />
              <ItemList items={listeningItemsAcademic} title="Listening" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <ItemList items={speakingItemsCore} title="Speaking" />
              <ItemList items={writingItemsCore} title="Writing" />
              <ItemList items={readingItemsCore} title="Reading" />
              <ItemList items={listeningItemsCore} title="Listening" />
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 backdrop-blur-sm" onClick={closeModal} />
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-6">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-700"
              onClick={closeModal}
              aria-label="Close"
            >
              <X size={24} />
            </button>
            <div className="text-center">
              {validationStatus === 'success' ? (
                <div className="mb-4">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4 animate-pulse" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Access Granted! 🎉</h3>
                  <p className="text-sm text-gray-600">You can now access <strong>{selectedItem?.name}</strong></p>
                </div>
              ) : (
                <>
                  <Lock className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-3xl font-bold mb-2">
                    <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                      Premium
                    </span>{" "}
                    <span className="text-black">Starts Here.</span>
                  </h3>
                  <p className="text-sm text-gray-600 mb-6">
                    Enter your access code to unlock <strong>{selectedItem?.name}</strong>.
                  </p>
                  <input
                    type="text"
                    value={accessCode}
                    onChange={(e) => setAccessCode(e.target.value)}
                    placeholder="Enter code"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-center font-mono"
                    autoFocus
                  />
                  {validationStatus === 'error' && (
                    <div className="text-red-500 text-sm mt-2 bg-red-50 p-2 rounded border border-red-200">
                      {errorMessage}
                    </div>
                  )}
                  <button
                    onClick={handleSubmit}
                    className="w-full mt-4 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
                  >
                    Submit
                  </button>
                  <div className="mt-6 pt-4 border-t text-sm text-gray-600">
                    Don't have a code? Contact Support{" "}
                    <button
                      className="text-blue-600 hover:text-blue-800 underline"
                      onClick={() => alert("Redirecting to Telegram group...")}
                    >
                      Telegram Link
                    </button>
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
