import React from "react";
import { motion } from 'framer-motion';
import { Star, Heart, MessageCircle, Send, Award, Users } from 'lucide-react';

const Page7 = () => {
 const testimonialCards = [
  {
    score: "90",
    name: "Arvind Mehta",
    message: "Score PTE changed my life! Got my dream score in first attempt.",
    gradient: "from-green-500/20 to-emerald-500/20",
    border: "border-green-500/30",
  },
  {
    score: "90",
    name: "Raj Patel",
    message: "Amazing support and strategies. Highly recommend to everyone!",
    gradient: "from-blue-500/20 to-cyan-500/20",
    border: "border-blue-500/30",
  },
  {
    score: "90",
    name: "Sahil Malik",
    message: "Perfect preparation materials. Exceeded my expectations completely.",
    gradient: "from-purple-500/20 to-pink-500/20",
    border: "border-purple-500/30",
  },

  // ✅ More Data Added
  {
    score: "90",
    name: "Neha Sharma",
    message: "The mock tests were super accurate. I felt confident in the exam.",
    gradient: "from-orange-500/20 to-amber-500/20",
    border: "border-orange-500/30",
  },
  {
    score: "90",
    name: "Kunal Verma",
    message: "Their speaking tips boosted my score drastically. Loved the guidance!",
    gradient: "from-rose-500/20 to-red-500/20",
    border: "border-rose-500/30",
  },
  {
    score: "90",
    name: "Simran Kaur",
    message: "Best platform for PTE. Clear roadmap and powerful templates.",
    gradient: "from-teal-500/20 to-cyan-500/20",
    border: "border-teal-500/30",
  },
  {
    score: "90",
    name: "Aditya Singh",
    message: "My writing score improved a lot with their structured strategy.",
    gradient: "from-indigo-500/20 to-violet-500/20",
    border: "border-indigo-500/30",
  },
  {
    score: "90",
    name: "Pooja Rani",
    message: "The practice materials are premium quality. Got my desired result!",
    gradient: "from-fuchsia-500/20 to-pink-500/20",
    border: "border-fuchsia-500/30",
  },
  {
    score: "90",
    name: "Rohit Gupta",
    message: "Great coaching with easy techniques. Support team is also helpful.",
    gradient: "from-yellow-500/20 to-orange-500/20",
    border: "border-yellow-500/30",
  },
  {
    score: "90",
    name: "Manpreet Gill",
    message: "I followed the daily routine and got 90 overall. Highly recommended!",
    gradient: "from-lime-500/20 to-green-500/20",
    border: "border-lime-500/30",
  },
  {
    score: "90",
    name: "Ayesha Khan",
    message: "Loved the speaking fluency drills. They work like magic.",
    gradient: "from-sky-500/20 to-blue-500/20",
    border: "border-sky-500/30",
  },
  {
    score: "90",
    name: "Harsh Joshi",
    message: "The templates and practice tests saved me a lot of time.",
    gradient: "from-slate-500/20 to-gray-500/20",
    border: "border-slate-500/30",
  },
  {
    score: "90",
    name: "Nidhi Kapoor",
    message: "I was weak in listening, but their strategy helped me score 90!",
    gradient: "from-emerald-500/20 to-teal-500/20",
    border: "border-emerald-500/30",
  },
  {
    score: "90",
    name: "Vikas Yadav",
    message: "Very professional and effective. The mock interface feels real.",
    gradient: "from-violet-500/20 to-purple-500/20",
    border: "border-violet-500/30",
  },
  {
    score: "90",
    name: "Anjali Desai",
    message: "I improved consistently every week. The roadmap is perfect for beginners.",
    gradient: "from-cyan-500/20 to-sky-500/20",
    border: "border-cyan-500/30",
  },
];


  return (
    <div className="w-full bg-[#0D2440] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)] pointer-events-none" />
      
      <div className="flex flex-col items-center justify-center px-6 py-20 relative z-10">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
            <Heart className="w-4 h-4 text-pink-400" />
            <span className="uppercase tracking-[0.3em] text-pink-400 text-xs font-black">
              Ink & Pixels
            </span>
          </div>

          {/* Main Title */}
          <h1 className="xs:text-4xl text-6xl font-black text-white mb-6 leading-tight">
            Seen <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Score PTE</span> Lately?
          </h1>

          {/* Description */}
          <p className="max-w-3xl xs:text-lg text-xl text-white/80 leading-relaxed">
            As a rising brand built on passion, trust, and student success — your love means everything to us.
            <br className=" block" />
            Each score shared reminds us why we started.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="grid xs:grid-cols-1 grid-cols-3 gap-8 mb-16 w-full max-w-4xl"
        >
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center backdrop-blur-sm">
            <Users className="w-8 h-8 text-blue-400 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-white mb-2">1000+</h3>
            <p className="text-white/60">Happy Students</p>
          </div>
          
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center backdrop-blur-sm">
            <Award className="w-8 h-8 text-green-400 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-white mb-2">85%</h3>
            <p className="text-white/60">Success Rate</p>
          </div>
          
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center backdrop-blur-sm">
            <Star className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-white mb-2">4.9/5</h3>
            <p className="text-white/60">Average Rating</p>
          </div>
        </motion.div>

        {/* Marquee Reviews Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="w-full mb-16 overflow-hidden"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-8">What Our Students Say</h2>
          
          <div className="relative">
            <div className="flex gap-6 animate-marquee">
              {[...testimonialCards, ...testimonialCards].map((card, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${card.gradient} border ${card.border} rounded-2xl p-6 backdrop-blur-sm min-w-[300px] flex-shrink-0`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-2xl font-bold text-white">{card.score}</span>
                  </div>
                  <p className="text-white/80 mb-4 italic text-sm">"{card.message}"</p>
                  <p className="text-white/60 font-semibold">- {card.name}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
        
        <style>
          {`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              animation: marquee 10s linear infinite;
            }
          `}
        </style>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8 text-center max-w-2xl backdrop-blur-sm"
        >
          <MessageCircle className="w-12 h-12 text-blue-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-4">Share Your Success Story</h3>
          <p className="text-white/80 mb-6">
            Drop your Score Card with Reviews and inspire others on their PTE journey
          </p>
          
          {/* Telegram Link */}
          <motion.a 
            href="https://t.me/Scorepte_explains"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-3 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Send className="w-5 h-5" />
            Join Our Telegram Community
          </motion.a>
        </motion.div>
      </div>
      
      {/* Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay -z-10" />
    </div>
  );
};

export default Page7;
