import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import { Router } from './routes';
import { Box } from '@mui/material';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Box className='main'>
      <Router />
    </Box>
  </React.StrictMode>,
)
