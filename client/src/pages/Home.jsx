import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import WelcomePage from '../components/WelcomePage';
import Three from '../components/Three/Three';
import { keyframes } from '@mui/system';
import creditCards from '/images/creditcards.jpg';

import smilingman from '/images/smilingman.jpg';
import smilingman2 from '/images/smilingman2.jpg';
import smilingwomen from '/images/smilingwomen.jpg';
import smilingwomen2 from '/images/smilingwomen2.jpg';
import money1 from '/images/money1.jpg';
import women3 from '/images/women3.avif';

const rainbowAnimation = keyframes`
  0% { border-color: red; }
  71% { border-color: indigo; }
  85% { border-color: violet; }
`;

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const Home = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  const calculateRotation = (x, y) => {
    const rotateX = (window.innerHeight / 2 - y) / 20;
    const rotateY = (window.innerWidth / 2 - x) / 20;
    return { rotateX, rotateY };
  };

  const { rotateX, rotateY } = calculateRotation(cursorPosition.x, cursorPosition.y);

  return (
    <div onMouseMove={handleMouseMove} style={{ animation: `${fadeIn} 1.5s` }}>
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
          <Typography variant="h1" sx={{ color: 'white', fontSize: '2.6rem', marginBottom: '10px' }}>
            At GD ATMs we focus on getting you cash easier than ever.
          </Typography>
        </div>
        <div style={{ flex: '1' }}>
          <Typography variant="body1" sx={{ color: 'white', fontSize: '1rem', marginBottom: '10px', maxWidth: '100%' }}>
            Your premier destination for convenient and affordable cash access solutions. With multiple locations strategically positioned across diverse neighborhoods and commercial hubs, we pride ourselves on being the go-to choice for anyone in need of quick and reliable cash transactions. At GD ATMs, we understand the importance of financial accessibility, which is why we've made it our mission to offer our services at the lowest possible cost to our valued customers. Our commitment to providing competitive transaction fees and ensuring operational excellence underscores our dedication to delivering a seamless and hassle-free experience. From bustling urban centers to suburban communities, our network of ATMs is designed to serve you wherever you are, empowering individuals with the financial flexibility they deserve. Discover the convenience and reliability of GD today, and experience firsthand how we're revolutionizing cash access for everyone.
          </Typography>
        </div>
      </Box>

      <div style={{ backgroundColor: 'black', display: 'flex', justifyContent: 'center', height: 'auto', position: 'relative' }}>
        <div style={{ borderRadius: '50px', overflow: 'hidden', width: '100%', height: "80vh", padding: '1%' }}>
          <div style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', textAlign: 'center', zIndex: '1', width: '40%' }}>
            <Typography variant="h1" sx={{ color: 'white', fontSize: '1.5rem', marginBottom: '10px', backgroundColor: '#5F46F8', borderRadius: '50px', padding: '10px' }}>
              Accepted Cards
            </Typography>
          </div>
          <Link to="/accepted-payment">
            <img
              src={creditCards}
              style={{
                filter: 'grayscale(100%)',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '50px',
                transition: 'transform 0.1s ease-out, filter 0.3s ease-in-out',
                transform: isHovering ? `rotateX(${rotateX}deg) rotateY(${rotateY}deg)` : 'none',
              }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            />
          </Link>
          {isHovering && (
            <div
              style={{
                position: 'absolute',
                top: cursorPosition.y + 1,
                left: cursorPosition.x + 1,
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                padding: '10px',
                borderRadius: '5px',
                zIndex: '2',
              }}
            >
              <p>View Accepted Payments</p>
            </div>
          )}
        </div>
      </div>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'black',
          borderRadius: '0px',
          padding: '20px',
          height: 'auto',
          '@media screen and (min-width: 768px)': {
            flexDirection: 'row',
          },
        }}
      >
        <Box
          sx={{
            backgroundColor: 'rgb(72, 73, 75)',
            borderRadius: '10px',
            padding: '20px',
            margin: '10px',
            flex: '1',
            border: '5px solid transparent',
            transition: 'border-color 0.5s',
            '&:hover': {
              animation: `${rainbowAnimation} 3s linear infinite`,
            },
          }}
        >
          <Typography variant="h1" sx={{ color: 'white', fontSize: '2.6rem', marginBottom: '10px' }}>
            The History of GD ATMs
          </Typography>
          <Typography variant="body1" sx={{ color: 'white', fontSize: '1rem', marginBottom: '10px', maxWidth: '100%' }}>
            GD ATMs was established in 2021 by Peyton Touma. The idea sparked during a trip to Las Vegas to visit his sister, a student at UNLV. Peyton noticed that all the casinos had ATMs with high withdrawal fees and wondered where these fees were going. After about a year of research and development, GD ATMs was born.
            <br />
            GD ATMs is dedicated to providing the lowest possible fees for cash withdrawals. Our focus is on delivering excellent customer service and the best possible experience. We continuously seek ways to improve and enhance our services for our customers. Additionally, we are committed to expanding and growing our company, giving back to the community, and making the world a better place.
            <br />
            We hope you feel at home when visiting our locations and experience a sense of family when ordering machines from us.
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          backgroundColor: 'black',
          padding: '20px',
          gap: '10px',
        }}
      >
        {[smilingman, smilingman2, smilingwomen, smilingwomen2, money1, women3].map((image, index) => (
          <Box
            key={index}
            sx={{
              flex: '1 1 calc(33.333% - 20px)',
              borderRadius: '30px',
              overflow: 'hidden',
              height: '300px', // Set a fixed height
              '@media screen and (min-width: 768px)': {
                height: '300px', // Set the same fixed height for larger screens
              },
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          >
            <img
              src={image}
              alt={`Image ${index + 1}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '30px',
              }}
            />
          </Box>
        ))}
      </Box>
    </div>
  );
};

export default Home;
