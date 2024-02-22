import React, { useEffect, useState } from "react";
import XStack from "../../components/XStack";
import XSwitch from "../../components/XSwitch";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import config from "../../config/config";
import { useSelector } from "react-redux";

const Auth = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isLogged = useSelector((state) => state.user.isLogged);

  const [type, typeSet] = useState(function path() {
    if (pathname === config.PATHNAMES.LOGIN) return true;
    else if (pathname === config.PATHNAMES.REGISTER) return false;
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
