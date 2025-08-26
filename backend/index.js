import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import weatherRoutes from "./routes/weatherRoutes.js";
import cityRoutes from "./routes/cityRoutes.js";

const app = express();
connectDB();

// setting cors for unique url
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);


app.use(express.json());

// Main API route to connect to backend
app.use("/api/weather", weatherRoutes);
app.use("/api/cities", cityRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
