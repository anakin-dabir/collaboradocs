import express from "express";
import verifyToken from "../middleware/verifyToken.js";
import { create, get, revert } from "../controllers/changes.js";

const changes = express.Router();
changes.post("/create", verifyToken, create);
changes.get("/get/:docId", verifyToken, get);
changes.post("/revert", verifyToken, revert)

export default changes;
