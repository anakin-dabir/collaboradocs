import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema(
  {
    user: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    msg: String,
    link: String,
  },
  {
    timestamps: true,
    collection: "Notification",
  }
);

export default mongoose.model("Notification", notificationSchema);
