import mongoose from "mongoose";
import Document from "../models/document.js";
import Request from "../models/request.js";

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

projectSchema.pre("remove", async function (next) {
  await Document.deleteMany({ project: this._id });
  await Request.deleteMany({ project: this._id });
  next();
});

export default mongoose.model("Project", projectSchema);
