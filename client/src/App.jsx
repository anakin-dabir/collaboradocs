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
import XNavbar from "./components/XNavbar";
import Error from "./pages/Home/Error";

const App = () => {
  const { search } = useLocation();
  const routes = useRoutes([
    { path: config.PATHNAMES.HOME, element: <Home /> },
    {
      path: config.PATHNAMES.AUTH,
      element: <Auth />,
      children: [
        { path: config.PATHNAMES.AUTH, element: <Navigate to={config.PATHNAMES.LOGIN} /> },
        { path: config.PATHNAMES.REGISTER, element: <Register /> },
        { path: config.PATHNAMES.LOGIN, element: <Login /> },
      ],
    },
    search === `?token=${config.SECRET}` && {
      path: config.PATHNAMES.VERIFYEMAIL,
      element: <Verification />,
    },
    { path: config.PATHNAMES.TEST, element: <XEditor /> },
    { path: "*", element: <Error /> },
  ]);
  return (
    <>
      <XNavbar />
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
