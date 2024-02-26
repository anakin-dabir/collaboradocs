import React from "react";
import XStack from "../XStack";
import { Avatar } from "@mui/material";
import getDate from "../../utils/getDate";
import shortName from "../../utils/shortName";
import { ReactComponent as Star } from "@/assets/custom/star.svg";
import { ReactComponent as Project } from "@/assets/custom/project.svg";

const DocAboutSide = ({ document }) => {
  return (
    <XStack className='!bg-secondary_background/90 !drop-shadow-none h-fit p-5'>
      <div className='h-full w-full flex flex-col gap-4'>
        <div className='flex flex-col gap-2'>
          <div className='text-lg font-bold text-primary_main'>About </div>
          <div className='text-sm'>{document.desc}</div>
        </div>

        <div className='flex items-center gap-2'>
          <Avatar src={document.creator?.img}>{shortName(document.creator.name)}</Avatar>
          <div className='flex flex-col'>
            <div className='text-sm font-bold text-primary_main'>{document.creator.name}</div>
            <div className='text-xs'>{getDate(document.createdAt)}</div>
          </div>
        </div>

        <div className='flex flex-col gap-2'>
          <div className='flex items-center gap-2'>
            <Project />
            <div className='text-xs leading-3'>{document.project.name}</div>
          </div>
          <div className='flex items-center gap-2'>
            <Star />
            <div className='text-xs leading-3'>{document.stars} Stars</div>
          </div>
        </div>
      </div>
    </XStack>
  );
};

export default DocAboutSide;
