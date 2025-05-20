import React, { useState } from 'react';
import whiteImg from '../assets/Sign_white.png';
import darkImg from '../assets/Sign_black.png';
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Modal,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Link as ScrollLink } from 'react-scroll';

const pages = [
  'Home',
  'About',
  'Skills',
  'Projects',
  'Education',
  'Certifications',
  'Resume',
  'Contact',
];

function Navbar({ mode, toggleTheme }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [menuOpen, setMenuOpen] = useState(false);

  const navItemStyles = {
    color: mode === 'dark' ? 'white' : 'black',
    cursor: 'pointer',
    textDecoration: 'none',
    fontSize: '1.5rem',
    fontWeight: 500,
    margin: '15px 0',
  };

  return (
    <>
      <AppBar className='nav-bar'
        position="sticky"
        sx={{
          backgroundColor: mode === 'dark' ? '#000000 !important' : '#ffff',
          color: mode === 'dark' ? 'white' : 'black',
          zIndex: 1300,
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Logo */}
          <img
            src={mode == 'dark' ? whiteImg : darkImg}
            alt="Logo"
            style={{ width: '100px', height: 'auto', padding: '10px' }}
          />

          {/* Desktop Nav */}
          {!isMobile && (
            <Box className='nav-items' sx={{ display: 'flex', gap: 10 }}>
              {pages.map((page) => (
                <ScrollLink
                  key={page}
                  to={page}
                  smooth={true}
                  duration={500}
                  offset={-90}
                  spy={true}
                  style={navItemStyles}
                  activeClass="active"
                >
                  {page}
                </ScrollLink>
              ))}
            </Box>
          )}

          {/* Theme + Menu */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton color="inherit" onClick={toggleTheme}>
              {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>

            {isMobile && (
              <IconButton color="inherit" onClick={() => setMenuOpen(true)}>
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Modal-style menu for mobile */}
      <Modal
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        className='pop-up-ham'
      >
        <Box
          sx={{
            backgroundColor: mode === 'dark' ? '#1e1e1e' : '#fff',
            color: mode === 'dark' ? 'white' : 'black',
            p: 4,
            borderRadius: 2,
            boxShadow: 24,
            minWidth: 250,
            textAlign: 'center',
            position: 'relative',
          }}
        >
          {/* Close Button */}
          <IconButton
            onClick={() => setMenuOpen(false)}
            sx={{ position: 'absolute', top: 10, right: 10 }}
          >
            <CloseIcon />
          </IconButton>

          {pages.map((page) => (
            <ScrollLink
              key={page}
              to={page}
              smooth={true}
              duration={500}
              offset={-90}
              spy={true}
              style={navItemStyles}
              onClick={() => setMenuOpen(false)} // 👈 closes modal
            >
              {page}
            </ScrollLink>
          ))}
        </Box>
      </Modal>
    </>
  );
}

export default Navbar;
