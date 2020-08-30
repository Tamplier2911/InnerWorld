import './App.scss';
import React from 'react';

// routing
import { Switch, Route, Link } from 'react-router-dom';

// redux

// components
import HomePage from './pages/HomePage/HomePage.jsx';
import PopupPage from './pages/PopupPage/PopupPage.jsx';
import CheckPage from './pages/CheckPage/CheckPage.jsx';
import TabsPage from './pages/TabsPage/TabsPage.jsx';

const App = () => {
  return (
    <div>
      <header></header>
      <main>
        <Switch>
          <Route exact path="/page-1" component={PopupPage} />
          <Route exact path="/page-2" component={CheckPage} />
          <Route exact path="/page-3" component={TabsPage} />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </main>
      <footer>
        <Link to="/page-1">Page 1</Link>
        <Link to="/page-2">Page 2</Link>
        <Link to="/page-3">Page 3</Link>
      </footer>
    </div>
  );
};

export default App;
