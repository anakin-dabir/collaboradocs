import React from "react";
import XEditor from "./components/XEditor";
import { Navigate, useRoutes } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Auth from "./pages/Auth/Auth";

const App = () => {
  const routes = useRoutes([
    { path: "/", element: <Login /> },
    {
      path: "/auth",
      element: <Auth />,
      children: [
        { path: "/auth", element: <Navigate to='/auth/login' /> },
        { path: "/auth/login", element: <Login /> },
        { path: "/auth/register", element: <Register /> },
      ],
    },
    { path: "/test", element: <XEditor /> },
  ]);
  return <>{routes}</>;
};

export default App;
