import React from "react";
import XStack from "../../../components/XStack";
import { Avatar } from "@mui/material";
import dayjs from "dayjs";
import { ReactComponent as Logo } from "@/assets/custom/logo.svg";
import { ReactComponent as Star } from "@/assets/custom/star.svg";
import { ReactComponent as Project } from "@/assets/custom/project.svg";
import shortName from "../../../utils/shortName";
import checkPlural from "../../../utils/checkPlural";
import { useNavigate } from "react-router-dom";

const DocumentTile = ({ document }) => {
  const navigate = useNavigate();
  return (
    <XStack className='!bg-secondary_background/90 !drop-shadow-none'>
      <div className='flex flex-col px-5 p-3 gap-2 h-full w-full'>
        <div className='flex justify-between'>
          <div className='flex items-center gap-3'>
            <Avatar src={document.creator?.img}>{shortName(document.creator.name)}</Avatar>
            <div className='flex flex-col'>
              <div className='text-sm'>
                <span className='font-bold text-primary_main'>{document.creator.name}</span>
                <span> shared a document</span>
              </div>
              <div className='text-xs'>{dayjs(document.createdAt).fromNow()}</div>
            </div>
          </div>
          {/* <XButton color='primary' className='!bg-primary_main/20'>
                          Star
                        </XButton> */}
        </div>
        <XStack
          className='cursor-pointer !bg-transparent/20 !drop-shadow-none hover:!bg-secondary_light/10 transition-all'
          onClick={() => {
            navigate(`/doc/${document._id}`);
          }}
        >
          <div className='h-full w-full p-4 flex flex-col gap-2'>
            <div className='text-sm leading-3 font-bold text-primary_light'>{document.title}</div>
            <div className='text-xs  truncate'>{document.desc}</div>
            <div className='flex items-center gap-5 text-primary_main text-xs leading-3'>
              <div className='flex items-center gap-1'>
                <Project />
                <div>{document.project.name} Project</div>
              </div>
              <div className='flex items-center gap-1'>
                <Star />
                <div>
                  {document.stars} {checkPlural(document.stars, "Star")}
                </div>
              </div>
              <div className='flex items-center gap-1.5'>
                <Logo className='size-[20px]' />
                <div>
                  {document.collaborators.length}{" "}
                  {checkPlural(document.collaborators.length, "Collaborator")}
                </div>
              </div>
            </div>
          </div>
        </XStack>
      </div>
    </XStack>
  );
};

export default DocumentTile;
