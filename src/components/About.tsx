import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import Countdown from 'react-countdown';
import countdown from '../assets/countdown.png';

const formatTime = (time: any) => {
    return String(time).padStart(2, '0')
  }

  // Renderer callback
  const renderer = ({ total, days, hours, minutes, seconds }) => {
    if (total) {
      // Render a countdown
      return (
        <Box>
        <Box sx={{
          position: 'absolute',
          zIndex: 1,
          top: { xs: '40%', md: '40%', lg: '30%' },
          left: { xs: '50%', md: '48%', lg:'45%' },
          transform: 'translate(-50%, -50%)',
          textAlign: 'center'
        }}>

        <Typography sx={{
          fontSize: { xl: '3.3rem', lg: '2.65rem', md: '1.9rem', sm: '2.8rem', xs: '1.7rem'},
          marginTop: { xl: 3, lg: 3, md: -8, sm:-13, xs: -7},
          marginLeft: { lg: 5, md: 0, sm:-2, xs: -1},
          color: 'black'}} >
          {formatTime(days)}:{" "}{formatTime(hours)}:{" "}{formatTime(minutes)}:{" "}{formatTime(seconds)}
        </Typography>

        <Typography sx={{
          fontSize: { xl: '1.5rem', lg: '1.2rem', md: '1rem', sm: '1.4rem', xs: '.9rem'},
          marginLeft: { xl: 5, lg: 5, md: 0, sm: -2, xs: -1},
          wordSpacing: { xl: 25, lg: 20, md:10, sm:20, xs: 10},
          color: 'black'}}>
          days hours mins secs
        </Typography>
        </Box>
        <Box component="img" src={countdown} sx={{
          width: '100%',
          objectFit: 'cover',
          position: 'relative'
        }}></Box>
        </Box>
      );
    }
  };

const About: React.FC = () => {
  return (
    <Box id="About" sx={{ paddingLeft: { xs: '20px', md: '100px' }, backgroundColor: '#FFF7F0' }}>
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
        <Countdown date='2024-10-04T00:00:00' renderer={renderer}></Countdown>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
