// src/api/weatherApi.js
import axios from "axios";

const API_BASE = "http://localhost:5000/api/weather";

// Fetch current weather by city
export const getCurrentWeather = async (city) => {
  const response = await axios.get(`${API_BASE}/current`, {
    params: { city },
  });
  return response.data;
};

// Fetch 5-day forecast
export const getForecast = async (city) => {
  const response = await axios.get(`${API_BASE}/forecast`, {
    params: { city },
  });
  return response.data;
};
