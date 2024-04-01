import React from 'react';
import { Box } from '@mui/material';
import WelcomePage from "../components/WelcomePage";
import Three from "../components/Three/Three";

import creditCards from '../../public/images/creditcards.jpg'

function Home() {
  return (
    <div>
      <WelcomePage />
      <Three />

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'black',
          borderRadius: '50px 50px 0px 0px',
          padding: '20px',
          marginTop: '20px',
          height: 'auto',
          '@media screen and (min-width: 768px)': {
            flexDirection: 'row',
          },
        }}
      >
        <div style={{ flex: '1', marginRight: '20px' }}>
          <h1 style={{ color: 'white', fontSize: '3rem', marginBottom: '10px' }}>At GD ATMs we focus on getting you cash easier than ever.</h1>
        </div>
        <div style={{ flex: '1' }}>
          <p style={{ color: 'white', fontSize: '.9rem', marginBottom: '10px', maxWidth: '100%' }}>
            Your premier destination for convenient and affordable cash access solutions. With multiple locations strategically positioned across diverse neighborhoods and commercial hubs, we pride ourselves on being the go-to choice for anyone in need of quick and reliable cash transactions. At GD ATMs, we understand the importance of financial accessibility, which is why we've made it our mission to offer our services at the lowest possible cost to our valued customers. Our commitment to providing competitive transaction fees and ensuring operational excellence underscores our dedication to delivering a seamless and hassle-free experience. From bustling urban centers to suburban communities, our network of ATMs is designed to serve you wherever you are, empowering individuals with the financial flexibility they deserve. Discover the convenience and reliability of GD today, and experience firsthand how we're revolutionizing cash access for everyone.
          </p>
        </div>

      </Box>
      {/* this div holds the credit card image*/}
      <div style={{ backgroundColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center', filter: 'grayscale(100%)' }}>
        <div style={{ borderRadius: '50px', overflow: 'hidden', width: '100%', padding: '1%' }}>
          <img src={creditCards} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50px' }} />
        </div>
      </div>

    </div>
  );
}

export default Home;
