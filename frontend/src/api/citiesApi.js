// src/api/citiesApi.js
import axios from "axios";
const API_BASE = "https://weather-api-ekk8.onrender.com/api/cities";

export const getCities = async () => {
  const { data } = await axios.get(API_BASE);
  return data;
};

export const addCity = async (name, country = "") => {
  const { data } = await axios.post(API_BASE, { name, country });
  return data;
};

export const removeCity = async (id) => {
  const { data } = await axios.delete(`${API_BASE}/${id}`);
  return data;
};
