// server.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import Dishroute from "./routes/Dishroute.js";
import MenuRoutes from "./routes/Menuroute.js";
import assistantRoute from "./routes/assistantRoute.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/dishes",Dishroute);
app.use("/api", MenuRoutes);
app.use("/api",assistantRoute);

// MongoDB connection
const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 5000;


mongoose.connect(MONGO_URI)

.then(() => {
  console.log("MongoDB connected");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
.catch(err => console.error("MongoDB connection error:", err));