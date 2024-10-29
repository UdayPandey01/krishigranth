// models/schems.ts
import mongoose, { Schema, Document } from "mongoose";

// Define the TypeScript interface for the Crop document
interface ICrop extends Document {
  cropName: string;
  quantity: number;
  unitPrice: number;
  harvestDate: Date;
  farmLocation: string;
  description: string;
  fullName: string;
  phoneNumber: string;
  email?: string;
}

// Define the schema for the Crop model
const CropSchema: Schema = new Schema({
  cropName: { type: String, required: true },
  quantity: { type: Number, required: true },
  unitPrice: { type: Number, required: true },
  harvestDate: { type: Date, required: true },
  farmLocation: { type: String, required: true },
  description: { type: String, required: true },
  fullName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: false },
});

// Export the Crop model, initializing it only if it doesn't already exist
const Crop = mongoose.models.Crop || mongoose.model<ICrop>("Crop", CropSchema);

export default Crop
