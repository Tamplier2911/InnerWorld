import './Menu.scss';
import React from 'react';

// router
import { useLocation, useHistory } from 'react-router-dom';

// mui
import { MenuList, MenuItem, Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  box: {
    position: 'fixed',
    minWidth: '25rem',
  },
  menuitem: {
    fontSize: '1.6rem',
    justifyContent: 'center',
    transition: 'color .3s, background-color .3s',
  },
  selected: {
    fontSize: '1.6rem',
    justifyContent: 'center',
    backgroundColor: 'var(--cl-selected)',
    transition: 'color .3s, background-color .3s',
  },
}));

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
          className={getRespectiveClass('/', pathname)}
          onClick={() => history.push('/')}
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
