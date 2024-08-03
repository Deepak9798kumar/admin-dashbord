import { Card, CardContent, Typography, Box } from '@mui/material';

const OrdersCard = ({ title, count, percentageChange, color, icon }) => {
    return (
        <Card sx={{ position: 'relative', p: 2, display: 'flex', flexDirection: 'column', height: '87%' }}>
            <Box sx={{ position: 'absolute', top: 16, left: 16 }}>
                {icon}
            </Box>
            <CardContent sx={{ paddingTop: 6, paddingLeft: 4, paddingBottom: 4 }}>
                <Typography variant="h6" sx={{ ml: '-26px' }}>{title}</Typography>
                <Typography variant="h4" sx={{ color, mt: 1, ml: '-25px' }}>{count}</Typography>

            </CardContent>
            <Box sx={{ position: 'absolute', bottom: 25, right: 16 }}>
                <Typography variant="body2" color={color}>{percentageChange}</Typography>
            </Box>
        </Card>
    );
};

export default OrdersCard;
