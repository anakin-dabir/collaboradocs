import React from 'react';
import {Box, DialogTitle, Typography, Stack} from '@mui/material';
import {useHeadingStyles} from '../../themes';
import GuiDialog from '../Dialog';
import Clickable from '../Clickable';
import GuiButton from '../Button/guiButton';
import {ReactComponent as DividerBoth} from './../../img/divider_both.svg';
import {ReactComponent as WarningIcon} from './../../img/warning.svg';
import {ReactComponent as Divider} from './../../img/divider.svg';

export default function AlertDialog({open, message, openSet, heading}) {
  const headingClasses = useHeadingStyles();
  return (
    <>
      <GuiDialog
        onClose={() => {
          openSet(false);
        }}
        open={open}
        maxWidth='sm'
        fullWidth
      >
        <DialogTitle>
          <Stack direction='row'>
            <Box mr={2}>
              <WarningIcon />
            </Box>
            <Box>
              <Typography className={headingClasses.heading}>{heading}</Typography>
            </Box>
          </Stack>
          <Box>
            <DividerBoth style={{width: '100%'}} />
          </Box>
        </DialogTitle>
        <Box pl={3} pr={3} pb={12}>
          <Typography>{message}</Typography>
        </Box>
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
          <Divider />
        </Box>
        <Box display='flex' flexDirection='row' alignItems='center' justifyContent='right' p={4}>
          <Box>
            <Clickable>
              <GuiButton variant='outlined' onClick={() => openSet(false)}>
                OK
              </GuiButton>
            </Clickable>
          </Box>
        </Box>
      </GuiDialog>
    </>
  );
}
