import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
    return (
        <Box
            sx={{
                backgroundColor: '#E46966',
                color: '#FFFFFF',
                paddingTop: '20px',
                paddingBottom: '20px',
                textAlign: 'center',
                fontWeight: 'bold',
                fontFamily: 'Arial, sans-serif',
                bottom: 0,
                width: '100%',
            }}
        >
            <Typography variant="body1">
                Brewed with ❤️ by <span style={{ fontWeight: 'bolder' }}>Big Red // Hacks Team</span>
            </Typography>
            <Typography variant='body1'>
                <a href="https://hackp.ac/coc">MLH Code of Conduct</a>
            </Typography>
        </Box>
    );
};

export default Footer;