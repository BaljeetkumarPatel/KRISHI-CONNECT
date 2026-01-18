// src/components/HeroSection.jsx

import React from "react";

export default function HeroSection() {
  return (
    <div className="w-full bg-gradient-to-r from-green-600 to-green-400 text-white rounded-3xl shadow-xl p-8 md:p-12 mb-8 mt-20">
      
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-extrabold leading-snug">
        Smart Agricultural Ecosystem Services
      </h1>

      {/* Sub Title */}
      <p className="text-lg md:text-xl font-semibold mt-2 opacity-90">
        Bridging the Gap Between Farmers, Laborers, and Logistics
      </p>

      {/* Description */}
      <p className="text-sm md:text-base mt-4 max-w-3xl opacity-90">
        We don’t just list contacts — our intelligent engine analyzes real-time requirements 
        and automatically generates optimized matches for farmers, laborers, and transporters. 
        No guesswork. No delays. Just smart rural automation.
      </p>
    </div>
  );
}
