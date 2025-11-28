import React from "react";

import arrow from "./images/arrow.png";
import { FaCar } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-10 py-4 shadow-md bg-white">
      <div className="flex items-center gap-3">
         <FaCar className="text-amber-400 text-2xl" />
        <h1 className="text-xl font-bold text-amber-400">PARK EASE</h1>
      </div>

      <ul className="flex gap-8 text-lg font-medium cursor-pointer items-center">
        <li className="hover:text-yellow-500">Home</li>
        <li className="hover:text-yellow-500">About</li>
        <li className="hover:text-yellow-500">Blogs</li>
        <li className="flex items-center gap-1 hover:text-yellow-500">
          Services
          <img src={arrow} alt="arrow" className="w-3 h-3 mt-1" />
        </li>

        <li className="hover:text-yellow-500">Contact</li>
      </ul>

      <button className="bg-amber-400 text-white px-4 py-2 p-1  rounded-md hover:bg-amber-400">LOGIN →</button>
    </div>
  );
};

export default Navbar;
