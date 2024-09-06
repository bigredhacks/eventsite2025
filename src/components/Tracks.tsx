import React from 'react';
import { Avatar, Box, Grid, List, ListItem, ListItemIcon, Typography } from '@mui/material';

const Tracks: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: '#FFFCF4', position: 'relative' }}>
      <Box sx={{paddingLeft: '100px'}}>
        <Box
          component='img'
          src={"src/assets/mug.png"}
          alt='Coffee Mug'
          sx={{ position: 'absolute', top: 0, right: 0, width: '30%' }}
        />
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
                <ListItemIcon sx={{ minWidth: 'auto', color: 'red' }}>
                  <Typography>
                    ●
                  </Typography>
                </ListItemIcon>
                <Typography color='#FA3934' variant='h6'>
                  <strong>Big Red</strong> - Every team is automatically entered and judged in all criteria <br />(technical, design, creativity, and overall impact).
                </Typography>
              </ListItem>
              <ListItem sx={{ alignItems: 'flex-start' }}>
                <ListItemIcon sx={{ minWidth: 'auto', color: 'red' }}>
                  <Typography>
                    ●
                  </Typography>
                </ListItemIcon>
                <Typography color='#EA9A00' variant='h6'>
                  <strong>Beginner</strong> - For first-time hackers.
                </Typography>
              </ListItem>
              <ListItem sx={{ alignItems: 'flex-start' }}>
                <ListItemIcon sx={{ minWidth: 'auto', color: 'red' }}>
                  <Typography>
                    ●
                  </Typography>
                </ListItemIcon>
                <Typography color='#1A4CFF' variant='h6'>
                  <strong>Hardware</strong> - For hardware hackers.
                </Typography>
              </ListItem>
              <ListItem sx={{ alignItems: 'flex-start' }}>
                <ListItemIcon sx={{ minWidth: 'auto', color: 'red' }}>
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
        {/* Regular Image */}
        <Box
          component="img"
          src="/src/components/spill.png"
          alt="Background"
          sx={{
            width: '100%',
            height: 'auto',
          }}
        />

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
          <Grid item xs={3}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Avatar src="src/assets/wellness.gif" sx={{ width: 150, height: 150 }} variant='rounded' />
              <Typography variant="h5" fontWeight="bold" color='white'>Wellness</Typography>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Avatar src="src/assets/productivity.gif" sx={{ width: 150, height: 150 }} variant='rounded' />
              <Typography variant="h5" fontWeight="bold" color='white'>Productivity</Typography>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Avatar src={'src/assets/entertainment.gif'} sx={{ width: 150, height: 150 }} variant='rounded' />
              <Typography variant="h5" fontWeight="bold" color='white'>Entertainment</Typography>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Avatar src="src/assets/community.gif" sx={{ width: 150, height: 150 }} variant='rounded' />
              <Typography variant="h5" fontWeight="bold" color='white'>Community</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>

  );
};

export default Tracks;