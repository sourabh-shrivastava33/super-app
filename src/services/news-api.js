const newsBaseUrl = "https://newsapi.org/v2";
export async function fetchNewsData({ signal } = {}) {
  try {
    const data = await fetch(
      `${newsBaseUrl}/everything?q=tech&apiKey=${
        import.meta.env.VITE_NEWS_API_KEY
      }`,
      {
        signal,
      }
    );
    const resp = await data.json();
    return resp;
  } catch (error) {
    console.log(error);
  }
}
