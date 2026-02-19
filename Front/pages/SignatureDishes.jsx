import React, { useEffect, useState } from "react";

export default function SignatureDishes() {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/dishes")
      .then((res) => res.json())
      .then((data) => setDishes(data))
      .catch((err) => console.error("Error fetching dishes:", err));
  }, []);

  return (
    <div id="specialties" className="min-h-screen bg-[#210607] text-white px-4 sm:px-6 lg:px-12 py-16">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-14">
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
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
  {dishes.map((dish, index) => (
    <div
      key={dish._id || index}
      className="bg-[#350f13] border border-[#4a1a1f] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
    >
      {/* Image */}
      <div className="relative h-64 w-full overflow-hidden">
        <img
          src={dish.imageUrl}
          alt={dish.title}
          className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
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

        <h3 className="text-xl font-serif font-semibold text-gray-100 mb-2">
          {dish.title}
        </h3>
        <h3 className="text-xl font-serif font-semibold text-white mb-2">
          {dish.name}
        </h3>

        <p className="text-sm text-gray-400 leading-relaxed">
          {dish.description}
        </p>
      </div>
    </div>
  ))}
</div>

    </div>
  );
}