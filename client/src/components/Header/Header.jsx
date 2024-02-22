import React from "react";

const Header = ({ children }) => {
  return <div className='fixed flex gap-2 top-[5rem] bottom-1 left-8 right-8 z-10'>{children}</div>;
};

export default Header;
