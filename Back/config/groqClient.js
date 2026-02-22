import Groq from "groq-sdk";
import dotenv from "dotenv";
dotenv.config();
const client = new Groq({
  apiKey: process.env.GROQ_API_KEY, // store safely in .env
});

export default client;