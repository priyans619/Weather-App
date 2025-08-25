import express from "express";
import { getCurrentWeather, getForecast } from "../services/weatherService.js";

const router = express.Router();

router.get("/current", async (req, res) => {
  try {
    const city = req.query.city;
    const data = await getCurrentWeather(city);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/forecast", async (req, res) => {
  try {
    const city = req.query.city;
    const data = await getForecast(city);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
