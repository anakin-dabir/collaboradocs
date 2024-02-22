import React, { useState } from "react";
import Welcome from "./Welcome";
import XStack from "../../components/XStack";
import XNavbar from "../../components/XNavbar";
import XButton from "../../components/XButton";
import XTextfield from "../../components/XTextfield";
import { ReactComponent as Search } from "@/assets/searchIcon.svg";
import { Avatar, AvatarGroup } from "@mui/material";

const Home = () => {
  return (
    <>
      <Welcome />
      <div className='h-screen w-full overflow-hidden'>
        <XNavbar />
        <div className='fixed flex gap-2 top-[5.3rem] bottom-2 left-8 right-8'>
          <XStack className='h-full w-[400px] !drop-shadow-none !bg-secondary_background/60 py-10 px-4'>
            <div className='flex h-full w-full flex-col gap-4'>
              <div className='flex justify-between items-center'>
                <div className='text-lg'>Projects</div>
                <XButton color='success'>New</XButton>
              </div>
              <XTextfield
                className='items-center !text-sm text-primary_main placeholder:!text-sm'
                size='small'
                placeholder='Search my projects'
                style={{ color: "green !important" }}
                inputProps={{
                  startAdornment: (
                    <div className='box-center'>
                      <Search />
                    </div>
                  ),
                }}
              />
            </div>
          </XStack>
          <XStack className='h-full flex-1 flex flex-row !drop-shadow-none !bg-secondary_background/60 px-2 py-10'>
            <div className='overflow-y-auto  h-full w-full flex-col space-y-4 gap-4 p-4 flex-wrap'>
              <div className='container space-y-4 max-w-screen-lg'>
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
              <XStack className='right-10 flex-1 top-4 !fixed w-[300px] !drop-shadow-none !bg-secondary_background/80'></XStack>
            </div>
          </XStack>
        </div>
      </div>
    </>
  );
};

export default Home;
