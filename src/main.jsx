import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {ThemeProvider, StyledEngineProvider, CssBaseline} from '@mui/material';
import theme, {GlobalCss} from './themes.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      <GlobalCss />
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StyledEngineProvider>
);
