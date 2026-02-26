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

    // Company info integration
    const companyInfo = `
Thampuran Restaurant is located in Chingavanam, Kerala.
Nestled in the heart of the city, Thampuran brings the soul of South Indian cooking to your plate.
Our chefs draw inspiration from the rich culinary heritage of Kerala, Tamil Nadu, and Karnataka —
blending time-honoured recipes with a modern dining experience.

Every dish tells a story — from our slow-cooked biryanis to the tangy fish curries and crispy appams.
We source the freshest spices and ingredients to craft meals that are as authentic as they are unforgettable.

We proudly serve authentic South Indian food to our customers.
Our chefs are among the best, blending tradition with innovation.
We emphasize the highest quality of food — fresh spices, carefully sourced ingredients,
and dishes crafted to deliver unforgettable flavour and excellence.

Highlights:
- 15+ years of legacy
- 50+ dishes on the menu
- 10,000+ happy diners
`;

 const response = await client.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        {
          role: "system",
          content: "You are a helpful restaurant assistant. \
          You answer questions about the menu and company background. \
          You do NOT take orders, bookings, or payments."
        },
        {
          role: "user",
          content: `Menu:\n${summary}\nCompany:\n${companyInfo}\nQuestion: ${question}`
        },
      ],
    });

    res.json({ answer: response.choices[0].message.content });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


export default router;