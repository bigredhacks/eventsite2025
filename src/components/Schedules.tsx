import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Typography } from '@mui/material';
import friday from '../assets/schedule/friday.png';
import sat from '../assets/schedule/saturday.png';
import sun from '../assets/schedule/sunday.png';


const Schedules: React.FC = () => {

  function createData(time: string, event: string) {
    return { time, event };
  }
  
  const day1 = [
    createData('4:30 PM - 5:30 PM', 'Check-in'),
    createData('6:00 PM', 'Opening Ceremony'),
    createData('6:45 PM', 'Team Matching'),
    createData('7:00 PM', 'Dinner (Domino\'s)'),
    createData('7:10 PM - 8:00 PM', 'Workshop 1: Essential Brainstorming Tools'),
    createData('8:20 PM - 9:10 PM', 'Workshop 2: TBA'),
    createData('9:30 PM - 10:20 PM', 'Workshop 3: Intro to Machine Learning'),
    createData('11:30 PM', 'Hacker Project Summary Deadline'),
    createData('11:30 PM', 'Spicy Ramen Competition')
  ];
  const day2 = [
    createData('8:00 AM', 'Morning Event'),
    createData('9:00 AM', 'Breakfast: Bagels, donuts, and coffee'),
    createData('12:00 PM', 'Lunch (Wegman\'s Sandwiches)'),
    createData('11:00 AM - 11:50 PM', 'Workshop 1: Intro to Next.js / Fullstack Development'),
    createData('12:00 PM - 2:00 PM', 'Talk to Sponsors!'),
    createData('12:10 PM - 1:00 PM', 'Workshop 2: Intro to Github Copilot'),
    createData('1:20 PM - 2:10 PM', 'Workshop 3: Intro to ROS2'),
    createData('2:30 PM - 3:20 PM', 'Workshop 4: TBA'),
    createData('3:40 PM - 4:30 PM', 'Workshop 5: TBA'),
    createData('4:50 PM - 5:40 PM', 'Workshop 6: How to Pitch'),
    createData('7:00 PM', 'Dinner (Taste of Thai)'),
    createData('11:30 PM', 'Cup Stacking Competition')
  ];
  const day3 = [
    createData('8:00 AM', 'Breakfast: Bagels, donuts, and coffee'),
    createData('9:00 AM', 'Hacking Ends (Hard Deadline)'),
    createData('9:00 AM', 'Judging Begins'),
    createData('11:00 AM', 'Lunch (Firehouse Subs)'),
    createData('11:30 AM', 'Finalist Demos'),
    createData('12:00 PM', 'Judging is Finalized'),
    createData('12:15 PM', 'Closing Ceremony'),
    createData('1:00 PM', 'Hackathon Ends')
  ];
    
  return (
    <Box id="FAQ" sx={{ padding: { xs: '50px', md: '100px' }, backgroundColor: '#FFFCF4' }}>
    <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#388E3C', marginBottom: '20px' }}>
        Schedule
    </Typography>
    <Box sx={{paddingBottom: 5, display: 'flex', alignItems: 'center', flexDirection: {xs: 'column', md: 'row'}}} >
      <Box component="img" src={friday} sx={{
          width: {xs: '75%', md:'35%'},
          objectFit: 'cover',
          position: 'relative'
        }}></Box>
    <TableContainer component={Paper} sx={{ maxWidth: 1000}}>
      <Table aria-label="simple table">
        <TableHead sx={{background: "#00C844"}}>
          <TableRow>
            <TableCell sx={{color:'white', fontSize: '1.5rem', fontWeight: 900}}>Time</TableCell>
            <TableCell sx={{color:'white', fontSize: '1.5rem', fontWeight: 900}}>Event</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {day1.map((row, index) => (
            <TableRow
              key={row.time + row.event}
              sx={{
                backgroundColor: index % 2 ? '#FFFFFFF' : '#E0FFEB', // alternate color
                '&:last-child td, &:last-child th': { border: 0 },
              }}
            >
              <TableCell component="th" scope="row" sx = {{fontSize: '1.25rem'}}>
                {row.time}
              </TableCell>
              <TableCell  sx = {{fontSize: '1.25rem'}} >{row.event}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
    <Box sx={{paddingBottom: 5, display: 'flex', alignItems: 'center', flexDirection: {xs: 'column', md: 'row-reverse'}}} >
      <Box component="img" src={sat} sx={{
          width: {xs: '75%', md:'35%'},
          objectFit: 'cover',
          position: 'relative'
        }}></Box>
      
    <TableContainer component={Paper} sx = {{maxWidth: 1000}}>
      <Table sx={{ minWidth: 400 }} aria-label="simple table">
        <TableHead sx={{backgroundColor : "#1A4CFF"}}>
          <TableRow>
            <TableCell sx={{color:'white', fontSize: '1.5rem', fontWeight: 900}}>Time</TableCell>
            <TableCell sx={{color:'white', fontSize: '1.5rem', fontWeight: 900}}>Event</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {day2.map((row, index) => (
            <TableRow
              key={row.time + row.event}
              sx={{
                backgroundColor: index % 2 ? '#FFFFFF' : '#E1E8FF',
                '&:last-child td, &:last-child th': { border: 0 },
              }}
            >
              <TableCell component="th" scope="row" sx = {{fontSize: '1.25rem'}}>
                {row.time}
              </TableCell>
              <TableCell sx = {{fontSize: '1.25rem'}}>{row.event}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
    <Box sx={{paddingBottom: 5, display: 'flex', alignItems: 'center', flexDirection: {xs: 'column', md: 'row'}}} >
      <Box component="img" src={sun} sx={{
          width: {xs: '75%', md:'35%'},
          objectFit: 'cover',
          position: 'relative'
        }}></Box>
    <TableContainer component={Paper} sx={{maxWidth: 1000}}>
      <Table sx={{ minWidth: 400 }} aria-label="simple table">
        <TableHead sx={{backgroundColor: "#FE1736"}}>
          <TableRow>
            <TableCell sx={{color:'white', fontSize: '1.5rem', fontWeight: 900}}>Time</TableCell>
            <TableCell sx={{color:'white', fontSize: '1.5rem', fontWeight: 900}}>Event</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {day3.map((row, index) => (
            <TableRow
              key={row.time + row.event}
              sx={{
                backgroundColor: index % 2 ? '#FFFFFFF' : '#FFF1F3', // alternate color
                '&:last-child td, &:last-child th': { border: 0 },
              }}>
              <TableCell component="th" scope="row" sx = {{fontSize: '1.25rem'}}>
                {row.time}
              </TableCell>
              <TableCell sx = {{fontSize: '1.25rem'}}>{row.event}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
    </Box>
  );
}

export default Schedules;
