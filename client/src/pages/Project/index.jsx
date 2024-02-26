import React, { useEffect, useState } from "react";
import XNavbar from "../../components/Custom/XNavbar";
import XStack from "../../components/XStack";
import DocumentTile from "./components/DocumentTile";
import { IconButton } from "@mui/material";
import { ReactComponent as Settings } from "@/assets/custom/settings.svg";
import XTooltip from "../../components/XTooltip";
import BackButton from "../../components/Custom/BackButton";
import { ReactComponent as Delete } from "@/assets/custom/delete.svg";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import XLoading from "../../components/XLoading";
import { useDeleteProjectMutation, useGetDocumentByIdQuery } from "../../services/nodeApi";
import XButton from "@/components/XButton";
import XDivider from "../../components/Custom/XDivider";
import Dialog from "./components/Dialog";
import XDeleteAlert from "../../components/Alert/XDeleteAlert";
import UsersSide from "./components/UsersSide";
import RequestSide from "./components/RequestSide";
import NewDocDialog from "../../components/Custom/NewDocDialog";

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
  const { isLoading, refetch } = useGetDocumentByIdQuery({ projectId: project._id });
  useEffect(() => {
    refetch();
  }, [id]);
  const [deleteProject, { isLoading: isDeleting }] = useDeleteProjectMutation();
  const documents = useSelector((state) => state.project.document);

  const handleDeleteProject = async () => {
    try {
      const res = await deleteProject({ projectId: project._id });
      if (res) navigate("/");
    } catch (error) {}
  };
  const [isCreateDoc, isCreateDocSet] = useState(false);

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
      <NewDocDialog isOpen={isCreateDoc} isOpenSet={isCreateDocSet} id={id} refetch={refetch} />
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
              <XButton color='primary' onClick={() => isCreateDocSet(true)}>
                Create new Document
              </XButton>
            )}

            <RequestSide id={id} />

            <UsersSide project={project} user={user} />
          </div>
        </div>
      </XStack>
    </>
  );
};

export default Project;
