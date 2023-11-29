export async function fetchNewsData({ signal } = {}) {
  try {
    const data = await fetch("https://news-api-g1ij.onrender.com/news", {
      signal,
    });
    const resp = await data.json();
    return resp;
  } catch (error) {
    console.log(error);
  }
}
