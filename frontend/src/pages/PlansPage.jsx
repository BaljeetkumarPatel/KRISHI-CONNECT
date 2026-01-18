import React from "react";
import SubscriptionPlans from "../components/SubscriptionPlans";
import Footer from "../components/Footer";

export default function PlansPage() {
  const user = JSON.parse(localStorage.getItem("user")); 

  return (
    <div className="pt-28"> 
      {/*  pt-28 = top margin to push content below navbar */}
      <SubscriptionPlans user={user} />
      <Footer />
    </div>
  );
}
