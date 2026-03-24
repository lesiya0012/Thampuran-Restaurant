import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar = ({ toggleMenu, loading }) => {

  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.nav
      key={loading ? "loading" : "loaded"}   // ✅ FORCE RE-ANIMATION
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.2
      }}
      className="fixed top-0 left-0 w-full bg-[#350f13]/90 backdrop-blur-md shadow-md z-50"
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-20">
{/* Logo */}
<div className="flex items-center space-x-3">
  <img
    src="https://res.cloudinary.com/dvaxpatax/image/upload/v1774362235/IMG_4123_npqby6.png"
    alt="Restaurant Logo"
    className="h-25 w-auto object-contain"
  />

  <h2 className="text-xl md:text-2xl font-extralight tracking-wider text-[#D4AF37] font-serif">
    THAMPURAN RESTAURANT
  </h2>
</div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white font-light text-lg">

          <li>
            <a href="#home" className="hover:text-yellow-500 transition">
              HOME
            </a>
          </li>

          <li>
            <button
              onClick={toggleMenu}
              className="hover:text-yellow-500 transition"
            >
              MENU
            </button>
          </li>

          <li>
            <a href="#about" className="hover:text-yellow-500 transition">
              ABOUT
            </a>
          </li>

          <li>
            <a href="#specialties" className="hover:text-yellow-500 transition">
              SPECIALTIES
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-yellow-500 transition">
              CONTACT
            </a>
          </li>

        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
            )}
          </svg>
        </button>

      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[#350f13]/95 backdrop-blur-md overflow-hidden transition-all duration-500 ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 py-6 text-white text-lg">

          <li>
            <a href="#home" onClick={() => setMobileOpen(false)} className="px-6 py-2 rounded-md hover:bg-amber-400 hover:text-black transition">
              HOME
            </a>
          </li>

          <li>
            <button
              onClick={() => {
                toggleMenu();
                setMobileOpen(false);
              }}
              className="px-6 py-2 rounded-md hover:bg-amber-400 hover:text-black transition"
            >
              MENU
            </button>
          </li>

          <li>
            <a href="#about" onClick={() => setMobileOpen(false)} className="px-6 py-2 rounded-md hover:bg-amber-400 hover:text-black transition">
              ABOUT
            </a>
          </li>

          <li>
            <a href="#specialties" onClick={() => setMobileOpen(false)} className="px-6 py-2 rounded-md hover:bg-amber-400 hover:text-black transition">
              SPECIALTIES
            </a>
          </li>

          <li>
            <a href="#contact" onClick={() => setMobileOpen(false)} className="px-6 py-2 rounded-md hover:bg-amber-400 hover:text-black transition">
              CONTACT
            </a>
          </li>

        </ul>
      </div>

    </motion.nav>
  );
};

export default Navbar;