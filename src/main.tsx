import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import { Box } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import hashRouter from './routes/models/HashRouter';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Box className='main'>
      <RouterProvider router={hashRouter} />
    </Box>
  </React.StrictMode>,
)
