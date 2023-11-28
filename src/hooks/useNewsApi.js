import { useEffect, useState } from "react";
import { fetchNewsData } from "../services/news-api";

export function useNewsApi() {
  const [news, setNews] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const abortController = new AbortController();
    async function getData() {
      setLoading(true);
      const data = await fetchNewsData({ signal: abortController.signal });

      setLoading(false);
      setNews(data);
    }
    getData();
    return () => abortController.abort();
  }, [fetchNewsData]);
  return { news, loading };
}
