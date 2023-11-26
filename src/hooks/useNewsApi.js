import { useEffect, useState } from "react";
import { fetchNewsData } from "../services/news-api";

export function useNewsApi() {
  const [news, setNews] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function getData() {
      setLoading(true);
      const data = await fetchNewsData();
      setNews(data);
      setLoading(false);
    }
    getData();
  }, []);
  return { news, loading };
}
