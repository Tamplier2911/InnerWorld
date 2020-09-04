import './App.scss';
import React from 'react';

// routing
import { Switch, Route, Redirect } from 'react-router-dom';

// redux
import { useSelector } from 'react-redux';

// pages
import HomePage from './pages/HomePage/HomePage.jsx';
import PopupPage from './pages/PopupPage/PopupPage.jsx';
import CheckPage from './pages/CheckPage/CheckPage.jsx';
import TabsPage from './pages/TabsPage/TabsPage.jsx';

// components
import Header from './components/Header/Header.jsx';
import Menu from './components/Menu/Menu.jsx';
import InfoBar from './components/InfoBar/InfoBar.jsx';

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
  const { isLogged } = useSelector((state) => state.auth);

  return (
    <div>
      <Header />
      <Box component="main">
        <Container className={classes.container} maxWidth="lg">
          <Menu />
          <Switch>
            <Route
              exact
              path="/page-1"
              render={() => (isLogged ? <PopupPage /> : <HomePage />)}
            />
            <Route
              exact
              path="/page-2"
              render={() => (isLogged ? <CheckPage /> : <HomePage />)}
            />
            <Route
              exact
              path="/page-3"
              render={() => (isLogged ? <TabsPage /> : <HomePage />)}
            />
            <Route
              exact
              path="/"
              render={() =>
                isLogged ? <Redirect to="/page-1" /> : <HomePage />
              }
            />
          </Switch>
          <InfoBar />
        </Container>
      </Box>
      <footer></footer>
    </div>
  );
};

export default App;
