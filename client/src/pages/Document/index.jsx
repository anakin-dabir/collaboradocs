import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import XNavbar from "../../components/Custom/XNavbar";
import XStack from "../../components/XStack";
import BackButton from "../../components/Custom/BackButton";
import XDivider from "../../components/Custom/XDivider";
import { Avatar, Button, IconButton } from "@mui/material";
import XTooltip from "../../components/XTooltip";
import XButton from "../../components/XButton";
import { ReactComponent as Settings } from "@/assets/custom/settings.svg";
import { ReactComponent as History } from "@/assets/custom/history.svg";
import { ReactComponent as Edit } from "@/assets/custom/edit.svg";
import { ReactComponent as Star } from "@/assets/custom/star.svg";
import { ReactComponent as Project } from "@/assets/custom/project.svg";
import shortName from "../../utils/shortName";
import getDate from "../../utils/getDate";
import XChip from "../../components/XChip";
import DocAboutSide from "../../components/Custom/DocAboutSide";

const Document = () => {
  const { id } = useParams();
  const naviagte = useNavigate();
  const documents = useSelector((state) => state.project.document);
  console.log(documents);
  const document = documents.find((doc) => doc._id === id);
  console.log(document);
  useEffect(() => {
    if (!document) naviagte("*");
  }, []);
  if (!document) return null;
  return (
    <>
      <XNavbar />
      <XStack className='h-full flex-1 flex flex-row !drop-shadow-none !bg-secondary_background/60 pr-1 pl-6 py-4'>
        <div className='overflow-y-auto relative h-full w-full flex gap-3'>
          <div className='h-full w-[75%]'>
            <XStack className='min-h-full w-full p-8 !bg-secondary_background/90 !drop-shadow-none flex flex-col gap-5'>
              <div className='flex flex-col gap-3.5'>
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
                    <XTooltip data='Settings' placement='top'>
                      <IconButton>
                        <Settings />
                      </IconButton>
                    </XTooltip>
                    <XTooltip data='Edit' placement='top'>
                      <IconButton>
                        <Edit />
                      </IconButton>
                    </XTooltip>
                  </div>
                </div>

                <XDivider />
              </div>
            </XStack>
          </div>
          <div className='flex flex-col flex-1 mr-4 gap-3'>
            <DocAboutSide document={document} />
            <XStack className='!bg-secondary_background/90 !drop-shadow-none h-fit p-5'>
              <div className='h-full w-full flex flex-col gap-4'>
                <div className='flex flex-col gap-2'>
                  <div className='flex items-center gap-2'>
                    <div className='text-lg font-bold text-primary_main'>Collaborators </div>
                    <XChip label={document.collaborators.length} className='!px-3 !py-1' />
                  </div>
                </div>

                <div className='flex items-center gap-2 flex-wrap'>
                  {document.collaborators.map((collaborator, index) => {
                    return (
                      <XTooltip key={index} placement='top' data={collaborator.name}>
                        <Avatar src={collaborator?.img}>{shortName(collaborator.name)}</Avatar>
                      </XTooltip>
                    );
                  })}
                </div>
              </div>
            </XStack>
          </div>
        </div>
      </XStack>
    </>
  );
};

export default Document;
