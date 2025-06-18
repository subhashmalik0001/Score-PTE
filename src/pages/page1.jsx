"use client"

import { Users, Bot, Headphones } from "lucide-react"

const Page1 = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-10">
        <div className="absolute top-20 right-20 w-64 h-64 border-4 border-blue-400 rounded-full"></div>
        <div className="absolute top-32 right-32 w-32 h-32 border-4 border-teal-400 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Illustration */}
          <div className="relative">
            {/* Score bubbles */}
            <div className="absolute -top-4 left-8 w-16 h-16 bg-teal-400 rounded-full flex items-center justify-center text-white font-bold text-xl z-10">
              79
            </div>
            <div className="absolute top-8 right-12 w-16 h-16 bg-teal-400 rounded-full flex items-center justify-center text-white font-bold text-xl z-10">
              90
            </div>
            <div className="absolute bottom-16 left-4 w-14 h-14 bg-teal-400 rounded-full flex items-center justify-center text-white font-bold text-lg z-10">
              65
            </div>

            {/* Main illustration container */}
            <div className="relative bg-white rounded-2xl p-8 shadow-lg">
              {/* Desktop/Monitor */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="w-48 h-32 bg-blue-500 rounded-lg flex items-center justify-center relative overflow-hidden">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <Bot className="w-6 h-6 text-blue-500" />
                    </div>
                    {/* AI character with headphones */}
                    <div className="absolute -right-2 -top-2 w-8 h-8 bg-teal-400 rounded-full flex items-center justify-center">
                      <Headphones className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="w-52 h-4 bg-gray-300 rounded-b-lg"></div>
                  <div className="w-16 h-8 bg-gray-400 mx-auto rounded-b-lg"></div>
                </div>
              </div>

              {/* Laptop */}
              <div className="flex justify-center mb-6">
                <div className="relative transform -rotate-12">
                  <div className="w-32 h-20 bg-gray-800 rounded-t-lg flex items-center justify-center">
                    <div className="w-24 h-16 bg-teal-400 rounded flex items-center justify-center">
                      <div className="grid grid-cols-3 gap-1">
                        {[...Array(9)].map((_, i) => (
                          <div key={i} className="w-1 h-1 bg-white rounded-full"></div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="w-36 h-2 bg-gray-600 rounded-b-lg"></div>
                </div>
              </div>

              {/* Smartphone */}
              <div className="absolute bottom-4 right-4">
                <div className="w-12 h-20 bg-blue-600 rounded-lg flex flex-col items-center justify-center">
                  <div className="w-8 h-12 bg-blue-400 rounded flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-1">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-1 h-1 bg-white rounded-full"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Small people figures */}
              <div className="absolute bottom-8 left-8 flex space-x-2">
                <div className="w-6 h-8 bg-blue-400 rounded-t-full"></div>
                <div className="w-6 h-8 bg-teal-400 rounded-t-full"></div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-4 h-4 bg-gray-300 rounded"></div>
              <div className="absolute bottom-12 right-12 w-3 h-3 bg-teal-300 rounded-full"></div>
            </div>

            {/* Cursor pointer */}
            <div className="absolute -bottom-4 left-12 transform rotate-12">
              <div className="w-6 h-8 bg-gray-800 clip-path-cursor"></div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-teal-500 font-medium text-sm tracking-wide uppercase">GET YOUR DESIRED SCORE</span>
            </div>

            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                <span className="text-blue-600">Practice PTE with AI</span>
                <br />
                <span className="text-blue-500">Scorings</span>
              </h1>
            </div>

            {/* Subtext */}
            <p className="text-teal-500 text-lg lg:text-xl font-medium">Join 1000s of PTE test takers to practice</p>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                ENROLL NOW
              </button>
            </div>

            {/* Stats or additional info */}
            <div className="flex items-center space-x-8 pt-8">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-teal-500" />
                <span className="text-gray-600 font-medium">1000+ Students</span>
              </div>
              <div className="flex items-center space-x-2">
                <Bot className="w-5 h-5 text-blue-500" />
                <span className="text-gray-600 font-medium">AI Powered</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.690z" />
          </svg>
        </button>
      </div>
    </section>
  )
}

export default Page1
