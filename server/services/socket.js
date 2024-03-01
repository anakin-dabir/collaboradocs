import {Server} from "socket.io";
import Project from "../models/project.js";

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

    io.on("connect", Socket => {
      console.log(`New Socket Connected`, Socket.id);

      Socket.on("event:addUser", userId => {
        console.log(`user ${userId} connected`, Socket.id);
        this.addUser(userId, Socket.id);
        io.emit("event:getUser", this.users);
      });

      Socket.on("event:removeUser", userId => {
        console.log("user removed", Socket.id);
        this.removeUser(userId);
        Socket.on("event:removeUser", userId => {
          console.log("user removed", Socket.id);
          this.removeUser(userId);
          io.emit("event:getUser", this.users);
        });
        io.emit("event:getUser", this.users);
      });

      Socket.on("event:addDocument", async data => {
        try {
          const project = await Project.findById(data.projectId, "members creator");
          this.users
            .filter(user =>
              project.members.some(
                member =>
                  member.toString() === user.userId.toString() && !member.equals(project.creator)
              )
            )
            .forEach(user => io.to(user.socketId).emit("event:documentAdded"));
        } catch (error) {}
      });

      Socket.on("event:goingToAdmin", async data => {
        const targetUser = this.users.find(user => data.userId === user.userId);
        if (targetUser) {
          io.to(targetUser.socketId).emit("response:goingToAdmin");
        }
      });

      Socket.on("event:GoingFromAdmin", async data => {
        this.users.forEach(user => {
          if (data.userIdArray.includes(user.userId)) {
            io.to(user.socketId).emit("response:GoingFromAdmin");
          }
        });
      });

      Socket.on("disconnect", () => {
        console.log("Socket disconnected");
        this.removeUser(Socket.id);
        io.emit("event:getUser", this.users);
      });
    });
  }

  addUser(userId, socketId) {
    !this.users.some(user => user.userId === userId) && this.users.push({userId, socketId});
  }

  removeUser(socketId) {
    this.users = this.users.filter(user => user.socketId !== socketId);
  }

  getUser(userId) {
    const found = this.users.find(user => user.userId === userId);
    return found;
  }
}

export default SocketService;
