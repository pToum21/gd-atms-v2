import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import PhoneIcon from '@mui/icons-material/Phone';
import backgroundImage from '/images/phone.jpg';  // Ensure this path is correct

const FullPageContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  width: '100vw',
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: '#fff',
  textAlign: 'center',
  padding: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(1),
  },
}));

const PhoneSupport = () => {
  const handleCall = () => {
    window.location.href = 'tel:2404495594';
  };

  return (
    <FullPageContainer>
      <Typography variant="h3" component="h1" gutterBottom sx={{ fontSize: { xs: '2rem', md: '3rem' } }}>
        Phone Support
      </Typography>
      <Typography variant="h5" component="p" sx={{ color: 'black', fontSize: { xs: '0.8rem', md: '1rem' } }} gutterBottom>
        Need assistance? Tap the phone icon to call us at:
      </Typography>
      <Typography variant="h4" component="p" sx={{ color: '#eb7e95', fontSize: { xs: '1.2rem', md: '2rem' } }} gutterBottom>
        240-449-5594
      </Typography>
      <IconButton
        onClick={handleCall}
        sx={{
          marginTop: '20px',
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
          },
        }}
      >
        <PhoneIcon sx={{ fontSize: { xs: 40, md: 60 }, color: '#1976d2' }} />
      </IconButton>
    </FullPageContainer>
  );
};

export default PhoneSupport;
