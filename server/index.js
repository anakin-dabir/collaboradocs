import express from "express";
import http from "http";
import SocketService from "./services/socket.js";

async function init() {
  const app = express();
  const httpServer = http.createServer(app);
  const socket = new SocketService();
  socket.io.attach(httpServer);
  app.get("/", (req, res) => res.send("Server running on port 5000"));
  httpServer.listen(5001, () => console.log("Server running on port", 5000));

  socket.initListeners();
}

init();
