import './index.scss';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

// routing
import { BrowserRouter } from 'react-router-dom';

// generator function runtime - e.g. async / await enabler
import 'core-js/stable';
import 'regenerator-runtime/runtime';

// redux
import { Provider } from 'react-redux';
import { store } from './redux/store.js';

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);
