import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    name: String,
    creator: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    documents: [{ type: mongoose.Schema.Types.ObjectId, ref: "Document" }],
  },
  {
    timestamps: true,
    collection: "Project",
  }
);

export default mongoose.model("Project", projectSchema);
