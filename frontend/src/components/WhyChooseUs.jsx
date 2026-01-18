import React from "react";
import { motion } from "framer-motion";
import {
  Globe2,
  ShieldCheck,
  PhoneCall,
  Clock,
  Sparkles,
  UsersRound,
} from "lucide-react";

export default function WhyChooseUs() {
  const uspList = [
    {
      icon: <PhoneCall size={40} strokeWidth={1.5} />,
      title: "Offline Access",
      desc: "Works on any basic feature phone through IVR — no smartphone or app required.",
      color: "from-green-500 to-green-600",
    },
    {
      icon: <Globe2 size={40} strokeWidth={1.5} />,
      title: "Multilingual Support",
      desc: "Available in Hindi, Kannada, Telugu, Tamil, Marathi & Gujarati for wide inclusivity.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <ShieldCheck size={40} strokeWidth={1.5} />,
      title: "Verified Users",
      desc: "Basic verification ensures safe, trusted connections between farmers, labour & drivers.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: <UsersRound size={40} strokeWidth={1.5} />,
      title: "Smart Matchmaking",
      desc: "Auto-connects users within the same pincode or the nearest available workers/drivers.",
      color: "from-amber-500 to-amber-600",
    },
    {
      icon: <Clock size={40} strokeWidth={1.5} />,
      title: "24×7 Automated System",
      desc: "Always available — even during peak harvest seasons when demand is high.",
      color: "from-red-500 to-red-600",
    },
    {
      icon: <Sparkles size={40} strokeWidth={1.5} />,
      title: "Affordable Pricing",
      desc: "Subscription plans designed to be affordable for rural & agricultural communities.",
      color: "from-indigo-500 to-indigo-600",
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
          Why Choose <span className="text-green-600">Krishi-Connect?</span>
        </motion.h2>

        <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
          A system designed for rural India — simple, reliable & accessible for everyone.
        </p>

        {/* FEATURES GRID */}
        <div className="grid md:grid-cols-3 gap-10 mt-16">
          {uspList.map((usp, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
            >
              {/* Icon circle */}
              <div
                className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center text-white bg-gradient-to-br ${usp.color} shadow-lg`}
              >
                {usp.icon}
              </div>

              <h3 className="text-xl font-bold text-green-800 mt-6">
                {usp.title}
              </h3>

              <p className="text-gray-600 mt-3 leading-relaxed">{usp.desc}</p>

              {/* Language Flags */}
              {usp.languages && (
                <div className="flex justify-center gap-2 mt-4 text-2xl">
                  {usp.languages.map((flag, i) => (
                    <span key={i}>{flag}</span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
