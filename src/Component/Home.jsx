import React, { useEffect, useState } from 'react';
import './Home.css';
import img from '../assets/IMG_6053 copy.png';
import { useMediaQuery, useTheme, Box } from '@mui/material';
import ScrollFadeIn from '../Component/ScrollFadeIn.jsx';

const words = ['I Code', 'I Create', 'I Design', 'I shoot', 'I Edit'];

function Home() {
  const [index, setIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      id="home"
      sx={{
        width: '100%',
        margin: 0,
        paddingTop: isMobile ? '0' : '150px',
        paddingBottom: '150px', 
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Image section */}
      
      <Box
        sx={{
          flex: 1,
          width: isMobile ? '100%' : 'auto',
          display: 'flex',
          justifyContent: 'right',
          alignItems: 'center',
        }}
      >
      <ScrollFadeIn delay={0.2}>
        <img
            src={img}
            alt="Adarsh"
            style={{
              width: isMobile ? '100%' : 'auto',
              minHeight: isMobile ? '20vh' : '500px',
              maxHeight: isMobile ? '100vh' : '500px',
              objectFit: 'cover',
            }}
          />
      </ScrollFadeIn>

      </Box>

      {/* Text section */}
      <Box
        sx={{
          flex: 1,
          textAlign: isMobile ? 'center' : 'left',
          px: 3,
          py: isMobile ? 2 : 0,
          position: 'relative',
        }}
      >
      <ScrollFadeIn delay={0.4}>
        <p className="under-construction">⚠ Page under construction! ⚠</p>
      </ScrollFadeIn>
      <ScrollFadeIn delay={0.5}>
        <h1 className="name-line">
            Hi, the name's{' '}
            <b className="name-glitch" data-text="Adarsh G Daniel">
              Adarsh G Daniel
            </b>
          </h1>
      </ScrollFadeIn>
      <ScrollFadeIn delay={0.6}>
        <div className="dynamic-text">
            {words.map((word, i) => (
              <p key={i} className={`dynamic-line ${i === index ? 'active' : ''}`}>
                {word}
              </p>
            ))}
          </div>
      </ScrollFadeIn>
      </Box>
    </Box>
  );
}

export default Home;
