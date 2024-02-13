import React, {forwardRef} from 'react';
import {Box, MenuItem, TablePagination} from '@mui/material';
import {ITablePagination} from './tablePagination.interface';
import {ReactComponent as FirstButtonIcon} from '../../img/pagination_firstIcon.svg';
import {ReactComponent as LastButtonIcon} from '../../img/pagination_lastIcon.svg';
import {ReactComponent as PrevButtonIcon} from '../../img/pagination_prevIcon.svg';
import {ReactComponent as NextButtonIcon} from '../../img/pagination_nextIcon.svg';
import GuiTextField from '../TextField/guiTextField';

export default function GuiTablePagination({
  count,
  rowsPerPage,
  rowsPerPageSet,
  pageNo,
  pageNoSet,
  paginationOpsSet,
  uiSearchSet,
  rowsPerPageOptions = [5, 10, 20, 50],
}: ITablePagination) {
  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    uiSearchSet('');
    pageNoSet(newPage);
    paginationOpsSet((prev: any) => ({
      ...prev,
      pageNo: newPage + 1,
    }));
  };
  const handleChangeRowsPerPage = (value: string) => {
    uiSearchSet('');
    rowsPerPageSet(parseInt(value, 10));
    pageNoSet(0);
    paginationOpsSet((prev: any) => ({
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
        '& .Mui-disabled': {
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
          /* eslint-disable react/display-name */
          inputComponent: forwardRef((props, ref) => (
            <Box sx={{width: '70px'}} ref={ref}>
              <GuiTextField
                size='small'
                simpleBorderWithBottomRight={true}
                simpleBorder={true}
                select={true}
                value={rowsPerPage}
              >
                {rowsPerPageOptions.map((option: any) => (
                  <MenuItem
                    key={option}
                    value={option}
                    onClick={() => handleChangeRowsPerPage(`${option}}`)}
                  >
                    {option}
                  </MenuItem>
                ))}
              </GuiTextField>
            </Box>
          )),
        },
      }}
    />
  );
}
