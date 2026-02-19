import express from "express";
import MenuItem from "../models/MenuItem.js";

const router = express.Router();

// Get all categories
router.get("/categories", async (req, res) => {
  const categories = await MenuItem.distinct("category");
  res.json(categories);
});

// Get items by category
router.get("/items/:category", async (req, res) => {
  const items = await MenuItem.find({ category: req.params.category });
  res.json(items);
});

// Add new item
router.post("/items", async (req, res) => {
  const newItem = new MenuItem(req.body);
  await newItem.save();
  res.json(newItem);
});

// Add multiple items at once
router.post("/items/bulk", async (req, res) => {
  try {
    // req.body should be an array of items
    const newItems = await MenuItem.insertMany(req.body);
    res.json(newItems);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update item
router.put("/items/:id", async (req, res) => {
  const updatedItem = await MenuItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedItem);
});

// Delete item
router.delete("/items/:id", async (req, res) => {
  await MenuItem.findByIdAndDelete(req.params.id);
  res.json({ message: "Item deleted" });
});

export default router;