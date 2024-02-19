import React from "react";
import XButton from "../../components/XButton";
import XStack from "../../components/XStack";
import { useLocation } from "react-router-dom";

const Verification = () => {
  const { state } = useLocation();
  return (
    <XStack
      size='l'
      className='relative-center w-[550px] h-[546px] !drop-shadow-none !bg-secondary_background/30 px-14 py-12 gap-5'
    >
      <div className='text-2xl font-bold text-primary_main drop-shadow-primary'>
        Registration successfull
      </div>
      <div className='text-white drop-shadow-primary'>
        Email with activation link has been sent to {state?.email}, after activation of account
        click here to login
      </div>
      <span class='relative flex h-10 w-10'>
        <span class='animate-ping absolute inline-flex h-full w-full rounded-full bg-primary_main/75'></span>
      </span>
      <XButton>Login</XButton>
    </XStack>
  );
};

export default Verification;
