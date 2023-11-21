import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registration from "./pages/registration/Registration";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
