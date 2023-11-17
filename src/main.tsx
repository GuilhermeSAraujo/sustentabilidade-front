import { Box, ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import Router from "./routes/components/Router";
import { AuthProvider } from "./contexts/auth";
import { themeOptions } from "./shared/themeOptions";
import { QueryClientProvider } from "react-query";
import queryClient from "./shared/utils/reactQuery";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={themeOptions}>
        <Box className="main">
          <AuthProvider>
            <Router />
          </AuthProvider>
        </Box>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
