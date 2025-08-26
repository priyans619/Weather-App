// src/components/SearchBar.jsx
import { useState } from "react";
import { useWeather } from "../context/WeatherContext";
import { FiSearch } from "react-icons/fi";

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
    <div className="text-center px-4 md:px-8 py-4 md:py-8">
      <div className="relative w-full md:w-[700px] mx-auto">
        
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400">
          <FiSearch size={20} />
        </div>

        <input
          type="text"
          placeholder="Enter Location..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          className="py-2 pl-10 pr-3 w-full text-lg rounded-3xl
            border border-gray-200 text-gray-600 placeholder:text-gray-400
            focus:outline-none bg-white shadow-md"
        />
      </div>
    </div>
  );
};

export default SearchBar;
