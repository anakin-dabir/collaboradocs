import mongoose from "mongoose";

const documentSchema = new mongoose.Schema(
  {
    document: [{ type: mongoose.Schema.Types.ObjectId, ref: "Document" }],
  },
  {
    timestamps: true,
    collection: "Starred",
  }
);

export default mongoose.model("Star", documentSchema);
