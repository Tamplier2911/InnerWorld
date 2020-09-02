import './TabsPage.scss';
import React from 'react';

// mui
import { Box, makeStyles, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  tabspage: {
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

const TabsPage = () => {
  const { tabspage, btn } = useStyles();
  return (
    <Box className={tabspage} component="section" id="tabspage">
      Tabs Page
    </Box>
  );
};

export default TabsPage;
