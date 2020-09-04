import React, { useState } from 'react';

// mui
import { Box, makeStyles } from '@material-ui/core';

// styles
import tabPnaleStyles from './TabPanelStyles.js';
const useStyles = makeStyles(tabPnaleStyles);

const TabPanel = ({ children, value, index, ...other }) => {
  const { container } = useStyles();
  return (
    <Box
      className={container}
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tabpanel-label-${index}`}
      {...other}
    >
      {value === index ? <Box className={container}>{children}</Box> : null}
    </Box>
  );
};

export default TabPanel;
