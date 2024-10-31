"use server"

import { connect } from 'mongoose';

let isConnected: boolean = false;

const connectDb = async () => {
  if (isConnected) {
    return;
  }

  try {
    console.log(process.env.MONGODB_URI)
    await connect(process.env.MONGODB_URI as string);
    isConnected = true;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

export default connectDb;
