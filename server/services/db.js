import mongoose from "mongoose";

const connectDb = async (url) => {
  try {
    await mongoose.connect(url);
    console.log(`DB Connected on ${url}`);
  } catch (err) {
    console.log(`Error: ${err}`);
    process.exit(1);
  }
};
export default connectDb;
