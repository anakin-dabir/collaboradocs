import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      unique: true,
    },
    password: String,
    img: String,
  },
  {
    timestamps: true,
    collection: "User",
  }
);

export default mongoose.model("User", userSchema);
