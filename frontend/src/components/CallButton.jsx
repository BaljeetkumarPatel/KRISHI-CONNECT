// frontend/src/components/CallButton.jsx
import React from "react";

export default function CallButton({ onClick, label = "Call" }) {
  return (
    <button
      onClick={onClick}
      className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white shadow"
    >
      {label}
    </button>
  );
}
