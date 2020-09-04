import React from 'react';

// components
import TableHolder from '../../components/TableHolder/TableHolder.jsx';

// mui
import { Box, makeStyles } from '@material-ui/core';

// styles
import checkPageStyles from './CheckPageStyles.js';
const useStyles = makeStyles(checkPageStyles);

const CheckPage = () => {
  const { checkpage } = useStyles();
  return (
    <Box className={checkpage} component="section" id="checkpage">
      <TableHolder />
    </Box>
  );
};

export default CheckPage;
