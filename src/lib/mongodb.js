import mongoose from "mongoose";

const connection = {};
export default async function connectMongoDB() {
  try {
    if (connection.isConnected) {
      console.log("MongoDB is already connected");
      return;
    }
    const dbConnection = await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected: ");
    connection.isConnected = dbConnection.connections[0].readyState;
    console.log('Updated connection.isConnected:', );
  } catch (error) {
    console.log("MongoDB connection error: ");
    throw error;
  }
}
