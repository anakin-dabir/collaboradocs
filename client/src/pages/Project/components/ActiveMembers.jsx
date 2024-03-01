import React from "react";
import XStack from "../../../components/XStack";
import XChip from "../../../components/XChip";
import {Avatar} from "@mui/material";
import XTooltip from "../../../components/XTooltip";
import shortName from "../../../utils/shortName";
import {useSelector} from "react-redux";

const ActiveMembers = ({project}) => {
  const users = useSelector(state => state.socket.users);
  const activeMembers = project.members.filter(member =>
    users.some(user => member._id === user.userId)
  );
  return (
    <>
      <XStack className="!bg-secondary_background/90 !drop-shadow-none h-fit p-5">
        <div className="h-full w-full flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="text-lg font-bold text-primary_main">Active Members </div>
              <XChip label={activeMembers.length} className="!px-3 !py-1" />
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {activeMembers.map((activeMember, index) => {
              return (
                <XTooltip key={index} placement="top" data={activeMember.name}>
                  <Avatar src={activeMember?.img}>{shortName(activeMember.name)}</Avatar>
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
