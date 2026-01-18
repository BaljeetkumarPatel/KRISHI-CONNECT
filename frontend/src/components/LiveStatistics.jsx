import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Users, Briefcase, Truck, MapPinned } from "lucide-react";

export default function LiveStatistics() {
  const stats = [
    {
      icon: <Users size={38} strokeWidth={1.5} />,
      value: 12567,
      label: "Users Registered",
      color: "from-green-500/70 to-green-600/90",
    },
    {
      icon: <Briefcase size={38} strokeWidth={1.5} />,
      value: 4505,
      label: "Jobs Completed",
      color: "from-blue-500/70 to-blue-600/90",
    },
    {
      icon: <Truck size={38} strokeWidth={1.5} />,
      value: 759,
      label: "Transport Trips Booked",
      color: "from-amber-500/70 to-amber-600/90",
    },
    {
      icon: <MapPinned size={38} strokeWidth={1.5} />,
      value: 122,
      label: "Villages Connected",
      color: "from-purple-500/70 to-purple-600/90",
    },
  ];

  return (
    <section className="w-full bg-white py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto text-center">

        {/* HEADING */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-green-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Live <span className="text-green-600">Statistics</span>
        </motion.h2>

        <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
          Real-time numbers showing how Krishi-Connect is impacting rural India.
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-4 gap-10 mt-16">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              className="rounded-3xl p-8 bg-white backdrop-blur-xl border border-gray-200 shadow-xl hover:shadow-2xl transition"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.04 }}
            >
              {/* ICON */}
              <div
                className={`w-20 h-20 mx-auto rounded-2xl flex items-center justify-center 
                text-white bg-gradient-to-br ${item.color} shadow-lg`}
              >
                {item.icon}
              </div>

              {/* NUMBER COUNTER WITH ANIMATION */}
              <h3 className="text-4xl md:text-5xl font-extrabold text-green-700 mt-6">
                <CountUp
                  start={0}
                  end={item.value}
                  duration={3}
                  separator=","
                  delay={i * 0.3}
                />
                +
              </h3>

              {/* LABEL */}
              <p className="text-gray-600 mt-2 font-medium text-lg">{item.label}</p>
            </motion.div>
          ))}
        </div>

        <p className="text-gray-700 text-xl font-medium mt-14">
          Growing every day as we help connect rural India.
        </p>
      </div>
    </section>
  );
}
