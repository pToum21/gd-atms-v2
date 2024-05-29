import React, { useState } from 'react';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import WelcomePage from "../components/WelcomePage";
import Three from "../components/Three/Three";
import { keyframes } from '@mui/system';
import creditCards from '/images/creditcards.jpg';


// six images for the bottom of the page
import smilingman from'/images/smilingman.jpg';
import smilingman2 from'/images/smilingman2.jpg';
import smilingwomen from'/images/smilingwomen.jpg';
import smilingwomen2 from'/images/smilingwomen2.jpg';
import money1 from'/images/money1.jpg';
import women3 from'/images/women3.avif';









const rainbowAnimation = keyframes`
  0% { border-color: red; }
  71% { border-color: indigo; }
  85% { border-color: violet; }
`;

function Home() {
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
    <div onMouseMove={handleMouseMove}>
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
          <h1 style={{ color: 'white', fontSize: '2.6rem', marginBottom: '10px' }}>
            At GD ATMs we focus on getting you cash easier than ever.
          </h1>
        </div>
        <div style={{ flex: '1' }}>
          <p style={{ color: 'white', fontSize: '.9rem', marginBottom: '10px', maxWidth: '100%' }}>
            Your premier destination for convenient and affordable cash access solutions. With multiple locations strategically positioned across diverse neighborhoods and commercial hubs, we pride ourselves on being the go-to choice for anyone in need of quick and reliable cash transactions. At GD ATMs, we understand the importance of financial accessibility, which is why we've made it our mission to offer our services at the lowest possible cost to our valued customers. Our commitment to providing competitive transaction fees and ensuring operational excellence underscores our dedication to delivering a seamless and hassle-free experience. From bustling urban centers to suburban communities, our network of ATMs is designed to serve you wherever you are, empowering individuals with the financial flexibility they deserve. Discover the convenience and reliability of GD today, and experience firsthand how we're revolutionizing cash access for everyone.
          </p>
        </div>
      </Box>

      <div style={{ backgroundColor: 'black', display: 'flex', justifyContent: 'center', height: 'auto' }}>
        <div style={{ borderRadius: '50px', overflow: 'hidden', width: '100%', height: "80vh", padding: '1%', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '7%', left: '23%', transform: 'translate(-50%, -50%)', textAlign: 'center', zIndex: '1', width: '40%' }}>
            <h1 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '10px', backgroundColor: '#5F46F8', borderRadius: '50px' }}>
              Accepted Cards
            </h1>
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
                position: 'relative',
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
          <h1 style={{ color: 'white', fontSize: '2.6rem', marginBottom: '10px' }}>
            The History of GD ATMs
          </h1>
          <p style={{ color: 'white', fontSize: '.9rem', marginBottom: '10px', maxWidth: '100%' }}>
            GD ATMs was established in 2021 by Peyton Touma. The idea sparked during a trip to Las Vegas to visit his sister, a student at UNLV. Peyton noticed that all the casinos had ATMs with high withdrawal fees and wondered where these fees were going. After about a year of research and development, GD ATMs was born.
            <br />
            GD ATMs is dedicated to providing the lowest possible fees for cash withdrawals. Our focus is on delivering excellent customer service and the best possible experience. We continuously seek ways to improve and enhance our services for our customers. Additionally, we are committed to expanding and growing our company, giving back to the community, and making the world a better place.
            <br />
            We hope you feel at home when visiting our locations and experience a sense of family when ordering machines from us.
          </p>
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
        {[...Array(6)].map((_, index) => (
          <Box
            key={index}
            sx={{
              flex: '1 1 calc(33.333% - 20px)',
              borderRadius: '10px',
              overflow: 'hidden',
            }}
          >
            <img
              src={`https://via.placeholder.com/300?text=Image+${index + 1}`}
              alt={`Image ${index + 1}`}
              style={{ width: '100%', height: 'auto' }}
            />
          </Box>
        ))}
      </Box>
    </div>
  );
}

export default Home;
