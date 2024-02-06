import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {LicenseInfo} from '@mui/x-date-pickers-pro';
import {ThemeProvider, StyledEngineProvider, CssBaseline, Box} from '@mui/material';
import theme, {GlobalCss, useAppStyles} from './themes.jsx';
import clsx from 'clsx';

LicenseInfo.setLicenseKey(
  '42b4128b931a7b8884d7123880a6fe3bTz02NjQ5OCxFPTE3MTU3NzcyNDg1MDEsUz1wcm8sTE09c3Vic2NyaXB0aW9uLEtWPTI='
);

const PageContainer = ({children}) => {
  const classes = useAppStyles();

  return (
    <>
      {/* <TopBar /> */}
      {/* <AppDrawer /> */}
      <Box className={classes.content}>
        <Box
          className={clsx(classes.pageContainer, {
            // [classes.pageShift]: drawerOpen,
          })}
        >
          <Box pl={4} pb={10} pr={8}>
            {children}
          </Box>
        </Box>
      </Box>
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      <GlobalCss />
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StyledEngineProvider>
);
