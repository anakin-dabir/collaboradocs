import React from "react";
import XEditor from "./components/XEditor";
import { Navigate, useLocation, useRoutes } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Auth from "./pages/Auth";
import bg from "@/assets/bg/bg_4.png";
import Verification from "./pages/Auth/Verification";
import config from "./config/config";
import Home from "./pages/Home";

const App = () => {
  const { search } = useLocation();
  const routes = useRoutes([
    { path: "/", element: <Home /> },
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
          className='fixed bg-cover bg-no-repeat inset-0 bg-blend-luminosity bg-black/60 -z-10'
          style={{ backgroundImage: `url(${bg})` }}
        ></div>
        <div className='fixed inset-0 bg-black/30 bg-blend-overlay -z-10'></div>
        <div className='z-10 h-full w-full'>{routes}</div>
      </div>
    </>
  );
};

export default App;
