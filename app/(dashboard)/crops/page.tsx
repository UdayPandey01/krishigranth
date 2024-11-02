import prisma from "@/lib/db";
import Image from "next/image";
import React from "react";

const page = async () => {
  const crops = await prisma.crop.findMany();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Available Crops</h1>
      <ul className="space-y-4">
        {crops.map((crop) => (
          <li key={crop.id} className="border rounded-md p-4 shadow-sm">
            {crop.image && (
              <Image
                src={crop.image}
                alt={`${crop.cropName} image`}
                width={300}
                height={300}
                quality={100}
                className=" object-cover mb-2"
              />
            )}
            <h2 className="text-lg font-semibold">{crop.cropName}</h2>
            <p className="text-gray-600">{crop.description}</p>
            <p className="text-gray-500">Location: {crop.farmLocation}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default page;
