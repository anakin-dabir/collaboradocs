import Request from "../models/request.js";
import Project from "../models/project.js";

async function goingToAdmin(req, res) {
  try {
    const request = await Request.find({
      type: "GoingToAdmin",
      $or: [{ from: req.user._id }, { to: req.user._id }],
    })
      .populate("project", "name")
      .populate("from", "name img");
    return res.status(200).json({ request, msg: "Success" });
  } catch (error) {}
}

async function goingFromAdmin(req, res) {
  try {
    const request = await Request.find({
      type: "GoingFromAdmin",
      $or: [{ from: req.user._id }, { to: req.user._id }],
    })
      .populate("project", "name")
      .populate("from", "name img");
    return res.status(200).json({ request, msg: "Success" });
  } catch (error) {}
}

async function create(req, res) {
  const { projectId, userId, type } = req.body;

  try {
    const alreadyRequested = await Request.findOne({ project: projectId, user: userId, type });
    if (alreadyRequested) return res.status(208).json({ msg: "Already requested" });
    const request = await Request.create({
      project: projectId,
      to: userId,
      from: req.user._id,
      type,
    });
    return res.status(200).json({ request, msg: "he" });
  } catch (error) {}
}

async function accept(req, res) {
  const { projectId, userId, reqId } = req.body;
  try {
    const project = await Project.findById(projectId);
    if (project.members.includes(userId)) return res.status(208).json({ msg: "Already a member" });
    project.members.push(userId);
    await project.save();
    await Request.deleteOne({ _id: reqId });
    return res.status(200).json({ msg: "Request accepted" });
  } catch (error) {}
}

async function reject(req, res) {
  const { reqId } = req.body;
  try {
    await Request.deleteOne({ _id: reqId });
    return res.status(200).json({ msg: "Success" });
  } catch (error) {}
}

export { create, accept, goingToAdmin, goingFromAdmin, reject };
