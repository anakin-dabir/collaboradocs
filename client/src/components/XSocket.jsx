import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {setUser} from "../store/slice/socketSlice";

const XSocket = () => {
  const user = useSelector(state => state.user.user);
  const dispatch = useDispatch();
  const socket = useSelector(state => state.socket.socket);

  useEffect(() => {
    if (!user) return;
    socket.connect();
    socket.emit("event:addUser", user._id);
    socket.on("event:getUser", users => {
      dispatch(setUser(users));
    });
    return () => socket.disconnect();
  }, [user]);
  return null;
};

export default XSocket;
