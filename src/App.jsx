import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Registration from "./pages/registration/Registration";
import SelectCategory from "./pages/select-category/SelectCategory";
import GenreProvider from "./hooks/GenreProvider";
import { useEffect } from "react";
import HomePage from "./pages/home-page/HomePage";
import HomePageAuth from "./components/HomePageAuth";

function App() {
  // useEffect(() => {
  //   async function fetchWeather() {
  //     try {
  //       const response = await fetch(
  //         "http://api.weatherapi.com/v1/current.json?key=27fb7db9a0e24d28bf5194300232311&q=Bilaspur"
  //       );
  //       const data = await response.json();
  //       return data;
  //     } catch (error) {
  //       console.error("Error fetching weather data:", error);
  //     }
  //   }

  //   async function fetchData() {
  //     const data = await fetchWeather();
  //     console.log(data);
  //   }

  //   fetchData();
  // }, []);

  return (
    <BrowserRouter>
      <GenreProvider>
        <Routes>
          {/* <Route path="/" element={<Navigate to="/register" />} replace /> */}
          <Route path="/register" element={<Registration />} />
          <Route path="/genre" element={<SelectCategory />} />
          <Route
            path="/"
            element={
              <HomePageAuth>
                <HomePage />
              </HomePageAuth>
            }
          />
        </Routes>
      </GenreProvider>
    </BrowserRouter>
  );
}

export default App;
