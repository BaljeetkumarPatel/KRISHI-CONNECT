import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FiArrowLeft, FiSave } from "react-icons/fi";

export default function EditProfile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    role: "",
    language: "",
    pincode: "",
  });

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (!savedUser) return navigate("/login");

    setUser(savedUser);

    // Prefill form
    setFormData({
      role: savedUser.role,
      language: savedUser.language,
      pincode: savedUser.pincode,
    });
  }, []);

  if (!user) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // -----------------------
  // UPDATE PROFILE API CALL
  // -----------------------
  const updateProfile = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put(
        `http://localhost:5000/api/user/update/${user._id}`,
        formData
      );

      if (res.data.success) {
        // Update localStorage
        localStorage.setItem("user", JSON.stringify(res.data.user));

        alert("Profile updated successfully!");
        navigate("/profile");
      }
    } catch (err) {
      alert(err.response?.data?.message || "Failed to update profile");
    }
  };

  return (
    <div className="min-h-screen bg-green-50 pt-24 px-6 md:px-20 lg:px-32">

      {/* HEADER */}
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={() => navigate("/profile")}
          className="flex items-center gap-2 text-green-700 hover:underline"
        >
          <FiArrowLeft /> Back to Profile
        </button>
      </div>

      <div className="bg-white shadow-xl rounded-3xl p-10 max-w-2xl mx-auto">

        <h2 className="text-2xl font-bold text-green-700 mb-6">
          Edit Profile
        </h2>

        <form className="space-y-6" onSubmit={updateProfile}>

          {/* NAME (READONLY) */}
          <div>
            <label className="block text-gray-700 mb-1">Phone Number</label>
            <input
              type="text"
              value={user.phone}
              disabled
              className="w-full border px-4 py-2 rounded-lg bg-gray-100 cursor-not-allowed"
            />
          </div>

          {/* ROLE / PROFESSION */}
          <div>
            <label className="block text-gray-700 mb-1">Profession</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-lg bg-white focus:ring-2 focus:ring-green-400"
            >
              <option value="farmer">Farmer</option>
              <option value="labour">Labour</option>
              <option value="transport">Transport Provider</option>
            </select>
          </div>

          {/* LANGUAGE */}
          <div>
            <label className="block text-gray-700 mb-1">
              Preferred Language
            </label>
            <select
              name="language"
              value={formData.language}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-lg bg-white focus:ring-2 focus:ring-green-400"
            >
              <option value="hi">Hindi</option>
              <option value="kn">Kannada</option>
              <option value="en">English</option>
              <option value="te">Telugu</option>
              <option value="ta">Tamil</option>
            </select>
          </div>

          {/* PINCODE */}
          <div>
            <label className="block text-gray-700 mb-1">Pincode</label>
            <input
              type="text"
              name="pincode"
              maxLength={6}
              value={formData.pincode}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
            />
          </div>

          {/* SAVE BUTTON */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg flex items-center justify-center gap-3 text-lg hover:bg-green-700 transition active:scale-95"
          >
            <FiSave /> Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}
