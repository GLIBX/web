import React from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';

const Hero = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md')); // Adjust breakpoint as needed

  return (
    <Box sx={{
        display: 'flex',
        flexDirection: matches ? 'row' : 'column-reverse', 
        alignItems: 'center',
        justifyContent: 'center',
        height: '80vh',
        width: '100%',
        px: { xs: 1, sm: 2, md: 3 }, // px is shorthand for padding left and right, responsive
      }}>
      <Box sx={{
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}}>
  <Box sx={{
    maxWidth: '100%',
    boxShadow: 10, // Adjust the shadow 
    border: '2px solid black', // This adds the black border
    transform: 'translateY(-8px)', // Lifts the video for the 3D effect
    '&:hover': {
      transform: 'translateY(-80px)', // Optional: increases the lift when hovering for more of a 3D effect
      boxShadow: 6,
    },
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out', // Smooth transition for the hover effect
  }}>
    <video 
      autoPlay 
      loop 
      muted 
      style={{
        width: '100%', 
        display: 'block', 
      }}
    >
      <source src="https://glibx-assets.s3.amazonaws.com/glibx-welcome-video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </Box>
</Box>

      <Box sx={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(4),
      }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Blockchain Infrastructure, Lab & Venture
        </Typography>
        <Typography variant="h6">
          Running validator nodes, building blockchain protocols, and investing in promising blockchain projects.
        </Typography>
      </Box>
    </Box>
  );
};

export default Hero;
