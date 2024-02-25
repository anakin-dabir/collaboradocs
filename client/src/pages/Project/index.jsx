import React, { useEffect, useState } from "react";
import XNavbar from "../../components/Custom/XNavbar";
import XStack from "../../components/XStack";
import DocumentTile from "./components/DocumentTile";
import { Avatar, IconButton } from "@mui/material";
import { ReactComponent as Settings } from "@/assets/custom/settings.svg";
import XTooltip from "../../components/XTooltip";
import BackButton from "../../components/Custom/BackButton";
import getDate from "../../utils/getDate";
import { ReactComponent as Tick } from "@/assets/custom/tick.svg";
import { ReactComponent as Cross } from "@/assets/custom/cross.svg";
import { ReactComponent as Delete } from "@/assets/custom/delete.svg";
import shortName from "../../utils/shortName";
import XChip from "../../components/XChip";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import XLoading from "../../components/XLoading";
import { useDeleteProjectMutation, useGetDocumentByIdQuery } from "../../services/nodeApi";
import XButton from "@/components/XButton";
import XDivider from "../../components/Custom/XDivider";
import Dialog from "./components/Dialog";
import XDeleteAlert from "../../components/Alert/XDeleteAlert";

const Project = () => {
  const [isOpen, isOpenSet] = useState(false);
  const [isDeleteOpen, isDeleteOpenSet] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const projects = useSelector((state) => state.project.project);
  const user = useSelector((state) => state.user.user);
  const project = projects.find((project) => project._id === id);
  useEffect(() => {
    if (!project) navigate("*");
  }, []);
  if (!project) return null;
  const { isLoading } = useGetDocumentByIdQuery({ projectId: project._id });
  const [deleteProject, { isLoading: isDeleting }] = useDeleteProjectMutation();
  const documentMap = useSelector((state) => state.project.document);
  const documents = documentMap[id];

  const handleDeleteProject = async () => {
    try {
      const res = await deleteProject({ projectId: project._id });
      if (res) navigate("/");
    } catch (error) {}
  };
  return (
    <>
      <XDeleteAlert
        isOpen={isDeleteOpen}
        entity='Project'
        entityName={project.name}
        onClose={() => isDeleteOpenSet(false)}
        handleDelete={handleDeleteProject}
        isLoading={isDeleting}
        firstStepText='You sure you wanna delete this project !'
      />
      <Dialog isOpen={isOpen} isOpenSet={isOpenSet} project={project} user={user} />
      <XNavbar />
      <XStack className='h-full flex-1 flex flex-row !drop-shadow-none !bg-secondary_background/60 pr-1 pl-6 py-4'>
        <div className='overflow-y-auto h-full w-full flex gap-7 px-20'>
          <div className='h-full w-[70%] gap-4 flex flex-col'>
            <div className='flex flex-col gap-2 pt-3 h-full'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-1'>
                  <BackButton />
                  <div className='text-xl leading-3 font-bold text-primary_main'>
                    {project.name}
                  </div>
                </div>
                {user._id === project.creator._id && (
                  <div className='flex items-center gap-2'>
                    <XTooltip data='Delete' placement='top'>
                      <IconButton
                        onClick={() => isDeleteOpenSet(true)}
                        className='!drop-shadow-none'
                      >
                        <Delete className='fill-error_main' />
                      </IconButton>
                    </XTooltip>
                    <XTooltip data='Edit' placement='top'>
                      <IconButton onClick={() => isOpenSet(true)}>
                        <Settings />
                      </IconButton>
                    </XTooltip>
                  </div>
                )}
              </div>
              <XDivider />
              <div className='flex flex-col gap-5 mt-4 px-2 relative h-full'>
                {isLoading ? (
                  <XLoading absolute />
                ) : documents.length ? (
                  documents.map((document, index) => {
                    return <DocumentTile key={index} document={document} />;
                  })
                ) : user._id === project.creator._id ? (
                  <div>No documents yet</div>
                ) : (
                  <div>Ask the admin to add documents</div>
                )}
              </div>
            </div>
          </div>

          <div className='flex flex-col flex-1 mr-4 pt-3 gap-4'>
            {user._id === project.creator._id && (
              <XButton color='primary'>Create new Document</XButton>
            )}
            {/* <XStack className='!bg-secondary_background/90 !drop-shadow-none h-fit p-5'>
              <div className='h-full w-full flex flex-col gap-5'>
                <div className='flex flex-col gap-2'>
                  <div className='flex items-center gap-2'>
                    <div className='text-lg font-bold text-primary_main'>Requests</div>
                    <XChip label={10} className='!px-3 !py-1' />
                  </div>
                </div>
                <div className='flex flex-col gap-4'>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-3'>
                      <Avatar>GO</Avatar>
                      <div className='flex flex-col'>
                        <div className='text-sm font-bold text-primary_main'>ANakin</div>
                        <div className='text-xs'>Requested to join project</div>
                      </div>
                    </div>
                    <div className='flex items-center gap-1'>
                      <XTooltip data='Accept' placement='top'>
                        <IconButton>
                          <Tick />
                        </IconButton>
                      </XTooltip>
                      <XTooltip data='Reject' placement='top'>
                        <IconButton>
                          <Cross />
                        </IconButton>
                      </XTooltip>
                    </div>
                  </div>
                </div>
              </div>
            </XStack> */}

            <XStack className='!bg-secondary_background/90 mt-6 !drop-shadow-none h-fit p-5'>
              <div className='h-full w-full flex flex-col gap-8'>
                <div className='flex flex-col gap-2'>
                  <div className='text-lg font-bold text-primary_main'>Admin </div>
                  <div className='flex items-center gap-3'>
                    <Avatar src={project.creator?.img}>{shortName(project.creator.name)}</Avatar>
                    <div className='flex flex-col'>
                      <div className='text-sm font-bold text-primary_main'>
                        {project.creator.name}
                      </div>
                      <div className='text-xs'>
                        <span className='font-semibold'>Created: </span>
                        {getDate(project.createdAt)}
                      </div>
                    </div>
                  </div>
                </div>

                <div className='flex flex-col gap-2'>
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
                  </div>
                </div>
              </div>
            </XStack>
          </div>
        </div>
      </XStack>
    </>
  );
};

export default Project;
