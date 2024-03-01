import http from "http";
import app from "./services/express.js";
import connectDb from "./services/db.js";
import auth from "./routes/auth.js";
import SocketService from "./services/socket.js";
import config from "./config/config.js";
import uploadFile from "./services/fileUpload.js";
import document from "./routes/document.js";
import project from "./routes/project.js";
import request from "./routes/request.js";
import changes from "./routes/changes.js";
import notification from "./routes/notification.js";

async function init() {
  const socket = new SocketService();
  const httpServer = http.createServer(app);
  socket.io.attach(httpServer);
  app.get("/", (req, res) => res.send("Server running ..."));
  app.post("/upload", (req, res) => {
    console.log(req.files.file);
    uploadFile(req.files.file);
  });
  app.use("/auth", auth);
  app.use("/document", document);
  app.use("/project", project);
  app.use("/request", request);
  app.use("/change", changes);
  app.use("/notification", notification);
  connectDb(process.env.MONGO || config.MONGO || "mongodb://127.0.0.1:27017/Collaboradocs");
  httpServer.listen(process.env.PORT || 80, () =>
    console.log("Server running on port", process.env.PORT)
  );
  socket.initListeners();
}

init();
