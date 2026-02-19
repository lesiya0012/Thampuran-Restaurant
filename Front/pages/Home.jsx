export default function Home() {
  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center text-center overflow-hidden">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"> 
        <img src="https://res.cloudinary.com/dvaxpatax/image/upload/v1770997066/9de57c6f-4858-46c1-b7f8-25887a374dda_1_zta0yz.jpg"/>

        </div>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl px-6 sm:px-8 lg:px-12">
        
        {/* Top Tagline */}
        <p className="text-xs sm:text-sm md:text-base tracking-[0.4em] text-amber-400 uppercase mb-6">
          Authentic South Indian Cuisine
        </p>

        {/* Main Heading */}
        <h1 className="font-serif text-white leading-tight">
          <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light">
            A Taste of
          </span>

          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl italic font-semibold text-amber-400 mt-2">
            South India
          </span>
        </h1>

        {/* Description */}
        <p className="mt-6 text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
          From fragrant biryanis to fiery curries, every dish at Thampuran is a
          celebration of tradition, spice, and love.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          
          <button className="w-full sm:w-auto px-8 py-3 bg-amber-500 hover:bg-amber-600 text-black font-semibold tracking-wide rounded-md transition duration-300">
            Explore Our Menu
          </button>

         

        </div>
      </div>
    </section>
  );
}
