import { createTheme } from '@mui/material';

export const themeOptions = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#124a12',
    },
    secondary: {
      main: '#0019f5',
    },
    background: {
      default: '#9feca2',
      paper: '#fafafa',
    },
  },
});