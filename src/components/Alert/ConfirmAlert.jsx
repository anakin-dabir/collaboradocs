import React from 'react';
import {Box, Typography} from '@mui/material';
import GuiDialog from './GuiDialog';
import GuiButton from '../Button/guiButton';
import {ReactComponent as Divider} from './../../img/divider.svg';

export default function ConfirmAlert({isOpen, onClose, onConfirm, heading = 'Leave Page'}) {
  return (
    <>
      <GuiDialog onClose={onClose} open={isOpen} maxWidth='sm' fullWidth heading={heading}>
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
            <GuiButton variant='outlined' color='error' onClick={onClose}>
              Cancel
            </GuiButton>
          </Box>
          <Box>
            <GuiButton
              variant='outlined'
              onClick={() => {
                onConfirm();
                onClose();
              }}
            >
              Leave
            </GuiButton>
          </Box>
        </Box>
      </GuiDialog>
    </>
  );
}
