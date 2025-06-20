import React from "react";

const Page7 = () => {
  return (
    <div className="w-full h-[50vh] bg-[#2b2b2b] text-white flex flex-col items-center justify-center px-6 space-y-4 text-center">
      {/* Section Heading */}
      <p className="uppercase tracking-widest text-gray-400 text-xs md:text-sm">
        Ink & Pixels
      </p>

      {/* Main Title */}
      <h1 className="text-3xl md:text-5xl font-light">
        Seen Score PTE Lately?
        <span 
          className="font-extrabold bg-gradient-to-r from-gray-800 via-gray-100 to-gray-800 bg-clip-text text-transparent"
          style={{
            display: 'inline-block',
           
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          
        </span> 
      </h1>

      {/* Description */}
      <p className="max-w-xl text-sm md:text-lg text-gray-300 leading-relaxed">
      As a rising brand built on passion, trust, and student success — your love means everything to us.
Each score shared reminds us why we started.

      </p>

      {/* Email Link */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        <span>Drop your Score Card with Reviews on</span>
        <a
          className="text-blue-300 underline text-sm md:text-base hover:text-blue-400 transition"
        >
          @telegram handle
        </a>
      </div>
    </div>
  );
};

export default Page7;
