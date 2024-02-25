import React, { useCallback, useEffect, useMemo, useState, useTransition } from "react";
import XStack from "../XStack";
import XButton from "../XButton";
import XDivider from "./XDivider";
import XTextfield from "../XTextfield";
import { ReactComponent as Search } from "@/assets/custom/search.svg";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import shortName from "../../utils/shortName";
import { useNavigate } from "react-router-dom";
import XLoading from "../XLoading";
import Dialog from "../../pages/Home/components/Dialog";

const XSidebar = () => {
  const projects = useSelector((state) => state.project.project);
  const [isPending, startTransition] = useTransition();
  const [isOpen, isOpenSet] = useState(false);
  const [query, querySet] = useState("");

  const handleSearch = (e) => {
    startTransition(() => {
      querySet(e.target.value);
    });
  };
  const filteredProjects = useMemo(() => {
    return projects.filter((project) =>
      project.name.toLowerCase().includes(query.toLowerCase().trim())
    );
  }, [projects, query]);

  const navigate = useNavigate();
  return (
    <>
      <Dialog isOpen={isOpen} isOpenSet={isOpenSet} />
      <XStack className='h-full w-[400px] !drop-shadow-none !bg-secondary_background/60 py-7 px-4'>
        <div className='flex h-full w-full flex-col gap-4 justify-between overflow-auto'>
          <div className='flex flex-col gap-3 h-full'>
            <div className='flex flex-col gap-4'>
              <div className='flex justify-between items-center'>
                <div className='text-lg font-bold leading-3'>My Projects</div>
                <XButton
                  color='primary'
                  className='!bg-primary_main/20 text-base py-0.5'
                  onClick={() => isOpenSet(true)}
                >
                  New
                </XButton>
              </div>
              <XDivider />
              {projects.length ? (
                <XTextfield
                  size='small'
                  value={query}
                  sx={{
                    "& .MuiInputBase-root": {
                      fontSize: "0.875rem",
                    },
                  }}
                  placeholder='Search projects'
                  inputProps={{ startAdornment: <Search /> }}
                  onChange={handleSearch}
                />
              ) : null}

              <div className='flex flex-col gap-2'></div>
            </div>
            {projects.length ? (
              <div className='flex flex-col gap-4 px-1 max-h-full overflow-y-auto relative'>
                {isPending ? (
                  <XLoading />
                ) : filteredProjects.length ? (
                  filteredProjects.map((project, index) => {
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
                  })
                ) : (
                  <div>Not Found</div>
                )}
              </div>
            ) : (
              <div className='text-sm text-center'>No Projects yet</div>
            )}
          </div>
        </div>
      </XStack>
    </>
  );
};

export default XSidebar;
