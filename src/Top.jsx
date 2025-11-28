import React from "react";
import { FaMapMarkerAlt, FaPhone, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Top = () => {
  return (
    <div className="w-full bg-gray-800">
      <div className="flex flex-col md:flex-row justify-between items-center px-4 py-2 shadow-md gap-2 md:gap-0">

        <div className="flex items-center gap-2 text-sm md:text-base">
          <FaMapMarkerAlt className="text-yellow-400 w-4 h-4 md:w-5 md:h-5" />
          <p className="text-white">St-4 New-York</p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
          <div className="flex items-center gap-1 text-sm md:text-base">
            <FaPhone className="text-yellow-400 w-4 h-4 md:w-5 md:h-5" />
            <p className="text-white">123-4534-322</p>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-7 h-7 md:w-8 md:h-8 rounded-full border border-white flex items-center justify-center hover:bg-gray-400 transition">
              <FaFacebookF className="w-4 h-4 text-yellow-400" />
            </div>
            <div className="w-7 h-7 md:w-8 md:h-8 rounded-full border border-white flex items-center justify-center hover:bg-gray-400 transition">
              <FaTwitter className="w-4 h-4 text-yellow-400" />
            </div>
            <div className="w-7 h-7 md:w-8 md:h-8 rounded-full border border-white flex items-center justify-center hover:bg-gray-400 transition">
              <FaInstagram className="w-4 h-4 text-yellow-400" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Top;
