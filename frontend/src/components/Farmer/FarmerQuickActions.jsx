import React from "react";
import {
  PlusCircle,
  IndianRupee,
  CloudSun,
  Truck,
  PhoneCall,
  Sprout,
  FlaskConical,
  Landmark
} from "lucide-react";

export default function FarmerQuickActions() {
  const actions = [
    {
      title: "Post New Requirement",
      subtitle: "Labour • Tractor • Pickup • Transport",
      icon: <PlusCircle size={34} className="text-green-700" />,
      bg: "bg-green-100",
      onClick: () => (window.location.href = "/farmer/new-recruitment"),
    },
    {
      title: "Check Mandi Rates",
      subtitle: "Live crop prices for Wheat, Rice, Tomato, Onion",
      icon: <IndianRupee size={34} className="text-yellow-600" />,
      bg: "bg-yellow-100",
      onClick: () => alert("Open Mandi Price Page"),
    },
    {
      title: "Weather Forecast",
      subtitle: "Rain alerts • Temp • Wind • Soil advisories",
      icon: <CloudSun size={34} className="text-blue-600" />,
      bg: "bg-blue-100",
      onClick: () => alert("Open Weather Report"),
    },
    {
      title: "Book Transport",
      subtitle: "Tractor • Trolley • Pickup • Mini Truck",
      icon: <Truck size={34} className="text-orange-600" />,
      bg: "bg-orange-100",
      onClick: () => alert("Open Transport Booking"),
    },
    {
      title: "Call Helpline",
      subtitle: "Toll-Free Support: 1800-XXX-XXXX",
      icon: <PhoneCall size={34} className="text-red-600" />,
      bg: "bg-red-100",
      onClick: () => window.open("tel:1800XXXXXXX"),
    },

    // ⭐ EXTRA PRO FEATURES (added for 20+ years professional feel)
    {
      title: "Crop Advisory",
      subtitle: "Daily tips on fertilizer, pests, irrigation",
      icon: <Sprout size={34} className="text-green-700" />,
      bg: "bg-green-200",
      onClick: () => alert("Open Crop Advisory"),
    },
    {
      title: "Soil Health Check",
      subtitle: "Upload soil photo or get lab test info",
      icon: <FlaskConical size={34} className="text-purple-700" />,
      bg: "bg-purple-200",
      onClick: () => alert("Open Soil Health Tools"),
    },
    {
      title: "Govt Schemes",
      subtitle: "PM-KISAN • Crop Insurance • Subsidies",
      icon: <Landmark size={34} className="text-indigo-600" />,
      bg: "bg-indigo-100",
      onClick: () =>
        window.open("https://www.myscheme.gov.in/schemes/pmkisan", "_blank"),
    },
  ];

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold text-green-700 mb-4">
        Quick Actions
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {actions.map((card, idx) => (
          <div
            key={idx}
            onClick={card.onClick}
            className="bg-white rounded-2xl shadow-md p-6 border hover:shadow-xl cursor-pointer transition"
          >
            <div
              className={`w-16 h-16 rounded-xl flex items-center justify-center ${card.bg}`}
            >
              {card.icon}
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mt-4">
              {card.title}
            </h3>
            <p className="text-gray-600 text-sm mt-1">{card.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
