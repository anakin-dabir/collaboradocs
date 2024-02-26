import express from "express";
import verifyToken from "../middleware/verifyToken.js";
import { create, get, getAll, getByProjectId, edit, deleteDocument } from "../controllers/document.js";

const document = express.Router();
document.get("/getAll", getAll);
document.get("/get/:docId", verifyToken, get);
document.get("/getByProjectId/:projectId", verifyToken, getByProjectId);
document.post("/create", verifyToken, create);
document.post("/edit", verifyToken, edit);
document.delete("/delete", verifyToken, deleteDocument);


export default document;
