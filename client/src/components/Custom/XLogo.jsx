import React from "react";
import { ReactComponent as Logo } from "@/assets/custom/logo.svg";
import XTooltip from "../XTooltip";
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
        className={`box-center gap-1 inline-flex ${clickable && "cursor-pointer"}`}
      >
        <Logo style={{ height: "40px", width: "40px" }} />
        <div className='text-xl font-normal text-primary_main -tracking-[0.14em]'>
          Collaboradocs
        </div>
      </div>
    </XTooltip>
  );
};

export default Xlogo;
