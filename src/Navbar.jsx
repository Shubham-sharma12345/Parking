import React, { useState } from "react";
import { FaCar, FaBars, FaTimes } from "react-icons/fa";
import arrow from "./images/arrow.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 py-4 flex justify-between items-center">
   
        <div className="flex items-center gap-3">
          <FaCar className="text-amber-400 text-3xl" />
          <h1 className="text-xl font-bold text-amber-400">PARK EASE</h1>
        </div>

        <ul className="hidden md:flex gap-8 text-lg font-medium items-center">
          <li className="hover:text-yellow-500 cursor-pointer">Home</li>
          <li className="hover:text-yellow-500 cursor-pointer">About</li>
          <li className="hover:text-yellow-500 cursor-pointer">Blogs</li>
          <li className="flex items-center gap-1 hover:text-yellow-500 cursor-pointer">
            Services
            <img src={arrow} alt="arrow" className="w-3 h-3 mt-1" />
          </li>
          <li className="hover:text-yellow-500 cursor-pointer">Contact</li>
        </ul>

        
        <button className="hidden md:block bg-amber-400 text-white px-4 py-2 rounded-md hover:bg-amber-500">
          LOGIN →
        </button>

       
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-amber-400 text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col gap-4 px-4 py-4 text-lg font-medium">
            <li className="hover:text-yellow-500 cursor-pointer">Home</li>
            <li className="hover:text-yellow-500 cursor-pointer">About</li>
            <li className="hover:text-yellow-500 cursor-pointer">Blogs</li>
            <li className="flex items-center gap-1 hover:text-yellow-500 cursor-pointer">
              Services
              <img src={arrow} alt="arrow" className="w-3 h-3 mt-1" />
            </li>
            <li className="hover:text-yellow-500 cursor-pointer">Contact</li>
            <li>
              <button className="w-full bg-amber-400 text-white px-4 py-2 rounded-md hover:bg-amber-500">
                LOGIN →
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
