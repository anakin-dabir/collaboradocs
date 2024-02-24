import React from "react";
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

const Project = () => {
  const document = {
    _id: "65da4f100ced3492b4345625",
    title: "Tales of Mainster",
    desc: "Documentary on the tales of mainster",
    creator: {
      _id: "65d4a5ea03bfa826c18d14e5",
      name: "talha",
      img: "https://img.freepik.com/premium-photo/cartoon-game-avatar-logo-gaming-brand_902820-469.jpg",
    },
    project: {
      _id: "65da4ed0d18d9dccf2b0ba6f",
      name: "History of wars",
    },
    stars: 0,
    collaborators: [
      {
        _id: "65d4a5ea03bfa826c18d14e5",
        name: "talha",
        img: "https://img.freepik.com/premium-photo/cartoon-game-avatar-logo-gaming-brand_902820-469.jpg",
      },
    ],
    visibility: "Public",
    createdAt: "2024-02-24T20:18:24.990Z",
    updatedAt: "2024-02-24T20:18:24.990Z",
  };
  return (
    <>
      <XNavbar />
      <XStack className='h-full flex-1 flex flex-row !drop-shadow-none !bg-secondary_background/60 pr-1 pl-6 py-4'>
        <div className='overflow-y-auto relative h-full w-full flex gap-7 px-20'>
          <div className='h-full w-[70%] gap-4 flex flex-col'>
            <div className='flex flex-col gap-2 pt-2'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-1'>
                  <BackButton />
                  <div className='text-xl leading-3 font-bold text-primary_main'>
                    History of wars
                  </div>
                </div>
                <XTooltip data='Edit' placement='top'>
                  <IconButton>
                    <Settings />
                  </IconButton>
                </XTooltip>
              </div>
              <div className='flex flex-col gap-5'>
                <DocumentTile document={document} />
                <DocumentTile document={document} />
                <DocumentTile document={document} />
                <DocumentTile document={document} />
                <DocumentTile document={document} />
                <DocumentTile document={document} />
                <DocumentTile document={document} />
                <DocumentTile document={document} />
              </div>
            </div>
          </div>

          <div className='flex flex-col flex-1 mr-4 mt-14 gap-4'>
            <XStack className='!bg-secondary_background/90 !drop-shadow-none h-fit p-5'>
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
            </XStack>
            <XStack className='!bg-secondary_background/90 !drop-shadow-none h-fit p-5'>
              <div className='h-full w-full flex flex-col gap-8'>
                <div className='flex flex-col gap-2'>
                  <div className='text-lg font-bold text-primary_main'>Creator </div>
                  <div className='flex items-center gap-3'>
                    <Avatar>GO</Avatar>
                    <div className='flex flex-col'>
                      <div className='text-sm font-bold text-primary_main'>ANakin</div>
                      <div className='text-xs'>
                        <span className='font-semibold'>Created: </span>
                        {getDate(document.createdAt)}
                      </div>
                    </div>
                  </div>
                </div>

                <div className='flex flex-col gap-2'>
                  <div className='flex flex-col gap-2'>
                    <div className='flex items-center gap-2'>
                      <div className='text-lg font-bold text-primary_main'>Members </div>
                      <XChip label={10} className='!px-3 !py-1' />
                    </div>
                  </div>

                  <div className='flex items-center gap-2 flex-wrap'>
                    <XTooltip placement='top' data='Talha'>
                      <Avatar>{shortName("Talha")}</Avatar>
                    </XTooltip>
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
