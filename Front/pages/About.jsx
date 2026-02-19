import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about"className="bg-[#2b0c10] text-white py-20 px-6 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* LEFT - Image (Slides from Left) */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl relative">
            <img
              src="https://res.cloudinary.com/dvaxpatax/image/upload/v1771383750/dmskwnkgd9ib3xywpryq.jpg"
              alt="South Indian Meals"
              className="w-full h-[500px] lg:h-[700px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
        </motion.div>

        {/* RIGHT - Text (Slides from Right) */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-amber-400 tracking-[0.3em] text-sm mb-4 uppercase">
            Our Story
          </p>

          <h2 className="text-2xl lg:text-3xl font-serif font-bold leading-tight mb-6">
            Where Tradition{" "}
            <span className="text-amber-400 italic">Meets Flavour</span>
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            Nestled in the heart of the city, Thampuran brings the soul of South Indian cooking to your plate. Our chefs draw inspiration from the rich culinary heritage of Kerala, Tamil Nadu, and Karnataka — blending time-honoured recipes with a modern dining experience.
          </p>

          <p className="text-gray-300 mb-10">
            Every dish tells a story — from our slow-cooked biryanis to the tangy fish curries and crispy appams. We source the freshest spices and ingredients to craft meals that are as authentic as they are unforgettable.
          </p>

          <div className="flex flex-wrap gap-10">
            <div>
              <h3 className="text-3xl font-bold text-amber-400">15+</h3>
              <p className="text-xs tracking-widest text-gray-400 uppercase">
                Years of Legacy
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-amber-400">50+</h3>
              <p className="text-xs tracking-widest text-gray-400 uppercase">
                Dishes
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-amber-400">10K+</h3>
              <p className="text-xs tracking-widest text-gray-400 uppercase">
                Happy Diners
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
