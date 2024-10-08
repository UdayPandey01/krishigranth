import React from "react";
import Image from "next/image";
import farmerimg from "../assests/farmer1.png";
import farmerim from "../assests/farmer3.png";
import farmerW from '../assests/farmerW.png'

const LandingPage = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 ">
        <div className="flex flex-col justify-center ml-8">
          <h1 className="text-5xl md:text-6xl font-bold text-black max-w-md">
            KrishiGranth: Your Agriculture
          </h1>
          <p className="text-lg text-black max-w-md mt-4">
            KrishiGranth is a comprehensive platform for farmers, offering
            weather forecasts, crop insights, and government schemes.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            width={468}
            height={300}
            src={farmerimg}
            alt="Farmer working in the field"
            className="img-float"
          />
        </div>
      </div>
      <div className="flex flex-row justify-center gap-20 mt-14 mb-4">
        <div>
          <span className="text-xl font-bold">Weather Forecast</span>
          <h4 className="text-center text-lg font-semibold">25 C</h4>
        </div>
        <div>
          <span className="text-xl font-bold">Government Schemes</span>
          <h4 className="text-center text-lg font-semibold">Available</h4>
        </div>
        <div>
          <span className="text-xl font-bold">Crops Description</span>
          <h4 className="text-center text-lg font-semibold">Available</h4>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 bg-gray-100">
        <div className="flex justify-center">
          <Image
            width={468}
            height={300}
            src={farmerim}
            alt="Farmer working in the field"
            className="img-float" 
          />
        </div>
        <div className="flex flex-col justify-center ml-8">
          <h1 className="text-4xl md:text-5xl font-bold text-black max-w-xl">
            KrishiGranth empowers farmers with accessible agricultural information.
          </h1>
          <p className="text-lg text-black max-w-sm mt-5">
            KrishiGranth provides essential agricultural data and government schemes details, enabling global access to farming resources
          </p>
        </div>
      </div>
      <div className="flex justify-center bg-gray-100">
        <h1 className="text-center text-5xl max-w-lg mt-32 font-bold mb-32">Empowering Farmers with Weather Insights, Crop Guidance, and Government Support</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 bg-gray-100">
        <div className="flex justify-center">
          <Image
            width={468}
            height={300}
            src={farmerW}
            alt="Farmer working in the field"
            className="img-float" 
          />
        </div>
        <div className="flex flex-col justify-center ml-8">
          <h1 className="text-5xl md:text-5xl font-bold text-black max-w-xl">
            KrishiGranth
          </h1>
          <p className="text-lg text-black max-w-sm mt-5">
          provides real-time weather updates, detailed crop information, and the latest government schemes to support and guide farmers in making informed decisions for successful farming.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
