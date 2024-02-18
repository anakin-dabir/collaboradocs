import Project from "../models/project.js";

async function create(req, res) {
  const { name } = req.body;
  try {
    const project = new Project({
      name,
      creator: req.user._id,
    });
    await project.save();
    return res.status(200).json({ project, msg: "Project created successfully" });
  } catch (err) {
    return res.status(500).json({ msg: "Internal Server Error" });
  }
}

async function getAll(req, res) {
  try {
    const project = await Project.find({})
      .populate("members")
      .populate("documents")
      .populate("creator");
    if (!project) return res.status(404).json({ msg: "Not found" });
    return res.status(200).json({ project, msg: "Success" });
  } catch (err) {}
}

async function get(req, res) {
  try {
    const project = await Project.find({ creator: req.user._id })
      .populate("creator")
      .populate("members")
      .populate("documents");
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

export { create, get, getAll, addMember };
