import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Mic, PenTool, Eye, Headphones, BookOpen } from "lucide-react";

const Practice = () => {
  const [activeTab, setActiveTab] = useState("academic"); // "academic" | "core"

  const data = {
    academic: {
      tab1: "PTE Academic / UKVI",
      tab2: "PTE Core",
      speaking: [
        { label: "Read Aloud", ai: true },
        { label: "Repeat Sentence", ai: true },
        { label: "Describe Image", ai: true },
        { label: "Retell Lecture", ai: true },
        { label: "Answer Short Question", ai: true },
        { label: "Summarize Group Discussion", ai: true, badge: "New" },
        { label: "Respond to a Situation", ai: true, badge: "New" },
        { label: "Respond to a Situation (Core)", disabled: true },
      ],
      writing: [
        { label: "Summarize Written Text", ai: true },
        { label: "Write Essay", ai: true },
        { label: "Summarize Written Text (Core)", disabled: true },
        { label: "Write Email (Core)", disabled: true },
      ],
      reading: [
        { label: "Fill in the Blanks (Dropdown)" },
        { label: "Multiple Choice (Multiple)" },
        { label: "Reorder Paragraph" },
        { label: "Fill in the Blanks (Drag and Drop)" },
        { label: "Multiple Choice (Single)" },
      ],
      listening: [
        { label: "Summarize Spoken Text", ai: true },
        { label: "Multiple Choice (Multiple)" },
        { label: "Fill in the Blanks" },
        { label: "Highlight Correct Summary" },
        { label: "Multiple Choice (Single)" },
        { label: "Select Missing Word" },
        { label: "Highlight Incorrect Words" },
        { label: "Write from Dictation" },
        { label: "Summarize Spoken Text (Core)", disabled: true },
      ],
      more: [
        { label: "Vocab Books" },
        { label: "Shadowing" },
        { label: "AI Score Report Analysis" },
        { label: "AI Study Plan" },
        { label: "Mock Tests" },
        { label: "Study Materials Download" },
      ],
    },

    core: {
      tab1: "PTE Core",
      tab2: "PTE Academic / UKVI",
      speaking: [
        { label: "Read Aloud", ai: true },
        { label: "Repeat Sentence", ai: true },
        { label: "Describe Image", ai: true },
        { label: "Answer Short Question", ai: true },
        { label: "Respond to a Situation", ai: true },
        { label: "Retell Lecture (PTEA)", disabled: true },
        { label: "Summarize Group Discussion (PTEA)", disabled: true },
        { label: "Respond to a Situation (PTEA)", disabled: true },
      ],
      writing: [
        { label: "Summarize Written Text", ai: true },
        { label: "Write Email", ai: true },
        { label: "Summarize Written Text (PTEA)", disabled: true },
        { label: "Write Essay (PTEA)", disabled: true },
      ],
      reading: [
        { label: "Fill in the Blanks (Dropdown)" },
        { label: "Multiple Choice (Multiple)" },
        { label: "Reorder Paragraph" },
        { label: "Fill in the Blanks (Drag and Drop)" },
        { label: "Multiple Choice (Single)" },
      ],
      listening: [
        { label: "Summarize Spoken Text", ai: true },
        { label: "Multiple Choice (Multiple)" },
        { label: "Fill in the Blanks" },
        { label: "Multiple Choice (Single)" },
        { label: "Select Missing Word" },
        { label: "Highlight Incorrect Words" },
        { label: "Write from Dictation" },
        { label: "Summarize Spoken Text (PTEA)", disabled: true },
        { label: "Highlight Correct Summary (PTEA)", disabled: true },
      ],
      more: [
        { label: "Vocab Books" },
        { label: "Shadowing" },
        { label: "AI Score Report Analysis" },
        { label: "AI Study Plan" },
        { label: "Mock Tests" },
        { label: "Study Materials Download" },
      ],
    },
  };

  const current = activeTab === "academic" ? data.academic : data.core;

  const sectionIcons = {
    Speaking: Mic,
    Writing: PenTool,
    Reading: Eye,
    Listening: Headphones,
    More: BookOpen,
  };

  const Section = ({ title, items }: { title: keyof typeof sectionIcons; items: Array<{ label: string; ai?: boolean; badge?: string; disabled?: boolean }> }) => {
    const Icon = sectionIcons[title];
    
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-all"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
            <Icon className="w-5 h-5 text-blue-400" />
          </div>
          <h3 className="text-lg font-bold text-white">{title}</h3>
        </div>

        <div className="space-y-3">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2">
              {item.badge && (
                <span className="text-[10px] px-2 py-1 rounded-full bg-red-500 text-white leading-none mt-1">
                  {item.badge}
                </span>
              )}

              <button
                className={`text-left text-sm leading-5 transition ${
                  item.disabled
                    ? "text-white/30 cursor-not-allowed"
                    : "text-white/80 hover:text-white"
                }`}
                disabled={item.disabled}
                onClick={() => !item.disabled && window.open('https://t.me/Scorepte_explains', '_blank')}
              >
                {item.label}{" "}
                {item.ai && (
                  <span className="text-yellow-400 text-xs font-medium">
                    AI Score
                  </span>
                )}
              </button>
            </div>
          ))}
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-[#0D2440] text-[#E7F0FA] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)] pointer-events-none" />
      
      {/* Hero Section */}
      <section className="relative pt-14 pb-12 px-6">
        <div className="max-w-full px-[5%] xs:px-[2%] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-black tracking-[0.3em] text-blue-400">
                AI-POWERED PRACTICE
              </span>
            </div>
            
            <h1 className="xs:text-5xl text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
              PTE <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">Practice</span>
            </h1>
            
            <p className="max-w-2xl mx-auto text-[#E7F0FA]/50 text-lg font-medium leading-relaxed">
              Master all PTE question types with AI-powered scoring and comprehensive practice materials.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tabs */}
      <section className="max-w-full px-[5%] xs:px-[2%] mx-auto mb-8">
        <div className="flex gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => setActiveTab("academic")}
            className={`px-8 py-3 rounded-xl font-semibold text-sm transition-all ${
              activeTab === "academic"
                ? "bg-blue-500 text-white shadow-lg"
                : "bg-white/10 text-white/60 hover:bg-white/20 hover:text-white"
            }`}
          >
            {current.tab1}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => setActiveTab("core")}
            className={`px-8 py-3 rounded-xl font-semibold text-sm transition-all ${
              activeTab === "core"
                ? "bg-blue-500 text-white shadow-lg"
                : "bg-white/10 text-white/60 hover:bg-white/20 hover:text-white"
            }`}
          >
            {current.tab2}
          </motion.button>
        </div>
      </section>

      {/* Practice Sections */}
      <section className="max-w-full px-[5%] xs:px-[2%] mx-auto pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          <Section title="Speaking" items={current.speaking} />
          <Section title="Writing" items={current.writing} />
          <Section title="Reading" items={current.reading} />
          <Section title="Listening" items={current.listening} />
          <Section title="More" items={current.more} />
        </div>
      </section>
      
      {/* Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay -z-10" />
    </div>
  );
};

export default Practice;
