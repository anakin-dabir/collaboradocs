import React from "react";
import Xlogo from "./Xlogo";
import XAvatar from "./XAvatar";
import XStack from "./XStack";
import { useLocation } from "react-router-dom";
import config from "../config/config";

const XNavbar = () => {
  const { pathname } = useLocation();
  const pathnames = Object.values(config.PATHNAMES);
  const disableBorder =
    pathname === config.PATHNAMES.AUTH ||
    pathname === config.PATHNAMES.LOGIN ||
    pathname === config.PATHNAMES.REGISTER ||
    pathname === config.PATHNAMES.VERIFYEMAIL ||
    !pathnames.includes(pathname);

  return (
    <XStack
      disableBorder={disableBorder}
      className={`!fixed !drop-shadow-none ${
        disableBorder ? "!bg-transparent" : "!bg-secondary_background/40"
      } left-8 right-8 top-2 py-4`}
    >
      <div className='flex justify-between container mx-auto max-w-screen-2xl px-4'>
        <Xlogo clickable />
        <XAvatar />
      </div>
    </XStack>
  );
};

export default XNavbar;
