import City from "../models/City.js";

// Save a new city
export const addCity = async (req, res) => {
  try {
    const { name, country } = req.body;

    // Prevent duplicates
    const exists = await City.findOne({ name: name.toLowerCase() });
    if (exists) {
      return res.status(400).json({ message: "City already saved!" });
    }

    const city = new City({ name: name.toLowerCase(), country });
    await city.save();

    res.status(201).json(city);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

