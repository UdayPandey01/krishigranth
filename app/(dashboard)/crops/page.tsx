import Image from "next/image";
import React from "react";
import FarmField from "@/assests/farmField.jpg";
import crop1 from "@/assests/crop4.png";
import { Navbar } from "@/components/Navbar";
import GetCrops from "@/components/GetCrops";
import prisma from "@/lib/db";

const Crops = async () => {
  const crops = await prisma.crop.findMany();
  console.log(crops);
  return (
    <div className="container mx-auto p-4 bg-slate-100">
      <Navbar />
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <Image
              src={FarmField}
              alt="Wide view of farm field"
              layout="responsive"
              width={600}
              height={450}
              className="rounded-md"
            />
          </div>
          <div className="flex flex-col space-y-4">
            <Image
              src={crop1}
              alt="Close-up of farm crops"
              layout="responsive"
              width={400}
              height={260}
              className="rounded-md"
            />
            <Image
              src={FarmField}
              alt="Scenic view of farm in the morning"
              layout="responsive"
              width={400}
              height={260}
              className="rounded-md"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold mb-4">Available Crops</h1>
        <ul className="grid grid-cols-3 gap-4">
          {crops.map((crop) => (
            <GetCrops key={crop.id} crop={crop} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Crops;
