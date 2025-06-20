import React from "react";

const Page5 = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-center items-center px-4 min-h-screen md:px-6">
      <p className="uppercase tracking-[0.25em] text-gray-400 text-xs md:text-sm mb-4">
        What we are working on
      </p>

      <div className="text-center space-y-4 leading-snug max-w-6xl">
        {/* Most bold & dark */}
        <p
          className="text-2xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent"
          style={{
            display: "inline-block",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          At Score PTE, we blend advanced technology
        </p>

        {/* Second in hierarchy */}
        <p className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-900">
          elite training methodologies,
        </p>

        {/* Third in hierarchy */}
        <p className="text-base sm:text-xl md:text-2xl font-medium text-gray-800">
          and deep exam insight to deliver results that speak for themselves
        </p>
        <p className="text-base sm:text-xl md:text-2xl font-medium text-gray-800">
          With every tool tailored for your success
        </p>
        <p className="text-base sm:text-xl md:text-2xl font-medium text-gray-800">
          we're not just preparing you for the test — we're preparing you to
          excel.
        </p>

        {/* Highlighted result line */}
        <p className="text-lg sm:text-2xl md:text-3xl font-semibold text-gray-900">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-300 font-extrabold">
            Just results.
          </span>
        </p>

        {/* Closing line */}
        <p className="text-lg sm:text-2xl md:text-3xl font-semibold text-gray-900">
          Because here, your score must grow.
        </p>
      </div>
    </div>
  );
};

export default Page5;
