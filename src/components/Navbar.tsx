import React, { useState } from 'react';
import { AppBar, Toolbar, Container, Switch, Box, Button, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // Import the hamburger icon
import { Link } from 'react-router-dom';

interface NavbarProps {
  darkMode: boolean;
  handleThemeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, handleThemeChange }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const logo = darkMode ? '/logo-white.png' : '/logo-black.png';

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems = [
    { name: 'About Us', path: '/about-us' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Team', path: '/team' },
  ];

  return (
    <AppBar position="static" sx={{
      background: 'transparent',
      boxShadow: 'none',
      color: (theme) => theme.palette.text.primary 
    }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }} // Only show the icon on small screens
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: 'block', sm: 'none' }, // Only show the drawer on small screens
            }}
          >
            <Box
              sx={{ width: 250 }}
              role="presentation"
              onClick={handleDrawerToggle}
              onKeyDown={handleDrawerToggle}
            >
              <List>
                {menuItems.map((item) => (
                  <ListItem button key={item.name} component={Link} to={item.path}>
                    <ListItemText primary={item.name} />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
            <img src={logo} alt="Glix Labs Logo" style={{ maxHeight: '100px', marginRight: '10px' }} />
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}> {/* Hide these buttons on small screens */}
            {menuItems.map((item) => (
              <Button color="inherit" component={Link} to={item.path} key={item.name}>
                {item.name}
              </Button>
            ))}
          </Box>
          {/* Theme switch */}
          <Switch checked={darkMode} onChange={handleThemeChange} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
