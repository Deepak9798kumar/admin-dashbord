import React from 'react';
import { AppBar, Toolbar, Typography, InputBase, IconButton, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import Avatar from '@mui/material/Avatar';


function Navbar() {
  return (
    <AppBar position="fixed" sx={{ zIndex: theme => theme.zIndex.drawer + 1, background: '#1d1f27' }}>
      <Toolbar>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          Dashboard
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <InputBase placeholder="Search…" sx={{ color: '#44c1ff', pl: 2 }} />
            <IconButton type="submit" sx={{ p: 1, color: 'inherit' }}>
              <SearchIcon />
            </IconButton>
          </Box>
          <IconButton color="#4caf50">
            <NotificationsIcon color="#4caf50"/>
          </IconButton>
          <IconButton color="#44c1ff">
            <EmailIcon color="#44c1ff" />
          </IconButton>
          <Avatar alt="Profile Picture" src="https://cdn.pixabay.com/photo/2023/03/15/09/32/woman-7854120_640.png" />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
