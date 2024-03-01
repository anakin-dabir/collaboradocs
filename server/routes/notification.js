import express from "express";
import verifyToken from "../middleware/verifyToken.js";
import {getAll, deleteNotification, readNotification} from "../controllers/notification.js";

const notification = express.Router();
notification.get("/getAll", verifyToken, getAll);
notification.delete("/read", verifyToken, readNotification);
notification.delete("/delete", verifyToken, deleteNotification);

export default notification;
