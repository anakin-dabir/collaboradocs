import React from "react";

const XLoading = ({ absolute = false }) => {
  return (
    <>
      <div
        className={`${
          absolute ? "absolute" : "fixed"
        } opacity-70 pt-14 top-1/2 left-1/2 box-center flex-col -translate-x-1/2 -translate-y-1/2`}
      >
        <div className='running  scale-125'>
          <div className='outer'>
            <div className='body'>
              <div className='arm front'></div>
              <div className='arm behind'></div>
              <div className='leg front'></div>
              <div className='leg behind'></div>
            </div>
          </div>
        </div>
        <p className='pt-5 text-primary_light text-lg  font-medium'>
          Loading
          <span className='animate-ping'>.</span>
          <span className='animate-pulse'>.</span>
          <span className='animate-pulse'>.</span>
        </p>
      </div>
      <div className='inset-0 fixed bg-black/10 pointer-events-none !z-[1000]'></div>
    </>
  );
};

export default XLoading;
