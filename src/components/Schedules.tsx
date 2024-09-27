import { Grid, Paper, Typography } from '@mui/material';

const Schedules: React.FC = () => {
  const events = [
    { time: '4:00 pm', description: 'Check-In' },
    { time: '6:00 pm', description: 'Opening Ceremony' },
    { time: '6:45 pm', description: 'Team Matching' },
    { time: '7:00 pm', description: 'Dinner' },
  ];

  return (
    <Grid container spacing={2}>
      {events.map((event, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Paper elevation={3} sx={{ padding: 2, margin: 1 }}>
            <Typography variant="h6">{event.time}</Typography>
            <Typography variant="body1">{event.description}</Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}

export default Schedules;
