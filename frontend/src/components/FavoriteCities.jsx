
import { useEffect, useState } from "react";
import { getCities, removeCity } from "../api/citiesApi";
import { useWeather } from "../context/WeatherContext";

const FavoriteCities = () => {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);
  const { fetchWeatherData } = useWeather();

  const load = async () => {
    try {
      setLoading(true);
      const data = await getCities();
      setCities(data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const handleRemove = async (id) => {
    await removeCity(id);
    setCities(prev => prev.filter(c => c._id !== id));
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-white/10 rounded-lg p-4 mt-6">
      <h3 className="text-xl font-semibold mb-3">My Favorite Cities</h3>

      {loading && <p className="opacity-80">Loading…</p>}
      {!loading && cities.length === 0 && <p className="opacity-80">No saved cities yet.</p>}

      <ul className="space-y-2">
        {cities.map((c) => (
          <li key={c._id} className="flex items-center justify-between bg-white/10 px-3 py-2 rounded">
            <button
              onClick={() => fetchWeatherData(c.name)}
              className="text-left hover:underline"
              title="Show weather"
            >
              {c.name}{c.country ? `, ${c.country}` : ""}
            </button>
            <button
              onClick={() => handleRemove(c._id)}
              className="text-red-200 hover:text-red-100"
              title="Remove"
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoriteCities;
