import mongoose from "mongoose";

const changesSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    document: { type: mongoose.Schema.Types.ObjectId, ref: "Document" },
    content: String,
  },
  {
    timestamps: true,
    collection: "Change",
  }
);

export default mongoose.model("Change", changesSchema);
