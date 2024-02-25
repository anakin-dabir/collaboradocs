import Document from "../models/document.js";
import Project from "../models/project.js";

async function create(req, res) {
  const { projectId, title, desc, visibility } = req.body;
  try {
    const document = new Document({
      title,
      desc,
      creator: req.user._id,
      project: projectId,
      visibility,
      collaborators: [req.user._id],
    });
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

async function getByProjectId(req, res) {
  const { projectId } = req.body;
  try {
    const document = await Document.find({
      project: projectId,
      $or: [
        {
          creator: req.user._id,
          $or: [{ visibility: "Private" }, { visibility: "Public" }, { visibility: "Shared" }],
        },
        {
          $or: [{ visibility: "Public" }, { visibility: "Shared" }],
        },
      ],
    }).sort({ createdAt: -1 });
    return res.status(200).json({ document, msg: "Success" });
  } catch (error) {}
}

export { create, edit, get, getAll, getByProjectId };
