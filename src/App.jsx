
import React, { useMemo, useState } from 'react';
import { ThemeProvider, CssBaseline, Container } from '@mui/material';
import { lightTheme, darkTheme } from './Component/Theme.jsx';
import Navbar from './Component/Navbar.jsx';
import Home from './Component/Home.jsx';
import About from './Component/About.jsx';
import MySkills from './Component/MySkils.jsx';
import ProjectCarousel from './Component/ProjectCarousel.jsx';
import MyEducation from './Component/MyEducation.jsx';
import Certifications from './Component/Certifications.jsx';
import Resume from './Component/Resume.jsx';
import Contact from './Component/Contact.jsx';
import Footer from './Component/Footer.jsx';

function App() {
  const [mode, setMode] = useState('dark');

  const theme = useMemo(() => (mode === 'light' ? lightTheme : darkTheme), [mode]);

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar mode={mode} toggleTheme={toggleTheme} />
      <>
        <Home />
        <About />
        <MySkills />
        <ProjectCarousel />
        <MyEducation />
        <Certifications />
        <Resume />
        <Contact />
        <Footer />
      </>
      
    </ThemeProvider>
  );
}

export default App;
