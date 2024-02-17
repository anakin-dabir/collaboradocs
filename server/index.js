import http from "http";
import app from "./services/express.js";
import connectDb from "./services/db.js";
import auth from "./routes/auth.js";
import sendEmail from "./services/email.js";
import cron from "node-cron";
import SocketService from "./services/socket.js";
import config from "./config/config.js";
import uploadFile from "./services/fileUpload.js";
import document from "./routes/document.js";
import project from "./routes/project.js";

async function init() {
  // const socket = new SocketService();
  const httpServer = http.createServer(app);
  // socket.io.attach(httpServer);
  app.get("/", (req, res) => res.send("Server running ..."));
  app.post("/upload", (req, res) => {
    console.log(req.files.file);
    uploadFile(req.files.file);
  });
  app.use("/auth", auth);
  app.use("/document", document);
  app.use("/project", project);

  connectDb(process.env.MONGO || config.MONGO || "mongodb://127.0.0.1:27017/DF-63");
  httpServer.listen(process.env.PORT || 80, () =>
    console.log("Server running on port", process.env.PORT)
  );
  // socket.initListeners();
}

init();
