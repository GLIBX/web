import React from 'react';
import { Box, Container, Typography, Link as MuiLink } from '@mui/material';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Gets the current year
  const startYear = 2019; 

  return (
    <Box component="footer" sx={{ bgcolor: 'transparent', py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary" align="center">
          © {startYear}-{currentYear} Glibx. All rights reserved.
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          Contact us at: 
          <MuiLink href="mailto:info@glibx.com" sx={{ ml: 0.5, color: 'green' }}>
            info@glibx.com
          </MuiLink>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
