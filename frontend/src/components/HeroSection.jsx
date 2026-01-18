// import React from "react";
// import { PhoneCall, ChevronRight } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// export default function HeroSection() {
//   const navigate = useNavigate();

//   return (
//     <section className="w-full bg-green-50 pt-28 pb-16 px-6 md:px-16 lg:px-24">
//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

//         {/* LEFT TEXT SIDE */}
//         <div>
//           <h1 className="text-4xl md:text-5xl font-extrabold text-green-700 leading-snug">
//             Farming, Labour & Transport —
//             <span className="text-green-600 block mt-2">Connected in One Call</span>
//           </h1>

//           <p className="text-gray-600 mt-4 text-lg leading-relaxed">
//             No smartphone? No internet? No problem.  
//             Our IVR system helps farmers, labourers & drivers get assistance instantly.
//           </p>

//           <div className="flex gap-4 mt-8">
//             <button
//               onClick={() => navigate("/register")}
//               className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl text-lg shadow-md flex items-center gap-2"
//             >
//               Register Now <ChevronRight size={20} />
//             </button>

//             <button
//               onClick={() => navigate("/plans")}
//               className="border border-green-600 text-green-700 hover:bg-green-100 px-6 py-3 rounded-xl text-lg flex items-center gap-2"
//             >
//               View Plans
//             </button>
//           </div>

//           {/* CALL INFO */}
//           <div className="flex items-center gap-3 mt-6 text-green-700 font-medium">
//             <PhoneCall size={22} />
//             <span>Call our toll-free helpline: <strong>1800-XXX-XXXX</strong></span>
//           </div>
//         </div>

//         {/* RIGHT IMAGE */}
//         <div className="flex justify-center">
//           <img
//             src="https://img.freepik.com/free-vector/phone-calling-concept-illustration_114360-6434.jpg"
//             alt="Farmer calling"
//             className="w-[90%] max-w-md drop-shadow-xl rounded-2xl"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";
import { PhoneCall, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "../styles/hexagon.css";   

// Correct imports
import Hero1 from "../assets/Hero1.png";
import Hero2 from "../assets/Hero2.png";
import Hero3 from "../assets/Hero3.png";
import Hero4 from "../assets/Hero4.png";
import Hero5 from "../assets/Hero5.png";
import Hero6 from "../assets/Hero6.png";

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-green-50 pt-28 pb-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SECTION */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-green-700 leading-tight">
            Farming, Labour & Transport —
            <span className="text-green-600 block mt-2">Connected in One Call</span>
          </h1>

          <p className="text-gray-600 mt-4 text-lg leading-relaxed">
            No smartphone? No internet? No problem.
            Our IVR system instantly connects farmers, labourers and drivers 
            with the right help through a simple phone call.
          </p>

          <div className="flex gap-4 mt-8">
            <button
              onClick={() => navigate("/register")}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl text-lg shadow-md flex items-center gap-2 transition"
            >
              Register Now <ChevronRight size={20} />
            </button>

            <button
              onClick={() => navigate("/plans")}
              className="border border-green-600 text-green-700 hover:bg-green-100 px-6 py-3 rounded-xl text-lg flex items-center gap-2 transition"
            >
              View Plans
            </button>
          </div>

          <div className="flex items-center gap-3 mt-6 text-green-700 font-medium">
            <PhoneCall size={22} />
            <span>
              Call our toll-free helpline: <strong>1800-XXX-XXXX</strong>
            </span>
          </div>
        </div>

        {/* RIGHT — ROTATING PRISM */}
        <div className="flex justify-center">
          <div className="perspective">
            <div className="prism">
              <img src={Hero1} className="prism-face" alt="hero1" />
              <img src={Hero2} className="prism-face" alt="hero2" />
              <img src={Hero3} className="prism-face" alt="hero3" />
              <img src={Hero4} className="prism-face" alt="hero4" />
              <img src={Hero5} className="prism-face" alt="hero5" />
              <img src={Hero6} className="prism-face" alt="hero6" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
