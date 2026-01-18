import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, ChevronDown } from "lucide-react";
import Footer from "../components/Footer";

export default function ContactPage() {
  const [category, setCategory] = useState("Feedback");

  const categories = [
    "Feedback",
    "Complaint",
    "Suggestions",
    "Work with Us",
    "Technical Issue",
    "Partnership / Collaboration",
  ];

  const developers = [
    { name: "Baljeet Kumar Patel", role: "Full Stack Developer", img: "https://ui-avatars.com/api/?name=Baljeet+Patel" },
    { name: "Saksham Agarwal", role: "Backend Developer", img: "https://ui-avatars.com/api/?name=Saksham+Agarwal" },
    { name: "Shaik Sania Tehseen", role: "Frontend Developer", img: "https://ui-avatars.com/api/?name=Shaik+Sania" },
    { name: "Neha Myageri", role: "UI/UX Designer", img: "https://ui-avatars.com/api/?name=Neha+Meyagiri" },
    { name: "Vivek SM", role: "Mobile App Developer", img: "https://ui-avatars.com/api/?name=Vivek+Kumar" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-16 px-6 md:px-16 lg:px-24">

      
      <div className="max-w-4xl mx-auto mt-14">
        <div className="bg-white rounded-3xl shadow-xl p-10">
          <h2 className="text-3xl font-bold text-green-700 mb-6">
            Send us a Message
          </h2>

          {/* FORM */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="text-gray-600">Your Name</label>
              <input
                type="text"
                className="w-full mt-2 p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-600 outline-none"
                placeholder="Enter your name"
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>

            <div>
              <label className="text-gray-600">Email</label>
              <input
                type="email"
                className="w-full mt-2 p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-600 outline-none"
                placeholder="Enter your email"
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>

            {/* CATEGORY DROPDOWN */}
            <div>
              <label className="text-gray-600">Category</label>
              <select
                className="w-full mt-2 p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-600 outline-none"
                onChange={(e) => setForm({ ...form, category: e.target.value })}
              >
                <option value="">Select Category</option>
                {categories.map((c, idx) => (
                  <option key={idx} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <div></div>

            <div className="md:col-span-2">
              <label className="text-gray-600">Message</label>
              <textarea
                rows="5"
                className="w-full mt-2 p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-600 outline-none"
                placeholder="Write your message..."
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              ></textarea>
            </div>
          </div>

          <button className="mt-6 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-xl font-semibold shadow-md transition">
            Send Message
          </button>
        </div>
        {/* </motion.div> */}
      </div>

      {/* ---------------------------------------------------------------- */}
      {/*             MEET THE DEVELOPERS — PROFESSIONAL TEAM              */}
      {/* ---------------------------------------------------------------- */}
      <section className="mb-20">
        <h2 className="text-4xl font-bold text-center text-green-700">Meet the Developers</h2>
        <p className="text-gray-600 text-center mb-10">Our passionate team behind Krishi-Connect</p>

        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {developers.slice(0, 3).map((dev, i) => (
            <DeveloperCard key={i} dev={dev} />
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-3xl mx-auto mt-10">
          {developers.slice(3).map((dev, i) => (
            <DeveloperCard key={i} dev={dev} />
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/*                        COLLEGE INFORMATION                       */}
      {/* ---------------------------------------------------------------- */}
      <section className="mb-20">
        <h2 className="text-4xl font-bold text-green-700 text-center mb-10">
          Our Associated Institutions
        </h2>

        <div className="grid md:grid-cols-2 gap-16">

          {/* BMSIT */}
          <CollegeCard
            title="BMS Institute of Technology & Management"
            phone="+91 080 2951 7300"
            email="info@bmsit.in"
            location="Doddaballapur Main Road, Bengaluru"
            mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.678962915927!2d77.59260967507784!3d13.069667587255105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae177eefb4e3c3%3A0xba6bf08c3c5a1a56!2sBMS%20Institute%20of%20Technology%20and%20Management!5e0!3m2!1sen!2sin!4v1707049456780!5m2!1sen!2sin"
          />

          {/* UAS Dharwad */}
          <CollegeCard
            title="University of Agricultural Sciences, Dharwad"
            phone="+91 0836 274 7958"
            email="uasd@uasd.edu"
            location="Dharwad, Karnataka"
            mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.391493683374!2d75.00433077507689!3d15.458308285143229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf669fa9e4200f%3A0x2c3c8e7c2dbf731a!2sUniversity%20of%20Agricultural%20Sciences%2C%20Dharwad!5e0!3m2!1sen!2sin!4v1707049534479!5m2!1sen!2sin"
          />
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/*                           EXTRA SECTION                          */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-green-600 text-white rounded-3xl p-12 text-center shadow-xl">
        <h2 className="text-3xl font-bold mb-4">We are here to help you</h2>
        <p className="max-w-2xl mx-auto text-lg opacity-90">
          Our mission is to connect Farmers, Labourers, and Transport Providers seamlessly.
          If you face any issue or want to collaborate, we’re just one message away.
        </p>
      </section>
      <Footer />
    </div>
  );
}


/* ------------------------- Developer Card Component ------------------------ */

const DeveloperCard = ({ dev }) => (
  <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition">
    <img
      src={dev.img}
      alt={dev.name}
      className="w-24 h-24 rounded-full mx-auto object-cover mb-4 border-4 border-green-200"
    />
    <h3 className="text-xl font-bold text-green-700">{dev.name}</h3>
    <p className="text-gray-600">{dev.role}</p>
  </div>
);


/* ------------------------- College Card Component ------------------------- */

const CollegeCard = ({ title, phone, email, location, mapSrc }) => (
  <div className="bg-white shadow-xl rounded-3xl overflow-hidden">
    <iframe
      src={mapSrc}
      className="w-full h-72"
      allowFullScreen=""
      loading="lazy"
    ></iframe>

    <div className="p-6">
      <h3 className="text-2xl font-bold text-green-700">{title}</h3>

      <p className="mt-2 flex items-center gap-2 text-gray-700">
        <Phone size={18} /> {phone}
      </p>

      <p className="mt-2 flex items-center gap-2 text-gray-700">
        <Mail size={18} /> {email}
      </p>

      <p className="mt-2 flex items-center gap-2 text-gray-700">
        <MapPin size={18} /> {location}
      </p>
    </div>
  </div>
  
);
