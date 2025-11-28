import React from "react";
import { FaCheck } from "react-icons/fa"; 

const PricingCard = ({ title, price, features, color, btnColor }) => {
  return (
    <div className="w-80 bg-[#fff9ec] rounded-xl shadow-lg overflow-hidden">

      
      <div className="h-24 relative" style={{ backgroundColor: color }}>
        <div className="absolute bottom-[-20px] left-0 w-full">
          <h2 className="text-xl font-bold text-amber-50 text-center">{title}</h2>
          <svg
            viewBox="0 0 500 80"
            preserveAspectRatio="none"
            className="w-full h-16"
          >
            <path
              d="M0,40 C150,80 350,0 500,40 L500,00 L0,0 Z"
              fill={color}
            />
          </svg>
        </div>
      </div>

      <div className="p-6 pt-10 text-center">

        <p className="text-3xl font-bold text-yellow-600 mt-3">
          ${price}
          <span className="text-sm font-normal text-gray-600"> /month</span>
        </p>

     
        <ul className="text-gray-700 mt-4 space-y-2 text-sm">
          {features.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <FaCheck className="text-yellow-400 w-3 h-3 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>

      
        <button
          className="w-full mt-6 py-2 text-white font-semibold rounded-md"
          style={{ backgroundColor: btnColor }}
        >
          CHOOSE PLAN
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
