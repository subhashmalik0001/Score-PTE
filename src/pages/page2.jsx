"use client"
import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Sparkles, ArrowUpRight } from "lucide-react";
import { FaMicrophoneAlt, FaPenFancy, FaBookReader, FaHeadphonesAlt } from "react-icons/fa";

const categories = [
  { title: "Speaking", icon: <FaMicrophoneAlt size={22} />, desc: "Master oral fluency & pronunciation.", img: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=400&h=300&fit=crop&crop=center", delay: 0.1 },
  { title: "Writing", icon: <FaPenFancy size={22} />, desc: "Precision grammar & essay structuring.", img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop&crop=center", delay: 0.2 },
  { title: "Reading", icon: <FaBookReader size={22} />, desc: "Speed comprehension & vocabulary.", img: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop&crop=center", delay: 0.3 },
  { title: "Listening", icon: <FaHeadphonesAlt size={22} />, desc: "Audio retention & note-taking.", img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop&crop=center", delay: 0.4 },
];

const CategoryCard = ({ item }) => {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring physics for the 3D tilt
  const mouseX = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseY = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-7, 7]);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXRelative = e.clientX - rect.left;
    const mouseYRelative = e.clientY - rect.top;
    x.set(mouseXRelative / width - 0.5);
    y.set(mouseYRelative / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: item.delay, duration: 0.8 }}
      className="group relative p-8 rounded-[2.5rem] bg-[#E7F0FA]/5 border border-[#E7F0FA]/10 backdrop-blur-xl overflow-hidden cursor-pointer"
    >
      {/* MAGNETIC SPOTLIGHT: Follows the mouse for a lens-flare effect */}
      <motion.div 
        className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([mx, my]) => `radial-gradient(400px circle at ${mx * 100 + 50}% ${my * 100 + 50}%, rgba(59, 130, 246, 0.15), transparent 80%)`
          )
        }}
      />
      
      <div className="relative z-10" style={{ transform: "translateZ(30px)" }}>
        <div className="mb-6 text-blue-400 p-3 bg-blue-500/10 w-fit rounded-2xl border border-blue-500/20 group-hover:scale-110 transition-transform duration-500">
          {item.icon}
        </div>
        <h3 className="text-2xl font-bold mb-2 tracking-tight">{item.title}</h3>
        <p className="text-sm text-[#E7F0FA]/50 font-medium leading-relaxed mb-8">{item.desc}</p>
        
        <div className="relative h-40 w-full flex justify-center">
          <motion.img 
            src={item.img} 
            alt={item.title} 
            className="h-[120px] w-full object-cover rounded-2xl filter saturate-[0.8] group-hover:saturate-100 group-hover:scale-110 transition-all duration-700 shadow-2xl"
          />
        </div>
      </div>

      <div className="absolute top-8 right-8 xs:right-0 p-2 rounded-full bg-white/5 border border-white/10 text-[#E7F0FA]/40 group-hover:text-white group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-500">
        <ArrowUpRight size={20} />
      </div>
    </motion.div>
  );
};

const Page2 = () => {
  return (
    <div className="min-h-screen  bg-[#0D2440] text-[#E7F0FA] py-24 px-6 relative selection:bg-blue-500 selection:text-white">
      
      {/* BACKGROUND DECORATION: Cinematic Light Leaks */}
      <div className="absolute xs:left-0 top-0 left-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 xs:right-0 w-96 h-96 bg-fuchsia-600/10 blur-[120px] rounded-full pointer-events-none" />

      {/* 1. HERO SECTION */}
      <div className=" min-w-full px-[5%]  xs:px-[2%]   flex flex-col items-center text-center mb-32 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
        >
          <Sparkles size={14} className="text-blue-400" />
          <span className="text-[10px]   font-black uppercase tracking-[0.4em] text-blue-100/70">Neural Matrix v2.0</span>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, filter: "blur(15px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2 }}
          className="xs:text-6xl text-9xl font-black tracking-tighter leading-[0.85] uppercase"
        >
          READY TO <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#E7F0FA] via-[#E7F0FA] to-[#E7F0FA]/20">
            LEVEL UP?
          </span>
        </motion.h2>
      </div>

      {/* 2. CATEGORY BENTO GRID */}
      <div className=" min-w-full px-[2%] xs:px-[2%]   grid xs:grid-cols-1   grid-cols-3   gap-8 mb-40 relative z-10">
        {categories.map((item, index) => (
          <CategoryCard key={index} item={item} />
        ))}
      </div>

      {/* 3. TRANSITION STRIP */}
      <div className="w-full relative py-28 border-y border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent" />
        <div className=" min-w-full px-[5%] xs:px-[2%]   mx-auto flex flex-col items-center relative z-10">
          <span className="text-[11px] font-bold tracking-[0.8em] text-blue-400/60 mb-6 uppercase">
            Architectural Insights
          </span>
          <h4 className="text-3xl md:text-6xl font-extralight text-[#E7F0FA] text-center tracking-tight  max-w-full px-[5%] xs:px-[2%]  ll px-[5%] xs:px-[2%]  ll px-[5%] xs:px-[2%]   leading-tight">
            A surgical approach to the <br />
            <span className="font-bold italic text-white underline decoration-blue-500/30 underline-offset-8">test environment</span>
          </h4>
        </div>
      </div>

      {/* 4. FOOTER QUOTE */}
      <div className="mt-48 text-center flex flex-col items-center relative z-10">
        <div className="flex items-center gap-6 mb-12 text-[10px] font-black uppercase tracking-[0.5em] text-[#E7F0FA]/30">
          <span>Polished</span>
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
          <span>Prepared</span>
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
          <span>Powerful</span>
        </div>
        <h1 className="max-w-5xl text-5xl md:text-[7rem] font-black leading-[0.9] tracking-tighter uppercase italic">
          FROM PRACTICE <br /> 
          <span className="text-blue-500">TO</span> PERFECTION
        </h1>
      </div>

      {/* Background Noise Texture */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
    </div>
  );
};

export default Page2;