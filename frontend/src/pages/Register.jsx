

// import React, { useState } from "react";

// export default function Signup() {
//   const [formData, setFormData] = useState({
//     phone: "",
//     role: "",
//     language: "hi",
//     pincode: "",
//     otp: "",
//   });

//   const [otpSent, setOtpSent] = useState(false);
//   const [serverOtp] = useState("1111"); // Default OTP

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const sendOtp = () => {
//     if (formData.phone.length !== 10) {
//       alert("Please enter a valid 10-digit phone number");
//       return;
//     }

//     setOtpSent(true);
//     alert("OTP sent! (Default OTP: 1111)");
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (formData.otp !== serverOtp) {
//       alert("Invalid OTP!");
//       return;
//     }

//     console.log("Form Submitted:", formData);
//     alert("Registration Successful!");

//     // TODO: Send signup data to backend
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-green-50 px-4">
//       <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-md mt-12">

//         <h2 className="text-2xl font-bold text-green-700 text-center mb-6">
//           Create Account
//         </h2>

//         <form className="space-y-5" onSubmit={handleSubmit}>

//           {/* Phone Number + OTP button */}
//           <div>
//             <label className="block mb-1 text-gray-700">Phone Number</label>

//             <div className="flex gap-2">
//               <input
//                 type="tel"
//                 name="phone"
//                 maxLength={10}
//                 value={formData.phone}
//                 onChange={handleChange}
//                 required
//                 className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
//                 placeholder="Enter phone number"
//               />

//               {!otpSent && (
//                 <button
//                   type="button"
//                   onClick={sendOtp}
//                   className="bg-green-600 px-4 text-white rounded-lg hover:bg-green-700 active:scale-95"
//                 >
//                   Send OTP
//                 </button>
//               )}
//             </div>

//             {/* OTP Input (Shows only after Send OTP is clicked) */}
//             {otpSent && (
//               <input
//                 type="text"
//                 name="otp"
//                 maxLength={4}
//                 value={formData.otp}
//                 onChange={handleChange}
//                 required
//                 placeholder="Enter OTP (1111)"
//                 className="w-full border px-4 py-2 rounded-lg mt-3 focus:ring-2 focus:ring-green-400 outline-none"
//               />
//             )}
//           </div>

//           {/* Profession */}
//           <div>
//             <label className="block mb-1 text-gray-700">Profession</label>
//             <select
//               name="role"
//               value={formData.role}
//               onChange={handleChange}
//               required
//               className="w-full border px-4 py-2 rounded-lg bg-white focus:ring-2 focus:ring-green-400"
//             >
//               <option value="">Select profession</option>
//               <option value="farmer">Farmer</option>
//               <option value="labour">Labour</option>
//               <option value="driver">Driver</option>
//             </select>
//           </div>

//           {/* Language */}
//           <div>
//             <label className="block mb-1 text-gray-700">Preferred Language</label>
//             <select
//               name="language"
//               value={formData.language}
//               onChange={handleChange}
//               className="w-full border px-4 py-2 rounded-lg bg-white focus:ring-2 focus:ring-green-400"
//             >
//               <option value="hi">Hindi</option>
//               <option value="kn">Kannada</option>
//               <option value="en">English</option>
//             </select>
//           </div>

//           {/* Pin Code */}
//           <div>
//             <label className="block mb-1 text-gray-700">Pin Code</label>
//             <input
//               type="text"
//               name="pincode"
//               value={formData.pincode}
//               maxLength={6}
//               onChange={handleChange}
//               required
//               className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
//               placeholder="Enter pin code"
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition active:scale-95"
//           >
//             Register
//           </button>
//         </form>

//         <p className="text-center text-sm mt-4">
//           Already have an account?{" "}
//           <a href="/login" className="text-green-700 font-semibold hover:underline">
//             Login
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// }


// import React, { useState } from "react";
// import axios from "axios";

// export default function Signup() {
//   const [formData, setFormData] = useState({
//     phone: "",
//     role: "",
//     language: "hi",
//     pincode: "",
//     otp: "",
//   });

//   const [otpSent, setOtpSent] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // -----------------------------
//   // SEND OTP (API CALL)
//   // -----------------------------
//   const sendOtp = async () => {
//     if (formData.phone.length !== 10) {
//       alert("Please enter a valid 10-digit phone number");
//       return;
//     }

//     try {
//       const res = await axios.post("/api/user/send-otp", {
//         phone: formData.phone,
//       });

//       if (res.data.success) {
//         setOtpSent(true);
//         alert("OTP sent! (Default: 1111)");
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Failed to send OTP");
//     }
//   };

//   // -----------------------------
//   // REGISTER USER (API CALL)
//   // -----------------------------
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post("/api/user/register", formData);

//       if (res.data.success) {
//         alert("Registration successful!");
//         window.location.href = "/login"; // redirect
//       }
//     } catch (err) {
//       console.error(err);
//       alert(err.response?.data?.message || "Registration failed");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-green-50 px-4">
//       <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-md mt-12">

//         <h2 className="text-2xl font-bold text-green-700 text-center mb-6">
//           Create Account
//         </h2>

//         <form className="space-y-5" onSubmit={handleSubmit}>

//           {/* Phone Number + OTP button */}
//           <div>
//             <label className="block mb-1 text-gray-700">Phone Number</label>

//             <div className="flex gap-2">
//               <input
//                 type="tel"
//                 name="phone"
//                 maxLength={10}
//                 value={formData.phone}
//                 onChange={handleChange}
//                 required
//                 className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
//                 placeholder="Enter phone number"
//               />

//               {!otpSent && (
//                 <button
//                   type="button"
//                   onClick={sendOtp}
//                   className="bg-green-600 px-4 text-white rounded-lg hover:bg-green-700 active:scale-95"
//                 >
//                   Send OTP
//                 </button>
//               )}
//             </div>

//             {/* OTP Input */}
//             {otpSent && (
//               <input
//                 type="text"
//                 name="otp"
//                 maxLength={4}
//                 value={formData.otp}
//                 onChange={handleChange}
//                 required
//                 placeholder="Enter OTP (1111)"
//                 className="w-full border px-4 py-2 rounded-lg mt-3 focus:ring-2 focus:ring-green-400 outline-none"
//               />
//             )}
//           </div>

//           {/* Profession */}
//           <div>
//             <label className="block mb-1 text-gray-700">Profession</label>
//             <select
//               name="role"
//               value={formData.role}
//               onChange={handleChange}
//               required
//               className="w-full border px-4 py-2 rounded-lg bg-white focus:ring-2 focus:ring-green-400"
//             >
//               <option value="">Select profession</option>
//               <option value="farmer">Farmer</option>
//               <option value="labour">Labour</option>
//               <option value="driver">Driver</option>
//             </select>
//           </div>

//           {/* Language */}
//           <div>
//             <label className="block mb-1 text-gray-700">Preferred Language</label>
//             <select
//               name="language"
//               value={formData.language}
//               onChange={handleChange}
//               className="w-full border px-4 py-2 rounded-lg bg-white focus:ring-2 focus:ring-green-400"
//             >
//               <option value="hi">Hindi</option>
//               <option value="kn">Kannada</option>
//               <option value="en">English</option>
//             </select>
//           </div>

//           {/* Pin Code */}
//           <div>
//             <label className="block mb-1 text-gray-700">Pin Code</label>
//             <input
//               type="text"
//               name="pincode"
//               value={formData.pincode}
//               maxLength={6}
//               onChange={handleChange}
//               required
//               className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
//               placeholder="Enter pin code"
//             />
//           </div>

//           {/* Submit */}
//           <button
//             type="submit"
//             className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition active:scale-95"
//           >
//             Register
//           </button>
//         </form>

//         <p className="text-center text-sm mt-4">
//           Already have an account?{" "}
//           <a href="/login" className="text-green-700 font-semibold hover:underline">
//             Login
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// }



import React, { useState } from "react";
import axios from "axios";

export default function Signup() {
  const [formData, setFormData] = useState({
    phone: "",
    role: "",
    language: "hi",
    pincode: "",
    otp: "",
  });

  const [otpSent, setOtpSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // -----------------------------
  // SEND OTP (API CALL)
  // -----------------------------
  const sendOtp = async () => {
    if (formData.phone.length !== 10) {
      alert("Please enter a valid 10-digit phone number");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/user/send-otp",
        { phone: formData.phone }
      );

      if (res.data.success) {
        setOtpSent(true);
        alert("OTP sent! (Default: 1111)");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to send OTP");
    }
  };

  // -----------------------------
  // REGISTER USER (API CALL)
  // -----------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/user/register",
        formData
      );

      if (res.data.success) {
        alert("Registration successful!");
        window.location.href = "/login"; // redirect
      }
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-green-50 px-4">
      <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-md mt-12">

        <h2 className="text-2xl font-bold text-green-700 text-center mb-6">
          Create Account
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit}>

          {/* Phone Number + OTP button */}
          <div>
            <label className="block mb-1 text-gray-700">Phone Number</label>

            <div className="flex gap-2">
              <input
                type="tel"
                name="phone"
                maxLength={10}
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
                placeholder="Enter phone number"
              />

              {!otpSent && (
                <button
                  type="button"
                  onClick={sendOtp}
                  className="bg-green-600 px-4 text-white rounded-lg hover:bg-green-700 active:scale-95"
                >
                  Send OTP
                </button>
              )}
            </div>

            {/* OTP Input */}
            {otpSent && (
              <input
                type="text"
                name="otp"
                maxLength={4}
                value={formData.otp}
                onChange={handleChange}
                required
                placeholder="Enter OTP (1111)"
                className="w-full border px-4 py-2 rounded-lg mt-3 focus:ring-2 focus:ring-green-400 outline-none"
              />
            )}
          </div>

          {/* Profession */}
          <div>
            <label className="block mb-1 text-gray-700">Profession</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
              className="w-full border px-4 py-2 rounded-lg bg-white focus:ring-2 focus:ring-green-400"
            >
              <option value="">Select profession</option>
              <option value="farmer">Farmer</option>
              <option value="labour">Labour</option>
              <option value="driver">Driver</option>
            </select>
          </div>

          {/* Language */}
          <div>
            <label className="block mb-1 text-gray-700">Preferred Language</label>
            <select
              name="language"
              value={formData.language}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-lg bg-white focus:ring-2 focus:ring-green-400"
            >
              <option value="hi">Hindi</option>
              <option value="kn">Kannada</option>
              <option value="en">English</option>
            </select>
          </div>

          {/* Pin Code */}
          <div>
            <label className="block mb-1 text-gray-700">Pin Code</label>
            <input
              type="text"
              name="pincode"
              value={formData.pincode}
              maxLength={6}
              onChange={handleChange}
              required
              className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
              placeholder="Enter pin code"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition active:scale-95"
          >
            Register
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-green-700 font-semibold hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
