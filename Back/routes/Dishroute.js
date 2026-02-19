// routes/dishRoutes.js
import express from "express";
import Dish from "../models/Dish.js";
import cloudinary from "../config/Cloudinary.js";
import multer from "multer";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

// CREATE dish
router.post("/", upload.single("image"), async (req, res) => {
  try {
    let imageUrl = "";
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path);
      imageUrl = result.secure_url;
    }
    const dish = new Dish({ ...req.body, imageUrl });
    await dish.save();
    res.json(dish);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ all dishes
router.get("/", async (req, res) => {
  const dishes = await Dish.find();
  res.json(dishes);
});

// READ single dish
router.get("/:id", async (req, res) => {
  const dish = await Dish.findById(req.params.id);
  res.json(dish);
});

// UPDATE dish
router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    let updateData = { ...req.body };
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path);
      updateData.imageUrl = result.secure_url;
    }
    const dish = await Dish.findByIdAndUpdate(req.params.id, updateData, { new: true });
    res.json(dish);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE dish
router.delete("/:id", async (req, res) => {
  await Dish.findByIdAndDelete(req.params.id);
  res.json({ message: "Dish deleted" });
});

export default router;