// src/components/FavoriteCities.jsx
import { useWeather } from "../context/WeatherContext";
import { useCities } from "../context/CitiesContext";

const FavoriteCities = () => {
  const { fetchWeatherData } = useWeather();
  const { cities, deleteCity, loading } = useCities();

  const handleRemove = async (id) => {
    try {
      await deleteCity(id);
    } catch (err) {
      console.error("Failed to remove city:", err);
    }
  };

// here useCities will use to fetch from database
  return (
    <div className="w-full max-w-lg mx-auto bg-white/10 rounded-lg p-4 mt-6">
      <h3 className="text-2xl bg-white bg-opacity-25 rounded-md p-2 font-semibold mb-3 text-center text-black mb-3">My Favorite Cities</h3>

      {loading && <p className="opacity-80">Loading…</p>}
      {!loading && cities.length === 0 && (
        <p className="opacity-80">No saved cities yet.</p>
      )}

      <ul className="space-y-2">
        {cities.map((c) => (
          <li
            key={c._id}
            className="flex items-center justify-between bg-white/10 px-3 py-2 rounded"
          >
            <button
              onClick={() => fetchWeatherData(c.name)}
              className="text-left text-black hover:underline"
              title="Show weather"
            >
              {c.name}
              {c.country ? `, ${c.country}` : ""}
            </button>
            <button
              onClick={() => handleRemove(c._id)}
              className="text-red-300 hover:text-red-500"
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
