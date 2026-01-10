"use client"
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import main from "../assets/logo.JPG";

const Page1 = () => {
  const { scrollY } = useScroll();
  
  // Parallax effects for that cinematic depth
  const textY = useTransform(scrollY, [0, 500], [0, 150]);
  const imageY = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
const LIVE_IMAGE_URL =
  "https://integrio.net/static/398e62fe7c80d242601374fb5272f391/best-enterprise-software-development-company.png";

  return (
    <section className="relative xs:py-10 min-h-screen w-full bg-[#0D2440] overflow-hidden flex xs:flex-col flex-row items-center">
      
      {/* SECTION 1: THE TEXT NARRATIVE (Left) */}
      <motion.div 
        style={{ y: textY, opacity }}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="xs:w-full w-[45%] z-20 px-8 pl-24 xs:pl-0 flex flex-col justify-center gap-6"
      >
        <div className="flex items-center gap-3">
          <div className="w-12 h-[1px] bg-[#E7F0FA]/30" />
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#E7F0FA]/60">
            Evolution of Testing
          </span>
        </div>

        <h1 className="text-9xl  xs:text-5xl font-black text-[#E7F0FA] leading-[0.85] tracking-tighter">
          PTE <br />
          <span className="italic font-light text-[#E7F0FA]/80">Intelligence.</span>
        </h1>

        <p className="max-w-md text-[#E7F0FA]/50 text-lg font-light leading-relaxed">
          Bridging the gap between human potential and digital assessment. 
          Step into a testing environment designed for peak performance.
        </p>

        <div className="mt-4 flex items-center gap-8">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative flex items-center gap-4 text-[#E7F0FA] uppercase text-xs font-bold tracking-widest"
          >
            <div className="w-12 h-12 rounded-full border border-[#E7F0FA]/20 flex items-center justify-center group-hover:bg-[#E7F0FA] group-hover:text-[#0D2440] transition-all duration-500">
              →
            </div>
            Begin Assessment
          </motion.button>
        </div>
      </motion.div>

      {/* SECTION 2: THE CINEMATIC VISUAL (Right) */}
    {/* SECTION 2: CINEMATIC LIVE IMAGE */}
<motion.div
  style={{ y: imageY }}
  initial={{ scale: 1.15, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
  className="xs:w-full w-[55%] h-full relative"
>
  {/* Decorative Ring */}
  <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-40 h-40 border border-[#E7F0FA]/10 rounded-full z-10 xs:hidden block" />

  <div className="relative w-full xs:h-[70vh] h-screen overflow-hidden">
    {/* Color overlays for blending */}
    <div className="absolute inset-0 bg-[#0D2440]/50 mix-blend-multiply z-10" />
    <div className="absolute inset-0 bg-gradient-to-r from-[#0D2440] via-transparent to-transparent z-10" />

    {/* LIVE IMAGE */}
    <motion.img
      src={main}
      alt="PTE Exam Environment"
      className="w-full h-full xs:object-contain object-cover"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 2 }}
    />

    {/* Floating Metric */}
    <motion.div
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1 }}
      className="absolute top-1/4 right-12 z-20 p-8 rounded-[2rem]
                 bg-[#E7F0FA]/5 backdrop-blur-2xl border border-[#E7F0FA]/10 shadow-2xl"
    >
      <span className="text-[#E7F0FA]/40 text-[10px] uppercase font-bold tracking-widest">
        Success Rate
      </span>
      <h3 className="text-[#E7F0FA] text-4xl font-bold mt-1">99.8%</h3>
    </motion.div>
  </div>
</motion.div>


      {/* Global Grain Texture for "Film" look */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
    </section>
  );
};

export default Page1;





// import React from "react";
// import main from "../assets/image 2.png";

// const Page1 = () => {
//   return (
//     <div className="absolute w-full h-[60vh] md:h-[100vh]">
//     <img
//       src={main}
//       alt="PTE Testing Center - Computer lab with workstations for PTE Academic preparation and testing"
//       className="w-full h-full object-cover"
//     />
//   </div>
  
//   );
// };

// export default Page1;
