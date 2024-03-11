import React from 'react';
import { AppBar, Toolbar, Container, Switch, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

interface NavbarProps {
  darkMode: boolean;
  handleThemeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, handleThemeChange }) => {
  const logo = darkMode ? '/logo-white.png' : '/logo-black.png';

  return (
    <AppBar position="static" sx={{
      background: 'transparent',
      boxShadow: 'none',
      color: (theme) => theme.palette.text.primary // 
    }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
            <img src={logo} alt="Glix VC Venture Logo" style={{ maxHeight: '100px', marginRight: '10px' }} />
          </Link>
          <Box sx={{ flexGrow: 1 }} /> {/* This pushes the menu items to the right */}
          
          {/* Navigation menu items */}
          <Button color="inherit" component={Link} to="/about-us">About Us</Button>
          <Button color="inherit" component={Link} to="/portfolio">Portfolio</Button>
          <Button color="inherit" component={Link} to="/team">Team</Button>

          {/* Theme switch */}
          <Switch checked={darkMode} onChange={handleThemeChange} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
