import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/img/LooksX.png";

const Navbar = () => {
  const location = useLocation();
  
  return (
    <nav className="bg-[#1A1F2C] text-[#D4B86A] px-6 py-4 flex justify-between items-center fixed w-full z-50 shadow-lg">
      <Link to="/" className="flex items-center">
        <img src={logo} alt="LooksX Logo" className="h-10 mr-3" />
        <span className="text-2xl font-bold text-[#D4B86A]">LooksX</span>
      </Link>
      <ul className="flex space-x-8">
        {[
          ["Home", "/"],
          ["About", "/about"],
          ["Services", "/services"],
          ["Blog", "/blog"],
          ["Contact", "/contact"],
        ].map(([title, url]) => (
          <li key={url}>
            <Link
              to={url}
              className={`hover:text-[#F0C987] transition-colors duration-300 tracking-wide ${
                location.pathname === url ? "text-[#F0C987]" : ""
              }`}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
      <button className="bg-[#D4B86A] px-6 py-2 rounded hover:bg-[#F0C987] transition-all duration-300 text-[#1A1F2C] font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
        Book Now
      </button>
    </nav>
  );
};

export default Navbar;
