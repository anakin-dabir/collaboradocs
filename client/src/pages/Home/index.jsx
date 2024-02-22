import React, { useState } from "react";
import Welcome from "./Welcome";
import XStack from "../../components/XStack";
import DocumentTile from "./components/DocumentTile";

const Home = () => {
  const document = {
    title: "Warfare of artcraft documentary",
    desc: "A documentary on the things that happened in the past 1800's for the witchcraft",
    creator: {
      name: "Anakin Dabir",
      img: "https://img.freepik.com/premium-photo/cartoon-game-avatar-logo-gaming-brand_902820-469.jpg",
    },
    collaborators: [{ name: "Khan" }, { name: "anwar" }],
    stars: 1,
    project: { name: "Mariko" },
  };
  return (
    <>
      <Welcome />

      <XStack className='h-full flex-1 flex flex-row !drop-shadow-none !bg-secondary_background/60 px-2 py-4'>
        <div className='overflow-y-auto relative h-full w-full'>
          <div className='container mx-auto max-w-screen-lg'>
            <div className='space-y-4 w-full'>
              <DocumentTile document={document} />
              <DocumentTile document={document} />
              <DocumentTile document={document} />
              <DocumentTile document={document} />
              <DocumentTile document={document} />
              <DocumentTile document={document} />
              <DocumentTile document={document} />
            </div>
          </div>
        </div>
      </XStack>
    </>
  );
};

export default Home;
