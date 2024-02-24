import Document from "../models/document.js";
import Project from "../models/project.js";

async function create(req, res) {
  const { projectId, title, desc, visibility } = req.body;
  console.log({ projectId, title, desc, visibility });
  try {
    const document = new Document({
      title,
      desc,
      creator: req.user._id,
      project: projectId,
      visibility,
    });
    document.collaborators.push(req.user._id);
    const project = await Project.findById(projectId);
    project.documents.push(document._id);
    await project.save();
    await document.save();
    return res.status(200).json({ document, msg: "Created successfully" });
  } catch (err) {
    return res.status(500).json({ msg: "500: Error in creating doc" });
  }
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

async function getAll(req, res) {
  try {
    const document = await Document.find({ visibility: "Public" })
      .populate("creator", "name img")
      .populate("project", "name")
      .populate("collaborators", "name img");
    return res.status(200).json({ document });
  } catch (err) {}
}

export { create, edit, get, getAll };
