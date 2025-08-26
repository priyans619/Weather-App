
import { useWeather } from "../context/WeatherContext";
import { useCities } from "../context/CitiesContext";
import { useState } from "react";
import Clear from "../assets/Clear.png";
import Cloudy from "../assets/Cloudy.png";
import Rain from "../assets/Rain.png";
import Haze from "../assets/Haze.png";

const WeatherCard = () => {
  const { weather } = useWeather();
  const { saveCity } = useCities();
  const [saving, setSaving] = useState(false);
  const [savedMsg, setSavedMsg] = useState("");

  if (!weather) return null;

  const name = weather.name;
  const country = weather.sys?.country || "";

  const handleSave = async () => {
    try {
      setSaving(true);
      await saveCity(name, country);
      setSavedMsg("City saved!");
      setTimeout(() => setSavedMsg(""), 1500);
    } catch (e) {
      setSavedMsg("Already saved");
      setTimeout(() => setSavedMsg(""), 1500);
    } finally {
      setSaving(false);
    }
  };

  const getBackgroundImage = () => {
    if (!weather.weather) return "";
    const condition = weather.weather[0].main;

    switch (condition) {
      case "Rain":
        return `url(${Rain})`;
      case "Clear":
        return `url(${Clear})`;
      case "Clouds":
        return `url(${Cloudy})`;
      case "Haze":
      case "Smoke":
        return `url(${Haze})`;
      default:
        return "";
    }
  };

  return (
    <div
      className="max-w-lg sm:mx-auto shadow-lg rounded-md p-5 mt-1 mx-4 text-white bg-cover bg-no-repeat"
      style={{ backgroundImage: getBackgroundImage() }}
    >
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

      {/* Save Button */}
      <div className="flex items-center gap-3">
        <button
          onClick={handleSave}
          disabled={saving}
          className="px-4 py-2 text-black rounded-md bg-white/40 hover:bg-white/70 transition disabled:opacity-50 border-2 border-black w-36 text-center"
        >
          {saving ? "Saving..." : "Save this City"}
        </button>
        {savedMsg && <span className="text-sm opacity-80">{savedMsg}</span>}
      </div>

    </div>
  );
};

export default WeatherCard;
