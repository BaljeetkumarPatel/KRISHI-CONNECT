// frontend/src/components/Loader.jsx
import React from "react";

export default function Loader() {
  return (
    <div className="w-full flex justify-center mt-4">
      <div className="animate-spin rounded-full h-10 w-10 border-4 border-green-600 border-t-transparent"></div>
    </div>
  );
}
