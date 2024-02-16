import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const useSocket = () => {
  const [socket, socketSet] = useState(
    io("http://localhost:5000" || "https://pucon-production.up.railway.app/", {
      autoConnect: false,
    })
  );

  const connect = () => {
    socket.connect();
  };

  return { socket, connect };
};

export default useSocket;
