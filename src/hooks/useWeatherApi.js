import { useCallback, useEffect, useState } from "react";
import { fetchWeatherData } from "../services/weather-api";

export function useWeatherApi() {
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchWeatherDataMemoized = useCallback(fetchWeatherData, []);
  useEffect(() => {
    const abortController = new AbortController();
    async function getData() {
      setLoading(true);
      const data = await fetchWeatherDataMemoized({
        signal: abortController.signal,
      });
      setLoading(false);
      setWeather(data);
    }
    getData();
    return () => abortController.abort();
  }, [fetchWeatherDataMemoized]);
  return { weather, loading };
}
