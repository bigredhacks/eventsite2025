import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
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
            <span style={{ fontSize: 56, fontWeight: 400, color: 'black' }}>
                {formatTime(days)}:{" "}{formatTime(hours)}:{" "}{formatTime(minutes)}:{" "}{formatTime(seconds)}
            </span>
        );
    }
};

const About: React.FC = () => {
    return (
        <Box id="About" sx={{ paddingLeft: '100px', backgroundColor: '#FFFCF4' }}>
            <Typography variant="h4" sx={{ fontWeight: 600, color: '#1A4CFF', marginBottom: '40px' }}>
                About
            </Typography>
            <Stack direction="row" spacing={2}>
                <Stack direction="column" width={'45%'} spacing={2}>
                    <Typography variant="h5" display="block" sx={{ fontWeight: 600, color: '#000000' }}>
                        BigRed//Hacks is Cornell University’s tight-knit, student-run hackathon organization, attracting hundreds of students from around the globe.
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 400, color: '#000000' }}>
                        Since our inception in 2014, we’ve been on a mission to foster technological innovation by creating an inclusive and collaborative environment.
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 400, color: '#000000' }}>
                        We are committed to lowering the barriers to entry into technology, ensuring that all participants—regardless of background—have access to the resources they need.
                    </Typography>
                </Stack>
                <Box display="flex">
                    <Box style={{ position: 'absolute', paddingLeft: 160, paddingTop: 70 }}>
                        <Countdown date='2024-10-04T00:00:00' renderer={renderer}></Countdown>
                    </Box>
                    <Box style={{ position: 'absolute', paddingLeft: 160, paddingTop: 140 }}>
                        <Typography variant="h5" style={{ color: "#000000", wordSpacing: 30 }}>days hours mins secs</Typography>
                    </Box>
                    <img src={countdown} style={{
                        marginTop: '-50px',
                        marginLeft: 'auto',
                        width: '100%',
                        textAlign: 'right'
                    }} />
                </Box>
            </Stack>
        </Box>
    );
};
export default About;