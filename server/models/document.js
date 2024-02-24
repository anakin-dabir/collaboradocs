import mongoose from "mongoose";

const documentSchema = new mongoose.Schema(
  {
    title: String,
    desc: String,
    content: String,
    creator: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    project: { type: mongoose.Schema.Types.ObjectId, ref: "Project" },
    stars: { type: Number, default: 0 },
    collaborators: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    visibility: { type: String, default: "Public", enum: ["Public", "Private", "Shared"] },
  },
  {
    timestamps: true,
    collection: "Document",
  }
);

export default mongoose.model("Document", documentSchema);
