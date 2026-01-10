import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import {
  CheckCircle,
  Users,
  Target,
  BookOpen,
  Monitor,
  Headphones,
  PenTool,
  Eye,
  MessageSquare,
  Award,
  Globe,
  ArrowRight,
  Star,
  TrendingUp,
  Shield,
  Zap,
  Brain,
  Lightbulb,
  Sparkles,
} from "lucide-react"
import Navbar from "../components/Navbar"

function AnimatedCounter({ end, duration = 2000, suffix = "" }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime
    let animationFrame

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

function InteractiveFeatureCard({ icon: Icon, title, description, stats, delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-all"
    >
      <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-blue-400" />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
      <p className="text-white/60 mb-4">{description}</p>
      {stats && (
        <div className="space-y-2">
          {stats.map((stat, index) => (
            <div key={index} className="flex justify-between text-sm">
              <span className="text-white/60">{stat.label}</span>
              <span className="font-semibold text-blue-400">{stat.value}</span>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  )
}

export default function About() {
  const [activeSkill, setActiveSkill] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSkill((prev) => (prev + 1) % 4)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const skills = [
    {
      icon: MessageSquare,
      name: "Speaking",
      description: "Develop fluency, pronunciation, and confidence with our advanced speaking modules and real-time feedback systems.",
      progress: 95,
    },
    {
      icon: PenTool,
      name: "Writing",
      description: "Master essay structure, grammar, and vocabulary with our comprehensive writing training and expert feedback.",
      progress: 92,
    },
    {
      icon: Eye,
      name: "Reading",
      description: "Enhance comprehension, speed, and accuracy with our targeted reading strategies and practice materials.",
      progress: 98,
    },
    {
      icon: Headphones,
      name: "Listening",
      description: "Sharpen your listening skills with authentic audio materials and proven techniques for better comprehension.",
      progress: 94,
    },
  ]

  return (
    <>
       <Navbar/>
    <div className="min-h-screen bg-[#0D2440] text-[#E7F0FA] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)] pointer-events-none" />
      
      <section className="relative py-20 px-6">
        <div className="max-w-full px-[5%] xs:px-[2%] mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-black tracking-[0.3em] text-blue-400">
                ESTABLISHED BY PTE TESTING EXPERTS
              </span>
            </div>
            
            <h1 className="xs:text-5xl text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
              Empowering Your Journey to
              <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20"> PTE Success</span>
            </h1>
            
            <p className="max-w-2xl mx-auto text-[#E7F0FA]/50 text-lg font-medium leading-relaxed">
              Where passion meets precision. At Score PTE, we transform your PTE preparation from practice to perfection with our motto: "Score Must Grow"
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-full px-[5%] xs:px-[2%] mx-auto mb-20">
        <div className="grid xs:grid-cols-2 grid-cols-4 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center backdrop-blur-sm"
          >
            <div className="text-3xl font-bold text-white mb-2">
              <AnimatedCounter end={5000} suffix="+" />
            </div>
            <p className="text-white/60">Students Trained</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center backdrop-blur-sm"
          >
            <div className="text-3xl font-bold text-white mb-2">
              <AnimatedCounter end={98} suffix="%" />
            </div>
            <p className="text-white/60">Success Rate</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center backdrop-blur-sm"
          >
            <div className="text-3xl font-bold text-white mb-2">
              <AnimatedCounter end={15} suffix="+" />
            </div>
            <p className="text-white/60">Years Experience</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center backdrop-blur-sm"
          >
            <div className="text-3xl font-bold text-white mb-2">
              <AnimatedCounter end={50} suffix="+" />
            </div>
            <p className="text-white/60">Countries Served</p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-full px-[5%] xs:px-[2%] mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Built on Expertise, Driven by Your Success</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Score PTE is established by experts with deep insight into PTE testing, bringing years of expertise directly to your preparation.
          </p>
        </motion.div>

        <div className="grid xs:grid-cols-1 grid-cols-2 gap-8">
          <InteractiveFeatureCard
            icon={Target}
            title="Expert-Led"
            description="Deep PTE testing insights from certified professionals"
            stats={[{ label: "Expert Trainers", value: "25+" }]}
            delay={100}
          />
          <InteractiveFeatureCard
            icon={Users}
            title="Student-Focused"
            description="Personalized preparation tailored to individual needs"
            stats={[{ label: "Success Rate", value: "98%" }]}
            delay={200}
          />
          <InteractiveFeatureCard
            icon={BookOpen}
            title="Comprehensive"
            description="Complete coverage of all PTE exam types and formats"
            stats={[{ label: "Exam Types", value: "4" }]}
            delay={300}
          />
          <InteractiveFeatureCard
            icon={Award}
            title="Proven Results"
            description="Consistent score improvements with our Score Must Grow philosophy"
            stats={[{ label: "Avg. Improvement", value: "15pts" }]}
            delay={400}
          />
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-full px-[5%] xs:px-[2%] mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Master All Four Skills</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            From practice to perfection in Speaking, Writing, Reading, and Listening
          </p>
        </motion.div>

        <div className="grid xs:grid-cols-1 grid-cols-2 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{skill.name}</h3>
                </div>
                <p className="text-white/60 mb-6">{skill.description}</p>
                <div className="flex items-center gap-3">
                  <div className="flex-1 bg-white/10 rounded-full h-2">
                    <div 
                      className="bg-blue-400 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.progress}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium text-blue-400">{skill.progress}%</span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-full px-[5%] xs:px-[2%] mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8 text-center backdrop-blur-sm"
        >
          <Globe className="w-12 h-12 text-blue-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Excel Globally?</h3>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Join thousands of successful students who have achieved their PTE goals with Score PTE. Your journey from practice to perfection starts here.
          </p>
          
          <motion.a 
            href="/course"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-3 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Start Your Preparation Today
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </section>
      
      {/* Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay -z-10" />
    </div>
    </>
  )
}
