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
      Seen Score 
      <span className="grey-gradient-animation heading-block-template--15485701095535__9edc3c33-102e-439f-a880-888eac95cb21-heading-1"> PTE Lately?</span> 
      </h1>

      {/* Description */}
      <p className="max-w-xl text-sm md:text-lg text-gray-300 leading-relaxed">
      As a rising brand built on passion, trust, and student success — your love means everything to us.
Each score shared reminds us why we started.

      </p>

      {/* Email Link */}
      <a
       
        className="text-blue-300 underline text-sm md:text-base hover:text-blue-400 transition"
      >
        @scorepte_explains telegram handle 
      </a>
    </div>
  );
};

export default Page7;
