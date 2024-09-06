import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';

const Header: React.FC = () => {
    return (
        <AppBar position="static" elevation={0} sx={{ backgroundColor: '#FFFCF4', color: '#000' }}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Box display="flex" alignItems="center">
                    <img src="src/components/brh-logo.png" alt="Big Red Hacks Logo" style={{ height: '40px', marginRight: '10px' }} />
                </Box>
                <Box display="flex" alignItems="center">
                    {['About', 'Tracks', 'FAQ', 'Sponsors'].map((item) => (
                        <Button key={item} color="inherit" sx={{ fontWeight: 'bold', margin: '0 10px' }}>
                            {item}
                        </Button>
                    ))}
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
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
