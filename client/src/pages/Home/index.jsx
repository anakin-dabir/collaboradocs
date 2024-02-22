import React, { useState } from "react";
import Welcome from "./Welcome";
import XStack from "../../components/XStack";
import XNavbar from "../../components/XNavbar";
import XButton from "../../components/XButton";
import XTextfield from "../../components/XTextfield";
import { ReactComponent as Search } from "@/assets/searchIcon.svg";
import { Avatar, AvatarGroup } from "@mui/material";
import XAvatar from "../../components/XAvatar";

const Home = () => {
  return (
    <>
      <Welcome />
      <div className='h-screen w-full overflow-hidden'>
        <XNavbar />
        <div className='fixed flex gap-2 top-[5.3rem] bottom-2 left-8 right-8'>
          {/* <XStack className='h-full w-[400px] !drop-shadow-none !bg-secondary_background/60 py-10 px-4'>
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
          </XStack> */}
          <XStack className='h-full flex-1 flex flex-row !drop-shadow-none !bg-secondary_background/60 px-2 py-4'>
            <div className='overflow-y-auto relative h-full w-full flex-col p-4'>
              <div className='space-y-4 w-1/2'>
                <XStack className='h-24  !bg-secondary_background/90 !drop-shadow-none hover:!bg-secondary_main/20 !transition-all cursor-pointer'></XStack>

                <XButton fullWidth color='error' disabled className='h-24'>
                  THis is my house so fuck off from here
                </XButton>
                <XButton fullWidth color='error' disabled className='h-24'>
                  THis is my house so fuck off from here
                </XButton>
                <XButton fullWidth color='error' disabled className='h-24'></XButton>
                <XButton fullWidth color='error' disabled className='h-24'></XButton>
                <XButton fullWidth color='error' className='h-24'></XButton>
                <XButton fullWidth color='error' className='h-24'></XButton>
                <XButton fullWidth color='error' className='h-24'>
                  THis is my house so fuck off from here
                  <Avatar>OG</Avatar>
                  <Avatar>OG</Avatar>
                  <Avatar>OG</Avatar>
                  <Avatar>OG</Avatar>
                </XButton>
                <XButton fullWidth color='success' className='h-24'>
                  THis is my house so fuck off from here
                  <Avatar>OG</Avatar>
                  <Avatar>OG</Avatar>
                  <Avatar>OG</Avatar>
                  <Avatar>OG</Avatar>
                </XButton>
                <XButton fullWidth color='success' className='h-24'></XButton>
                <XButton fullWidth color='success' className='h-24'></XButton>
                <XButton fullWidth color='primary' className='h-24'></XButton>
                <XButton fullWidth color='primary' className='h-24'></XButton>
                <XButton fullWidth color='primary' className='h-24'>
                  THis is my house so fuck off from here
                </XButton>
                <XButton fullWidth color='primary' className='h-24'></XButton>
                <XButton fullWidth color='secondary' className='h-24'></XButton>
                <XButton fullWidth color='secondary' className='h-24'></XButton>
                <XButton fullWidth color='secondary' className='h-24'></XButton>
                <XButton fullWidth color='secondary' className='h-24'>
                  THis is my house so fuck off from here
                </XButton>
                <XButton fullWidth className='h-24'></XButton>
                <XButton fullWidth className='h-24'></XButton>
                <XButton fullWidth className='h-24'></XButton>
                <XButton fullWidth className='h-24'>
                  THis is my house so fuck off from here
                  <Avatar>OG</Avatar>
                  <Avatar>OG</Avatar>
                  <Avatar>OG</Avatar>
                  <Avatar>OG</Avatar>
                </XButton>
                <XButton fullWidth className='h-24'></XButton>
                <XButton>Load More</XButton>
              </div>
              {/* <XStack className='h-[300px] w-1/2 top-0 !absolute !drop-shadow-none !bg-secondary_background/80'></XStack> */}
            </div>
          </XStack>
        </div>
      </div>
    </>
  );
};

export default Home;
