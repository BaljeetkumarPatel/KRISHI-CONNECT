// frontend/src/components/Sidebar.jsx
import React from "react";

export default function Sidebar({ active, setActive }) {
  const menu = [
    { id: "dashboard", label: "Dashboard" },
    { id: "jobs", label: "Jobs" },
    { id: "workers", label: "Workers" },
    { id: "drivers", label: "Drivers" },
    { id: "dialer", label: "Dialer" },
  ];

  return (
    <div className="w-60 bg-gray-100 h-full shadow-md p-4">
      <h2 className="font-bold text-lg mb-4">Menu</h2>

      {menu.map((item) => (
        <button
          key={item.id}
          onClick={() => setActive(item.id)}
          className={`w-full text-left px-3 py-2 my-1 rounded ${
            active === item.id ? "bg-green-600 text-white" : "hover:bg-gray-200"
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
