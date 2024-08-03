import React from 'react';
import { Grid, Box } from '@mui/material';
import OrdersCard from './OrdersCard';
import RevenueCard from './RevenueCard';
import ActivityChart from './ActivityChart';
import RecentOrders from './RecentOrders';
import Feedback from './Feedback';
import NetProfitsCard from './NetProfitsCard';
import GoalsCard from './GoalsCard';
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import AirportShuttleOutlinedIcon from '@mui/icons-material/AirportShuttleOutlined';
import EventBusyOutlinedIcon from '@mui/icons-material/EventBusyOutlined';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';

function Dashboard() {
  return (
    <Box sx={{ flexGrow: 1, pt: 8 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <OrdersCard
            title="Total Orders"
            count="75"
            percentageChange="+3%"
            color="#44c1ff"
            icon={<ShoppingCartCheckoutOutlinedIcon sx={{ fontSize: 45, color: '#44c1ff', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }} />}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <OrdersCard
            title="Total Delivery"
            count="75"
            percentageChange="+3%"
            color="#4caf50"
            icon={<AirportShuttleOutlinedIcon sx={{ fontSize: 40, color: '#4caf50', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }} />}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <OrdersCard
            title="Total Cancelled"
            count="75"
            percentageChange="+3%"
            color="#ff314b"
            icon={<EventBusyOutlinedIcon sx={{ fontSize: 40, color: '#ff314b', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }} />}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <OrdersCard
            title="Total Revenue"
            count="5"
            percentageChange="-3%"
            color="#fd42ed"
            icon={<InsertChartOutlinedIcon sx={{ fontSize: 40, color: '#fd42ed', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }} />}
          />
        </Grid>
        {/* <Grid item xs={12} md={3}>
          <RevenueCard />
        </Grid> */}
        <Grid item xs={12} md={6}>
          <ActivityChart />
        </Grid>
        <Grid item xs={12} md={3}>
          <GoalsCard />
        </Grid>
        <Grid item xs={12} md={3}>
          <NetProfitsCard />
        </Grid>
        <Grid item xs={12} md={6}>
          <RecentOrders />
        </Grid>
        <Grid item xs={12} md={6}>
          <Feedback />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard;
