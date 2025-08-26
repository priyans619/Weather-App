// src/App.jsx
import Home from "./pages/Home";
import { WeatherProvider } from "./context/WeatherContext";
import { CitiesProvider } from "./context/CitiesContext";

function App() {
  return (
    <WeatherProvider>
      <CitiesProvider>
        <Home />
      </CitiesProvider>
    </WeatherProvider>
  );
}

export default App;
