"use client";

import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Crop {
  id: string;
  cropName: string;
  unitPrice: number;
  image?: string;
  description: string;
}

interface PageProps {
  params: {
    id: string;
  };
}

const CropDetails = ({ params }: PageProps) => {
  const router = useRouter();
  const [cropData, setCropData] = useState<Crop | null>(null);

  useEffect(() => {
    const fetchCrop = async () => {
      try {
        const response = await fetch(`/api/crops/get-crop/${params.id}`);
        const data = await response.json();
        setCropData(data.crop);
      } catch (error) {
        console.error("Error fetching crop data:", error);
      }
    };

    fetchCrop();
  }, [params.id]);

  const handleEditCrop = () => {
    if (!cropData) return;
    const query = {
      id: cropData.id,
      cropName: cropData.cropName,
      unitPrice: cropData.unitPrice.toString(),
      image: cropData.image || "",
      description: cropData.description,
    };
    const queryString = new URLSearchParams(query).toString();
    router.push(`/sell?${queryString}`);
  };

  if (!cropData) return <div>Loading...</div>;

  return (
    <div className="h-screen flex flex-col">
      <div className="w-full">
        <Navbar />
      </div>
      <div className="grid grid-cols-3 h-screen">
        <div className="grid col-span-2 items-center justify-center">
          <Image
            src={cropData.image || "/default-image.jpg"}
            alt={cropData.cropName}
            width={650}
            height={800}
            className="rounded-lg"
          />
        </div>
        <div className="bg-neutral-900">
          <div className="ml-7 mt-20 text-white max-w-md">
            <h1 className="text-white text-5xl">{cropData.cropName}</h1>
            <p className="mt-10 ml-1">{cropData.description}</p>
            <h2 className="flex text-2xl justify-end mt-5">{`₹${cropData.unitPrice}/Kg`}</h2>
            <div className="flex flex-col gap-4 mt-10">
              <Button className="rounded-xl bg-white text-black hover:bg-slate-200">Buy Crop</Button>
              <Button className="rounded-xl bg-white text-black hover:bg-slate-200">Add Cart</Button>
              <Button
                className="rounded-xl bg-white text-black hover:bg-slate-200"
                onClick={handleEditCrop}
              >
                Edit Crop
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CropDetails;
