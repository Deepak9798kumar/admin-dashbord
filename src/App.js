import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import { Box } from '@mui/material';


const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#1d1f27',
      paper: '#262837',
    },
    text: {
      primary: '#fff',
      secondary: '#b0bec5',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Box sx={{ flexGrow: 1, p: 3 }}>
          <Navbar />
          <Dashboard />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
