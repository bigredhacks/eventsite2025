import React, { useState } from 'react';
import { Avatar, Box, Grid, List, ListItem, ListItemIcon, Typography } from '@mui/material';

const Tracks: React.FC = () => {
  const [avatarSrc, setAvatarSrc] = useState('src/assets/doggy.png');

  const handleMouseEnter = () => {
    setAvatarSrc('src/assets/doggy.gif');
  };

  const handleMouseLeave = () => {
    setAvatarSrc('src/assets/doggy.png');
  };

  return (
    <Box sx={{ padding: '40px', backgroundColor: '#FFFCF4', position: 'relative' }}>
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
              <Typography color='#FA3934'>
                <strong>Big Red</strong> - Every team is automatically entered and judged in all criteria (technical, design, creativity, and overall impact).
              </Typography>
            </ListItem>
            <ListItem sx={{ alignItems: 'flex-start' }}>
              <ListItemIcon sx={{ minWidth: 'auto', color: 'red' }}>
                <Typography>
                  ●
                </Typography>
              </ListItemIcon>
              <Typography color='#EA9A00'>
                <strong>Beginner</strong> - For first-time hackers.
              </Typography>
            </ListItem>
            <ListItem sx={{ alignItems: 'flex-start' }}>
              <ListItemIcon sx={{ minWidth: 'auto', color: 'red' }}>
                <Typography>
                  ●
                </Typography>
              </ListItemIcon>
              <Typography color='#1A4CFF'>
                <strong>Hardware</strong> - For hardware hackers.
              </Typography>
            </ListItem>
            <ListItem sx={{ alignItems: 'flex-start' }}>
              <ListItemIcon sx={{ minWidth: 'auto', color: 'red' }}>
                <Typography>
                  ●
                </Typography>
              </ListItemIcon>
              <Typography color='#009C35'>
                <strong>People's Choice</strong> - Voted by hackers during the event.
              </Typography>
            </ListItem>
          </List>
        </Grid>
      </Grid>

      {/* Icons and Labels for Wellness, Productivity, Entertainment, Community */}
      <Grid container item xs={12} spacing={2} sx={{ mt: 4 }} bgcolor='#5D5040'>
        <Grid item xs={3}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Avatar src="src/assets/wellness.png" sx={{ width: 56, height: 56 }} />
            <Typography variant="subtitle1" fontWeight="bold" color='white'>Wellness</Typography>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Avatar src="path-to-productivity-icon.png" sx={{ width: 56, height: 56 }} />
            <Typography variant="subtitle1" fontWeight="bold" color='white'>Productivity</Typography>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Avatar src={avatarSrc} sx={{ width: 56, height: 56 }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
            <Typography variant="subtitle1" fontWeight="bold" color='white'>Entertainment</Typography>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Avatar src="src/assets/productivity.png" sx={{ width: 56, height: 56 }} />
            <Typography variant="subtitle1" fontWeight="bold" color='white'>Community</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Tracks;