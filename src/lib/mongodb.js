
import mongoose from "mongoose";

/**
 * Connects to MongoDB using the MONGODB_URI environment variable.
 * If the connection is successful, logs "MongoDB connected: ".
 * If the connection fails, logs "MongoDB connection error: " and rethrows the error.
 */
export default async function connectMongoDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected: " );
  } catch (error) {
    console.log( "MongoDB connection error: "); 
    throw error;
  
  }
}