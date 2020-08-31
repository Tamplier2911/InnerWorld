import './Header.scss';
import React from 'react';

// mui
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Typography,
  makeStyles,
} from '@material-ui/core';

// dynamic text change
import { useLocation } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  text: {
    justifySelf: 'center',
  },
  btn: {
    fontSize: '1.6rem',
  },
  toolbarLeft: {},
  toolbarMid: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  toolbarRight: {},
}));

const Header = () => {
  const { btn, toolbarLeft, toolbarMid, toolbarRight } = useStyles();
  const { pathname } = useLocation();

  const getLocationText = (pathname) => {
    return pathname === '/'
      ? 'Page - 1'
      : pathname === '/page-2'
      ? 'Page - 2'
      : pathname === '/page-3'
      ? 'Page - 3'
      : 'Page - 1';
  };

  return (
    <Box component="div">
      <AppBar position="static">
        <Toolbar>
          <Box className={toolbarLeft} component="div">
            <Typography variant="h4" component="span">
              WorldIn
            </Typography>
          </Box>
          <Box className={toolbarMid} component="div">
            <Typography variant="h5" component="span">
              {getLocationText(pathname)}
            </Typography>
          </Box>
          <Box className={toolbarRight} component="div">
            <Button className={btn} size="large" color="inherit">
              Login
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
