import React from 'react';
import { Box } from '@mui/material';
import hero from '../assets/hero-full.png';

const Hero: React.FC = () => {
    return (
        <Box display="flex" alignItems="center">
            <img src={hero} style={{
                // height: '80vh',
                margin: 'auto',
                width: '100%'
            }} />
        </Box>
    );
};

export default Hero;