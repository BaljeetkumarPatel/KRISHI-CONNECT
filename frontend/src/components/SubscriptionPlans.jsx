
// import React, { useState } from "react";

// export default function SubscriptionPlans({ user }) {
//   const [billing, setBilling] = useState("monthly");
//   const [activeFeature, setActiveFeature] = useState(null);

//   const featureList = [
//     "Post job requirements",
//     "Receive SMS alerts",
//     "Priority matchmaking",
//     "Transport / Labour availability",
//     "Unlimited updates",
//   ];

//   const plansData = {
//     farmer: [
//       { title: "Basic Farmer", monthly: 20, yearly: 200, features: [true, true, false, false, false] },
//       { title: "Standard Farmer", monthly: 30, yearly: 300, features: [true, true, true, false, false] },
//       { title: "Premium Farmer", monthly: 49, yearly: 499, features: [true, true, true, true, true] },
//     ],
//     labour: [
//       { title: "Labour Basic", monthly: 5, yearly: 50, features: [true, true, false, false, false] },
//       { title: "Labour Plus", monthly: 10, yearly: 100, features: [true, true, true, false, false] },
//     ],
//     driver: [
//       { title: "Driver Basic", monthly: 50, yearly: 500, features: [true, true, true, false, false] },
//       { title: "Driver Pro", monthly: 99, yearly: 999, features: [true, true, true, true, true] },
//     ],
//   };

//   let visiblePlans = !user
//     ? [...plansData.farmer, ...plansData.labour, ...plansData.driver]
//     : plansData[user.role] || [];

//   const plansWithFeature =
//     activeFeature !== null ? visiblePlans.filter((p) => p.features[activeFeature]) : [];

//   return (
//     <div className="bg-gray-100 min-h-screen py-16 px-4">
//       {/* Heading */}
//       <div className="text-center">
//         <h1 className="text-5xl font-bold text-green-700">Choose the plan</h1>
//         <p className="text-gray-600 mt-2 text-lg">Get started now</p>

//         {/* Billing Toggle */}
//         <div className="flex justify-center mt-8">
//           <div className="bg-white shadow-lg p-1 rounded-full flex gap-1 w-64">
//             <button
//               onClick={() => setBilling("monthly")}
//               className={`flex-1 py-2 rounded-full text-md font-medium transition ${
//                 billing === "monthly"
//                   ? "bg-green-600 text-white shadow"
//                   : "text-gray-600"
//               }`}
//             >
//               Monthly
//             </button>

//             <button
//               onClick={() => setBilling("yearly")}
//               className={`flex-1 py-2 rounded-full text-md font-medium transition ${
//                 billing === "yearly"
//                   ? "bg-green-600 text-white shadow"
//                   : "text-gray-600"
//               }`}
//             >
//               Annual
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Main layout */}
//       <div className="grid md:grid-cols-4 gap-10 mt-14 max-w-7xl mx-auto">
//         {/* LEFT FEATURE PANEL */}
//         <div className="bg-green-600 text-white rounded-3xl p-8 shadow-xl">
//           <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
//             <span className="text-white opacity-80">⬇</span> Service Details
//           </h3>

//           <ul className="space-y-5">
//             {featureList.map((f, i) => (
//               <li
//                 key={i}
//                 onClick={() => setActiveFeature(i)}
//                 className={`
//                   py-2 border-b border-green-300 cursor-pointer transition 
//                   ${activeFeature === i ? "font-bold underline text-white" : ""}
//                 `}
//               >
//                 {f}
//               </li>
//             ))}
//           </ul>

//           {/* Feature-based plan list */}
//           {activeFeature !== null && (
//             <div className="mt-6 bg-white text-green-700 rounded-2xl p-5 shadow-md">
//               <h4 className="font-semibold text-lg">Available in:</h4>
//               {plansWithFeature.length > 0 ? (
//                 plansWithFeature.map((p, idx) => (
//                   <p key={idx} className="mt-2 text-md font-medium">
//                     {p.title} — ₹{billing === "monthly" ? p.monthly : p.yearly}
//                   </p>
//                 ))
//               ) : (
//                 <p className="text-sm text-gray-600 mt-2">Not included in any plan</p>
//               )}
//             </div>
//           )}
//         </div>

//         {/* RIGHT SIDE PRICING CARDS */}
//         {visiblePlans.map((plan, idx) => (
//           <div
//             key={idx}
//             className={`
//               bg-white rounded-3xl p-8 shadow-lg transition hover:shadow-xl
//               ${
//                 activeFeature !== null && !plan.features[activeFeature]
//                   ? "opacity-40"
//                   : "opacity-100"
//               }
//             `}
//           >
//             <h3 className="text-xl font-bold text-green-700">{plan.title}</h3>

//             <p className="text-4xl mt-4 font-extrabold text-green-600">
//               ₹{billing === "monthly" ? plan.monthly : plan.yearly}
//               <span className="text-gray-500 text-sm font-normal"> /{billing}</span>
//             </p>

//             {/* Feature list */}
//             <ul className="mt-8 space-y-4">
//               {plan.features.map((enabled, featureIndex) => (
//                 <li key={featureIndex} className="flex items-center gap-3">
//                   <span
//                     className={`
//                       h-5 w-5 rounded-full border flex items-center justify-center
//                       ${
//                         enabled
//                           ? "bg-green-600 border-green-600"
//                           : "border-gray-400"
//                       }
//                     `}
//                   >
//                     {enabled && <span className="text-white text-xs">✔</span>}
//                   </span>
//                   <span className="text-gray-700">{featureList[featureIndex]}</span>
//                 </li>
//               ))}
//             </ul>

//             <button className="w-full mt-8 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition">
//               Choose Plan
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


import React, { useState } from "react";

export default function SubscriptionPlans({ user }) {
  const [billing, setBilling] = useState("monthly");
  const [activeFeature, setActiveFeature] = useState(null);

  // NEW: Category selector only for non-logged users
  const [selectedCategory, setSelectedCategory] = useState("farmer");

  const featureList = [
    "Post job requirements",
    "Receive SMS alerts",
    "Priority matchmaking",
    "Transport / Labour availability",
    "Unlimited updates",
  ];

  const plansData = {
    farmer: [
      { title: "Basic Farmer", monthly: 20, yearly: 200, features: [true, true, false, false, false] },
      { title: "Standard Farmer", monthly: 30, yearly: 300, features: [true, true, true, false, false] },
      { title: "Premium Farmer", monthly: 49, yearly: 499, features: [true, true, true, true, true] },
    ],
    labour: [
      { title: "Labour Basic", monthly: 5, yearly: 50, features: [true, true, false, false, false] },
      { title: "Labour Plus", monthly: 10, yearly: 100, features: [true, true, true, false, false] },
    ],
    driver: [
      { title: "Driver Basic", monthly: 50, yearly: 500, features: [true, true, true, false, false] },
      { title: "Driver Pro", monthly: 99, yearly: 999, features: [true, true, true, true, true] },
    ],
  };

  // If user is logged in → show only their plan
  // If not logged in → show selected category
  let visiblePlans = user
    ? plansData[user.role]
    : plansData[selectedCategory];

  const plansWithFeature =
    activeFeature !== null
      ? visiblePlans.filter((p) => p.features[activeFeature])
      : [];

  return (
    <div className="bg-gray-100 min-h-screen py-16 px-4">
      {/* Heading */}
      <div className="text-center">
        <h1 className="text-5xl font-bold text-green-700">Choose the plan</h1>
        <p className="text-gray-600 mt-2 text-lg">Get started now</p>

        {/* Billing Toggle */}
        <div className="flex justify-center mt-8">
          <div className="bg-white shadow-lg p-1 rounded-full flex gap-1 w-64">
            <button
              onClick={() => setBilling("monthly")}
              className={`flex-1 py-2 rounded-full text-md font-medium transition ${
                billing === "monthly"
                  ? "bg-green-600 text-white shadow"
                  : "text-gray-600"
              }`}
            >
              Monthly
            </button>

            <button
              onClick={() => setBilling("yearly")}
              className={`flex-1 py-2 rounded-full text-md font-medium transition ${
                billing === "yearly"
                  ? "bg-green-600 text-white shadow"
                  : "text-gray-600"
              }`}
            >
              Annual
            </button>
          </div>
        </div>

        {/* CATEGORY SELECTOR — ONLY IF USER NOT LOGGED IN */}
        {!user && (
          <div className="flex justify-center mt-6">
            <div className="bg-white shadow-md p-1 rounded-full flex gap-1 w-[350px]">
              {["farmer", "labour", "driver"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setActiveFeature(null);
                  }}
                  className={`flex-1 py-2 rounded-full capitalize text-md transition ${
                    selectedCategory === cat
                      ? "bg-green-600 text-white shadow"
                      : "text-gray-600"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Main layout */}
      <div className="grid md:grid-cols-4 gap-10 mt-14 max-w-7xl mx-auto">
        {/* LEFT FEATURE PANEL */}
        <div className="bg-green-600 text-white rounded-3xl p-8 shadow-xl">
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <span className="text-white opacity-80">⬇</span> Service Details
          </h3>

          <ul className="space-y-5">
            {featureList.map((f, i) => (
              <li
                key={i}
                onClick={() => setActiveFeature(i)}
                className={`py-2 border-b border-green-300 cursor-pointer transition ${
                  activeFeature === i ? "font-bold underline text-white" : ""
                }`}
              >
                {f}
              </li>
            ))}
          </ul>

          {activeFeature !== null && (
            <div className="mt-6 bg-white text-green-700 rounded-2xl p-5 shadow-md">
              <h4 className="font-semibold text-lg">Available in:</h4>
              {plansWithFeature.length > 0 ? (
                plansWithFeature.map((p, idx) => (
                  <p key={idx} className="mt-2 text-md font-medium">
                    {p.title} — ₹{billing === "monthly" ? p.monthly : p.yearly}
                  </p>
                ))
              ) : (
                <p className="text-sm text-gray-600 mt-2">Not included in any plan</p>
              )}
            </div>
          )}
        </div>

        {/* RIGHT SIDE PLANS */}
        {visiblePlans.map((plan, idx) => (
          <div
            key={idx}
            className={`
              bg-white rounded-3xl p-8 shadow-lg transition hover:shadow-xl
              ${
                activeFeature !== null && !plan.features[activeFeature]
                  ? "opacity-40"
                  : "opacity-100"
              }`}
          >
            <h3 className="text-xl font-bold text-green-700">{plan.title}</h3>

            <p className="text-4xl mt-4 font-extrabold text-green-600">
              ₹{billing === "monthly" ? plan.monthly : plan.yearly}
              <span className="text-gray-500 text-sm font-normal"> /{billing}</span>
            </p>

            <ul className="mt-8 space-y-4">
              {plan.features.map((enabled, featureIndex) => (
                <li key={featureIndex} className="flex items-center gap-3">
                  <span
                    className={`h-5 w-5 rounded-full border flex items-center justify-center ${
                      enabled
                        ? "bg-green-600 border-green-600"
                        : "border-gray-400"
                    }`}
                  >
                    {enabled && <span className="text-white text-xs">✔</span>}
                  </span>
                  <span className="text-gray-700">{featureList[featureIndex]}</span>
                </li>
              ))}
            </ul>

            <button className="w-full mt-8 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
