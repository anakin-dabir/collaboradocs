import { Server } from "socket.io";

class SocketService {
  io;
  users;

  constructor() {
    console.log("Init Socket Service...");
    this.io = new Server({
      cors: {
        allowedHeaders: ["*"],
        origin: "*",
      },
    });
    this.users = [];
  }

  initListeners() {
    const io = this.io;
    console.log("Init Socket Listeners...");

    io.on("connect", (Socket) => {
      console.log(`New Socket Connected`, Socket.id);

      Socket.on("event:addUser", (userId) => {
        console.log(`user ${userId} connected`, Socket.id);
        this.addUser(userId, Socket.id);
        io.emit("event:getUser", this.users);
      });

      Socket.on("event:removeUser", (userId) => {
        console.log("user removed", Socket.id);
        this.removeUser(userId);
        io.emit("event:getUser", this.users);
      });

      // Socket.on("event:message", async ({ message }) => {
      //   console.log("New Message Rec.", message);
      // });

      Socket.on("disconnect", () => {
        console.log("Socket disconnected");
        this.removeUser(Socket.id);
        io.emit("event:getUser", this.users);
      });
    });
  }

  addUser(userId, socketId) {
    !this.users.some((user) => user.userId === userId) && this.users.push({ userId, socketId });
  }

  removeUser(socketId) {
    this.users = this.users.filter((user) => user.socketId !== socketId);
  }

  getUser(userId) {
    const found = this.users.find((user) => user.userId === userId);
    return found;
  }
}

export default SocketService;
