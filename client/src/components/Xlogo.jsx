import React from "react";
import { ReactComponent as Logo } from "@/assets/logo.svg";
import XTooltip from "./XTooltip";
import { useLocation, useNavigate } from "react-router-dom";

const Xlogo = ({ clickable = false }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const handleClick = () => {
    if (!clickable) return;
    if (pathname === "/") return;
    navigate("/");
  };
  return (
    <XTooltip placement='bottom' data='Real-time collaboration, anywhere, anytime'>
      <div
        onClick={handleClick}
        className={`box-center inline-flex ${clickable && "cursor-pointer"}`}
      >
        <Logo style={{ height: "45px", width: "45px" }} />
        <div className='text-xl font-medium text-primary_main -tracking-[0.12em]'>
          Collaboradocs
        </div>
      </div>
    </XTooltip>
  );
};

export default Xlogo;
