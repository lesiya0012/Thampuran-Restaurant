// src/components/Navbar.jsx
import React from "react";
import { useState, useEffect } from "react";

const Navbar = ({toggleMenu}) => {
    const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Trigger animation when component mounts
    setVisible(true);
  }, []);


  return (
    <nav className={`fixed top-0 left-0 w-full bg-[#350f13] shadow-md z-50 transform transition-transform duration-700 ease-out ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
>
      <div className="max-w-6xl mx-auto px-2 flex justify-between items-center h-18 ">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-yellow-500">RESTAURANT</h1>

        {/* Links */}
        <ul className="flex space-x-6 text-white font-light text-lg">
          <li>
            <a href="#home" className="hover:text-yellow-500">HOME</a>
          </li>
          <li>
           <button 
    onClick={toggleMenu}
    className="hover:text-yellow-500"
  >
    MENU
  </button>
          </li>
          <li>
            <a href="#about" className="hover:text-yellow-500">ABOUT</a>
          </li>
          <li>
            <a href="#specialties" className="hover:text-yellow-500">SPECIALTIES</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-yellow-500">CONTACT</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;