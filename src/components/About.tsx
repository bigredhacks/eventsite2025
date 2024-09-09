import React from 'react';
import { Box, Typography, Stack, Grid } from '@mui/material';
import Countdown from 'react-countdown';


const formatTime = (time: any) => {
    return String(time).padStart(2, '0')
  }

  // Renderer callback
  const renderer = ({ total, days, hours, minutes, seconds }) => {
    if (total) {
      // Render a countdown
      return (
        <span style={{ fontSize: 50, fontWeight: 400, color: 'black' }}>
          {formatTime(days)}:{" "}{formatTime(hours)}:{" "}{formatTime(minutes)}:{" "}{formatTime(seconds)}
        </span>
      );
    }
  };
  
const About: React.FC = () => {
    return (
        <Box sx={{ paddingLeft: '100px', backgroundColor: '#FFF7F0' }}>
            <Typography variant="h4" sx={{ fontWeight: 600, color: '#1A4CFF', marginBottom: '40px' }}>
                        About
            </Typography>
            <Grid container direction="row" spacing={2} sx={{ display: {xs: "block", md: "flex"}, justifyContent: "space-between", alignItems: "flex-start" }}>
            <Grid item xs={6} direction="column" spacing={2} >
                    <Typography variant="h5" display="block" sx={{ fontWeight: 600, color: '#000000' }}>
                        BigRed//Hacks is Cornell University’s tight-knit, student-run hackathon organization, attracting hundreds of students from around the globe.
                    </Typography>
                    <Typography variant="h6"  sx={{ fontWeight: 400, color: '#000000' }}>
                        Since our inception in 2014, we’ve been on a mission to foster technological innovation by creating an inclusive and collaborative environment.
                    </Typography>
                    <Typography variant="h6"  sx={{ fontWeight: 400, color: '#000000' }}>
                        We are committed to lowering the barriers to entry into technology, ensuring that all participants—regardless of background—have access to the resources they need.
                    </Typography>
            </Grid>
            <Grid item xs={6}>
                    <Box style={{ position: 'absolute', paddingLeft: 130, paddingTop: 40}}>
                        <Countdown date='2024-10-04T00:00:00' renderer={renderer}></Countdown>
                    </Box>
                    <Box style={{ position: 'absolute', paddingLeft: 130, paddingTop: 100}}>
                        <Typography variant="h6" style={{color: "#000000", wordSpacing: 30}}>days hours mins secs</Typography>
                    </Box>
                    <Box component="img" src="src/assets/countdown.png" sx={{
                        marginTop: {md: 0, lg: '-50px'},
                        width: '100%',
                        marginLeft: 0,
                        objectFit: 'cover'
                        }}></Box>
            </Grid>
            </Grid>
        </Box>

        
    );
};
export default About;