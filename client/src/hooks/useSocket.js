import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import config from "../config/config";

const useSocket = () => {
  const [socket, socketSet] = useState(
    io(process.env.SERVER || config.SERVER || "http://localhost:5000", {
      autoConnect: false,
    })
  );

  const connect = () => {
    socket.connect();
  };

  return { socket, connect };
};

export default useSocket;
