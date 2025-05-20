
import React, { useMemo, useState } from 'react';
import { ThemeProvider, CssBaseline, Container } from '@mui/material';
import { lightTheme, darkTheme } from './Component/Theme.jsx';
import Navbar from './Component/Navbar.jsx';
import Home from './Component/Home.jsx';

function App() {
  const [mode, setMode] = useState('light');

  const theme = useMemo(() => (mode === 'light' ? lightTheme : darkTheme), [mode]);

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar mode={mode} toggleTheme={toggleTheme} />
      <Container sx={{ mt: 4 }}>
        {/* Page content can go here */}
      </Container>
      <Home />
    </ThemeProvider>
  );
}

export default App;
