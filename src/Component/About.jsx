import React from "react";
import { Box, Typography, Avatar, Button, Link, Stack, useTheme, useMediaQuery, } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import myImage from "../assets/ChatGPT Image Mar 29, 2025, 12_58_20 AM.png";




function About() {

    const theme = useTheme();



  return (
    <Box
      id="about"
      sx={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        px: 3,
        position: "relative",
      }}
    >
      {/* Arrow */}
      <a href="#about" style={{ textDecoration: "none" }}>
        <Box
            sx={{
            position: "absolute",
            top: -20,
            animation: "bounce 2s infinite",
            cursor: "pointer",
            "@keyframes bounce": {
                "0%, 100%": { transform: "translateY(0)" },
                "50%": { transform: "translateY(10px)" },
            },
            }}
        >
            <ArrowDownwardIcon className="arrow-about" fontSize="medium" sx={{ color: theme.palette.mode === 'dark' ? 'white !important' : 'black !important' }} />
        </Box>
        </a>

      {/* Title */}
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 4 }}>
        About{" "}
        <Box component="span" sx={{ color: "#ff0055" }}>
          MySelf
        </Box>
      </Typography>

      {/* Content */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={6}
        alignItems="center"
        maxWidth="md"
      >

        {/* Text & Button */}
        <Box textAlign={{ xs: "center", md: "left" }}>
          <Typography sx={{ mb: 2 }}>
            I’m currently pursuing my Master’s in Computer and Information Systems Security at Vellore Institute of Technology, building a strong foundation in securing digital infrastructure and mitigating cyber threats. I earned my B.Tech in Computer Science from Karunya Institute of Technology and Sciences in 2023, where I led initiatives like KarunyaHacks, organizing hackathons and workshops that promoted real-world innovation and collaboration.
          </Typography>
          <Typography sx={{ mb: 3 }}>
            At present, I’m a Graduate Intern at Intel Corporation, contributing to security-focused projects that solve real-world challenges. This experience is helping me sharpen both my technical skills and my ability to work in high-impact, cross-functional teams.
          </Typography>
          <Typography sx={{ mb: 4 }}>
            With certifications in programming, IT support, and data analysis from Coursera, and hands-on skills in C++, Java, JavaScript, Python, and React JS, I bring a strong blend of technical expertise and curiosity. I'm passionate about cybersecurity, quick to adapt, and always excited to turn complex problems into secure, elegant solutions.
          </Typography>
          <Link
            href="https://www.linkedin.com/in/adarsh-g-daniel-25b236192/"
            target="_blank"
            underline="none"
          >
            <Button
              variant="outlined"
              sx={{
                borderColor: "#ff0055",
                color: "#ff0055",
                "&:hover": {
                  backgroundColor: "#ff0055",
                  color: "#fff",
                  borderColor: "#ff0055",
                },
              }}
              startIcon={<LinkedInIcon />}
            >
              Connect on LinkedIn
            </Button>
          </Link>
        </Box>
      </Stack>
    </Box>
  );
};

export default About;
