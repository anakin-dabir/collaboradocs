import {useEffect} from "react";
import useSocket from "../hooks/useSocket";
import {useSelector} from "react-redux";

const XSocket = () => {
  const {socket} = useSocket();
  const user = useSelector(state => state.user.user);
  useEffect(() => {
    if (!user) return;
    socket.connect();
    // socket.emit("event:addUser", user._id);
    return () => socket?.disconnect();
  }, [user]);
  return null;
};

export default XSocket;
