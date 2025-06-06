import axios from "axios";

export const openWeatherAPI = axios.create({
  baseURL: process.env.OPEN_WEATHER_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
