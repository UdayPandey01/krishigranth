import prisma from "@/lib/db";
import Image from "next/image";
import React from "react";
import FarmField from "@/assests/farmField.jpg";
import crop1 from "@/assests/crop4.png";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";

const page = async () => {
  const crops = await prisma.crop.findMany();

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
            <li key={crop.id} className="border rounded-md p-4 shadow-lg">
              {crop.image && (
                <Image
                  src={crop.image}
                  alt={`${crop.cropName} image`}
                  width={300}
                  height={300}
                  quality={100}
                />
              )}
              <div className="flex justify-between mt-4">
                <h2 className="text-lg font-semibold">{crop.cropName}</h2>
                <h2 className="text-lg font-semibold">{`₹${crop.unitPrice}/Kg`}</h2>
              </div>
              <div className="flex justify-around">
              <Button className="mt-2">View Details</Button>
              <Button className="mt-2">Edit Crop</Button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default page;
