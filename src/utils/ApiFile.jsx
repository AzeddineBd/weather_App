import axios from "axios";

export const fetchWeatherData = async (location) => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}&units=metric`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log("Error fetching weather data:", error);
    return;
  }
};

export const fetchAirData = async (lat, lon) => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log("Error fetching air data:", error);
    return;
  }
};

export const fetchCity = async (query) => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const url = `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${apiKey}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log("Error fetching City data:", error);
    return;
  }
};
