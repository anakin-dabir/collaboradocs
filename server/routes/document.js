import express from "express";
import verifyToken from "../middleware/verifyToken.js";
import { create, get } from "../controllers/document.js";

const document = express.Router();
document.post("/create", verifyToken, create);
document.get("/get", verifyToken, get);

export default document;
