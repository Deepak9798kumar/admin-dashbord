import React from 'react';
import { Paper, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import MenuBookIcon from '@mui/icons-material/MenuBook';

function GoalsCard() {
    return (
        <Paper className='list-item' sx={{ p: 2, background: '#262837', color: '#fff' }}>
            <Typography variant="h6" gutterBottom>Goals</Typography>
            <List>
                <List>
                    <ListItem style={{ marginBottom: '20px', fontSize: "34px" }}>
                        <ListItemIcon>
                            <StarIcon style={{ color: '#fd42ed', fontSize: '40px' }} />
                        </ListItemIcon>
                        <ListItemText primary="Increase sales by 20%" />
                    </ListItem>
                    <ListItem style={{ marginBottom: '20px', fontSize: "24px" }}>
                        <ListItemIcon>
                            <LocalDiningIcon style={{ color: '#1221d4', fontSize: '40px' }} />
                        </ListItemIcon>
                        <ListItemText primary="Introduce new dishes" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <MenuBookIcon style={{ color: '#44c1ff', fontSize: '40px' }} />
                        </ListItemIcon>
                        <ListItemText primary="Update menu" />
                    </ListItem>
                </List>

            </List>

        </Paper>
    );
}

export default GoalsCard;
