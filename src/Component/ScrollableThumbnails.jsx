import React, { useEffect, useRef, useState } from 'react';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Tooltip,
  useTheme
} from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ScrollFadeIn from '../Component/ScrollFadeIn.jsx';

import img1 from '../assets/m1.png';
import img2 from '../assets/D1.png';
import img3 from '../assets/khacks.png';
import img4 from '../assets/S1.png';
import img5 from '../assets/Chris.png';
import img6 from '../assets/R1.png';
import img7 from '../assets/R2.png';
import img8 from '../assets/R3.png';
import img9 from '../assets/R4.png';
import img10 from '../assets/R5.png';
import img11 from '../assets/S2.png';
import img12 from '../assets/S3.png';
import img13 from '../assets/S4.png';

const items = [
  {
    title: 'Mudhiyor Balar Kudumba Grama Pannai',
    description: 'A CMS webpage for an organization',
    thumbnail: img1,
    type: 'site',
    link: 'https://mbkgpkasam.org/'
  },
  {
    title: 'DS Project',
    description: 'Basic HTML, JS and CSS static page built to explain the different sorting algorithms.',
    thumbnail: img2,
    type: 'site',
    link: 'https://adarshgdaniel.github.io/DS_Project/'
  },
  {
    title: 'KHacks',
    description: 'Karunya.edu (official webpage of Karunya University) hosted my page',
    thumbnail: img3,
    type: 'site',
    link: 'https://karunya.edu/ktbipkids/khacks/'
  },
  {
    title: 'A short video for SHRISHTI group of schools',
    description: 'We miss you shrishtians is a short video for the students studying in the Shrishti group of schools. ',
    thumbnail: img4,
    type: 'video',
    link: 'https://youtu.be/Ysv3rcTc2_0'
  },
  {
    title: 'Christmas la pelicula',
    description: 'Micro movie for christmas video competition!',
    thumbnail: img5,
    type: 'video',
    link: 'https://youtu.be/QjF2ZQdZ5C0'
  },
  {
    title: 'B-Roll Random Bicycle',
    description: 'A short clip ;p hope you guys like it !! ❤️',
    thumbnail: img6,
    type: 'video',
    link: 'https://youtu.be/wyhS6bxGWBY'
  },
  {
    title: 'B-Roll Random Day of my life !',
    description: 'I just love creating videos !',
    thumbnail: img7,
    type: 'video',
    link: 'https://youtu.be/0zJWX-riHfQ'
  },
  {
    title: 'MACBOOK || B-roll',
    description: 'A short clip with the new MacBook Pro',
    thumbnail: img8,
    type: 'video',
    link: 'https://youtu.be/cvr3rSJj8s8'
  },
  {
    title: 'Walker Style || B-roll',
    description: 'A short clip with the new Alan Walker hoodie',
    thumbnail: img9,
    type: 'video',
    link: 'https://youtu.be/qWxXsRjAbEE'
  },
  {
    title: 'ROOM || B-roll',
    description: 'A Short clip when i was stuck in my room !',
    thumbnail: img10,
    type: 'video',
    link: 'https://youtu.be/UsZfm4hP93w'
  },
  {
    title: 'The Blood of Shrishti || Teachers day special - 2018',
    description: 'A video for teachers day in shrishti school',
    thumbnail: img11,
    type: 'video',
    link: 'https://youtu.be/V2AVlM5bMN8'
  },
  {
    title: 'A short Video on Shrishti Vidyashram Sr. Sec School - 2018',
    description: 'A short video describing the school',
    thumbnail: img12,
    type: 'video',
    link: 'https://youtu.be/f7nuFegIHNg'
  },
  {
    title: 'V-RULE Dance Team PROMO 2k18',
    description: 'V-RULE Dance Team rocked the stage at Shrishti Utsav 2k18....',
    thumbnail: img13,
    type: 'video',
    link: 'https://youtu.be/s3BP_Tkk5NI'
  },
];

const ScrollableThumbnails = () => {
    const theme = useTheme();
    const scrollRef = useRef(null);
    const [scrollDirection, setScrollDirection] = useState(1);
    const [isDragging, setIsDragging] = useState(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);
    const isPointerDrag = useRef(false);
  
    useEffect(() => {
      const container = scrollRef.current;
      const speed = 1;
      const intervalMs = 20;
  
      const intervalId = setInterval(() => {
        if (!container || isDragging) return;
  
        container.scrollLeft += speed * scrollDirection;
        const maxScrollLeft = container.scrollWidth - container.clientWidth;
  
        if (container.scrollLeft >= maxScrollLeft || container.scrollLeft <= 0) {
          setScrollDirection(prev => -prev);
        }
      }, intervalMs);
  
      return () => clearInterval(intervalId);
    }, [scrollDirection, isDragging]);
  
    // Mouse events
    const handleMouseDown = (e) => {
      isPointerDrag.current = false;
      setIsDragging(true);
      startX.current = e.pageX - scrollRef.current.offsetLeft;
      scrollLeft.current = scrollRef.current.scrollLeft;
    };
  
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      const x = e.pageX - scrollRef.current.offsetLeft;
      const walk = (x - startX.current) * 1.5;
      if (Math.abs(walk) > 5) isPointerDrag.current = true;
      scrollRef.current.scrollLeft = scrollLeft.current - walk;
    };
  
    const handleMouseUp = () => setIsDragging(false);
    const handleMouseLeave = () => setIsDragging(false);
  
    // Touch events
    const handleTouchStart = (e) => {
      isPointerDrag.current = false;
      setIsDragging(true);
      startX.current = e.touches[0].pageX - scrollRef.current.offsetLeft;
      scrollLeft.current = scrollRef.current.scrollLeft;
    };
  
    const handleTouchMove = (e) => {
      if (!isDragging) return;
      const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
      const walk = (x - startX.current) * 1.5;
      if (Math.abs(walk) > 5) isPointerDrag.current = true;
      scrollRef.current.scrollLeft = scrollLeft.current - walk;
    };
  
    const handleTouchEnd = () => setIsDragging(false);
  
    const handleClick = (e) => {
      if (isPointerDrag.current) {
        e.preventDefault();
        e.stopPropagation();
      }
    };
  
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box
          sx={{
            paddingTop: '50px',
            zIndex: 2,
            paddingBottom: '100px',
            overflowX: 'hidden',
            display: 'flex',
            gap: 2,
            px: 2,
            cursor: isDragging ? 'grabbing' : 'grab',
            userSelect: 'none',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            '&::-webkit-scrollbar': { display: 'none' },
          }}
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {items.map((item, idx) => (
            <ScrollFadeIn delay={0.2} key={idx}>
              <Card
                sx={{
                  minWidth: 250,
                  maxWidth: 250,
                  bgcolor: '#252525',
                  color: 'white',
                  borderRadius: 2,
                  boxShadow: 3,
                  flex: '0 0 auto',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.03)',
                    boxShadow: '0 0 10px #ff0055',
                  },
                }}
              >
                <CardActionArea
                  component="a"
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleClick}
                >
                  <CardMedia
                    component="img"
                    height="140"
                    image={item.thumbnail}
                    alt={item.title}
                  />
                  <CardContent>
                    <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                      <Typography variant="subtitle1" fontWeight="bold" noWrap>
                        {item.title}
                      </Typography>
                      <Tooltip title={item.type === 'video' ? 'Video' : 'Website'}>
                        <IconButton size="small" sx={{ color: '#ff0055' }}>
                          {item.type === 'video' ? <YouTubeIcon /> : <LanguageIcon />}
                        </IconButton>
                      </Tooltip>
                    </Box>
                    <Typography variant="body2" color="gray">
                      {item.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </ScrollFadeIn>
          ))}
        </Box>
        <ScrollFadeIn delay={0.3}>
          <p
            className="scroll-instruction"
            style={{
              color: theme.palette.mode === 'dark'
                ? 'rgba(185, 185, 185, 0.164)'
                : 'rgba(185, 185, 185, 0.747)',
            }}
          >
            «««« Grab here »»»»
          </p>
        </ScrollFadeIn>
      </Box>
    );
  };
  

export default ScrollableThumbnails;
