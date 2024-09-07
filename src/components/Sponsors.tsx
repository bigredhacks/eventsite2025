import React from 'react';
import { Box, Typography } from '@mui/material';

const Sponsors: React.FC = () => {
    return (
        <Box id="Sponsors" sx={{ padding: '100px', backgroundColor: '#FFFCF4', marginTop: '-105px' }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#EA9A00', marginBottom: '20px' }}>
                Sponsors
            </Typography>
            <Typography variant='h4' textAlign={"center"} sx={{ fontWeight: 'bold', color: '#000000' }}>
                Coming soon!
            </Typography>
            <Typography variant='h5' textAlign={"center"} sx={{ fontWeight: 'bold', marginTop: '30px', color: '#000000' }}>
                Want to sponsor us?
            </Typography>
            <Typography variant='h6' textAlign={"center"} sx={{ color: '#000000' }}>
                We're still accepting sponsors for our 2024 event!
                Send us an email at <a href="mailto:bigredhacks@cornell.edu">bigredhacks@cornell.edu</a>
            </Typography>

        </Box>
    );
};

export default Sponsors;