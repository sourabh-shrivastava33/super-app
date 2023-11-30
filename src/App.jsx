import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Registration from "./pages/registration/Registration";
import SelectCategory from "./pages/select-category/SelectCategory";
import GenreProvider from "./hooks/GenreProvider";
import HomePage from "./pages/home-page/HomePage";
import PageAuth from "./components/AuthComponent/PageAuth";
import Browser from "./pages/browser-page/Browser";

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
              <PageAuth>
                <HomePage />
              </PageAuth>
            }
          />
          <Route
            path="/browse"
            element={
              <PageAuth>
                <Browser />
              </PageAuth>
            }
          />
        </Routes>
      </GenreProvider>
    </BrowserRouter>
  );
}

export default App;
