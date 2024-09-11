import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import brhlogo from '../assets/brh-logo.png';

const Header: React.FC = () => {
    return (
        <AppBar position="static" elevation={0} sx={{ backgroundColor: '#FFFCF4', color: '#000' }}>
            <Toolbar sx={{ justifyContent: 'space-between', width: 'calc(100vw - 225px)' }}>
                <Box display="flex" alignItems="center">
                    <img src={brhlogo} alt="Big Red Hacks Logo" style={{ height: '40px', marginRight: '10px' }} />
                </Box>
                <Box display="flex" alignItems="center">
                    {['About', 'Tracks', 'FAQ', 'Sponsors'].map((item) => (
                        <Button key={item} href={`#${item}`} color="inherit" sx={{ fontWeight: 'bold', margin: '0 10px' }}>
                            {item}
                        </Button>
                    ))}
                    <a href="https://apply.bigredhacks.com" target="_blank" rel="noreferrer">
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: '#FA3934',
                                fontWeight: 'bold',
                                textTransform: 'none',
                                marginLeft: '20px'
                            }}
                        >
                            Apply
                        </Button>
                    </a>
                    <a id="mlh-trust-badge" style={{ display: 'block', maxWidth: '100px', minWidth: '60px', position: 'fixed', right: '50px', top: '0', width: '10%', zIndex: '10000' }} href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2025-season&utm_content=red" target="_blank">
                        <img src="https://s3.amazonaws.com/logged-assets/trust-badge/2025/mlh-trust-badge-2025-red.svg" alt="Major League Hacking 2025 Hackathon Season" style={{ width: '100%' }} />
                    </a>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
