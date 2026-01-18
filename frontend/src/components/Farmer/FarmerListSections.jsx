import React from "react";
import { Phone, User, Truck, IndianRupee } from "lucide-react";

export default function FarmerListSections() {
  // SAMPLE DATA (later you can fetch from backend)
  const recentHires = [
    { name: "Raju", phone: "9876543210", status: "On Field", wage: "₹600/day", date: "Today" },
    { name: "Suresh", phone: "9988776655", status: "Completed", wage: "₹550/day", date: "Yesterday" },
    { name: "Mahesh", phone: "9822001100", status: "Pending", wage: "₹500/day", date: "Tomorrow" },
  ];

  const pendingPayments = [
    { name: "Suresh", amount: "₹1200", duration: "2 days", dueDate: "18 Jan", status: "Due" },
    { name: "Kiran", amount: "₹600", duration: "1 day", dueDate: "Yesterday", status: "Overdue" },
    { name: "Anil", amount: "₹1800", duration: "3 days", dueDate: "21 Jan", status: "Paid" },
  ];

  const transportBookings = [
    {
      driver: "Ramesh",
      vehicle: "Tractor + Trolley",
      route: "Field A → Market Yard",
      status: "Booked",
    },
    {
      driver: "Mohan",
      vehicle: "Pickup Truck",
      route: "Village → Cold Storage",
      status: "Completed",
    },
  ];

  const statusColor = (status) => {
    if (status === "On Field") return "text-green-600 font-bold";
    if (status === "Completed") return "text-gray-600";
    if (status === "Pending") return "text-yellow-600 font-semibold";
    if (status === "Due") return "text-orange-600 font-bold";
    if (status === "Overdue") return "text-red-600 font-bold animate-pulse";
    if (status === "Paid") return "text-green-700 font-bold";
    if (status === "Booked") return "text-blue-600 font-semibold";
    return "text-gray-700";
  };

  return (
    <div className="mt-14 space-y-12">

      {/* ======================================================== */}
      {/* 1️⃣ RECENT HIRES */}
      {/* ======================================================== */}
      <div>
        <h2 className="text-2xl font-bold text-green-700 mb-4">Recent Hires</h2>

        <div className="bg-white shadow-lg rounded-2xl p-6 overflow-x-auto border">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-gray-600 border-b">
                <th className="pb-3">Labour Name</th>
                <th className="pb-3">Phone</th>
                <th className="pb-3">Status</th>
                <th className="pb-3">Wage</th>
                <th className="pb-3">Date</th>
              </tr>
            </thead>
            <tbody>
              {recentHires.map((entry, i) => (
                <tr key={i} className="border-b last:border-none">
                  <td className="py-3 flex items-center gap-2">
                    <User size={18} className="text-green-700" />
                    {entry.name}
                  </td>
                  <td className="py-3 flex items-center gap-2">
                    <Phone size={16} className="text-gray-500" />
                    {entry.phone}
                  </td>
                  <td className={`py-3 ${statusColor(entry.status)}`}>
                    {entry.status}
                  </td>
                  <td className="py-3">{entry.wage}</td>
                  <td className="py-3">{entry.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 2️⃣ PENDING PAYMENTS */}
      {/* ======================================================== */}
      <div>
        <h2 className="text-2xl font-bold text-green-700 mb-4">Pending Payments</h2>

        <div className="bg-white shadow-lg rounded-2xl p-6 overflow-x-auto border">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-gray-600 border-b">
                <th className="pb-3">Name</th>
                <th className="pb-3">Amount</th>
                <th className="pb-3">Duration</th>
                <th className="pb-3">Due Date</th>
                <th className="pb-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {pendingPayments.map((entry, i) => (
                <tr key={i} className="border-b last:border-none">
                  <td className="py-3">{entry.name}</td>
                  <td className="py-3 text-green-700 font-semibold">{entry.amount}</td>
                  <td className="py-3">{entry.duration}</td>
                  <td className="py-3">{entry.dueDate}</td>
                  <td className={`py-3 ${statusColor(entry.status)}`}>
                    {entry.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 3️⃣ RECENT TRANSPORT BOOKINGS */}
      {/* ======================================================== */}
      <div>
        <h2 className="text-2xl font-bold text-green-700 mb-4">
          Recent Transport Bookings
        </h2>

        <div className="bg-white shadow-lg rounded-2xl p-6 overflow-x-auto border">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-gray-600 border-b">
                <th className="pb-3">Driver Name</th>
                <th className="pb-3">Vehicle</th>
                <th className="pb-3">Route</th>
                <th className="pb-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {transportBookings.map((t, i) => (
                <tr key={i} className="border-b last:border-none">
                  <td className="py-3 flex items-center gap-2">
                    <User size={18} className="text-green-700" />
                    {t.driver}
                  </td>
                  <td className="py-3 flex items-center gap-2">
                    <Truck size={18} className="text-orange-600" />
                    {t.vehicle}
                  </td>
                  <td className="py-3">{t.route}</td>
                  <td className={`py-3 ${statusColor(t.status)}`}>
                    {t.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
