import React from "react";

const images = [
  "https://educationvibes.in/assets/images/Test_centres.png",
  "https://cdn.prod.website-files.com/62babb554236d9c8c7236fec/6788b97d64815ea082a9dba8_student%20(2).webp",
  "https://www.gurully.com/assets-new/images/exam-pattern.svg",
  "https://www.gurully.com/assets-new/images/complete-guide-pte-exam.svg",
  "https://ptenote.com/wp-content/uploads/sites/3/2023/09/7766409_3757762-1-1024x1024.jpg",
  "https://ptedesk.com/images/homepage/landingpage4.png",
  "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a",
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
];

const Page3 = () => {
  return (
    <div className="w-full bg-white py-16 overflow-hidden">
      <div
        className="whitespace-nowrap flex gap-8 group hover:[animation-play-state:paused] px-6"
        style={{
          animation: "scroll 15s linear infinite",
          animationFillMode: "forwards",
          animationDirection: "normal",
          animationIterationCount: "infinite",
          animationTimingFunction: "linear",
        }}
      >
        {images.concat(images).map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`decor-${i}`}
            className="w-[350px] h-[450px] object-cover rounded-xl shadow-md inline-block"
          />
        ))}
      </div>

      <div className="text-center mt-16">
        <h2 className="text-5xl font-light text-gray-800">What we are working on</h2>
        <p className="mt-4 text-lg text-gray-500">
          Faster, Smarter, and Stress Free
        </p>
      </div>
    </div>
  );
};

export default Page3;
