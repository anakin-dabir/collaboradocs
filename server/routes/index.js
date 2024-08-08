import express from "express";
import uploadFile from "../services/fileUpload.js";
import auth from "./auth.js";
import project from "./project.js";
import request from "./request.js";
import document from "./document.js";
import changes from "./changes.js";
import notification from "./notification.js";

const appRouter = express.Router();

appRouter.get("/", (req, res) => res.send("Server running ..."));
appRouter.post("/upload", (req, res) => {
  console.log(req.files.file);
  uploadFile(req.files.file);
});
appRouter.use("/auth", auth);
appRouter.use("/document", document);
appRouter.use("/project", project);
appRouter.use("/request", request);
appRouter.use("/change", changes);
appRouter.use("/notification", notification);

export default appRouter;
