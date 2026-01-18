import React from "react";
import { PhoneCall, Users, Truck, ArrowRightCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    {
      title: "Step 1: Call 1800-XXX-XXXX",
      icon: <PhoneCall size={42} />,
      description:
        "Dial our toll-free IVR number. Available 24/7 for farmers, labourers & transport providers.",
    },
    {
      title: "Step 2: Choose Your Role",
      icon: <Users size={42} />,
      description:
        "Select whether you are a Farmer, Labourer, or Transport Driver using simple keypad options.",
    },
    {
      title: "Step 3: Get the Service You Need",
      icon: <Truck size={42} />,
      description:
        "Hire labour, find work, book transport, update availability, and receive instant SMS confirmations.",
    },
  ];

  return (
    <section className="w-full bg-white py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto text-center">

        {/* Section Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-green-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          How It Works
        </motion.h2>

        <motion.p
          className="text-gray-600 text-lg mt-3 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          A simple, reliable 3-step IVR system designed for rural users with no smartphone or internet.
        </motion.p>

        {/* Steps Layout */}
        <div className="grid md:grid-cols-3 gap-12 mt-16">

          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-green-50 hover:bg-green-100 transition rounded-3xl p-8 shadow-md text-center border border-green-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex justify-center mb-6 text-green-700">
                {step.icon}
              </div>

              <h3 className="text-xl font-bold text-green-800">{step.title}</h3>

              <p className="text-gray-600 mt-3">{step.description}</p>
            </motion.div>
          ))}

        </div>

        {/* Tagline */}
        <motion.div
          className="mt-16 bg-green-700 text-white py-6 px-6 rounded-2xl shadow-xl max-w-3xl mx-auto flex items-center justify-center gap-3"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          <ArrowRightCircle size={32} />
          <p className="text-lg font-semibold">
            Designed for users with <span className="underline">NO SMARTPHONE AND INTERNET</span>.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
