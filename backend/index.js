import dotenv from "dotenv";
dotenv.config();

import express from "express";
import connectDB from "./config/db.js";
import weatherRoutes from "./routes/weatherRoutes.js";

const app = express();

// Connect to DB
connectDB();

app.use(express.json());

// Main API route to connect to backend
app.use("/api/weather", weatherRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
