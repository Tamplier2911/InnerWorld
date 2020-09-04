import React from 'react';

import { Box, makeStyles } from '@material-ui/core';

// components
import LoginForm from '../../components/LoginForm/LoginForm.jsx';

// styles
import homePageStyles from './homePageStyles.js';
const useStyles = makeStyles(homePageStyles);

const HomePage = () => {
  const { homepage } = useStyles();

  return (
    <Box className={homepage} component="section" id="homepage">
      <LoginForm />
    </Box>
  );
};

export default HomePage;
