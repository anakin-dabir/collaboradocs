import React from "react";
import shortName from "../../../utils/shortName";
import XStack from "../../../components/XStack";
import { Avatar } from "@mui/material";
import getDate from "../../../utils/getDate";
import XChip from "../../../components/XChip";
import XTooltip from "../../../components/XTooltip";

const UsersSide = ({ project }) => {
  return (
    <XStack className='!bg-secondary_background/90 mt-2 !drop-shadow-none h-fit p-5'>
      <div className='h-full w-full flex flex-col gap-8'>
        <div className='flex flex-col gap-2'>
          <div className='text-lg font-bold text-primary_main'>Admin </div>
          <div className='flex items-center gap-3'>
            <Avatar src={project.creator?.img}>{shortName(project.creator.name)}</Avatar>
            <div className='flex flex-col'>
              <div className='text-sm font-bold text-primary_main'>{project.creator.name}</div>
              <div className='text-xs'>
                <span className='font-semibold'>Created: </span>
                {getDate(project.createdAt)}
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-3'>
          <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-2'>
              <div className='text-lg font-bold text-primary_main'>Members </div>
              <XChip label={project.members.length} className='!px-3 !py-1' />
            </div>
          </div>

          <div className='flex items-center gap-2 flex-wrap'>
            {project.members.map((member, index) => {
              return (
                <XTooltip placement='top' data={member.name} key={index}>
                  <Avatar src={member?.img}>{shortName(member.name)}</Avatar>
                </XTooltip>
              );
            })}
            <XTooltip placement='top' data='Add New'>
              <Avatar className='bg-primary_main text-2xl cursor-pointer'>+</Avatar>
            </XTooltip>
          </div>
        </div>
      </div>
    </XStack>
  );
};

export default UsersSide;
