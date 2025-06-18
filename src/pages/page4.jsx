import React from "react";

const images = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1200px-IBM_logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1200px-Microsoft_logo_%282012%29.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1200px-Apple_logo_black.svg.png",
];

const Page4 = () => {
  const repeatedImages = [...images, ...images]; // For seamless loop

  return (
    <div className="w-full h-[50vh] bg-white overflow-hidden py-10">
      <div
        className="flex gap-8 whitespace-nowrap group hover:[animation-play-state:paused] px-6"
        style={{
          animation: "scroll 15s linear infinite",
          animationFillMode: "forwards",
          animationDirection: "normal",
          animationIterationCount: "infinite",
          animationTimingFunction: "linear",
        }}
      >
        {repeatedImages.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`sponsor-${idx}`}
            className="inline-block object-contain"
            style={{
              width: "200px",
              height: "100px",
            }}
          />
        ))}
      </div>

    </div>
  );
};

export default Page4;
