// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { MdWork } from "react-icons/md";
// import { FiCamera, FiTrash2 } from "react-icons/fi";
// import axios from "axios";

// // Components
// import ProfileInfo from "../components/ProfileInfo";
// import Performance from "../components/Performance"; // NEW COMPONENT

// export default function Profile() {
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);
//   const [profileImg, setProfileImg] = useState(null);
//   const [showDeleteModal, setShowDeleteModal] = useState(false);

//   // -----------------------------------------------------
//   // LOAD USER FROM LOCAL STORAGE
//   // -----------------------------------------------------
//   useEffect(() => {
//     const savedUser = JSON.parse(localStorage.getItem("user"));
//     if (!savedUser) return navigate("/login");

//     setUser(savedUser);
//     setProfileImg(savedUser.photo || null);
//   }, []);

//   if (!user) return null;

//   // -----------------------------------------------------
//   // UPLOAD PROFILE PHOTO
//   // -----------------------------------------------------
//   const handlePhotoUpload = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     const form = new FormData();
//     form.append("photo", file);

//     try {
//       const res = await axios.post(
//         `http://localhost:5000/api/user/upload-photo/${user._id}`,
//         form
//       );

//       if (res.data.success) {
//         const updatedUser = { ...user, photo: res.data.photo };
//         setUser(updatedUser);
//         setProfileImg(res.data.photo);
//         localStorage.setItem("user", JSON.stringify(updatedUser));
//         alert("Profile photo updated!");
//       }
//     } catch (err) {
//       alert("Failed to upload photo");
//     }
//   };

//   // -----------------------------------------------------
//   // DELETE ACCOUNT
//   // -----------------------------------------------------
//   const deleteAccount = async () => {
//     try {
//       await axios.delete(`http://localhost:5000/api/user/delete/${user._id}`);
//       localStorage.removeItem("user");
//       alert("Account deleted successfully.");
//       navigate("/login");
//     } catch (err) {
//       alert("Failed to delete account.");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-green-50 pt-24 px-6 md:px-20 lg:px-32">

//       {/* HEADER */}
//       <div className="flex items-center gap-3 text-green-700 cursor-pointer mb-6">
//         <span
//           onClick={() => navigate("/dashboard")}
//           className="text-lg hover:underline"
//         >
//           ← Back to Dashboard
//         </span>
//         <h2 className="absolute left-1/2 -translate-x-1/2 text-2xl font-bold">
//             My Profile
//         </h2>
//       </div>

//       {/* TWO COLUMN LAYOUT */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

//         {/* -----------------------------------------------------
//             LEFT COLUMN — SEPARATED INTO TWO CLEAN BOXES
//         ------------------------------------------------------ */}
//         <div className="flex flex-col gap-8">

//           {/* ---------- BOX 1: Profile Photo + Role Info ---------- */}
//           <div className="bg-white shadow-lg rounded-3xl p-8 text-center relative">

//             {/* Profile Photo */}
//             <div className="relative w-32 h-32 mx-auto mb-4">
//               <img
//                 src={
//                   profileImg ||
//                   `https://ui-avatars.com/api/?name=${user.role}&background=91E8B6`
//                 }
//                 alt="Profile"
//                 className="w-32 h-32 rounded-full object-cover border-4 border-white shadow"
//               />

//               {/* Upload Button */}
//               <label className="absolute bottom-2 right-2 bg-green-600 text-white p-2 rounded-full cursor-pointer shadow">
//                 <FiCamera size={18} />
//                 <input
//                   type="file"
//                   className="hidden"
//                   accept="image/*"
//                   onChange={handlePhotoUpload}
//                 />
//               </label>
//             </div>

//             <h2 className="text-2xl font-semibold capitalize">{user.role}</h2>

//             {/* Role Badge */}
//             <span className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-1 rounded-full mt-3">
//               <MdWork />
//               {user.role === "farmer"
//                 ? "Farmer"
//                 : user.role === "labour"
//                 ? "Labour"
//                 : "Transport Provider"}
//             </span>

//             <p className="mt-4 text-gray-600">📅 Member since December 2025</p>
//           </div>

//           {/* ---------- BOX 2: Performance Component ---------- */}
//           <div className="bg-white shadow-lg rounded-3xl p-8">
//             <Performance user={user} />
//           </div>
//         </div>

//         {/* -----------------------------------------------------
//             RIGHT SIDE — PROFILE INFO (NO CHANGES)
//         ------------------------------------------------------ */}
//         <ProfileInfo
//           user={user}
//           onEdit={() => navigate("/edit-profile")}
//           onDelete={() => setShowDeleteModal(true)}
//         />
//       </div>

//       {/* -----------------------------------------------------
//           DELETE CONFIRMATION MODAL
//       ------------------------------------------------------ */}
//       {showDeleteModal && (
//         <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-[999]">
//           <div className="bg-white w-96 rounded-2xl shadow-xl p-6 text-center">

//             <div className="w-16 h-16 mx-auto mb-4 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-3xl">
//               <FiTrash2 />
//             </div>

//             <h2 className="text-xl font-semibold text-gray-800">
//               Delete Account?
//             </h2>

//             <p className="text-gray-600 mt-2 text-sm leading-relaxed">
//               This action is <strong>permanent</strong>.  
//               All your account data will be removed forever.
//             </p>

//             <div className="flex gap-4 mt-6">
//               <button
//                 onClick={() => setShowDeleteModal(false)}
//                 className="flex-1 py-2 rounded-xl border border-gray-300 hover:bg-gray-100 transition"
//               >
//                 Cancel
//               </button>

//               <button
//                 onClick={deleteAccount}
//                 className="flex-1 py-2 rounded-xl bg-red-600 text-white hover:bg-red-700 transition"
//               >
//                 Delete
//               </button>
//             </div>

//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdWork } from "react-icons/md";
import { FiCamera, FiTrash2 } from "react-icons/fi";
import { LogOut } from "lucide-react";     // <-- LOGOUT ICON
import axios from "axios";

// Components
import ProfileInfo from "../components/ProfileInfo";
import Performance from "../components/Performance";

export default function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [profileImg, setProfileImg] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // Load user
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (!savedUser) return navigate("/login");

    setUser(savedUser);
    setProfileImg(savedUser.photo || null);
  }, []);

  if (!user) return null;

  // Upload photo
  const handlePhotoUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const form = new FormData();
    form.append("photo", file);

    try {
      const res = await axios.post(
        `http://localhost:5000/api/user/upload-photo/${user._id}`,
        form
      );

      if (res.data.success) {
        const updatedUser = { ...user, photo: res.data.photo };
        setUser(updatedUser);
        setProfileImg(res.data.photo);
        localStorage.setItem("user", JSON.stringify(updatedUser));
        alert("Profile photo updated!");
      }
    } catch (err) {
      alert("Failed to upload photo");
    }
  };

  // Delete account
  const deleteAccount = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/user/delete/${user._id}`);
      localStorage.removeItem("user");
      alert("Account deleted successfully.");
      navigate("/login");
    } catch (err) {
      alert("Failed to delete account.");
    }
  };

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-green-50 pt-24 px-6 md:px-20 lg:px-32">

      {/* HEADER */}
      <div className="flex items-center justify-between text-green-700 mb-6 relative">

        {/* Back button */}
        <span
          onClick={() => navigate("/dashboard")}
          className="text-lg hover:underline cursor-pointer"
        >
          ← Back
        </span>

        {/* CENTER TITLE */}
        <h2 className="absolute left-1/2 -translate-x-1/2 text-2xl font-bold">
          My Profile
        </h2>

        {/* LOGOUT BUTTON */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-white bg-red-500 px-4 py-1 
                     rounded-full text-sm hover:bg-red-600 transition cursor-pointer"
        >
          <LogOut size={16} /> Logout
        </button>

      </div>

      {/* LAYOUT TWO COLUMNS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* LEFT SIDE – PROFILE & PERFORMANCE */}
        <div className="flex flex-col gap-8">

          {/* PHOTO + ROLE */}
          <div className="bg-white shadow-lg rounded-3xl p-8 text-center relative">

            {/* Profile Photo */}
            <div className="relative w-32 h-32 mx-auto mb-4">
              <img
                src={
                  profileImg ||
                  `https://ui-avatars.com/api/?name=${user.role}&background=91E8B6`
                }
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border-4 border-white shadow"
              />

              {/* Upload Button */}
              <label className="absolute bottom-2 right-2 bg-green-600 text-white p-2 
                                 rounded-full cursor-pointer shadow">
                <FiCamera size={18} />
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                />
              </label>
            </div>

            <h2 className="text-2xl font-semibold capitalize">{user.role}</h2>

            {/* Role Badge */}
            <span className="inline-flex items-center gap-2 bg-purple-100 
                              text-purple-700 px-4 py-1 rounded-full mt-3">
              <MdWork />
              {user.role === "farmer"
                ? "Farmer"
                : user.role === "labour"
                ? "Labour"
                : "Transport Provider"}
            </span>

            <p className="mt-4 text-gray-600">📅 Member since December 2025</p>
          </div>

          {/* PERFORMANCE BOX */}
          <div className="bg-white shadow-lg rounded-3xl p-8">
            <Performance user={user} />
          </div>
        </div>

        {/* RIGHT SIDE – PERSONAL INFO */}
        <ProfileInfo
          user={user}
          onEdit={() => navigate("/edit-profile")}
          onDelete={() => setShowDeleteModal(true)}
        />
      </div>

      {/* DELETE CONFIRM MODAL */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-[999]">
          <div className="bg-white w-96 rounded-2xl shadow-xl p-6 text-center">

            <div className="w-16 h-16 mx-auto mb-4 bg-red-100 text-red-600 
                             rounded-full flex items-center justify-center text-3xl">
              <FiTrash2 />
            </div>

            <h2 className="text-xl font-semibold text-gray-800">
              Delete Account?
            </h2>

            <p className="text-gray-600 mt-2 text-sm leading-relaxed">
              This action is <strong>permanent</strong>.  
              All your account data will be removed forever.
            </p>

            <div className="flex gap-4 mt-6">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="flex-1 py-2 rounded-xl border border-gray-300 
                           hover:bg-gray-100 transition"
              >
                Cancel
              </button>

              <button
                onClick={deleteAccount}
                className="flex-1 py-2 rounded-xl bg-red-600 text-white 
                           hover:bg-red-700 transition"
              >
                Delete
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
