import React from "react";
import XTooltip from "../XTooltip";
import { ReactComponent as Back } from "@/assets/custom/back.svg";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

const BackButton = ({ path = "/" }) => {
  const navigate = useNavigate();
  return (
    <XTooltip data='Back' placement='top'>
      <IconButton onClick={() => navigate(path)}>
        <Back />
      </IconButton>
    </XTooltip>
  );
};

export default BackButton;
