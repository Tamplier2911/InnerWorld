import React from 'react';

// router
import { useLocation, useHistory } from 'react-router-dom';

// mui
import { MenuList, MenuItem, Box, makeStyles } from '@material-ui/core';

// styles
import menuStyles from './MenuStyles.js';
const useStyles = makeStyles(menuStyles);

const Menu = () => {
  const { box, menuitem, selected } = useStyles();
  const { pathname } = useLocation();
  const history = useHistory();

  const getRespectiveClass = (path, pathname) => {
    return path === pathname ? selected : menuitem;
  };

  return (
    <Box className={box} component="div" id="menu">
      <MenuList>
        <MenuItem
          className={getRespectiveClass('/page-1', pathname)}
          onClick={() => history.push('/page-1')}
        >
          Page 1
        </MenuItem>
        <MenuItem
          className={getRespectiveClass('/page-2', pathname)}
          onClick={() => history.push('/page-2')}
        >
          Page 2
        </MenuItem>
        <MenuItem
          className={getRespectiveClass('/page-3', pathname)}
          onClick={() => history.push('/page-3')}
        >
          Page 3
        </MenuItem>
      </MenuList>
    </Box>
  );
};

export default Menu;
