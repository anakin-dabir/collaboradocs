import React, { useState } from "react";
import Welcome from "../../components/Custom/Welcome";
import XStack from "../../components/XStack";
import DocumentTile from "./components/DocumentTile";
import XNavbar from "../../components/Custom/XNavbar";
import { useGetAllDocumentsQuery, useGetAllProjectsQuery } from "../../services/nodeApi";
import XLoading from "../../components/XLoading";
import { useSelector } from "react-redux";
import XSidebar from "../../components/Custom/XSidebar";

const Home = () => {
  const isLogged = useSelector((state) => state.user.user);
  const { isLoading } = useGetAllDocumentsQuery();
  const { isLoading: isProjectsLoading } = useGetAllProjectsQuery({}, { skip: !isLogged });
  const documents = useSelector((state) => state.document.document);
  return (
    <>
      <Welcome />
      <XNavbar />
      {isLogged && <XSidebar />}

      <XStack className='h-full flex-1 flex flex-row !drop-shadow-none !bg-secondary_background/60 px-2 py-4'>
        {isLoading || isProjectsLoading ? (
          <XLoading absolute />
        ) : (
          <div className='overflow-y-auto relative h-full w-full'>
            <div className='container mx-auto max-w-screen-lg'>
              <div className='space-y-4 w-full'>
                {documents.length ? (
                  documents.map((document, index) => {
                    return <DocumentTile key={index} document={document} />;
                  })
                ) : (
                  <div className='text-center mt-10'>No documents here yet</div>
                )}
              </div>
            </div>
          </div>
        )}
      </XStack>
    </>
  );
};

export default Home;
