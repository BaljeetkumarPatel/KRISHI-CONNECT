

// import React from "react";
// import { FaUser, FaPhone, FaMapPin, FaLanguage } from "react-icons/fa";
// import { MdWork } from "react-icons/md";
// import { FiEdit, FiTrash2 } from "react-icons/fi";
// import { useNavigate } from "react-router-dom";

// export default function ProfileInfo({ user, onEdit, onDelete }) {
//   const navigate = useNavigate();

//   // Convert language code to full name
//   const languageMap = {
//     hi: "Hindi",
//     kn: "Kannada",
//     en: "English",
//     te: "Telugu",
//   };

//   // Government schemes based on role
//   const schemes = {
//     farmer: [
//       { id: "pm-kisan", name: "PM-KISAN Samman Nidhi", desc: "₹6000 yearly support for farmers." },
//       { id: "kcc", name: "Kisan Credit Card (KCC)", desc: "Loan support with low-interest credit." },
//       { id: "fasal-bima", name: "PM Fasal Bima Yojana", desc: "Crop insurance protection." },
//       { id: "soil-health", name: "Soil Health Card Scheme", desc: "Fertility testing & guidance." },
//       { id: "sinchai", name: "Krishi Sinchai Yojana", desc: "Irrigation assistance for farming." },
//     ],

//     labour: [
//       { id: "mgnrega", name: "MGNREGA Job Card", desc: "100 days guaranteed wage employment." },
//       { id: "e-shram", name: "E-Shram Card", desc: "Social security benefits for workers." },
//       { id: "atal-pension", name: "Atal Pension Yojana", desc: "Monthly pension after retirement." },
//       { id: "jjby", name: "Jeevan Jyoti Bima Yojana", desc: "Life insurance for workers." },
//       { id: "pmsym", name: "Shram Yogi Mandhan", desc: "Pension scheme for unorganized workers." },
//     ],

//     driver: [
//       { id: "driver-insurance", name: "Driver Accident Insurance", desc: "₹2 lakh accident coverage." },
//       { id: "psby", name: "Suraksha Bima Yojana", desc: "Accidental insurance at ₹12/year." },
//       { id: "transport-welfare", name: "Transport Workers Welfare Board", desc: "Multiple benefits for drivers." },
//       { id: "e-shram", name: "E-Shram Card", desc: "Social security coverage." },
//       { id: "state-transport", name: "State Transport Subsidy", desc: "Transport subsidy for drivers." },
//     ],
//   };

//   return (
//     <div className="bg-white shadow-lg rounded-3xl p-8 relative">

//       {/* Title */}
//       <h3 className="text-xl font-bold mb-4">Personal Information</h3>

//       {/* Edit Button */}
//       <button
//         onClick={onEdit}
//         className="absolute top-6 right-8 flex items-center gap-2 
//                    bg-green-100 text-green-700 px-4 py-1 rounded-full 
//                    hover:bg-green-200 transition"
//       >
//         <FiEdit /> Edit Profile
//       </button>

//       {/* User Fields */}
//       <div className="space-y-4 mt-6 border-b pb-6">

//         <p className="flex items-center gap-3">
//           <MdWork className="text-green-600" />
//           <span><strong>Profession:</strong> {user.role}</span>
//         </p>

//         <p className="flex items-center gap-3">
//           <FaPhone className="text-green-600" />
//           <span><strong>Phone Number:</strong> {user.phone}</span>
//         </p>

//         <p className="flex items-center gap-3">
//           <FaMapPin className="text-green-600" />
//           <span><strong>Pincode:</strong> {user.pincode}</span>
//         </p>

//         <p className="flex items-center gap-3">
//           <FaLanguage className="text-green-600" />
//           <span><strong>Language:</strong> {languageMap[user.language]}</span>
//         </p>
//       </div>

//       {/* Additional Info */}
//       <div className="mt-6">
//         <h3 className="text-lg font-bold mb-3">Additional Information (Optional)</h3>

//         <div className="space-y-3">
//           <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 shadow">
//             <p className="font-medium text-gray-700">Link MGNREGA Job Card</p>
//             <button
//               onClick={() => navigate("/link-scheme/mgnrega")}
//               className="text-blue-600 text-sm font-medium hover:underline"
//             >
//               Link Account →
//             </button>
//           </div>

//           <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 shadow">
//             <p className="font-medium text-gray-700">Link Aadhaar / Bank Verification</p>
//             <button
//               onClick={() => navigate("/link-scheme/aadhaar")}
//               className="text-blue-600 text-sm font-medium hover:underline"
//             >
//               Start Verification →
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Government Schemes */}
//       <div className="mt-8">
//         <h3 className="text-lg font-bold mb-3">Government Schemes</h3>

//         <div className="space-y-3">
//           {schemes[user.role]?.map((scheme) => (
//             <div
//               key={scheme.id}
//               className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition"
//             >
//               <div className="flex justify-between items-center">

//                 {/* Scheme name */}
//                 <span className="text-green-800 text-sm font-semibold">{scheme.name}</span>

//                 {/* Link btn */}
//                 <button
//                   onClick={() => navigate(`/link-scheme/${scheme.id}`)}
//                   className="text-blue-600 text-sm font-medium hover:underline"
//                 >
//                   Link Account
//                 </button>
//               </div>

//               {/* Description */}
//               <p className="text-gray-600 text-xs mt-1">{scheme.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Delete Account */}
//       <button
//         onClick={onDelete}
//         className="mt-8 text-red-600 flex items-center gap-2 font-medium 
//                    hover:text-red-700 hover:underline transition"
//       >
//         <FiTrash2 size={20} /> Delete Account
//       </button>
//     </div>
//   );
// }


import React from "react";
import { FaUser, FaPhone, FaMapPin, FaLanguage } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { FiEdit, FiTrash2, FiLink } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function ProfileInfo({ user, onEdit, onDelete }) {
  const navigate = useNavigate();

  // ROLE-WISE GOVT SCHEMES
  const schemes = {
    farmer: [
      {
        id: "pmkisan",
        name: "PM-KISAN Samman Nidhi",
        desc: "₹6000 yearly financial support for farmers",
      },
      {
        id: "soilhealth",
        name: "Soil Health Card",
        desc: "Government scheme for soil testing & crop improvement",
      },
      {
        id: "pmfby",
        name: "PM Fasal Bima Yojana",
        desc: "Crop insurance scheme by Government of India",
      },
    ],

    labour: [
      {
        id: "mgnrega",
        name: "MGNREGA Job Card",
        desc: "100 days guaranteed work scheme for labor workers",
      },
      {
        id: "eShram",
        name: "E-Shram Card",
        desc: "Welfare scheme for unorganized sector workers",
      },
      {
        id: "bocw",
        name: "BOCW Assistance Scheme",
        desc: "Construction worker assistance and insurance scheme",
      },
    ],

    driver: [
      {
        id: "pmvy",
        name: "Transport Vehicle Loan Subsidy",
        desc: "Scheme for new commercial vehicle purchase",
      },
      {
        id: "pmjjby",
        name: "PM Jeevan Jyoti Bima Yojana",
        desc: "Life insurance scheme by Govt of India",
      },
      {
        id: "pmsby",
        name: "PM Suraksha Bima Yojana",
        desc: "Accidental insurance for transport workers",
      },
    ],
  };

  return (
    <div className="bg-white shadow-lg rounded-3xl p-8 relative">

      {/* TITLE */}
      <h3 className="text-xl font-bold mb-4">Personal Information</h3>

      {/* EDIT BUTTON */}
      <button
        onClick={onEdit}
        className="
          absolute top-6 right-8 
          flex items-center gap-2 
          bg-green-100 text-green-700 
          px-4 py-1 rounded-full 
          hover:bg-green-200 transition
        "
      >
        <FiEdit /> Edit Profile
      </button>

      {/* INFO FIELDS */}
      <div className="space-y-4 mt-6">

        <p className="flex items-center gap-3 text-gray-700">
          <FaUser className="text-green-600" />
          <span><strong>Profession:</strong> {user.role}</span>
        </p>

        <p className="flex items-center gap-3 text-gray-700">
          <FaPhone className="text-green-600" />
          <span><strong>Phone Number:</strong> {user.phone}</span>
        </p>

        <p className="flex items-center gap-3 text-gray-700">
          <FaMapPin className="text-green-600" />
          <span><strong>Pincode:</strong> {user.pincode}</span>
        </p>

        <p className="flex items-center gap-3 text-gray-700">
          <FaLanguage className="text-green-600" />
          <span>
            <strong>Preferred Language:</strong>{" "}
            {user.language === "hi"
              ? "Hindi"
              : user.language === "kn"
              ? "Kannada"
              : user.language === "te"
              ? "Telugu"
              : "English"}
          </span>
        </p>

        <p className="flex items-center gap-3 text-gray-700">
          <MdWork className="text-green-600" />
          <span><strong>Occupation:</strong> {user.role}</span>
        </p>

        
      </div>

      {/* GOVERNMENT SCHEMES SECTION */}
      <div className="mt-10">
        <h3 className="text-lg font-bold mb-3">Government Schemes</h3>

        <div className="space-y-4">
          {schemes[user.role]?.map((scheme) => (
            <div
              key={scheme.id}
              className="
                bg-white border border-gray-200 
                rounded-xl p-5 shadow-sm 
                hover:shadow-md transition
              "
            >
              <div className="flex justify-between items-center">

                {/* Scheme Text */}
                <div>
                  <span className="text-green-800 text-sm font-semibold">
                    {scheme.name}
                  </span>

                  <p className="text-gray-600 text-xs mt-1">{scheme.desc}</p>
                </div>

                {/* YELLOW LINK BUTTON */}
                <button
                  onClick={() => navigate(`/link-scheme/${scheme.id}`)}
                  className="
                    flex items-center gap-2 
                    bg-yellow-100 text-yellow-700 
                    border border-yellow-300
                    px-4 py-2 rounded-full 
                    text-sm font-medium 
                    hover:bg-yellow-200 transition
                  "
                >
                  <FiLink size={16} className="text-yellow-700" />
                  Link
                </button>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* OPTIONAL ADDITIONAL INFO */}
      <div className="mt-10">
        <h3 className="text-lg font-bold mb-3">Additional Information (Optional)</h3>

        <div className="space-y-4">

          {/* MGNREGA */}
          <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 shadow flex justify-between items-center">
            <p className="font-medium text-gray-700">Link MGNREGA Job Card</p>

            <button
              onClick={() => navigate("/link-scheme/mgnrega")}
              className="
                flex items-center gap-2 
                bg-yellow-100 text-yellow-700 
                border border-yellow-300 
                px-4 py-2 rounded-full 
                text-sm font-medium 
                hover:bg-yellow-200 transition
              "
            >
              <FiLink size={16} /> Link
            </button>
          </div>

          {/* AADHAAR / BANK */}
          <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 shadow flex justify-between items-center">
            <p className="font-medium text-gray-700">Link Aadhaar / Bank Verification</p>

            <button
              onClick={() => navigate("/link-scheme/aadhaar")}
              className="
                flex items-center gap-2 
                bg-yellow-100 text-yellow-700 
                border border-yellow-300 
                px-4 py-2 rounded-full 
                text-sm font-medium 
                hover:bg-yellow-200 transition
              "
            >
              <FiLink size={16} /> Link
            </button>
          </div>

        </div>

        <button
          onClick={onDelete}
          className="
            mt-6 text-red-600 flex items-center gap-2 font-medium 
            hover:text-red-700 hover:underline transition
          "
        >
          <FiTrash2 size={20} /> Delete Account
        </button>
      </div>
    </div>
  );
}
