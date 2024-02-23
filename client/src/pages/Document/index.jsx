import React from "react";
import XStack from "../../components/XStack";
import XNavbar from "../../components/Custom/XNavbar";
import { Avatar } from "@mui/material";
import XChip from "../../components/XChip";
import XButton from "../../components/XButton";

const Document = () => {
  return (
    <>
      <XNavbar />
      <XStack className='h-full flex-1 flex flex-row !drop-shadow-none !bg-secondary_background/60 px-5 py-4'>
        <div className='overflow-y-auto relative h-full w-full'>
          <div className='container max-w-screen-xl h-full w-full'>
            <XStack
              disableBorder
              className='min-h-full w-full p-8 !drop-shadow-none !bg-transparent/20 flex flex-col gap-5'
            >
              <div className='flex items-center gap-2'>
                {/* <Avatar src='https://img.freepik.com/premium-photo/cartoon-game-avatar-logo-gaming-brand_902820-469.jpg'>
                  G8
                </Avatar> */}
                <div className='flex gap-2'>
                  <div className='text-xl font-bold text-primary_main'>
                    {/* <span className='text-primary_light font-normal text-lg'>Anakin Dabir/</span>{" "} */}
                    Warfare of artcraft documentary
                  </div>
                  {/* <XChip className='!px-3' label='Private' /> */}
                  <XButton disabled className='px-3 py-[0.1rem]'>
                    Private
                  </XButton>
                </div>
              </div>
              <hr className='border-t border-t-primary_main' />
              <div className='text-2xl h-20'>Anakin mariko</div>
              <div className='text-2xl h-20'>Anakin mariko</div>
              <div className='text-2xl h-20'>Anakin mariko</div>
              <div className='text-2xl h-20'>Anakin mariko</div>
              <div className='text-2xl h-20'>Anakin mariko</div>
              <div className='text-2xl h-20'>Anakin mariko</div>
              <div className='text-2xl h-20'>Anakin mariko</div>
              <div className='text-2xl h-20'>Anakin mariko</div>
            </XStack>
          </div>
        </div>
        <XStack className='!fixed right-10 !bg-secondary_background/60 !drop-shadow-none'>
          <div className='flex flex-col items-center p-4 h-96 w-96'></div>
        </XStack>
      </XStack>
    </>
  );
};

export default Document;
