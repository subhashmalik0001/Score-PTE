import React from 'react'
import { motion } from 'framer-motion'
import { Clock, Cpu, Globe, BookOpen, Target, Sparkles, ChevronRight, Users, Award, CheckCircle, Mic, PenTool, Eye, Headphones } from 'lucide-react'
import Navbar from '../components/Navbar'

const FeaturePill = ({ icon: Icon, label, value }) => (
  <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
    <Icon className="w-6 h-6 text-blue-400 mx-auto mb-2" />
    <p className="text-xs text-white/40 uppercase tracking-wide">{label}</p>
    <p className="text-sm font-bold text-white">{value}</p>
  </div>
)

const ModuleStep = ({ number, title, skills, time, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay }}
    className="flex items-center gap-6 mb-8 p-6 bg-white/5 rounded-2xl border border-white/10"
  >
    <div className="w-12 h-12 rounded-full bg-blue-500 text-white font-bold flex items-center justify-center">
      {number}
    </div>
    <div className="flex-1">
      <h4 className="text-xl font-bold text-white">{title}</h4>
      <p className="text-sm text-white/60">{skills}</p>
    </div>
    <div className="text-right">
      <p className="text-lg font-bold text-blue-400">{time}</p>
    </div>
  </motion.div>
)

const SkillCard = ({ icon: Icon, title, description, tasks }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all"
  >
    <div className="flex items-center gap-4 mb-6">
      <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
        <Icon className="w-6 h-6 text-blue-400" />
      </div>
      <h3 className="text-2xl font-bold text-white">{title}</h3>
    </div>
    <p className="text-white/60 mb-6">{description}</p>
    <div className="space-y-2">
      {tasks.map((task, index) => (
        <div key={index} className="flex items-center gap-3">
          <CheckCircle className="w-4 h-4 text-green-400" />
          <span className="text-sm text-white/80">{task}</span>
        </div>
      ))}
    </div>
  </motion.div>
)

const PTEAcademic = () => {
  const skillsData = [
    {
      icon: Mic,
      title: "Speaking",
      description: "Demonstrate your oral English skills through various real-world tasks",
      tasks: [
        "Read Aloud - Read text with correct pronunciation",
        "Repeat Sentence - Listen and repeat sentences accurately",
        "Describe Image - Describe graphs, charts, and images",
        "Re-tell Lecture - Summarize academic lectures",
        "Answer Short Questions - Respond to brief questions"
      ]
    },
    {
      icon: PenTool,
      title: "Writing",
      description: "Show your written English abilities in academic contexts",
      tasks: [
        "Summarize Written Text - Condense passages in one sentence",
        "Write Essay - Compose 200-300 word argumentative essays",
        "Grammar & Vocabulary - Demonstrate language accuracy",
        "Coherence & Cohesion - Structure ideas logically"
      ]
    },
    {
      icon: Eye,
      title: "Reading",
      description: "Comprehend and analyze various types of written texts",
      tasks: [
        "Multiple Choice - Select correct answers from options",
        "Re-order Paragraphs - Arrange text in logical sequence",
        "Fill in the Blanks - Complete missing words in passages",
        "Reading & Writing - Integrate reading and writing skills"
      ]
    },
    {
      icon: Headphones,
      title: "Listening",
      description: "Understand spoken English in academic and everyday situations",
      tasks: [
        "Summarize Spoken Text - Write summaries of audio content",
        "Multiple Choice - Answer questions about audio clips",
        "Fill in the Blanks - Complete transcripts while listening",
        "Highlight Incorrect Words - Identify errors in transcripts",
        "Write from Dictation - Type sentences as you hear them"
      ]
    }
  ]

  const preparationTips = [
    "Practice with official PTE preparation materials",
    "Familiarize yourself with the computer-based format",
    "Improve your typing speed for writing tasks",
    "Practice speaking clearly into a microphone",
    "Take timed practice tests regularly",
    "Focus on integrated skills (speaking while reading)"
  ]

  const acceptedBy = [
    "Harvard University", "Stanford University", "MIT",
    "University of Oxford", "Cambridge University",
    "Australian Government", "UK Home Office",
    "New Zealand Immigration", "Canadian Universities"
  ]

  return (
    <div className="min-h-screen bg-[#0D2440] text-[#E7F0FA] relative overflow-hidden">
      {/* <Navbar /> */}
      
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.15),transparent_70%)] pointer-events-none" />
      
      {/* Hero Section */}
      <section className="relative pt-14 pb-24 px-6">
        <div className=" min-w-full  px-[5%] xs:px-[2%]   mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-black tracking-[0.3em] text-blue-400">
                AI-POWERED PRECISION
              </span>
            </div>
            
            <h1 className="xs:text-6xl text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
              PTE <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">Academic</span>
            </h1>
            
            <p className="max-w-2xl mx-auto text-[#E7F0FA]/50 text-lg font-medium leading-relaxed">
              A fully computerized assessment designed for real-world English proficiency in academic and professional environments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className=" min-w-full  xs:px-[2%]    mx-auto  mb-20">
        <div className="grid   xs:grid-cols-2 grid-cols-4  gap-4">
          <FeaturePill icon={Clock} label="Duration" value="~2 Hours" />
          <FeaturePill icon={Cpu} label="Scoring" value="AI Automated" />
          <FeaturePill icon={Globe} label="Acceptance" value="Global Reach" />
          <FeaturePill icon={BookOpen} label="Format" value="Computer-based" />
        </div>
      </section>

      {/* Test Structure */}
      <section className=" min-w-full px-[5%] xs:px-[2%]   mx-auto  mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Test Structure</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            PTE Academic consists of three main sections that test integrated language skills
          </p>
        </motion.div>

        <div className="space-y-6  ">
          <ModuleStep 
            number="1" 
            title="Speaking & Writing" 
            skills="Integrated Production Skills" 
            time="54–67 min" 
            delay={0.1}
          />
          <ModuleStep 
            number="2" 
            title="Reading" 
            skills="Text Comprehension" 
            time="29–30 min" 
            delay={0.2}
          />
          <ModuleStep 
            number="3" 
            title="Listening" 
            skills="Audio Analysis & Response" 
            time="30–43 min" 
            delay={0.3}
          />
        </div>

        <div className="mt-12 p-8 rounded-3xl bg-blue-500/10 border border-blue-500/20 text-center">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-blue-400 mb-2">Total Session Duration</p>
          <p className="text-4xl font-black text-[#E7F0FA] italic">~ 2 HOURS</p>
        </div>
      </section>

      {/* Skills Breakdown */}
      <section className=" min-w-full px-[5%]  xs:px-[2%]    mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Skills Tested</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Each section evaluates specific language competencies through various task types
          </p>
        </motion.div>

        <div className="grid  xs:grid-cols-1  grid-cols-2  gap-8">
          {skillsData.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </section>

      {/* Preparation Tips */}
      <section className=" min-w-full px-[5%] xs:px-[2%]   mx-auto  mb-20">
        <div className="grid  xs:grid-cols-1 grid-cols-2  gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Target className="text-blue-400" /> Preparation Tips
            </h3>
            <div className="space-y-4">
              {preparationTips.map((tip, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-white/80">{tip}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Award className="text-blue-400" /> Accepted Worldwide
            </h3>
            <p className="text-white/60 mb-6">
              PTE Academic is trusted by thousands of institutions globally:
            </p>
            <div className="grid grid-cols-1 gap-2">
              {acceptedBy.map((institution, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-400" />
                  <span className="text-sm text-white/80">{institution}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Scoring Information */}
      <section className=" min-w-full px-[5%] xs:px-[2%]   mx-auto  mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center"
        >
          <h3 className="text-3xl font-bold mb-6">Scoring & Results</h3>
          <div className="grid  xs:grid-cols-1 grid-cols-3  gap-8">
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">10-90</div>
              <p className="text-white/60">Score Range</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">24-48h</div>
              <p className="text-white/60">Results Available</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">2 Years</div>
              <p className="text-white/60">Score Validity</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay -z-10" />
    </div>
  )
}

export default PTEAcademic