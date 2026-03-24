import { Clock, MapPin, Phone, Instagram, Facebook } from "lucide-react";

export default function Contact() {
  return (
   <footer id="contact" className="bg-[#210607] text-white py-8 px-3 lg:px-12">
  <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

    {/* LEFT - Brand */}
    <div>
      <div className="flex items-center space-x-2 mb-1">
        <img
          src="https://res.cloudinary.com/dvaxpatax/image/upload/v1774362235/IMG_4123_npqby6.png"
          alt="Restaurant Logo"
          className="h-20 w-auto object-contain"
        />
        <h2 className="text-sm md:text-base font-semibold tracking-wide text-[#D4AF37] font-serif">
          THAMPURAN RESTAURANT
        </h2>
      </div>

      <p className="text-gray-300 text-sm leading-snug mb-4 max-w-xs">
        Authentic South Indian cuisine crafted with tradition and rich flavors.
      </p>

      {/* Social Icons */}
      <div className="flex gap-3">
        <div className="w-9 h-9 rounded-full border border-amber-400 flex items-center justify-center hover:bg-amber-400 hover:text-black transition">
          <Instagram size={16} />
        </div>
        <div className="w-9 h-9 rounded-full border border-amber-400 flex items-center justify-center hover:bg-amber-400 hover:text-black transition">
          <Facebook size={16} />
        </div>
      </div>
    </div>

    {/* MIDDLE */}
    <div>
      <h3 className="text-lg font-serif mb-3">Opening Hours</h3>

      <div className="space-y-3 text-sm">
        <div className="flex gap-3">
          <Clock className="text-amber-400 mt-1" size={16} />
          <div>
            <p>Mon – Sat</p>
            <p className="text-gray-300">11:00 AM – 11:00 PM</p>
          </div>
        </div>

        <div className="flex gap-3">
          <Clock className="text-amber-400 mt-1" size={16} />
          <div>
            <p>Sunday</p>
            <p className="text-gray-300">12:00 PM – 10:00 PM</p>
          </div>
        </div>
      </div>
    </div>

    {/* RIGHT */}
    <div>
      <h3 className="text-lg font-serif mb-3">Get in Touch</h3>

      <div className="space-y-3 text-sm">
        <div className="flex gap-3">
          <MapPin className="text-amber-400 mt-1" size={16} />
          <p className="text-gray-300">
            123 Spice Lane, Food Street <br/>
            City, State 680001
          </p>
        </div>

        <div className="flex gap-3">
          <Phone className="text-amber-400 mt-1" size={16} />
          <p className="text-gray-300">+91 12345 67890</p>
        </div>
      </div>
    </div>
  </div>

  {/* Divider */}
  <div className="border-t border-amber-500/30 mt-8 pt-4 text-center text-gray-400 text-xs">
    © 2026 Thampuran Restaurant
  </div>
</footer>
  );
}
