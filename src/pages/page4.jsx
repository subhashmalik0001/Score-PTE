"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, GraduationCap, Globe, Award, Target } from 'lucide-react'

const cards = [
  {
    title: "About PTE",
    description: "Learn about PTE Academic test format and requirements",
    icon: <BookOpen size={24} />,
    glowColor: "rgba(59, 130, 246, 0.5)", // Blue
    route: "/about-pte"
  },
  {
    title: "PTE Academic",
    description: "Complete guide to PTE Academic preparation",
    icon: <GraduationCap size={24} />,
    glowColor: "rgba(16, 185, 129, 0.5)", // Green
    route: "/pte-academic"
  },
  {
    title: "IELTS",
    description: "IELTS preparation materials and practice tests",
    icon: <Globe size={24} />,
    glowColor: "rgba(139, 92, 246, 0.5)", // Purple
    route: "/ielts"
  },
  {
    title: "SAT",
    description: "SAT exam preparation and study resources",
    icon: <Award size={24} />,
    glowColor: "rgba(249, 115, 22, 0.5)", // Orange
    route: "/sat"
  },
  {
    title: "PTE Core",
    description: "PTE Core test preparation and practice",
    icon: <Target size={24} />,
    glowColor: "rgba(239, 68, 68, 0.5)", // Red
    route: "/pte-core"
  }
]

const Page4 = () => {
  const handleCardClick = (route) => {
    window.location.href = route
  }

  return (
    <div className="min-h-screen bg-[#0D2440] py-24 px-6 relative overflow-hidden">
      {/* Dynamic Background Light Leaks */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className=" min-w-full px-[5%]  xs:px-[2%]   mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-[11px] font-black uppercase tracking-[0.6em] text-blue-400 mb-6 block">
            Preparation Tracks
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-[#E7F0FA] mb-6 tracking-tighter">
            CHOOSE YOUR <span className="italic font-light opacity-60">PATH.</span>
          </h2>
          <p className="text-[#E7F0FA]/50 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
            Select a specialized curriculum tailored to your global ambitions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1  xs:grid-cols-1 grid-cols-2 1 grid-cols-2  lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              onClick={() => handleCardClick(card.route)}
              className="relative group p-[1px] rounded-[2.5rem] bg-gradient-to-b from-white/10 to-transparent cursor-pointer overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            >
              {/* The Inner Card Surface */}
              <div className="bg-[#0D2440]/80 backdrop-blur-2xl rounded-[2.5rem] p-10 h-full flex flex-col items-start relative overflow-hidden">
                
                {/* Accent Glow Background */}
                <div 
                  className="absolute -top-24 -right-24 w-48 h-48 xs:right-0 blur-[80px] opacity-0 group-hover:opacity-40 transition-opacity duration-700"
                  style={{ backgroundColor: card.glowColor }}
                />

                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#E7F0FA] mb-8 group-hover:bg-white group-hover:text-[#0D2440] transition-all duration-500 shadow-xl">
                  {card.icon}
                </div>
                
                <h3 className="text-3xl font-bold text-[#E7F0FA] mb-4 tracking-tight">
                  {card.title}
                </h3>
                
                <p className="text-[#E7F0FA]/40 mb-10 leading-relaxed font-medium">
                  {card.description}
                </p>
                
                <div className="mt-auto flex items-center text-[#E7F0FA] text-sm font-black uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-all duration-500">
                  <span>Explore Track</span>
                  <div className="ml-3 p-2 rounded-full border border-white/10 group-hover:bg-white group-hover:text-[#0D2440] transition-all duration-500">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Grainy Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
    </div>
  )
}

export default Page4