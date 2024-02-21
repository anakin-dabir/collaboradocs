import React, { useState } from "react";
import Welcome from "./Welcome";
import XStack from "../../components/XStack";
import Xlogo from "../../components/Xlogo";
import { Avatar, Divider, Menu, MenuItem } from "@mui/material";
import XTooltip from "../../components/XTooltip";

const Home = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Welcome />
      <div className='h-screen w-full overflow-hidden'>
        <XStack className='!fixed !drop-shadow-none left-8 right-8 !bg-secondary_background/100 top-2 py-4'>
          <div className='flex justify-between container mx-auto'>
            <Xlogo />
            {/* <Xlogo /> */}
            <XTooltip data='anakin-dabir@gmail.com' placement='left'>
              <Avatar
                onClick={handleClick}
                src='https://img.freepik.com/premium-photo/cartoon-game-avatar-logo-gaming-brand_902820-465.jpg'
                className=' text-sm cursor-pointer'
              >
                OP
              </Avatar>
            </XTooltip>
            <Menu
              anchorEl={anchorEl}
              id='account-menu'
              open={open}
              onClose={handleClose}
              onClick={handleClose}
            >
              <XStack className='py-4 w-44'>
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>Settings</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </XStack>
            </Menu>
          </div>
        </XStack>
        <XStack className='!fixed top-[5.5rem] w-[300px] bottom-3 left-8 !drop-shadow-none !bg-secondary_background/80'></XStack>
        <XStack className='!fixed top-[5.5rem] left-72 bottom-3 right-8 !drop-shadow-none !bg-secondary_background/80 px-2 py-10'>
          <div className='overflow-y-auto h-full w-full flex gap-4 p-4 flex-wrap'>
            <XStack className='h-52 w-72'></XStack>
            <XStack className='h-52 w-72'></XStack>
            <XStack className='h-52 w-72'></XStack>
            <XStack className='h-52 w-72'></XStack>
            <XStack className='h-52 w-72'></XStack>
            <XStack className='h-52 w-72'></XStack>
            <XStack className='h-52 w-72'></XStack>
            <XStack className='h-52 w-72'></XStack>
            <XStack className='h-52 w-72'></XStack>
          </div>
        </XStack>
      </div>
    </>
  );
};

export default Home;
