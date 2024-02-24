import React from "react";
import XStack from "../XStack";
import XButton from "../XButton";
import XDivider from "./XDivider";
import XTextfield from "../XTextfield";
import { ReactComponent as Search } from "@/assets/custom/search.svg";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import shortName from "../../utils/shortName";
import { useNavigate } from "react-router-dom";

const XSidebar = () => {
  const projects = useSelector((state) => state.project.project);
  const navigate = useNavigate();
  return (
    <XStack className='h-full w-[400px] !drop-shadow-none !bg-secondary_background/60 py-7 px-4'>
      <div className='flex h-full w-full flex-col gap-4 justify-between overflow-auto'>
        <div className='flex flex-col gap-3 h-full'>
          <div className='flex flex-col gap-4'>
            <div className='flex justify-between items-center'>
              <div className='text-lg font-bold leading-3'>My Projects</div>
              <XButton color='primary' className='!bg-primary_main/20 text-base py-0.5'>
                New
              </XButton>
            </div>
            <XDivider />
            {projects.length ? (
              <XTextfield
                size='small'
                sx={{
                  "& .MuiInputBase-root": {
                    fontSize: "0.875rem",
                  },
                }}
                placeholder='Search projects'
                inputProps={{ startAdornment: <Search /> }}
              />
            ) : null}

            <div className='flex flex-col gap-2'></div>
          </div>
          {projects.length ? (
            <div className='flex flex-col gap-4 px-1 max-h-full overflow-y-auto'>
              {projects.map((project, index) => {
                return (
                  <div
                    key={index}
                    className='flex gap-3 items-center group cursor-pointer'
                    onClick={() => navigate(`/project/${project._id}`)}
                  >
                    <Avatar src={project.creator?.img} className='size-7 text-xs'>
                      {shortName(project.creator.name)}
                    </Avatar>
                    <div className='text-xs font-bold break-all group-hover:underline group-hover:text-primary_main transition-all'>
                      <span className='text-sm font-normal'>{project.creator.name}</span> /{" "}
                      {project.name}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className='text-sm text-center'>No Projects yet</div>
          )}
        </div>
      </div>
    </XStack>
  );
};

export default XSidebar;
