import React, { useState } from "react";
import Welcome from "./Welcome";
import XStack from "../../components/XStack";
import XNavbar from "../../components/XNavbar";
import { Avatar, AvatarGroup } from "@mui/material";

const Home = () => {
  return (
    <>
      <Welcome />
      <div className='h-screen w-full overflow-hidden'>
        <XNavbar />
        <div className='fixed flex gap-2 top-[5.3rem] bottom-2 left-8 right-8'>
          {/* <XStack className='h-full w-[300px] !drop-shadow-none !bg-secondary_background/80'></XStack> */}
          <XStack className='h-full flex-1 !drop-shadow-none !bg-secondary_background/60 px-2 py-10'>
            <div className='overflow-y-auto h-full w-full flex-col space-y-4 gap-4 p-4 flex-wrap'>
              <XStack className='h-24 flex-1 shadow-2xl'></XStack>
              <XStack className='h-24 flex-1'></XStack>
              <XStack className='h-24 flex-1'></XStack>
              <XStack className='h-24 flex-1 '></XStack>
              <XStack className='h-24 flex-1'></XStack>
              <XStack className='h-24 flex-1'>
                <AvatarGroup
                  max={4}
                  renderSurplus={(surplus) => `+${surplus}`}
                  slotProps={{
                    additionalAvatar: {
                      className: "shadow-2xl",
                      sx: {
                        bgcolor: "primary.main",
                        zIndex: 100,
                        marginLeft: "-18px !important",
                        clipPath: `
      polygon(
        10px 0,
        100% 0,
        100% calc(100% - 10px),
        calc(100% - 10px) 100%,
        0 100%,
        0 10px
      )
    `,
                      },
                    },
                  }}
                  sx={{
                    "& > *": {
                      border: "0px !important",
                    },
                    "& > *:not(:first-of-type)": {
                      marginLeft: "-18px",
                    },
                  }}
                >
                  <Avatar
                    variant='rounded'
                    alt='Remy Sharp'
                    className='shadow-2xl'
                    sx={{ zIndex: 1 }}
                  >
                    AD
                  </Avatar>
                  <Avatar
                    variant='rounded'
                    alt='Remy Sharp'
                    className='shadow-2xl'
                    sx={{ zIndex: 2 }}
                  >
                    AD
                  </Avatar>
                  <Avatar
                    variant='rounded'
                    alt='Remy Sharp'
                    className='shadow-2xl'
                    sx={{ zIndex: 3 }}
                    src='https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg'
                  >
                    AD
                  </Avatar>
                  <Avatar
                    variant='rounded'
                    alt='Remy Sharp'
                    className='shadow-2xl'
                    sx={{ zIndex: 14 }}
                  >
                    AD
                  </Avatar>
                  <Avatar
                    variant='rounded'
                    alt='Remy Sharp'
                    className='shadow-2xl'
                    sx={{ zIndex: 5 }}
                  >
                    AD
                  </Avatar>
                </AvatarGroup>
              </XStack>
              {/* <XStack className='h-52 w-72'></XStack>
              <XStack className='h-52 w-72'></XStack>
              <XStack className='h-52 w-72'></XStack>
              <XStack className='h-52 w-72'></XStack>
              <XStack className='h-52 w-72'></XStack>
              <XStack className='h-52 w-72'></XStack>
              <XStack className='h-52 w-72'></XStack>
              <XStack className='h-52 w-72'></XStack> */}
            </div>
          </XStack>
        </div>
      </div>
    </>
  );
};

export default Home;
