import React from 'react';
import { useHistory } from 'react-router-dom';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { logUserOut } from '../../redux/auth/auth.actions';

// mui
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Typography,
  makeStyles,
  Avatar,
} from '@material-ui/core';

// dynamic text change
import { useLocation } from 'react-router-dom';

// styles
import headerStyles from './HeaderStyles.js';
const useStyles = makeStyles(headerStyles);

const Header = () => {
  const { btn, toolbarLeft, toolbarMid, toolbarRight } = useStyles();
  const { pathname } = useLocation();
  const history = useHistory();

  // redux
  const { isLogged, authObject } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const getLocationText = (pathname) => {
    return pathname === '/page-1'
      ? 'Page - 1'
      : pathname === '/page-2'
      ? 'Page - 2'
      : pathname === '/page-3'
      ? 'Page - 3'
      : 'Home Page';
  };

  return (
    <Box component="div">
      <AppBar position="static">
        <Toolbar>
          <Box className={toolbarLeft} component="div">
            {isLogged ? (
              <Avatar alt={authObject?.name} src={authObject?.photo} />
            ) : null}
            <Typography variant={isLogged ? 'h5' : 'h4'} component="span">
              {isLogged ? authObject?.name : 'WorldIn'}
            </Typography>
          </Box>
          <Box className={toolbarMid} component="div">
            <Typography variant="h5" component="span">
              {getLocationText(pathname)}
            </Typography>
          </Box>
          <Box className={toolbarRight} component="div">
            <Button
              className={btn}
              size="large"
              color="inherit"
              onClick={() =>
                isLogged
                  ? dispatch(logUserOut()) && history.push('/')
                  : history.push('/')
              }
            >
              {isLogged ? 'Logout' : 'Login'}
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
