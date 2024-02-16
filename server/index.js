import http from "http";
import app from "./services/express.js";
import connectDb from "./services/db.js";
import auth from "./routes/auth.js";
import sendEmail from "./services/email.js";
import cron from "node-cron";
import SocketService from "./services/socket.js";

async function init() {
  const socket = new SocketService();
  const httpServer = http.createServer(app);
  socket.io.attach(httpServer);
  app.get("/", (req, res) => res.send("Server running on port 5000"));
  app.use("/auth", auth);

  connectDb(process.env.MONGO || "mongodb://127.0.0.1:27017/DF-63");
  httpServer.listen(process.env.PORT || 80, () =>
    console.log("Server running on port", process.env.PORT)
  );
  cron.schedule("* * * * *", () => {
    sendEmail("talhaarshad2413@gmail.com", "Hehehe", "Fuck you");
  });
  socket.initListeners();
}

init();
