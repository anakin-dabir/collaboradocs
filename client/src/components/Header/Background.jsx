import React from "react";
import bg from "@/assets/bg/bg_4.png";

const Background = () => {
  return (
    <>
      <div
        className='fixed bg-cover bg-no-repeat inset-0 bg-blend-luminosity bg-black/60 -z-10'
        style={{ backgroundImage: `url(${bg})` }}
      ></div>
      <div className='fixed inset-0 bg-black/30 bg-blend-overlay -z-10'></div>
    </>
  );
};

export default Background;
