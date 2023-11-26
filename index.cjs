const express = require("express");
const axios = require("axios");
const PORT = 3000;
require("dotenv").config();
const cors = require("cors");
const app = express();
app.use(cors());

app.get("/news", async (req, res) => {
  const newsBaseUrl = "https://newsapi.org/v2";
  try {
    const data = await axios(
      `${newsBaseUrl}/everything?q=tech&apiKey=${process.env.VITE_NEWS_API_KEY}`
    );

    res.json(data.data);
  } catch (error) {
    console.log(error);
  }
});
app.listen(PORT, () => {
  console.log(`server listening at port ${PORT}`);
});
