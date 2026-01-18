// import React, { useState } from "react";

// export default function NewRecruitmentForm() {
//   const [role, setRole] = useState("");
//   const [numLabour, setNumLabour] = useState("");
//   const [labourType, setLabourType] = useState("");
//   const [licenseType, setLicenseType] = useState("");
//   const [pincode, setPincode] = useState("");
//   const [timeNeeded, setTimeNeeded] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const data = {
//       role,
//       numLabour: role === "Labour" ? numLabour : undefined,
//       labourType: role === "Labour" ? labourType : undefined,
//       licenseType: role === "Driver" ? licenseType : undefined,
//       pincode,
//       timeNeeded,
//     };

//     console.log("Form Data:", data);
//     alert("Recruitment Form Submitted!");
//   };

//   return (
//     <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-xl mt-20">
//       <h2 className="text-2xl font-bold text-green-700 mb-5">
//         📝 New Job Posting Form
//       </h2>

//       <form onSubmit={handleSubmit} className="space-y-4 mt-4">

//         {/* Worker Type */}
//         <div>
//           <label className="block font-semibold mb-1">What do you want?</label>
//           <select
//             value={role}
//             onChange={(e) => setRole(e.target.value)}
//             className="w-full border p-2 rounded"
//           >
//             <option value="">Select Option</option>
//             <option value="Labour">Labour</option>
//             <option value="Driver">Driver</option>
//           </select>
//         </div>

//         {/* Labour Section */}
//         {role === "Labour" && (
//           <>
//             <div>
//               <label className="block font-semibold mb-1">Number of Labour</label>
//               <input
//                 type="number"
//                 value={numLabour}
//                 onChange={(e) => setNumLabour(e.target.value)}
//                 className="w-full border p-2 rounded"
//                 placeholder="Enter number of labour needed"
//               />
//             </div>

//             <div>
//               <label className="block font-semibold mb-1">Type of Labour</label>
//               <select
//                 value={labourType}
//                 onChange={(e) => setLabourType(e.target.value)}
//                 className="w-full border p-2 rounded"
//               >
//                 <option value="">Select Type</option>
//                 <option value="Field Work">Field Work</option>
//                 <option value="Harvesting">Harvesting</option>
//                 <option value="Loading/Unloading">Loading / Unloading</option>
//                 <option value="General Labour">General Labour</option>
//               </select>
//             </div>
//           </>
//         )}

//         {/* Driver Section */}
//         {role === "Driver" && (
//           <div>
//             <label className="block font-semibold mb-1">License Type</label>
//             <select
//               value={licenseType}
//               onChange={(e) => setLicenseType(e.target.value)}
//               className="w-full border p-2 rounded"
//             >
//               <option value="">Select License</option>
//               <option value="LMV">LMV</option>
//               <option value="HMV">HMV</option>
//               <option value="Tractor">Tractor License</option>
//             </select>
//           </div>
//         )}

//         {/* Pincode */}
//         <div>
//           <label className="block font-semibold mb-1">Pincode</label>
//           <input
//             type="text"
//             value={pincode}
//             onChange={(e) => setPincode(e.target.value)}
//             className="w-full border p-2 rounded"
//             placeholder="Enter pincode"
//           />
//         </div>

//         {/* Time Needed */}
//         <div>
//           <label className="block font-semibold mb-1">When do you need?</label>
//           <input
//             type="datetime-local"
//             value={timeNeeded}
//             onChange={(e) => setTimeNeeded(e.target.value)}
//             className="w-full border p-2 rounded"
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-green-700 text-white py-2 rounded-lg font-semibold hover:bg-green-800"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }


import React, { useState } from "react";
import axios from "axios";

export default function NewRecruitmentForm() {
  const [role, setRole] = useState("");
  const [numLabour, setNumLabour] = useState("");
  const [labourType, setLabourType] = useState("");
  const [licenseType, setLicenseType] = useState("");
  const [pincode, setPincode] = useState("");
  const [timeNeeded, setTimeNeeded] = useState("");
  const [loading, setLoading] = useState(false);

  // safe parse (in case localStorage is empty)
  let user = null;
  try {
    user = JSON.parse(localStorage.getItem("user")) || null;
  } catch (e) {
    user = null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    // basic validation
    if (!role) return alert("Please select Labour or Driver.");
    if (!pincode) return alert("Please enter pincode.");
    if (!timeNeeded) return alert("Please choose date & time.");

    if (role === "Labour") {
      if (!numLabour) return alert("Please enter number of labour needed.");
      if (!labourType) return alert("Please select type of labour.");
    }
    if (role === "Driver") {
      if (!licenseType) return alert("Please select license/vehicle type.");
    }

    if (!user || !user.phone) {
      return alert("User info missing. Please login again.");
    }
    // Ensure pin exists (your backend verifyPIN expects pin in body)
    if (typeof user.pin === "undefined") {
      // if pin not available, tell user to login or fallback to token approach
      return alert(
        "PIN not found in local user data. Please login again or notify admin."
      );
    }

    const date = timeNeeded ? timeNeeded.split("T")[0] : "";
    const time = timeNeeded ? timeNeeded.split("T")[1] : "";

    const payload = {
      role,
      numLabour,
      labourType,
      licenseType,
      pincode,
      date,
      time,
      // required by your current middleware:
      phone: user.phone,
      pin: String(user.pin),
    };

    try {
      setLoading(true);
      const res = await axios.post("http://localhost:5000/api/jobs/new", payload);

      // success
      alert("Job Posted Successfully!");
      console.log(res.data);

      // reset form (optional)
      setRole("");
      setNumLabour("");
      setLabourType("");
      setLicenseType("");
      setPincode("");
      setTimeNeeded("");
    } catch (err) {
      console.error("Job post error:", err.response?.data || err.message || err);
      const msg =
        err.response?.data?.message ||
        err.response?.data?.error ||
        "Error while posting job";
      alert(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-xl mt-20">
      <h2 className="text-2xl font-bold text-green-700 mb-5">
        📝 New Job Posting Form
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
        {/* Worker Type */}
        <div>
          <label className="block font-semibold mb-1">What do you want?</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full border p-2 rounded"
          >
            <option value="">Select Option</option>
            <option value="Labour">Labour</option>
            <option value="Driver">Driver</option>
          </select>
        </div>

        {/* Labour Section */}
        {role === "Labour" && (
          <>
            <div>
              <label className="block font-semibold mb-1">Number of Labour</label>
              <input
                type="number"
                value={numLabour}
                onChange={(e) => setNumLabour(e.target.value)}
                className="w-full border p-2 rounded"
                placeholder="Enter number of labour needed"
                min="1"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Type of Labour</label>
              <select
                value={labourType}
                onChange={(e) => setLabourType(e.target.value)}
                className="w-full border p-2 rounded"
              >
                <option value="">Select Type</option>
                <option value="Field Work">Field Work</option>
                <option value="Harvesting">Harvesting</option>
                <option value="Loading/Unloading">Loading / Unloading</option>
                <option value="General Labour">General Labour</option>
              </select>
            </div>
          </>
        )}

        {/* Driver Section */}
        {role === "Driver" && (
          <div>
            <label className="block font-semibold mb-1">License Type</label>
            <select
              value={licenseType}
              onChange={(e) => setLicenseType(e.target.value)}
              className="w-full border p-2 rounded"
            >
              <option value="">Select License</option>
              <option value="LMV">LMV</option>
              <option value="HMV">HMV</option>
              <option value="Tractor">Tractor License</option>
            </select>
          </div>
        )}

        {/* Pincode */}
        <div>
          <label className="block font-semibold mb-1">Pincode</label>
          <input
            type="text"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            className="w-full border p-2 rounded"
            placeholder="Enter pincode"
          />
        </div>

        {/* Time Needed */}
        <div>
          <label className="block font-semibold mb-1">When do you need?</label>
          <input
            type="datetime-local"
            value={timeNeeded}
            onChange={(e) => setTimeNeeded(e.target.value)}
            className="w-full border p-2 rounded"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-700 text-white py-2 rounded-lg font-semibold hover:bg-green-800 disabled:opacity-60"
        >
          {loading ? "Posting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
