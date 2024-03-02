import express from "express";
import verifyToken from "../middleware/verifyToken.js";
import {
  create,
  get,
  getAll,
  getByProjectId,
  edit,
  deleteDocument,
  star,
  unstar,
} from "../controllers/document.js";

const document = express.Router();
document.get("/getAll", getAll);
document.get("/get/:docId", verifyToken, get);
document.get("/getByProjectId/:projectId", verifyToken, getByProjectId);
document.post("/create", verifyToken, create);
document.post("/edit", verifyToken, edit);
document.delete("/delete", verifyToken, deleteDocument);

document.get("/star/:documentId", verifyToken, star);
document.get("/unstar/:documentId", verifyToken, unstar);

export default document;
