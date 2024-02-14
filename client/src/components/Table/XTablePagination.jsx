import React, { forwardRef } from "react";
import { Box, MenuItem, TablePagination } from "@mui/material";
import { ReactComponent as FirstButtonIcon } from "@/assets/pagination_firstIcon.svg";
import { ReactComponent as LastButtonIcon } from "@/assets/pagination_lastIcon.svg";
import { ReactComponent as PrevButtonIcon } from "@/assets/pagination_prevIcon.svg";
import { ReactComponent as NextButtonIcon } from "@/assets/pagination_nextIcon.svg";
import XTextfield from "../XTextfield";

export default function XTablePagination({
  count,
  rowsPerPage,
  rowsPerPageSet,
  pageNo,
  pageNoSet,
  paginationOpsSet,
  uiSearchSet,
  rowsPerPageOptions = [5, 10, 20, 50],
}) {
  const handleChangePage = (event, newPage) => {
    uiSearchSet("");
    pageNoSet(newPage);
    paginationOpsSet((prev) => ({
      ...prev,
      pageNo: newPage + 1,
    }));
  };
  const handleChangeRowsPerPage = (value) => {
    uiSearchSet("");
    rowsPerPageSet(parseInt(value, 10));
    pageNoSet(0);
    paginationOpsSet((prev) => ({
      ...prev,
      pageNo: 1,
      pageSize: parseInt(value, 10),
    }));
  };
  return (
    <TablePagination
      component='div'
      rowsPerPageOptions={rowsPerPageOptions}
      count={count}
      rowsPerPage={rowsPerPage}
      page={pageNo}
      onPageChange={handleChangePage}
      showFirstButton
      showLastButton
      sx={{
        "& .Mui-disabled": {
          opacity: 0.3,
        },
      }}
      slots={{
        actions: {
          firstButtonIcon: () => <FirstButtonIcon />,
          lastButtonIcon: () => <LastButtonIcon />,
          nextButtonIcon: () => <NextButtonIcon />,
          previousButtonIcon: () => <PrevButtonIcon />,
        },
      }}
      slotProps={{
        select: {
          value: rowsPerPageOptions,
          inputComponent: forwardRef((props, ref) => (
            <Box sx={{ width: "70px" }} ref={ref}>
              <XTextfield
                size='small'
                simpleBorderWithBottomRight={true}
                simpleBorder={true}
                select={true}
                value={rowsPerPage}
              >
                {rowsPerPageOptions.map((option) => (
                  <MenuItem
                    key={option}
                    value={option}
                    onClick={() => handleChangeRowsPerPage(`${option}}`)}
                  >
                    {option}
                  </MenuItem>
                ))}
              </XTextfield>
            </Box>
          )),
        },
      }}
    />
  );
}
