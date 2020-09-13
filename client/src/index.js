import './index.scss';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

// redux
// import { Provider } from 'react-redux';
// import { store } from './redux/store.js';

// context
import { InfoContext } from './contexts/infoContext.js';
import { AuthContext } from './contexts/authContext.js';
import { UsersContext } from './contexts/usersContext.js';

// routing
import { BrowserRouter } from 'react-router-dom';

// generator function runtime - e.g. async / await enabler
import 'core-js/stable';
import 'regenerator-runtime/runtime';

// db
import WebSQL from './database/WebSQL.js';
import webSqlConfig from './database/webSqlConfig.js';

// initialize db or load, if already created
const db = new WebSQL(...webSqlConfig);

ReactDOM.render(
  // <StrictMode>
  // <Provider store={store}>
  <InfoContext>
    <AuthContext>
      <UsersContext {...{ db }}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UsersContext>
    </AuthContext>
  </InfoContext>,
  // </Provider>
  // </StrictMode>
  document.getElementById('root')
);
