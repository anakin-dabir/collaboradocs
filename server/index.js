import http from "http";
import app from "./services/express.js";
import connectDb from "./services/db.js";

async function init() {
  const httpServer = http.createServer(app);
  app.get("/", (req, res) => res.send("Server running on port 5000"));

  connectDb("mongodb://127.0.0.1:27017/DF-63");
  httpServer.listen(5000, () => console.log("Server running on port", 5000));
}

init();
