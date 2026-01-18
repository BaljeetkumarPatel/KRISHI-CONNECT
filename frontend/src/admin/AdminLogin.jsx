import { useState } from "react";

export default function AdminLogin() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Demo credentials
    if (userId === "baljeet1234" && password === "1111") {
      localStorage.setItem("admin-token", "demo-admin-token");
      window.location.href = "/admin/dashboard";
    } else {
      setError("Invalid credentials!");
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="p-6 bg-white rounded-xl shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-4 text-center">Admin Login</h1>

        {error && <p className="text-red-500 mb-2">{error}</p>}

        <form onSubmit={handleLogin}>
          <input
            className="w-full p-2 mb-3 border rounded"
            placeholder="Admin User ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />

          <input
            className="w-full p-2 mb-4 border rounded"
            type="password"
            placeholder="Admin Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
