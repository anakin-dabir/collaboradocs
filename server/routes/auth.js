import express from "express";
import {
  createUser,
  get,
  login,
  register,
  remove,
  updateImage,
  updateName,
  verify,
} from "../controllers/auth.js";
import verifyToken from "../middleware/verifyToken.js";

const auth = express.Router();

auth.get("/get", verifyToken, get);
auth.get("/verify", verify);
auth.post("/login", login);
auth.post("/register", register);
auth.post("/updateImage", verifyToken, updateImage);
auth.post("/createUser", createUser);
auth.post("/updateName", verifyToken, updateName);
auth.delete("/remove", verifyToken, remove);

export default auth;
