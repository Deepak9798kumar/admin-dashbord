import React from 'react';
import { Paper, Typography, Box, CircularProgress } from '@mui/material';

function NetProfitsCard() {
  return (
    <Paper className='list-item' sx={{ p: 2, background: '#262837', color: '#fff' }}>
<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
  <Box sx={{ position: 'relative', display: 'inline-flex', mb: 2 }}>
    <CircularProgress variant="determinate" value={70} size={120} thickness={7} sx={{ color: '#1e88e5' }} />
    <Box
      sx={{
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant="caption" component="div" color="textSecondary">70%</Typography>
    </Box>
  </Box>
  <Typography variant="h6" gutterBottom>Net Profit</Typography>
  <Typography variant="h4" gutterBottom>$6759.25</Typography>
  <Typography variant="body2" color="success.main">+3% from last week</Typography>
</Box>


      
    </Paper>
  );
}

export default NetProfitsCard;
