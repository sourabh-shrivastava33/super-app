import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Registration from "./pages/registration/Registration";
import SelectCategory from "./pages/select-category/SelectCategory";
import GenreProvider from "./hooks/GenreProvider";

function App() {
  return (
    <BrowserRouter>
      <GenreProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/register" />} replace />
          <Route path="/register" element={<Registration />} />
          <Route path="/genre" element={<SelectCategory />} replace />
        </Routes>
      </GenreProvider>
    </BrowserRouter>
  );
}

export default App;
