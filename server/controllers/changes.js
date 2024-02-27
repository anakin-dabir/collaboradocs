import Document from "../models/document.js";
import Change from "../models/changes.js";

async function create(req, res) {
  const { content, docId, userId } = req.body;
  try {
    await Document.findByIdAndUpdate(docId, {
      content,
      $inc: { changes: 1 },
      $addToSet: { collaborators: userId },
    });
    const change = await Change.create({
      document: docId,
      user: userId,
      content,
    });
    return res.status(200).json({ change, msg: "Successfully updated the document" });
  } catch (error) {}
}

async function get(req, res) {
  const docId = req.params.docId;
  try {
    const change = await Change.find({ document: docId }).sort({ createdAt: -1 });
    return res.status(200).json({ change, msg: "Success" });
  } catch (error) {}
}
export { create, get };
