import React from "react";
import { ReactComponent as DividerLeft } from "@/assets/divider_left.svg";
import { ReactComponent as Divider } from "@/assets/divider.svg";
import { ReactComponent as DividerRight } from "@/assets/divider_right.svg";

const XDivider = () => {
  return (
    <div className='flex w-full'>
      <DividerLeft />
      <Divider className='w-full' />
      <DividerRight />
    </div>
  );
};

export default XDivider;
