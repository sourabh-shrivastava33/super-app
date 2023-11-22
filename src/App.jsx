import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registration from "./pages/registration/Registration";
import SelectCategory from "./pages/select-category/SelectCategory";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route index element={<Registration />} />
        <Route path="/select-category" element={<SelectCategory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
