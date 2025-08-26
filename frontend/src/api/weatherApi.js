
import axios from "axios";

const API_BASE = "https://weather-api-ekk8.onrender.com/api/weather";

// current weather by city
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
