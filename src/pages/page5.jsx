import React from "react";
import { motion } from 'framer-motion';
import { Target, TrendingUp, Award, Sparkles } from 'lucide-react';

const Page5 = () => {
  return (
    <div className="w-full bg-[#0D2440] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.15),transparent_70%)] pointer-events-none" />
      
      <div className="flex flex-col justify-center items-center px-4 py-20 px-6 relative z-10">
        {/* Header Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
        >
          <Sparkles className="w-4 h-4 text-blue-400" />
          <span className="uppercase tracking-[0.3em] text-blue-400 text-xs font-black">
            What we are working on
          </span>
        </motion.div>

        {/* Main Content Grid */}
        <div className="min-w-full px-[5%] xs:px-[2%] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h1 className="xs:text-4xl text-6xl font-black text-white leading-tight">
              At <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Score PTE</span>, we blend
            </h1>
            
            <div className="space-y-4">
              <p className="xs:text-xl text-2xl font-bold text-white/90">
                advanced technology
              </p>
              <p className="xs:text-lg text-xl font-medium text-white/80">
                elite training methodologies,
              </p>
              <p className="xs:text-lg text-xl font-medium text-white/80">
                and deep exam insight to deliver results that speak for themselves
              </p>
            </div>

            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-2xl p-6 mt-8">
              <p className="xs:text-2xl text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                Just Results.
              </p>
              <p className="text-lg font-semibold text-white/90 mt-2">
                Because here, your score must grow.
              </p>
            </div>
          </motion.div>

          {/* Right Side - Feature Cards */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="grid xs:grid-cols-1 grid-cols-4 gap-6"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm"
            >
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Advanced Technology</h3>
              <p className="text-white/60 text-sm">AI-powered tools and cutting-edge methods</p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm"
            >
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Elite Training</h3>
              <p className="text-white/60 text-sm">Proven methodologies for guaranteed success</p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm"
            >
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Deep Insights</h3>
              <p className="text-white/60 text-sm">Comprehensive exam analysis and strategies</p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-2xl p-6 backdrop-blur-sm"
            >
              <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Tailored Success</h3>
              <p className="text-white/60 text-sm">Every tool designed for your excellence</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 text-center"
        >
          <p className="xs:text-lg text-xl font-medium text-white/80 mb-4">
            With every tool tailored for your success
          </p>
          <p className="xs:text-xl text-2xl font-bold text-white">
            we're not just preparing you for the test — we're preparing you to excel.
          </p>
        </motion.div>
      </div>
      
      {/* Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay -z-10" />
    </div>
  );
};

export default Page5;