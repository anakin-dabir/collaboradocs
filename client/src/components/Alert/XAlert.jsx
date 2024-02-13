import React from 'react';
import {Box, Typography} from '@mui/material';
import {ReactComponent as Divider} from '@/assets/divider.svg';
import XButton from '@/components/XButton';
import XAlertBase from './XAlertBase';

export default function XAlert({
  isOpen,
  onClose,
  heading = 'Testing Alert',
  message = `This is the test alert just for you!
   adipiscing elit sed do eiusmod tempor t sed do eiusmod tempor incididunt ut labore et dolore magna aliqua !!`,
}) {
  return (
    <>
      <XAlertBase onClose={onClose} open={isOpen} maxWidth='sm' fullWidth heading={heading}>
        <Box pl={3} pr={3} pb={7} pt={1}>
          <Typography>{message}</Typography>
        </Box>
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
          <Divider />
        </Box>
        <Box display='flex' flexDirection='row' alignItems='center' justifyContent='right' p={3}>
          <Box>
            <XButton variant='outlined' onClick={onClose}>
              OK
            </XButton>
          </Box>
        </Box>
      </XAlertBase>
    </>
  );
}
