import React from 'react';
import { Box, Container, Typography, IconButton, Link as MuiLink } from '@mui/material';
import { FaTwitter, FaInstagram, } from 'react-icons/fa'; // Import social media icons

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const startYear = 2019;

  return (
    <Box component="footer" sx={{ bgcolor: 'transparent', py: 6 }}>
      <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
        <Box sx={{ mb: 2 }}>
          {/* Social Icons */}
          <IconButton component="a" href="https://twitter.com/glibxinc" aria-label="Twitter" target="_blank">
            <FaTwitter />
          </IconButton>
          <IconButton component="a" href="https://instagram.com/glibxinc" aria-label="Instagram" target="_blank">
            <FaInstagram />
          </IconButton>
        </Box>
        <Typography variant="body2" color="text.secondary" align="center">
          © {startYear}-{currentYear} Glibx. All rights reserved.
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          Contact us at: 
          <MuiLink href="mailto:info@glibx.com" sx={{ ml: 0.5 }}>
            info@glibx.com
          </MuiLink>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
