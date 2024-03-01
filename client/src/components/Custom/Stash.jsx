import React from "react";
import { Outlet } from "react-router-dom";
import XStack from "../XStack";
import XLoading from "../XLoading";
import { useSelector } from "react-redux";
import {
  useGetAllDocumentsQuery,
  useGetAllProjectsQuery,
  useGetRequestGoingToAdminQuery,
} from "../../services/nodeApi";
import XNavbar from "./XNavbar";

const Stash = () => {
  const isLogged = useSelector((state) => state.user.user);
  const { isLoading } = useGetAllDocumentsQuery();
  const { isLoading: isProjectsLoading } = useGetAllProjectsQuery({}, { skip: !isLogged });
  const { isLoading: isRequestLoading } = useGetRequestGoingToAdminQuery({}, { skip: !isLogged });
  return isProjectsLoading || isLoading || isRequestLoading ? (
    <>
      <XNavbar />
      <XStack className='h-full flex-1 relative flex flex-row !drop-shadow-none !bg-secondary_background/60 px-2 py-4'>
        <XLoading absolute />
      </XStack>
    </>
  ) : (
    <Outlet />
  );
};

export default Stash;
