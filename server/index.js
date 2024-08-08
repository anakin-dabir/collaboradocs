import http from "http";
import app from "./services/express.js";
import connectDb from "./services/db.js";
import SocketService from "./services/socket.js";
import config from "./config/config.js";
import appRouter from "./routes/index.js";


async function init() {
  const socket = new SocketService();
  const httpServer = http.createServer(app);
  socket.io.attach(httpServer);
  app.use("/api", appRouter)
  connectDb(process.env.MONGO || config.MONGO || "mongodb://127.0.0.1:27017/Collaboradocs");
  httpServer.listen(process.env.PORT || 80, () =>
    console.log("Server running on port", process.env.PORT)
  );
  socket.initListeners();
}

init();
