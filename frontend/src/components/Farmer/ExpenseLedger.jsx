import React from "react";
import { Wallet, IndianRupee } from "lucide-react";

export default function ExpenseLedger() {
  const expenses = [
    { name: "Labour Payment", amount: 1800, date: "Today" },
    { name: "Tractor Fuel", amount: 950, date: "Yesterday" },
    { name: "Fertilizer", amount: 3200, date: "3 days ago" },
    { name: "Seeds Purchase", amount: 1500, date: "Last week" },
  ];

  const total = expenses.reduce((acc, e) => acc + e.amount, 0);

  return (
    <div className="mt-14">
      <h2 className="text-2xl font-bold text-green-700 flex items-center gap-2">
        <Wallet size={26} />
        Expense Ledger (Digital Bahi-Khata)
      </h2>

      <div className="mt-4 bg-white p-6 rounded-2xl shadow border border-gray-200">
        <table className="w-full">
          <thead>
            <tr className="text-left text-gray-700 border-b">
              <th className="py-2">Expense</th>
              <th className="py-2">Amount</th>
              <th className="py-2">Date</th>
            </tr>
          </thead>

          <tbody>
            {expenses.map((e, i) => (
              <tr key={i} className="border-b text-gray-700">
                <td className="py-2">{e.name}</td>
                <td className="py-2 font-semibold">₹{e.amount}</td>
                <td className="py-2 text-sm text-gray-500">{e.date}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Total Summary */}
        <div className="flex justify-between mt-4 text-lg font-bold text-green-700">
          <span>Total Expense:</span>
          <span className="flex items-center gap-1">
            <IndianRupee size={20} /> {total}
          </span>
        </div>
      </div>
    </div>
  );
}
