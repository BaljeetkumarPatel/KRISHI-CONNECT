import React, { useEffect, useState } from "react";
import axios from "axios";

export default function HistoryPage() {
  const API = "http://localhost:5000/api";
  const token = localStorage.getItem("token");

  const [history, setHistory] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/history`, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => setHistory(res.data));
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-5">
      <h1 className="text-2xl font-bold text-yellow-700 mb-4">📜 Your Bot History</h1>

      {history.map((h) => (
        <div
          key={h._id}
          className="bg-gray-100 p-4 mb-3 rounded shadow hover:bg-gray-200 cursor-pointer"
        >
          <strong>Q:</strong> {h.question}
          <br />
          <strong>A:</strong> {h.answer}
          <div className="text-xs text-gray-500 mt-1">
            {new Date(h.createdAt).toLocaleString()}
          </div>
        </div>
      ))}
    </div>
  );
}
