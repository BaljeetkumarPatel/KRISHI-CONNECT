import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import HowItWorks from "../components/HowItWorks";
import ChooseRoleSection from "../components/ChooseRoleSection";
import WhyChooseUs from "../components/WhyChooseUs";
import LiveStatistics from "../components/LiveStatistics";
import AudioDemo from "../components/AudioDemo";
import SuccesStories from "../components/SuccessStories";
import Footer from "../components/Footer";
import Dashboard from "./Dashboard";
import ChatBotWidget from "../components/Bot/ChatBotWidget";

export default function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const u = JSON.parse(localStorage.getItem("user"));
    if (u) setUser(u);
  }, []);

  // If logged in → Load Dashboard.jsx
  // if (user) {
  //   return <Dashboard />;
  // }
  if (user) {
    return (
      <>
        <Dashboard />

        {/* Floating bot also works on Dashboard */}
        <ChatBotWidget />
      </>
    );
  }
  return (
    <div>
      <HeroSection />
      <HowItWorks />
      <ChooseRoleSection /> 
      <WhyChooseUs />
      <LiveStatistics />
      <AudioDemo />
      <SuccesStories />
      <Footer />
      {/* other sections… */}

      <ChatBotWidget />

    </div>
  );
}
