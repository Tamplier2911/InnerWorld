import './HomePage.scss';
import React from 'react';

import { Box, makeStyles, Button } from '@material-ui/core';

// components
import LoginForm from '../../components/LoginForm/LoginForm.jsx';

const useStyles = makeStyles((theme) => ({
  homepage: {
    height: '85vh',
    display: 'flex',
    padding: '8px 0px',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    fontSize: '1.6rem',
  },
}));

const HomePage = () => {
  const { homepage, btn } = useStyles();

  return (
    <Box className={homepage} component="section" id="homepage">
      <LoginForm />
    </Box>
  );
};

export default HomePage;
