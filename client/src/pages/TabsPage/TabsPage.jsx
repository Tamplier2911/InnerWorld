import React from 'react';

// components
import TabsHolder from '../../components/TabsHolder/TabsHolder.jsx';

// mui
import { Box, makeStyles } from '@material-ui/core';

// styles
import tabsPageStyles from './TabsPageStyles.js';
const useStyles = makeStyles(tabsPageStyles);

const TabsPage = () => {
  const { tabspage } = useStyles();
  return (
    <Box className={tabspage} component="section" id="tabspage">
      <TabsHolder />
    </Box>
  );
};

export default TabsPage;
