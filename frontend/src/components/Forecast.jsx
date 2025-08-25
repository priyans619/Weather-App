// src/components/Forecast.jsx
import { useWeather } from "../context/WeatherContext";

const Forecast = () => {
  const { forecast } = useWeather();

  if (!forecast) return null;

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-4">
      {forecast.map((item, idx) => (
        <div
          key={idx}
          className="bg-white shadow rounded p-3 text-center"
        >
          <p className="font-bold">
            {new Date(item.dt * 1000).toLocaleDateString()}
          </p>
          <p>{item.main.temp}°C</p>
          <p className="text-sm text-gray-600">
            {item.weather[0].description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Forecast;
