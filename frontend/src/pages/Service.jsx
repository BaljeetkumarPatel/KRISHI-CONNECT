// import HeroSection from "../components/Service/HeroSection";
// import MainServiceCards from "../components/Service/MainServiceCards";
// import HowItWorks from "../components/Service/HowItWorks";
// import Footer from "../components/Footer";
// import FAQSection from "../components/Service/FAQSection";


// export default function Service() {
//   return (
//     <div className="min-h-screen bg-gray-50 pt-24 pb-20">
//       <div className="px-6 space-y-16">
//         <HeroSection />
//         <MainServiceCards />
//         <HowItWorks />
//         <FAQSection />
//       </div>

//       <Footer />
//     </div>
//   );
// }

import HeroSection from "../components/Service/HeroSection";
import MainServiceCards from "../components/Service/MainServiceCards";
import HowItWorks from "../components/Service/HowItWorks";
import FAQSection from "../components/Service/FAQSection";
import Footer from "../components/Footer";

export default function Service() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">

      {/* MAIN CONTENT */}
      <div className="px-6 md:px-16 space-y-20 pb-32">
        <HeroSection />
        <MainServiceCards />
        <HowItWorks />
        <FAQSection />
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
