"use client";

import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

interface Crop {
  id: string;
  cropName: string;
  unitPrice: number;
  image?: string;
}

interface GetCropsProps {
  crop: Crop;
}

const GetCrops = ({ crop }: GetCropsProps) => {
  return (
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
        <Link href={`/crops/${crop.id}`}>
          <Button className="mt-2">View Details</Button>
        </Link>
        <Button className="mt-2">Edit Crop</Button>
      </div>
    </li>
  );
};

export default GetCrops;
