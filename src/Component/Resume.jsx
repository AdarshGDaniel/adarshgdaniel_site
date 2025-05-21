import React from 'react';
import { Box, Container, Typography, Button, useTheme } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import Resume_file from '../assets/Adarsh Resume 2025.pdf';
import ScrollFadeIn from '../Component/ScrollFadeIn.jsx';

function Resume() {
    const theme = useTheme();
  return (
    <Box
      id="resume"
      sx={{
        py: 10,
        backgroundColor: theme.palette.mode === 'dark' ? '#171717' : '#fafafa',
        textAlign: 'center',
      }}
    >
      <Container maxWidth="md">
        <ScrollFadeIn delay={0.2}>
          <Typography variant="h4" component="h2" fontWeight="bold" gutterBottom>
            My <span style={{ color: '#ff0055' }}>Resume</span>
          </Typography>
        </ScrollFadeIn>
        <ScrollFadeIn delay={0.3}>
          <Typography variant="body1" color="gray" sx={{ mt: 2, mb: 6 }}>
            To know more, download my resume!
          </Typography>
        </ScrollFadeIn>
        <ScrollFadeIn delay={0.4}>
          <Button
            variant="contained"
            color="success"
            size="large"
            href={Resume_file}
            download="Adarsh_G_Daniel_Resume.pdf"
            startIcon={<DownloadIcon />}
            sx={{
              backgroundColor: '#ff0055',
              '&:hover': {
                backgroundColor: '#c50042',
              },
              px: 4,
              py: 1.5,
              boxShadow: 3,
              borderRadius: 2,
            }}
          >
            Download Resume
          </Button>
        </ScrollFadeIn>

      </Container>
    </Box>
  );
};

export default Resume;
