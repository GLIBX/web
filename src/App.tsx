// App.tsx
import React, { useState } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from './theme';
import Navbar from './components/Navbar';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Navbar darkMode={darkMode} handleThemeChange={() => setDarkMode(!darkMode)} />
   
    </ThemeProvider>
  );
}

export default App;
