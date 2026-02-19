import { Clock, MapPin, Phone, Instagram, Facebook } from "lucide-react";

export default function Contact() {
  return (
    <footer id="contact" className="bg-[#210607] text-white pt-20 pb-8 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-15">
        
        {/* LEFT - Brand */}
        <div>
          <div className=" inline-block px-10 py-3 mb-6 rounded">
           
            <p className="text-lg tracking-[0.3em] text-amber-400">
              RESTAURANT
            </p>
          </div>

          <p className="text-gray-300 leading-relaxed mb-6 max-w-sm">
            Authentic South Indian cuisine crafted with love, tradition,
            and the finest spices. Experience the true flavours of Kerala
            and beyond.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full border border-amber-400 flex items-center justify-center hover:bg-amber-400 hover:text-black transition">
              <Instagram size={18} />
            </div>
            <div className="w-12 h-12 rounded-full border border-amber-400 flex items-center justify-center hover:bg-amber-400 hover:text-black transition">
              <Facebook size={18} />
            </div>
          </div>
        </div>

        {/* MIDDLE - Opening Hours */}
        <div>
          <h3 className="text-2xl font-serif mb-6">Opening Hours</h3>

          <div className="space-y-6">
            <div className="flex gap-4">
              <Clock className="text-amber-400 mt-1" size={20} />
              <div>
                <p className="font-medium">Mon – Sat</p>
                <p className="text-gray-300">11:00 AM – 11:00 PM</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="text-amber-400 mt-1" size={20} />
              <div>
                <p className="font-medium">Sunday</p>
                <p className="text-gray-300">12:00 PM – 10:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT - Contact */}
        <div>
          <h3 className="text-2xl font-serif mb-6">Get in Touch</h3>

          <div className="space-y-6">
            <div className="flex gap-4">
              <MapPin className="text-amber-400 mt-1" size={20} />
              <p className="text-gray-300">
                123 Spice Lane, Food Street <br/>
                City, State 680001
              </p>
            </div>

            <div className="flex gap-4">
              <Phone className="text-amber-400 mt-1" size={20} />
              <p className="text-gray-300">+91 12345 67890</p>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-amber-500/30 mt-16 pt-6 text-center text-gray-400 text-sm">
        © 2026 Thampuran Restaurant. All rights reserved.
      </div>
    </footer>
  );
}
