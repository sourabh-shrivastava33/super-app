export async function fetchWeatherData({ signal } = {}) {
  try {
    const data = await fetch("https://news-api-g1ij.onrender.com/weather", {
      signal,
    })
      .then((res) => res.json())
      .then((data) => data);

    return data;
  } catch (error) {
    console.log(error);
  }
}
