import React from "react";
import parking from "../images/parking.jpg"
const Banner = () => {
  return (
    <div className="relative w-full h-[40vh]">
      <img
        src={parking} className="w-full h-full object-cover" alt="car parking"
      />

     
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black/30">
        <h1 className="text-2xl ">SAFE & SECURE PARKING</h1>
        <p className=" text-5xl mt-2 font-bold shadow ">PREMIUM PARKING SERVICE</p>

        <button className="mt-4 bg-amber-400 px-6 py-2 rounded text-white font-semibold">
         View Packages
        </button>
      </div>
    </div>
  );
};

export default Banner;
