import React from "react";
import XEditor from "./components/XEditor";
import { Navigate, useLocation, useRoutes } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Auth from "./pages/Auth/Auth";
import bg from "@/assets/bg/bg_4.png";
import Verification from "./pages/Auth/Verification";
import config from "./config/config";

const App = () => {
  const { search } = useLocation();
  const routes = useRoutes([
    { path: "/", element: <Login /> },
    {
      path: "/auth",
      element: <Auth />,
      children: [
        { path: "/auth", element: <Navigate to='/auth/login' /> },
        { path: "/auth/register", element: <Register /> },
        { path: "/auth/login", element: <Login /> },
      ],
    },
    search === `?token=${config.SECRET}` && {
      path: "/verify-email/:token",
      element: <Verification />,
    },
    { path: "/test", element: <XEditor /> },
  ]);
  return (
    <>
      <div className='w-screen h-full'>
        <div
          className='fixed bg-cover bg-no-repeat inset-0 bg-blend-luminosity bg-black/60'
          style={{ backgroundImage: `url(${bg})` }}
        ></div>
        <div className='fixed inset-0 bg-black/30 bg-blend-overlay'></div>
        {routes}
      </div>
    </>
  );
};

export default App;
