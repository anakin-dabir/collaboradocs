import express from "express";
import verifyToken from "../middleware/verifyToken.js";
import { addMember, create, get, getAll } from "../controllers/project.js";

const project = express.Router();
project.post("/create", verifyToken, create);
project.get("/getAll", verifyToken, getAll);
project.get("/get", verifyToken, get);
project.get("/addMembers", verifyToken, addMember);

export default project;
