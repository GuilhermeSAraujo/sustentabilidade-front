import { Box } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import Router from "./routes/components/Router";
import { AuthProvider } from "./contexts/auth";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Box className="main">
      <AuthProvider>
        <Router />
      </AuthProvider>
    </Box>
  </React.StrictMode>
);
