import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema(
  {
    user: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    msg: String,
    link: String,
    read: {type: Boolean, default: false},
  },
  {
    timestamps: true,
    collection: "Notification",
  }
);

notificationSchema.pre("save", async function (next) {
  if (this.user.length === 0) {
    await this.remove();
    return;
  }
  next();
});
export default mongoose.model("Notification", notificationSchema);
