import { Box, ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import Router from "./routes/components/Router";
import { AuthProvider } from "./contexts/auth";
import { themeOptions } from "./shared/themeOptions";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={themeOptions}>
      <Box className="main">
        <AuthProvider>
          <Router />
        </AuthProvider>
      </Box>
    </ThemeProvider>
  </React.StrictMode>
);
