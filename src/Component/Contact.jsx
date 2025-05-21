import React from 'react';
import { Box, Container, Typography, IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ScrollFadeIn from '../Component/ScrollFadeIn.jsx';

const Contact = () => {
  return (
    <Box id="contact" sx={{ py: 10 }}>
      <Container maxWidth="lg">
        {/* Heading */}
        <Box textAlign="center" mb={8}>
          <ScrollFadeIn delay={0.2}>
            <Typography variant="h4" fontWeight="bold">
              Contact <span style={{ color: '#ff0055' }}>Me</span>
            </Typography>
          </ScrollFadeIn>
          <ScrollFadeIn delay={0.3}>
            <Typography variant="body1" color="gray" mt={2} maxWidth="600px" mx="auto">
              Want to get in touch? Or have questions? Reach out to me!
            </Typography>
          </ScrollFadeIn>
        </Box>

        {/* Contact Info Row */}
        <Box
          display="flex"
          justifyContent="space-evenly"
          flexDirection={{ xs: 'column', md: 'row' }}
          gap={4}
        >
          {/* Email */}
          <ScrollFadeIn delay={0.4}>
          <Box display="flex" alignItems="center" gap={2}>
            <IconButton sx={{ bgcolor: 'rgba(197, 34, 88, 0.1)' }}>
              <EmailIcon sx={{ color: '#ff0055' }} />
            </IconButton>
            <Box>
              <Typography fontWeight="medium">Email</Typography>
              <Typography
                component="a"
                href="mailto:adarshgdaniel@gmail.com"
                sx={{
                  color: 'gray',
                  textDecoration: 'none',
                  '&:hover': { color: '#ff0055' },
                }}
              >
                adarshgdaniel@gmail.com
              </Typography>
            </Box>
          </Box>
          </ScrollFadeIn>

          {/* Location */}
          <ScrollFadeIn delay={0.5}>
          <Box display="flex" alignItems="center" gap={2}>
            <IconButton sx={{ bgcolor: 'rgba(197, 34, 88, 0.1)' }}>
              <LocationOnIcon sx={{ color: '#ff0055' }} />
            </IconButton>
            <Box>
              <Typography fontWeight="medium">Location</Typography>
              <Typography sx={{ color: 'gray' }}>Vellore, Tamil Nadu, India</Typography>
            </Box>
          </Box>
          </ScrollFadeIn>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
