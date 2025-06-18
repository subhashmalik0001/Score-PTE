import React from "react";
import { motion } from "framer-motion";


import { FaLaptop, FaClock, FaGlobe, FaUserGraduate, FaChartLine, FaFileAlt } from 'react-icons/fa';

const features = [
  { icon: <FaLaptop size={40} />, text: "Fully computer-based test" },
  { icon: <FaClock size={40} />, text: "Results typically in 1–2 days" },
  { icon: <FaGlobe size={40} />, text: "Accepted globally for study, work & migration" },
  { icon: <FaUserGraduate size={40} />, text: "Assesses speaking, writing, reading & listening" },
  { icon: <FaChartLine size={40} />, text: "Real-life academic and professional scenarios" },
  { icon: <FaFileAlt size={40} />, text: "AI-based scoring ensures fairness & accuracy" },
];

const Page6 = () => {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center justify-center px-4 py-10 space-y-10">
      {/* Feature Grid */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center text-gray-600 max-w-5xl"
      >
        {features.map((item, index) => (
          <div key={index} className="flex flex-col items-center space-y-2">
            <div className="text-gray-400">{item.icon}</div>
            <p className="text-sm md:text-base">{item.text}</p>
          </div>
        ))}
      </motion.div>

      {/* Title Section */}
      <div className="text-center mt-10 space-y-3">
  <p className="uppercase text-gray-400 tracking-widest text-xs">Pearson Presents</p>
  <h2 className="text-4xl md:text-6xl font-semibold text-gray-900">PTE Academic Test</h2>
  <p className="text-base md:text-lg text-gray-600">
    Fast, fair, and AI-powered English language assessment
  </p>
</div>
    </div>
  );
};

export default Page6;
