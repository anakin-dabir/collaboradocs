import React from "react";
import { ReactComponent as Logo } from "@/assets/logo.svg";
import XTooltip from "./XTooltip";

const Xlogo = () => {
  return (
    <XTooltip placement='bottom' data='Real-time collaboration, anywhere, anytime'>
      <div className='box-center inline-flex cursor-pointer'>
        <Logo style={{ height: "45px", width: "45px" }} />
        <div className='text-xl font-medium text-primary_main -tracking-[0.12em]'>
          Collaboradocs
        </div>
      </div>
    </XTooltip>
  );
};

export default Xlogo;
