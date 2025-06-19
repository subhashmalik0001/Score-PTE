import React from "react";
import main from "../assets/image 2.png";

const Page1 = () => {
  return (
    <div className="w-screen h-screen overflow-hidden flex items-center justify-center">
      <img
        src={main}
        alt="Nama Home Landing Page"
        className="w-full h-full max-w-full max-h-full object-contain"
        draggable={true}
      />
    </div>
  );
};

export default Page1;
