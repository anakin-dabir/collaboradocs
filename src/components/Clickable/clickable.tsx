import React from "react";
import { Box } from "@mui/material";
import { useClickableStyles } from "../../themes/themes";
import clsx from "clsx";
import { IClickable } from "./clickable.interface";

const Clickable = ({
  children,
  className,
  style,
  notClickable,
}: IClickable) => {
  const classes = useClickableStyles();
  return (
    <Box
      style={style}
      className={clsx({ [classes.grow]: !notClickable }, className)}
    >
      {children}
    </Box>
  );
};

export default React.memo(Clickable);
