import React, {useEffect} from "react";
import XStack from "../../../components/XStack";
import XChip from "../../../components/XChip";
import {Avatar} from "@mui/material";
import XTooltip from "../../../components/XTooltip";
import shortName from "../../../utils/shortName";
import useSocket from "../../../hooks/useSocket";
import {useSelector} from "react-redux";
import XButton from "../../../components/XButton";

const ActiveMembers = ({document}) => {
  const {socket} = useSocket();
  const user = useSelector(state => state.user.user);
  useEffect(() => {
    socket.emit("event:addUser", user);
    socket.on("event:getUser", users => {
      console.log(users);
    });
  }, [socket]);
  return (
    <>
      <XButton onClick={() => socket.emit("event:message", {msg: "Hi there"})}>Click me</XButton>
      <XStack className="!bg-secondary_background/90 !drop-shadow-none h-fit p-5">
        <div className="h-full w-full flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="text-lg font-bold text-primary_main">Active Members </div>
              <XChip label={document.collaborators.length} className="!px-3 !py-1" />
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {document.collaborators.map((collaborator, index) => {
              return (
                <XTooltip key={index} placement="top" data={collaborator.name}>
                  <Avatar src={collaborator?.img}>{shortName(collaborator.name)}</Avatar>
                </XTooltip>
              );
            })}
          </div>
        </div>
      </XStack>
    </>
  );
};

export default ActiveMembers;
