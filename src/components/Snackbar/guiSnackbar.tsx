import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import {
  Typography,
  Box,
  Alert,
  Snackbar,
  Stack,
  LinearProgress,
  Slide,
  SlideProps,
} from "@mui/material";
import clsx from "clsx";
import theme, { useGuiSnackbarStyles } from "../../themes/themes";
import { ISnackbar } from "../../types/snackbar.interface";
import { ReactComponent as SuccessIcon } from "./../../img/successIcon.svg";
import { ReactComponent as WarningIcon } from "./../../img/warningIcon.svg";
import { ReactComponent as ErrorIcon } from "./../../img/errorIcon.svg";
import { ReactComponent as InfoIcon } from "./../../img/infoIcon.svg";
import { ReactComponent as SnackbarTopCenterIcon } from "./../../img/snackbarTopCenterIcon.svg";

interface GuiSnackbarProps {
  snackbar: ISnackbar;
  snackbarSet: Dispatch<SetStateAction<ISnackbar>>;
}

function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction="down" />;
}

const GuiSnackbar = ({ snackbar, snackbarSet }: GuiSnackbarProps) => {
  const [progress, progressSet] = useState(100);
  const snackbarClasses = useGuiSnackbarStyles();

  const colors = {
    success: "rgb(51, 136, 50)",
    error: "rgb(211, 47, 47)",
    warning: "rgb(255, 152, 0)",
    info: "rgb(0, 148, 255)",
  };
  const icons = {
    success: <SuccessIcon />,
    error: <ErrorIcon />,
    warning: <WarningIcon />,
    info: <InfoIcon />,
  };
  useEffect(() => {
    if (snackbar.open) {
      const timer = setInterval(() => {
        progressSet((prevProgress) => {
          return prevProgress <= 0 ? 0 : prevProgress - 10;
        });
      }, 400);
      return () => {
        progressSet(0);
        clearInterval(timer);
      };
    }
  }, [snackbar.open]);
  return (
    <Box sx={{ position: "relative" }}>
      <Snackbar
        className={clsx(snackbarClasses.closeIcon, snackbarClasses.root)}
        open={snackbar.open}
        autoHideDuration={4315}
        onClose={() => {
          snackbarSet({ ...snackbar, open: false });
        }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        TransitionComponent={SlideTransition}
        TransitionProps={{ onExited: () => progressSet(100) }}
      >
        <Box
          sx={{
            border: `2px solid ${theme.palette.primary.main}`,
            borderRadius: "5px",
          }}
        >
          <SnackbarTopCenterIcon
            className={clsx(
              snackbarClasses.border,
              snackbarClasses.top_center_border
            )}
          />
          <Box className={snackbarClasses.header}>
            <Stack direction="row" spacing={1} sx={{ padding: "1rem" }}>
              <Box>{icons[snackbar.severity]}</Box>
              <Box>
                <Typography sx={{ fontSize: "20px" }}>
                  {snackbar.messageType}!
                </Typography>
              </Box>
            </Stack>
          </Box>
          <Alert
            icon={<></>}
            onClose={() => snackbarSet({ ...snackbar, open: false })}
            severity="success"
            sx={{ width: "30.55vw", background: "rgba(0, 24, 44, 1)" }}
          >
            <Box pt={1} pb={4}>
              <Typography sx={{ color: "rgba(245, 244, 244, 1)" }}>
                {snackbar.content}
              </Typography>
            </Box>
          </Alert>
          {
            <LinearProgress
              sx={{
                bgcolor: "transparent",
                "& .MuiLinearProgress-bar": {
                  bgcolor: `${colors[snackbar.severity]}`,
                },
              }}
              variant="determinate"
              value={progress}
              className={snackbarClasses.progress}
            />
          }
        </Box>
      </Snackbar>
    </Box>
  );
};

export default GuiSnackbar;
