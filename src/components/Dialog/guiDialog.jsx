import React from 'react';
import {Box, Dialog} from '@mui/material';
import {useGuiDialogStyles} from '../../themes';
import clsx from 'clsx';
import {styled} from '@mui/styles';
import {ReactComponent as ModuleTopLeft} from './../../img/module_top_left.svg';
import {ReactComponent as ModuleTopRight} from './../../img/module_top_right.svg';
import {ReactComponent as ModuleBottomRight} from './../../img/module_bottom_right.svg';
import {ReactComponent as ModuleBottomLeft} from './../../img/module_bottom_left.svg';

const GuiDialog = ({
  className,
  style,
  fullScreen = false,
  sx,
  children,
  fullWidth,
  maxWidth,
  onClose,
  open,
  dropShadow = true,
  ...props
}) => {
  const dialogClasses = useGuiDialogStyles();
  return (
    <Dialog
      open={open}
      fullScreen={fullScreen}
      onClose={(e, reason) => {
        if (reason === 'escapeKeyDown') return;
        if (reason === 'backdropClick') return;
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
        <Box className={dialogClasses.content}>{children}</Box>
      </Box>
    </Dialog>
  );
};

export default GuiDialog;
