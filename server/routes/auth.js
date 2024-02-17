import express from "express";
import { createUser, login, register } from "../controllers/auth.js";

const auth = express.Router();
auth.post("/login", login);
auth.post("/register", register);
auth.post("/createUser", createUser);

export default auth;
