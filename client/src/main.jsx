import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { LicenseInfo } from "@mui/x-date-pickers-pro";
import { ThemeProvider, StyledEngineProvider, CssBaseline } from "@mui/material";
import theme, { GlobalCss } from "./themes.jsx";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";
import store, { persistor } from "./store/store.js";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import XToast from "./components/XToast";

LicenseInfo.setLicenseKey(
  "42b4128b931a7b8884d7123880a6fe3bTz02NjQ5OCxFPTE3MTU3NzcyNDg1MDEsUz1wcm8sTE09c3Vic2NyaXB0aW9uLEtWPTI="
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <GlobalCss />
            <CssBaseline />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <XToast />
              <App />
            </LocalizationProvider>
          </ThemeProvider>
        </StyledEngineProvider>
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
