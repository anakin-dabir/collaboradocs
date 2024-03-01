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
    return res.status(200).json({ change, msg: "Successfully changed the document" });
  } catch (error) {
    return res.status(500).json({ msg: "Error in changing the document" });
  }
}

async function get(req, res) {
  const docId = req.params.docId;
  try {
    const change = await Change.find({ document: docId })
      .sort({ createdAt: -1 })
      .populate("user", "img name");
    return res.status(200).json({ change, msg: "Success" });
  } catch (error) {}
}

async function revert(req, res) {
  const { docId, content } = req.body;
  console.log(docId, content);
  try {
    await Document.findByIdAndUpdate(docId, { content });
    return res.status(200).json({ msg: "Doc reverted to this version" });
  } catch (error) {
    res.status(500).json({ msg: "Error in changing version" });
  }
}
export { create, get, revert };
