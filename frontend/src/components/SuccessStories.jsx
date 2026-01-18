import React from "react";
import { motion } from "framer-motion";

// Generate avatar
const avatar = (name) =>
  `https://ui-avatars.com/api/?name=${encodeURIComponent(
    name
  )}&background=91E8B6&color=064E3B`;

// ================= TESTIMONIAL DATA =================
const STORIES = [
  {
    name: "Ramesh",
    role: "Farmer",
    place: "Karnataka",
    lang: "English",
    message: "Earlier it took me hours to find labour. Now one call is enough.",
    translation: null,
    img: avatar("Ramesh Farmer"),
  },
  {
    name: "Shankar",
    role: "Labourer",
    message: "Now I get regular work and don’t have to wait at the naka.",
    place: "",
    lang: "English",
    translation: null,
    img: avatar("Shankar"),
  },
  {
    name: "Mahesh",
    role: "Driver",
    message: "My tractor stays busy every day thanks to instant load alerts.",
    lang: "English",
    place: "",
    translation: null,
    img: avatar("Mahesh"),
  },

  // ————— Multilingual Testimonials —————

  {
    name: "Rajeshwari Devi",
    role: "Labourer",
    place: "Bihar",
    lang: "Hindi 🇮🇳",
    message:
      "पहले काम ढूंढने के लिए शहर जाना पड़ता था। कृषि-कनेक्ट पर बस एक कॉल किया, और मुझे गांव में ही 5 दिन का काम मिल गया।",
    translation:
      "Earlier I had to travel to the city for work. One call to Krishi-Connect gave me 5 days of work in my own village.",
    img: avatar("Rajeshwari Devi"),
  },

  {
    name: "Vikramjeet Singh",
    role: "Transporter",
    place: "Punjab",
    lang: "English 🇬🇧",
    message:
      "My truck used to return empty. Now I find return trips easily and my earnings increased by 40%.",
    translation: null,
    img: avatar("Vikramjeet"),
  },

  {
    name: "Suresh Patil",
    role: "Farmer",
    place: "Nashik, Maharashtra",
    lang: "Marathi 🚩",
    message:
      "टोमॅटो तोडणीसाठी मजूर मिळत नव्हते. 20 मिनिटांत 8 मजुरांचे कन्फर्मेशन आले!",
    translation:
      "Could not find labour for tomato harvesting. Received confirmation for 8 labourers in 20 minutes!",
    img: avatar("Suresh Patil"),
  },

  {
    name: "Dipankar Roy",
    role: "Labourer",
    place: "West Bengal",
    lang: "Bengali 🐯",
    message:
      "আগে ঠিকাদারের আশায় বসে থাকতে হতো। এখন আমি নিজে ফোন করে কাজ পাই!",
    translation:
      "Earlier I had to depend on contractors. Now I find work myself by calling!",
    img: avatar("Dipankar Roy"),
  },

  {
    name: "Anjali Reddy",
    role: "Farmer",
    place: "Guntur, Andhra Pradesh",
    lang: "Telugu 🌶️",
    message:
      "రవాణా బ్రోకర్లు ఎక్కువ కమీషన్ అడిగేవారు. ఇప్పుడు డ్రైవర్‌తో నేరుగా మాట్లాడగలుగుతున్నాను.",
    translation:
      "Brokers charged high commission earlier. Now I speak directly with the driver.",
    img: avatar("Anjali Reddy"),
  },

  {
    name: "Hameed K",
    role: "Transporter",
    place: "Kochi, Kerala",
    lang: "Malayalam 🌴",
    message:
      "പേയ്മെന്റ് പ്രശ്നങ്ങളില്ല. 'Service Pause' ഫീച്ചർ എനിക്ക് ഉപകരിക്കുന്നു.",
    translation:
      "No payment issues. The 'Service Pause' feature is very useful when my vehicle is full.",
    img: avatar("Hameed"),
  },
];

// ================= CARD COMPONENT =================
const TestimonialCard = ({ story }) => (
  <div className="bg-white shadow-lg border border-green-200 rounded-3xl p-6 w-80 mx-4 flex-shrink-0">
    {/* Profile */}
    <div className="flex items-center gap-4">
      <img
        src={story.img}
        className="w-14 h-14 rounded-full object-cover border-2 border-green-300"
      />
      <div>
        <h3 className="text-lg font-bold text-green-700">{story.name}</h3>
        <p className="text-sm text-gray-600">{story.role}</p>
        <p className="text-xs text-gray-500">{story.lang}</p>
      </div>
    </div>

    {/* Message */}
    <p className="mt-4 text-gray-700 italic leading-relaxed">
      “{story.message}”
    </p>

    {/* Translation if available */}
    {story.translation && (
      <p className="mt-3 text-gray-500 text-sm">
        <span className="font-semibold text-green-700">English: </span>
        {story.translation}
      </p>
    )}
  </div>
);

// ================= MAIN SECTION =================
export default function SuccessStories() {
  return (
    <div className="bg-green-50 py-20 overflow-hidden">
      <h2 className="text-4xl font-extrabold text-green-700 text-center mb-4">
        Success Stories from Across India
      </h2>
      <p className="text-center text-gray-600 mb-10">
        Real people. Real impact. One simple phone call.
      </p>

      {/* Scrolling Row */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            duration: 40,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {/* Duplicate list twice to enable infinite loop */}
          {[...STORIES, ...STORIES].map((story, i) => (
            <TestimonialCard story={story} key={i} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
