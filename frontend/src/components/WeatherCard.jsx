// src/components/WeatherCard.jsx
import { useWeather } from "../context/WeatherContext";

const WeatherCard = () => {
  const { weather } = useWeather();

  if (!weather) return null;

  return (
    <div className="bg-white shadow-md rounded p-4 text-center">
      <h2 className="text-xl font-bold">{weather.city}</h2>
      <p className="text-gray-600">{weather.description}</p>
      <p className="text-3xl font-semibold">{weather.temperature}°C</p>
      <p>Humidity: {weather.humidity}%</p>
      <p>Wind: {weather.windSpeed} m/s</p>
    </div>
  );
};

export default WeatherCard;
