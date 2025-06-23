import React, { useState, useEffect } from "react";

// Mock images for demonstration - replace with your actual imports
import image10 from '../assets/image 10.png';
import image11 from '../assets/image 11.png';
import image12 from '../assets/image 12.png';
import image13 from '../assets/image 13.png';
import image14 from '../assets/image 14.png';

const images = [
  image10,
  image11,
  image12,
  image13,
  image14,
];

// Custom hook to get window width
function useWindowWidth() {
  const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
    
  useEffect(() => {
    if (typeof window === 'undefined') return;
        
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
    
  return width;
}

const Page3 = () => {
  const repeatedImages = [...images, ...images]; // Double for seamless loop
  const width = useWindowWidth();
  
  // Responsive configuration
  let boxConfig = { 
    width: width < 640 ? Math.min(250, width * 0.7) : 384,
    height: width < 640 ? 180 : 300,
    gap: width < 640 ? 12 : 32,
    duration: width < 640 ? '13s' : '12s'
  };
    
  if (width >= 640 && width < 1024) { // tablet
    boxConfig = { width: 320, height: 300, gap: 24, duration: '13s' };
  }
  
  // Calculate total scroll distance (all images)
  const totalScroll = (boxConfig.width + boxConfig.gap) * images.length;
  
  // Dynamic keyframes for all images
  const keyframes = `@keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-${totalScroll}px); } }`;
  
  return (
    <div className="w-full h-80 bg-gray-100 overflow-hidden mt-8 px-2 sm:px-0">
      <style jsx>{keyframes}</style>
            
      <div className="relative h-fit">
        <div
          className="flex whitespace-nowrap group hover:[animation-play-state:paused]"
          style={{
            animation: `scroll ${boxConfig.duration} linear infinite`,
            gap: `${boxConfig.gap}px`,
            paddingLeft: `${boxConfig.gap}px`,
            paddingRight: `${boxConfig.gap}px`,
          }}
        >
          {repeatedImages.map((src, idx) => (
            <div
              key={idx}
              className="inline-block bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 flex-shrink-0"
              style={{
                width: `${boxConfig.width}px`,
                height: `${boxConfig.height}px`,
                padding: width < 640 ? '8px' : '16px',
              }}
            >
              <img
                src={src}
                alt={`image-${idx}`}
                className="w-full h-full object-contain rounded"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page3;