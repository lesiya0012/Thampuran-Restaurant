import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Subtle parallax effect
  const y = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);

  return (
    <section
      id="about"
      ref={ref}
      className="bg-[#2b0c10] text-white py-24 px-6 lg:px-16 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT - Image */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Soft Glow Background */}
          <div className="absolute -inset-10 bg-amber-500/10 blur-3xl rounded-full"></div>

          <div className="rounded-2xl overflow-hidden shadow-2xl relative">
            <motion.img
              src="https://res.cloudinary.com/dvaxpatax/image/upload/v1771383750/dmskwnkgd9ib3xywpryq.jpg"
              alt="South Indian Meals"
              style={{ y, scale }}
              className="w-full h-[500px] lg:h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
        </motion.div>

        {/* RIGHT - Text */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-amber-400 tracking-[0.35em] text-sm mb-4 uppercase">
            Our Story
          </p>

          <h2 className="text-3xl lg:text-4xl font-serif font-bold leading-tight mb-8">
            Where Tradition{" "}
            <span className="text-amber-400 italic">Meets Flavour</span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-gray-300 leading-relaxed mb-6"
          >
            Nestled in the heart of the city, Thampuran brings the soul of
            South Indian cooking to your plate. Our chefs draw inspiration
            from the rich culinary heritage of Kerala, Tamil Nadu, and
            Karnataka — blending time-honoured recipes with a modern dining
            experience.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-gray-300 mb-12"
          >
            Every dish tells a story — from our slow-cooked biryanis to the
            tangy fish curries and crispy appams. We source the freshest
            spices and ingredients to craft meals that are as authentic as
            they are unforgettable.
          </motion.p>

          {/* Stats */}
          <div className="flex flex-wrap gap-12">
            {[
              { number: "15+", label: "Years of Legacy" },
              { number: "50+", label: "Dishes" },
              { number: "10K+", label: "Happy Diners" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-4xl font-bold text-amber-400">
                  {item.number}
                </h3>
                <p className="text-xs tracking-widest text-gray-400 uppercase mt-2">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}