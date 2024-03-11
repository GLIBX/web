// src/theme.ts
import { createTheme } from '@mui/material/styles';

// Light theme with a whitish gradient background
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: 'linear-gradient(to right, #f5f7fa, #c3cfe2)',
    },
  },
});

// Dark theme with a blackish gradient background
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: 'linear-gradient(to right, #232526, #414345)',
    },
  },
});


