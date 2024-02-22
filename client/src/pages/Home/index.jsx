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
          {/* <XStack className='h-full w-[400px] !drop-shadow-none !bg-secondary_background/60 py-10 px-4'>
            <div className='flex h-full w-full flex-col gap-4'>
              <div className='flex justify-between items-center'>
                <div className='text-lg font-bold'>My Projects</div>
                <XButton color='primary' className='!bg-primary_main/20'>
                  New
                </XButton>
              </div>
              <hr className='border-t border-t-primary_main' />
              <XButton color='primary' className='!bg-primary_main/20' fullWidth>
                View projects
              </XButton>
            </div>
          </XStack> */}

          <XStack
            disableBorder
            className='h-full flex-1 flex flex-row !drop-shadow-none !bg-secondary_background/60 px-2 py-4'
          >
            <div className='overflow-y-auto relative h-full w-full flex-col p-4 px-10'>
              <div className='container mx-auto max-w-screen-lg'>
                <div className='space-y-4 w-full'>
                  <XStack disableBorder className='!bg-secondary_background/90 !drop-shadow-none'>
                    <div className='flex flex-col px-5 p-3 gap-2 h-full w-full'>
                      <div className='flex justify-between'>
                        <div className='flex items-center gap-3'>
                          <Avatar src='https://img.freepik.com/premium-photo/cartoon-game-avatar-logo-gaming-brand_902820-461.jpg'>
                            OG
                          </Avatar>
                          <div className='flex flex-col'>
                            <div className='text-sm'>
                              <span className='font-bold text-primary_main'>Anakin Dabir</span>{" "}
                              shared a document
                            </div>
                            <div className='text-xs'>{dayjs(new Date()).fromNow()}</div>
                          </div>
                        </div>
                        {/* <XButton color='primary' className='!bg-primary_main/20'>
                          Star
                        </XButton> */}
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
                              <Star className='size-5  fill-primary_main' />
                              <div className='text-xs text-nowrap text-primary_main'>21 Stars</div>
                            </div>
                            <div className='flex items-center gap-1'>
                              <Star className='size-5  fill-primary_main' />
                              <div className='text-xs text-nowrap text-primary_main'>
                                32 Collabs
                              </div>
                            </div>
                          </div>
                        </div>
                      </XStack>
                    </div>
                  </XStack>
                  <XStack disableBorder className='!bg-secondary_background/90 !drop-shadow-none'>
                    <div className='flex flex-col px-5 p-3 gap-2 h-full w-full'>
                      <div className='flex justify-between'>
                        <div className='flex items-center gap-3'>
                          <Avatar src='https://img.freepik.com/premium-photo/cartoon-game-avatar-logo-gaming-brand_902820-461.jpg'>
                            OG
                          </Avatar>
                          <div className='flex flex-col'>
                            <div className='text-sm'>
                              <span className='font-bold text-primary_main'>Anakin Dabir</span>{" "}
                              shared a document
                            </div>
                            <div className='text-xs'>{dayjs(new Date()).fromNow()}</div>
                          </div>
                        </div>
                        {/* <XButton color='primary' className='!bg-primary_main/20'>
                          Star
                        </XButton> */}
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
                              <Star className='size-5  fill-primary_main' />
                              <div className='text-xs text-nowrap text-primary_main'>21 Stars</div>
                            </div>
                            <div className='flex items-center gap-1'>
                              <Star className='size-5  fill-primary_main' />
                              <div className='text-xs text-nowrap text-primary_main'>
                                32 Collabs
                              </div>
                            </div>
                          </div>
                        </div>
                      </XStack>
                    </div>
                  </XStack>
                  <XStack disableBorder className='!bg-secondary_background/90 !drop-shadow-none'>
                    <div className='flex flex-col px-5 p-3 gap-2 h-full w-full'>
                      <div className='flex justify-between'>
                        <div className='flex items-center gap-3'>
                          <Avatar src='https://img.freepik.com/premium-photo/cartoon-game-avatar-logo-gaming-brand_902820-461.jpg'>
                            OG
                          </Avatar>
                          <div className='flex flex-col'>
                            <div className='text-sm'>
                              <span className='font-bold text-primary_main'>Anakin Dabir</span>{" "}
                              shared a document
                            </div>
                            <div className='text-xs'>{dayjs(new Date()).fromNow()}</div>
                          </div>
                        </div>
                        {/* <XButton color='primary' className='!bg-primary_main/20'>
                          Star
                        </XButton> */}
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
                              <Star className='size-5  fill-primary_main' />
                              <div className='text-xs text-nowrap text-primary_main'>21 Stars</div>
                            </div>
                            <div className='flex items-center gap-1'>
                              <Star className='size-5  fill-primary_main' />
                              <div className='text-xs text-nowrap text-primary_main'>
                                32 Collabs
                              </div>
                            </div>
                          </div>
                        </div>
                      </XStack>
                    </div>
                  </XStack>
                  <XStack disableBorder className='!bg-secondary_background/90 !drop-shadow-none'>
                    <div className='flex flex-col px-5 p-3 gap-2 h-full w-full'>
                      <div className='flex justify-between'>
                        <div className='flex items-center gap-3'>
                          <Avatar src='https://img.freepik.com/premium-photo/cartoon-game-avatar-logo-gaming-brand_902820-461.jpg'>
                            OG
                          </Avatar>
                          <div className='flex flex-col'>
                            <div className='text-sm'>
                              <span className='font-bold text-primary_main'>Anakin Dabir</span>{" "}
                              shared a document
                            </div>
                            <div className='text-xs'>{dayjs(new Date()).fromNow()}</div>
                          </div>
                        </div>
                        {/* <XButton color='primary' className='!bg-primary_main/20'>
                          Star
                        </XButton> */}
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
                              <Star className='size-5  fill-primary_main' />
                              <div className='text-xs text-nowrap text-primary_main'>21 Stars</div>
                            </div>
                            <div className='flex items-center gap-1'>
                              <Star className='size-5  fill-primary_main' />
                              <div className='text-xs text-nowrap text-primary_main'>
                                32 Collabs
                              </div>
                            </div>
                          </div>
                        </div>
                      </XStack>
                    </div>
                  </XStack>
                  <XStack disableBorder className='!bg-secondary_background/90 !drop-shadow-none'>
                    <div className='flex flex-col px-5 p-3 gap-2 h-full w-full'>
                      <div className='flex justify-between'>
                        <div className='flex items-center gap-3'>
                          <Avatar src='https://img.freepik.com/premium-photo/cartoon-game-avatar-logo-gaming-brand_902820-461.jpg'>
                            OG
                          </Avatar>
                          <div className='flex flex-col'>
                            <div className='text-sm'>
                              <span className='font-bold text-primary_main'>Anakin Dabir</span>{" "}
                              shared a document
                            </div>
                            <div className='text-xs'>{dayjs(new Date()).fromNow()}</div>
                          </div>
                        </div>
                        {/* <XButton color='primary' className='!bg-primary_main/20'>
                          Star
                        </XButton> */}
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
                              <Star className='size-5  fill-primary_main' />
                              <div className='text-xs text-nowrap text-primary_main'>21 Stars</div>
                            </div>
                            <div className='flex items-center gap-1'>
                              <Star className='size-5  fill-primary_main' />
                              <div className='text-xs text-nowrap text-primary_main'>
                                32 Collabs
                              </div>
                            </div>
                          </div>
                        </div>
                      </XStack>
                    </div>
                  </XStack>
                  <XStack disableBorder className='!bg-secondary_background/90 !drop-shadow-none'>
                    <div className='flex flex-col px-5 p-3 gap-2 h-full w-full'>
                      <div className='flex justify-between'>
                        <div className='flex items-center gap-3'>
                          <Avatar src='https://img.freepik.com/premium-photo/cartoon-game-avatar-logo-gaming-brand_902820-461.jpg'>
                            OG
                          </Avatar>
                          <div className='flex flex-col'>
                            <div className='text-sm'>
                              <span className='font-bold text-primary_main'>Anakin Dabir</span>{" "}
                              shared a document
                            </div>
                            <div className='text-xs'>{dayjs(new Date()).fromNow()}</div>
                          </div>
                        </div>
                        {/* <XButton color='primary' className='!bg-primary_main/20'>
                          Star
                        </XButton> */}
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
                              <Star className='size-5  fill-primary_main' />
                              <div className='text-xs text-nowrap text-primary_main'>21 Stars</div>
                            </div>
                            <div className='flex items-center gap-1'>
                              <Star className='size-5  fill-primary_main' />
                              <div className='text-xs text-nowrap text-primary_main'>
                                32 Collabs
                              </div>
                            </div>
                          </div>
                        </div>
                      </XStack>
                    </div>
                  </XStack>
                  <XStack disableBorder className='!bg-secondary_background/90 !drop-shadow-none'>
                    <div className='flex flex-col px-5 p-3 gap-2 h-full w-full'>
                      <div className='flex justify-between'>
                        <div className='flex items-center gap-3'>
                          <Avatar src='https://img.freepik.com/premium-photo/cartoon-game-avatar-logo-gaming-brand_902820-461.jpg'>
                            OG
                          </Avatar>
                          <div className='flex flex-col'>
                            <div className='text-sm'>
                              <span className='font-bold text-primary_main'>Anakin Dabir</span>{" "}
                              shared a document
                            </div>
                            <div className='text-xs'>{dayjs(new Date()).fromNow()}</div>
                          </div>
                        </div>
                        {/* <XButton color='primary' className='!bg-primary_main/20'>
                          Star
                        </XButton> */}
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
                              <Star className='size-5  fill-primary_main' />
                              <div className='text-xs text-nowrap text-primary_main'>21 Stars</div>
                            </div>
                            <div className='flex items-center gap-1'>
                              <Star className='size-5  fill-primary_main' />
                              <div className='text-xs text-nowrap text-primary_main'>
                                32 Collabs
                              </div>
                            </div>
                          </div>
                        </div>
                      </XStack>
                    </div>
                  </XStack>
                  <XStack disableBorder className='!bg-secondary_background/90 !drop-shadow-none'>
                    <div className='flex flex-col px-5 p-3 gap-2 h-full w-full'>
                      <div className='flex justify-between'>
                        <div className='flex items-center gap-3'>
                          <Avatar src='https://img.freepik.com/premium-photo/cartoon-game-avatar-logo-gaming-brand_902820-461.jpg'>
                            OG
                          </Avatar>
                          <div className='flex flex-col'>
                            <div className='text-sm'>
                              <span className='font-bold text-primary_main'>Anakin Dabir</span>{" "}
                              shared a document
                            </div>
                            <div className='text-xs'>{dayjs(new Date()).fromNow()}</div>
                          </div>
                        </div>
                        {/* <XButton color='primary' className='!bg-primary_main/20'>
                          Star
                        </XButton> */}
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
                              <Star className='size-5  fill-primary_main' />
                              <div className='text-xs text-nowrap text-primary_main'>21 Stars</div>
                            </div>
                            <div className='flex items-center gap-1'>
                              <Star className='size-5  fill-primary_main' />
                              <div className='text-xs text-nowrap text-primary_main'>
                                32 Collabs
                              </div>
                            </div>
                          </div>
                        </div>
                      </XStack>
                    </div>
                  </XStack>
                  <XStack disableBorder className='!bg-secondary_background/90 !drop-shadow-none'>
                    <div className='flex flex-col px-5 p-3 gap-2 h-full w-full'>
                      <div className='flex justify-between'>
                        <div className='flex items-center gap-3'>
                          <Avatar>AR</Avatar>
                          <div className='flex flex-col'>
                            <div className='text-sm'>
                              <span className='font-bold text-primary_main'>Anakin Dabir</span>{" "}
                              shared a document
                            </div>
                            <div className='text-xs'>{dayjs(new Date()).fromNow()}</div>
                          </div>
                        </div>
                        {/* <XButton color='primary' className='!bg-primary_main/20'>
                          Star
                        </XButton> */}
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
                              <Star className='size-5  fill-primary_main' />
                              <div className='text-xs text-nowrap text-primary_main'>21 Stars</div>
                            </div>
                            <div className='flex items-center gap-1'>
                              <Star className='size-5  fill-primary_main' />
                              <div className='text-xs text-nowrap text-primary_main'>
                                32 Collabs
                              </div>
                            </div>
                          </div>
                        </div>
                      </XStack>
                    </div>
                  </XStack>
                  <XStack disableBorder className='!bg-secondary_background/90 !drop-shadow-none'>
                    <div className='flex flex-col px-5 p-3 gap-2 h-full w-full'>
                      <div className='flex justify-between'>
                        <div className='flex items-center gap-3'>
                          <Avatar src='https://img.freepik.com/premium-photo/cartoon-game-avatar-logo-gaming-brand_902820-461.jpg'>
                            OG
                          </Avatar>
                          <div className='flex flex-col'>
                            <div className='text-sm'>
                              <span className='font-bold text-primary_main'>Anakin Dabir</span>{" "}
                              shared a document
                            </div>
                            <div className='text-xs'>{dayjs(new Date()).fromNow()}</div>
                          </div>
                        </div>
                        {/* <XButton color='primary' className='!bg-primary_main/20'>
                          Star
                        </XButton> */}
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
                              <Star className='size-5  fill-primary_main' />
                              <div className='text-xs text-nowrap text-primary_main'>21 Stars</div>
                            </div>
                            <div className='flex items-center gap-1'>
                              <Star className='size-5  fill-primary_main' />
                              <div className='text-xs text-nowrap text-primary_main'>
                                32 Collabs
                              </div>
                            </div>
                          </div>
                        </div>
                      </XStack>
                    </div>
                  </XStack>
                  <XButton>Load More</XButton>
                </div>
              </div>
            </div>
          </XStack>
        </div>
      </div>
    </>
  );
};

export default Home;
