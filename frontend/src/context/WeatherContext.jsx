
import { createContext, useContext, useState } from "react";
import { getCurrentWeather, getForecast } from "../api/weatherApi";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeatherData = async (city) => {
    try {
      setLoading(true);
      setError(null);

      const current = await getCurrentWeather(city);
      const forecastData = await getForecast(city);

      setWeather(current);
      setForecast(forecastData.list);
    } catch (err) {
      setError("Failed to fetch weather data !!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <WeatherContext.Provider
      value={{ weather, forecast, loading, error, fetchWeatherData }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
