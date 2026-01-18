import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [openCategory, setOpenCategory] = useState(null);
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleCategory = (id) => {
    setOpenCategory(openCategory === id ? null : id);
    setOpenFAQ(null); // reset inner FAQ accordion
  };

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const faqCategories = [
    {
      category_id: "general",
      category_title: "General Information & Registration",
      faqs: [
        { id: 1, question: "What is Krishi-Connect and who is it for?",
          answer: "Krishi-Connect is a voice-based (IVR) platform that connects Farmers..." },
        { id: 2, question: "Do I need a smartphone or internet?",
          answer: "No. Works on any basic keypad phone using a toll-free number." },
        { id: 3, question: "Is the service available in my language?",
          answer: "Yes, supports Hindi, Tamil, Telugu, English and more." },
      ],
    },

    {
      category_id: "privacy",
      category_title: "Data Privacy & Security",
      faqs: [
        { id: 6, question: "Is my personal phone number visible?",
          answer: "No. It is only shared once you accept a job request." },
        { id: 7, question: "How do you use my location?",
          answer: "Only for matching nearby jobs. No tracking stored." },
      ],
    },

    {
      category_id: "farmer_services",
      category_title: "For Farmers",
      faqs: [
        { id: 12, question: "How do I hire laborers?",
          answer: "Call IVR → Hire Labor → Enter workers needed." },
        { id: 13, question: "Can I book a transport?",
          answer: "Yes, via IVR based on load weight and crop type." },
      ],
    },

    {
      category_id: "worker_services",
      category_title: "For Laborers & Transporters",
      faqs: [
        { id: 15, question: "How do I get paid?",
          answer: "Payment is directly between worker and farmer." },
        { id: 16, question: "How to pause calls?",
          answer: "Toggle Busy/Available in dashboard or IVR." },
      ],
    },

    {
      category_id: "billing",
      category_title: "Subscription & Billing",
      faqs: [
        { id: 18, question: "Is it free?",
          answer: "Basic plan is free forever." },
        { id: 19, question: "How to buy subscription?",
          answer: "Using UPI, Debit Card, or village kiosks." },
      ],
    },

    {
      category_id: "support",
      category_title: "Troubleshooting & Support",
      faqs: [
        { id: 21, question: "What if call disconnects?",
          answer: "System resumes where you left off." },
        { id: 22, question: "Forgot login?",
          answer: "Use phone + OTP to login again." },
      ],
    },
  ];

  return (
    <div className="w-full mt-16 flex flex-col items-center">

      <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
        Frequently Asked Questions
      </h2>

      {/* CATEGORY CONTAINER — controlled width */}
      <div className="w-full max-w-3xl space-y-4">

        {faqCategories.map((category) => (
          <div key={category.category_id} className="bg-gray-200 rounded-lg shadow-sm">

            {/* CATEGORY BUTTON */}
            <button
              onClick={() => toggleCategory(category.category_id)}
              className="w-full flex justify-between items-center p-4 text-left text-gray-900 font-semibold"
            >
              <span>{category.category_title}</span>
              <ChevronDown
                size={20}
                className={`transition-transform ${
                  openCategory === category.category_id ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* DROPDOWN QUESTIONS */}
            {openCategory === category.category_id && (
              <div className="px-4 pb-4 space-y-3">

                {category.faqs.map((faq) => (
                  <div key={faq.id} className="bg-white rounded-md">

                    {/* QUESTION */}
                    <button
                      onClick={() => toggleFAQ(faq.id)}
                      className="w-full flex justify-between items-center text-left p-3 text-gray-800 font-medium"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        size={18}
                        className={`transition-transform ${
                          openFAQ === faq.id ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* ANSWER */}
                    {openFAQ === faq.id && (
                      <div className="p-3 pt-0 text-sm text-gray-700">
                        {faq.answer}
                      </div>
                    )}

                  </div>
                ))}

              </div>
            )}
          </div>
        ))}

      </div>
    </div>
  );
}
