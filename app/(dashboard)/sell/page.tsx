"use client";

import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Sell = () => {
  const router = useRouter()
  const [selectedImage, setSelectedImage] = useState(null);
  const [formData, setFormData] = useState({
    cropName: "",
    quantity: "",
    unitPrice: "",
    harvestDate: "",
    farmLocation: "",
    description: "",
    fullName: "",
    // phoneNumber: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleRedirect = ()=> {
  //   router.push('/crops')
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      data.append("cropName", formData.cropName);
      data.append("quantity", formData.quantity);
      data.append("unitPrice", formData.unitPrice);
      data.append("harvestDate", formData.harvestDate);
      data.append("farmLocation", formData.farmLocation);
      data.append("description", formData.description);
      data.append("fullName", formData.fullName);
      // data.append("phoneNumber", formData.phoneNumber);
      data.append("email", formData.email);

      if (selectedImage) {
        data.append("file", selectedImage);
      }

      const response = await fetch("/api/crops/sell-crop", {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        const result = await response.json();
        router.push('/crops')
        setFormData({
          cropName: "",
          quantity: "",
          unitPrice: "",
          harvestDate: "",
          farmLocation: "",
          description: "",
          fullName: "",
          // phoneNumber: "",
          email: "",
        });
        setSelectedImage(null);
      } else {
        throw new Error("Failed to add crop");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("There was an error submitting the form.");
    }
  };

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

        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center space-y-4 w-full max-w-2xl p-6 bg-white shadow-lg rounded-lg"
        >
          <input
            type="file"
            name="image"
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
            name="cropName"
            placeholder="Crop Name"
            value={formData.cropName}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <input
            type="number"
            name="quantity"
            placeholder="Quantity Available (e.g., 500 kg)"
            value={formData.quantity}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <input
            type="number"
            name="unitPrice"
            placeholder="Unit Price (e.g., per kg)"
            value={formData.unitPrice}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <input
            type="date"
            name="harvestDate"
            value={formData.harvestDate}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <input
            type="text"
            name="farmLocation"
            placeholder="Farm Location"
            value={formData.farmLocation}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md h-24 focus:ring-2 focus:ring-blue-500 outline-none"
          ></textarea>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          />
          {/* <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          /> */}
          <input
            type="email"
            name="email"
            placeholder="Email Address (optional)"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <button
            type="submit"
            className="mt-4 p-3 bg-black text-white font-semibold rounded-lg"
          >
            Sell Crop
          </button>
        </form>
      </div>
    </div>
  );
};

export default Sell;
