import Document from "../models/document.js";
import Project from "../models/project.js";
import Change from "../models/changes.js";
import Notification from "../models/notification.js";

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
    for (const member of project.members) {
      if (
        (!member.equals(project.creator) && document.visibility === "Public") ||
        document.visibility === "Shared"
      ) {
        await Notification.create({
          user: member,
          msg: `Admin created a new doc ${document.title} in project ${project.name}`,
          link: `/project/${project._id}`,
        });
      }
    }
    await document.save();
    return res.status(200).json({ document, msg: "Created successfully" });
  } catch (err) {
    return res.status(500).json({ msg: "500: Error in creating doc" });
  }
}

async function edit(req, res) {
  const { title, desc, visibility, docId } = req.body;
  try {
    await Document.findByIdAndUpdate(docId, { title, desc, visibility });
    return res.status(200).json({ msg: "Document creds updated sucessfully" });
  } catch (error) {
    return res.status(500).json({ msg: "Failed to update document" });
  }
}

async function get(req, res) {
  const docId = req.params.docId;
  try {
    const document = await Document.findById(docId)
      .populate("creator", "name img")
      .populate("project", "name")
      .populate("collaborators", "name img");
    return res.status(200).json({ document, msg: "Succeed" });
  } catch (err) {}
}

async function getAll(req, res) {
  try {
    const document = await Document.find({ visibility: "Public" })
      .populate("creator", "name img")
      .populate("project", "name members")
      .populate("collaborators", "name img");
    return res.status(200).json({ document });
  } catch (err) {}
}

async function getByProjectId(req, res) {
  const projectId = req.params.projectId;
  try {
    const document = await Document.find(
      {
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
      },
      "title desc creator project stars collaborators visibility changes createdAt updatedAt"
    ).sort({ createdAt: -1 });
    return res.status(200).json({ document, msg: "Success" });
  } catch (error) {}
}

async function deleteDocument(req, res) {
  const { docId } = req.body;
  try {
    const project = await Project.findOne({ documents: docId });
    if (project) {
      project.documents.pull(docId);
      await project.save();
      await Document.findByIdAndDelete(docId);
    } else {
      await Document.findByIdAndDelete(docId);
    }
    await Change.deleteMany({ document: docId });
    return res.status(200).json({ msg: "Document deleted successfully" });
  } catch (error) {
    return res.status(500).json({ msg: "Document deletion failed" });
  }
}

async function star(req, res) {
  const documentId = req.params.documentId;
  try {
    const document = await Document.findByIdAndUpdate(documentId, { $inc: { stars: 1 } });
    return res.status(200).json({ document, msg: "Success" });
  } catch (error) {
    return res.status(500).json({ msg: "Unable to star" });
  }
}

async function unstar(req, res) {
  const documentId = req.params.documentId;
  try {
    const document = await Document.findByIdAndUpdate(documentId, {
      $inc: { stars: { $cond: { if: { $gt: ["$stars", 0] }, then: -1, else: 0 } } },
    });
    return res.status(200).json({ document, msg: "Success" });
  } catch (error) {
    return res.status(500).json({ msg: "Unable to unstar" });
  }
}

export { create, edit, get, getAll, getByProjectId, deleteDocument, star, unstar };
