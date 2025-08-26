
import express from "express";
import { addCity, getCities, removeCity } from "../controllers/cityController.js";

const router = express.Router();

// Routes → point to controller functions
router.post("/", addCity);       
router.get("/", getCities);    
router.delete("/:id", removeCity);

export default router;