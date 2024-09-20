import React from 'react';
import { Box, Grid, List, ListItem, ListItemIcon, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import mug from '../assets/mug.png';
import spill from '../assets/spill.png';
import tg from '../assets/together.png';
// import wellness from '../assets/wellness.gif';
// import productivity from '../assets/productivity.gif';
// import entertainment from '../assets/entertainment.gif';
// import community from '../assets/community.gif';

const Tracks: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  //const avatarSize = isMobile ? 60 : 150;
  return (
    <Box id="Tracks" sx={{ backgroundColor: '#FFFCF4', position: 'relative' }}>
      <Box sx={{ paddingLeft: isMobile ? '20px' : '100px' }}>
        {!isMobile &&
          <Box
            component='img'
            src={mug}
            alt='Coffee Mug'
            sx={{ position: 'absolute', top: 0, right: 0, width: '30%' }}
          />
        }
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#FA3934', marginBottom: '20px' }}>
          Tracks
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#000000', marginBottom: '10px' }}>
          Tracks provide a unique theme and goal for each team.
        </Typography>

        {/* Track Descriptions */}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List>
              <ListItem sx={{ alignItems: 'flex-start' }}>
                <ListItemIcon sx={{ minWidth: 'auto' }}>
                  <Typography>
                    ●
                  </Typography>
                </ListItemIcon>
                <Typography color='#FA3934' variant='h6'>
                  <strong>Big Red</strong> - Every team is automatically entered and judged in all criteria <br />(technical, design, creativity, and overall impact).
                </Typography>
              </ListItem>
              <ListItem sx={{ alignItems: 'flex-start' }}>
                <ListItemIcon sx={{ minWidth: 'auto' }}>
                  <Typography>
                    ●
                  </Typography>
                </ListItemIcon>
                <Typography color='#EA9A00' variant='h6'>
                  <strong>Beginner</strong> - For first-time hackers.
                </Typography>
              </ListItem>
              <ListItem sx={{ alignItems: 'flex-start' }}>
                <ListItemIcon sx={{ minWidth: 'auto' }}>
                  <Typography>
                    ●
                  </Typography>
                </ListItemIcon>
                <Typography color='#1A4CFF' variant='h6'>
                  <strong>Hardware</strong> - For hardware hackers.
                </Typography>
              </ListItem>
              <ListItem sx={{ alignItems: 'flex-start' }}>
                <ListItemIcon sx={{ minWidth: 'auto' }}>
                  <Typography>
                    ●
                  </Typography>
                </ListItemIcon>
                <Typography color='#009C35' variant='h6'>
                  <strong>People's Choice</strong> - Voted by hackers during the event.
                </Typography>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ position: 'relative' }}>
        {!isMobile ? (<Box
          component="img"
          src={spill}
          alt="Background"
          sx={{
            marginTop: -7.5,
            width: '100%',
            height: 'auto',
          }}
        />) :
          (<Box
            component="img"
            src={tg}
            alt="Background"
            sx={{
              width: '100%',
              height: 'auto',
            }}
          />)
        }
        <Grid
          container
          spacing={2}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 2,
          }}
        >
          {isMobile ? (
            <Typography color='white' sx={{ marginTop: '90px' }}>Theme revealed at opening ceremony!</Typography>
          ) : (
            <Typography color='white' variant='h5' sx={{ marginTop: '0px' }}>Theme revealed at opening ceremony!</Typography>
          )
          }
          {/* <Grid item xs={6} sm={3}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Avatar src={wellness} sx={{ width: avatarSize, height: avatarSize }} variant='rounded' />
              <Typography variant="h5" fontWeight="bold" color='white'>Wellness</Typography>
            </Box>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Avatar src={productivity} sx={{ width: avatarSize, height: avatarSize }} variant='rounded' />
              <Typography variant="h5" fontWeight="bold" color='white'>Productivity</Typography>
            </Box>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Avatar src={entertainment} sx={{ width: avatarSize, height: avatarSize }} variant='rounded' />
              <Typography variant="h5" fontWeight="bold" color='white'>Entertainment</Typography>
            </Box>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Avatar src={community} sx={{ width: avatarSize, height: avatarSize }} variant='rounded' />
              <Typography variant="h5" fontWeight="bold" color='white'>Community</Typography>
            </Box>
          </Grid> */}
        </Grid>
      </Box>
    </Box>

  );
};

export default Tracks;