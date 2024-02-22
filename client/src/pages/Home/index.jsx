import React, { useState } from "react";
import Welcome from "./Welcome";
import XStack from "../../components/XStack";
import XNavbar from "../../components/XNavbar";
import XButton from "../../components/XButton";
import XTextfield from "../../components/XTextfield";
import { ReactComponent as Star } from "@/assets/star.svg";
import { Avatar, AvatarGroup } from "@mui/material";
import XAvatar from "../../components/XAvatar";
import dayjs from "dayjs";

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
              />
            </div>
          </XStack>

          <XStack className='h-full flex-1 flex flex-row !drop-shadow-none !bg-secondary_background/60 px-2 py-4'>
            <div className='overflow-y-auto relative h-full w-full flex-col p-4 px-10'>
              <div className='space-y-4 w-2/3'>
                <XStack disableBorder className='!bg-secondary_background/90 !drop-shadow-none'>
                  <div className='flex flex-col px-5 p-3 gap-2 h-full w-full'>
                    <div className='flex justify-between'>
                      <div className='flex items-center gap-3'>
                        <Avatar src='https://img.freepik.com/premium-photo/cartoon-game-avatar-logo-gaming-brand_902820-461.jpg'>
                          OG
                        </Avatar>
                        <div className='flex flex-col'>
                          <div className='text-sm'>
                            <span className='font-bold text-primary_dark'>Anakin Dabir</span> shared
                            a document
                          </div>
                          <div className='text-xs'>{dayjs(new Date()).fromNow()}</div>
                        </div>
                      </div>
                      <XButton color='error'>Star</XButton>
                    </div>
                    <XStack
                      // disableBorder
                      className='cursor-pointer !bg-transparent/20 !drop-shadow-none hover:!bg-secondary_light/10 transition-all'
                    >
                      <div className='h-full w-full p-4 flex flex-col gap-1'>
                        <div className='text-sm font-bold text-primary_dark'>
                          Warfare of artcraft documentary
                        </div>
                        <div className='text-xs truncate'>
                          A documentary on the things that happened in the past 1800's for the
                          witchcraft
                        </div>
                        <div className='flex items-center gap-4'>
                          <div className='flex items-center gap-1'>
                            <Star className='size-5 !stroke-primary_main fill-secondary_light' />
                            <div className='text-xs text-nowrap text-secondary_light'>21 Stars</div>
                          </div>
                          <div className='flex items-center gap-1'>
                            <Star className='size-5 !stroke-primary_main fill-secondary_light' />
                            <div className='text-xs text-nowrap text-secondary_light'>
                              32 Collabs
                            </div>
                          </div>
                        </div>
                      </div>
                    </XStack>
                  </div>
                </XStack>

                <XStack
                  disableBorder
                  className='h-[300px] w-1/4 top-0 right-8  !absolute !drop-shadow-none !bg-secondary_background/80'
                ></XStack>
                <XStack
                  disableBorder
                  className='h-[300px] w-1/4  right-8 top-[336px] !absolute !drop-shadow-none !bg-secondary_background/80'
                ></XStack>

                <XButton>Load More</XButton>
              </div>
            </div>
          </XStack>
        </div>
      </div>
    </>
  );
};

export default Home;
