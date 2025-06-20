"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const flagUrls = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Bangladesh.svg/330px-Flag_of_Bangladesh.svg.png",
  

  "https://t3.ftcdn.net/jpg/08/05/82/66/360_F_805826661_nsFm1zBeiohQqNaGgJQs9y79HRUz0WWk.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_New_Zealand.svg/960px-Flag_of_New_Zealand.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Flag_of_Sri_Lanka.svg/1200px-Flag_of_Sri_Lanka.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/330px-Flag_of_Australia_%28converted%29.svg.png",

  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/1200px-Flag_of_the_United_Arab_Emirates.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1200px-Flag_of_the_United_Kingdom_%281-2%29.svg.png",
  "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",
  "https://t3.ftcdn.net/jpg/08/05/82/66/360_F_805826661_nsFm1zBeiohQqNaGgJQs9y79HRUz0WWk.jpg",
  
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_New_Zealand.svg/960px-Flag_of_New_Zealand.svg.png",
  

  

 
 
  
]

export default function DiagonalFlagsAnimation() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  // Create multiple rows with different speeds for parallax effect
  const createRow = (startIndex, reverse = false) => {
    const rowFlags = []
    for (let i = 0; i < 8; i++) {
      rowFlags.push(flagUrls[(startIndex + i) % flagUrls.length])
    }
    // Duplicate for seamless loop
    return [...rowFlags, ...rowFlags]
  }

  const rows = [
    { flags: createRow(0), speed: 50, reverse: false },
    { flags: createRow(4), speed: 40, reverse: true },
    { flags: createRow(8), speed: 60, reverse: false },
    { flags: createRow(12), speed: 35, reverse: true },
    { flags: createRow(16), speed: 55, reverse: false },
    { flags: createRow(2), speed: 45, reverse: true },
  ]

  return (
    <div className="min-h-screen bg-gray-900 overflow-hidden relative">
      <div className="absolute inset-0 h-10 transform rotate-12 scale-150 origin-center">
        <div className="flex flex-col gap-8 -mt-32">
          {rows.map((row, rowIndex) => (
            <motion.div
              key={rowIndex}
              className="flex gap-8 whitespace-nowrap"
              animate={{
                x: row.reverse ? [0, -1200] : [-1200, 0],
              }}
              transition={{
                duration: row.speed,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              {row.flags.map((flag, index) => (
                <motion.div
                  key={`flag-${index}`}
                  className="flex-shrink-0 w-24 h-20 sm:w-32 sm:h-20 md:w-48 md:h-32 bg-gray-800 rounded-lg flex items-center justify-center border border-gray-700 hover:border-gray-600 transition-colors overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <img
                    src={flag || "/placeholder.svg"}
                    alt="Flag"
                    className="w-full h-full object-cover rounded-lg"
                    crossOrigin="anonymous"
                    onError={(e) => {
                      e.currentTarget.style.display = "none"
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Gradient overlays for fade effect */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-900 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-900 to-transparent z-10" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 to-transparent z-10" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-900 to-transparent z-10" />
    </div>
  )
}
