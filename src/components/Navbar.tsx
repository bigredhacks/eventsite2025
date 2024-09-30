import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import React from 'react';
import brhlogo from '../assets/brh-logo.png';

const Header: React.FC = () => {
    const pages = ['About', 'Tracks', 'Schedule', 'FAQ', 'Sponsors'];
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <>
            <AppBar position='static' elevation={0} sx={{ background: 'none', color: 'black' }}>
                <Toolbar sx={{ justifyContent: 'space-between', width: { xs: 'calc(100vw - 200px)', md: 'calc(100vw - 225px)' } }}>
                    <Box display={{ xs: 'none', md: 'flex' }} alignItems='center'>
                        <img src={brhlogo} alt='Big Red Hacks Logo' style={{ height: '50px', marginRight: '10px' }} />
                    </Box>
                    {/* Responsive Hamburger Menu */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton size='large' aria-label='account of current user' aria-controls='menu-appbar' aria-haspopup='true' onClick={handleOpenNavMenu} color='inherit'>
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id='menu-appbar'
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left'
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left'
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            {pages.map(page => (
                                <MenuItem key={page} onClick={handleCloseNavMenu} component='a' href={`#${page}`}>
                                    <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box display='flex' alignItems='center'>
                        {/* Regular menu */}
                        <Box display={{ xs: 'none', md: 'flex' }}>
                            {pages.map(item => (
                                <Button key={item} href={`#${item}`} color='inherit' sx={{ fontWeight: 'bold', margin: '0 10px', fontSize: 15 }}>
                                    {item}
                                </Button>
                            ))}
                        </Box>

                        <a href='https://apply.bigredhacks.com' target='_blank' rel='noreferrer'>
                            <Button
                                variant='contained'
                                sx={{
                                    backgroundColor: '#FA3934',
                                    fontWeight: 'bold',
                                    textTransform: 'none',
                                    marginLeft: '20px',
                                    fontSize: 15
                                }}
                            >
                                Apply
                            </Button>
                        </a>
                    </Box>
                </Toolbar>
            </AppBar>
            <a id='mlh-trust-badge' style={{ display: 'block', maxWidth: '100px', minWidth: '60px', right: '50px', top: '0px', position: 'absolute', width: '10%' }} href='https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2025-season&utm_content=red' target='_blank'>
                <img src='https://s3.amazonaws.com/logged-assets/trust-badge/2025/mlh-trust-badge-2025-red.svg' alt='Major League Hacking 2025 Hackathon Season' style={{ width: '100%' }} />
            </a>
        </>
    );
};

export default Header;
