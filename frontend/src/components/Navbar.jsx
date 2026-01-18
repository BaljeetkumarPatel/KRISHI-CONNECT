
// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Logo from "../assets/loho.svg";
// import { useState, useRef, useEffect } from "react";
// import { UserCircle, LogOut, User, ToggleLeft, ToggleRight,PhoneCall } from "lucide-react";

// export default function Navbar() {
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   // Simulator links for each user type
//   const simulatorLinks = {
//     farmer: "https://ai.studio/apps/drive/1hJuQ1rCCMoAisj0K78Rn19xfbvSorbhM?fullscreenApplet=true",
//     labour: "https://ai.studio/apps/drive/1j_t2-Eh3qlqiM7Lk0RBwFgeEqMT_ONwj?fullscreenApplet=true",
//     transport: "https://ai.studio/apps/drive/1v405uppJBxujVRI2LZT708UwNB_3KHpm?fullscreenApplet=true",
//     guest: "https://ai.studio/apps/drive/1rPNFwml8QSldxFD1JcoU8jCVkTjFmfbr?fullscreenApplet=true",
//   };

//   const getSimulatorLink = () => {
//     if (!user) return simulatorLinks.guest;
//     if (user.role === "farmer") return simulatorLinks.farmer;
//     if (user.role === "labour") return simulatorLinks.labour;
//     if (user.role === "transport") return simulatorLinks.transport;
//     return simulatorLinks.guest;
//   };

//   // Sync navbar with login/logout
//   useEffect(() => {
//     const savedUser = localStorage.getItem("user");
//     if (savedUser) setUser(JSON.parse(savedUser));

//     window.addEventListener("storage", handleStorageChange);
//     return () => window.removeEventListener("storage", handleStorageChange);
//   }, []);

  
//   const handleStorageChange = () => {
//     const updatedUser = localStorage.getItem("user");
//     setUser(updatedUser ? JSON.parse(updatedUser) : null);
//   };

//   return (
//     <nav
//       className="
//         fixed top-0 left-0 right-0 
//         h-[70px] w-full 
//         bg-white/80 backdrop-blur-md 
//         border-b border-gray-400 
//         shadow-sm z-50 
//         flex items-center gap-3
//         px-6 md:px-16 lg:px-15 xl:px-10
//       "
//     >
//       {/* LOGO + BRAND NAME */}
//       <div
//         className="flex items-center gap-3 cursor-pointer"
//         onClick={() => navigate("/")}
//       >
//         <img src={Logo} alt="Logo" className="w-20 h-20 object-contain" />
//         <span className="text-2xl font-bold text-green-700 tracking-wide">
//           KRISHI-CONNECT
//         </span>
//       </div>

//       {/* NAV LINKS */}
//       <ul className="hidden md:flex items-center gap-15 text-sm ml-auto mr-8">
//         <li><a href="/" className="hover:text-green-800 transition text-xl">Home</a></li>
//         <li><a href="/services" className="hover:text-green-700 transition text-xl">Services</a></li>
//         <li><a href="/contact" className="hover:text-green-700 transition text-xl">Contact us</a></li>
//         <li><a href="/plans" className="hover:text-green-700 transition text-xl">Plans</a></li>
//       </ul>

//       {/* RIGHT SECTION */}
//       <div className="flex items-center gap-4">

//         {/* CALL SIMULATOR BUTTON */}
//         <a
//           href={getSimulatorLink()}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="
//             hidden md:flex items-center gap-2 
//             px-4 py-2 rounded-full 
//             bg-green-600 text-white text-sm font-medium
//             hover:bg-green-700 transition cursor-pointer
//           "
//         >
//           <PhoneCall size={18} />
//           Call Simulator
//         </a>

//         {/* BEFORE LOGIN → Get Started */}
//         {!user && (
//           <Link
//             to="/login"
//             className="
//               hidden md:flex items-center justify-center
//               w-36 h-10 rounded-full
//               border border-green-400 text-green-700
//               hover:bg-green-50 transition
//             "
//           >
//             Get Started
//           </Link>
//         )}

//         {/* AFTER LOGIN → PROFILE ICON */}
//         {/* {user && (
//           <div
//             onClick={() => navigate("/profile")}
//             className="
//               w-11 h-11 rounded-full 
//               bg-green-600 text-white 
//               flex items-center justify-center 
//               cursor-pointer text-lg
//               hover:ring-2 hover:ring-green-300 transition
//             "
//           >
//             <UserCircle size={26} />
//           </div>
//         )} */}

//         {user && (
//   <div className="relative" ref={menuRef}>
//     {/* PROFILE ICON WITH STATUS */}
//     <div
//       onClick={() => setOpenMenu(!openMenu)}
//       className="w-11 h-11 rounded-full bg-green-600 text-white 
//                  flex items-center justify-center cursor-pointer 
//                  hover:ring-2 hover:ring-green-300 transition relative"
//     >
//       <UserCircle size={26} />
      
//       {/* STATUS DOT */}
//       <span
//         className={`absolute bottom-0 right-0 h-3 w-3 rounded-full 
//         ${user.availability ? "bg-green-500" : "bg-red-500"}`}
//       ></span>
//     </div>

//     {/* DROPDOWN MENU */}
//     {openMenu && (
//       <div
//         className="absolute right-0 mt-3 w-64 bg-white rounded-2xl shadow-xl p-5 
//                   border border-gray-200 animate-fadeIn z-50"
//       >
//         {/* Avatar & Name */}
//         <div className="flex items-center gap-3 pb-3 border-b border-gray-200">
//           <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
//             <UserCircle size={34} className="text-gray-600" />
//           </div>

//           <div>
//             <p className="font-bold text-gray-800 text-lg capitalize">
//               {user.role || "User"}
//             </p>
//             <p className="text-green-600 text-sm">Welcome back!</p>
//           </div>
//         </div>

//         {/* Availability Toggle */}
//         <div
//           className="flex items-center justify-between mt-4 cursor-pointer"
//           onClick={toggleAvailability}
//         >
//           <p className="text-gray-700 font-medium">Availability</p>
//           {user.availability ? (
//             <ToggleRight size={32} className="text-green-600" />
//           ) : (
//             <ToggleLeft size={32} className="text-red-500" />
//           )}
//         </div>

//         {/* Profile Button */}
//         <div
//           className="flex items-center gap-2 mt-5 p-2 rounded-lg hover:bg-gray-100 cursor-pointer"
//           onClick={() => navigate("/profile")}
//         >
//           <User size={20} />
//           <span>My Profile</span>
//         </div>

//         {/* Logout */}
//         <div
//           className="flex items-center gap-2 mt-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer text-red-600"
//           onClick={logoutUser}
//         >
//           <LogOut size={20} />
//           <span>Logout</span>
//         </div>
//       </div>
//     )}
//   </div>
// )}

//       </div>
//     </nav>
//   );
// }


import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/loho.svg";
import {
  UserCircle,
  LogOut,
  User,
  ToggleLeft,
  ToggleRight,
  PhoneCall,
} from "lucide-react";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  // Correct Simulator Links
  const simulatorLinks = {
    farmer:
      "https://ai.studio/apps/drive/1hJuQ1rCCMoAisj0K78Rn19xfbvSorbhM?fullscreenApplet=true",
    labour:
      "https://ai.studio/apps/drive/1j_t2-Eh3qlqiM7Lk0RBwFgeEqMT_ONwj?fullscreenApplet=true",
    transport:
      "https://ai.studio/apps/drive/1v405uppJBxujVRI2LZT708UwNB_3KHpm?fullscreenApplet=true",
    guest:
      "https://ai.studio/apps/drive/1rPNFwml8QSldxFD1JcoU8jCVkTjFmfbr?fullscreenApplet=true",
  };

  const getSimulatorLink = () => {
    if (!user) return simulatorLinks.guest;
    return simulatorLinks[user.role] || simulatorLinks.guest;
  };

  // Sync navbar with login/logout
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    setUser(savedUser);

    const handleStorage = () => {
      const updated = JSON.parse(localStorage.getItem("user"));
      setUser(updated);
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Toggle availability
  const toggleAvailability = () => {
    const updatedUser = {
      ...user,
      availability: !user.availability,
    };

    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
  };

  // Logout
  const logoutUser = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <nav
      className="
        fixed top-0 left-0 right-0 
        h-[70px] w-full 
        bg-white/80 backdrop-blur-md 
        border-b border-gray-400 
        shadow-sm z-50 
        flex items-center gap-3
        px-6 md:px-16 lg:px-15 xl:px-10
      "
    >
      {/* LOGO */}
      <div
        className="flex items-center gap-3 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img src={Logo} alt="Logo" className="w-20 h-20 object-contain" />
        <span className="text-2xl font-bold text-green-700 tracking-wide">
          KRISHI-CONNECT
        </span>
      </div>

      {/* NAV LINKS */}
      <ul className="hidden md:flex items-center gap-15 text-sm ml-auto mr-8">
        <li><a href="/" className="hover:text-green-800 transition text-xl">Home</a></li>
        <li><a href="/services" className="hover:text-green-700 transition text-xl">Services</a></li>
        <li><a href="/contact" className="hover:text-green-700 transition text-xl">Contact Us</a></li>
        <li><a href="/plans" className="hover:text-green-700 transition text-xl">Plans</a></li>
      </ul>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-4">

        {/* CALL SIMULATOR BUTTON */}
        <a
          href={getSimulatorLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="
            hidden md:flex items-center gap-2 
            px-4 py-2 rounded-full 
            bg-green-600 text-white text-sm font-medium
            hover:bg-green-700 transition cursor-pointer
          "
        >
          <PhoneCall size={18} />
          Call Simulator
        </a>

        {/* BEFORE LOGIN → GET STARTED */}
        {!user && (
          <Link
            to="/login"
            className="
              hidden md:flex items-center justify-center
              w-36 h-10 rounded-full
              border border-green-400 text-green-700
              hover:bg-green-50 transition
            "
          >
            Get Started
          </Link>
        )}

        {/* AFTER LOGIN → PROFILE DROPDOWN */}
        {user && (
          <div className="relative" ref={menuRef}>
            <div
              onClick={() => setOpenMenu(!openMenu)}
              className="w-11 h-11 rounded-full bg-green-600 text-white 
                         flex items-center justify-center cursor-pointer 
                         hover:ring-2 hover:ring-green-300 transition relative"
            >
              <UserCircle size={26} />

              {/* Availability Dot */}
              <span
                className={`absolute bottom-0 right-0 h-3 w-3 rounded-full 
                ${user.availability ? "bg-green-500" : "bg-red-500"}`}
              ></span>
            </div>

            {/* DROPDOWN MENU */}
            {openMenu && (
              <div className="absolute right-0 mt-3 w-64 bg-white rounded-2xl shadow-xl p-5 border border-gray-200 z-50 animate-fadeIn">

                {/* Avatar & Name */}
                <div className="flex items-center gap-3 pb-3 border-b border-gray-200">
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                    <UserCircle size={34} className="text-gray-600" />
                  </div>

                  <div>
                    <p className="font-bold text-gray-800 text-lg capitalize">
                      {user.role}
                    </p>
                    <p className="text-green-600 text-sm">Welcome back!</p>
                  </div>
                </div>

                {/* Availability Toggle */}
                <div
                  className="flex items-center justify-between mt-4 cursor-pointer"
                  onClick={toggleAvailability}
                >
                  <p className="text-gray-700 font-medium">Availability</p>
                  {user.availability ? (
                    <ToggleRight size={32} className="text-green-600" />
                  ) : (
                    <ToggleLeft size={32} className="text-red-500" />
                  )}
                </div>

                {/* Profile */}
                <div
                  className="flex items-center gap-2 mt-5 p-2 rounded-lg hover:bg-gray-100 cursor-pointer"
                  onClick={() => navigate("/profile")}
                >
                  <User size={20} />
                  <span>My Profile</span>
                </div>

                {/* Logout */}
                <div
                  className="flex items-center gap-2 mt-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer text-red-600"
                  onClick={logoutUser}
                >
                  <LogOut size={20} />
                  <span>Logout</span>
                </div>
              </div>
            )}
          </div>
        )}

      </div>
    </nav>
  );
}
