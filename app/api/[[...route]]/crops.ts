import prisma from "@/lib/db";
import { Hono } from "hono";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const app = new Hono()
  .post("/sell-crop", async (c) => {
    try {
      const data = await c.req.formData();

      const cropName = data.get("cropName") as string | null;
      const quantity = parseInt(data.get("quantity") as string);
      const unitPrice = parseFloat(data.get("unitPrice") as string);
      const harvestDate = data.get("harvestDate") as string | null;
      const farmLocation = data.get("farmLocation") as string | null;
      const description = data.get("description") as string;
      const fullName = data.get("fullName") as string | null;
      const email = data.get("email") as string | null;
      const file = data.get("file") as File | null;

      if (!cropName || !harvestDate || !farmLocation || !fullName || !email) {
        return c.json({ message: "Missing required fields" }, 400);
      }

      if (!file) {
        return c.json({ message: "File is required" }, 400);
      }

      const bytes = await file.arrayBuffer();
      const base64String = Buffer.from(bytes).toString("base64");
      const dataUri = `data:${file?.type};base64,${base64String}`;

      const uploadResult = await cloudinary.uploader.upload(dataUri, {
        folder: "crops",
      });

      const newCrop = await prisma.crop.create({
        data: {
          cropName,
          quantity,
          unitPrice,
          harvestDate: new Date(harvestDate),
          farmLocation,
          description,
          fullName,
          email,
          image: uploadResult.secure_url,
        },
      });

      return c.json(
        {
          message: "Crop successfully added!",
          crop: newCrop,
        },
        201
      );
    } catch (error) {
      console.error(error);
      return c.json(
        {
          message: "Error saving crop",
          error: error || "An unknown error occurred",
        },
        500
      );
    }
  })
  .get("/get-crops", async (c) => {
    try {
      const crops = await prisma.crop.findMany();
      return c.json({ crops }, 200);
    } catch (error) {
      console.error(error);
      return c.json(
        {
          message: "Error retrieving crops",
          error,
        },
        500
      );
    }
  })
  .get("/get-crop/:id", async (c) => {
    const cropId = c.req.param("id");

    try {
      const crop = await prisma.crop.findUnique({
        where: {
          id: cropId,
        },
      });

      if (!crop) {
        return c.json({ error: "Crop not found" }, 404);
      }

      return c.json({ crop }, 200);
    } catch (error) {
      console.error(error);
      return c.json(
        {
          error: "failed to fetch crop",
        },
        500
      );
    }
  })
  .patch("/update-crop/:id", async (c) => {
    const id = c.req.param("id");
  
    try {
      const body = await c.req.formData();

      const cropName = body.get("cropName");
      const description = body.get("description");
      const unitPrice = body.get("unitPrice");

      if (!cropName || !description || !unitPrice) {
        return c.json({ error: "Missing required fields." }, 400);
      }

      if (typeof cropName !== "string" || typeof description !== "string" || typeof unitPrice !== "string") {
        return c.json({ error: "Fields must be strings." }, 400);
      }
  
      const unitPriceNumber = parseFloat(unitPrice);
      if (isNaN(unitPriceNumber)) {
        return c.json({ error: "Unit price must be a valid number." }, 400);
      }

      const updateCrop = await prisma.crop.update({
        where: {
          id,
        },
        data: {
          cropName,
          description,
          unitPrice: unitPriceNumber,
        },
      });

      return c.json({ updateCrop }, 200);
    } catch (error) {
      console.error("Error updating crop:", error);
      return c.json({ error: "Failed to update crop." }, 500); 
    }
  });
  

export default app;
