// src/pages/Home.jsx
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import Forecast from "../components/Forecast";
import FavoriteCities from "../components/FavoriteCities";
import { useWeather } from "../context/WeatherContext";

const Home = () => {
  const { loading, error } = useWeather();

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-sky-950 to-blue-900 text-white px-4 py-6">
      <h1 className="text-3xl text-center text-black font-semibold">
        WEATHER APPLICATION
      </h1>

      <SearchBar />

      <div className="h-6 flex items-center justify-center">
        {loading && <p className="text-gray-300">Loading...</p>}
        {error && <p className="text-red-400">{error}</p>}
      </div>

      {/* Weather & Forecast parallel layout */}
      <div className="flex flex-col lg:flex-row justify-center items-stretch gap-6 mb-10 max-w-7xl mx-auto px-2">
        <div className="w-full lg:w-1/2">
          <WeatherCard />
        </div>
        <div className="w-full lg:w-1/2">
          <Forecast />
        </div>
      </div>
      <FavoriteCities />
    </div>
  );
};

export default Home;
