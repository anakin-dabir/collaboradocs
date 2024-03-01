import React, {useState} from "react";
import XStack from "../../../components/XStack";
import XChip from "../../../components/XChip";
import XTooltip from "../../../components/XTooltip";
import {Avatar} from "@mui/material";
import shortName from "../../../utils/shortName";
import {useCreateRequestMutation} from "../../../services/nodeApi";
import XConfirmAlert from "../../../components/Alert/XConfirmAlert";
import {useSelector} from "react-redux";

const CollabSide = ({document}) => {
  const [isOpen, isOpenSet] = useState(false);
  const isLogged = useSelector(state => state.user.user);
  const socket = useSelector(state => state.socket.socket);
  const [createRequest, {isLoading}] = useCreateRequestMutation();
  const handleClose = () => {
    isOpenSet(false);
  };

  async function handleConfirm() {
    try {
      const res = await createRequest({
        projectId: document.project._id,
        userId: [document.creator._id],
        type: "GoingToAdmin",
      });
      if (res) {
        socket.emit("event:goingToAdmin", {userId: document.creator._id});
      }
    } catch (error) {}
  }

  return (
    <>
      <XConfirmAlert
        heading="Request to collaborate"
        isOpen={isOpen}
        onClose={handleClose}
        onConfirm={handleConfirm}
        loading={isLoading}
      />
      <XStack className="!bg-secondary_background/90 !drop-shadow-none h-fit p-5">
        <div className="h-full w-full flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="text-lg font-bold text-primary_main">Collaborators </div>
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
            {isLogged && (
              <XTooltip data="Wanna Collaborate" placement="top">
                <Avatar
                  onClick={() => isOpenSet(true)}
                  className={` text-2xl cursor-pointer ${
                    document.project.members.includes(isLogged._id)
                      ? "pointer-events-none bg-gray-600"
                      : "bg-primary_main"
                  }`}
                >
                  +
                </Avatar>
              </XTooltip>
            )}
          </div>
        </div>
      </XStack>
    </>
  );
};

export default CollabSide;
