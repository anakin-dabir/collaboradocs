import express from "express";
import { create, accept, goingToAdmin, goingFromAdmin, reject } from "../controllers/request.js";
import verifyToken from "../middleware/verifyToken.js";

const request = express.Router();

request.get("/goingToAdmin", verifyToken, goingToAdmin);
request.get("/goingFromAdmin", verifyToken, goingFromAdmin);
request.post("/create", verifyToken, create);
request.post("/accept", verifyToken, accept);
request.delete("/reject", verifyToken, reject);

export default request;
