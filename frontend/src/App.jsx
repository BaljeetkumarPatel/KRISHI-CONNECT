
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/hexagon.css";
import Navbar from "./components/Navbar";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Profile from "./pages/Profile.jsx";
import EditProfile from "./pages/EditProfile.jsx";
import PlansPage from "./pages/PlansPage.jsx";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home.jsx";
import Service from "./pages/Service.jsx";
import ChatBot from "./pages/ChatBot.jsx";
import HistoryPage from "./pages/HistoryPage.jsx";
import NewRecruitmentForm from "./pages/Farmer/NewRecruitmentForm.jsx";
// import AdminLogin from "./admin/AdminLogin";
// import AdminDashboard from "./admin/AdminDashboard";
// import ProtectedAdmin from "./admin/ProtectedAdmin";

export default function App() {
  return (
    <Router>
      <div className="w-full min-h-screen bg-white text-gray-800">
        <Navbar />
        {/* <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedAdmin>
              <AdminDashboard />
            </ProtectedAdmin>
          }
        /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> {/* REQUIRED */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/plans" element={<PlansPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Service />} />
          <Route path="/bot" element={<ChatBot />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/farmer/new-recruitment" element={<NewRecruitmentForm />} />
        </Routes>
  

        

      </div>
    </Router>
  );
}
