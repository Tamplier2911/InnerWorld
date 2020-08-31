import './CheckPage.scss';
import React from 'react';

// mui
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  checkpage: {
    height: '85vh',
    display: 'flex',
    padding: '8px 0px',
    marginLeft: '26rem',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  btn: {
    fontSize: '1.6rem',
  },
}));

const CheckPage = () => {
  const { checkpage, btn } = useStyles();
  return (
    <Box className={checkpage} component="section">
      Check Page
    </Box>
  );
};

export default CheckPage;
