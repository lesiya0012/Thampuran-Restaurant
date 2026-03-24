import React, { useEffect, useState } from "react";
import axios from "axios";

function Menu({ closeMenu }) {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");
  const [items, setItems] = useState([]);

  // Fetch categories
  useEffect(() => {
    axios.get("http://localhost:5000/api/categories")
      .then(res => {
        setCategories(res.data);
        setActiveCategory(res.data[0]);
      })
      .catch(err => console.log(err));
  }, []);

  // Fetch items by category
  useEffect(() => {
    if (activeCategory) {
      axios.get(`http://localhost:5000/api/items/${activeCategory}`)
        .then(res => setItems(res.data))
        .catch(err => console.log(err));
    }
  }, [activeCategory]);

  return (
    <div id="menu" className="fixed inset-0 bg-black/75 backdrop-blur-2xl z-50 flex justify-center items-center">
      
      <div className="bg-[#2b0d12] w-[90%] max-w-5xl h-[85vh] rounded-2xl p-8 overflow-y-auto relative">

        {/* Close Button */}
        <button
          onClick={closeMenu}
          className="absolute top-4 right-6 text-white text-2xl"
        >
          ✕
        </button>

        <h2 className="text-4xl font-serif mb-8 text-white">
          Our <span className="text-yellow-400 italic">Menu</span>
        </h2>

        {/* Category Buttons */}
        <div className="flex gap-4 flex-wrap mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full border transition
                ${
                  activeCategory === cat
                    ? "bg-yellow-600 text-black"
                    : "border-yellow-700 text-yellow-400"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Items Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item) => (
            <div
              key={item._id}
              className="border border-gray-500 rounded-xl p-6 flex justify-between items-center hover:border-yellow-400 transition"
            >
              <div>
                <h3 className="text-xl text-white font-semibold">{item.name}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>

              {item.price !== undefined && item.price !== null && item.price !== "" && (
  <span className="text-yellow-400 text-lg font-bold">
    ₹{item.price}
  </span>
)}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Menu;
