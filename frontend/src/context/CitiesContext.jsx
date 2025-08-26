
import { createContext, useContext, useState, useEffect } from "react";
import { getCities, addCity, removeCity } from "../api/citiesApi";

const CitiesContext = createContext();

export const CitiesProvider = ({ children }) => {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // fetch saved cities initially
  useEffect(() => {
    const fetchCities = async () => {
      try {
        setLoading(true);
        const data = await getCities();
        setCities(data);
      } catch (err) {
        setError("Failed to load saved cities");
      } finally {
        setLoading(false);
      }
    };
    fetchCities();
  }, []);

  // add new city
  const saveCity = async (name, country) => {
    try {
      const newCity = await addCity(name, country);
      setCities((prev) => [...prev, newCity]); // instantly update state
      return newCity;
    } catch (err) {
      setError("Failed to save city");
      throw err;
    }
  };

  // remove city
  const deleteCity = async (id) => {
    try {
      await removeCity(id);
      setCities((prev) => prev.filter((c) => c._id !== id));
    } catch (err) {
      setError("Failed to delete city");
      throw err;
    }
  };

  return (
    <CitiesContext.Provider
      value={{ cities, loading, error, saveCity, deleteCity }}
    >
      {children}
    </CitiesContext.Provider>
  );
};

export const useCities = () => useContext(CitiesContext);
