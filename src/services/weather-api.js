const weatherBaseUrl = "http://api.weatherapi.com/v1";
export async function fetchWeatherData() {
  try {
    const data = await fetch(
      `${weatherBaseUrl}/current.json?key=${
        import.meta.env.VITE_WEATHER_API_KEY
      }&q="Bilaspur`
    )
      .then((res) => res.json())
      .then((data) => data);

    return data;
  } catch (error) {
    console.log(error);
  }
}
