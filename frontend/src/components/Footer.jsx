import React from "react";
import { ExternalLink, Phone, Mail, MapPin } from "lucide-react";
import Logo from "../assets/loho.svg";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-300 mt-20">
      <div className="px-6 md:px-16 lg:px-24 xl:px-32 py-12">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-gray-700">
          
          {/* -------------------------------------------------- */}
          {/* COLUMN 1 — BRAND + MISSION */}
          {/* -------------------------------------------------- */}
          <div>
            <img src={Logo} alt="Krishi-Connect" className="w-28" />

            <h3 className="font-bold text-xl text-green-700 mt-4">
              Connecting Rural India via Voice.
            </h3>

            <p className="text-gray-600 mt-2 max-w-[280px]">
              No internet needed. A simple phone call connects Farmers, Labourers, and Transport Providers.
            </p>

            <p className="mt-4 inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
              🇮🇳 Made for Digital India
            </p>
          </div>

          {/* -------------------------------------------------- */}
          {/* COLUMN 2 — QUICK LINKS */}
          {/* -------------------------------------------------- */}
          <div>
            <h3 className="font-semibold text-lg mb-3 text-gray-900">Quick Links</h3>

            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-green-700 transition">Home</a></li>
              <li><a href="/services" className="hover:text-green-700 transition">Services</a></li>
              <li><a href="/contact" className="hover:text-green-700 transition">Contact Us</a></li>
              <li><a href="/plans" className="hover:text-green-700 transition">Pricing / Plans</a></li>
              <li><a href="/faqs" className="hover:text-green-700 transition">FAQs</a></li>
            </ul>
          </div>

          {/* -------------------------------------------------- */}
          {/* COLUMN 3 — IMPORTANT GOVT SCHEMES */}
          {/* -------------------------------------------------- */}
          <div>
            <h3 className="font-semibold text-lg mb-3 text-gray-900">
              Govt Schemes for Farmers
            </h3>

            <ul className="space-y-2 text-sm">

              <li className="flex items-center justify-between">
                <a
                  href="https://pmkisan.gov.in"
                  target="_blank"
                  className="hover:text-green-700 transition"
                >
                  PM-KISAN Samman Nidhi
                </a>
                {/* <ExternalLink size={15} className="text-gray-500" /> */}
              </li>

              <li className="flex items-center justify-between">
                <a
                  href="https://enam.gov.in"
                  target="_blank"
                  className="hover:text-green-700 transition"
                >
                  e-NAM (Online Mandi)
                </a>
                {/* <ExternalLink size={15} className="text-gray-500" /> */}
              </li>

              <li className="flex items-center justify-between">
                <a
                  href="https://soilhealth.dac.gov.in"
                  target="_blank"
                  className="hover:text-green-700 transition"
                >
                  Soil Health Card
                </a>
                {/* <ExternalLink size={15} className="text-gray-500" /> */}
              </li>

              <li className="flex items-center justify-between">
                <a
                  href="https://farmer.gov.in/KisanCallCenter.aspx"
                  target="_blank"
                  className="hover:text-green-700 transition"
                >
                  Kisan Call Center
                </a>
                {/* <ExternalLink size={15} className="text-gray-500" /> */}
              </li>

              <li className="flex items-center justify-between">
                <a
                  href="https://mausam.imd.gov.in"
                  target="_blank"
                  className="hover:text-green-700 transition"
                >
                  IMD Weather Updates
                </a>
                {/* <ExternalLink size={15} className="text-gray-500" /> */}
              </li>

            </ul>
          </div>

          {/* -------------------------------------------------- */}
          {/* COLUMN 4 — CONTACT US */}
          {/* -------------------------------------------------- */}
          <div>
            <h3 className="font-semibold text-lg mb-3 text-gray-900">Contact Us</h3>

            <p className="flex items-center gap-2 text-sm mb-2">
              <Phone size={18} /> <strong className="text-green-700">1800-XXX-XXXX</strong>
            </p>

            <p className="flex items-center gap-2 text-sm mb-2">
              <Mail size={18} /> support@krishiconnect.in
            </p>

            <p className="flex items-center gap-2 text-sm">
              <MapPin size={18} /> BMSIT, Bengaluru, Karnataka
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 mt-4 text-gray-700">
              {/* <a className="hover:text-green-700 transition" href="#">Instagram</a>
              <a className="hover:text-green-700 transition" href="#">Facebook</a>
              <a className="hover:text-green-700 transition" href="#">WhatsApp</a>
              <a className="hover:text-green-700 transition" href="#">YouTube</a> */}

              
            </div>
          </div>

        </div>

        {/* -------------------------------------------------- */}
        {/* BOTTOM COPYRIGHT BAR */}
        {/* -------------------------------------------------- */}
        <div className="border-t border-gray-300 mt-10 pt-5 text-center text-sm text-gray-500">
          <p>
            © 2025 <strong>Krishi-Connect</strong>. All rights reserved.
          </p>

          <div className="mt-2 flex justify-center gap-4 text-xs">
            <a href="#" className="hover:text-green-700">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-green-700">Terms of Service</a>
            <span>|</span>
            <a href="#" className="hover:text-green-700">Data Safety</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
