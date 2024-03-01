import {useState} from "react";
import {io} from "socket.io-client";
import config from "../config/config";

const useSocket = () => {
  const [socket, socketSet] = useState(
    io(config.SERVER || "http://localhost:5000", {
      autoConnect: false,
    })
  );
  return {socket};
};

export default useSocket;
