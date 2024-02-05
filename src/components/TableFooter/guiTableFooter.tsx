import React from "react";
import { TableFooter, TableRow, TableCell, Box } from "@mui/material";
import { useGuiTableStyles } from "../../themes/themes";
import { ITableFooter } from "./tableFooter.interface";

export default function GuiTableFooter({ children }: ITableFooter) {
  const classes = useGuiTableStyles();
  return (
    <TableFooter>
      <TableRow>
        <TableCell
          colSpan={12}
          sx={{ padding: 0, paddingBlock: "0px !important" }}
        >
          <Box className={classes.tableFooter}>{children}</Box>
        </TableCell>
      </TableRow>
    </TableFooter>
  );
}
