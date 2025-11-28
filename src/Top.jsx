import React from "react";
import { FaMapMarkerAlt, FaPhone, FaFacebookF, FaTwitter,FaInstagram } from "react-icons/fa";

const Top = () => {
  return (
    <div className="w-full bg-gray-800">
      <div className="flex justify-between items-center px-3 py-2 shadow-md">

       
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-yellow-400 w-3 h-4" />
          <p className="text-white">St-4 New-York</p>
        </div>

      
        <div className="flex items-center gap-4 mr-4">

         
          <div className="flex items-center gap-1">
            <FaPhone className="text-yellow-400 w-4 h-4" />
            <p className="text-white">123-4534-322</p>
          </div>

        
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full border border-white flex items-center justify-center hover:bg-gray-400 ">
              <FaFacebookF className="w-4 h-4 text-yellow-400" />
            </div>
            <div className="w-7 h-7 rounded-full border border-white flex items-center justify-center hover:bg-gray-400 ">
              <FaTwitter className="w-4 h-4 text-yellow-400" />
            </div>
             <div className="w-7 h-7 rounded-full border border-white flex items-center justify-center hover:bg-gray-400 ">
              <FaInstagram className="w-4 h-4 text-yellow-400" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Top;
