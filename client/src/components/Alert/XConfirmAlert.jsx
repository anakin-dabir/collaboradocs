import React from 'react';
import {Box, Typography} from '@mui/material';
import XAlertBase from './XAlertBase';
import XButton from '@/components/XButton';
import {ReactComponent as Divider} from '@/assets/divider.svg';

export default function XConfirmAlert({isOpen, onClose, onConfirm, heading = 'Leave Page'}) {
  return (
    <>
      <XAlertBase onClose={onClose} open={isOpen} maxWidth='sm' fullWidth heading={heading}>
        <Box pl={3} pr={3} pb={7} pt={1}>
          <Typography>
            Are you sure that you want to leave the current page?
            <br />
            Your changes won’t be saved
          </Typography>
        </Box>
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
          <Divider />
        </Box>
        <Box display='flex' flexDirection='row' alignItems='center' justifyContent='right' p={3}>
          <Box mr={3}>
            <XButton variant='outlined' color='error' onClick={onClose}>
              Cancel
            </XButton>
          </Box>
          <Box>
            <XButton
              variant='outlined'
              onClick={() => {
                onConfirm();
                onClose();
              }}
            >
              Leave
            </XButton>
          </Box>
        </Box>
      </XAlertBase>
    </>
  );
}
