import mongoose from "mongoose";

// console.log(process.env.MONGO_URL);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`Mongodb connected ${mongoose.connection.host}`);
  } catch (error) {
    console.log(`Mongodb Server Issue ${error}`);
  }
};

export default connectDB;