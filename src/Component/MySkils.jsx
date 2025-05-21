import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import './MySkills.css'
import ScrollFadeIn from '../Component/ScrollFadeIn.jsx';

const skills = {
  'Languages & Tools': [
    { name: 'Python', icon: '💻' },
    { name: 'C++', icon: '⚙️' },
    { name: 'SQL', icon: '💾' },
    { name: 'TensorFlow', icon: '🧠' },
    { name: 'ReactJS', icon: '✉️' },
    { name: 'JavaScript', icon: '📄' },
    { name: 'Linux', icon: '🐧' },
    { name: 'DPDK', icon: '⌨️' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'MySQL', icon: '🐬' },
  ],
  Fields: [
    { name: 'Networking', icon: '🕸' },
    { name: 'Web Development', icon: '🖥' },
    { name: 'Cyber Security', icon: '🥷🏻' },
  ],
  Others: [
    { name: 'Photography', icon: '📷' },
    { name: 'Videography', icon: '📹' },
    { name: 'Editing', icon: '✂️' },
    { name: 'Designing', icon: '📝' },
  ],
};

const MySkills = () => {
  const theme = useTheme();

  return (
    <Box
      id="skills"
      sx={{
        width: '100%',
        backgroundColor: theme.palette.mode === 'dark' ? '#171717' : '#fafafa',
        py: 8,
        px: { xs: 2, md: 10 },
        color: theme.palette.mode === 'dark' ? 'white' : 'black',
      }}
    >
    <ScrollFadeIn delay={0.2}>
        <Typography
            variant="h4"
            align="center"
            fontWeight="bold"
            sx={{ mb: 6 }}
        >
            My <span style={{ color: '#ff0055' }}>Skills</span>
        </Typography>
    </ScrollFadeIn>


      {Object.entries(skills).map(([category, items]) => (
        <Box
            className="main-box-skills"
            key={category}
            sx={{
                mb: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',   // centers the whole category box horizontally
            }}
            >
            <Typography variant="h6" sx={{ mb: 2, textAlign: 'center', color: theme.palette.mode == 'whitesmoke' ? 'l' : 'darkgray' }}>
                {category}
            </Typography>
            <ScrollFadeIn delay={0.3}>
                <Box
                    className="components-skills"
                    sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 2,
                    justifyContent: 'center', // centers the cards inside this container
                    maxWidth: '100%',         // optional: prevents overflow
                    }}
                >
                    {items.map((item) => (
                    <Box
                        key={item.name}
                        sx={{
                        p: 2,
                        px: 3,
                        borderRadius: 2,
                        boxShadow: 1,
                        minWidth: 120,
                        textAlign: 'center',
                        transition: '0.3s',
                        '&:hover': {
                            transform: 'translateY(-4px)',
                            boxShadow: 4,
                        },
                        }}
                    >
                        <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
                        <Typography variant="body2" sx={{ mt: 1 }}>
                        {item.name}
                        </Typography>
                    </Box>
                    ))}
                </Box>
            </ScrollFadeIn>

            </Box>

      ))}
    </Box>
  );
};

export default MySkills;
