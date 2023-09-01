import HomePage from "./pages/Homepage/HomePage";
import DoctorsListPage from "./pages/DoctorsListPage/DoctorsListPage";
import DoctorDetailPage from "./pages/DoctorDetailPage/DoctorDetailPage";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/doctors" element={<DoctorsListPage />} />
          <Route path="/doctors/:id" element={<DoctorDetailPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
