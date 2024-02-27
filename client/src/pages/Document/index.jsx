import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import XNavbar from "../../components/Custom/XNavbar";
import XStack from "../../components/XStack";
import BackButton from "../../components/Custom/BackButton";
import XDivider from "../../components/Custom/XDivider";
import { Button, IconButton } from "@mui/material";
import XTooltip from "../../components/XTooltip";
import XButton from "../../components/XButton";
import { ReactComponent as Settings } from "@/assets/custom/settings.svg";
import { ReactComponent as History } from "@/assets/custom/history.svg";
import { ReactComponent as Delete } from "@/assets/custom/delete.svg";
import DocAboutSide from "../../components/Custom/DocAboutSide";
import { useDeleteDocumentMutation, useGetDocByIdQuery } from "../../services/nodeApi";
import XLoading from "../../components/XLoading";
import NewDocDialog from "../../components/Custom/NewDocDialog";
import XDeleteAlert from "../../components/Alert/XDeleteAlert";
import CollaboratorsSide from "./components/CollaboratorsSide";
import ActiveMembers from "./components/ActiveMembers";
import XEditor from "../../components/Custom/XEditor";

const Document = () => {
  const { id } = useParams();
  const naviagte = useNavigate();
  const user = useSelector((state) => state.user.user);
  const documents = useSelector((state) => state.project.document);
  const presentDocument = documents.find((doc) => doc._id === id);
  useEffect(() => {
    if (!presentDocument) naviagte("*");
  }, []);
  if (!presentDocument) return null;

  const { isLoading, refetch } = useGetDocByIdQuery({ docId: id }, { skip: !presentDocument });
  useEffect(() => {
    refetch();
  }, [id]);

  const document = useSelector((state) => state.doc.document);
  const [isOpen, isOpenSet] = useState(false);
  const [isDeleteOpen, isDeleteOpenSet] = useState(false);
  const [deleteDocument, { isLoading: isDeleteLoading }] = useDeleteDocumentMutation();
  async function handleDeleteDoc() {
    try {
      const res = await deleteDocument({ docId: document._id });
      if (res) naviagte(-1);
    } catch (error) {}
  }
  return (
    <>
      <XNavbar />
      <NewDocDialog
        isOpen={isOpen}
        isOpenSet={isOpenSet}
        edit
        document={document}
        refetch={refetch}
      />
      <XDeleteAlert
        isOpen={isDeleteOpen}
        entity='Document'
        entityName={document.title}
        onClose={() => isDeleteOpenSet(false)}
        handleDelete={handleDeleteDoc}
        isLoading={isDeleteLoading}
        firstStepText='You sure you wanna delete this Document !'
      />
      <XStack className='h-full flex-1 flex flex-row relative !drop-shadow-none !bg-secondary_background/60 pr-1 pl-6 py-4'>
        {isLoading ? (
          <XLoading absolute />
        ) : (
          <div className='overflow-y-auto relative h-full w-full flex gap-3'>
            <div className='h-full w-[75%]'>
              <XStack className='min-h-full w-full p-8 !bg-secondary_background/90 !drop-shadow-none flex flex-col gap-5'>
                <div className='flex flex-col gap-3.5 h-full w-full'>
                  <div className='flex items-center gap-2 justify-between'>
                    <div className='flex gap-4 items-center'>
                      <div className='flex items-center gap-1'>
                        <BackButton path={-1} />
                        <div className='text-xl font-bold text-primary_main'>{document.title}</div>
                      </div>
                      <XButton disabled className='px-3 py-[0.1rem]'>
                        {document.visibility}
                      </XButton>
                    </div>

                    <div className='flex gap-2'>
                      <Button className='gap-2'>
                        <div className='capitalize'>125 Changes</div>
                        <History />
                      </Button>
                      {user._id === document.creator._id && (
                        <>
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
                        </>
                      )}
                    </div>
                  </div>

                  <XDivider />
                  <div className='w-full min-h-96 relative overflow-hidden px-4'>
                    <XEditor content={document.content} />
                  </div>
                </div>
              </XStack>
            </div>
            <div className='flex flex-col flex-1 mr-4 gap-3'>
              <DocAboutSide document={document} />
              <CollaboratorsSide document={document} />
              <ActiveMembers document={document} />
            </div>
          </div>
        )}
      </XStack>
    </>
  );
};

export default Document;
