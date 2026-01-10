import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Clock, Users, Award, CheckCircle, Globe, Target, Cpu, Timer, Calendar, MapPin, TrendingUp, Sparkles } from 'lucide-react'
import Navbar from '../components/Navbar'

const AboutPTE = () => {
  const testFormats = [
    {
      name: "PTE Academic",
      purpose: "University admissions & skilled migration",
      duration: "2 hours",
      sections: "Speaking & Writing, Reading, Listening",
      scoring: "10-90 scale",
      results: "24-48 hours",
      validity: "2 years",
      acceptance: "3,000+ institutions worldwide"
    },
    {
      name: "PTE Core", 
      purpose: "Canadian immigration (IRCC approved)",
      duration: "2 hours",
      sections: "Speaking & Writing, Reading, Listening",
      scoring: "10-90 scale",
      results: "24-48 hours",
      validity: "2 years",
      acceptance: "Immigration, Refugees and Citizenship Canada"
    },
    {
      name: "PTE Academic UKVI",
      purpose: "UK visa applications (SELT approved)",
      duration: "2 hours",
      sections: "Speaking & Writing, Reading, Listening",
      scoring: "10-90 scale",
      results: "24-48 hours",
      validity: "2 years",
      acceptance: "UK Home Office approved centers"
    }
  ]

  const keyFeatures = [
    {
      icon: Cpu,
      title: "AI-Powered Scoring",
      description: "100% computer-based scoring eliminates human bias and ensures consistent, fair results across all test sessions."
    },
    {
      icon: Clock,
      title: "Fast Results",
      description: "Receive your official scores within 24-48 hours, the fastest turnaround time among major English proficiency tests."
    },
    {
      icon: Globe,
      title: "Global Recognition",
      description: "Accepted by thousands of universities, colleges, and government agencies in Australia, UK, New Zealand, Canada, and USA."
    },
    {
      icon: Target,
      title: "Integrated Skills Testing",
      description: "Tests real-world English usage by combining multiple skills in single tasks, reflecting how English is actually used."
    }
  ]

  const acceptanceData = [
    { country: "Australia", institutions: "100% of universities", migration: "Department of Home Affairs" },
    { country: "United Kingdom", institutions: "99% of universities", migration: "UK Home Office (UKVI)" },
    { country: "New Zealand", institutions: "100% of universities", migration: "Immigration New Zealand" },
    { country: "Canada", institutions: "90% of universities", migration: "IRCC (PTE Core)" },
    { country: "United States", institutions: "2000+ programs", migration: "Various state boards" }
  ]

  const scoringGuide = [
    { range: "79-90", level: "Proficient", description: "Excellent English skills for academic study" },
    { range: "65-78", level: "Competent", description: "Good English skills, suitable for most programs" },
    { range: "50-64", level: "Modest", description: "Adequate English skills with some limitations" },
    { range: "36-49", level: "Limited", description: "Basic English skills, may need improvement" },
    { range: "10-35", level: "Extremely Limited", description: "Minimal English proficiency" }
  ]

  return (
    <div className="min-h-screen bg-[#0D2440] text-[#E7F0FA] relative overflow-hidden">
      <Navbar />
      
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.15),transparent_70%)] pointer-events-none" />
      
      {/* Header */}
      <section className="relative pt-14 pb-24 px-6">
        <div className=" min-w-full px-[5%] xs:px-[2%]   mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <CheckCircle className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-black tracking-[0.3em] text-blue-400">
                WORLD-CLASS ASSESSMENT
              </span>
            </div>
            
            <h1 className="xs:text-6xl text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
              About <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">PTE</span>
            </h1>
            
            <p className=" max-w-full px-[5%]  xs:px-[2%]  text-[#E7F0FA]/50 text-lg font-medium leading-relaxed">
              PTE is a computer-based English language test that assesses the English proficiency of non-native speakers. 
              Developed by Pearson PLC, it's trusted by thousands of institutions worldwide for academic admissions, 
              visa applications, and professional certification.
            </p>
          </motion.div>
        </div>
      </section>

      <div className=" min-w-full px-[5%] xs:px-[2%]  ">
        {/* Test Formats Comparison */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">PTE Test Formats</h2>
            <p className="text-white/60 max-w-2xl mx-auto">Choose the right PTE test for your specific needs</p>
          </motion.div>

          <div className="grid xs:grid-cols-1 grid-cols-3 gap-8">
            {testFormats.map((test, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{test.name}</h3>
                <div className="space-y-4">
                  <div>
                    <span className="font-semibold text-blue-400">Purpose:</span>
                    <p className="text-white/80">{test.purpose}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-semibold text-blue-400">Duration:</span>
                      <p className="text-white/80">{test.duration}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-blue-400">Results:</span>
                      <p className="text-white/80">{test.results}</p>
                    </div>
                  </div>
                  <div>
                    <span className="font-semibold text-blue-400">Accepted by:</span>
                    <p className="text-white/60 text-sm">{test.acceptance}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Why Choose PTE?</h2>
            <p className="text-white/60 max-w-2xl mx-auto">Advanced features that make PTE the preferred choice</p>
          </motion.div>

          <div className="grid xs:grid-cols-1 grid-cols-2 gap-8">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mr-4">
                    <feature.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                </div>
                <p className="text-white/60 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Global Acceptance */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Global Acceptance</h2>
              <p className="text-white/60">PTE is recognized worldwide by leading institutions and governments</p>
            </div>
            
            <div className="grid  xs:grid-cols-1 grid-cols-5 gap-6">
              {acceptanceData.map((data, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-blue-400" />
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-white">{data.country}</h4>
                  <p className="text-sm text-white/80 mb-1">{data.institutions}</p>
                  <p className="text-xs text-white/60">{data.migration}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Scoring Guide */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">PTE Scoring Guide</h2>
            <p className="text-white/60 max-w-2xl mx-auto">Understanding your PTE score and what it means</p>
          </motion.div>

          <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-white/5">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold text-white">Score Range</th>
                    <th className="px-6 py-4 text-left font-semibold text-white">Level</th>
                    <th className="px-6 py-4 text-left font-semibold text-white">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {scoringGuide.map((score, index) => (
                    <tr key={index} className="border-t border-white/10">
                      <td className="px-6 py-4 font-mono font-bold text-blue-400">{score.range}</td>
                      <td className="px-6 py-4 font-semibold text-white">{score.level}</td>
                      <td className="px-6 py-4 text-white/80">{score.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Test Structure Overview */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8"
          >
            <h2 className="text-4xl font-bold mb-8 text-center">Test Structure Overview</h2>
            
            <div className="grid xs:grid-cols-3 grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-400">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Speaking & Writing</h3>
                <p className="text-blue-400 mb-2">54-67 minutes</p>
                <ul className="text-sm text-white/60 space-y-1">
                  <li>• Personal Introduction</li>
                  <li>• Read Aloud</li>
                  <li>• Repeat Sentence</li>
                  <li>• Describe Image</li>
                  <li>• Re-tell Lecture</li>
                  <li>• Answer Short Question</li>
                  <li>• Summarize Written Text</li>
                  <li>• Essay Writing</li>
                </ul>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-400">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Reading</h3>
                <p className="text-blue-400 mb-2">29-30 minutes</p>
                <ul className="text-sm text-white/60 space-y-1">
                  <li>• Multiple Choice (Single)</li>
                  <li>• Multiple Choice (Multiple)</li>
                  <li>• Re-order Paragraphs</li>
                  <li>• Fill in the Blanks</li>
                  <li>• Reading & Writing Fill in Blanks</li>
                </ul>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-400">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Listening</h3>
                <p className="text-blue-400 mb-2">30-43 minutes</p>
                <ul className="text-sm text-white/60 space-y-1">
                  <li>• Summarize Spoken Text</li>
                  <li>• Multiple Choice (Multiple)</li>
                  <li>• Fill in the Blanks</li>
                  <li>• Highlight Correct Summary</li>
                  <li>• Multiple Choice (Single)</li>
                  <li>• Select Missing Word</li>
                  <li>• Highlight Incorrect Words</li>
                  <li>• Write from Dictation</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Quick Facts */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Quick Facts About PTE</h2>
            
            <div className="grid  xs:grid-cols-1 grid-cols-4  gap-8 text-center">
              <div>
                <Calendar className="w-12 h-12 mx-auto mb-4 text-blue-400" />
                <h3 className="text-2xl font-bold mb-2 text-white">2009</h3>
                <p className="text-white/60">Year Launched</p>
              </div>
              <div>
                <Users className="w-12 h-12 mx-auto mb-4 text-green-400" />
                <h3 className="text-2xl font-bold mb-2 text-white">3000+</h3>
                <p className="text-white/60">Accepting Institutions</p>
              </div>
              <div>
                <Globe className="w-12 h-12 mx-auto mb-4 text-purple-400" />
                <h3 className="text-2xl font-bold mb-2 text-white">50+</h3>
                <p className="text-white/60">Countries</p>
              </div>
              <div>
                <TrendingUp className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
                <h3 className="text-2xl font-bold mb-2 text-white">24-48h</h3>
                <p className="text-white/60">Result Time</p>
              </div>
            </div>
          </motion.div>
        </section>
      </div>

      {/* Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay -z-10" />
    </div>
  )
}

export default AboutPTE