import React, { useState } from 'react';

// components
import TabPanel from '../TabPanel/TabPanel.jsx';
import CreateForm from '../CreateForm/CreateForm.jsx';
import UsersHolder from '../UsersHolder/UsersHolder.jsx';

// mui
import { Box, makeStyles, Paper, Tabs, Tab } from '@material-ui/core';

// styles
import tabsHolderStyles from './TabsHolderStyles.js';
const useStyles = makeStyles(tabsHolderStyles);

const TabsHolder = () => {
  const { container, paper, tabs, tab } = useStyles();

  const [value, setValue] = useState(0);
  const [edit, setEdit] = useState({ mode: false, obj: null });

  const onTabClick = (e, value) => {
    setValue(value);
    if (value === 1) setEdit({ mode: false, obj: null });
  };

  return (
    <Box className={container} component="div">
      <Paper className={paper} elevation={4}>
        <Tabs
          className={tabs}
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={onTabClick}
          aria-label="create new user or browse all"
          centered
        >
          <Tab className={tab} label="Add"></Tab>
          <Tab className={tab} label="Browse"></Tab>
        </Tabs>
        <TabPanel value={value} index={0}>
          <CreateForm edit={edit} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <UsersHolder setValue={setValue} setEdit={setEdit} />
        </TabPanel>
      </Paper>
    </Box>
  );
};

export default TabsHolder;
