import express from "express";
import verifyToken from "../middleware/verifyToken.js";
import { addMember, create, get, getAll, deleteProject, update } from "../controllers/project.js";

const project = express.Router();
project.post("/create", verifyToken, create);
project.get("/getAll", verifyToken, getAll);
project.get("/get", verifyToken, get);
project.get("/addMembers", verifyToken, addMember);
project.delete("/delete", verifyToken, deleteProject);
project.post("/update", verifyToken, update);

export default project;
