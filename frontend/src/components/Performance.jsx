import React from "react";
import { FaCheckCircle, FaStar, FaUsers } from "react-icons/fa";

export default function Performance({ user }) {
  // Role-wise activity text
  const activityLabels = {
    farmer: {
      worked: "People I Have Worked For",
      jobs: "Farm Jobs Completed",
    },
    labour: {
      worked: "People Hired Before",
      jobs: "Labor Tasks Completed",
    },
    driver: {
      worked: "Transport Jobs Served",
      jobs: "Trips Completed",
    },
  };

  const role = user.role || "farmer";

  return (
    <div className="bg-green-600 text-white p-6 rounded-2xl mt-8 shadow-md">
      <h3 className="font-semibold mb-4 text-lg">Performance</h3>

      <div className="flex justify-between px-4">

        {/* Jobs Completed */}
        <div className="text-center">
          <FaCheckCircle size={22} className="mx-auto mb-1 opacity-90" />
          <p className="text-sm opacity-90">{activityLabels[role].jobs}</p>
          <p className="text-xl font-bold">0</p>
        </div>

        {/* Rating */}
        <div className="text-center">
          <FaStar size={22} className="mx-auto mb-1 opacity-90" />
          <p className="text-sm opacity-90">Rating</p>
          <p className="text-xl font-bold">0 ⭐</p>
        </div>

        {/* People Worked */}
        <div className="text-center">
          <FaUsers size={22} className="mx-auto mb-1 opacity-90" />
          <p className="text-sm opacity-90">{activityLabels[role].worked}</p>
          <p className="text-xl font-bold">0</p>
        </div>

      </div>
    </div>
  );
}
