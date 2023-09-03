import HomePage from "./pages/Homepage/HomePage";
import DoctorsListPage from "./pages/DoctorsListPage/DoctorsListPage";
import DoctorDetailPage from "./pages/DoctorDetailPage/DoctorDetailPage";

import LoginPage from "./pages/LoginPage/LoginPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyAppointmentsPage from "./pages/MyAppointmentsPage/MyAppointmentsPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/doctors" element={<DoctorsListPage />} />
          <Route path="/doctors/:id" element={<DoctorDetailPage />} />
          <Route path="/myappointments" element={<MyAppointmentsPage />} />
          <Route path="/users" element={<LoginPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
