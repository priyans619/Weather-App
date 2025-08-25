// src/components/Forecast.jsx
import { useWeather } from "../context/WeatherContext";

const Forecast = () => {
  const { forecast } = useWeather();

  if (!forecast) return null;

  return (
    <div className="flex justify-center">
      <div className="p-1 rounded-xl text-black w-full max-w-lg mt-6">
        <h2 className="text-2xl bg-white bg-opacity-25 rounded-md p-2 font-semibold mb-3 text-center">
          5-Day Forecast
        </h2>
        <div className="flex flex-col gap-1">
          {forecast
            .filter((_, index) => index % 8 === 0) // pick 1 item per day (every 8th, since data is 3-hourly)
            .slice(0, 5)
            .map((item, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-25 rounded-md px-3 flex items-center justify-between"
              >
                <p className="font-medium w-20">
                  {new Date(item.dt * 1000).toLocaleDateString("en-US", {
                    weekday: "short",
                  })}
                </p>

                {/* icon */}
                <img
                  src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                  alt={item.weather[0].description}
                  className="w-12"
                />

                {/* Weather condition */}
                <p className="text-sm w-24 text-center">{item.weather[0].main}</p>

                <p className="font-bold">{item.main.temp.toFixed()} °C</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Forecast;
