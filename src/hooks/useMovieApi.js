import { useEffect, useState } from "react";
import { fetchMoviesData } from "../services/movies-api";

export function useMoviesApi(id) {
  const [movies, setMovies] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const abortController = new AbortController();
    async function getData() {
      const data = await fetchMoviesData(
        { signal: abortController.signal },
        id
      );
      const moviesArr = data.results.slice(5, 9);

      setMovies(moviesArr);
      setLoading(false);
    }
    getData();
    return () => abortController.abort();
  }, [fetchMoviesData]);
  return { movies, loading };
}
