import mongoose from "mongoose";

const documentSchema = new mongoose.Schema(
  {
    title: String,
    content: String,
    creator: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    project: { type: mongoose.Schema.Types.ObjectId, ref: "Project" },
  },
  {
    timestamps: true,
    collection: "Document",
  }
);

export default mongoose.model("Document", documentSchema);
