// src/components/WeatherCard.jsx
import { useWeather } from "../context/WeatherContext";

const WeatherCard = () => {
  const { weather } = useWeather();

  if (!weather) return null;

  return (
    <div className="max-w-lg sm:mx-auto bg-gradient-to-r from-blue-500 to-blue-700 shadow-lg rounded-md p-7 mt-8 mx-4 text-white">
      <div className="flex justify-between w-full">
        {/* Left side */}
        <div className="w-1/2 my-4 mx-auto flex justify-between items-center">
          <div className="flex flex-col items-start justify-between h-full">
            <div>
              <p className="text-xl font-semibold">
                {weather.name}, {weather.sys.country}
              </p>
              <p className="text-sm font-semibold">
                {weather.weather[0].description}
              </p>
            </div>
            <div>
              <h1 className="text-blue-200 text-6xl font-semibold">
                {weather.main.temp.toFixed()} °C
              </h1>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="w-1/2 flex flex-col justify-between items-end">
          <div className="relative">
            <img
              src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt="weather icon"
              className="w-[120px]"
            />
          </div>

          <div className="flex flex-col justify-evenly gap-y-2 my-4 mx-auto sm:text-xs">
            <div className="flex justify-between gap-x-8">
              <p>Feels Like</p>
              <p className="font-bold w-20">
                {weather.main.feels_like.toFixed()} °C
              </p>
            </div>
            <div className="flex justify-between gap-x-8">
              <p>Humidity</p>
              <p className="font-bold w-20">{weather.main.humidity} %</p>
            </div>
            <div className="flex justify-between gap-x-8">
              <p>Wind Speed</p>
              <p className="font-bold w-20">
                {weather.wind.speed.toFixed()} Kph
              </p>
            </div>
            <div className="flex justify-between gap-x-8">
              <p>Pressure</p>
              <p className="font-bold w-20">{weather.main.pressure} hPa</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
