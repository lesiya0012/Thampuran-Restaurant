import mongoose from "mongoose";

const menuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price:Number,
  category: { 
    type: String, 
    enum: ["Kerala Special","Main Course","Rice","Seafood Items","Veg Dishes", "Soup", "Roti", "Drinks", "Mojitos"], 
    required: true 
  },
},{ timestamps: true });

export default mongoose.model("MenuItem", menuItemSchema);