import React from "react";
import { Tractor, Users, Truck } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function ChooseRoleSection() {
  const navigate = useNavigate();

  const roles = [
    {
      title: "For Farmers",
      icon: <Tractor size={48} strokeWidth={1.5} />,
      points: [
        "Hire farm labour",
        "Book tractors, trolleys & mini-trucks",
        "Help with harvesting, sowing, loading & more",
        "Instant SMS confirmations",
      ],
      btn: "I am a Farmer",
      bg: "bg-green-50",
      role: "farmer",
    },
    {
      title: "For Labourers",
      icon: <Users size={48} strokeWidth={1.5} />,
      points: [
        "Find nearby daily wage jobs",
        "Update availability anytime",
        "Job alerts via IVR & SMS",
        "No smartphone required",
      ],
      btn: "I am a Labourer",
      bg: "bg-yellow-50",
      role: "labour",
    },
    {
      title: "For Transport Providers",
      icon: <Truck size={48} strokeWidth={1.5} />,
      points: [
        "Get load/transport requests instantly",
        "Register empty return trips",
        "Increase daily earnings",
        "Support: tractor, pickup, tempo, mini-truck",
      ],
      btn: "I am a Transport Provider",
      bg: "bg-blue-50",
      role: "transport",
    },
  ];

  return (
    <section className="w-full py-24 px-6 md:px-16 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-green-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Choose Your Role
        </motion.h2>

        <p className="text-gray-600 mt-3 text-lg max-w-2xl mx-auto">
          Select your category to get the right services instantly through IVR, SMS and our platform.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10 mt-16">
          {roles.map((card, index) => (
            <motion.div
              key={index}
              className={`${card.bg} rounded-3xl p-10 shadow-lg hover:shadow-xl transition border border-gray-200`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="text-green-700 flex justify-center mb-6">
                {card.icon}
              </div>

              <h3 className="text-2xl font-bold text-green-800 mb-4">
                {card.title}
              </h3>

              <ul className="text-gray-700 space-y-3 text-left mt-4">
                {card.points.map((p, i) => (
                  <li key={i} className="flex gap-2 items-start">
                    <span className="text-green-600 mt-1">✔</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => navigate(`/register?role=${card.role}`)}
                className="w-full mt-8 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition"
              >
                {card.btn}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
