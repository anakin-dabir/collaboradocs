import React from "react";
import { Box, Dialog, DialogTitle, IconButton, Stack, Typography } from "@mui/material";
import { useGuiDialogStyles, useHeadingStyles } from "../../themes";
import clsx from "clsx";
import { ReactComponent as CloseIcon } from "@/assets/close.svg";
import { ReactComponent as DividerBoth } from "@/assets/divider_both.svg";
import { ReactComponent as WarningIcon } from "@/assets/warning.svg";
import XStack from "../XStack";

const XAlertBase = ({
  className = "",
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
  heading = "",
  ...props
}) => {
  const dialogClasses = useGuiDialogStyles();
  const headingClasses = useHeadingStyles();
  return (
    <Dialog
      open={isOpen}
      fullScreen={fullScreen}
      onClose={(e, reason) => {
        if (reason === "escapeKeyDown") return;
        if (reason === "backdropClick" && !closeOnClickAway) return;
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
      <XStack size='large' className={clsx(className, dialogClasses.root)}>
        <Box className={dialogClasses.content}>
          {heading && (
            <DialogTitle>
              <Stack direction='row' mb={1.5} mt={2} alignItems='center'>
                <Box mr={1}>
                  <WarningIcon />
                </Box>
                <Typography className={headingClasses.heading}>{heading}</Typography>
                <Box display='flex' ml='auto'>
                  <IconButton
                    onClick={() => {
                      onClose();
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                </Box>
              </Stack>
              <Box>
                <DividerBoth style={{ width: "100%" }} />
              </Box>
            </DialogTitle>
          )}
          {children}
        </Box>
      </XStack>
    </Dialog>
  );
};

export default XAlertBase;
