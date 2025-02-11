import mongoose from "mongoose";


const connectDB = async () => {
  try {
    const connect = await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}`
    );
    console.log(`MongoDB connected: ${connect.connection.host}`);
  } catch (error) {
    console.log("Mongodb connection error", error);
    process.exit(1);
  }
};

export default connectDB;
