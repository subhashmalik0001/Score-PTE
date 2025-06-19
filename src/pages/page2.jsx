import React from "react";
import speak from "../assets/image 4.png";
import write from "../assets/image 6.png";
import read from "../assets/image 5.png";
import listen from "../assets/image 7.png";
const categories = [
  {
    title: "Speaking",
    img: speak,
  },
  {
    title: "Writing",
    img: write,
  },
  {
    title: "Reading",
    img: read,
  },
  {
    title: "Listening",
    img: listen,
  },
  
];

const Page2 = () => {
  return (
    <div className="w-full bg-white py-20 px-6 flex flex-col items-center text-center">
      {/* Heading */}
      <h2 className="text-6xl sm:text-7xl font-light mb-20 tracking-tight leading-tight">
        <span className="bg-gradient-to-r from-gray-400 via-gray-600 to-gray-800 bg-clip-text text-transparent">Ready to</span>{' '}
        <span className="font-extrabold text-black">level </span>
        <span className="bg-gradient-to-r from-gray-400 via-gray-600 to-gray-800 bg-clip-text text-transparent">up ?</span>{' '}
      </h2>

      {/* Horizontal Category Icons */}
      <div className="flex flex-wrap justify-center gap-16 mb-32">
        {categories.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={item.img}
              alt={item.title}
              className="h-28 w-28 object-contain"
            />
            <p className="mt-6 text-md sm:text-lg text-gray-700 tracking-wide font-light">
              {item.title}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom Text */}
      <div className="text-center px-4 max-w-3xl">
        <p className="uppercase text-sm text-gray-500 tracking-widest mb-4">
          . Polished . Prepared . PowerFull 
        </p>
        
        <h3 className="text-5xl sm:text-6xl font-light text-gray-800 mb-6">
          From Practice to <span className="font-medium">Perfection</span>
        </h3>
        <p className="text-gray-600 text-lg">
        No fluff. Just results. Because here, your score must grow.
        </p>
      </div>
    </div>
  );
};

export default Page2;
