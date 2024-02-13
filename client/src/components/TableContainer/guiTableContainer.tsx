import React from "react";
import { TableContainer } from "@mui/material";
import GuiBox from "../Box";
import { useGuiTableContainerStyles } from "../../themes/themes";
import clsx from "clsx";
import { ITableContainer } from "./tableContainer.interface";

const GuiTableContainer = ({ children, ...props }: ITableContainer) => {
  const classes = useGuiTableContainerStyles();
  return (
    <GuiBox className={clsx("border_blinking", classes.root)} svgColor="">
      <TableContainer sx={{ paddingBottom: "2.5rem" }} {...props}>
        {children}
      </TableContainer>
    </GuiBox>
  );
};

export default GuiTableContainer;
