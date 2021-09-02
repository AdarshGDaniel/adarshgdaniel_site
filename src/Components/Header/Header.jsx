import React from 'react';
import './Header.css'
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function Header(props) {
  return (
    <nav className="nav-pos">
      <HideOnScroll {...props}>
        <AppBar className="nav-main">
          <Toolbar className="nav-content">
            <Typography variant="h6">Adarsh G Daniel</Typography>
            <Typography variant="h7">Work</Typography>
            <Typography variant="h7">Certifications</Typography>
            <Typography variant="h7">Education</Typography>
            <Typography variant="h7">Contact</Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </nav>
  );
}
