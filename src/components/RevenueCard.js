import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

function RevenueCard() {
  return (
    <Paper className='list-item' sx={{ p: 2, display: 'flex', alignItems: 'center', background: '#262837', color: '#fff' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mr: 6 }}>
        <AttachMoneyIcon fontSize="large" />
        <Typography>Revenue</Typography>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h4">$12k</Typography>
        <Typography>-3% from last week</Typography>
      </Box>
    </Paper>
  );
}

export default RevenueCard;
