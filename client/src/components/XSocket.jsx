import { useEffect } from "react";
import useSocket from "../hooks/useSocket";

const XSocket = () => {
  const { socket } = useSocket();
  useEffect(() => {
    socket.connect();
    socket.emit("event:addUser", "123");
    return () => socket.disconnect();
  }, []);
  return null;
};

export default XSocket;
