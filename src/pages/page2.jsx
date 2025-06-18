import React from "react";

const categories = [
  {
    title: "Speaking",
    img: "https://img.freepik.com/premium-vector/speaking-icon-sign-talking-icon-voice-audio-icon-sign_1199668-997.jpg",
  },
  {
    title: "Writing",
    img: "https://cdn-icons-png.flaticon.com/512/2554/2554339.png",
  },
  {
    title: "Reading",
    img: "https://cdn-icons-png.flaticon.com/512/3068/3068380.png",
  },
  {
    title: "Listening",
    img: "https://media.istockphoto.com/id/1244097573/vector/headphones-minimal-icon-with-sound-waves.jpg?s=612x612&w=0&k=20&c=OvARZEMYt_CM9M9-oJmMZ3O-HtEB-CAKqpGZPSA1acM=",
  },
  
];

const Page2 = () => {
  return (
    <div className="w-full bg-white py-20 px-6 flex flex-col items-center text-center">
      {/* Heading */}
      <h2 className="text-6xl sm:text-7xl font-light mb-20 text-gray-800 tracking-tight leading-tight">
        Ready to level up
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
          Polished Prepared PowerFull
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
