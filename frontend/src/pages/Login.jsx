


import React, { useState } from "react";
import axios from "axios";
import LoginPhoto from "../assets/LoginPhoto.png";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    phone: "",
    otp: "",
  });

  const [otpSent, setOtpSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // SEND OTP
  const sendOtp = async () => {
    if (formData.phone.length !== 10) {
      alert("Please enter a valid 10-digit phone number");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/user/send-otp", {
        phone: formData.phone,
      });

      if (res.data.success) {
        setOtpSent(true);
        alert("OTP sent! (Default 1111)");
      }
    } catch (err) {
      alert("Failed to send OTP");
    }
  };

  // LOGIN
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/user/login", formData);

      if (res.data.success) {
        alert("Login successful!");

        localStorage.setItem("user", JSON.stringify(res.data.user));

        // 🔥 IMPORTANT — tell Navbar to update immediately
        window.dispatchEvent(new Event("storage"));

        navigate("/");
      }
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="fixed top-16 left-0 right-0 h-[calc(100vh-4rem)] w-full overflow-hidden bg-white">
      <div className="flex h-full w-full">

        {/* LEFT IMAGE */}
        <div className="w-1/2 h-full flex items-center justify-center bg-white">
          <img src={LoginPhoto} alt="Login" className="max-w-full max-h-full object-contain" />
        </div>

        {/* RIGHT FORM */}
        <div className="w-1/2 h-full flex items-center justify-center">
          <form className="w-4/5 max-w-md flex flex-col items-center justify-center" onSubmit={handleSubmit}>
            
            <h2 className="text-4xl text-green-700 font-medium">Sign in</h2>
            <p className="text-sm text-gray-600 mt-3 text-center">
              Welcome back! Please sign in to continue
            </p>

            {/* PHONE */}
            <div className="flex items-center w-full border border-green-400 h-12 rounded-full pl-6 gap-2 mt-8">
              <input
                type="tel"
                name="phone"
                maxLength={10}
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="bg-transparent text-gray-700 outline-none w-full"
                required
              />

              {!otpSent && (
                <button
                  type="button"
                  onClick={sendOtp}
                  className="text-green-600 font-semibold pr-4 hover:underline"
                >
                  Send OTP
                </button>
              )}
            </div>

            {/* OTP */}
            {otpSent && (
              <div className="flex items-center w-full border border-green-400 h-12 rounded-full pl-6 mt-6">
                <input
                  type="text"
                  name="otp"
                  maxLength={4}
                  placeholder="Enter OTP"
                  value={formData.otp}
                  onChange={handleChange}
                  className="bg-transparent text-gray-700 outline-none w-full"
                  required
                />
              </div>
            )}

            {/* LOGIN BUTTON */}
            <button
              type="submit"
              className="mt-8 w-full h-12 rounded-full text-white bg-gradient-to-r from-green-600 to-green-500 shadow-lg"
            >
              Login
            </button>

            {/* SIGNUP */}
            <p className="text-gray-600 text-sm mt-4 text-center">
              Don’t have an account?{" "}
              <Link to="/register" className="text-green-600 font-medium hover:underline">
                Sign up
              </Link>
            </p>
          </form>
        </div>

      </div>
    </div>
  );
}
