import React from 'react';
import { Box, Container, Typography, IconButton, Stack, useTheme } from '@mui/material';
import { LinkedIn, Mail, GitHub } from '@mui/icons-material';

function Footer (){
    const theme = useTheme();
  const year = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        borderTop: '1px solid',
        borderColor: 'rgba(255,255,255,0.1)',
        backgroundColor: theme.palette.mode === 'dark' ? '#171717' : '#fafafa',
      }}
    >
      <Container maxWidth="lg">
        <Box
          display="flex"
          flexDirection={{ xs: 'column', md: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          gap={2}
        >
          <Typography variant="body2" color="gray">
            © {year} Adarsh G Daniel | All rights reserved.
          </Typography>
          <Stack direction="row" spacing={2}>
            <IconButton
              component="a"
              href="https://www.linkedin.com/in/adarsh-g-daniel-25b236192/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              sx={{
                backgroundColor: 'rgba(255,255,255,0.05)',
                '&:hover': {
                  backgroundColor: 'rgba(197, 34, 88, 0.1)', // theme-green hover
                },
              }}
            >
              <LinkedIn sx={{ color: 'gray', '&:hover': { color: '#ff0055' } }} />
            </IconButton>
            <IconButton
              component="a"
              href="mailto:adarshgdaniel@gmail.com"
              aria-label="Email"
              sx={{
                backgroundColor: 'rgba(255,255,255,0.05)',
                '&:hover': {
                  backgroundColor: 'rgba(197, 34, 88, 0.1)',
                },
              }}
            >
              <Mail sx={{ color: 'gray', '&:hover': { color: '#ff0055' } }} />
            </IconButton>
            <IconButton
              component="a"
              href="https://github.com/AdarshGDaniel"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              sx={{
                backgroundColor: 'rgba(255,255,255,0.05)',
                '&:hover': {
                  backgroundColor: 'rgba(197, 34, 88, 0.1)',
                },
              }}
            >
              <GitHub sx={{ color: 'gray', '&:hover': { color: '#ff0055' } }} />
            </IconButton>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
