import HomePage from "./Pages/AdminPages/HomePage";
import AdminSignINPage from "./Pages/AdminPages/AdminSignINPage";
import { Route, Routes } from "react-router-dom";
import AppointmentsPage from "./Pages/AdminPages/AppointmentsPage";
import CustomerPage from "./Pages/AdminPages/AdminCustomersPage";
import AdminTicketsPage from "./Pages/AdminPages/AdminTicketsPage";
import AdminDashboardPage from "./Pages/AdminPages/AdminDashboardPage";
import AdminChatPage from "./Pages/AdminPages/AdminChatPage";
import UserDashboard from "./Pages/UserPages/UserDashboard";
import AdminConfirmClient from "./Pages/AdminPages/AdminConfirmClient";

function App() {
  return (
    <div className="App ">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admindashboard" element={<AdminDashboardPage />} />
        <Route path="/signin" element={<AdminSignINPage />} />
        <Route path="/appointments" element={<AppointmentsPage />} />
        <Route path="/customers" element={<CustomerPage />} />
        <Route path="/tickets" element={<AdminTicketsPage />} />
        <Route path="/chat" element={<AdminChatPage />} />
        <Route path="/user" element={<UserDashboard />} />
        <Route path="/confirmClients" element={<AdminConfirmClient />} />
      </Routes>
    </div>
  );
}

export default App;
