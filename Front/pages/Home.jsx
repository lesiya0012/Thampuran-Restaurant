import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Home({ loading, toggleMenu }) {

  const foods = [
    "https://res.cloudinary.com/dvaxpatax/image/upload/v1771922619/Gemini_Generated_Image_y6j9xoy6j9xoy6j9_1_-Picsart-BackgroundRemover_jn9nwq.png",
    "https://res.cloudinary.com/dvaxpatax/image/upload/v1771922621/Gemini_Generated_Image_4syjao4syjao4syj-Picsart-BackgroundRemover_vt0oqp.png",
    "https://res.cloudinary.com/dvaxpatax/image/upload/v1771922620/Gemini_Generated_Image_czov70czov70czov-Picsart-BackgroundRemover_h41ocb.png"
  ];

  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || loading) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % foods.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [paused, foods.length, loading]);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % foods.length);

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + foods.length) % foods.length);

  const baseDelay = loading ? 0 : 0.2;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-black"
    >

      {/* ✅ Background ALWAYS visible */}
      <motion.div
        initial={{ scale: 1.1, opacity: 1 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-cover blur-[3px] bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dvaxpatax/image/upload/v1772112590/ChatGPT_Image_Feb_26_2026_06_26_12_PM_vh9fj2.png')"
        }}
      />

      {/* ✅ Overlay ALWAYS visible */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 bg-black/70"
      />

      <div className="relative max-w-7xl mx-auto w-full px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

        {/* LEFT TEXT */}
        <div className="text-center lg:text-left text-white space-y-6">

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: loading ? 0 : 1, y: loading ? 60 : 0 }}
            transition={{ duration: 1, delay: baseDelay + 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif leading-tight"
          >
            A Taste of{" "}
            <span className="text-amber-400 italic">South India</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: loading ? 0 : 1, y: loading ? 40 : 0 }}
            transition={{ duration: 0.9, delay: baseDelay + 0.6 }}
            className="text-xs sm:text-sm tracking-[0.25em] text-amber-400 uppercase"
          >
            Authentic South Indian Cuisine
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: loading ? 0 : 1, y: loading ? 30 : 0 }}
            transition={{ duration: 0.9, delay: baseDelay + 0.8 }}
            className="text-gray-300 max-w-xl mx-auto lg:mx-0 text-sm sm:text-base"
          >
            From fragrant biryanis to fiery curries, every dish at Thampuran
            is a celebration of tradition, spice, and love.
          </motion.p>

          <motion.button 
           onClick={toggleMenu}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{
              opacity: loading ? 0 : 1,
              y: loading ? 30 : 0,
              scale: loading ? 0.9 : 1
            }}
            transition={{ duration: 0.8, delay: baseDelay + 1 }}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            className="bg-amber-500 hover:bg-amber-600 transition px-6 py-3 rounded-lg text-black font-semibold shadow-lg"
              
          >
            Explore Our Menu
          </motion.button>

        </div>

        {/* RIGHT IMAGE */}
        <div
          className="relative flex items-center justify-center group"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{
              opacity: loading ? 0 : 1,
              y: loading ? 80 : 0
            }}
            transition={{ duration: 1.2, delay: baseDelay + 1.2 }}
            className="relative w-60 sm:w-72 md:w-96 lg:w-[420px]"
          >

            <div className="absolute inset-0 bg-amber-500/20 blur-3xl scale-110"></div>

            <motion.div
              animate={paused ? { y: 0 } : { y: [0, -12, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <img
                src={foods[current]}
                alt="Food"
                className="relative w-[85%] mx-auto mt-[10%] object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
              />
            </motion.div>

          </motion.div>

          {/* ARROWS */}
          <div className="absolute inset-0 flex items-center justify-between px-4 sm:px-8 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none">

            <button onClick={prevSlide} className="pointer-events-auto text-amber-400 text-4xl hover:text-amber-300 transition">
              ‹
            </button>

            <button onClick={nextSlide} className="pointer-events-auto text-amber-400 text-4xl hover:text-amber-300 transition">
              ›
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}