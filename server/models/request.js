import mongoose from "mongoose";

const requestSchema = new mongoose.Schema(
  {
    project: { type: mongoose.Schema.Types.ObjectId, ref: "Project" },
    from: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    to: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    type: { type: String, enum: ["Incoming", "Outgoing"] },
  },
  {
    timestamps: true,
    collection: "Request",
  }
);

export default mongoose.model("Request", requestSchema);
