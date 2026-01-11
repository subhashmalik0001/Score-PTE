import React from 'react';

const SpinLoader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0D2440]">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin"></div>
        <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-r-purple-500 rounded-full animate-spin animation-delay-150"></div>
      </div>
    </div>
  );
};

export default SpinLoader;