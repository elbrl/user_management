import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error("MONGODB_URI environment variable is not defined");
    }

    await mongoose.connect(uri);
    console.log("Connected to MongoDB.");
  } catch (err) {
    console.error(err);
  }
};

export default connectMongoDB;
