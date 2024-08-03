import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, useMediaQuery, useTheme } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import InsertChartOutlinedOutlinedIcon from '@mui/icons-material/InsertChartOutlinedOutlined';
import AodOutlinedIcon from '@mui/icons-material/AodOutlined';
import BorderVerticalOutlinedIcon from '@mui/icons-material/BorderVerticalOutlined';
import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = 180;

function Sidebar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      {isMobile && (
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ position: 'fixed', top: 16, left: 16, zIndex: 1201 }}
        >
          <MenuIcon />
        </IconButton>
      )}

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            height: '100vh',
            boxSizing: 'border-box',
            background: '#1d1f27',
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
          },
        }}
        variant={isMobile ? "temporary" : "permanent"}
        anchor="left"
        open={open || !isMobile}
        onClose={() => isMobile && setOpen(false)}
      >
        <List sx={{ flexGrow: 1, overflow: 'auto' }}>
          <ListItem button sx={{ padding: '25px 16px' }}>
            <ListItemIcon sx={{ color: '#44c1ff', minWidth: '40px' }}>
              <DashboardIcon sx={{ fontSize: 35 }} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button sx={{ padding: '25px 16px' }}>
            <ListItemIcon sx={{ color: '#4caf50', minWidth: '40px' }}>
              <HomeOutlinedIcon sx={{ fontSize: 35 }} />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button sx={{ padding: '25px 16px' }}>
            <ListItemIcon sx={{ color: '#44c1ff', minWidth: '40px' }}>
              <InsertChartOutlinedOutlinedIcon sx={{ fontSize: 35 }} />
            </ListItemIcon>
            <ListItemText primary="Reports" />
          </ListItem>
          <ListItem button sx={{ padding: '25px 16px' }}>
            <ListItemIcon sx={{ color: '#ff314b', minWidth: '40px' }}>
              <AodOutlinedIcon sx={{ fontSize: 35 }} />
            </ListItemIcon>
            <ListItemText primary="Analysis" />
          </ListItem>
          <ListItem button sx={{ padding: '25px 16px' }}>
            <ListItemIcon sx={{ color: '#fd42ed', minWidth: '40px' }}>
              <BorderVerticalOutlinedIcon sx={{ fontSize: 35 }} />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}

export default Sidebar;
