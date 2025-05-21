import React from 'react';
import './MyEducation.css';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Chip,
  Stack,
  Avatar,
  useTheme,
  Grid,
  useMediaQuery
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ScrollFadeIn from '../Component/ScrollFadeIn.jsx';

const educations = [
  {
    degree: 'M. Tech. in Information Security',
    institution: 'Vellore Institute of Technology',
    duration: 'Jul 2023 – May 2025 [Expected]',
    gpa: '8.5',
    coursework: [
      'Information Security',
      'Penetration Testing and Vulnerability',
      'Assessment',
      'Cryptography',
    ],
  },
  {
    degree: 'B. Tech. in Computer Science and Engineering',
    institution: 'Karunya Institute of Technology and Sciences',
    duration: 'Aug 2019 – May 2023',
    gpa: '7.5',
    coursework: [
      'Operating Systems',
      'Artificial Intelligence',
      'Computer Graphics',
      'Unix Tools and Scripting',
      'Computer Networks',
      'Database Management Systems',
      'Cyber Policies',
      'Machine Learning',
    ],
  },
  // Add more cards if needed
];

export default function MyEducation() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      id="education"
      sx={{
        px: 2,
        py: 4,
        backgroundColor: theme.palette.mode === 'dark' ? '#171717' : '#fafafa',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
    <ScrollFadeIn delay={0.2}>

    
        <Typography
            variant="h4"
            align="center"
            fontWeight="bold"
            sx={{ mb: 6 }}
        >
            My <span style={{ color: '#ff0055' }}>Education</span>
        </Typography>
        </ScrollFadeIn>
      <Grid container spacing={4} justifyContent="center" maxWidth="lg">
        {educations.map((edu, index) => (
          <Grid item xs={12} md={10} key={index}>
          <ScrollFadeIn delay={0.3}>
            <Card
              elevation={3}
              sx={{
                borderRadius: 3,
                backgroundColor: theme.palette.mode === 'dark' ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)',
                boxShadow: '-1px 1px 10px 2px rgba(255, 0, 76, 0.47)',
                position: 'relative',
                overflow: 'hidden',
                transform: 'translateY(0px)',
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  boxShadow: '0px 4px 35px -5px rgba(255, 0, 85, 0.856)',
                  cursor: 'pointer',
                  transform: 'translateY(-10px)',
                  transition: 'all 0.2s ease-in-out',
                },
              }}
            >
              {/* Left Border */}
              <Box
                sx={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: 2,
                  backgroundColor: 'rgba(255, 0, 85)',
                }}
              />

              {/* Top Section */}
              <CardContent sx={{ pb: 1 }}>
                <Box display="flex" alignItems="center" gap={2} mb={1}>
                  <Avatar sx={{ bgcolor: 'rgba(255, 0, 85, 0.06)', width: 32, height: 32 }}>
                    <SchoolIcon sx={{ fontSize: 16, color: '#ff0055' }} />
                  </Avatar>
                  <Typography variant="h6" sx={{color: theme.palette.mode === 'dark' ? 'white' : 'rgb(73, 73, 73)'}} fontWeight="bold">
                    {edu.degree}
                  </Typography>
                </Box>

                <Stack direction="row" spacing={2} flexWrap="wrap" ml={5}>
                  <Typography variant="body2" color="gray">
                    {edu.institution}
                  </Typography>

                  <Stack direction="row" spacing={1} alignItems="center" color="#ff0055" fontSize="0.75rem">
                    <CalendarMonthIcon sx={{ fontSize: 14 }} />
                    <span>{edu.duration}</span>
                  </Stack>

                  <Chip
                    label={`GPA: ${edu.gpa}`}
                    size="small"
                    sx={{
                      backgroundColor: 'rgba(255, 0, 85, 0.06)',
                      color: '#ff0055',
                      fontWeight: 'medium',
                      fontSize: '0.75rem',
                    }}
                  />
                </Stack>
              </CardContent>

              {/* Coursework Section */}
              <CardContent sx={{ pt: 1, pb: 3 }}>
                <Box ml={5}>
                  <Box display="flex" alignItems="center" gap={1} mb={1}>
                    <MenuBookIcon sx={{ fontSize: 16, color: '#ff0055' }} />
                    <Typography variant="subtitle2" sx={{color: theme.palette.mode === 'dark' ? 'white' : 'rgb(73, 73, 73)'}} fontWeight="bold">
                      Coursework
                    </Typography>
                  </Box>

                  <Stack direction="row" spacing={1} flexWrap="wrap">
                    {edu.coursework.map((item, idx) => (
                      <Chip className='small-icon-edu'
                        key={idx}
                        label={item}
                        size="small"
                        sx={{
                          borderRadius: '9999px',
                          px: 1.5,
                          py: 0.5,
                          backgroundColor: 'rgba(255, 0, 85, 0.06)',
                          borderColor: '#00ffaa50',
                          color: theme.palette.mode === 'dark' ? '#d1d5db' : 'rgba(36, 36, 36, 0.59)',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                        }}
                      />
                    ))}
                  </Stack>
                </Box>
              </CardContent>
            </Card>
            </ScrollFadeIn>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
