import React from 'react';
import {Box, Typography} from '@mui/material';
import GuiDialog from './GuiDialog';
import GuiButton from '../GuiButton';
import {ReactComponent as Divider} from './../../img/divider.svg';

export default function SimpleAlert({
  isOpen,
  onClose,
  heading = 'Testing Alert',
  message = `This is the test alert just for you!
   adipiscing elit sed do eiusmod tempor t sed do eiusmod tempor incididunt ut labore et dolore magna aliqua !!`,
}) {
  return (
    <>
      <GuiDialog onClose={onClose} open={isOpen} maxWidth='sm' fullWidth heading={heading}>
        <Box pl={3} pr={3} pb={7} pt={1}>
          <Typography>{message}</Typography>
        </Box>
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
          <Divider />
        </Box>
        <Box display='flex' flexDirection='row' alignItems='center' justifyContent='right' p={3}>
          <Box>
            <GuiButton variant='outlined' onClick={onClose}>
              OK
            </GuiButton>
          </Box>
        </Box>
      </GuiDialog>
    </>
  );
}
