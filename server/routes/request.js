import express from "express";
import { create, accept, get } from "../controllers/request.js";
import verifyToken from "../middleware/verifyToken.js";

const request = express.Router();

request.get("/get", verifyToken, get);
request.post("/create", verifyToken, create);
request.post("/accept", verifyToken, accept);

export default request;
