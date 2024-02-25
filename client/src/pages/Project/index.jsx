import React, { useEffect } from "react";
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
import shortName from "../../utils/shortName";
import XChip from "../../components/XChip";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import XLoading from "../../components/XLoading";
import { useGetDocumentByIdQuery } from "../../services/nodeApi";
import XButton from "@/components/XButton";

const Project = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const projects = useSelector((state) => state.project.project);
  const project = projects.find((project) => project._id === id);
  useEffect(() => {
    if (!project) navigate("*");
  }, []);
  if (!project) return null;

  const { isLoading } = useGetDocumentByIdQuery({ projectId: project._id });

  const documentMap = useSelector((state) => state.project.document);
  const documents = documentMap[id];
  return (
    <>
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
                <XTooltip data='Edit' placement='top'>
                  <IconButton>
                    <Settings />
                  </IconButton>
                </XTooltip>
              </div>
              <div className='flex flex-col gap-5 px-2 relative h-full'>
                {isLoading ? (
                  <XLoading absolute />
                ) : documents.length ? (
                  documents.map((document, index) => {
                    return <DocumentTile key={index} document={document} />;
                  })
                ) : (
                  <div>No documents yet</div>
                )}
              </div>
            </div>
          </div>

          <div className='flex flex-col flex-1 mr-4 mt-14 gap-4'>
            <XButton color='primary'>Create new Document</XButton>
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

            <XStack className='!bg-secondary_background/90 !drop-shadow-none h-fit p-5'>
              <div className='h-full w-full flex flex-col gap-8'>
                <div className='flex flex-col gap-2'>
                  <div className='text-lg font-bold text-primary_main'>Creator </div>
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
