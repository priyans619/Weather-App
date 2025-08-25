// src/components/SearchBar.jsx
import { useState } from "react";
import { useWeather } from "../context/WeatherContext";

const SearchBar = () => {
  const [city, setCity] = useState("");
  const { fetchWeatherData } = useWeather();

  const handleSearch = () => {
    if (city.trim()) {
      fetchWeatherData(city);
      setCity("");
    }
  };

  return (
    <div className="flex items-center gap-2 p-4">
      <input
        type="text"
        placeholder="Enter city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="border p-2 rounded w-full"
      />
      <button
        onClick={handleSearch}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
