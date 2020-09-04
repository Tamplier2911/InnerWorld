import React from 'react';

// mui
import { Box, makeStyles, CircularProgress } from '@material-ui/core';

// styles
import spinnerStyles from './SpinnerStyles.js';
const useStyles = makeStyles(spinnerStyles);

const Spinner = () => {
  const { container } = useStyles();

  return (
    <Box className={container} component="div">
      <CircularProgress color="primary" />
    </Box>
  );
};

export default Spinner;
