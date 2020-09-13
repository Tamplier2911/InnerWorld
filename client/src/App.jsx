import React, {
  useEffect,
  useContext,
  // useCallback,
  Suspense,
  lazy,
} from 'react';

// routing
import { Switch, Route, Redirect } from 'react-router-dom';

// redux
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchAllUsers } from './redux/users/users.actions.js';

// context providers
import { ListContext } from './contexts/listContext.js';
import { TableContext } from './contexts/tableContext.js';

// context consumers
import AuthContext from './contexts/authContext.js';
import UsersContext from './contexts/usersContext.js';
import InfoContext from './contexts/infoContext.js';

// pages
// import HomePage from './pages/HomePage/HomePage.jsx';
// import PopupPage from './pages/PopupPage/PopupPage.jsx';
// import CheckPage from './pages/CheckPage/CheckPage.jsx';
// import TabsPage from './pages/TabsPage/TabsPage.jsx';

const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx'));
const PopupPage = lazy(() => import('./pages/PopupPage/PopupPage.jsx'));
const CheckPage = lazy(() => import('./pages/CheckPage/CheckPage.jsx'));
const TabsPage = lazy(() => import('./pages/TabsPage/TabsPage.jsx'));

// components
import Header from './components/Header/Header.jsx';
import Menu from './components/Menu/Menu.jsx';
import InfoBar from './components/InfoBar/InfoBar.jsx';
import Spinner from './components/Spinner/Spinner.jsx';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.jsx';

// mui
import { Container, Box, makeStyles } from '@material-ui/core';

// styles
import appStyles from './AppStyles.js';
const useStyles = makeStyles(appStyles);

const App = () => {
  const classes = useStyles();

  // redux
  // const { isLogged } = useSelector((state) => state.auth);
  // const dispatch = useDispatch();

  // context
  const { isLogged } = useContext(AuthContext);
  const { fetchAllUsers, createUsersTable } = useContext(UsersContext);
  const { openInfoBar } = useContext(InfoContext);

  // memo
  // const memoizedFetcher = useCallback(() => {
  //   dispatch(fetchAllUsers());
  // }, []);

  // on mount
  useEffect(() => {
    createUsersTable(openInfoBar);
    fetchAllUsers(openInfoBar);
    // memoizedFetcher();
  }, []);

  return (
    <Box component="div">
      <Header />
      <Box component="main">
        <Container className={classes.container} maxWidth="lg">
          <Menu />
          <Switch>
            <ErrorBoundary>
              <Suspense fallback={<Spinner />}>
                <TableContext>
                  <ListContext>
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
                  </ListContext>
                </TableContext>
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
              </Suspense>
            </ErrorBoundary>
          </Switch>
          <InfoBar />
        </Container>
      </Box>
      <Box component="footer"></Box>
    </Box>
  );
};

export default App;
