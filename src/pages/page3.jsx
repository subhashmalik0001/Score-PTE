import React from "react";
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

const Page3 = () => {
  const repeatedImages = [...images, ...images]; // For seamless loop

  return (
    <div className="w-full h-[50vh] bg-gray-100 overflow-hidden py-10">
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
      
      <div
        className="flex gap-8 whitespace-nowrap group hover:[animation-play-state:paused] px-6"
        style={{
          animation: "scroll 3s linear infinite",
          animationFillMode: "forwards",
          animationDirection: "normal",
          animationIterationCount: "infinite",
          animationTimingFunction: "linear",
        }}
      >
        {repeatedImages.map((src, idx) => (
          <div
            key={idx}
            className="inline-block bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300"
            style={{
              width: "500px",
              height: "400px",
              minWidth: "400px",
            }}
          >
            <img
              src={src}
              alt={`sponsor-${idx}`}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page3;
