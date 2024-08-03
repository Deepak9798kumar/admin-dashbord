import React from 'react';
import { Paper, Typography, Box, Avatar,} from '@mui/material';
import StarIcon from '@mui/icons-material/Star'

const feedbacks = [
  { name: 'Jenny Wilson', feedback: 'The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.', rating: 5 },
  { name: 'Dianne Russell', feedback: 'We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.', rating: 5 },
  { name: 'Devon Lane', feedback: 'Normally wings are wings, but theirs are lean meaty and tender, and cooked just right. Highly recommended.', rating: 4 },
];

function Feedback() {
  return (
    <Paper sx={{ p: 2, background: '#262837', color: '#fff', height:"100%" }}>
      <Typography variant="h6" gutterBottom>Customer Feedback</Typography>
      {feedbacks.map((feedback, index) => (
        <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Avatar sx={{ bgcolor: '#1e88e5', mr: 2 }}>{feedback.name.charAt(0)}</Avatar>
          <Box>
            <Typography>{feedback.name}</Typography>
            <Typography variant="body2" color="textSecondary">{feedback.feedback}</Typography>
            <Box sx={{ display: 'flex', mt: 1 }}>
              {Array.from({ length: feedback.rating }).map((_, i) => (
                <StarIcon key={i} style={{ color: '#ffeb3b' }} />
              ))}
            </Box>
          </Box>
        </Box>
      ))}
    </Paper>
  );
}

export default Feedback;
