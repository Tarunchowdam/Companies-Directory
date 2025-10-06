import React from 'react';
import { Card, CardContent, Typography, CardMedia, Box, Button, Link } from '@mui/material';

const CompanyCard = ({ company }) => {
  return (
    <Card
      sx={{
        backgroundColor: '#1e293b',
        color: '#f8fafc',
        borderRadius: 3,
        boxShadow: '0 4px 12px rgba(127, 6, 239, 0.63)',
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          backgroundColor: '#273449',
          transform: 'translateY(-5px)',
          boxShadow: '0 8px 20px rgba(0,0,0,0.5)',
        },
        minWidth: 260,
        maxWidth: 260,
        height: 300, 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        margin: 'auto',
      }}
    >
      {/* Logo */}
      <CardMedia
        component="img"
        height="120"
        image={company.logo}
        alt={company.name}
        sx={{ objectFit: 'contain', padding: 2, backgroundColor: '#0f172a' }}
      />

      {/* Content */}
      <CardContent sx={{ flexGrow: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Box>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
            {company.name}
          </Typography>
                
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              display: '-webkit-box',
              WebkitLineClamp: 3, // show max 3 lines
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              mb: 1,
            }}
          >
             <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <Typography variant="body2" color="text.secondary">
            {company.location}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {company.industry}
          </Typography>
        </Box>
            {/* {company.description} */}
          </Typography>
        </Box>

       
      </CardContent>

      {/* Website Button */}
      <Box sx={{ padding: 2 }}>
        <Button
          variant="contained"
          color="primary"
          size="small"
          component={Link}
          href={company.website}
          target="_blank"
          fullWidth
        >
          Visit Website
        </Button>
      </Box>
    </Card>
  );
};

export default CompanyCard;
