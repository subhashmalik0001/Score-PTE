import React from "react";
import main from "../assets/image 2.png";

const Page1 = () => {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <img
        src={main}
        alt="Nama Home Landing Page"
        className="w-full h-full object-cover"
        draggable={true}
      />
    </div>
  );
};

export default Page1;
