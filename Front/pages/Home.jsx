import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const foods = [
    "https://res.cloudinary.com/dvaxpatax/image/upload/v1771922619/Gemini_Generated_Image_y6j9xoy6j9xoy6j9_1_-Picsart-BackgroundRemover_jn9nwq.png",
    "https://res.cloudinary.com/dvaxpatax/image/upload/v1771922621/Gemini_Generated_Image_4syjao4syjao4syj-Picsart-BackgroundRemover_vt0oqp.png",
    "https://res.cloudinary.com/dvaxpatax/image/upload/v1771922620/Gemini_Generated_Image_czov70czov70czov-Picsart-BackgroundRemover_h41ocb.png"
  ];

  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % foods.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [paused, foods.length]);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % foods.length);

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + foods.length) % foods.length);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover blur-[3px] scale-105 bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dvaxpatax/image/upload/v1772112590/ChatGPT_Image_Feb_26_2026_06_26_12_PM_vh9fj2.png')"
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative max-w-7xl mx-auto w-full px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

        {/* LEFT CONTENT WITH ANIMATION */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.25 }
            }
          }}
          className="text-center lg:text-left text-white space-y-6"
        >

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-sm tracking-[0.3em] text-amber-400 uppercase"
          >
            Authentic South Indian Cuisine
          </motion.p>

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl font-serif leading-tight"
          >
            A Taste of{" "}
            <span className="text-amber-400 italic">South India</span>
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-gray-300 max-w-xl"
          >
            From fragrant biryanis to fiery curries, every dish at Thampuran
            is a celebration of tradition, spice, and love.
          </motion.p>

          <motion.button
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="bg-amber-500 hover:bg-amber-600 transition px-6 py-3 rounded-lg text-black font-semibold shadow-lg"
          >
            Explore Our Menu
          </motion.button>

        </motion.div>

       {/* RIGHT IMAGE SECTION */}
<div
  className="relative flex items-center justify-center group"
  onMouseEnter={() => setPaused(true)}
  onMouseLeave={() => setPaused(false)}
>
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      duration: 1.2,
      delay: 0.9, // appears after text
      ease: [0.22, 1, 0.36, 1]
    }}
    className="relative w-72 sm:w-96 lg:w-[450px]"
  >
    <div className="absolute inset-0 bg-amber-500/20 blur-3xl scale-110"></div>

    {/* Floating animation wrapper */}
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
        className="relative w-[85%] mx-auto mt-[12%] object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
      />
    </motion.div>
  </motion.div>

  {/* ARROWS (UNCHANGED) */}
  <div className="absolute inset-0 flex items-center justify-between px-8 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">

    <motion.button
      onClick={prevSlide}
      onMouseEnter={() => setPaused(true)}
      initial={{ opacity: 0, x: -25 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.08 }}
      className="pointer-events-auto text-amber-400 hover:text-amber-300 transition"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.2}
        stroke="currentColor"
        className="w-9 h-9"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
    </motion.button>

    <motion.button
      onClick={nextSlide}
      onMouseEnter={() => setPaused(true)}
      initial={{ opacity: 0, x: 25 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.08 }}
      className="pointer-events-auto text-amber-400 hover:text-amber-300 transition"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.2}
        stroke="currentColor"
        className="w-9 h-9"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5L15.75 12l-7.5 7.5" />
      </svg>
    </motion.button>

  </div>
</div>
      
      </div>
    </section>
  );
}