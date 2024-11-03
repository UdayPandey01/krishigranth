import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const CropDetails = async ({ params }: { params: { id: string } }) => {
  const response = await fetch(
    `http://localhost:3000/api/crops/get-crop/${params.id}`
  );
  const data = await response.json();
  return (
    <div className="h-screen flex flex-col">
        <div className="w-full">
        <Navbar />
      </div>
      <div className="grid grid-cols-3 h-screen">
        <div className="grid col-span-2 items-center justify-center">
          <Image
            src={data.crop.image}
            alt={`${data.crop.cropName}`}
            width={650}
            height={800}
            className="rounded-lg"
          />
        </div>
        <div className="bg-neutral-900">
          <div className="ml-7 mt-20 text-white max-w-md">
            <h1 className="text-white text-5xl">{data.crop.cropName}</h1>
            <p className="mt-10 ml-1">{data.crop.description}</p>
            <h2 className="flex text-2xl justify-end mt-5">{`₹${data.crop.unitPrice}/Kg`}</h2>
            <div className="flex flex-col gap-4 mt-10">
              <Button className="rounded-xl bg-white text-black hover:bg-slate-200">Buy Crop</Button>
              <Button className="rounded-xl bg-white text-black hover:bg-slate-200">Add Cart</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CropDetails;
