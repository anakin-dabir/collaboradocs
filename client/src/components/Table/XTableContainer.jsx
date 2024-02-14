import React from "react";
import { TableContainer } from "@mui/material";
import { useGuiTableContainerStyles } from "../../themes";
import clsx from "clsx";
import XStack from "../XStack";

const XTableContainer = ({ className = "", size = "small", children, ...props }) => {
  const classes = useGuiTableContainerStyles();
  return (
    <XStack className={clsx(className, classes.root)} size={size}>
      <TableContainer sx={{ paddingBottom: "2.5rem" }} {...props}>
        {children}
      </TableContainer>
    </XStack>
  );
};

export default XTableContainer;
