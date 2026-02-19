// models/Dish.js
import mongoose from "mongoose";

const dishSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: Number,
  category: String,
  imageUrl: {type: String,required: true} // Cloudinary URL
}, { timestamps: true });

export default mongoose.model("Dish", dishSchema);