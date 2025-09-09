import React, { useEffect, useState } from "react"
import { Button } from "../components/ui/button"
import { Card } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Progress } from "../components/ui/progress"
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
} from "lucide-react"

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
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <Card
      className={`p-6 transition-all duration-500 cursor-pointer transform hover:scale-105 hover:shadow-xl ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`transition-all duration-300 ${isHovered ? "scale-110" : "scale-100"}`}>
        <Icon className="h-12 w-12 text-accent mb-4" />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      {stats && (
        <div className="space-y-2">
          {stats.map((stat, index) => (
            <div key={index} className="flex justify-between text-sm">
              <span className="text-muted-foreground">{stat.label}</span>
              <span className="font-semibold text-accent">{stat.value}</span>
            </div>
          ))}
        </div>
      )}
    </Card>
  )
}

export default function About() {
  const [scrollY, setScrollY] = useState(0)
  const [activeSkill, setActiveSkill] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
      description:
        "Develop fluency, pronunciation, and confidence with our advanced speaking modules and real-time feedback systems.",
      progress: 95,
    },
    {
      icon: PenTool,
      name: "Writing",
      description:
        "Master essay structure, grammar, and vocabulary with our comprehensive writing training and expert feedback.",
      progress: 92,
    },
    {
      icon: Eye,
      name: "Reading",
      description:
        "Enhance comprehension, speed, and accuracy with our targeted reading strategies and practice materials.",
      progress: 98,
    },
    {
      icon: Headphones,
      name: "Listening",
      description:
        "Sharpen your listening skills with authentic audio materials and proven techniques for better comprehension.",
      progress: 94,
    },
  ]

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Hero */}
      <section className="relative text-white py-32 px-4 overflow-hidden bg-slate-900">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <Badge className="mb-6 text-sm font-medium animate-pulse text-white border-white/20 bg-slate-800">
            <Star className="w-4 h-4 mr-2" />
            Established by PTE Testing Experts
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-balance leading-tight text-white">
            Empowering Your Journey to
            <span className="text-yellow-300"> PTE Success</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-4xl mx-auto text-pretty leading-relaxed">
            Where passion meets precision. At Score PTE, we transform your PTE preparation from practice to perfection
            with our motto: <strong className="text-white font-bold">"Score Must Grow"</strong>
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 max-w-4xl mx-auto bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                <AnimatedCounter end={5000} suffix="+" />
              </div>
              <p className="text-sm text-white/80">Students Trained</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                <AnimatedCounter end={98} suffix="%" />
              </div>
              <p className="text-sm text-white/80">Success Rate</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                <AnimatedCounter end={15} suffix="+" />
              </div>
              <p className="text-sm text-white/80">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                <AnimatedCounter end={50} suffix="+" />
              </div>
              <p className="text-sm text-white/80">Countries Served</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-4 hover:scale-105 transition-transform bg-white text-slate-900 hover:bg-slate-100"
            >
              Start Your Success Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-slate-900 bg-transparent hover:scale-105 transition-transform"
            >
              Watch Success Stories
            </Button>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-4 bg-secondary relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                <Shield className="w-4 h-4 mr-2" />
                Our Foundation
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground leading-tight">
                Built on Expertise,
                <span className="text-accent"> Driven by Your Success</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Score PTE is established by experts with deep insight into PTE testing. Our founders understand every
                nuance of the PTE Academic, PTE Core, PTE UKVI, and PTE Home exams, bringing years of testing expertise
                directly to your preparation.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We believe that every student deserves personalized attention and cutting-edge resources. That's why
                we've built our platform on three pillars: <strong className="text-accent">passion for education</strong>, <strong className="text-accent">trust in our methods</strong>, and <strong className="text-accent">unwavering commitment to student success</strong>.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Certified Excellence</h4>
                    <p className="text-sm text-muted-foreground">ISO certified training methodologies</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Proven Track Record</h4>
                    <p className="text-sm text-muted-foreground">Consistent score improvements across all students</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
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
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-20 px-4 bg-gradient-to-br from-background to-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <Zap className="w-4 h-4 mr-2" />
              Innovation at Core
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground leading-tight">
              Technology-Driven Training &<span className="text-accent"> Elite Methodologies</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">
              Experience the future of PTE preparation with our state-of-the-art computerized testing center and
              innovative training approaches that adapt to your learning style.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 hover:shadow-2xl transition-all duration-300 group">
              <div className="mb-6 relative">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Monitor className="h-8 w-8 text-accent" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Computerized Testing Center</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Practice in our fully equipped testing center with dedicated workstations that simulate the real PTE
                exam environment with 100% accuracy.
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Real exam simulation</span>
                  <Progress value={100} className="w-20 h-2" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Individual workstations</span>
                  <Progress value={100} className="w-20 h-2" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Authentic test conditions</span>
                  <Progress value={100} className="w-20 h-2" />
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-2xl transition-all duration-300 group border-accent/20">
              <div className="mb-6 relative">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Brain className="h-8 w-8 text-accent" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <Star className="h-4 w-4 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Elite Methodologies</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our AI-powered strategies and techniques are developed by PTE experts to maximize your score potential
                across all skill areas with personalized learning paths.
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Expert-developed strategies</span>
                  <Progress value={95} className="w-20 h-2" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">AI-powered insights</span>
                  <Progress value={90} className="w-20 h-2" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Score optimization</span>
                  <Progress value={98} className="w-20 h-2" />
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-2xl transition-all duration-300 group">
              <div className="mb-6 relative">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Lightbulb className="h-8 w-8 text-accent" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                  <Users className="h-4 w-4 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Personalized Preparation</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Every student receives AI-customized training plans, dedicated support, and resources tailored to their
                specific needs, goals, and learning pace.
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Individual learning plans</span>
                  <Progress value={100} className="w-20 h-2" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">24/7 support teams</span>
                  <Progress value={100} className="w-20 h-2" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Real-time progress tracking</span>
                  <Progress value={95} className="w-20 h-2" />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Four Skills */}
      <section className="py-20 px-4 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <Target className="w-4 h-4 mr-2" />
              Skill Mastery
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground leading-tight">
              From Practice to
              <span className="text-accent"> Perfection in All Four Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">
              Master Speaking, Writing, Reading, and Listening with our comprehensive approach that takes you from basic
              practice to exam perfection through adaptive learning technology.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              {skills.map((skill, index) => {
                const Icon = skill.icon
                const isActive = activeSkill === index
                return (
                  <Card
                    key={index}
                    className={`p-6 cursor-pointer transition-all duration-500 ${
                      isActive ? "border-accent shadow-lg scale-105" : "hover:shadow-md"
                    }`}
                    onClick={() => setActiveSkill(index)}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                          isActive ? "bg-accent text-accent-foreground" : "bg-accent/10 text-accent"
                        }`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                        <div className="flex items-center gap-3 mb-2">
                          <Progress value={skill.progress} className="flex-1 h-2" />
                          <span className="text-sm font-medium text-accent">{skill.progress}%</span>
                        </div>
                        {isActive && (
                          <p className="text-muted-foreground text-sm animate-in slide-in-from-top-2 duration-300">
                            {skill.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>

            <div className="relative">
              <Card className="p-8 bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
                <div className="text-center">
                  <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    {React.createElement(skills[activeSkill].icon, { className: "h-12 w-12 text-accent" })}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{skills[activeSkill].name} Mastery</h3>
                  <p className="text-muted-foreground mb-6">{skills[activeSkill].description}</p>
                  <div className="flex justify-center">
                    <Progress value={skills[activeSkill].progress} className="w-32 h-3" />
                  </div>
                  <p className="text-sm text-accent font-semibold mt-2">{skills[activeSkill].progress}% Success Rate</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Support */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Comprehensive Support Every Step of the Way
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our platform provides everything you need for successful PTE preparation. From detailed handouts and
                interactive practice tools to dedicated support teams, we ensure you have all the resources necessary
                for success.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Comprehensive Handouts</h4>
                    <p className="text-sm text-muted-foreground">
                      Detailed study materials covering all exam sections and strategies
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Interactive Practice Tools</h4>
                    <p className="text-sm text-muted-foreground">
                      Advanced practice platforms with instant feedback and progress tracking
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Dedicated Support Teams</h4>
                    <p className="text-sm text-muted-foreground">
                      Expert instructors and support staff available throughout your journey
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Card className="p-8 bg-accent text-accent-foreground">
              <h3 className="text-2xl font-bold mb-4">Our Commitment to You</h3>
              <blockquote className="text-lg italic mb-4">
                "At Score PTE, we don't just teach test strategies – we build confidence, foster growth, and celebrate
                every milestone in your journey to success."
              </blockquote>
              <p className="font-semibold">- The Score PTE Team</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-white bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <Globe className="h-16 w-16 mx-auto mb-6 text-white/70" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance text-white">Ready to Excel Globally?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto text-pretty">
            Join thousands of successful students who have achieved their PTE goals with Score PTE. Your journey from
            practice to perfection starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-3 bg-white text-slate-900 hover:bg-slate-100 border-0"
            >
              Start Your Preparation Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              className="text-lg px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 transition-colors"
            >
              Learn More About Our Programs
            </Button>
          </div>
          <p className="mt-8 text-white/80">
            Because at Score PTE, your <strong className="text-white font-bold">Score Must Grow</strong> ✨
          </p>
        </div>
      </section>
    </div>
  )
}
