import Project from "../models/project.js";
import Document from "../models/document.js";

async function create(req, res) {
  const { name } = req.body;
  try {
    const project = new Project({
      name,
      creator: req.user._id,
      members: [req.user._id],
    });
    await project.save();
    return res.status(200).json({ project, msg: "Project created successfully" });
  } catch (err) {
    return res.status(500).json({ msg: "Internal Server Error" });
  }
}

async function getAll(req, res) {
  try {
    const project = await Project.find({ members: { $in: [req.user._id] } })
      .sort({ createdAt: -1 })
      .populate("members", "name img")
      .populate("documents", "_id")
      .populate("creator", "name img");
    return res.status(200).json({ project, msg: "Success" });
  } catch (err) {}
}

async function get(req, res) {
  try {
    const project = await Project.find({ creator: req.user._id })
      .populate("creator")
      .populate("members");
    if (!project) return res.status(404).json({ msg: "No projects" });

    return res.status(200).json({ project, msg: "Success" });
  } catch (err) {}
}

async function addMember(req, res) {
  try {
    const { id, user } = req.body;
    const document = await Project.findById(id);
    document.members.push(user._id);
  } catch (err) {}
}

async function deleteProject(req, res) {
  try {
    const { projectId } = req.body;
    await Project.findByIdAndDelete(projectId);
    await Document.deleteMany({ project: projectId });
    return res.status(200).json({ msg: "Project deleted successfully" });
  } catch (error) {
    return res.status(500).json({ msg: "Error in deleting project" });
  }
}

async function update(req, res) {
  const { projectId, name, members } = req.body;
  try {
    const project = await Project.findByIdand;
  } catch (error) {}
}

export { create, get, getAll, addMember, deleteProject, update };
