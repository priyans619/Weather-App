import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const BASE_URL = "https://api.openweathermap.org/data/2.5";
const API_KEY = process.env.WEATHER_API_KEY;

console.log("Weather API Key in service:", API_KEY);

export const getCurrentWeather = async (city) => {
  const { data } = await axios.get(`${BASE_URL}/weather`, {
    params: { q: city, appid: API_KEY, units: "metric" },
  });
  return data;
};

export const getForecast = async (city) => {
  const { data } = await axios.get(`${BASE_URL}/forecast`, {
    params: { q: city, appid: API_KEY, units: "metric" },
  });
  return data;
};
