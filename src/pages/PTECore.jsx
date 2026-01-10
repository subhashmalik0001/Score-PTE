import React from "react";
import { motion } from 'framer-motion'
import {
  BarChart3,
  Headphones,
  Mic,
  PenTool,
  Users,
  Globe,
  Calendar,
  Clock,
  Award,
  Target,
  CheckCircle2
} from "lucide-react";
import { BookOpen, CheckCircle } from 'lucide-react'
import Navbar from '../components/Navbar'

const PTECore = () => {
  return (
    <div className="min-h-screen bg-[#0D2440] text-[#E7F0FA] relative overflow-hidden">
      <Navbar />
      
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.15),transparent_70%)] pointer-events-none" />
      
      {/* Header */}
      <section className="relative pt-14 pb-24 px-6">
        <div className="min-w-full px-[5%] xs:px-[2%]  text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <CheckCircle className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-black tracking-[0.3em] text-blue-400">
                CANADIAN IMMIGRATION TEST
              </span>
            </div>
            
            <h1 className="xs:text-6xl text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
              PTE <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">Core</span>
            </h1>
            
            <p className="max-w-full px-[5%] xs:px-[2%] mx-auto text-[#E7F0FA]/50 text-lg font-medium leading-relaxed">
              PTE Core is a fully computer-based English language proficiency test designed specifically for 
              Canadian economic immigration and workplace communication.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="min-w-full px-[5%] xs:px-[2%]  ">

        {/* Overview */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8"
          >
            <h2 className="text-3xl font-bold mb-6 text-center">Overview</h2>
            
            <p className="text-white/80 text-lg mb-6 leading-relaxed">
              It evaluates real-world English skills across <span className="font-semibold text-blue-400">Speaking, Writing, Reading, and Listening</span> using everyday scenarios.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <span className="font-semibold text-blue-400">• Accepted by:</span>
                  <p className="text-white/80">Immigration, Refugees and Citizenship Canada</p>
                </div>
                <div>
                  <span className="font-semibold text-blue-400">• Purpose:</span>
                  <p className="text-white/80">PR, Work permits & Citizenship</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <span className="font-semibold text-blue-400">• Delivery:</span>
                  <p className="text-white/80">Pearson VUE test centers</p>
                </div>
                <div>
                  <span className="font-semibold text-blue-400">• Scoring:</span>
                  <p className="text-white/80">AI-based (10–90, CLB aligned)</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Test Format */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Test Format Overview</h2>
            <p className="text-white/60 max-w-2xl mx-auto">PTE Core consists of three integrated sections</p>
          </motion.div>

          <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden mb-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-white/5">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold text-white">Module</th>
                    <th className="px-6 py-4 text-left font-semibold text-white">Skills</th>
                    <th className="px-6 py-4 text-left font-semibold text-white">Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-white/10">
                    <td className="px-6 py-4 font-semibold text-blue-400">Speaking & Writing</td>
                    <td className="px-6 py-4 text-white/80">Speaking + Writing</td>
                    <td className="px-6 py-4 text-white/80">~50 mins</td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="px-6 py-4 font-semibold text-blue-400">Reading</td>
                    <td className="px-6 py-4 text-white/80">Reading + Writing</td>
                    <td className="px-6 py-4 text-white/80">~30 mins</td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="px-6 py-4 font-semibold text-blue-400">Listening</td>
                    <td className="px-6 py-4 text-white/80">Listening + Reading + Writing</td>
                    <td className="px-6 py-4 text-white/80">~30 mins</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-xl p-4 text-center">
            <span className="font-semibold text-blue-400">🚀 Total Duration:</span>
            <span className="text-white ml-2">~2 hours</span>
          </div>
        </section>

        {/* Scoring System */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mr-4">
                <BarChart3 className="w-6 h-6 text-blue-400" />
              </div>
              <h2 className="text-3xl font-bold text-white">Scoring System</h2>
            </div>
            
            <div className="grid xs:grid-cols-1 grid-cols-3 gap-6">
              <div>
                <span className="font-semibold text-blue-400">Score Range:</span>
                <p className="text-white/80">10–90 (CLB aligned)</p>
              </div>
              <div>
                <span className="font-semibold text-blue-400">Method:</span>
                <p className="text-white/80">100% AI-driven, unbiased scoring</p>
              </div>
              <div>
                <span className="font-semibold text-blue-400">Credit:</span>
                <p className="text-white/80">Partial credit available</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Reading Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mr-4">
                <BookOpen className="w-6 h-6 text-green-400" />
              </div>
              <h2 className="text-3xl font-bold text-white">Reading (~30 minutes)</h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-white/5">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold text-white">Task</th>
                    <th className="px-6 py-4 text-left font-semibold text-white">Skills</th>
                    <th className="px-6 py-4 text-left font-semibold text-white">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-white/10">
                    <td className="px-6 py-4 font-semibold text-blue-400">Fill in the Blanks</td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Reading + Writing</span>
                    </td>
                    <td className="px-6 py-4 text-white/80">Drag words into gaps in text</td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="px-6 py-4 font-semibold text-blue-400">Re-order Paragraphs</td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">Reading</span>
                    </td>
                    <td className="px-6 py-4 text-white/80">Arrange text boxes in logical order</td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="px-6 py-4 font-semibold text-blue-400">Multiple Choice (Single)</td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">Reading</span>
                    </td>
                    <td className="px-6 py-4 text-white/80">Choose one correct answer</td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="px-6 py-4 font-semibold text-blue-400">Multiple Choice (Multiple)</td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">Reading</span>
                    </td>
                    <td className="px-6 py-4 text-white/80">Choose multiple correct answers</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </section>

        {/* Listening Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mr-4">
                <Headphones className="w-6 h-6 text-purple-400" />
              </div>
              <h2 className="text-3xl font-bold text-white">Listening (~30 minutes)</h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-white/5">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold text-white">Task</th>
                    <th className="px-6 py-4 text-left font-semibold text-white">Skills</th>
                    <th className="px-6 py-4 text-left font-semibold text-white">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-white/10">
                    <td className="px-6 py-4 font-semibold text-blue-400">Write from Dictation</td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">Listening + Writing</span>
                    </td>
                    <td className="px-6 py-4 text-white/80">Type exactly what you hear</td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="px-6 py-4 font-semibold text-blue-400">Fill in the Blanks</td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm">Listening</span>
                    </td>
                    <td className="px-6 py-4 text-white/80">Fill gaps while listening</td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="px-6 py-4 font-semibold text-blue-400">Highlight Incorrect Words</td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm">Listening + Reading</span>
                    </td>
                    <td className="px-6 py-4 text-white/80">Identify wrong words in transcript</td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="px-6 py-4 font-semibold text-blue-400">Multiple Choice (Single)</td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm">Listening</span>
                    </td>
                    <td className="px-6 py-4 text-white/80">Choose one correct answer</td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="px-6 py-4 font-semibold text-blue-400">Select Missing Word</td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm">Listening</span>
                    </td>
                    <td className="px-6 py-4 text-white/80">Choose the missing final word</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </section>
      </div>

      {/* Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay -z-10" />
    </div>
  )
}

export default PTECore
