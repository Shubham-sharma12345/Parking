import React, { useState } from "react";
import { FaCar, FaBars, FaTimes } from "react-icons/fa";
import arrow from "./images/arrow.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 md:px-10 py-4 fixed w-full z-50">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <FaCar className="text-amber-400 text-2xl" />
          <h1 className="text-xl font-bold text-amber-400">PARK EASE</h1>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes className="text-2xl text-amber-400" /> : <FaBars className="text-2xl text-amber-400" />}
          </button>
        </div>

        <ul className={`md:flex md:items-center md:gap-8 text-lg font-medium cursor-pointer absolute md:static bg-white md:bg-transparent w-full left-0 md:w-auto transition-all duration-300 ${isOpen ? "top-16 opacity-100" : "top-[-500px] opacity-0"} flex flex-col md:flex-row`}>
          <li className="hover:text-yellow-500 py-2 md:py-0">Home</li>
          <li className="hover:text-yellow-500 py-2 md:py-0">About</li>
          <li className="hover:text-yellow-500 py-2 md:py-0">Blogs</li>
          <li className="flex items-center gap-1 hover:text-yellow-500 py-2 md:py-0">
            Services
            <img src={arrow} alt="arrow" className="w-3 h-3 mt-1" />
          </li>
          <li className="hover:text-yellow-500 py-2 md:py-0">Contact</li>
          <li className="md:hidden mt-2">
            <button className="bg-amber-400 text-white px-4 py-2 rounded-md w-full">LOGIN →</button>
          </li>
        </ul>

        <div className="hidden md:block">
          <button className="bg-amber-400 text-white px-4 py-2 rounded-md hover:bg-amber-500">LOGIN →</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
