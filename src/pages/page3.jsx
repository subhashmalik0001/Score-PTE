import React from "react";
import { motion } from "framer-motion";

import { FaLaptop, FaClock, FaGlobe, FaUserGraduate, FaChartLine, FaFileAlt } from 'react-icons/fa';

const features = [
  { icon: <FaLaptop size={64} />, text: "Live Classes" },
  { icon: <FaClock size={64} />, text: "24/7 Support" },
  { icon: <FaFileAlt size={64} />, text: "Surety Files" },
  { icon: <FaUserGraduate size={64} />, text: "Assesses speaking, writing, reading & listening" },
  { icon: <FaChartLine size={64} />, text: "Real-life academic and professional scenarios" },
  { icon: <FaFileAlt size={64} />, text: "Scoring ensures fairness & accuracy" },
];

const Page3 = () => {
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
          <div key={index} className="flex flex-col items-center space-y-4">
            <div className="text-gray-400">{item.icon}</div>
            <p className="text-lg md:text-2xl font-semibold text-gray-700 text-center">{item.text}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Page3;
