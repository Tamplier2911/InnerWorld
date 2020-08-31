import './App.scss';
import React from 'react';

// routing
import { Switch, Route } from 'react-router-dom';

// redux

// pages
import HomePage from './pages/HomePage/HomePage.jsx';
import CheckPage from './pages/CheckPage/CheckPage.jsx';
import TabsPage from './pages/TabsPage/TabsPage.jsx';

// components
import Header from './components/Header/Header.jsx';
import Menu from './components/Menu/Menu.jsx';

// mui
import { Container, Grid, Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: '85vh',
    position: 'relative',
  },
  gridcontainer: {
    minHeight: '80vh',
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div>
      <Header />
      <Box component="main">
        <Container className={classes.container} maxWidth="lg">
          {/* <Grid className={classes.gridcontainer} container> */}
          {/* <Grid item xs={2}> */}
          {/* <Box component="div"> */}
          <Menu />
          {/* </Box> */}
          {/* </Grid> */}
          {/* <Grid item xs={10}> */}
          {/* <Box component="div"> */}
          <Switch>
            <Route exact path="/page-2" component={CheckPage} />
            <Route exact path="/page-3" component={TabsPage} />
            <Route exact path="/" component={HomePage} />
          </Switch>
          {/* </Box> */}
          {/* </Grid> */}
          {/* </Grid> */}
        </Container>
      </Box>
      <footer></footer>
    </div>
  );
};

export default App;
