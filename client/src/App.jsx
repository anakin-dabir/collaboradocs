import React from "react";
import XEditor from "./components/XEditor";
import { useRoutes } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

const App = () => {
  const routes = useRoutes([
    { path: "/", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/test", element: <XEditor /> },
  ]);
  return <>{routes}</>;
};

export default App;
