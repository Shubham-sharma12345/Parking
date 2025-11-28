import React from "react";
import { FaCar, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import g1 from "../images/boom gate.jpg";
import g2 from "../images/gate boom.jpg";
import g3 from "../images/outdoor.avif";
import g4 from "../images/underground.jpg";

const Footer = () => {
  return (
    <footer className="bg-[#2d2d2d] text-gray-300 py-10 px-6 md:px-20">

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

      
        <div>
          <h2 className="text-xl font-bold flex items-center gap-2 text-amber-400">
            <FaCar className="text-amber-400 text-2xl" />
            ParkEase
          </h2>
          <p className="mt-3 text-sm leading-6">
            ParkEase provides fast, secure and automated parking solutions with 
            24/7 surveillance. Your parking experience—simplified.
          </p>
          <div className="flex items-center gap-4 mt-4">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full border border-white flex items-center justify-center cursor-pointer hover:bg-white hover:text-black transition"
              >
                <Icon size={14} />
              </div>
            ))}
          </div>
        </div>

      
        <div>
          <h3 className="font-semibold text-amber-400 mb-4">QUICK LINKS</h3>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>Packages</li>
            <li>Services</li>
            <li>Blogs</li>
            <li>Contact</li>
          </ul>
        </div>

   
        <div>
          <h3 className="font-semibold text-amber-400 mb-4">GALLERY</h3>
          <div className="grid grid-cols-3 gap-y-2 gap-x-0">
            {[g1, g2, g3, g4, g4, g1].map((img, i) => (
              <div key={i} className="w-16 h-16 overflow-hidden rounded">
                <img
                  src={img}
                  className="w-full h-full object-cover"
                  alt={`Gallery ${i + 1}`}
                />
              </div>
            ))}
          </div>
        </div>

       
        <div>
          <h3 className="font-semibold text-amber-400 mb-4">POLICIES</h3>
          <ul className="space-y-2 text-sm">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Refund Policy</li>
          </ul>

          <h3 className="font-semibold text-amber-400 mt-6 mb-4">CONTACT</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-amber-400" />
              123 Main Street
            </li>
            <li className="flex items-center gap-2">
              <FaPhone className="text-amber-400" />
              +91 900 567 8900
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-amber-400" />
              support@parkease.com
            </li>
          </ul>
        </div>

      </div>

      
      <div className=" border-gray-600 mt-10 pt-4 text-center text-sm">
        © 2025 ParkEase. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;
