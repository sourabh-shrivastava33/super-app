import { useEffect, useState } from "react";
import { fetchWeatherData } from "../services/weather-api";

export function useWeatherApi() {
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function getData() {
      setLoading(true);
      const data = await fetchWeatherData();
      setWeather(data);
      setLoading(false);
    }
    getData();
  }, [fetchWeatherData]);
  return { weather, loading };
}
