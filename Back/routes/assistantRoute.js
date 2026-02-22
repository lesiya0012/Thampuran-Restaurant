import express from "express";
import client from "../config/groqClient.js";
import MenuItem from "../models/MenuItem.js";

const router = express.Router();

// AI assistant endpoint
router.post("/assistant", async (req, res) => {
  const { question } = req.body;

  try {
    // Fetch all items by default
    let items = await MenuItem.find();

    // Optional pre-filtering by category or price keywords
    if (question.toLowerCase().includes("vegetarian")) {
      items = await MenuItem.find({ category: "vegetarian" });
    }
    if (question.toLowerCase().includes("under 200")) {
      items = await MenuItem.find({ price: { $lt: 200 } });
    }

    // Compact summary to avoid token overflow
    const summary = items.map(i =>
      `${i.name} (₹${i.price}) - ${i.description.slice(0, 80)}...`
    ).join("\n");

    const response = await client.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        { role: "system", content: "You are a helpful restaurant assistant." },
        { role: "user", content: `Menu:\n${summary}\nQuestion: ${question}` },
      ],
    });

    res.json({ answer: response.choices[0].message.content });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;