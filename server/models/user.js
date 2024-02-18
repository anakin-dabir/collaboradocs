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
    isVerified: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    collection: "User",
  }
);

export default mongoose.model("User", userSchema);
