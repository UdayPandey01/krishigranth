"use client";

import { Navbar } from "@/components/Navbar";
import React from "react";
import { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    const textElements = document.querySelectorAll(".animate-text");
    textElements.forEach((element, index) => {
      (element as HTMLElement).style.opacity = "0";
      (element as HTMLElement).style.transform = "translateY(20px)";
      setTimeout(() => {
        (element as HTMLElement).style.transition =
          "opacity 0.8s ease, transform 0.8s ease";
        (element as HTMLElement).style.opacity = "1";
        (element as HTMLElement).style.transform = "translateY(0)";
      }, index * 300);
    });
  }, []);

  return (
    <div className="bg-white text-black min-h-screen">
      <Navbar />

      <div className="text-5xl m-8 font-bold text-center animate-text">
        Government Schemes for Farmers
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 m-8">
        <div className="shadow-2xl rounded-xl p-6 transition-transform transform hover:scale-105 hover:shadow-xl bg-white animate-text">
          <div className="text-3xl font-bold mb-4">
            Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)
          </div>
          <p className="text-lg font-light mt-4">
            This scheme provides financial support to small and marginal
            farmers. Eligible farmers receive ₹6,000 annually, transferred in
            three equal installments.
          </p>
          <span className="text-xl font-semibold mt-6 block">
            Eligibility Criteria
          </span>
          <p className="text-lg font-light mt-2">
            Small and marginal farmers who own up to 2 hectares of cultivable
            land.
          </p>
          <span className="text-xl font-semibold mt-6 block">
            Application Procedure
          </span>
          <p className="text-lg font-light mt-2">
            Farmers can apply through the PM-KISAN portal or by contacting their
            local agriculture officers. Aadhaar is mandatory for registration.
          </p>
          <button className="bg-black text-white mt-6 px-4 py-2 rounded-xl shadow-md hover:bg-gray-800 transition-transform transform hover:scale-105">
            Apply Now
          </button>
        </div>
        <div className="shadow-2xl rounded-xl p-6 transition-transform transform hover:scale-105 hover:shadow-xl bg-white animate-text">
          <div className="text-3xl font-bold mb-4">
            Pradhan Mantri Awas Yojana (PMAY) - Urban
          </div>
          <p className="text-lg font-light mt-4">
            This scheme aims to provide affordable housing for the urban poor by
            2022, offering financial assistance for constructing houses or
            enhancing existing ones.
          </p>
          <span className="text-xl font-semibold mt-6 block">
            Eligibility Criteria
          </span>
          <p className="text-lg font-light mt-2">
            Families with a husband, wife, and unmarried children. Special
            preference is given to SC/ST, differently-abled persons, and
            economically weaker sections (EWS).
          </p>
          <span className="text-xl font-semibold mt-6 block">
            Application Procedure
          </span>
          <p className="text-lg font-light mt-2">
            Applicants can apply online via the PMAY website by entering Aadhaar
            details and filling out an assessment form.
          </p>
          <button className="bg-black text-white mt-6 px-4 py-2 rounded-xl shadow-md hover:bg-gray-800 transition-transform transform hover:scale-105">
            Apply Now
          </button>
        </div>
        <div className="shadow-2xl rounded-xl p-6 transition-transform transform hover:scale-105 hover:shadow-xl bg-white animate-text">
          <div className="text-3xl font-bold mb-4">
            Pradhan Mantri Fasal Bima Yojana (PMFBY)
          </div>
          <p className="text-lg font-light mt-4">
            This crop insurance scheme helps farmers cover losses from crop
            failure due to natural calamities.
          </p>
          <span className="text-xl font-semibold mt-6 block">
            Eligibility Criteria
          </span>
          <p className="text-lg font-light mt-2">
            Farmers growing notified crops during the notified season in a
            particular area.
          </p>
          <span className="text-xl font-semibold mt-6 block">
            Application Procedure
          </span>
          <p className="text-lg font-light mt-2">
            Farmers can apply through their bank, CSC (Common Service Centers),
            or the PMFBY website.
          </p>
          <button className="bg-black text-white mt-6 px-4 py-2 rounded-xl shadow-md hover:bg-gray-800 transition-transform transform hover:scale-105">
            Apply Now
          </button>
        </div>
      </div>
      <div className="bg-black py-4">
        <div className="text-center text-sm text-white">
          © 2024 KrishiGranth. All rights reserved.
        </div>
        <div className="flex flex-row justify-center gap-4 mt-4 text-white text-sm">
          <div className="cursor-pointer hover:underline">Privacy Policy</div>
          <div className="cursor-pointer hover:underline">Terms of Service</div>
          <div className="cursor-pointer hover:underline">Contact Us</div>
        </div>
      </div>
    </div>
  );
};

export default Page;
