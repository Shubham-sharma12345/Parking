import React from "react";

const Testimonials = () => {
  return (
    <div className="w-full bg-gray-100 py-16">
     
      <div className="text-center mb-10">
        <p className="text-sm text-amber-500 font-semibold tracking-widest">
          TESTIMONIALS
        </p>
        <h2 className="text-3xl font-bold text-gray-800">
          What <span className="text-amber-500">Our</span> Customers Say
        </h2>
      </div>

    
      <div className="flex justify-center gap-6 flex-wrap px-4">
     
        <div className="bg-white shadow-md rounded-xl p-6 w-[350px] flex gap-4">
          <img
            src="https://i.pravatar.cc/80?img=12"
            alt="avatar"
            className="w-16 h-16 rounded-md"
          />
          <div>
            <h3 className="font-semibold text-gray-800">Amit Verma</h3>
            <p className="text-sm text-amber-500">Entrepreneur</p>
            <p className="text-sm text-gray-600 mt-2">
              Very smooth experience. Automated parking and great customer
              support. Highly recommended!
            </p>
          </div>
        </div>

       
        <div className="bg-white shadow-md rounded-xl p-6 w-[350px] flex gap-4">
          <img
            src="https://i.pravatar.cc/80?img=5"
            alt="avatar"
            className="w-16 h-16 rounded-md grayscale"
          />
          <div>
            <h3 className="font-semibold text-gray-800">Priya Desi</h3>
            <p className="text-sm text-amber-500">Director</p>
            <p className="text-sm text-gray-600 mt-2">
              The security features are amazing. 
              reliable and convenient.
            </p>
          </div>
        </div>
      </div>

      
      <div className="flex justify-center mt-8 gap-2">
        <span className="w-3 h-3 rounded-full bg-gray-400"></span>
        <span className="w-3 h-3 rounded-full bg-amber-500"></span>
        <span className="w-3 h-3 rounded-full bg-gray-400"></span>
      </div>
    </div>
  );
};

export default Testimonials;

