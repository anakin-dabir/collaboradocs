import React from "react";
import XStack from "../../components/XStack";
import XNavbar from "../../components/Custom/XNavbar";
import XButton from "../../components/XButton";
import XDivider from "../../components/Custom/XDivider";
import { ReactComponent as Settings } from "@/assets/custom/settings.svg";
import { ReactComponent as History } from "@/assets/custom/history.svg";
import { Avatar, Button, IconButton } from "@mui/material";
import getDate from "../../utils/getDate";
import { ReactComponent as Star } from "@/assets/custom/star.svg";
import { ReactComponent as Project } from "@/assets/custom/project.svg";
import XTooltip from "../../components/XTooltip";
import XChip from "../../components/XChip";

const Document = () => {
  return (
    <>
      <XNavbar />
      <XStack className='h-full flex-1 flex flex-row !drop-shadow-none !bg-secondary_background/60 pr-1 pl-6 py-4'>
        <div className='overflow-y-auto relative h-full w-full flex gap-3'>
          <div className='h-full w-[75%]'>
            <XStack className='min-h-full w-full p-8 !bg-secondary_background/90 !drop-shadow-none flex flex-col gap-5'>
              <div className='flex items-center gap-2 justify-between'>
                <div className='flex gap-4'>
                  <div className='text-xl font-bold text-primary_main'>
                    Warfare of artcraft documentary
                  </div>
                  <XButton disabled className='px-3 py-[0.1rem]'>
                    Public
                  </XButton>
                </div>
                <div className='flex gap-2 items-center'>
                  <Button className='gap-2'>
                    <div className='capitalize'>125 Changes</div>
                    <History />
                  </Button>
                  <IconButton>
                    <Settings />
                  </IconButton>
                </div>
              </div>
              <XDivider />
              <div className='text-2xl h-20'>Anakin mariko</div>
            </XStack>
          </div>
          <div className='flex flex-col flex-1 mr-4 gap-3'>
            <XStack className='!bg-secondary_background/90 !drop-shadow-none h-fit p-5'>
              <div className='h-full w-full flex flex-col gap-4'>
                <div className='flex flex-col gap-2'>
                  <div className='text-lg font-bold text-primary_main'>About </div>
                  <div className='text-sm'>
                    A documentary on the things that happened in the past 1800's for the witchcraft
                  </div>
                </div>

                <div className='flex items-center gap-2'>
                  <Avatar src='https://img.freepik.com/premium-photo/cartoon-game-avatar-logo-gaming-brand_902820-469.jpg'>
                    GO
                  </Avatar>
                  <div className='flex flex-col'>
                    <div className='text-sm font-bold text-primary_main'>Anakin Dabir</div>
                    <div className='text-xs'>{getDate("11-12-2001")}</div>
                  </div>
                </div>

                <div className='flex flex-col gap-2'>
                  <div className='flex items-center gap-2'>
                    <Project />
                    <div className='text-xs leading-3'>Anakin Project</div>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Star />
                    <div className='text-xs leading-3'>52 Stars</div>
                  </div>
                </div>
              </div>
            </XStack>
            <XStack className='!bg-secondary_background/90 !drop-shadow-none h-fit p-5'>
              <div className='h-full w-full flex flex-col gap-4'>
                <div className='flex flex-col gap-2'>
                  <div className='flex items-center gap-2'>
                    <div className='text-lg font-bold text-primary_main'>Contributors </div>
                    <XChip label='20' className='!px-3 !py-1' />
                  </div>
                </div>

                <div className='flex items-center gap-2 flex-wrap'>
                  <XTooltip placement='top' data='Anakin Dabir'>
                    <Avatar src='https://img.freepik.com/premium-photo/cartoon-game-avatar-logo-gaming-brand_902820-469.jpg'>
                      GO
                    </Avatar>
                  </XTooltip>
                  <XTooltip placement='top' data='Anakin Dabir'>
                    <Avatar src='https://img.freepik.com/premium-photo/cartoon-game-avatar-logo-gaming-brand_902820-469.jpg'>
                      GO
                    </Avatar>
                  </XTooltip>
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
