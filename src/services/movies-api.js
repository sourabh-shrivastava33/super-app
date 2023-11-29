export async function fetchMoviesData({ signal } = {}, id) {
  try {
    const data = await fetch(
      `https://news-api-g1ij.onrender.com/genre?g=${id}`,
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
