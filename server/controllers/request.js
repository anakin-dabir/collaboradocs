import Request from "../models/request.js";
import Project from "../models/project.js";

async function goingToAdmin(req, res) {
  try {
    const request = await Request.find({
      type: "GoingToAdmin",
      to: req.user._id,
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
      to: req.user._id,
    })
      .populate("project", "name")
      .populate("from", "name img");
    return res.status(200).json({ request, msg: "Success" });
  } catch (error) {}
}

async function create(req, res) {
  const { projectId, userId, type } = req.body;

  try {
    const existingRequests = await Request.find({
      project: projectId,
      to: { $in: userId },
      type,
    });

    const userIdsToRequest = userId.filter(
      (id) => !existingRequests.some((request) => request.to.toString() === id)
    );

    if (userIdsToRequest.length > 0) {
      const newRequests = userIdsToRequest.map((id) => ({
        project: projectId,
        to: id,
        from: req.user._id,
        type,
      }));
      await Request.insertMany(newRequests);
    }
    return res.status(200).json({ msg: `Request has been sent` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function accept(req, res) {
  const { projectId, userId, reqId } = req.body;
  try {
    const project = await Project.findById(projectId);
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
