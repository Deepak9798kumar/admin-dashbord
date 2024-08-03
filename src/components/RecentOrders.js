import React from 'react';
import { Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const orders = [
  { customer: 'Wade Warren', orderNo: '15478256', amount: '$124.00', status: 'Delivered' },
  { customer: 'Jane Cooper', orderNo: '48965786', amount: '$305.02', status: 'Delivered' },
  { customer: 'Guy Hawkins', orderNo: '78985215', amount: '$45.88', status: 'Cancelled' },
  { customer: 'Kristin Watson', orderNo: '20965732', amount: '$56.00', status: 'Pending' },
  { customer: 'Cody Fisher', orderNo: '95715620', amount: '$545.00', status: 'Delivered' },
  { customer: 'Savannah Nguyen', orderNo: '78514568', amount: '$128.20', status: 'Delivered' },
];

function RecentOrders() {
  return (
    <Paper sx={{ p: 2, background: '#262837', color: '#fff' }}>
      <Typography variant="h6" gutterBottom>Recent Orders</Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ color: '#fff' }}>Customer</TableCell>
              <TableCell style={{ color: '#fff' }}>Order No</TableCell>
              <TableCell style={{ color: '#fff' }}>Amount</TableCell>
              <TableCell style={{ color: '#fff' }}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order, index) => (
              <TableRow key={index}>
                <TableCell style={{ color: '#fff' }}>{order.customer}</TableCell>
                <TableCell style={{ color: '#fff' }}>{order.orderNo}</TableCell>
                <TableCell style={{ color: '#fff' }}>{order.amount}</TableCell>
                <TableCell style={{ color: order.status === 'Delivered' ? '#4caf50' : order.status === 'Cancelled' ? '#f44336' : '#ff9800' }}>
                  {order.status}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default RecentOrders;
