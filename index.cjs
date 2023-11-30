const express = require("express");
const axios = require("axios");
const PORT = 3000;
require("dotenv").config();
const cors = require("cors");
const app = express();
app.use(
  cors({
    origin: ["https://super-app-six.vercel.app", "http://localhost:5173"],
  })
);

app.get("/news", async (req, res) => {
  try {
    const data = await axios(
      `https://newsapi.org/v2/everything?q=tech&apiKey=${process.env.VITE_NEWS_API_KEY}`
    );

    res.json(data.data);
  } catch (error) {
    console.log(error);
    res.json({ err: error });
  }
});
app.get("/weather", async (req, res) => {
  try {
    const data = await axios(
      `http://api.weatherapi.com/v1/current.json?key=${process.env.VITE_WEATHER_API_KEY}&q="Bilaspur`
    );

    res.json(data.data);
  } catch (error) {
    console.log(error);
    res.json({ err: error });
  }
});
app.get("/genre", async (req, res) => {
  try {
    const { g, p = 1 } = req.query;

    const data = await axios(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.VITE_MOVIE_API_KEY}&sort_by=popularity.desc&with_genres=${g}&page=${p}`
    );

    res.json(data.data);
  } catch (error) {
    console.log(error);
    res.json({ err: error });
  }
});

app.listen(PORT, () => {
  console.log(`server listening at port ${PORT}`);
});
