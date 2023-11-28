import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Registration from "./pages/registration/Registration";
import SelectCategory from "./pages/select-category/SelectCategory";
import GenreProvider from "./hooks/GenreProvider";
import HomePage from "./pages/home-page/HomePage";
import HomePageAuth from "./components/AuthComponent/HomePageAuth";
// https://image.tmdb.org/t/p/w500
function App() {
  return (
    <BrowserRouter>
      <GenreProvider>
        <Routes>
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
