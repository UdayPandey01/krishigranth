"use client";

import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import { useState } from "react";

const Sell = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center mt-10 space-y-8">
        {selectedImage && (
          <div className="flex flex-col items-center space-y-4">
            <Image
              height={350}
              width={350}
              src={URL.createObjectURL(selectedImage)}
              alt="Uploaded Crop"
              className="rounded-lg shadow-lg"
            />
            <button
              className="bg-red-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-500 transition duration-300"
              onClick={() => setSelectedImage(null)}
            >
              Delete
            </button>
          </div>
        )}

        <div className="flex flex-col items-center space-y-4 w-full max-w-2xl p-6 bg-white shadow-lg rounded-lg">
          <input
            type="file"
            name="myImage"
            id="file-upload"
            className="hidden"
            onChange={(e) => setSelectedImage(e.target.files[0])}
          />
          <label
            htmlFor="file-upload"
            className="cursor-pointer bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-500 transition duration-300"
          >
            Upload Image
          </label>

          <input
            type="text"
            placeholder="Crop Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <input
            type="number"
            placeholder="Quantity Available (e.g., 500 kg)"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <input
            type="number"
            placeholder="Unit Price (e.g., per kg)"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <input
            type="date"
            placeholder="Harvest Date"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <input
            type="text"
            placeholder="Farm Location"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <input
            type="text"
            placeholder="Pincode"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          />

          {/* <label className="flex items-center space-x-2 text-sm text-gray-700">
            <input type="checkbox" className="w-4 h-4 text-blue-600" />
            <span>Transportation Availability</span>
          </label> */}

          <textarea
            placeholder="Description"
            className="w-full px-4 py-2 border border-gray-300 rounded-md h-24 focus:ring-2 focus:ring-blue-500 outline-none"
          ></textarea>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <input
            type="email"
            placeholder="Email Address (optional)"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
        <button className="mt-4 p-3 bg-black  text-white font-semibold rounded-lg  ">
          Sell Crop
        </button>
      </div>
    </div>
  );
};

export default Sell;
