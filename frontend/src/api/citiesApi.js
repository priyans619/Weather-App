// src/api/citiesApi.js
import axios from "axios";
const API_BASE = "http://localhost:5000/api/cities";

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
