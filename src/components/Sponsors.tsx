import { Box, Card, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import ey from '../assets/ey.png';
import klaviyo from '../assets/klaviyo.png';
import pinata from '../assets/pinata.png';
import scm from '../assets/scm.png';
import sos from '../assets/stand_out_stickers.png';

const sponsors = [
    { name: 'Pinata', img: pinata, link: 'https://pinata.cloud/' },
    { name: 'Klaviyo', img: klaviyo, link: 'https://www.klaviyo.com/' },
    { name: 'EY', img: ey, link: 'https://www.ey.com/en_us' },
    { name: 'SCM', img: scm, link: 'https://www.scm-lp.com/' },
    { name: 'Stand Out Stickers', img: sos, link: 'http://hackp.ac/mlh-StandOutStickers-hackathons' }
];

const Sponsors: React.FC = () => {
    return (
        <Box>
            <Box id='Sponsors' sx={{ paddingLeft: '100px', backgroundColor: '#FFFCF4' }}>
                <Typography variant='h4' sx={{ fontWeight: 'bold', color: '#EA9A00', marginBottom: '20px' }}>
                    Sponsors
                </Typography>
            </Box>
            <Grid container spacing={4} justifyContent='center' alignItems='stretch' paddingBottom='100px' paddingX={{ xs: '150px', sm: '160px', md: '50px' }}>
                {sponsors.map((sponsor, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4} lg={2}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-end',
                                height: '100%'
                            }}
                        >
                            <Card elevation={0}>
                                <a href={sponsor.link} target='_blank'>
                                    <CardMedia component='img' image={sponsor.img} alt={`${sponsor.name} logo`} sx={{ backgroundColor: '#FFFCF4' }} />
                                </a>
                            </Card>
                        </Box>
                    </Grid>
                ))}
            </Grid>
            {/* <Typography variant='h5' textAlign={"center"} sx={{ fontWeight: 'bold', marginTop: '30px', color: '#000000' }}>
                    Want to sponsor us?
                </Typography>
                <Typography variant='h6' textAlign={"center"} sx={{ color: '#000000' }}>
                    We're still accepting sponsors for our 2024 event!
                    Send us an email at <a href="mailto:bigredhacks@cornell.edu">bigredhacks@cornell.edu</a>
                </Typography> */}
        </Box>
    );
};

export default Sponsors;
