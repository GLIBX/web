import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2', //
    },
    text: {
      primary: '#000000', 
    },
    background: {
      default: 'linear-gradient(to left, #f5f7fa, #c3cfe2)',
    },
    // other color settings
  },
  // other theme overrides
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#424242', // 
    },
    text: {
      primary: '#ffffff', // Light text for dark background
    },
    background: {
      default: 'linear-gradient(to right, #232526, #414345)',
    },
    // other color settings
  },
  // other theme overrides
});
