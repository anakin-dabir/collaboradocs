import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRouteError } from "react-router-dom";
import { serRouterError } from "../../store/slice/welcomeSlice";

const RouterError = () => {
  const error = useRouteError();
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(error);
    dispatch(serRouterError(true));
  }, [error]);
  return <div>RouterError</div>;
};

export default RouterError;
