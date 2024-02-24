import express from "express";
import verifyToken from "../middleware/verifyToken.js";
import { create, get, getAll } from "../controllers/document.js";

const document = express.Router();
document.post("/create", verifyToken, create);
document.get("/get", verifyToken, get);
document.get("/getAll", getAll);

export default document;
