import React from 'react';
import { Box, Grid, Card, CardContent, Typography, IconButton, Button } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ScrollFadeIn from '../Component/ScrollFadeIn.jsx';

const certifications = [
  {
    title: 'Ethical Hacking',
    issuer: 'Internshala',
    link2: '08F4FD5D-91AE-65FE-11F9-060D7FCE9D85',
  },
  {
    title: 'Cybersecurity Essentials',
    issuer: 'Cisco Networking Academy',
    link: 'https://www.credly.com/badges/893ee00d-1628-4c43-89cd-be74494fa342',
  },
  {
    title: 'Introduction to Packet Tracer',
    issuer: 'Cisco Networking Academy',
    link: 'https://www.credly.com/badges/52bf22b8-388b-44c8-aaa2-508507c32957',
  },
  {
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    link: 'https://www.credly.com/badges/8cd2f623-5ea8-4a2a-aae7-c57d67c748d9',
  },
  {
    title: 'University Admission Prediction Using Multiple Linear Regression',
    issuer: 'Coursera',
    link2: 'QTGHCHBRU7RY',
  },
  {
    title: 'Technical Support Fundamentals',
    issuer: 'Coursera',
    link2: 'J7PGDA4U65VL',
  },
  {
    title: 'Programming for Everybody (Getting Started with Python)',
    issuer: 'Coursera',
    link2: 'PLTHEXTT9H3P',
  },
  {
    title: 'Third Place in Hackathon',
    issuer: 'KarunyaHacks',
    link2: 'UG college Hackathon',
  },
  {
    title: 'NULLCON conference',
    issuer: 'Participation',
    link: 'Dec 2022',
  },
  {
    title: 'Paper Presentation - IConSCEPT',
    issuer: 'IEEE',
    link: 'https://ieeexplore.ieee.org/document/10170228',
  },
];

function Certifications() {
  return (
    <Box id="certifications" sx={{ py: 10, }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
      <ScrollFadeIn delay={0.2}>
          <Typography variant="h4" fontWeight="bold">
            My <Box component="span" color="#ff0055">Certifications</Box>
          </Typography>
        </ScrollFadeIn>
        <ScrollFadeIn delay={0.3}>
          <Typography variant="body2" color="gray" sx={{ maxWidth: 600, mx: 'auto', mt: 1 }}>
            Certifications & Awards
          </Typography>
        </ScrollFadeIn>

      </Box>

      <Grid container spacing={3} justifyContent="center" sx={{ maxWidth: '1200px', mx: 'auto' }}>
        {certifications.map((cert, index) => (
          <Grid item xs={12} sm={6} md={4} lg={2.4} key={index}>
          <ScrollFadeIn delay={0.4}>
            <Card
              sx={{
                height: '100%',
                bgcolor: '#252525',
                boxShadow: 4,
                borderRadius: 2,
                transition: 'all 0.3s ease',
                '&:hover': {
                  boxShadow: '0 0 15px 2px #ff0055',
                  transform: 'translateY(-5px)',
                },
              }}
            >
              <CardContent>
                <Box display="flex" justifyContent="center" mb={2}>
                  <Box sx={{ bgcolor: 'rgba(197, 34, 88, 0.1)', borderRadius: '50%', p: 1 }}>
                    <EmojiEventsIcon sx={{ color: '#ff0055', fontSize: 24 }} />
                  </Box>
                </Box>
                <Typography
                  variant="body1"
                  color="white"
                  align="center"
                  fontWeight="bold"
                  sx={{ mb: 1 }}
                >
                  {cert.title}
                </Typography>
                <Typography
                  variant="caption"
                  color="gray"
                  align="center"
                  display="block"
                  sx={{ mb: 2 }}
                >
                  {cert.issuer}
                </Typography>
                <Box textAlign="center">
                  {cert.link ? (
                    <Button
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      size="small"
                      variant="outlined"
                      sx={{
                        color: '#ff0055',
                        borderColor: '#ff0055',
                        '&:hover': {
                          bgcolor: '#ff0055',
                          color: 'white',
                        },
                      }}
                      endIcon={<OpenInNewIcon sx={{ fontSize: 16 }} />}
                    >
                      View
                    </Button>
                  ) : cert.link2 ? (
                    <Typography variant="caption" color="#ff0055">
                      {cert.link2}
                    </Typography>
                  ) : null}
                </Box>
              </CardContent>
            </Card>
            </ScrollFadeIn>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Certifications;
