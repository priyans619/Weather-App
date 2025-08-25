// src/pages/Home.jsx
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import Forecast from "../components/Forecast";
import { useWeather } from "../context/WeatherContext";

const Home = () => {
  const { loading, error } = useWeather();

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-sky-950 to-blue-900 text-white px-4 py-6">
      <h1 className="text-3xl text-center text-black font-semibold mb-6">
        WEATHER APPLICATION
      </h1>

      <SearchBar />

      {loading && <p className="text-center text-gray-300">Loading...</p>}
      {error && <p className="text-center text-red-400">{error}</p>}

      {/* Weather & Forecast parallel layout */}
      <div className="flex flex-col lg:flex-row justify-center items-stretch gap-6 mt-6 max-w-7xl mx-auto px-2">
        <div className="w-full lg:w-1/2">
          <WeatherCard />
        </div>
        <div className="w-full lg:w-1/2">
          <Forecast />
        </div>
      </div>
    </div>
  );
};

export default Home;
