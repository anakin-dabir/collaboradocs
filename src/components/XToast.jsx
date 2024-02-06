import React, {useState, useEffect} from 'react';
import {Typography, Box, Alert, Snackbar, Stack, LinearProgress, Slide} from '@mui/material';
import clsx from 'clsx';
import theme, {useGuiSnackbarStyles} from '../themes';
import {ReactComponent as SuccessIcon} from '../img/successIcon.svg';
import {ReactComponent as WarningIcon} from '../img/warningIcon.svg';
import {ReactComponent as ErrorIcon} from '../img/errorIcon.svg';
import {ReactComponent as InfoIcon} from '../img/infoIcon.svg';
import {ReactComponent as SnackbarTopCenterIcon} from '../img/snackbarTopCenterIcon.svg';

const XToast = ({
  isOpen,
  onClose,
  heading = 'Notification received',
  message = 'oy ye ek test message hai reply na krna...',
  severity = 'success',
  children,
  ...props
}) => {
  const [progress, progressSet] = useState(100);
  const snackbarClasses = useGuiSnackbarStyles();

  const colors = {
    success: 'rgb(51, 136, 50)',
    error: 'rgb(211, 47, 47)',
    warning: 'rgb(255, 152, 0)',
    info: 'rgb(0, 148, 255)',
  };

  const icons = {
    success: <SuccessIcon />,
    error: <ErrorIcon />,
    warning: <WarningIcon />,
    info: <InfoIcon />,
  };
  useEffect(() => {
    if (isOpen) {
      const timer = setInterval(() => {
        progressSet(prevProgress => {
          const newProgress = prevProgress - 10;
          return newProgress <= 0 ? 0 : newProgress;
        });
      }, 400);
      return () => {
        clearInterval(timer);
      };
    } else {
      progressSet(100);
    }
  }, [isOpen]);
  return (
    <Box sx={{position: 'relative'}}>
      <Snackbar
        className={clsx(snackbarClasses.closeIcon, snackbarClasses.root)}
        open={isOpen}
        autoHideDuration={4136}
        onClose={onClose}
        anchorOrigin={{vertical: 'top', horizontal: 'center'}}
        TransitionComponent={SlideTransition}
      >
        <Box
          sx={{
            border: `2px solid ${theme.palette.primary.main}`,
          }}
        >
          <SnackbarTopCenterIcon
            className={clsx(snackbarClasses.border, snackbarClasses.top_center_border)}
          />
          <Box className={snackbarClasses.header}>
            <Stack direction='row' alignItems='center' spacing={1} sx={{padding: '1rem'}}>
              <Box>{icons[severity]}</Box>
              <Box>
                <Typography sx={{fontSize: '19px'}}>{heading}!</Typography>
              </Box>
            </Stack>
          </Box>
          <Alert
            icon={<></>}
            onClose={onClose}
            sx={{width: '25vw', background: 'rgba(0, 24, 44, 1)', borderRadius: '0px'}}
            {...props}
          >
            <Box pt={1} pb={4}>
              <Typography sx={{color: 'rgba(245, 244, 244, 1)'}}>{message}</Typography>
            </Box>
          </Alert>
          {
            <LinearProgress
              sx={{
                bgcolor: 'transparent',
                '& .MuiLinearProgress-bar': {
                  bgcolor: `${colors[severity]}`,
                },
              }}
              variant='determinate'
              value={progress}
              className={snackbarClasses.progress}
            />
          }
        </Box>
      </Snackbar>
    </Box>
  );
};
export default XToast;

function SlideTransition(props) {
  return <Slide {...props} direction='down' appear />;
}
