import express from "express";
import verifyToken from "../middleware/verifyToken.js";
import Document from "../models/document.js";
import Project from "../models/project.js";

const document = express.Router();
document.post("/create", verifyToken, create);
document.get("/get", verifyToken, get);

export default document;

async function create(req, res) {
  const { id, title, content } = req.body;

  try {
    const document = new Document({
      title,
      content,
      creator: req.user._id,
      project: id,
    });
    const project = await Project.findById(id);
    project.documents.push(document._id);
    await project.save();
    await document.save();
    return res.status(200).json({ document, msg: "Created successfully" });
  } catch (err) {}
}

async function edit(req, res) {
  const { title, content } = req.body;
}

async function get(req, res) {
  const { id } = req.body;
  try {
    const document = await Document.find({ creator: req.user._id, project: id })
      .populate("creator")
      .populate("project");
    return res.status(200).json({ document, msg: "Succeed" });
  } catch (err) {}
}
