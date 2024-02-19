import React, { useState } from "react";
import XStack from "../../components/XStack";
import XSwitch from "../../components/XSwitch";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const Auth = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [type, typeSet] = useState(function path() {
    if (pathname === "/auth/login") return true;
    else if (pathname === "/auth/register") return false;
    return true;
  });
  return (
    <div className='w-screen h-screen'>
      <XStack
        size='l'
        className='relative-center w-[550px] !drop-shadow-none !bg-secondary_background/30 px-14 py-12 gap-5'
      >
        <div className='text-3xl font-bold text-primary_main drop-shadow-primary'>
          {pathname === "/auth/login" ? "Login" : "Register"}
        </div>
        <Outlet />
        <div className='flex items-center gap-1'>
          <XSwitch
            checked={type}
            onChange={() => {
              typeSet((pre) => !pre);
              navigate(type ? "/auth/register" : "/auth/login");
            }}
          />
          <div className='text-primary_light drop-shadow-primary'>Already registered ??</div>
        </div>
      </XStack>
    </div>
  );
};

export default Auth;
