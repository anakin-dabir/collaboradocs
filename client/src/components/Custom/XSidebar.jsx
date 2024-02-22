import React from "react";
import XStack from "../XStack";
import XButton from "../XButton";

const XSidebar = () => {
  return (
    <XStack className='h-full w-[400px] !drop-shadow-none !bg-secondary_background/60 py-10 px-4'>
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
    </XStack>
  );
};

export default XSidebar;
