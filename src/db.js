import mongoose from "mongoose";
import { DB } from "./config.js";

export const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false)
    await mongoose.connect(DB);
    console.log("DB connected");
  } catch (error) {
    console.log(error);
  }
};
