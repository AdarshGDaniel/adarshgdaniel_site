import React, { useRef, useState, useEffect } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { Box, Typography, IconButton, useTheme, useMediaQuery } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './ProjectCarousel.css'
import ScrollFadeIn from '../Component/ScrollFadeIn.jsx';

// Import images
import img1 from '../assets/Godseye.png'; import img2 from '../assets/khacks.png'; import img3 from '../assets/COVID.jpeg'; import img4 from '../assets/DNS.png';
import ScrollableThumbnails from './ScrollableThumbnails.jsx';

function ProjectCarousel() {
  const images = [img1, img2, img3];
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const projectslist = [
    {
      title1: 'GOD’S EYE',
      shortDesc: 'Machine Learning, OpenCV, Python',
      description1: 'The Aim of this project was inspired by the famous movie Mission Impossible! Where a cyber device is used to track anyone in the world.',
      title2: 'How does my Version work ?',
      description2: 'My Python program was able to take multiple camera inputs and run facial algorithm on every single camera to detect people with database that was trained with only one image.',
      image: img1,
    },
    {
      title1: 'KARUNYA CLUBS',
      shortDesc: 'React JS, Webpage, HTML, JavaScript, CSS',
      description1: 'I was tasked with creating webpages for my UG college clubs, it was to be published on the official college webpages!',
      title2: 'What did i do ?',
      description2: 'I Created 3 webpages with ReactJS for 3 different clubs and it is hosted in Karunya.edu (the official website of my college) under the KIDS (Karunya Inovation and Design Studio) org.',
      image: img2,
    },
    {
      title1: 'COVID tracking Web Page',
      shortDesc: 'Vanila, Webpage, HTML, JavaScript, CSS, realtime tracking',
      description1: 'During COVID19, it was hard to track the cases throughout the county and i made my own tracking webpage.',
      title2: 'What does it do ?',
      description2: 'It scrapes data from all the official Govt of India webpages and gives the realtime data on a dynamic looking svg India map with floating values that update every few mins.',
      image: img3,
    },
    {
      title1: 'Analyzing the likeness of a person based on DNS logs using ML',
      shortDesc: 'Machine Learning, Reinforced Learning, Python',
      description1: 'This project was aimed to predict what type of interests a person has based on their web DNS log history.',
      title2: 'How does it work ?',
      description2: 'Using Reinforced learning my code analyses more than 70 million DNS records to determin what type of per defined set of catergory the person belongs to.',
      image: img4,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef(null);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slidesPerView: 1,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  useEffect(() => {
    const slider = instanceRef.current;

    if (!slider) return;

    // Auto scroll every 5 seconds
    intervalRef.current = setInterval(() => {
      slider.next();
    }, 5000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [instanceRef]);

  return (
    <>
<Box id='projects'>
    <ScrollFadeIn delay={0.2}>
      <Typography
          variant="h4"
          align="center"
          fontWeight="bold"
          sx={{ mb: 6 }}
        >
          My <span style={{ color: '#ff0055' }}>Projects</span>
        </Typography>
    </ScrollFadeIn>

        <Box
          component="section"
          sx={{
            width: '100%',
            py: 1,
            px: 2,
            display: 'flex',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          {/* Left Arrow */}
          <IconButton
            onClick={() => instanceRef.current?.prev()}
            sx={{
              position: 'absolute',
              left: isMobile ? 'none' : 'calc(50% - 500px)',
              top: isMobile ? '0' : '50%',
              transform: isMobile ? 'translateY(0)' : 'translateY(-50%)',
              bgcolor: 'rgba(0,0,0,0.3)',
              color: 'white',
              overflow: isMobile ? 'hidden' : 'visible',
              opacity: isMobile ? '0' : '1',
              '&:hover': { bgcolor: 'rgba(0,0,0,0.5)' },
              zIndex: 10,
            }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>

          {/* Right Arrow */}
          <IconButton
            onClick={() => instanceRef.current?.next()}
            sx={{
              position: 'absolute',
              right: isMobile ? 'none' : 'calc(50% - 500px)',
              top: isMobile ? '0' : '50%',
              transform: isMobile ? 'translateY(0)' : 'translateY(-50%)',
              bgcolor: 'rgba(0,0,0,0.3)',
              color: 'white',
              '&:hover': { bgcolor: 'rgba(0,0,0,0.5)' },
              overflow: isMobile ? 'hidden' : 'visible',
              opacity: isMobile ? '0' : '1',
              zIndex: 10,
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>

          {/* Carousel Container */}
          {isMobile ? (
            <>
              <Box ref={sliderRef} className="keen-slider mobile-main" sx={{ width: '100%' }}>
                {projectslist.map((project, idx) => (
                  <Box key={idx} className="keen-slider__slide mobile-main2" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', px: 2 }}>
                  <ScrollFadeIn delay={0.2}>
                    <Box className='mobile-img' component="img" src={project.image} alt={project.title1} sx={{ width: '100%', height: 'auto', borderRadius: 2, mb: 2 }} />
                    </ScrollFadeIn>
                    <Box sx={{ flex: 1 }}>
                    <Box className='mobile-skill-parent' style={{justifyContent: 'space-between'}}>
                          {project.shortDesc.split(',').map((skill, index) => (
                            <ScrollFadeIn delay={0.3}>
                            <Typography key={index} className='mobile-skill' variant="body2" sx={{whiteSpace: 'nowrap'}} color="text.secondary" gutterBottom>
                              {skill.trim()}
                            </Typography>
                            </ScrollFadeIn>
                          ))}
                        </Box>
                        <ScrollFadeIn delay={0.4}>
                      <Box component="div" className='mobile-cont'>
                        <Typography className='mobile-h6' variant="h6" fontWeight="bold" gutterBottom>
                          {project.title1}
                        </Typography>

                        <Typography variant="body1" gutterBottom>
                          {project.description1}
                        </Typography>
                      </Box>
                      </ScrollFadeIn>
                      <ScrollFadeIn delay={0.5}>
                      <Box component="div" className='mobile-cont'>
                        <Typography variant="subtitle1" color='rgba(255, 0, 85)' fontWeight="bold" mt={2}>
                          {project.title2}
                        </Typography>
                        <Typography variant="body1">
                          {project.description2}
                        </Typography>
                      </Box>
                      </ScrollFadeIn>
                    </Box>
                  </Box>
                ))}
              </Box>

              {/* Mobile pagination dots */}
              <Box className='dot-mobile' sx={{ mt: 2, display: 'flex', justifyContent: 'center', gap: 1.5 }}>
                {projectslist.map((_, idx) => (
                  <Box
                    key={idx}
                    onClick={() => {
                      const slider = instanceRef.current;
                      if (!slider) return;
                      const current = slider.track.details.rel;
                      const abs = slider.track.details.slides[0].abs;
                      slider.moveToIdx(idx + abs - current);
                    }}
                    sx={{
                      width: 12,
                      height: 12,
                      borderRadius: 1,
                      bgcolor: currentSlide === idx ? '#ff0055' : 'grey.400',
                      cursor: 'pointer',
                      transition: 'background-color 0.3s',
                    }}
                  />
                ))}
              </Box>
            </>

          ) : (
            <ScrollFadeIn delay={0.2}>
              <Box className='carousel-main' sx={{ maxWidth: 900, width: '100%', }}>
                <Box ref={sliderRef} className="keen-slider" sx={{ overflow: 'hidden' }}>
                  {projectslist.map((project, idx) => (
                    <Box key={`1 ${idx}`}>
                    <Box
                      key={idx}
                      className="keen-slider__slide carousel-main"
                      sx={{
                        display: 'flex',
                        gap: 2,
                        height: 550,
                        overflow: 'hidden',
                        flex: 1,
                      }}
                    >
                    <ScrollFadeIn delay={0.3}>
                    <img
                    src={project.image}
                    style={{
                      width: 'auto',
                      height: '300px',
                      margin: '20px',
                      position: 'absolute'
                      }}>

                    </img>
                    </ScrollFadeIn>

                    <Typography
                    className='inText'
                      variant="h4"
                      align="center"
                      fontWeight="bold"
                      sx={{ mb: 6, position: 'absolute' }}
                    >
                      It's <span style={{ color: '#ff0055' }}>{project.title1}</span>
                    </Typography>

                      {/* Right content */}
                      <Box className='carousel-text'
                        sx={{
                          flex: 1,
                          position: 'relative',
                          p: 2,
                          display: 'flex',
                          flexDirection: 'column',
                        }}
                      >
                        {/* Top right card */}
                        <Box
                        className='carousel-skill-outer'
                          sx={{
                            position: 'absolute',
                            top: 16,
                            right: 16,
                            maxWidth: '80%',
                            display: 'flex',
                            gap: 1, // space between the skill tags
                            flexWrap: 'wrap',
                            justifyContent: 'flex-end',
                          }}
                        >
                          {project.shortDesc.split(',').map((skill, index) => (
                            <ScrollFadeIn delay={0.4}>
                            <Box
                              key={index}
                              className="carousel-skill"
                              sx={{
                                borderRadius: 10,
                                fontSize: '0.9rem',
                                whiteSpace: 'nowrap',
                              }}
                            >
                              {skill.trim()}
                            </Box>
                            </ScrollFadeIn>
                          ))}
                        </Box>


                        {/* Bottom right card */}
                        <Box className='carousel-blur-box'
                            sx={{
                              mt: 'auto',
                              display: 'flex',
                              flexDirection: isMobile ? 'column' : 'row',
                              justifyContent: 'space-evenly'
                            }}
                            >
                            <ScrollFadeIn delay={0.5}>
                          <Box className='carousel-detail-text'
                            sx={{
                              mt: 'auto',
                              p: 2,
                              borderRadius: 1,
                              backdropFilter: 'blur(6px)',
                              fontSize: '1rem',
                              lineHeight: 1.4,
                            }}
                          >
                            <Typography variant="h6" sx={{ mb: 1 }}>
                              {project.title1}
                            </Typography>
                            <Typography>{project.description1}</Typography>
                          </Box>
                          </ScrollFadeIn>
                          <ScrollFadeIn delay={0.6}>
                          <Box className='carousel-detail-text'
                            sx={{
                              mt: 'auto',
                              p: 2,
                              borderRadius: 1,
                              backdropFilter: 'blur(6px)',
                              fontSize: '1rem',
                              lineHeight: 1.4,
                            }}
                          >
                            <Typography variant="h6" sx={{ mb: 1 }}>
                              {project.title2}
                            </Typography>
                            <Typography>{project.description2}</Typography>
                          </Box>
                          </ScrollFadeIn>
                        </Box>
                        
                      </Box>
                    </Box>
                    </Box>
                  ))}
                </Box>

                {/* Pagination Squares */}
                <Box
                  sx={{
                    mt: 3,
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 1.5,
                  }}
                >
                  {projectslist.map((_, idx) => (
                    <Box
                      key={idx}
                      onClick={() => instanceRef.current?.moveToIdx(idx)}
                      sx={{
                        width: 14,
                        height: 14,
                        borderRadius: 1,
                        bgcolor: currentSlide === idx ? '#ff0055' : 'grey.400',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s',
                      }}
                    />
                  ))}
                </Box>
              </Box>
              </ScrollFadeIn>
          )}
          
        </Box>
    </Box>
    <ScrollableThumbnails />
    </>
    
  );
}

export default ProjectCarousel;
