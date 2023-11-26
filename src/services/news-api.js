const newsBaseUrl = "https://newsapi.org/v2";
export async function fetchNewsData() {
  try {
    const data = await fetch(
      `${newsBaseUrl}/everything?q=tech&apiKey=${
        import.meta.env.VITE_NEWS_API_KEY
      }`
    );
    const resp = await data.json();
    return resp;
  } catch (error) {
    console.log(error);
  }
}
