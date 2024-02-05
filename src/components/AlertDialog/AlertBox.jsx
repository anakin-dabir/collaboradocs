import React from 'react';
import {Box, DialogTitle, Typography, Stack} from '@mui/material';
import {useHeadingStyles} from '../../themes';
import GuiDialog from '../Dialog';
import Clickable from '../Clickable';
import GuiButton from '../Button/guiButton';
import {ReactComponent as DividerBoth} from './../../img/divider_both.svg';
import {ReactComponent as WarningIcon} from './../../img/warning.svg';
import {ReactComponent as Divider} from './../../img/divider.svg';

export default function AlertDialog({
  isOpen,
  isOpenSet,
  alertHeading = 'Testing Alert',
  alertMessage = `This is the test alert just for you!
   adipiscing elit sed do eiusmod tempor t sed do eiusmod tempor incididunt ut labore et dolore magna aliqua !!`,
}) {
  const headingClasses = useHeadingStyles();
  return (
    <>
      <GuiDialog
        onClose={() => {
          isOpenSet(false);
        }}
        open={isOpen}
        maxWidth='sm'
        fullWidth
      >
        <DialogTitle>
          <Stack direction='row' mb={1.5} mt={2} alignItems='center'>
            <Box mr={1}>
              <WarningIcon />
            </Box>
            <Box>
              <Typography className={headingClasses.heading}>{alertHeading}</Typography>
            </Box>
          </Stack>
          <Box>
            <DividerBoth style={{width: '100%'}} />
          </Box>
        </DialogTitle>
        <Box pl={3} pr={3} pb={7} pt={1}>
          <Typography>{alertMessage}</Typography>
        </Box>
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
          <Divider />
        </Box>
        <Box display='flex' flexDirection='row' alignItems='center' justifyContent='right' p={3}>
          <Box>
            <Clickable>
              <GuiButton variant='outlined' onClick={() => isOpenSet(false)}>
                OK
              </GuiButton>
            </Clickable>
          </Box>
        </Box>
      </GuiDialog>
    </>
  );
}
