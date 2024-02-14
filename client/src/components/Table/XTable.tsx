import React from "react";
import { Table } from "@mui/material";
import { useGuiTableStyles } from "../../themes";

const XTable = ({ stickyHeader = true, ...props }) => {
  const classes = useGuiTableStyles();
  return (
    <Table
      stickyHeader={stickyHeader}
      classes={classes}
      {...props}
      sx={{ paddingLeft: "0.8rem", paddingRight: "0.2rem" }}
    />
  );
};

export default XTable;
