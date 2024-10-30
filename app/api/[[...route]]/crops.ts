import Crop from "@/models/schema";
import connectDb from "@/utils/dbConnect";
import { Hono } from "hono";

const app = new Hono()
  .post("/sell-crop", async (c) => {
    await connectDb();

    try {
      const data = await c.req.json();
      const newCrop = new Crop({
        cropName: data.cropName,
        quantity: data.quantity,
        unitPrice: data.unitPrice,
        harvestDate: data.harvestDate,
        farmLocation: data.farmLocation,
        description: data.description,
        fullName: data.fullName,
        phoneNumber: data.phoneNumber,
        email: data.email,
      });
      await newCrop.save();
      return c.json(
        {
          message: "Crop successfully added!",
          crop: newCrop,
        },
        201
      );
    } catch (error) {
      return c.json(
        {
          message: "Error saving crop",
          error,
        },
        500
      );
    }
  })
  .get("/get-crops", async (c) => {
    await connectDb();
    try {
      const crops = Crop.find();
      return c.json({ crops }, 200);
    } catch (error) {
      return c.json(
        {
          message: "Error saving crop",
          error,
        },
        500
      );
    }
  });

export default app;
