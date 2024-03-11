// App.tsx
import React, { useState, useEffect } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from './theme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = darkMode ? darkTheme : lightTheme;

  // Apply the theme background to the body
  useEffect(() => {
    document.body.style.background = theme.palette.background.default;
  }, [theme]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar darkMode={darkMode} handleThemeChange={() => setDarkMode(!darkMode)} />
      <Hero />
    </ThemeProvider>
  );
}

export default App;
