import React from "react";
import { ReactComponent as Logo } from "@/assets/custom/logo.svg";

const Test = () => {
  return (
    <div className={`flex items-center justify-center !bg-white z-10 h-screen w-screen gap-3`}>
      <Logo style={{ height: "60px", width: "60px" }} />
      <div className='text-3xl font-medium text-primary_main'>Collaboradocs</div>
    </div>
  );
};

export default Test;
