import React from 'react';
import { Box, Typography } from '@mui/material';

const Sponsors: React.FC = () => {
    return (
        <Box sx={{ padding: '100px', backgroundColor: '#FFFCF4', marginTop:'-105px'  }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#EA9A00', marginBottom: '20px' }}>
                Sponsors
            </Typography>
            <Typography variant='h4' textAlign={"center"} sx={{ fontWeight: 'bold' }}>
                Coming soon!
            </Typography>
            <Typography variant='h5' textAlign={"center"} sx={{ fontWeight: 'bold', marginTop: '30px' }}>
                Want to sponsor us?
            </Typography>
            <Typography variant='h6' textAlign={"center"}>
                We're still accepting sponsors for our 2024 event! 
                Send us an email at <a href="mailto:bigredhacks@cornell.edu">bigredhacks@cornell.edu</a>
            </Typography>

        </Box>
    );
};

export default Sponsors;