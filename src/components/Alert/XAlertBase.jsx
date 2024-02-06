import React from 'react';
import {Box, Dialog, DialogTitle, Stack, Typography} from '@mui/material';
import {useGuiDialogStyles, useHeadingStyles} from '../../themes';
import clsx from 'clsx';
import {ReactComponent as ModuleTopLeft} from './../../img/module_top_left.svg';
import {ReactComponent as ModuleTopRight} from './../../img/module_top_right.svg';
import {ReactComponent as ModuleBottomRight} from './../../img/module_bottom_right.svg';
import {ReactComponent as ModuleBottomLeft} from './../../img/module_bottom_left.svg';
import {ReactComponent as DividerBoth} from './../../img/divider_both.svg';
import {ReactComponent as WarningIcon} from './../../img/warning.svg';

const XAlertBase = ({
  className,
  style,
  fullScreen = false,
  sx,
  children,
  fullWidth,
  maxWidth,
  onClose,
  isOpen,
  dropShadow = true,
  closeOnClickAway = true,
  heading = 'Leave Page',
  ...props
}) => {
  const dialogClasses = useGuiDialogStyles();
  const headingClasses = useHeadingStyles();
  return (
    <Dialog
      open={isOpen}
      fullScreen={fullScreen}
      onClose={(e, reason) => {
        if (reason === 'escapeKeyDown') return;
        if (reason === 'backdropClick' && !closeOnClickAway) return;
        onClose();
      }}
      maxWidth={maxWidth}
      fullWidth={fullWidth}
      className={clsx({
        [dialogClasses.container]: !dropShadow,
      })}
      style={style}
      sx={sx}
      {...props}
    >
      <Box className={dialogClasses.root}>
        <ModuleTopLeft className={clsx(dialogClasses.border, dialogClasses.top_left_border)} />
        <ModuleBottomLeft
          className={clsx(dialogClasses.border, dialogClasses.bottom_left_border)}
        />
        <ModuleBottomRight
          className={clsx(dialogClasses.border, dialogClasses.bottom_right_border)}
        />
        <ModuleTopRight className={clsx(dialogClasses.border, dialogClasses.top_right_border)} />
        <Box className={dialogClasses.content}>
          <DialogTitle>
            <Stack direction='row' mb={1.5} mt={2} alignItems='center'>
              <Box mr={1}>
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
          {children}
        </Box>
      </Box>
    </Dialog>
  );
};

export default XAlertBase;
