import React from "react";
import { FaMapMarkerAlt, FaCalendarCheck, FaCar, FaShieldAlt } from "react-icons/fa";

const StepsSection = () => {
  return (
    <div className="w-full bg-black py-16 px-10 rounded-tl-[90px] rounded-br-[100px]   ">

    
      <div className="text-center text-white mb-10">
        <p className="text-amber-400 text-sm font-semibold">HOW IT WORKS</p>
        <h2 className="text-3xl font-bold mt-2">
          Simple <span className="text-amber-400">Steps</span> to Get Started
        </h2>
      </div>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center">

       
        <div className="bg-[#2a2a2a] p-3 rounded-xl text-center shadow-md">
          <div className="w-12 h-12 bg-amber-100 rounded-xl mx-auto flex items-center justify-center">
            <FaMapMarkerAlt className="text-amber-500 text-xl" />
          </div>
          <h3 className="text-white font-semibold mt-4">Choose Your Location</h3>
          <p className="text-gray-400 text-sm mt-2">
            Select the nearest available parking spot in your area.
          </p>
        </div>

      
        <div className="bg-[#2a2a2a] p-6 rounded-xl text-center shadow-md">
          <div className="w-12 h-12 bg-amber-100 rounded-xl mx-auto flex items-center justify-center">
            <FaCalendarCheck className="text-amber-500 text-xl" />
          </div>
          <h3 className="text-white font-semibold mt-4">Book Your Slot</h3>
          <p className="text-gray-400 text-sm mt-2">
            Reserve a parking spot instantly with flexible time options.
          </p>
        </div>

     
        <div className="bg-[#2a2a2a] p-6 rounded-xl text-center shadow-md">
          <div className="w-12 h-12 bg-amber-100 rounded-xl mx-auto flex items-center justify-center">
            <FaCar className="text-amber-500 text-xl" />
          </div>
          <h3 className="text-white font-semibold mt-4">Park Your Vehicle</h3>
          <p className="text-gray-400 text-sm mt-2">
            Arrive at your spot easily with guided directions and support.
          </p>
        </div>

        <div className="bg-[#2a2a2a] p-6 rounded-xl text-center shadow-md">
          <div className="w-12 h-12 bg-amber-100 rounded-xl mx-auto flex items-center justify-center">
            <FaShieldAlt className="text-amber-500 text-xl" />
          </div>
          <h3 className="text-white font-semibold mt-4">Enjoy Peace of Mind</h3>
          <p className="text-gray-400 text-sm mt-2">
            Your vehicle stays safe with our smart monitoring.
          </p>
        </div>

      </div>
    </div>
  );
};

export default StepsSection;
