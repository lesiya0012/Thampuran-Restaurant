import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function SignatureDishes() {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/dishes")
      .then((res) => res.json())
      .then((data) => setDishes(data))
      .catch((err) => console.error("Error fetching dishes:", err));
  }, []);

  return (
    <div
      id="specialties"
      className="min-h-screen bg-[#210607] text-white px-4 sm:px-6 lg:px-12 py-20"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <p className="tracking-[0.3em] text-sm text-amber-400 mb-3">
          OUR SPECIALTIES
        </p>
        <h1 className="text-4xl sm:text-5xl font-serif font-semibold">
          Signature <span className="text-amber-400 italic">Dishes</span>
        </h1>
        <p className="mt-4 text-gray-300 text-sm sm:text-base leading-relaxed">
          Handcrafted recipes passed down through generations, made with the
          finest spices and freshest ingredients.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {dishes.map((dish, index) => (
          <ParallaxCard dish={dish} index={index} key={dish._id || index} />
        ))}
      </div>
    </div>
  );
}

/* Separate Parallax Card Component */
function ParallaxCard({ dish, index }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Image moves slower than scroll (luxury subtle effect)
  const y = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.12 }}
      viewport={{ once: true }}
      className="bg-[#350f13] border border-[#4a1a1f] rounded-2xl overflow-hidden 
                 shadow-xl hover:shadow-2xl transform transition-all duration-500 
                 hover:-translate-y-2 group"
    >
      {/* Image Container */}
      <div className="relative h-64 w-full overflow-hidden">
        <motion.img
          src={dish.imageUrl}
          alt={dish.title}
          style={{ y }}
          className="h-[115%] w-full object-cover transition-transform duration-700 
                     ease-out group-hover:scale-105"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t 
                        from-black/60 via-black/20 to-transparent 
                        opacity-70 group-hover:opacity-50 
                        transition duration-500"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs tracking-[0.2em] text-amber-400 uppercase">
            {dish.category}
          </span>
          <span className="text-amber-400 font-semibold text-lg">
            ₹{dish.price}
          </span>
        </div>

        <h3 className="relative inline-block text-xl font-serif font-semibold text-white mb-3">
          {dish.title || dish.name}
          <span className="absolute left-0 -bottom-1 w-0 h-[1px] 
                           bg-amber-400 transition-all duration-500 
                           group-hover:w-full"></span>
        </h3>

        <p className="text-sm text-gray-400 leading-relaxed">
          {dish.description}
        </p>
      </div>
    </motion.div>
  );
}