import React, { useState } from "react";
import Switch from "react-switch";

const Cards = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="text-center mt-10">
    <h2 className="text-1xl font-semibold text-amber-300">Our Packages</h2>
      <h2 className="text-3xl font-bold">Choose Your Parking Plan</h2>

      <div className="flex justify-center items-center gap-3 mt-4">
        <span className="text-yellow-400">Monthly</span>

        <Switch
          checked={checked}
          onChange={setChecked}
          onColor="#f59e0b"   
          offColor="#2A2733" 
          uncheckedIcon={false}
          checkedIcon={false}
          height={20}
          width={45}
        />

        <span className="text-gray-700">Yearly</span>
      </div>
    </div>
  );
};

export default Cards;
