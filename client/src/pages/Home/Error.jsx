import React from "react";
import XStack from "../../components/XStack";
import { useNavigate } from "react-router-dom";
import XButton from "../../components/XButton";
import config from "../../config/config";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className='w-screen h-screen'>
      <XStack
        size='l'
        className='relative-center box-center w-[550px] !drop-shadow-none !bg-secondary_background/30 px-14 py-12 gap-10'
      >
        <div className='text-3xl font-bold text-primary_main drop-shadow-primary'>
          404: Page Not Found
        </div>
        <div className='text-lg text-center'>
          Well, this is awkward... the page you wanted is playing hide and seek. Sorry, we couldn't
          find that. Perhaps you'd like to try...
        </div>
        <XButton onClick={() => navigate("/")}>Homepage</XButton>
      </XStack>
    </div>
  );
};

export default Error;
