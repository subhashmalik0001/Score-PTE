"use client"

import { useState } from "react"

const PTEAcademic = () => {
  const [activeTab, setActiveTab] = useState("pte-academic")

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

 

  const ItemList = ({ items, title }) => (
    <div className="flex-1 min-w-0">
      <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b-2 border-gray-300">{title}</h3>
      <div className="space-y-3">
        {items.map((item, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg border transition-colors cursor-pointer ${
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
    </div>
  )
}

export default PTEAcademic 