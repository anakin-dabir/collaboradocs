import React from "react";
import XStack from "../../../components/XStack";
import checkPlural from "../../../utils/checkPlural";
import { ReactComponent as Star } from "@/assets/custom/star.svg";
import { ReactComponent as Logo } from "@/assets/custom/logo.svg";
import { ReactComponent as History } from "@/assets/custom/history.svg";
import { useNavigate } from "react-router-dom";

const DocumentTile = ({ document }) => {
  const navigate = useNavigate();
  return (
    <XStack
      className='cursor-pointer !bg-secondary_background/90 !drop-shadow-none hover:!bg-primary_main/10 transition-all'
      onClick={() => {
        navigate(`/doc/${document._id}`);
      }}
    >
      <div className='h-full w-full p-4 flex flex-col gap-2'>
        <div className='text-sm leading-3 font-bold text-primary_light'>{document.title}</div>
        <div className='text-xs  truncate'>{document.desc}</div>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-5 text-primary_main text-xs leading-3'>
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
            <div className='flex items-center gap-1'>
              <History />
              <div>
                {document.stars} {checkPlural(document.stars, "Commit")}
              </div>
            </div>
          </div>
          <div className='flex items-center gap-1 text-primary_main text-xs leading-3'>
            <div>
              <span className='font-medium'>Last Updated: </span>3 minutes ago
            </div>
          </div>
        </div>
      </div>
    </XStack>
  );
};

export default DocumentTile;
