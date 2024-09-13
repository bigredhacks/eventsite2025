import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import Countdown from 'react-countdown';

const formatTime = (time: any) => {
    return String(time).padStart(2, '0')
  }

  // Renderer callback
  const renderer = ({ total, days, hours, minutes, seconds }) => {
    if (total) {
      // Render a countdown
      return (
        <Typography sx={{ 
          typography: { lg: 'h2', md: 'h4', sm: 'h4', xs: 'h5'},
          marginTop: { lg: 5, md: -5, sm:-10, xs: -5}, 
          marginLeft: { lg: 5, md: 0, xs: -3}, 
          color: 'black'}} >
          {formatTime(days)}:{" "}{formatTime(hours)}:{" "}{formatTime(minutes)}:{" "}{formatTime(seconds)}
        </Typography>
      );
    }
  };
  
const About: React.FC = () => {
  return (
    <Box sx={{ paddingLeft: { xs: '20px', md: '100px' }, backgroundColor: '#FFF7F0' }}>
      <Typography variant="h4" sx={{ fontWeight: 600, color: '#1A4CFF', marginBottom: '40px' }}>
        About
      </Typography>
      <Grid container spacing={2} sx={{ justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" display="block" sx={{ fontWeight: 600, color: '#000000' }}>
            BigRed//Hacks is Cornell University’s tight-knit, student-run hackathon organization, attracting hundreds of students from around the globe.
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 400, color: '#000000', marginTop: '20px' }}>
            Since our inception in 2014, we’ve been on a mission to foster technological innovation by creating an inclusive and collaborative environment.
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 400, color: '#000000', marginTop: '10px' }}>
            We are committed to lowering the barriers to entry into technology, ensuring that all participants—regardless of background—have access to the resources they need.
          </Typography>
        </Grid>

        <Grid item xs={12} md={6} sx={{ position: 'relative' }}>
          <Box sx={{
            position: 'absolute',
            zIndex: 1,
            top: { xs: '40%', md: '40%', lg: '30%' },
            left: { xs: '50%', md: '48%', lg:'45%' },
            transform: 'translate(-50%, -50%)',
            textAlign: 'center'
          }}>
            <Countdown date='2024-10-04T00:00:00' renderer={renderer}></Countdown>
            <Typography sx={{ 
              typography: { lg: 'h5', md: 'h6', sm: 'body1', xs: 'body1'},
              marginLeft: { lg: 5, md: 0, xs: -3},
              wordSpacing: { lg: 40, md:10, sm:10, xs: 5}, 
              color: 'black'}}>
              days hours mins secs
            </Typography>
          </Box>
          <Box component="img" src="src/assets/countdown.png" sx={{
            width: '100%',
            objectFit: 'cover',
            position: 'relative'
          }}></Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
