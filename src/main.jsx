import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {ThemeProvider, StyledEngineProvider, CssBaseline, Box} from '@mui/material';
import theme, {GlobalCss, useAppStyles} from './themes.jsx';
import clsx from 'clsx';

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
