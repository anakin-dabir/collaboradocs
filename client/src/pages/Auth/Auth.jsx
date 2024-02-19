import React, { useState } from "react";
import bg from "@/assets/bg/bg_4.png";
import XStack from "../../components/XStack";
import XSwitch from "../../components/XSwitch";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const Auth = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [type, typeSet] = useState(pathname === "/auth/login" ? true : false);
  return (
    <div className='w-screen h-screen'>
      <div
        className='fixed bg-cover bg-no-repeat inset-0 bg-blend-luminosity bg-black/60'
        style={{ backgroundImage: `url(${bg})` }}
      ></div>
      <div className='fixed inset-0 bg-black/30 bg-blend-overlay'></div>
      <XStack
        size='l'
        className='relative-center w-[550px] !drop-shadow-none !bg-secondary_background/30 px-14 py-12 gap-5'
      >
        <div className='text-3xl font-bold text-primary_main drop-shadow-primary'>
          {type ? "Login" : "Register"}
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
