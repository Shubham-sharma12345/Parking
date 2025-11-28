import React from "react";
import { FaCheck } from "react-icons/fa"; // tick icon
import hero1 from "../images/shakinggg.jpeg"; 
import hero2 from "../images/shaking.jpg";

const features = [
  "Real-time parking availability updates",
  "Secure online booking & payments",
  "Easy cancellation & modification options",
  "24/7 customer support for smooth parking"
];

const Hero = () => {
  return (
    <div className="w-full bg-[#fafafa] py-16 px-10 flex flex-col md:flex-row items-center justify-between">

     
      <div className="max-w-xl space-y-4">
        <h1 className="text-4xl font-bold leading-tight">
          Smart <span className="text-amber-400 ">Parking</span> Solutions <br />
          for a Smarter City
        </h1>

        <p className="text-gray-600">
          ParkEase is your one-stop platform to find, book, and manage parking with ease.
          We simplify parking by offering real-time availability, secure bookings,
          and a seamless experience across all devices.
        </p>

        <ul className="space-y-2 text-gray-700">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <FaCheck className="text-yellow-400 w-3 h-3 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>

        <button className="bg-amber-400 text-white mt-4 px-6 py-3 rounded-md hover:bg-amber-500">
          Learn More →
        </button>
      </div>

     
      <div className="relative flex justify-center items-center w-[50%]"> 
        <div className="w-64 h-64 overflow-hidden rounded-l-full rounded-r-none shadow-lg">
          <img
            src={hero1}
            alt="parking"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute right-10 top-24 w-48 h-40 bg-[#f3e8d8] rounded-xl z-0"></div>

        <img
          src={hero2}
          alt="parking2"
          className="w-48 h-56 object-cover rounded-xl absolute right-6 top-10 shadow-xl z-10"
        />
      </div>

    </div>
  );
};

export default Hero;
