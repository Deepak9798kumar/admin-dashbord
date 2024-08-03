import React from 'react';
import { Paper, Typography } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ['5', '9', '11', '13', '15', '17', '19', '21', '23', '25'],
  datasets: [
    {
      label: 'Activity',
      data: [15000, 6000, 8000, 12000, 11000, 14000, 15000, 12000, 18000, 17000],
      backgroundColor: '#1e88e5',
      borderColor: '#1e88e5',
      borderWidth: 0.3,
    },
  ],
};

const options = {
  scales: {
    x: {
      stacked: true,
    },
    y: {
      beginAtZero: true,
      stacked: true,
    },
  },
};

function ActivityChart() {
  return (
    <Paper sx={{ p: 2, background: '#262837', color: '#fff' }}>
      <Typography variant="h6" gutterBottom>Activity</Typography>
      <Bar data={data} options={options} />
    </Paper>
  );
}

export default ActivityChart;
