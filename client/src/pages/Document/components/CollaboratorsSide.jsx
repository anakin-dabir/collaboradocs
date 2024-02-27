import React from "react";
import XStack from "../../../components/XStack";
import XChip from "../../../components/XChip";
import { Avatar } from "@mui/material";
import XTooltip from "../../../components/XTooltip";
import shortName from "../../../utils/shortName";

const CollaboratorsSide = ({ document }) => {
  return (
    <XStack className='!bg-secondary_background/90 !drop-shadow-none h-fit p-5'>
      <div className='h-full w-full flex flex-col gap-4'>
        <div className='flex flex-col gap-2'>
          <div className='flex items-center gap-2'>
            <div className='text-lg font-bold text-primary_main'>Collaborators </div>
            <XChip label={document.collaborators.length} className='!px-3 !py-1' />
          </div>
        </div>

        <div className='flex items-center gap-2 flex-wrap'>
          {document.collaborators.map((collaborator, index) => {
            return (
              <XTooltip key={index} placement='top' data={collaborator.name}>
                <Avatar src={collaborator?.img}>{shortName(collaborator.name)}</Avatar>
              </XTooltip>
            );
          })}
        </div>
      </div>
    </XStack>
  );
};

export default CollaboratorsSide;
